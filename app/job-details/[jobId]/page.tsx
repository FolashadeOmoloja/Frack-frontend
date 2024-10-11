"use client";
import CTABTN from "@/components/Elements/CTA/CTA-Button";
import Navbar from "@/components/LandingPage/Navbar/NavBar";
import CTA from "@/components/LandingPage/Offer/CTA";
import Footer from "@/components/LandingPage/Offer/Footer";
import { applyJobHandler } from "@/hooks/job-hook";
import { useSelector } from "react-redux";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const Joblisting = ({ params }: { params: { jobId: string } }) => {
  const jobPostings = useSelector((state: any) => state.jobPosts.jobPosts);
  const { user } = useSelector((store: any) => store.auth);
  const { jobIds: appliedJobIds } = useSelector(
    (state: any) => state.appliedJobs
  );
  const jobData = jobPostings[parseInt(params.jobId)];
  const { onSubmit: applyHandler, loading } = applyJobHandler();
  const jobDataId = jobData._id ? jobData._id : "";
  const isApplied = appliedJobIds.includes(jobDataId);

  return (
    <>
      <Navbar activeItem={1} />
      <main className="section-container mt-[50px]">
        <Link
          href={"/jobs"}
          className="flex text-[#000080] gap-3 text-xl items-center font-bold"
        >
          <FaArrowLeft />
          <span>Go back</span>
        </Link>
        <h3 className="text-[52px] max-md:text-[38px] max-sm:text-3xl font-bold text-[#111013] md:max-w-[500px] leading-[72px] mb-9 mt-10">
          {jobData?.title}
        </h3>
        <div className="flex md:gap-7 gap-4  md:text-lg flex-wrap md:mb-[100px] mb-[50px]">
          <span>{jobData?.location}</span>
          <span>
            {" "}
            ${jobData?.salaryRange1} - ${jobData?.salaryRange2}
          </span>
          <span>{jobData?.jobProximity}</span>
          <span>{jobData?.experience} level</span>
        </div>
        <section>
          <span className="md:text-2xl text-lg font-bold mb-4 inline-block">
            Description
          </span>
          <p className="tracking-[0.02em] leading-6 text-[#161519]">
            {jobData?.description}
          </p>
        </section>
        <div>
          <span className="mt-20 mb-4 md:text-2xl text-lg font-bold inline-block">
            Skills
          </span>
          <div className="flex gap-4 flex-wrap mb-16">
            {jobData.skills.map((opt: string, idx: number) => (
              <span
                key={idx}
                className="text-sm h-11 min-w-32 bg-[#000080] rounded-md flex items-center justify-center px-2 text-white font-semibold"
              >
                {opt}
              </span>
            ))}
          </div>
        </div>
        <div>
          <span className="mb-4 md:text-2xl text-lg font-bold inline-block">
            Experience
          </span>
          <span className="block md:text-lg">{jobData?.experience} level</span>
        </div>
        <div className="my-14">
          <span className="mb-4 md:text-2xl font-bold inline-block ">
            Salary Range
          </span>
          <span className="block md:text-lg">
            {" "}
            ${jobData?.salaryRange1} - ${jobData?.salaryRange2}
          </span>
        </div>
        <div>
          <CTABTN route={"./sign-in"} CTA="Apply" showIcon />
        </div>
        {!user ? (
          !isApplied ? (
            <div className="pb-14">
              <CTABTN
                route={""}
                isFunc
                func={() => applyHandler(jobDataId)}
                CTA={loading ? "Applying.." : "Apply"}
                showIcon
              />
            </div>
          ) : (
            <div className="pb-14">
              <CTABTN
                route={""}
                backGround="bg-gray-600 border-gray-600 cursor-not-allowed"
                width="w-[175px]"
                disabled
                CTA={"Already Applied"}
              />
            </div>
          )
        ) : (
          <div>
            <CTABTN route={"./sign-in"} CTA="Apply" showIcon />
          </div>
        )}
      </main>
      <CTA />
      <Footer />
    </>
  );
};
export default Joblisting;
