import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";

type DropDown = {
  navItem: string;
  icon: string;
  href: string;
}[];

const UserAvatar = ({ dropDown }: { dropDown: DropDown }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="centered max-xsm:justify-start gap-4 cursor-pointer relative"
      onClick={toggleDropdown}
    >
      <div className="w-[51px] h-[51px] rounded-full overflow-hidden ">
        <img
          src="/images/dashboard/avatar.svg"
          alt="logo"
          className="object-center"
        />
      </div>
      <BsCaretDownFill fontSize={13} className="max-md:hidden" />
      {isOpen && (
        <ul className="absolute z-20 mt-5 top-full right-0 bg-white  rounded-lg pl-6 py-[27px]  w-[180px]  flex flex-col gap-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-md:hidden">
          {dropDown.map((item, idx) => (
            <li
              onClick={() => router.push(item.href)}
              className="gap-4 flex items-center text-[#7C8698] hover:text-[#000080] hover:font-medium transition-all "
              key={idx}
            >
              <img src={item.icon} alt="icon" className="w-4 h-4" />
              <span>{item.navItem}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserAvatar;
