import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import avatar from "@/assets/svgs/avatar.svg";

type TParams = {
  params: {
    donorId: string;
  };
};

const DonorDetails = ({ params }: TParams) => {
  return (
    <Container>
      <Box
        sx={{
          my: 4,
          backgroundColor: "#f3f3f9",
          borderRadius: "8px",
          py: 6,
          px: 4,
        }}>
        <Grid spacing={{ md: 2, sm: 5, xs: 5 }} container>
          <Grid item md={8} sm={12} xs={12}>
            <Stack direction="row" spacing={2}>
              <Box
                sx={{
                  border: `3px solid #dbdbdb`,
                  borderRadius: "50%",
                  padding: "10px",
                  height: "75px",
                }}>
                <Image src={avatar} alt="avatar" height={50} width={50} />
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ fontWeight: 600 }}>
                  {/* {data?.name} */}
                </Typography>
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ fontWeight: 600, mr: 1 }}>
                      Email:
                    </Typography>
                    {/* {data?.email} */}
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Grid>

          <Grid item md={3} sm={12} xs={12}>
            <Button
              sx={{
                margin: "10px 0px",
              }}
              fullWidth={false}
              type="submit">
              Edit Profile
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default DonorDetails;
