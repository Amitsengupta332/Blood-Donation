// import { Box, Container, Stack, Tooltip, Typography } from "@mui/material";
// import Image from "next/image";
// import avatar from "@/assets/svgs/avatar.svg";
// import { formatBloodType } from "@/utils/formatBloodType";
// import { useState } from "react";
// import Link from "next/link";
// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

// const DonorCard = ({ item }: { item: IUser }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const handleShowDetails = () => {
//     setShowDetails(!showDetails);
//   };
//   return (
//     <Container>
//       <Stack
//         direction="row"
//         gap={5}
//         justifyContent="center"
//         alignItems="center">
//         <Box sx={{ mb: 2 }}>
//           <Image src={avatar} alt="avatar" height={70} width={70} />
//         </Box>
//         <Box>
//           <Stack
//             direction="row"
//             gap={3}
//             justifyContent="center"
//             alignItems="center">
//             <Box>
//               <Typography>Name</Typography>
//               <Typography>Group</Typography>
//               <Typography>Location</Typography>
//             </Box>
//             <Box>
//               <Typography sx={{ fontWeight: 600 }}>{item?.name}</Typography>
//               <Typography sx={{ fontWeight: 600 }}>
//                 {formatBloodType(item?.bloodType)}
//               </Typography>
//               <Typography sx={{ fontWeight: 600 }}>{item?.location}</Typography>
//             </Box>
//           </Stack>
//         </Box>
//       </Stack>
//       <Stack
//         direction="row"
//         justifyContent="flex-end"
//         alignItems="center"
//         // sx={{ mt: 3 }}
//       >
//         {/* <Typography>Show More</Typography> */}
//         <Tooltip
//           title="Donor Details"
//           placement="left"
//           componentsProps={{
//             tooltip: {
//               sx: {
//                 bgcolor: "#cdd1da5c",
//                 color: "primary.main", // Change text color if necessary
//               },
//             },
//           }}>
//           <Link href={`/donorList/details/${item?.id}`}>
//             <ArrowCircleRightIcon
//               sx={{
//                 cursor: "pointer",
//                 color: "primary.main",
//                 transition: "transform 0.3s",
//                 "&:hover": {
//                   transform: "translateX(5px)",
//                 },
//               }}
//               onClick={handleShowDetails}
//             />
//           </Link>
//         </Tooltip>
//       </Stack>
//     </Container>
//   );
// };

// export default DonorCard;

// import { Box, Container, Stack, Tooltip, Typography } from "@mui/material";
// import Image from "next/image";
// import { formatBloodType } from "@/utils/formatBloodType";
// import { useState } from "react";
// import Link from "next/link";
// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
// import avatar from "@/assets/svgs/avatar.svg";

// const DonorCard = ({ item }: { item: IUser }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const handleShowDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <Container>
//       <Stack direction="row" gap={5} justifyContent="center" alignItems="center">
//         <Box sx={{ mb: 2 }}>
//           {/* Load the donor image */}
//           <Image src={avatar} alt="donor image" height={70} width={70} />
//         </Box>
//         <Box>
//           <Stack direction="row" gap={3} justifyContent="center" alignItems="center">
//             <Box>
//               <Typography>Name</Typography>
//               <Typography>Group</Typography>
//               <Typography>Location</Typography>
//             </Box>
//             <Box>
//               <Typography sx={{ fontWeight: 600 }}>{item?.name}</Typography>
//               <Typography sx={{ fontWeight: 600 }}>
//                 {formatBloodType(item?.bloodType)}
//               </Typography>
//               <Typography sx={{ fontWeight: 600 }}>{item?.location}</Typography>
//             </Box>
//           </Stack>
//         </Box>
//       </Stack>
//       <Stack direction="row" justifyContent="flex-end" alignItems="center">
//         <Tooltip
//           title="Donor Details"
//           placement="left"
//           componentsProps={{
//             tooltip: {
//               sx: {
//                 bgcolor: "#cdd1da5c",
//                 color: "primary.main",
//               },
//             },
//           }}
//         >
//           <Link href={`/donorList/details/${item?.id}`}>
//             <ArrowCircleRightIcon
//               sx={{
//                 cursor: "pointer",
//                 color: "primary.main",
//                 transition: "transform 0.3s",
//                 "&:hover": {
//                   transform: "translateX(5px)",
//                 },
//               }}
//               onClick={handleShowDetails}
//             />
//           </Link>
//         </Tooltip>
//       </Stack>
//     </Container>
//   );
// };

// export default DonorCard;

"use client";
import {
  Box,
  Container,
  Stack,
  Tooltip,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { formatBloodType } from "@/utils/formatBloodType";
import { useState } from "react";
import Link from "next/link";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import avatar from "@/assets/svgs/avatar.svg";

const DonorCard = ({ item }: { item: IUser }) => {
  const [showDetails, setShowDetails] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Container>
      <Box sx={{ my: 2, p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={2} sx={{ textAlign: "center" }}>
            <Image src={avatar} alt="donor image" height={70} width={70} />
          </Grid>
          <Grid item xs={12} sm={10}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <Typography variant="body2">Name</Typography>
                <Typography variant="body2">Group</Typography>
                <Typography variant="body2">Location</Typography>
              </Grid>
              <Grid item xs={6} sm={9}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {item?.name}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {formatBloodType(item?.bloodType)}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {item?.location}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Tooltip
            title="Donor Details"
            placement="left"
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "#cdd1da5c",
                  color: "primary.main",
                },
              },
            }}>
            <Link href={`/donorList/donorDetails/${item?.id}`}>
              <ArrowCircleRightIcon
                sx={{
                  cursor: "pointer",
                  color: "primary.main",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateX(5px)",
                  },
                }}
                onClick={handleShowDetails}
              />
            </Link>
          </Tooltip>
        </Box>
      </Box>
    </Container>
  );
};

export default DonorCard;
