import { getRandomColor } from "@/utilities/constants";
import Profile from "./Profile";

const hexCode = getRandomColor();
const userObject = {
  firstName: "John",
  lastName: "Doe",
  profileImage: null,
  phoneNumber: "+1-234-567-8901",
  emailAddress: "john.doe@example.com",
  password: "securepassword123",
  role: "Software Engineer",
  experienceYears: 5,
  country: "United States",
  accountStatus: "Active",
  hex: hexCode,
};

const TalentProfile = () => {
  return (
    <>
      <Profile skillsBool user={userObject} />
    </>
  );
};

export default TalentProfile;
