import BDForm from "@/components/Forms/BDForm";
import BDInput from "@/components/Forms/BDInput";
import BDSelectField from "@/components/Forms/BDSelectField";
import BDFullScreenModal from "@/components/Shared/BDModal/BDFullScreenModal";
import BDModal from "@/components/Shared/BDModal/BDModal";
import { useUpdateUserMutation } from "@/redux/api/userApi";
import { ActiveStatusOption, UserRoleOption } from "@/types";
import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string;
};

const UserModal = ({ open, setOpen, userId }: TProps) => {
  const [updateUser] = useUpdateUserMutation();
  const handleFormSubmit = async (values: FieldValues) => {
    const updateUserInfo = {
      role: values?.role,
      activeStatus: values?.status,
    };

    try {
      const res = await updateUser({
        id: userId,
        body: updateUserInfo,
      }).unwrap();

      if (res?.id) {
        toast.success("User data updated successfully!");
        setOpen(false);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <BDFullScreenModal open={open} setOpen={setOpen} title="Update User Info">
        <BDForm onSubmit={handleFormSubmit}>
          <Grid container spacing={2} my={1}>
            <Grid item xs={12} sm={12} md={6}>
              <BDSelectField
                items={UserRoleOption}
                name="role"
                label="Role"
                sx={{ mt: 0.5 }}
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <BDSelectField
                items={ActiveStatusOption}
                name="status"
                label="Status"
                sx={{ mt: 0.5 }}
                fullWidth={true}
              />
            </Grid>
          </Grid>

          <Button
            sx={{
              margin: "10px 0px",
            }}
            fullWidth={true}
            type="submit">
            Register
          </Button>
        </BDForm>
      </BDFullScreenModal>
    </Container>
  );
};

export default UserModal;
