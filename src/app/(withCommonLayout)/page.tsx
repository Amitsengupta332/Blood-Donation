import AllDonors from "@/components/UI/HomePage/AllDonors/AllDonors";
import DonationTips from "@/components/UI/HomePage/DonationTips/DonationTips";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Maps from "@/components/UI/HomePage/Maps/Maps";
import Search from "@/components/UI/HomePage/Search/Search";
import Testimonials from "@/components/UI/HomePage/Testimonials/Testimonials";
import AboutUsSection from "@/components/UI/HomePage/AboutUsSection/AboutUsSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Search />
      <AllDonors />
      <Maps />
      <DonationTips />
      <AboutUsSection />
      <Testimonials />
    </>
  );
};

export default HomePage;
