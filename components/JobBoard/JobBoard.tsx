import JobSearchBar from "../Elements/JobSearchBar";

const JobBoard = () => {
  return (
    <section className="section-container bg-[#F4F5F7] mt-0  py-7">
      <JobSearchBar />
      <section className="flex flex-col md:flex-row md:h-full gap-10">
        {/* <div className="flex-shrink-0 md:w-1/3 lg:w-1/4   bg-white p-5 shadow-md md:sticky md:top-0 rounded-sm h-[100vh]">
          left-side
        </div>
        <div className="flex-grow bg-white p-5 overflow-y-auto h-[100vh] ">
          right-side
        </div> */}
      </section>
    </section>
  );
};

export default JobBoard;
