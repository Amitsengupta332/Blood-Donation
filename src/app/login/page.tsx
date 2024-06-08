"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import logo from "@/assets/logo/l.png";
import Link from "next/link";
import BDForm from "@/components/Forms/BDForm";
import BDInput from "@/components/Forms/BDInput";
import { z } from "zod";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLogin } from "@/services/actions/userLogin";
import { useState } from "react";
import { toast } from "sonner";
import { storeUserInfo } from "@/services/auth.services";
import { useRouter } from "next/navigation";

// export const validationSchema = z.object({
//   email: z.string().email("Please enter a valid email address!"),
//   password: z.string().min(6, "Must be at least 6 characters"),
// });
const LoginPage = () => {
  const [error, setError] = useState("");
  // const router = useRouter();
  const handleLogin = async (values: FieldValues) => {
    console.log(values);
    try {
      const res = await userLogin(values);
      console.log({res});
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        // router.push("/");
      } else {
        setError(res?.message);
        toast.error(res?.message);
      }
    } catch (error: any) {
      console.error(error.message);
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
                Login Here
              </Typography>
            </Box>
          </Stack>

          {error && (
            <Box>
              <Typography
                sx={{
                  backgroundColor: "red",
                  padding: "1px",
                  borderRadius: "2px",
                  color: "white",
                  marginTop: "5px",
                }}>
                {error}
              </Typography>
            </Box>
          )}

          <Box>
            <BDForm
              onSubmit={handleLogin}
              // resolver={zodResolver(validationSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}>
              <Grid container spacing={2} my={1}>
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
              </Grid>

              <Typography mb={1} textAlign="end" component="p" fontWeight={300}>
                Forgot Password?
              </Typography>

              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit">
                Login
              </Button>

              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account?{" "}
                <Link color="red" href="/register">
                  Create an account
                </Link>
              </Typography>
            </BDForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
