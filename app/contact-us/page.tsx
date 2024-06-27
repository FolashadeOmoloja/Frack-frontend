import ContactHeader from "@/components/Contact/ContactHeader";
import MainContent from "@/components/Contact/MainContent";
import Navbar from "@/components/LandingPage/Navbar/NavBar";

const ContactUs = () => {
  return (
    <>
      <Navbar activeItem={4} />
      <ContactHeader />
      <MainContent />
    </>
  );
};

export default ContactUs;
