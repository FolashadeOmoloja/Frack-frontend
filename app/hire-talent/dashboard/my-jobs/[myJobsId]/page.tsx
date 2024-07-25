"use client";

import HireTalentNav from "@/components/Dashboard/HireTalentDashboard/HireTalentNav";
import JobTable from "@/components/Dashboard/TalentDashboard/JobTable";
import {
  hiredCandidates,
  jobsPostedByCompany,
} from "@/utilities/constants/jobData";
import { userObject } from "@/utilities/constants/typeDef";
import { hiredCandidatesColumn } from "@/utilities/tableData";

const page = ({ params }: { params: { myJobsId: string } }) => {
  const activeApplicants = jobsPostedByCompany[parseInt(params.myJobsId)];
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
        <div className="flex w-full text-[#626263] md:text-lg font-bold mt-16 border-b-[3px] border-[#000080]">
          <span className={`tab active max-sm:h-[50px]`}>
            Active Application
          </span>
        </div>
        <JobTable<userObject>
          data={hiredCandidates}
          columns={hiredCandidatesColumn}
        />
      </section>
    </>
  );
};

export default page;
