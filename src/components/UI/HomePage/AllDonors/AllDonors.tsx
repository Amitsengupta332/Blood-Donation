"use client";
import DonorCard from "@/components/Shared/DonorCard/DonorCard";
import { useGetAllDonorsQuery } from "@/redux/api/userApi";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

const AllDonors = () => {
  const { data, isLoading } = useGetAllDonorsQuery({});
  // console.log(data);

  const donors = data?.donors;
  const meta = data?.meta;

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 8 }}>
      <Container>
        <Box textAlign="center">
          <Typography variant="h3" fontWeight={600}>
            Meet Our Donors
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            {isLoading ? (
              <Typography>Loading...</Typography>
            ) : (
              donors &&
              donors.slice(0, 6).map((item, index) => (
                <Grid item key={item.id} xs={12} sm={12} md={4}>
                  <DonorCard item={item} />
                </Grid>
              ))
            )}
          </Grid>
        </Box>
        <Box sx={{ mx: "auto", textAlign: "center" }}>
          <Link href="/Donors">
            <Button
              sx={{
                margin: "0px 10px",
              }}
              fullWidth={false}>
              See All
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default AllDonors;
