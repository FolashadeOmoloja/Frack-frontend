import { getRandomColor } from "@/utilities/constants";
import Profile from "./Profile";

const hexCode = getRandomColor();
const userObject = {
  firstName: "Ditimi",
  lastName: "Podeke",
  profileImage: null,
  phoneNumber: "+1-234-567-8901",
  emailAddress: "john.doe@example.com",
  password: "securepassword123",
  role: "Software Engineer",
  experienceYears: 5,
  country: "United States",
  location: "Lagos, Nigeria",
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
