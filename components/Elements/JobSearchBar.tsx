"use client";
import { useState } from "react";
import { searchBarData } from "@/utilities/constants/searchbarData";

type IsOpenState = {
  [key: number]: boolean;
};

const JobSearchBar = () => {
  const [isOpen, setIsOpen] = useState<IsOpenState>({});
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

  const handleSelect = (index: number, option: string) => {
    const newSelectedItems = [...selectedItems];
    newSelectedItems[index] = option;
    setSelectedItems(newSelectedItems);
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: false,
    }));
  };

  return (
    <section className="flex items-center mb-10 h-[50px]">
      <section className="flex basis-4/5 h-full job-searchbar">
        {searchBarData.map((item, idx) => (
          <div key={idx} className="relative h-full basis-1/3 ">
            <button
              className="dropdown-button h-full w-full"
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
      <button className="h-full  bg-[#000080] basis-[20%] text-white rounded-r-md transition-[300ms]  hover:bg-[#000099] cursor-pointer">
        Search
      </button>
    </section>
  );
};

export default JobSearchBar;
