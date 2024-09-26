import { userCompanyObject, userObject } from "@/utilities/constants/typeDef";
import { FaCamera, FaLinkedin } from "react-icons/fa6";

const LeftSection = ({ user }: { user: userObject }) => {
  return (
    <aside className="basis-[30%] flex flex-col gap-10">
      <div className="bg-white rounded-md h-[680px] flex flex-col px-4 centered ">
        <div className="relative">
          <div className="h-[200px] w-[200px] rounded-full overflow-hidden ">
            {user.profileImage ? (
              <img src={user.profileImage} alt="" className="object-center" />
            ) : (
              <div
                className={`w-full h-full  text-white text-8xl font-bold centered`}
                style={{ background: user.hex }}
              >
                {user.firstName[0]}
              </div>
            )}
            <div
              className="w-10 h-10  rounded-full border-4 border-white text-white absolute bottom-[-15px] cursor-pointer left-[40%] z-10 centered"
              style={{ background: user.hex }}
            >
              <FaCamera />
            </div>
          </div>
        </div>
        <span className="font-semibold text-3xl mt-8">
          {user.firstName} {user.lastName}
        </span>
        <span className="font-bold text-[#7C8698] mt-6">{user.profession}</span>
        <span className="font-bold text-[#7C8698] mt-6">{user.location}, {user.country}</span>
        <div className="py-4 px-6 centered bg-[#000080] text-white rounded-md font-semibold mt-11">
          Profile status: {user.accountStatus}
        </div>
      </div>
      <div className="bg-white rounded-md  flex justify-between gap-7 p-6 max-xxsm:flex-col max-xxsm:gap-4 max-xsm:p-4">
        <span className="text-[#0A66C2] text-3xl">
          <FaLinkedin />
        </span>
        <span className="text-sm text-[#7C8698] font-semibold">
          {user.linkedInUrl}
        </span>
      </div>
    </aside>
  );
};

export default LeftSection;

export const HireLeftSection = ({ user }: { user: userCompanyObject }) => {
  return (
    <aside className="basis-[30%] flex flex-col gap-10">
      <div className="bg-white rounded-md h-[680px] flex flex-col px-4 centered ">
        <div className="relative">
          <div className="h-[200px] w-[200px] rounded-full overflow-hidden ">
            {user.profileImage ? (
              <img src={user.profileImage} alt="" className="object-center" />
            ) : (
              <div
                className={`w-full h-full  text-white text-8xl font-bold centered`}
                style={{ background: user.hex }}
              >
                {user.companyName[0]}
              </div>
            )}
            <div
              className="w-10 h-10  rounded-full border-4 border-white text-white absolute bottom-[-15px] cursor-pointer left-[40%] z-10 centered"
              style={{ background: user.hex }}
            >
              <FaCamera />
            </div>
          </div>
        </div>
        <span className="font-semibold text-3xl mt-8">{user.companyName}</span>
        <span className="font-bold text-[#7C8698] mt-6">
          {user.industry.join(",")}
        </span>
        <span className="font-bold text-[#7C8698] mt-6">{user.location}</span>
        <div className="py-4 px-6 centered bg-[#000080] text-white rounded-md font-semibold mt-11">
          Profile status: {user.accountStatus}
        </div>
      </div>
      <div className="bg-white rounded-md  flex justify-between gap-7 p-6 max-xxsm:flex-col max-xxsm:gap-4 max-xsm:p-4">
        <span className="text-[#0A66C2] text-3xl">
          <FaLinkedin />
        </span>
        <span className="text-sm text-[#7C8698] font-semibold">
          {user.linkedInUrl}
        </span>
      </div>
    </aside>
  );
};
