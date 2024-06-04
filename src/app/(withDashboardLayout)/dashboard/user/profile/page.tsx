"use client";
import { useGetSingleUserQuery } from "@/redux/api/authApi";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import avatar from "@/assets/svgs/avatar.svg";
import Image from "next/image";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { formatBloodType } from "@/utils/formatBloodType";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
 
import MessageIcon from "@mui/icons-material/Message";
import UpdateIcon from "@mui/icons-material/Update";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const UserProfile = () => {
  const { data, isLoading } = useGetSingleUserQuery({});
  console.log(data);

  return (
    <Container>
      <Box
        sx={{
          my: 4,
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
                  {data?.name}
                </Typography>
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ fontWeight: 600, mr: 1 }}>
                      Email:
                    </Typography>
                    {data?.email}
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Grid>

          <Grid item md={3} sm={12} xs={12}>
            <Link href={`/dashboard/user/profile/MyProfile`}>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={false}>
                Edit Profile
              </Button>
            </Link>
          </Grid>
        </Grid>

        <Box mt={3}>
          <Grid container spacing={4}>
            <Grid item md={7} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  height: "100%",
                  flexDirection: "column",
                }}>
                <Stack
                  direction="row"
                  sx={{
                    mt: 1,
                    display: "flex",
                    justifyContent: "space-between",
                  }}>
                  <Box
                    sx={{
                      backgroundColor: "#dbdbdb",
                      borderRadius: "8px",
                      padding: "20px 30px",
                    }}>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: 600,
                      }}>
                      <LocationOnIcon sx={{ mr: "2px" }} />
                      {data?.location}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      backgroundColor: "#dbdbdb",
                      borderRadius: "8px",
                      padding: "20px 50px",
                    }}>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: 600,
                      }}>
                      <BloodtypeIcon sx={{ mr: "2px" }} />
                      {formatBloodType(data?.bloodType)}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      backgroundColor: "#dbdbdb",
                      borderRadius: "8px",
                      padding: "20px 30px",
                      display: "flex",
                    }}>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: 600,
                      }}>
                      <UpdateIcon sx={{ mr: "2px" }} />
                      Age:
                      {data?.userProfile?.age}
                    </Typography>
                  </Box>

                  {/* <Box
                    sx={{
                      backgroundColor: "#dbdbdb",
                      borderRadius: "8px",
                      padding: "20px 30px",
                    }}>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: 600,
                      }}>
                      <FlakyIcon sx={{ mr: "2px" }} />
                      {data?.availability === false
                        ? "Not Available"
                        : "Available"}
                    </Typography>
                  </Box> */}
                </Stack>

                {/* <Box
                  mt={3}
                  sx={{
                    borderRadius: "8px",
                    padding: "20px 30px",
                    display: "flex",
                  }}>
                  Age:
                  <Typography ml={1}>{data?.userProfile?.age}</Typography>
                </Box> */}

                <Box mt={3}>
                  <Box
                    sx={{
                      backgroundColor: "#dbdbdb",
                      borderRadius: "8px",
                      padding: "20px",
                      width: "100%",
                      display: "flex",
                    }}>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: 600,
                      }}>
                      <CalendarMonthIcon sx={{ mr: "2px" }} />
                      Last Donation Date : {data?.userProfile?.lastDonationDate}
                    </Typography>
                  </Box>
                </Box>

                <Box mt={3}>
                  <Box
                    sx={{
                      backgroundColor: "#dbdbdb",
                      borderRadius: "8px",
                      padding: "20px",
                      width: "100%",
                      display: "flex",
                    }}>
                    <Typography fontWeight={550} mr={1}>
                      <MessageIcon sx={{ mr: "2px" }} />
                      My Message:
                    </Typography>
                      {data?.userProfile?.bio}
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default UserProfile;
