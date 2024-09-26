"use client";

import ProfileBox, {
  DownloadResumeBox,
} from "@/components/Elements/ProfileBox";
import { userObject, userCompanyObject } from "@/utilities/constants/typeDef";
import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import TalentProfileForm from "./TalentProfileForm";
import { searchBarData } from "@/utilities/constants/searchbarData";
import CompanyProfileForm from "./CompanyProfileForm";

// Define a conditional type for the user prop based on skillsBool
type ProfileDetailsProps<T extends boolean> = {
  skillsBool: T;
  user: T extends true ? userObject : userCompanyObject;
  skillsArr: string[];
};

const ProfileDetails = <T extends boolean>({
  skillsBool,
  user,
  skillsArr: initialSkillsArr,
}: ProfileDetailsProps<T>) => {
  const [isForm, setIsForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [skillsArr, setSkillsArr] = useState<string[]>(initialSkillsArr);

  const handleSelect = (option: string) => {
    if (skillsArr.length < 6 && !skillsArr.includes(option)) {
      setSkillsArr([...skillsArr, option]);
    }
    setIsOpen(false);
  };

  const handleRemoveSkill = (index: number) => {
    const updatedSkills = skillsArr.filter((_, idx) => idx !== index);
    setSkillsArr(updatedSkills);
  };

  return (
    <section className="basis-[70%]">
      <section className="bg-white rounded-md lg:h-[680px] p-9 max-slg:p-7 max-sm:px-4 ">
        {!isForm ? (
          skillsBool ? (
            <section>
              <ProfileBox
                title={"Full Name"}
                details={`${(user as userObject).firstName} ${
                  (user as userObject).lastName
                }`}
              />
              <ProfileBox title={"Email Address"} details={user.emailAddress} />
              <ProfileBox
                title={"Mobile Number"}
                details={user.countryCode + user.phoneNumber}
              />
              <ProfileBox
                title={"Experience Level"}
                details={`${(user as userObject).experienceLevel} `}
              />
              <ProfileBox
                title={"Years of Experience"}
                details={`${(user as userObject).experienceYears} `}
              />
              <ProfileBox
                title={"Industry"}
                details={(user as userObject).industry}
              />
              <ProfileBox
                title={"Work mode preference"}
                details={user.preference}
              />
              <DownloadResumeBox
                title={"Resume"}
                filename={(user as userObject).resume}
              />
              <button
                onClick={() => {
                  setIsForm(true);
                }}
                className="py-4 px-6 bg-[#000080] text-white rounded-md font-semibold mt-5 btn-hover"
              >
                Edit Profile
              </button>
            </section>
          ) : (
            <section>
              <ProfileBox
                title={"Company Name"}
                details={`${(user as userCompanyObject).companyName} `}
              />
              <ProfileBox
                title={"Full Name"}
                details={`${(user as userCompanyObject).firstName} ${
                  (user as userCompanyObject).lastName
                }`}
              />
              <ProfileBox
                title={"Role"}
                details={(user as userCompanyObject).companyRole}
              />
              <ProfileBox title={"Email Address"} details={user.emailAddress} />
              <ProfileBox
                title={"Mobile Number"}
                details={user.countryCode + user.phoneNumber}
              />
              <ProfileBox
                title={"Industry"}
                details={`${(user as userCompanyObject).industry.join(",")} `}
              />
              <ProfileBox title={"Work Culture"} details={user.preference} />
              <button
                onClick={() => {
                  setIsForm(true);
                }}
                className="py-4 px-6 bg-[#000080] text-white rounded-md font-semibold mt-14 btn-hover"
              >
                Edit Profile
              </button>
            </section>
          )
        ) : (
          <section>
            {skillsBool ? (
              <TalentProfileForm
                user={user as userObject}
                changeState={setIsForm}
              />
            ) : (
              <CompanyProfileForm
                user={user as userCompanyObject}
                changeState={setIsForm}
              />
            )}
          </section>
        )}
      </section>
      {skillsBool ? (
        <section className="bg-white rounded-md mt-10 p-9 max-slg:p-7 max-sm:px-4 ">
          <div className="flex justify-between text-[#000080] font-bold text-lg relative">
            <span className="text-[#1B2C42] ">Skills</span>
            <button onClick={() => setIsOpen(!isOpen)}>Add</button>
            {isOpen && (
              <div className="dropdown-menu custom-scrollbar max-w-[270px] max-h-[200px] font-normal right-0 text-sm text-black top-6">
                {searchBarData[0].options.map((option, optionIdx) => (
                  <div
                    key={optionIdx}
                    className="dropdown-item"
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <ul className="text-[#7C8698] font-medium mt-8 flex flex-col gap-3">
            {skillsArr.map((item, idx) => (
              <li
                className="flex justify-between cursor-pointer items-center"
                key={idx}
              >
                <span>{item}</span>
                <span
                  className="text-sm text-[#000080]"
                  onClick={() => handleRemoveSkill(idx)}
                >
                  <FaTrashCan />
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-red-600 font-semibold">
            (Max. of 6 core skills)
          </p>
        </section>
      ) : null}
    </section>
  );
};

export default ProfileDetails;
