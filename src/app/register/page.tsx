"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/assets/logo/l.png";
import Link from "next/link";
import BDForm from "@/components/Forms/BDForm";
import BDInput from "@/components/Forms/BDInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import BDSelectField from "@/components/Forms/BDSelectField";
import { BloodGroups, DonateOption, districts } from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const ValidationSchema = z.object({
  name: z.string().min(1, "Please enter you name!"),
  email: z.string().email("Please enter a valid email address!"),
  address: z.string().min(1, "Please enter your addresss!"),
  password: z.string().min(6, "Must be at least 6 charecters!"),
  confirmPassword: z.string().min(6, "Must be at least 6 charecters!"),
  bloodType: z.string().min(1, "Please select a blood group!"),
  donateOption: z.string().min(1, "Please select a option!"),
  age: z.string().min(1, "Please enter your age!"),
});
const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  bloodType: "",
  donateOption: "",
  address: "",
  age: 0,
};

const RegisterPage = () => {
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const router = useRouter();
  const handleRegister = async (values: FieldValues) => {
    if (values?.password !== values?.confirmPassword) {
      toast.error("Password does not match!");
      return;
    }

    const registerUserData = {
      name: values?.name,
      email: values?.email,
      password: values?.password,
      bloodType: values?.bloodType,
      location: values?.address,
      age: Number(values?.age),
      bio: "Create your bio here ...",
      availability: values?.donateOption === "YES" ? true : false,
    };

    try {
      // const res = await registerUser(registerUserData);
      // console.log(res);
      // // register user direct login functionality
      // if (res?.data?.id) {
      //   toast.success("User registered successfully!");
      //   const result = await userLogin({
      //     password: values.password,
      //     email: values.email,
      //   });
      //   if (result?.data?.accessToken) {
      //     storeUserInfo({ accessToken: result?.data?.accessToken });
      //     // router.push("/");
      //   }
      // }
    } catch (err: any) {
      console.log(err.message);
    }

  };
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Box>
              <Image src={logo} width={150} height={200} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Register Here
              </Typography>
            </Box>
          </Stack>
          <Box>
            <BDForm
              onSubmit={handleRegister}
              resolver={zodResolver(ValidationSchema)}
              defaultValues={defaultValues}>
              <Grid container spacing={2} my={1}>
                {/* name */}
                <Grid item xs={12} sm={12} md={6}>
                  <BDInput label="Name" fullWidth={true} name="name" />
                </Grid>
                {/* email */}
                <Grid item xs={12} sm={12} md={6}>
                  <BDInput
                    label="Email"
                    type="email"
                    name="email"
                    fullWidth={true}
                  />
                </Grid>
                {/* pass */}
                <Grid item xs={12} sm={12} md={6}>
                  <BDInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>
                {/* con passs */}
                <Grid item xs={12} sm={12} md={6}>
                  <BDInput
                    label="Confirm Password"
                    type="password"
                    fullWidth={true}
                    name="confirmPassword"
                    // onBlur={handleConfirmPasswordBlur}
                  />
                </Grid>

                {/* address */}
                <Grid item xs={12} sm={12} md={12}>
                  <BDSelectField
                    label="Address"
                    name="address"
                    items={districts}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <BDSelectField
                    items={BloodGroups}
                    name="bloodType"
                    label="Blood Group"
                    sx={{ mt: 0.5 }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <BDSelectField
                    items={DonateOption}
                    name="donateOption"
                    label="Want to donate blood?"
                    sx={{ mt: 0.5 }}
                  />
                </Grid>

                {/* <Grid item xs={12} sm={12} md={6}>
                  <ControlledDatePicker
                    name="lastDonationDate"
                    label="Last Donation Date"
                    sx={{ mt: 0.5 }}
                  />
                </Grid> */}
                <Grid item xs={12} sm={12} md={6}>
                  <BDInput
                    label="Age"
                    fullWidth={true}
                    name="age"
                    sx={{ mt: 0.5 }}
                    type="number"
                  />
                </Grid>
              </Grid>

              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
                disabled={isButtonDisabled}>
                Register
              </Button>

              <Typography component="p" fontWeight={300}>
                Do you already have an account?{" "}
                <Link href="/login">Login Here</Link>
              </Typography>

              {/* {passwordMatchError && (
                <Typography color="error" variant="body2">
                  Passwords do not match.
                </Typography>
              )} */}
            </BDForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
