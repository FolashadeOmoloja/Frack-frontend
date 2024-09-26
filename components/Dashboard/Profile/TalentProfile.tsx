"use client";
import { getRandomColor } from "@/utilities/constants";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import ClientProvider from "@/components/Client/ClientProvider";

const hexCode = getRandomColor();
const userObject = {
  firstName: "Ditimi",
  lastName: "Podeke",
  profileImage: null,
  phoneNumber: "8169537139",
  countryCode: "+234",
  emailAddress: "john.doe@example.com",
  industry: "Engineering",
  password: "securepassword123",
  profession: "Software Engineer",
  experienceYears: "4-6 years",
  experienceLevel: "Senior",
  preference: "Remote",
  country: "United States",
  location: "Lagos, Nigeria",
  filename: "Profile.pdf",
  accountStatus: "Wait list",
  hex: hexCode,
  linkedInUrl: "www.linkedin.com/in/ditimi-podeke-63b8a11a6/",
};

const skillsArr = ["TypeScript", "Tailwind", "CSS", "JavaScript", "Python"];

const TalentProfile = () => {
  const { user } = useSelector((store: any) => store.auth);
  console.log(user);
  return (
    <ClientProvider>
      <Profile skillsBool user={user} skillsArr={user?.skills} />
    </ClientProvider>
  );
};

export default TalentProfile;
