import { jobPostings } from "@/utilities/constants/jobData";
import CTABTN from "../Elements/CTA/CTA-Button";

const JobPosting = () => {
  return (
    <section className="flex flex-col gap-4">
      {jobPostings.map((item, idx) => (
        <section
          key={idx}
          className="bg-white rounded-md p-6 flex justify-between"
        >
          <div>
            <h6>{item.title}</h6>
            <div>
              <span>{item.location}</span>
              <span>{item.priceRange}</span>
              <span>{item.jobProximity}</span>
              <span>{item.experience}</span>
            </div>
            <div>
              {item.skills.map((opt, idx) => (
                <span key={idx}>{opt}</span>
              ))}
            </div>
          </div>
          <div>
            <CTABTN
              route={""}
              CTA="View Jobs"
              width="w-full md:w-[138px]"
              height="39px"
              backGround="bg-[#F6F7F8]"
              color="text-[#7C8698]"
            />
          </div>
        </section>
      ))}
    </section>
  );
};

export default JobPosting;
