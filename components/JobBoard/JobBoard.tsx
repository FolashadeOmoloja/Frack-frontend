"use client";
import { FaFilter } from "react-icons/fa6";
import JobSearchBar from "../Elements/JobSearchBar";
import Filter from "./Filter";
import JobPosting from "./JobPostings";
import { jobPostings } from "@/utilities/constants/jobData";
import { SetStateAction, useState } from "react";

type filteredJobs = [
  {
    title: string;
    company: string;
    location: string;
    priceRange: string;
    jobProximity: string;
    jobHours: string;
    experience: string;
    skills: string[];
    role: string;
    country: string;
  }
];

const JobBoard = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobPostings);
  return (
    <section className="section-container bg-[#F4F5F7] mt-0 py-7">
      <JobSearchBar
        onSearch={setFilteredJobs}
        jobPosting={jobPostings as filteredJobs}
      />
      <button className="text-2xl text-[#000080] mb-5 sm:hidden bg-white w-full h-[50px] rounded-lg          flex justify-center items-center shadow-md">
        <FaFilter />
      </button>
      <section className="flex flex-col md:flex-row md:h-full gap-10">
        <div className="md:sticky lg:top-[40px] md:top-[80px]  h-full md:h-[calc(100vh-80px)] overflow-y-auto flex-shrink-0 md:w-1/3 lg:w-1/4 bg-white p-5 shadow-md rounded-sm custom-scrollbar max-sm:hidden">
          <Filter />
        </div>
        <div className="flex-grow md:pl-5 pb-5 overflow-y-auto ">
          <JobPosting
            filteredJobs={filteredJobs as filteredJobs}
            jobPostings={jobPostings as filteredJobs}
          />
        </div>
      </section>
    </section>
  );
};

export default JobBoard;
