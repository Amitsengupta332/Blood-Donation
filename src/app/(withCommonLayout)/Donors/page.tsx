"use client"
import DonorCard from "@/components/Shared/DonorCard/DonorCard";
import { useGetAllDonorsQuery } from "@/redux/api/userApi";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const AllDonorsPage = () => {
    const { data, isLoading } = useGetAllDonorsQuery({});
    // console.log(data);
  
    const donors = data?.donors;
    const meta = data?.meta;
  return (
    <Container>
      <Box textAlign="center">
        <Typography variant="h3" fontWeight={600}>
          Meet Our Donors
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            {isLoading ? (
              <Typography>Loading...</Typography>
            ) : (
              donors &&
              donors.map((item, index) => (
                <Grid item key={item.id} xs={12} sm={12} md={4}>
                  <DonorCard item={item} />
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default AllDonorsPage;
