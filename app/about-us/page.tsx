import AboutHeader from "@/components/AboutUs/Header";
import Grid from "@/components/AboutUs/Grid";
import Navbar from "@/components/LandingPage/Navbar/NavBar";
import PictureBg from "@/components/AboutUs/PictureBg";
import Testimonials from "@/components/LandingPage/Offer/Testimonials";
import CTA from "@/components/LandingPage/Offer/CTA";
import HireTalentSection from "@/components/AboutUs/HireTalentSection";
import OurValues from "@/components/AboutUs/OurValues";

export default function AboutPage()  {
return (
    <>
          <Navbar activeItem={2}/>
          <AboutHeader/>
          <Grid/>
          <PictureBg/>
          <OurValues/>
          <HireTalentSection/>
          <Testimonials/>
          <CTA/>

    </>
)
}