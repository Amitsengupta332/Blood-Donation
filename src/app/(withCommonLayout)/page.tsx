import AllDonors from "@/components/UI/HomePage/AllDonors/AllDonors";
import DonationTips from "@/components/UI/HomePage/DonationTips/DonationTips";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Maps from "@/components/UI/HomePage/Maps/Maps";
import Search from "@/components/UI/HomePage/Search/Search";
import Testimonials from "@/components/UI/HomePage/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Search />
      <AllDonors />
      <DonationTips />
      <Testimonials />
      <Maps />
    </>
  );
};

export default HomePage;
