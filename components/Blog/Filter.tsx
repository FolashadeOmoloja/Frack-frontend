"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Logic for search functionality
    console.log("Searching for:", searchTerm);
    // Populate searchResults based on searchTerm
    setDropdownVisible(true);
  };

  return (
    <div className=" inline-block w-full mb-8">
      <div className="mb-5 relative w-full md:w-[370px] ">
        <input
          type="text"
          id="searchInput"
          placeholder="Search Posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full  p-3 text-base border border-gray-300 rounded-md focus:border-2 focus:border-[#000080] outline-none"
        />
        <button
          id="searchButton"
          onClick={handleSearch}
          className="absolute top-0 right-0 h-full w-12 flex items-center justify-center bg-transparent border-none cursor-pointer hover:text-[#000080] text-gray-500"
        >
          <FaSearch />
        </button>
      </div>
      {dropdownVisible && (
        <div
          id="searchDropdown"
          className="absolute z-10 w-full md:w-[370px] mt-2 bg-white shadow-lg rounded-md"
        >
          {/* Dropdown content will be populated dynamically */}
          {searchResults.length > 0 ? (
            searchResults.map((result, index) => (
              <div key={index} className="p-4 border-b border-gray-200">
                {result}
              </div>
            ))
          ) : (
            <div className="p-4" onClick={() => setDropdownVisible(false)}>
              No results found.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Filter;
