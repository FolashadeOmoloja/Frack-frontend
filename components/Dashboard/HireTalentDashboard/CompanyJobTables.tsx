"use client";

import { useEffect, useState } from "react";
import JobTable from "../TalentDashboard/JobTable";
import {
  hiredCandidates,
  jobsPostedByCompany,
} from "@/utilities/constants/jobData";
import {
  companyActiveColumns,
  hiredCandidatesColumn,
  JobPosted,
} from "@/utilities/tableData";
import { userObject } from "@/utilities/constants/typeDef";

type IsActiveState = {
  [key: number]: boolean;
};

const CompanyJobTables = () => {
  const filterArr = ["Active Applications", "Closed Jobs", "Hired Talents"];

  const [active, setActive] = useState<IsActiveState>({ 0: true });
  const [jobPosted, setJobPosted] = useState<JobPosted[]>(jobsPostedByCompany);
  const [changeTable, setChangeTable] = useState(false);

  const filterJobs = (status: string) => {
    return jobsPostedByCompany.filter((job) =>
      job.status.toLowerCase().includes(status.toLowerCase())
    );
  };

  const activeFunc = (idx: number) => {
    const newState: IsActiveState = {};
    filterArr.forEach((_, i) => (newState[i] = i === idx));
    setActive(newState);

    if (idx === 0) {
      setChangeTable(false);
      setJobPosted(filterJobs("open"));
    } else if (idx === 1) {
      setChangeTable(false);
      setJobPosted(filterJobs("closed"));
    } else if (idx === 2) {
      setChangeTable(true);
    }
  };

  useEffect(() => {
    setJobPosted(jobsPostedByCompany);
  }, []);

  return (
    <section className="dashboard-container min-h-svh">
      <h2 className="text-2xl font-bold mb-1">
        Frack, see how your recruitment is going
      </h2>
      <span className="text-[#7C8698]">
        This is your complete frack overview
      </span>
      <div className="flex w-full text-[#626263] md:text-lg font-bold mt-16 border-b border-[#CCD2D9]">
        {filterArr.map((item, idx) => (
          <span
            className={`tab ${active[idx] ? "active" : ""} max-sm:h-[50px]`}
            key={idx}
            onClick={() => activeFunc(idx)}
          >
            {item}
          </span>
        ))}
      </div>
      {!changeTable ? (
        <JobTable<JobPosted> data={jobPosted} columns={companyActiveColumns} />
      ) : (
        <JobTable<userObject>
          data={hiredCandidates}
          columns={hiredCandidatesColumn}
        />
      )}
    </section>
  );
};

export default CompanyJobTables;
