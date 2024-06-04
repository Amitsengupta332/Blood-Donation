import DonationTips from "@/components/UI/HomePage/DonationTips/DonationTips";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Maps from "@/components/UI/HomePage/Maps/Maps";
import Testimonials from "@/components/UI/HomePage/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <DonationTips />
      <Testimonials />
      <Maps />
    </>
  );
};

export default HomePage;
