import { useState } from "react";

type JobPosting = {
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
};

type FilterProps = {
  onFilter: (filteredJobs: JobPosting[]) => void;
  jobPostings: JobPosting[];
};

const hoursFilter = ["6", "8", "10", "12"];
const proximityFilter = ["On Site", "Hybrid", "Fully Remote", "Remote"];
const experienceFilter = ["Intermediate", "Senior", "C-level"];

const Filter = ({ onFilter, jobPostings }: FilterProps) => {
  const [selectedHours, setSelectedHours] = useState<string[]>([]);
  const [selectedProximity, setSelectedProximity] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);

  const handleCheckboxChange = (
    filterType: string,
    value: string,
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelected((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const applyFilters = () => {
    const filteredJobs = jobPostings.filter((job) => {
      const matchesHours =
        selectedHours.length === 0 || selectedHours.includes(job.jobHours);
      const matchesProximity =
        selectedProximity.length === 0 ||
        selectedProximity.includes(job.jobProximity);
      const matchesExperience =
        selectedExperience.length === 0 ||
        selectedExperience.includes(job.experience);

      return matchesHours || matchesProximity || matchesExperience;
    });
    onFilter(filteredJobs);
  };

  return (
    <section>
      <ul>
        <li>
          <span className="mb-6 inline-block font-semibold">Job Hrs</span>
          <ul>
            {hoursFilter.map((item, idx) => (
              <li key={idx} className="mb-1 flex gap-2 items-center">
                <div>
                  <input
                    type="checkbox"
                    className="accent-[#000080] w-4 h-4 cursor-pointer bg-slate-700"
                    checked={selectedHours.includes(item)}
                    onChange={() =>
                      handleCheckboxChange("hours", item, setSelectedHours)
                    }
                  />
                </div>
                <span className="text-sm flex mb-1">{item} hours</span>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <span className="mb-6 mt-[26px] inline-block font-semibold">
            Job Proximity
          </span>
          <ul>
            {proximityFilter.map((item, idx) => (
              <li key={idx} className="mb-1 flex gap-2 items-center">
                <div>
                  <input
                    type="checkbox"
                    className="accent-[#000080] w-4 h-4 cursor-pointer bg-slate-700"
                    checked={selectedProximity.includes(item)}
                    onChange={() =>
                      handleCheckboxChange(
                        "proximity",
                        item,
                        setSelectedProximity
                      )
                    }
                  />
                </div>
                <span className="text-sm flex mb-1">{item}</span>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <span className="mb-6 mt-[26px] inline-block font-semibold">
            Experience
          </span>
          <ul>
            {experienceFilter.map((item, idx) => (
              <li key={idx} className="mb-1 flex gap-2 items-center">
                <div>
                  <input
                    type="checkbox"
                    className="accent-[#000080] w-4 h-4 cursor-pointer bg-slate-700"
                    checked={selectedExperience.includes(item)}
                    onChange={() =>
                      handleCheckboxChange(
                        "experience",
                        item,
                        setSelectedExperience
                      )
                    }
                  />
                </div>
                <span className="text-sm flex mb-1">{item}</span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <button
        className="mt-4 bg-[#000080] text-white py-2 px-4 rounded-md"
        onClick={applyFilters}
      >
        Apply Filters
      </button>
    </section>
  );
};

export default Filter;
