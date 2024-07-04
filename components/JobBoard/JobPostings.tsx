import { jobPostings } from "@/utilities/constants/jobData";
import CTABTN from "../Elements/CTA/CTA-Button";

const JobPosting = () => {
  return (
    <section>
      <h4 className="text-[#7C8698] text-sm font-[500] mb-5">
        Showing {jobPostings.length} of {jobPostings.length} jobs
      </h4>
      <section className="flex flex-col gap-4">
        {jobPostings.map((item, idx) => (
          <section
            key={idx}
            className="bg-white rounded-md p-6 flex justify-between max-xlg:flex-col gap-6"
          >
            <div>
              <h6 className="text-xl font-semibold mb-5">{item.title}</h6>
              <div className="flex gap-7 max-sslg:gap-5  mb-7 flex-wrap">
                <span>{item.location}</span>
                <span>{item.priceRange}</span>
                <span>{item.jobProximity}</span>
                <span>{item.experience}</span>
              </div>
              <div className="flex gap-4 flex-wrap">
                {item.skills.map((opt, idx) => (
                  <span
                    key={idx}
                    className="text-sm h-11 min-w-32 bg-[#F6F7F8] rounded-md flex items-center justify-center px-2 text-[#7C8698] font-semibold"
                  >
                    {opt}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <CTABTN
                route={`/job-details/${idx}`}
                CTA="View Jobs"
                width="w-full xlg:w-[138px]"
                height="39px"
                backGround="bg-[#F6F7F8]"
                color="text-[#7C8698]"
              />
            </div>
          </section>
        ))}
      </section>
    </section>
  );
};

export default JobPosting;
