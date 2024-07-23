import { userObject } from "@/utilities/constants/typeDef";
import LeftSection from "./LeftSection";
import ProfileDetails from "./ProfileDetails";

const Profile = ({
  skillsBool,
  user,
}: {
  skillsBool: boolean;
  user: object;
}) => {
  return (
    <section className="dashboard-container min-h-svh flex max-md:flex-col gap-14">
      <LeftSection user={user as userObject} />
      <ProfileDetails skillsBool={skillsBool} />
    </section>
  );
};

export default Profile;