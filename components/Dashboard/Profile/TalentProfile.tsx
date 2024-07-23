import { getRandomColor } from "@/utilities/constants";
import Profile from "./Profile";

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
  role: "Software Engineer",
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

const TalentProfile = () => {
  return (
    <>
      <Profile skillsBool user={userObject} />
    </>
  );
};

export default TalentProfile;
