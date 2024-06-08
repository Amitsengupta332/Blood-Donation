// "use client";
// import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
// import Image from "next/image";
// import avatar from "@/assets/svgs/avatar.svg";
// import { useGetSingleDonorQuery } from "@/redux/api/userApi";
// import { getUserInfo } from "@/services/auth.services";
// import { useEffect, useState } from "react";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import FlakyIcon from "@mui/icons-material/Flaky";
// import BloodtypeIcon from "@mui/icons-material/Bloodtype";
// import { formatBloodType } from "@/utils/formatBloodType";
// import Link from "next/link";
// import dynamic from "next/dynamic";

// type TParams = {
//   params: {
//     donorId: string;
//   };
// };

// const DonorDetails = ({ params }: TParams) => {
//   const [user, setUser] = useState(null);
//   const RequestForBlood = dynamic(
//     () => import("@/components/Shared/BloodRequest/BloodRequest"),
//     { ssr: false }
//   );

//   const { data, isLoading } = useGetSingleDonorQuery(params?.donorId);
//   const userInfo = getUserInfo();

//   useEffect(() => {
//     const userInfo = getUserInfo();
//     setUser(userInfo);
//   }, []);

//   if (isLoading) {
//     return <Typography>Loading...</Typography>;
//   }

//   return (
//     <Container>
//       <Box
//         sx={{
//           my: 4,
//           backgroundColor: "#f3f3f9",
//           borderRadius: "8px",
//           py: 6,
//           px: 4,
//         }}>
//         <Box textAlign="center">
//           <Typography variant="h3" fontWeight={600}>
//             User Details Here.
//           </Typography>
//         </Box>

//         <Grid spacing={{ md: 2, sm: 5, xs: 5 }} container>
//           <Grid item md={8} sm={12} xs={12}>
//             <Stack textAlign="center" direction="row" spacing={2}>
//               <Box
//                 sx={{
//                   border: `3px solid #dbdbdb`,
//                   borderRadius: "50%",
//                   padding: "10px",
//                   height: "75px",
//                 }}>
//                 <Image src={avatar} alt="avatar" height={50} width={50} />
//               </Box>
//               <Box>
//                 <Typography
//                   variant="h5"
//                   component="h4"
//                   sx={{ fontWeight: 600 }}>
//                   {data?.name}
//                 </Typography>
//                 <Box>
//                   <Box sx={{ display: "flex" }}>
//                     <Typography sx={{ fontWeight: 600, mr: 1 }}>
//                       Email:
//                     </Typography>
//                     {data?.email}
//                   </Box>
//                 </Box>
//               </Box>
//             </Stack>
//           </Grid>
//         </Grid>

//         <Box mt={3}>
//           <Grid container spacing={4}>
//             <Grid item md={6} sm={12} xs={12}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   height: "100%",
//                   flexDirection: "column",
//                 }}>
//                 <Stack
//                   direction="row"
//                   sx={{
//                     mt: 1,
//                     display: "flex",
//                     justifyContent: "space-between",
//                   }}>
//                   <Box
//                     sx={{
//                       backgroundColor: "#dbdbdb",
//                       borderRadius: "8px",
//                       padding: "20px 30px",
//                     }}>
//                     <Typography
//                       sx={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         fontWeight: 600,
//                       }}>
//                       <LocationOnIcon sx={{ mr: "2px" }} />
//                       {data?.location}
//                     </Typography>
//                   </Box>
//                   <Box
//                     sx={{
//                       backgroundColor: "#dbdbdb",
//                       borderRadius: "8px",
//                       padding: "20px 50px",
//                     }}>
//                     <Typography
//                       sx={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         fontWeight: 600,
//                       }}>
//                       <BloodtypeIcon sx={{ mr: "2px" }} />
//                       {formatBloodType(data?.bloodType)}
//                     </Typography>
//                   </Box>
//                   <Box
//                     sx={{
//                       backgroundColor: "#dbdbdb",
//                       borderRadius: "8px",
//                       padding: "20px 30px",
//                     }}>
//                     <Typography
//                       sx={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         fontWeight: 600,
//                       }}>
//                       <FlakyIcon sx={{ mr: "2px" }} />
//                       {data?.availability === false
//                         ? "Not Available"
//                         : "Available"}
//                     </Typography>
//                   </Box>
//                 </Stack>

//                 <Box mt={3}>
//                   <Box
//                     sx={{
//                       backgroundColor: "#dbdbdb",
//                       borderRadius: "8px",
//                       padding: "20px",
//                       width: "100%",
//                       display: "flex",
//                     }}>
//                     <Typography fontWeight={550} mr={1}>
//                       My Message:
//                     </Typography>
//                     {data?.userProfile?.bio}
//                   </Box>
//                 </Box>
//                 <Box mt={3}>
//                   <Box
//                     sx={{
//                       backgroundColor: "#dbdbdb",
//                       borderRadius: "8px",
//                       padding: "20px 30px",
//                       display: "flex",
//                     }}>
//                     Age:
//                     <Typography ml={1}>{data?.userProfile?.age}</Typography>
//                   </Box>
//                 </Box>
//               </Box>
//             </Grid>

//             {/* <Grid item md={5} sm={12} xs={12}>
//               <Box
//                 sx={{
//                   backgroundColor: "#dbdbdb",
//                   borderRadius: "8px",
//                   padding: "20px",
//                   width: "95%",
//                   height: "100%",
//                 }}
//               >

//                 {donationDate && (
//                   <CountdownTimer nextDonationDate={donationDate} />
//                 )}

//                 <Box
//                   sx={{
//                     mt: 2,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Typography sx={{ fontWeight: 600 }}>
//                     Nest Donation Date
//                   </Typography>
//                   {donationDate && (
//                     <Typography>
//                       {
//                         donationDate.nextDonationDate
//                           .toISOString()
//                           .split("T")[0]
//                       }
//                     </Typography>
//                   )}
//                 </Box>
//               </Box>
//             </Grid> */}
//           </Grid>

//           {user ? (
//             <RequestForBlood donorId={params?.donorId} />
//           ) : (
//             <Link href="/login">
//               <Button sx={{ margin: "10px 0px" }}>
//                 Login To Request For Blood
//               </Button>
//             </Link>
//           )}
//         </Box>

//         {/* </Grid> */}
//       </Box>
//     </Container>
//   );
// };

// export default DonorDetails;

"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import avatar from "@/assets/svgs/avatar.svg";
import { useGetSingleDonorQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.services";
import { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FlakyIcon from "@mui/icons-material/Flaky";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import { formatBloodType } from "@/utils/formatBloodType";
import Link from "next/link";
import dynamic from "next/dynamic";

type TParams = {
  params: {
    donorId: string;
  };
};

const DonorDetails = ({ params }: TParams) => {
  const [user, setUser] = useState(null);
  const RequestForBlood = dynamic(
    () => import("@/components/Shared/BloodRequest/BloodRequest"),
    { ssr: false }
  );

  const { data, isLoading } = useGetSingleDonorQuery(params?.donorId);

  useEffect(() => {
    const userInfo = getUserInfo();
    setUser(userInfo);
  }, []);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Box
        sx={{
          my: 4,
          backgroundColor: "#f3f3f9",
          borderRadius: "8px",
          py: 6,
          px: { xs: 2, sm: 4, md: 6 },
        }}>
        <Box textAlign="center">
          <Typography variant="h3" fontWeight={600}>
            User Details Here.
          </Typography>
        </Box>

        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems="center"
          mt={3}>
          <Grid item md={8} sm={12} xs={12} textAlign="center">
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              alignItems="center">
              <Box
                sx={{
                  border: `3px solid #dbdbdb`,
                  borderRadius: "50%",
                  padding: "10px",
                  height: "75px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Image src={avatar} alt="avatar" height={50} width={50} />
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  component="h4"
                  sx={{ fontWeight: 600 }}>
                  {data?.name}
                </Typography>
                <Box display="flex" justifyContent="center">
                  <Typography sx={{ fontWeight: 600, mr: 1 }}>
                    Email:
                  </Typography>
                  {data?.email}
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Grid container spacing={4} mt={3} justifyContent="center">
          <Grid item md={8} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
                mt={1}>
                <Box
                  sx={{
                    backgroundColor: "#dbdbdb",
                    borderRadius: "8px",
                    padding: { xs: "10px 20px", sm: "20px 30px" },
                    textAlign: "center",
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
                    padding: { xs: "10px 30px", sm: "20px 50px" },
                    textAlign: "center",
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
                    padding: { xs: "10px 20px", sm: "20px 30px" },
                    textAlign: "center",
                  }}>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: 600,
                    }}>
                    Age:
                    {data?.userProfile?.age}
                  </Typography>
                </Box>
              </Stack>

              <Box mt={3} width="100%">
                <Box
                  sx={{
                    backgroundColor: "#dbdbdb",
                    borderRadius: "8px",
                    padding: "20px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}>
                  <Typography fontWeight={550} mr={1}>
                    My Message:
                  </Typography>
                  {data?.userProfile?.bio}
                </Box>
              </Box>
              <Box mt={3} width="100%">
                <Box
                  sx={{
                    backgroundColor: "#dbdbdb",
                    borderRadius: "8px",
                    padding: "20px 30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}>
                  <Typography ml={1}>
                    <FlakyIcon sx={{ mr: "2px" }} />
                    {data?.availability === false
                      ? "Not Available"
                      : "Available"}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          {user ? (
            <RequestForBlood donorId={params?.donorId} />
          ) : (
            <Link href="/login">
              <Button sx={{ margin: "10px 0px" }}>
                Login To Request For Blood
              </Button>
            </Link>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default DonorDetails;
