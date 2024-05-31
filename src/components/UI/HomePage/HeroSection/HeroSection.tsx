import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import grid from "@/assets/svgs/grid.svg";
 
 
import image2 from "@/assets/blood_images/blood_image.png";
 
import SearchIcon from "@mui/icons-material/Search";

const HeroSection = () => {
  return (
    <Container>
      <Box sx={{ position: "relative", height: "80vh", overflow: "hidden" }}>
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: -1,
          }}>
          <Image
            src={image2}
            alt="blood image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Box>

        {/* Content Over Image */}
        <Container
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            color: "#fff", // Text color
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: To make text more readable
            padding: 3,
          }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Be a Hero, Save Lives: Donate Blood Today!
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Your donation can give someone another chance at life. Join our
            community of lifesavers.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<SearchIcon />}>
            Search Donor
          </Button>
        </Container>
      </Box>
    </Container>
  );
};

export default HeroSection;
