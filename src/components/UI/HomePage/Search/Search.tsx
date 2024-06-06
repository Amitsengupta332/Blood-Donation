"use client";
import DonorCard from "@/components/Shared/DonorCard/DonorCard";
import SearchDonor from "@/components/Shared/SearchDonor/SearchDonor";
import { useGetAllDonorsQuery } from "@/redux/api/userApi";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";

const Search = () => {
  const query: Record<string, any> = {};
  const [search, setSearch] = useState<{
    bloodType?: string;
    location?: string;
  }>({});

  if (search.bloodType) {
    query["bloodType"] = search.bloodType;
  }
  if (search.location) {
    query["searchTerm"] = search.location;
  }
  //   if (searchTerm.availability) {
  //     query["availability"] = searchTerm.availability;
  //   }
  const { data, isLoading } = useGetAllDonorsQuery({});
  // console.log(data);

  const donors = data?.donors;
  // const meta = data?.meta;
  return (
    <Container>
      <Box textAlign="center" sx={{ mb: 4 }}>
        <Typography variant="h3" fontWeight={600}>
          Search Donors
        </Typography>
      </Box>

      <SearchDonor search={search} setSearch={setSearch} />

      {/* <Box
        sx={{
          backgroundColor: "#eb2c29",
          padding: "10px 0",
          mt: 5,
          borderRadius: "4px",
        }}>
        <Typography
          sx={{
            padding: "5px 20px",
            color: "white",
            fontWeight: 600,
          }}>
          Total donors found: {meta?.total}
        </Typography>
      </Box> */}

      <Box sx={{ mt: 4 }}>
        <Grid container spacing={2}>
        <Box sx={{ mt: 4 }}>
              <Grid container spacing={2}>
                {isLoading ? (
                 <Typography>Loading</Typography>
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
        </Grid>
      </Box>
    </Container>
  );
};

export default Search;
