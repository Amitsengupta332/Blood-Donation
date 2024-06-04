"use client";
import BDDatePicker from "@/components/Forms/BDDatePicker";
import BDForm from "@/components/Forms/BDForm";
import BDInput from "@/components/Forms/BDInput";
import BDSelectField from "@/components/Forms/BDSelectField";
import { BloodGroups, districts } from "@/types";
import { Grid } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  useGetSingleUserQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/authApi";
import { FieldValues } from "react-hook-form";
import { dateFormatter } from "@/utils/dateFormatter";
import { toast } from "sonner";
import dayjs from "dayjs";

const MyProfile = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { data: userData, isLoading } = useGetSingleUserQuery({});
  const [updateMyProfile] = useUpdateMyProfileMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    setLoading(true);
    values.lastDonationDate = dateFormatter(values.lastDonationDate);
    values.age = Number(values.age);

    // console.log(values);

    try {
      const res = await updateMyProfile({ body: values }).unwrap();

      if (res?.id) {
        toast.success("Profile updated successfully!");
        setLoading(false);
        router.push("/dashboard/user/profile");
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  const defaultValues = {
    name: userData?.name || null,
    email: userData?.email || null,
    // gender: userData?.userProfile?.gender || "MALE",
    bloodType: userData?.bloodType || null,
    age: userData?.userProfile?.age || 0,
    location: userData?.location || null,
    lastDonationDate: userData?.userProfile?.lastDonationDate
      ? dayjs(userData?.userProfile?.lastDonationDate)
      : null,
    bio: userData?.userProfile?.bio || null,
  };

  return (
    <BDForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
      <Grid container spacing={2} sx={{ my: 5 }}>
        <Grid item xs={12} sm={12} md={4}>
          <BDInput name="name" label="Name" fullWidth={true} sx={{ mb: 2 }} />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <BDInput
            name="email"
            type="email"
            label="Email"
            fullWidth={true}
            sx={{ mb: 2 }}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <BDSelectField
            items={BloodGroups}
            name="bloodType"
            label="Blood Group"
            sx={{ mb: 2 }}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <BDInput
            name="age"
            label="Age"
            fullWidth={true}
            type="number"
            sx={{ mb: 2 }}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <BDSelectField
            items={districts}
            name="location"
            label="Address"
            sx={{ mb: 2 }}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <BDDatePicker name="lastDonationDate" label="Last Donation Date" />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <BDInput name="bio" label="Bio" fullWidth={true} sx={{ mb: 2 }} />
        </Grid>
      </Grid>

      <LoadingButton
        size="small"
        type="submit"
        loading={loading}
        variant="contained"
        endIcon={<SaveIcon />}
        loadingPosition="end"
        sx={{
          margin: "10px 0px",
        }}>
        <span>Save</span>
      </LoadingButton>
    </BDForm>
  );
};

export default MyProfile;
