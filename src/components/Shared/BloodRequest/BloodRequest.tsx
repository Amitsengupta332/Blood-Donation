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

const BloodRequest = () => {
  const [loading, setLoading] = useState(false);
  const { data, isLoading } = useGetSingleUserQuery({});

  const handleRequest = async (values: FieldValues) => {};

  const defaultValues = {
    name: data?.name,
    email: data?.email,
    hospitalName: "",
    hospitalAddress: "",
    reason: "",
    phoneNumber: "",
  };

  return (
    <Container>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5" component="h4" fontWeight={600} sx={{ mb: 1 }}>
          Request For Blood Donate
        </Typography>
        <Box
          sx={{
            backgroundColor: "#878787",
            borderRadius: "8px",
            height: "6px",
            width: "70%",
            mx: "auto",
          }}></Box>
        <Box
          sx={{
            backgroundColor: "#878787",
            borderRadius: "8px",
            height: "6px",
            width: "60%",
            mx: "auto",
            mt: 2,
          }}></Box>
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
            <span>Send Blood Request</span>
          </LoadingButton>
        </BDForm>
      </Box>
    </Container>
  );
};

export default BloodRequest;
