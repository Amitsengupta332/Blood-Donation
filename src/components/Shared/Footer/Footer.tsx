"use client";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedIcon from "@/assets/landing_page/linkedin.png";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      py={5}
      sx={{
        border: "1px solid lightgray",
      }}>
      <Container>
        <Stack
          direction={isMobile ? "column" : "row"}
          gap={4}
          justifyContent="center"
          alignItems="center"
          textAlign={isMobile ? "center" : "left"}>
          <Typography
            component={Link}
            href="/consultation"
            sx={{ textDecoration: "none", color: "inherit" }}>
            Consultation
          </Typography>
          <Typography
            component={Link}
            href="/about"
            sx={{ textDecoration: "none", color: "inherit" }}>
            About Us
          </Typography>
          <Typography>Medicine</Typography>
          <Typography>Diagnostics</Typography>
          <Typography>NGOs</Typography>
        </Stack>

        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Image src={facebookIcon} width={30} height={30} alt="facebook" />
          <Image src={instagramIcon} width={30} height={30} alt="instagram" />
          <Image src={twitterIcon} width={30} height={30} alt="twitter" />
          <Image src={linkedIcon} width={30} height={30} alt="linkedin" />
        </Stack>

        <Box
          sx={{
            border: "1px dashed lightgray",
            my: 3,
          }}></Box>

        <Stack
          direction={isMobile ? "column" : "row"}
          gap={2}
          justifyContent={isMobile ? "center" : "space-between"}
          alignItems="center"
          textAlign={isMobile ? "center" : "left"}>
          <Typography component="p">
            &copy;2024 Ph HealthCare. All Rights Reserved.
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            sx={{ textDecoration: "none", color: "inherit" }}>
            P<Box component="span">H</Box> Health Care
          </Typography>
          <Typography component="p">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
