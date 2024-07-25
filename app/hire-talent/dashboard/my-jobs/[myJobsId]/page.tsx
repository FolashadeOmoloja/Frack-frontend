"use client";

import HireTalentNav from "@/components/Dashboard/HireTalentDashboard/HireTalentNav";
import JobTable from "@/components/Dashboard/TalentDashboard/JobTable";
import { jobsPostedByCompany } from "@/utilities/constants/jobData";
import { userObject } from "@/utilities/constants/typeDef";
import { activeCandidatesColumn } from "@/utilities/tableData";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

const page = ({ params }: { params: { myJobsId: string } }) => {
  const router = useRouter();
  const activeApplicants = jobsPostedByCompany[parseInt(params.myJobsId)];
  const activeApplicantsCanditate = activeApplicants.candidates
    ? activeApplicants.candidates
    : [];
  return (
    <>
      <HireTalentNav activeItem={1} />
      <section className="dashboard-container min-h-svh">
        <h2 className="text-4xl max-sm:text-2xl font-bold mb-1">
          {activeApplicants.title} Role
        </h2>
        <span className="text-[#7C8698] text-xl block mb-1">
          {activeApplicants.department}
        </span>
        <span className="text-[#7C8698] text-xl block mb-1">
          {activeApplicants.salaryRange}
        </span>
        <span className="text-[#7C8698] text-xl block mb-1">
          {activeApplicants.location}
        </span>

        <div className="flex w-full text-[#626263] md:text-lg font-bold mt-16 border-b-[3px] border-[#000080]">
          <span className={`tab active max-sm:h-[50px] text-xl`}>
            Job Applications
          </span>
        </div>
        <JobTable<userObject>
          data={activeApplicantsCanditate}
          columns={activeCandidatesColumn}
        />
        <button
          className="w-[138px] h-[50px] bg-[#000080] text-white flex centered font-semibold rounded-md gap-3 btn-hover mt-20"
          onClick={() => router.back()}
        >
          <FaArrowLeft />
          Go back
        </button>
      </section>
    </>
  );
};

export default page;
