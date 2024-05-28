import { Box, Container, List, ListItem, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Container sx={{ my: 4 }}>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Mission Statement
        </Typography>
        <Typography variant="body1" paragraph>
          At Blood Labs, our mission is to create a seamless and efficient
          platform that connects generous blood donors with those in critical
          need across Bangladesh. We are dedicated to saving lives by making the
          process of finding and donating blood easy, secure, and accessible for
          everyone.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Our Purpose
        </Typography>
        <Typography variant="body1" paragraph>
          Every day, countless individuals in Bangladesh rely on blood donations
          for survival. Our platform is designed to bridge the gap between
          donors and recipients, ensuring that life-saving blood is available
          whenever and wherever it&aposs needed. By leveraging technology, we
          aim to foster a community of heroes who are committed to making a
          difference through the gift of blood.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Why Blood Labs
        </Typography>
        <Typography variant="body1" paragraph>
          Blood Labs stands out as a dedicated platform for blood donation in
          Bangladesh due to our commitment to security, efficiency, and
          community. We provide a reliable network where donors and recipients
          can connect safely, and we continuously work to improve our services
          based on user feedback and technological advancements.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          What We Do
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1">
              • Connect Donors and Recipients
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">• Promote Awareness</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">• Support the Community</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              • Ensure Safety and Security
            </Typography>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Objectives
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1">
              • Increase the number of regular blood donors in Bangladesh.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              • Reduce the time and effort required to find a compatible blood
              donor.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              • Ensure the safety and reliability of the blood donation process.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              • Raise awareness about the importance of blood donation.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              • Build a strong, supportive community of blood donors and
              recipients.
            </Typography>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default AboutUs;
