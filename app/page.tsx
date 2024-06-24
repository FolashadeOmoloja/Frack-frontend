import Header from "@/components/Herosection/Header";
import Navbar from "@/components/Navbar/NavBar";
import About from "@/components/Offer/About";
import CTA from "@/components/Offer/CTA";
import Offer from "@/components/Offer/Offer";
import TalentPool from "@/components/Offer/TalentPool";
import Testimonials from "@/components/Offer/Testimonials";


export default function Home() {
  return (
    <>
     <Navbar/>
     <Header/>
     <Offer/>
     <About/>
     <TalentPool/>
     <Testimonials/>
     <CTA/>
    </>
  );
}
