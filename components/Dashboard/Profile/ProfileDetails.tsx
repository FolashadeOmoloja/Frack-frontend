"use client";
import ProfileBox, {
  DownloadResumeBox,
} from "@/components/Elements/ProfileBox";
import { userObject } from "@/utilities/constants/typeDef";
import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import TalentProfileForm from "./TalentProfileForm";

const ProfileDetails = ({
  skillsBool,
  user,
  skillsArr,
}: {
  skillsBool: boolean;
  user: userObject;
  skillsArr: [string];
}) => {
  const [isForm, setIsForm] = useState(false);
  return (
    <section className="basis-[70%]">
      <section className="bg-white rounded-md lg:h-[680px] p-9 max-slg:p-7 max-sm:px-4 ">
        {!isForm ? (
          <section>
            <ProfileBox
              title={"Full Name"}
              details={`${user.firstName} ${user.lastName}`}
            />
            <ProfileBox title={"Email Address"} details={user.emailAddress} />
            <ProfileBox
              title={"Mobile Number"}
              details={user.countryCode + user.phoneNumber}
            />
            <ProfileBox
              title={"Experience Level"}
              details={`${user.experienceLevel} `}
            />
            <ProfileBox
              title={"Years of Experience"}
              details={`${user.experienceYears} `}
            />
            <ProfileBox title={"Industry"} details={user.industry} />
            <ProfileBox
              title={"Work mode prefence"}
              details={user.preference}
            />
            <DownloadResumeBox title={"Resume"} filename={user.filename} />
            <button
              onClick={() => {
                setIsForm(true);
              }}
              className="py-4 px-6  bg-[#000080] text-white rounded-md font-semibold mt-5 btn-hover"
            >
              Edit Profile
            </button>
          </section>
        ) : (
          <section>
            {skillsBool ? (
              <TalentProfileForm user={user} changeState={setIsForm} />
            ) : null}
          </section>
        )}
      </section>
      {skillsBool ? (
        <section className="bg-white  rounded-md mt-10 p-9 max-slg:p-7 max-sm:px-4 ">
          <div className="flex justify-between text-[#000080] font-bold text-lg">
            <span className="text-[#1B2C42] ">Skills</span>
            <button>Add</button>
          </div>
          <ul className="text-[#7C8698]  font-medium mt-8 flex flex-col gap-3">
            {skillsArr.map((item, idx) => (
              <li
                className="flex justify-between cursor-pointer  items-center"
                key={idx}
              >
                <span>{item}</span>
                <span className="text-sm text-[#000080]">
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
