import { useState, useEffect } from "react";

const hoursFilter = ["6", "8", "10", "12"];
const proximityFilter = ["On Site", "Hybrid", "Fully Remote", "Remote"];
const experienceFilter = ["Intermediate", "Senior", "C-level"];

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
  country: string;
};

type FilterProps = {
  jobPostings: Job[];
  onFilter: (filteredJobs: Job[]) => void;
};

const Filter = ({ jobPostings, onFilter }: FilterProps) => {
  const [selectedHours, setSelectedHours] = useState<string[]>([]);
  const [selectedProximity, setSelectedProximity] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);

  const handleCheckboxChange = (filterType: string, value: string) => {
    const updateState = (
      currentState: string[],
      setState: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
      if (currentState.includes(value)) {
        setState(currentState.filter((item) => item !== value));
      } else {
        setState([...currentState, value]);
      }
    };

    if (filterType === "hours") {
      updateState(selectedHours, setSelectedHours);
    } else if (filterType === "proximity") {
      updateState(selectedProximity, setSelectedProximity);
    } else if (filterType === "experience") {
      updateState(selectedExperience, setSelectedExperience);
    }
  };

  useEffect(() => {
    const filteredJobs = jobPostings.filter((job) => {
      const hoursMatch = selectedHours.length
        ? selectedHours.includes(job.jobHours)
        : true;
      const proximityMatch = selectedProximity.length
        ? selectedProximity.includes(job.jobProximity)
        : true;
      const experienceMatch = selectedExperience.length
        ? selectedExperience.includes(job.experience)
        : true;

      return hoursMatch && proximityMatch && experienceMatch;
    });

    onFilter(filteredJobs);
  }, [
    selectedHours,
    selectedProximity,
    selectedExperience,
    jobPostings,
    onFilter,
  ]);

  return (
    <section>
      <ul>
        <li>
          <span className="mb-6 inline-block font-semibold">Job Hrs</span>
          <ul>
            {hoursFilter.map((item, idx) => (
              <li key={idx} className="mb-1 flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="accent-[#000080] w-4 h-4 cursor-pointer bg-slate-700"
                  onChange={() => handleCheckboxChange("hours", item)}
                />
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
                <input
                  type="checkbox"
                  className="accent-[#000080] w-4 h-4 cursor-pointer bg-slate-700"
                  onChange={() => handleCheckboxChange("proximity", item)}
                />
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
                <input
                  type="checkbox"
                  className="accent-[#000080] w-4 h-4 cursor-pointer bg-slate-700"
                  onChange={() => handleCheckboxChange("experience", item)}
                />
                <span className="text-sm flex mb-1">{item}</span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Filter;
