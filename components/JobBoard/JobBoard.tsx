"use client";
import { FaFilter } from "react-icons/fa6";
import JobSearchBar from "../Elements/JobSearchBar";
import Filter from "./Filter";
import JobPosting from "./JobPostings";
// import { jobPostings } from "@/utilities/constants/jobData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "@/redux/slices/jobPostSlice";
import { Loader2 } from "lucide-react";
import { AppDispatch } from "@/redux/store";

type Job = {
  title: string;
  company: string;
  location: string;
  priceRange: string;
  jobProximity: string;
  jobHours: string;
  experience: string;
  skills: string[];
  role: string;
  department: string;
  country: string;
};

type FilteredJobs = Job[];

type IsCheckedState = {
  [key: number]: boolean;
};

const JobBoard = ({
  className,
  mainRoute = "job-details",
}: {
  className?: string;
  mainRoute?: string;
}) => {
  const dispatch: AppDispatch = useDispatch();
  const jobPostings = useSelector((state: any) => state.jobPosts.jobPosts);
  const loading = useSelector((state: any) => state.jobPosts.loading);
  useEffect(() => {
    dispatch(fetchJobs()); // Only fetch if no jobs are stored
  }, [dispatch]);

  const [filteredJobs, setFilteredJobs] = useState<FilteredJobs>(jobPostings);
  const [newJobPosting, setNewJobPosting] = useState<FilteredJobs>(jobPostings);
  const [isChecked, setIsChecked] = useState<IsCheckedState>({});
  const [showFilter, setShowFilter] = useState(false);

  return (
    <section
      className={`section-container bg-[#F4F5F7] mt-0 py-7 ${className}`}
    >
      <h2 className="header-headline max-sm:text-center mb-8">
        Explore new opportunities <br />
        <span className="header-headline-span max-sm:text-[#000080] max-sm:bg-none">
          quickly
        </span>{" "}
        and{" "}
        <span className="header-headline-span max-sm:text-[#000080] max-sm:bg-none">
          easily
        </span>
      </h2>
      <JobSearchBar
        onNewSearch={setNewJobPosting}
        onSearch={setFilteredJobs}
        jobPosting={jobPostings}
        changeIsCheck={setIsChecked}
      />
      <button
        className="text-2xl text-[#000080] mb-5 sm:hidden bg-white w-full h-[50px] rounded-lg flex justify-center items-center shadow-md"
        onClick={() => setShowFilter(!showFilter)}
      >
        <FaFilter />
      </button>
      <section className="flex flex-col md:flex-row md:h-full gap-10">
        <div className={`filterDiv max-sm:${showFilter ? "" : "hidden"}`}>
          <Filter
            onFilter={setFilteredJobs}
            jobPostings={newJobPosting}
            isChecked={isChecked}
            changeIsCheck={setIsChecked}
          />
        </div>
        {!loading ? (
          <div className="flex-grow md:pl-5 pb-5 overflow-y-auto">
            <JobPosting
              filteredJobs={filteredJobs}
              jobPostings={jobPostings}
              mainRoute={mainRoute}
            />
          </div>
        ) : (
          <div className="flex-grow md:pl-5 pb-5 overflow-y-auto">
            <Loader2 className=" h-24 w-24 animate-spin ml-10 mt-10 text-[#000080]" />
          </div>
        )}
      </section>
    </section>
  );
};

export default JobBoard;
