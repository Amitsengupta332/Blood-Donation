"use client";
import BDDatePicker from "@/components/Forms/BDDatePicker";
import BDForm from "@/components/Forms/BDForm";
import BDInput from "@/components/Forms/BDInput";
import { useGetSingleUserQuery } from "@/redux/api/authApi";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import { useCreateRequestForDonateBloodMutation } from "@/redux/api/requestApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { toast } from "sonner";

interface IProps {
  donorId: string;
}

const BloodRequest = ({ donorId }: IProps) => {
  const [loading, setLoading] = useState(false);
  const [createRequestForDonateBlood] =
    useCreateRequestForDonateBloodMutation();
  const { data, isLoading } = useGetSingleUserQuery({});

  const handleRequest = async (values: FieldValues) => {
    console.log(values);
    setLoading(true);

    const requestData = {
      donorId: donorId,
      phoneNumber: values?.phoneNumber,
      dateOfDonation: dateFormatter(values?.dateOfDonation),
      hospitalName: values?.hospitalName,
      hospitalAddress: values?.hospitalAddress,
      reason: values?.reason,
    };
    try {
      const res = await createRequestForDonateBlood(requestData).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Your request sent successfully!");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const defaultValues = {
    name: data?.name,
    email: data?.email,
    hospitalName: "",
    hospitalAddress: "",
    reason: "",
    phoneNumber: "",
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5" component="h4" fontWeight={600} sx={{ mb: 1 }}>
          Request For Blood Donate
        </Typography>
      </Box>

      <Box sx={{ width: "70%", mx: "auto", mt: 4 }}>
        <BDForm
          onSubmit={handleRequest}
          //   resolver={zodResolver(ValidationSchema)}
          defaultValues={defaultValues}>
          <Grid container spacing={2} my={1}>
            <Grid item xs={12} sm={12} md={6}>
              <BDInput label="Name" fullWidth={true} name="name" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <BDInput
                label="Email"
                type="email"
                name="email"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <BDInput label="Hospital" fullWidth={true} name="hospitalName" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <BDInput
                label="Hospital Address"
                fullWidth={true}
                name="hospitalAddress"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <BDInput label="Reason Of Blood" fullWidth={true} name="reason" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <BDDatePicker
                name="dateOfDonation"
                label="Date Of Donation"
                sx={{ mt: 0.5 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <BDInput
                label="Contack Number"
                type="number"
                name="phoneNumber"
                fullWidth={true}
              />
            </Grid>
          </Grid>

          {/* <Button
              sx={{
                margin: "10px 0px",
              }}
              fullWidth={true}
              type="submit"
              // disabled={isButtonDisabled}
            >
              Send Blood Request
            </Button> */}

          <LoadingButton
            size="small"
            type="submit"
            loading={loading}
            variant="contained"
            fullWidth={true}
            endIcon={<SendIcon />}
            loadingPosition="end"
            sx={{
              margin: "10px 0px",
            }}>
            Send Blood Request
          </LoadingButton>
        </BDForm>
      </Box>
    </Container>
  );
};

export default BloodRequest;
