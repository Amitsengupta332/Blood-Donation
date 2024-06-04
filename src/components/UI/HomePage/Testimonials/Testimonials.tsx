// import {
//   Box,
//   Card,
//   CardContent,
//   Container,
//   Grid,
//   Typography,
// } from "@mui/material";
// import donationTips from "@/assets/blood_images/donationTips.png";

// const testimonials = [
//   {
//     name: "John Doe",
//     role: "Blood Donor",
//     testimonial:
//       "I have been donating blood for the past five years, and it has been one of the most rewarding experiences of my life. Knowing that my donation could save someone's life is an incredible feeling. The process is simple and the staff are always so supportive. I encourage everyone to donate blood and make a difference.",
//   },
//   {
//     name: "Jane Smith",
//     role: "Blood & Platelet Donor",
//     testimonial:
//       "As a regular blood and platelet donor, I’ve seen firsthand how crucial donations are in emergencies. It's a small act of kindness that goes a long way. Every time I donate, I feel a sense of fulfillment knowing that I’m helping someone in need. The Blood Donation website has made it so easy to schedule appointments and keep track of my donation history.",
//   },
//   {
//     name: "Emily Davis",
//     role: "Recipient",
//     testimonial:
//       "I needed a blood transfusion during a major surgery, and thanks to the generosity of blood donors, I’m here today. Words cannot express my gratitude for those who take the time to donate blood. The Blood Donation website has connected me with amazing donors, and I’m forever grateful.",
//   },
// ];
// const Testimonials = () => {
//   return (
//     <Container>
//       <Box textAlign="center" mb={4}>
//         <Typography variant="h3" fontWeight={600}>
//           Testimonials
//         </Typography>
//       </Box>
//       <Grid container spacing={4}>
//         {testimonials.map((testimonial, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6" component="h3">
//                   {testimonial.name} ({testimonial.role})
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {testimonial.testimonial}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Testimonials;

import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import testimonial1 from "@/assets/testimonials/2.png";
import testimonial2 from "@/assets/testimonials/Untitled design.png";
import testimonial3 from "@/assets/testimonials/3.png";

const testimonials = [
  {
    name: "John Doe",
    role: "Blood Donor",
    testimonial:
      "I have been donating blood for the past five years, and it has been one of the most rewarding experiences of my life. Knowing that my donation could save someone's life is an incredible feeling. The process is simple and the staff are always so supportive. I encourage everyone to donate blood and make a difference.",
    image: testimonial1,
  },
  {
    name: "Mike Johnson",
    role: "Blood & Platelet Donor",
    testimonial:
      "As a regular blood and platelet donor, I’ve seen firsthand how crucial donations are in emergencies. It's a small act of kindness that goes a long way. Every time I donate, I feel a sense of fulfillment knowing that I’m helping someone in need. The Blood Donation website has made it so easy to schedule appointments and keep track of my donation history.",
    image: testimonial2,
  },
  {
    name: "Robert Brown",
    role: "Recipient",
    testimonial:
      "I needed a blood transfusion during a major surgery, and thanks to the generosity of blood donors, I’m here today. Words cannot express my gratitude for those who take the time to donate blood. The Blood Donation website has connected me with amazing donors, and I’m forever grateful.",
    image: testimonial3,
  },
];

const Testimonials = () => {
  return (
    <Container sx={{ padding: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" fontWeight={600} style={{ color: "#d32f2f" }}>
          Testimonials
        </Typography>
      </Box>
      <Grid sx={{ padding: 4 }} container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <CardMedia
                component="img"
                height="140"
                image={testimonial.image?.src}
                alt={testimonial.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h3">
                  {testimonial.name} ({testimonial.role})
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
