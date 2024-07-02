import React from "react";

const JobBoard = () => {
  return (
    <section className="section-container bg-[#F4F5F7] mt-0 h-[calc(100vh-96px)] py-7">
      <section className="flex flex-col md:flex-row md:h-full gap-10">
        <div className="flex-shrink-0 md:w-1/3 lg:w-1/4 h-64 md:h-full bg-white p-5 shadow-md md:sticky md:top-0">
          left-side
        </div>
        <div className="flex-grow bg-white p-5 overflow-y-auto ">
          right-side
        </div>
      </section>
    </section>
  );
};

export default JobBoard;
