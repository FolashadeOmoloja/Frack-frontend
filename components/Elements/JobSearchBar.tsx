"use client";
import { useState } from "react";
import { searchBarData } from "@/utilities/constants/searchbarData";

const JobSearchBar = () => {
  const [selectedItems, setSelectedItems] = useState(
    searchBarData.map(() => "")
  );

  const handleSelect = (index: number, option: string) => {
    const newSelectedItems = [...selectedItems];
    newSelectedItems[index] = option;
    setSelectedItems(newSelectedItems);
  };

  return (
    <section className="flex items-center space-x-4">
      {searchBarData.map((item, idx) => (
        <div key={idx} className="relative">
          <button className="dropdown-button">
            {selectedItems[idx] || item.label}
          </button>
          <div className="dropdown-menu absolute mt-1 bg-white shadow-lg rounded">
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
        </div>
      ))}
      <button className="search-button px-4 py-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </section>
  );
};

export default JobSearchBar;
