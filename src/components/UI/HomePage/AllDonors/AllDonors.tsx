"use client";
import { useGetAllDonorsQuery } from "@/redux/api/userApi";
import { Box, Container, Grid, Typography } from "@mui/material";

const AllDonors = () => {
  const { data, isLoading } = useGetAllDonorsQuery({});
//   console.log(data);

  const donors = data?.donors;
  const meta = data?.meta;


  return (
    <Container>
      <Box textAlign="center">
        <Typography variant="h3" fontWeight={600}>
          Meet Our Donors
        </Typography>
      </Box>

      {/* <Box sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            {isLoading ? (
              <DonorLoadingPage />
            ) : (
              donors &&
              donors.slice(0, 6).map((item, index) => (
                <Grid item key={item.id} xs={12} sm={12} md={4}>
                  <RecentDonarCard item={item} />
                </Grid>
              ))
            )}
          </Grid>
        </Box> */}
    </Container>
  );
};

export default AllDonors;
