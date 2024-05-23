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

const RegisterPage = () => {
  const handleRegister = () => {};
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
            {/* <BBForm onSubmit={handleRegister}></BBForm> */}
            <form>
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                  {/* <BBInput label="Name" fullWidth={true}  name="name" /> */}
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                  {/* <BBInput label="Name" fullWidth={true}  name="name" /> */}
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                  {/* <BBInput label="Name" fullWidth={true}  name="name" /> */}
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Blood Type"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                  {/* <BBInput label="Name" fullWidth={true}  name="name" /> */}
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Location"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                  {/* <BBInput label="Name" fullWidth={true}  name="name" /> */}
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
              <Typography component="p" fontWeight={300}>
                Do you already have an account? <Link href="/login">Login</Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
