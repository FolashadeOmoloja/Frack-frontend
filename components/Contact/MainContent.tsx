import CTA from "../LandingPage/Offer/CTA";
import Testimonials from "../LandingPage/Offer/Testimonials";
import Form from "./Form";

const MainContent = () => {
  return (
    <main className="bg-[#000080] mt-[151px] max-slg:mt-[50px] pt-1">
      <section className="section-container flex text-white">
        <Form />
      </section>
      <Testimonials color="text-white" />
      <section className=" relative top-14 mb-[150px] max-slg:mb-[50px] ">
        <CTA
          color="text-white"
          btnBg="bg-white"
          btnColor="text-[#000080]"
          bg="bg-contact-bg"
        />
      </section>
    </main>
  );
};

export default MainContent;
