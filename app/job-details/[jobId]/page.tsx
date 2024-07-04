import Navbar from "@/components/LandingPage/Navbar/NavBar";
import CTA from "@/components/LandingPage/Offer/CTA";
import Footer from "@/components/LandingPage/Offer/Footer";
import { jobPostings } from "@/utilities/constants/jobData";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const Joblisting = ({ params }: { params: { jobId: string } }) => {
  const jobData = jobPostings[parseInt(params.jobId)];

  return (
    <>
      <Navbar activeItem={1} />
      <main className="section-container mt-[74px]">
        <Link
          href={"/jobs"}
          className="flex text-[#000080] gap-3 text-xl items-center font-bold"
        >
          <FaArrowLeft />
          <span>Go back</span>
        </Link>
      </main>
      <CTA />
      <Footer />
    </>
  );
};
export default Joblisting;
