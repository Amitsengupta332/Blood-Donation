import BDForm from "@/components/Forms/BDForm";
import BDInput from "@/components/Forms/BDInput";
import BDSelectField from "@/components/Forms/BDSelectField";
import BDModal from "@/components/Shared/BDModal/BDModal";
import { useUpdateRequestStatusMutation } from "@/redux/api/requestApi";
import { RequestStatusOption } from "@/types";
import { Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  requestId: string;
  requestStatus: string;
  donateDate: string;
};

const StatusEditModal = ({
  open,
  setOpen,
  requestStatus,
  requestId,
  donateDate,
}: TProps) => {
  const [updateRequestStatus] = useUpdateRequestStatusMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const updatedInfo = {
      requestStatus: values?.status,
    };
    console.log(updatedInfo);

    try {
      const res = await updateRequestStatus({
        id: requestId,
        body: updatedInfo,
      }).unwrap();
      console.log(res);

      if (res?.id) {
        toast.success("Request updated successfully!");
        setOpen(false);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <BDModal open={open} setOpen={setOpen} title="Update Request Status">
        <BDForm onSubmit={handleFormSubmit}>
          <Grid container spacing={2} my={1}>
            <Grid item xs={12} sm={12} md={12}>
              <BDInput
                label={`Donate Date: ${donateDate}`}
                fullWidth={true}
                name="dateOfDonation"
                disabled={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <BDSelectField
                items={RequestStatusOption}
                name="status"
                label="Status"
                sx={{ mt: 0.5 }}
                fullWidth={true}
              />
            </Grid>
          </Grid>
        </BDForm>
      </BDModal>
    </div>
  );
};

export default StatusEditModal;
