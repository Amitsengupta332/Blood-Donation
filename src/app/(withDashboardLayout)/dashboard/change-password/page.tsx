"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import PasswordIcon from "@mui/icons-material/Password";
import BDForm from "@/components/Forms/BDForm";
import BDInput from "@/components/Forms/BDInput";
import { FieldValues } from "react-hook-form";

const ChangePassword = () => {
  const handleChangePassword = async (values: FieldValues) => {};
  return (
    <Container>
      <Stack
        sx={{
          mt: 4,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            p: 4,
            textAlign: "center",
          }}>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Box>
              <PasswordIcon sx={{ color: "primary.main", fontSize: 70 }} />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Change Password
              </Typography>
            </Box>
          </Stack>

          <Box>
            <BDForm
              onSubmit={handleChangePassword}
              defaultValues={{
                oldPassword: "",
                newPassword: "",
                confirmPassword: "",
              }}>
              <Grid container spacing={2} my={1}>
                <Grid item xs={12} sm={12} md={12}>
                  <BDInput
                    name="oldPassword"
                    label="Old Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <BDInput
                    name="newPassword"
                    label="New Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <BDInput
                    label="Confirm Password"
                    type="password"
                    fullWidth={true}
                    name="confirmPassword"
                    // onBlur={handleConfirmPasswordBlur}
                  />
                </Grid>
              </Grid>

              <Button
                sx={{
                  margin: "5px 0px",
                }}
                fullWidth={true}
                type="submit">
                Change Password
              </Button>
            </BDForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default ChangePassword;
