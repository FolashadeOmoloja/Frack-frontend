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
    <section className="flex items-center space-x-4">
      {searchBarData.map((item, idx) => (
        <div key={idx} className="relative">
          <div className="dropdown-button" onClick={() => showOptions(idx)}>
            {selectedItems[idx] || item.label}
          </div>
          {isOpen[idx] && (
            <div className="dropdown-menu absolute mt-1 bg-white shadow-lg rounded z-10">
              {item.options.map((option, optionIdx) => (
                <div
                  key={optionIdx}
                  className="dropdown-item px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSelect(idx, option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <button className="search-button px-4 py-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </section>
  );
};

export default JobSearchBar;
