import Header from "@/components/Herosection/Header";
import Navbar from "@/components/Navbar/NavBar";
import Offer from "@/components/Offer/Offer";


export default function Home() {
  return (
    <>
    <Navbar/>
     <main className="px-[100px] max-xlg:px-[50px] max-lg:px-9 max-sm:px-4 relative max-lg:top-[96px]">
     <Header/>
     <Offer/>
     </main>
    </>
  );
}
