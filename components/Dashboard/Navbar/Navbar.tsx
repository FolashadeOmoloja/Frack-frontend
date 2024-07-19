"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsCaretDownFill } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
import CTABTN from "@/components/Elements/CTA/CTA-Button";
import { Icon } from "@react-pdf-viewer/core";
import { HiOutlineUserGroup } from "react-icons/hi2";

type IsOpenState = {
  [key: number]: boolean;
};

const DashboardNavbar = ({ activeItem }: { activeItem?: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(true);
  };

  const NavLinks = [
    {
      navItem: "Dashboard",
      href: "/hire-talent/dashboard",
    },
    {
      navItem: "Jobs",
      href: "/hire-talent/dashboard/my-jobs",
    },
  ];

  const DropDown = [
    {
      navItem: "Setting",
      icon: "/images/dashboard/icon1.svg",
      href: "/hire-talent/dashboard/setting",
    },
    {
      navItem: "Setting",
      icon: "/images/dashboard/icon2.svg",
      href: "/hire-talent/dashboard/signout",
    },
  ];

  const router = useRouter();
  return (
    <nav className="flex pl-16 pr-[100px] h-24 max-xlg:pr-[50px] max-xlg:pl-[10px] max-lg:hidden bg-white">
      <div className="cursor-pointer" onClick={() => router.push("/")}>
        <Image
          src={"/images/homepage/frack.png"}
          alt={"logo"}
          width={191}
          height={96}
          quality={100}
          priority
        />
      </div>
      <ul className="flex-1 flex justify-center items-center gap-10 max-xlg:gap-[20px] ">
        {NavLinks.map((item, idx) => {
          return (
            <Link
              key={idx}
              className={`relative cursor-pointer hover:text-[#000080] transition  duration-300 font-[500] text-lg ${
                activeItem === idx ? "text-[#000080] font-semibold" : ""
              }`}
              href={item.href}
            >
              <span className="">{item.navItem}</span>
            </Link>
          );
        })}
      </ul>
      <div className="flex items-center  gap-10">
        <CTABTN route="/hire-talent/add-jobs" CTA="Add job" />
        <div className="centered gap-4 cursor-pointer">
          <div className="w-[51px] h-[51px] rounded-full overflow-hidden ">
            <img
              src="/images/dashboard/avatar.svg"
              alt="logo"
              className="object-center"
            />
          </div>
          <BsCaretDownFill fontSize={13} />
        </div>
        <ul className="absolute z-20 top-full left-0 mt-2 bg-white shadow-lg rounded-lg pl-6 py-[27px]  w-[157px] h-[100px] flex flex-col gap-7">
          {DropDown.map((item, idx) => (
            <li
              onClick={() => router.push(item.href)}
              className="gap-4 centered text-[#7C8698]"
            >
              <img src={item.icon} alt="icon" />
              <span>{item.navItem}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
