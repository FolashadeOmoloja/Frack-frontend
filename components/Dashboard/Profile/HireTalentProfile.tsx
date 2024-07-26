"use client";
import { getRandomColor } from "@/utilities/constants";
import Profile from "./Profile";

const hexCode = getRandomColor();
const userObject = {
  companyName: "Frack Pro",
  firstName: "Folashade",
  lastName: "Omoloja",
  profileImage: null,
  phoneNumber: "8169537139",
  countryCode: "+234",
  emailAddress: "info@frack.pro",
  industry: ["Education", "Technology"],
  password: "securepassword123",
  companyRole: "Head of Talents",
  preference: "Remote",
  country: "Nigeria",
  location: "Lagos, Nigeria",
  accountStatus: "Active",
  hex: hexCode,
  linkedInUrl: "www.linkedin.com/in/frack/",
};

const skillsArr = ["TypeScript", "Tailwind", "CSS", "JavaScript", "Python"];

const HireTalentProfile = () => {
  return (
    <>
      <Profile
        skillsBool={false}
        user={userObject}
        skillsArr={skillsArr as [string]}
      />
    </>
  );
};

export default HireTalentProfile;
