import CTA from "../LandingPage/Offer/CTA";
import Testimonials from "../LandingPage/Offer/Testimonials";
import Form from "./Form";

const MainContent = () => {
  return (
    <main className="bg-[#000080] mt-[151px] max-slg:mt-[50px] pt-1">
      <section className="section-container flex max-lg:flex-col text-white gap-10">
        <div>
          <h3 className="font-bold text-2xl">Talk to us.</h3>
          <p className="mt-4 text-wrap">
            Fill in this form or send us an e-mail with your inquiry.
          </p>
        </div>
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
