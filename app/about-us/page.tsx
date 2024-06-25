import AboutHeader from "@/components/AboutUs/Header";
import Grid from "@/components/AboutUs/Grid";
import Navbar from "@/components/LandingPage/Navbar/NavBar";
import PictureBg from "@/components/AboutUs/PictureBg";

export default function AboutPage()  {
return (
    <>
          <Navbar activeItem={2}/>
          <AboutHeader/>
          <Grid/>
          <PictureBg/>

    </>
)
}