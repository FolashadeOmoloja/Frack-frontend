import Header from "@/components/Herosection/Header";
import Navbar from "@/components/Navbar/NavBar";
import About from "@/components/Offer/About";
import CTA from "@/components/Offer/CTA";
import Footer from "@/components/Offer/Footer";
import Offer from "@/components/Offer/Offer";
import TalentPool from "@/components/Offer/TalentPool";


export default function Home() {
  return (
    <>
    <Navbar/>
     <Header/>
     <Offer/>
     <About/>
     <TalentPool/>
     <CTA/>
     <Footer/>
    </>
  );
}
