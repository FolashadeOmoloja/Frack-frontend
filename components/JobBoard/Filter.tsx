"use client";
import { useState } from "react";
import CustomCheckbox from "../Elements/CheckBox";
import StyledCheckbox from "../Elements/CheckBox";

const hoursFilter = ["6", "8", "10", "12"];
const proximityFilter = ["On Site", "Hybrid", "Fully Remote", "Remote"];
const experienceFilter = ["Intermediate", "Senior", "C-level"];

const Filter = () => {
  const [isChecked, setIsChecked] = useState(false);
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
                    className="  accent-[#000080] w-4 h-4 cursor-pointer bg-slate-700"
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
                    className="  accent-[#000080] w-4 h-4 cursor-pointer bg-slate-700"
                  />
                </div>
                <span className="text-sm flex mb-1">{item} hours</span>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <span className="mb-6 inline-block font-semibold">Experience </span>
          <ul>
            {hoursFilter.map((item, idx) => (
              <li key={idx} className="mb-1 flex gap-2 items-center">
                <div>
                  <input
                    type="checkbox"
                    className="  accent-[#000080] w-4 h-4 cursor-pointer bg-slate-700"
                  />
                </div>
                <span className="text-sm flex mb-1">{item} hours</span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Filter;
