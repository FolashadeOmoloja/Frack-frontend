"use client";

import {
  activeJobApplication,
  jobsPostedByCompany,
} from "@/utilities/constants/jobData";
import { useEffect, useState } from "react";
import JobTable from "../TalentDashboard/JobTable";
import { activeColumns, companyActiveColumns } from "@/utilities/tableData";

interface JobApplication {
  title: string;
  jobProximity: string;
  location: string;
  company: string;
  priceRange: string;
  status: string;
}

type IsActiveState = {
  [key: number]: boolean;
};

const CompanyJobTables = () => {
  const filterArr = ["Active Application", "Closed Jobs", "Hired Talents"];

  const [active, setActive] = useState<IsActiveState>({ [0]: true });
  const [jobApplicationData, setJobApplicationData] =
    useState<JobApplication[]>(activeJobApplication);

  // Function to filter jobs based on status
  const filterJobs = (status: string) => {
    return activeJobApplication.filter((job) =>
      job.status.toLowerCase().includes(status.toLowerCase())
    );
  };

  // Function to handle active tab change
  const activeFunc = (idx: number) => {
    const newState: IsActiveState = {};
    filterArr.forEach((_, i) => (newState[i] = i === idx));
    setActive(newState);

    // Update the job application data based on the active tab
    if (idx === 0) {
      setJobApplicationData(activeJobApplication);
    } else if (idx === 1) {
      setJobApplicationData(filterJobs("declined"));
    } else if (idx === 2) {
      setJobApplicationData(filterJobs("hired"));
    }
  };

  // Initialize with active applications on component mount
  useEffect(() => {
    setJobApplicationData(activeJobApplication);
  }, []);

  return (
    <section className="dashboard-container min-h-svh">
      <h2 className="text-2xl font-bold mb-1">
        Ditimi, see how your application is going
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
      <JobTable data={jobsPostedByCompany} columns={companyActiveColumns} />
    </section>
  );
};

export default CompanyJobTables;
