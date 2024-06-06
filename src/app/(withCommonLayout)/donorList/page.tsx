"use client";
import DonorCard from "@/components/Shared/DonorCard/DonorCard";
import { useGetAllDonorsQuery } from "@/redux/api/userApi";
import { Box, Container, Grid, Pagination, Typography } from "@mui/material";
import React, { useState } from "react";

const DonorList = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const query: Record<string, any> = {};

  const [searchTerm, setSearchTerm] = useState<{
    bloodType?: string;
    location?: string;
  }>({});

  if (searchTerm.bloodType) {
    query["bloodType"] = searchTerm.bloodType;
  }
  if (searchTerm.location) {
    query["searchTerm"] = searchTerm.location;
  }

  // add pagination query:
  query["page"] = page;
  query["limit"] = limit;

  const { data, isLoading } = useGetAllDonorsQuery({ ...query });
  //   console.log(data);
  const donors = data?.donors;
  const meta = data?.meta;
  let pageCount: number = 0;

  if (meta?.total) {
    pageCount = Math.ceil(meta.total / limit);
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Container>
      <Box
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
      </Box>

      <Box sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          {}

          {isLoading ? (
            <Typography>Loading</Typography>
          ) : (
            donors &&
            donors.map((item) => (
              <Grid item key={item.id} xs={12} sm={12} md={4}>
                <DonorCard item={item} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>

      <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default DonorList;
