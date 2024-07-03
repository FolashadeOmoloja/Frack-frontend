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
      <button className="sm:h-full h-[50px]  bg-[#000080] sm:basis-[20%] max-sm:w-full text-white rounded-r-md max-sm:rounded-l-md transition-[300ms]  hover:bg-[#000099] cursor-pointer">
        Search
      </button>
    </section>
  );
};

export default JobSearchBar;
