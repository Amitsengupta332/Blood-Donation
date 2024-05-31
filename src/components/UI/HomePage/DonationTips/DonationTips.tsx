"use client";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import donationTips from "@/assets/blood_images/donationTips.png";

const tips: string[] = [
  "Drink plenty of water before the donation.",
  "Eat a healthy meal rich in iron and avoid fatty foods.",
  "Ensure you get a good night's sleep.",
  "Wear comfortable clothing with sleeves that can be easily rolled up.",
  "Stay calm and relaxed during the donation process.",
  "Inform the staff if you feel any discomfort or dizziness.",
  "Sit or lie down for a few minutes after donating.",
  "Continue to drink plenty of fluids and have a light snack.",
  "Refrain from heavy lifting or vigorous exercise for the rest of the day.",
  "Incorporate iron-rich foods and vitamin C in your diet.",
  "Have regular health check-ups.",
];

const BackgroundBox = styled(Box)({
  backgroundImage: `url(${donationTips.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "50px 0",
  color: "#fff",
  textAlign: "center",
});

const DonationTips = () => {
  return (
    <Container sx={{mt:4}}>
      <Typography variant="h4" gutterBottom>
        Donation Tips
      </Typography>
      <List>
        {tips.map((tip, index) => (
          <ListItem key={index} disableGutters>
            <Paper
              elevation={3}
              sx={{ width: "100%", padding: 2, marginBottom: 2 }}>
              <ListItemText primary={tip} />
            </Paper>
          </ListItem>
        ))}
      </List>
    </Container>
    //     <BackgroundBox>
    //     <Container>
    //       <Typography variant="h4" gutterBottom>
    //         Donation Tips
    //       </Typography>
    //       <List>
    //         {tips.map((tip, index) => (
    //           <ListItem key={index}>
    //             <ListItemText primary={tip} />
    //           </ListItem>
    //         ))}
    //       </List>
    //     </Container>
    //   </BackgroundBox>
    // <Container sx={{ mt: 4 }}>
    //   <Typography variant="h4" gutterBottom>
    //     Donation Tips
    //   </Typography>

    //   <List>
    //     {tips.map((tip, index) => (
    //       <ListItem key={index} disableGutters>
    //           <ListItemText primary={tip} />
    //       </ListItem>
    //     ))}
    //   </List>
    // </Container>
  );
};

export default DonationTips;
