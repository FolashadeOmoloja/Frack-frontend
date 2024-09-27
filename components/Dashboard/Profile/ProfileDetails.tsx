"use client";

import ProfileBox, {
  DownloadResumeBox,
} from "@/components/Elements/ProfileBox";
import { userObject, userCompanyObject } from "@/utilities/constants/typeDef";
import { useState } from "react";
import TalentProfileForm from "./TalentProfileForm";
import CompanyProfileForm from "./CompanyProfileForm";
import SkillsBox from "@/components/Elements/SkillsBox";

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

  const [skillsArr, setSkillsArr] = useState<string[]>(initialSkillsArr);

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
      {skillsBool ? <SkillsBox initialSkills={skillsArr} /> : null}
    </section>
  );
};

export default ProfileDetails;
