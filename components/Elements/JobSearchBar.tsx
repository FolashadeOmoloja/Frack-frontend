import { useEffect, useState } from "react";
import {
  hoursFilter,
  proximityFilter,
  experienceFilter,
} from "@/utilities/constants/searchbarData";
import { useGetAllFilters } from "@/hooks/content-hook";

type IsOpenState = {
  [key: number]: boolean;
};
type filteredJobs = {
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
}[];

type IsCheckedState = {
  [key: number]: boolean;
};

type DataItem = {
  label: string;
  options: string[];
};

const JobSearchBar = ({
  onSearch,
  jobPosting,
  onNewSearch,
  changeIsCheck,
}: {
  onSearch: React.Dispatch<React.SetStateAction<filteredJobs>>;
  onNewSearch: React.Dispatch<React.SetStateAction<filteredJobs>>;
  changeIsCheck: React.Dispatch<React.SetStateAction<IsCheckedState>>;
  jobPosting: filteredJobs;
}) => {
  const [isOpen, setIsOpen] = useState<IsOpenState>({});
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");

  const { filter } = useGetAllFilters();
  const searchBarData: DataItem[] = [
    { label: "Select your skill", options: filter.skills },
    { label: "Select a country", options: filter.country },
    { label: "Select a department", options: filter.role },
  ];

  const [selectedItems, setSelectedItems] = useState(
    searchBarData.map(() => "")
  );

  const showOptions = (idx: number) => {
    setIsOpen((prevState) => {
      const newState: IsOpenState = {};
      newState[idx] = !prevState[idx];
      return newState;
    });
  };

  const search = () => {
    const newFilteredJobArr = jobPosting.filter((job) => {
      return (
        job.department.toLowerCase().includes(role.toLowerCase()) &&
        job.country.toLowerCase().includes(location.toLowerCase()) &&
        job.skills.some((skill) =>
          skill.toLowerCase().includes(skills.toLowerCase())
        )
      );
    });
    onSearch(newFilteredJobArr);
    onNewSearch(newFilteredJobArr);
  };

  useEffect(() => {
    search();
  }, [role, location, skills]);

  const handleSelect = (index: number, option: string) => {
    if (index == 0) {
      setSkills(option);
    } else if (index == 1) {
      setRole(option);
    }
    if (index == 2) {
      setLocation(option);
    }

    const newSelectedItems = [...selectedItems];
    newSelectedItems[index] = option;
    setSelectedItems(newSelectedItems);
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: false,
    }));
  };

  const reset = () => {
    setSelectedItems(searchBarData.map(() => ""));
    onSearch(jobPosting);
    onNewSearch(jobPosting);
    changeIsCheck(() => {
      const resetState: IsCheckedState = {};
      hoursFilter
        .concat(proximityFilter)
        .concat(experienceFilter)
        .forEach((filter) => {
          resetState[filter.idx] = false;
        });
      return resetState;
    });
  };

  return (
    <section className="flex items-center mb-10 sm:h-[50px] max-sm:flex-col max-sm:gap-7">
      <section className="flex sm:basis-4/5 h-full max-sm:flex-col w-full max-sm:gap-4">
        {searchBarData.map((item, idx) => (
          <div
            key={idx}
            className="relative sm:h-full h-[50px]  sm:basis-1/3 w-full"
          >
            <button
              className={`dropdown-button h-full w-full max-sm:rounded-md ${
                idx == 1 || idx == 2 ? "sm:border-l-0" : ""
              }`}
              onClick={() => showOptions(idx)}
            >
              {selectedItems[idx] || item.label}
            </button>
            {isOpen[idx] && (
              <div className="dropdown-menu custom-scrollbar">
                {item.options.map((option, optionIdx) => (
                  <div
                    key={optionIdx}
                    className="dropdown-item "
                    onClick={() => handleSelect(idx, option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
      <button
        className="sm:h-full h-[50px]  bg-[#000080] sm:basis-[20%] max-sm:w-full text-white rounded-r-md max-sm:rounded-l-md transition-[300ms]  hover:bg-[#000099] cursor-pointer"
        onClick={() => reset()}
      >
        Reset
      </button>
    </section>
  );
};

export default JobSearchBar;
