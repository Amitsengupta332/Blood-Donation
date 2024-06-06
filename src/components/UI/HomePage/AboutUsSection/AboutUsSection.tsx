import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const AboutUsSection = () => {
  return (
    <Container>
      <Stack sx={{ mx: "auto", width: "100%" }} direction="column" gap={8}>
        <Box textAlign="center" sx={{ mb: 4 }}>
          <Typography variant="h3" fontWeight={600}>
            About Us
          </Typography>
        </Box>

        <Stack direction={{ md: "row", sm: "column" }} gap={5}>
          <Box sx={{ width: "100%" }}>
            <Box>
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontWeight: 600, mb: 2 }}>
                Mission Statement
              </Typography>
              <Typography sx={{ textAlign: "justify" }}>
                At Blood Labs, our mission is to create a seamless and efficient
                platform that connects generous blood donors with those in
                critical need across Bangladesh. We are dedicated to saving
                lives by making the process of finding and donating blood easy,
                secure, and accessible for everyone.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ mx: "auto", width: "100%" }}>
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontWeight: 600, mb: 2 }}>
                Our Purpose
              </Typography>
              <Typography sx={{ textAlign: "justify" }}>
                Every day, countless individuals in Bangladesh rely on blood
                donations for survival. Our platform is designed to bridge the
                gap between donors and recipients, ensuring that life-saving
                blood is available whenever and wherever it&aposs needed. By
                leveraging technology, we aim to foster a community of heroes
                who are committed to making a difference through the gift of
                blood.
              </Typography>
            </Box>
          </Box>
        </Stack>

        <Box sx={{ mx: "auto", textAlign: "center" }}>
            <Link href="/aboutUs">
              <Button
                sx={{
                  margin: "0px 10px",
                }}
                fullWidth={false}
              >
                About Us
              </Button>
            </Link>
          </Box>
      </Stack>
    </Container>
  );
};

export default AboutUsSection;
