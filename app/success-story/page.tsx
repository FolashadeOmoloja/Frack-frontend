import Navbar from "@/components/LandingPage/Navbar/NavBar";
import Footer from "@/components/LandingPage/Offer/Footer";
import SuccessStory from "@/components/SuccessStory/SuccessStory";

const SucessStoryPage = () => {
  return (
    <>
      <Navbar activeItem={0} />
      <SuccessStory />
      <Footer />
    </>
  );
};

export default SucessStoryPage;
