import JobSearchBar from "../Elements/JobSearchBar";
import Filter from "./Filter";
import JobPosting from "./JobPostings";

const JobBoard = () => {
  return (
    <section className="section-container bg-[#F4F5F7] mt-0 py-7">
      <JobSearchBar />
      <section className="flex flex-col md:flex-row md:h-full gap-10">
        <div className="md:sticky md:top-[40px] h-[calc(100vh-50px)] md:h-[calc(100vh-80px)] overflow-y-auto flex-shrink-0 md:w-1/3 lg:w-1/4 bg-white p-5 shadow-md rounded-sm custom-scrollbar">
          <Filter />
        </div>
        <div className="flex-grow px-5 pb-5 overflow-y-auto ">
          <JobPosting />
        </div>
      </section>
    </section>
  );
};

export default JobBoard;
