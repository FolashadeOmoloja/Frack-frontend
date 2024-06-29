import GridSection from "@/components/FAQ/GridSection";
import Header from "@/components/FAQ/Header";
import Navbar from "@/components/LandingPage/Navbar/NavBar";
import CTA from "@/components/LandingPage/Offer/CTA";

const FAQPage = () => {
  return (
    <>
      <Navbar activeItem={3} />
      <Header />
      <GridSection />
      <CTA />
    </>
  );
};

export default FAQPage;
