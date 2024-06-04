"use client";
import { Box, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import RoomIcon from "@mui/icons-material/Room";
import WorkspacesIcon from "@mui/icons-material/Workspaces";

const Maps = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 8 }}> {/* Set your desired background color here */}
      <Container maxWidth="lg">
        <Stack direction={"column"} spacing={2} my={5} alignItems="center">
          <Typography variant="h4" fontWeight={700} textAlign="center">
            Join Our Life-saving Network
          </Typography>
          <Typography component={"p"} fontWeight={500} textAlign="center" maxWidth={isSmallScreen ? "100%" : "600px"}>
            Be a part of a dedicated community committed to saving lives through blood donation.
          </Typography>
        </Stack>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Stack alignItems={"center"} spacing={2} textAlign="center">
              <GroupIcon sx={{ height: "80px", width: "80px", color: theme.palette.primary.main }} />
              <Typography variant="h6" fontWeight={700}>
                500+ Donors
              </Typography>
              <Typography component={"p"}>
                Over 500 active donors are ready to help save lives.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack alignItems={"center"} spacing={2} textAlign="center">
              <RoomIcon sx={{ height: "80px", width: "80px", color: theme.palette.primary.main }} />
              <Typography variant="h6" fontWeight={700}>
                Nationwide Coverage
              </Typography>
              <Typography component={"p"}>
                We cover all 64 districts in Bangladesh, ensuring help is always nearby.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack alignItems={"center"} spacing={2} textAlign="center">
              <WorkspacesIcon sx={{ height: "80px", width: "80px", color: theme.palette.primary.main }} />
              <Typography variant="h6" fontWeight={700}>
                All Blood Types
              </Typography>
              <Typography component={"p"}>
                Support for all 8 blood types to cater to everyone&apos;s needs.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Maps;
