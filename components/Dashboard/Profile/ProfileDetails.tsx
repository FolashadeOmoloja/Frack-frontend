"use client";
import ProfileBox, {
  DownloadResumeBox,
} from "@/components/Elements/ProfileBox";
import { userObject } from "@/utilities/constants/typeDef";

const ProfileDetails = ({
  skillsBool,
  user,
}: {
  skillsBool: boolean;
  user: userObject;
}) => {
  return (
    <section className="basis-[70%]">
      <section className="bg-white rounded-md lg:h-[680px] p-9 max-slg:p-7 max-sm:px-4 ">
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
        {/* <ProfileBox title={"Work mode prefence"} details={user.preference} /> */}
        <ProfileBox title={"Email Address"} details={user.emailAddress} />
        <DownloadResumeBox title={"Resume"} filename={user.filename} />
        <button className="py-4 px-6  bg-[#000080] text-white rounded-md font-semibold mt-8 btn-hover">
          Edit Profile
        </button>
      </section>
      {skillsBool ? (
        <section className="bg-white h-[197px] rounded-md mt-10">
          <div className="flex justify-between">
            <span>Skills</span>
            <button>add</button>
          </div>
          <ul>
            <li>TypeScript</li>
            <li>Tailwind</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </section>
      ) : null}
    </section>
  );
};

export default ProfileDetails;
