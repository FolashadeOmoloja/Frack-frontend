"use client";
import React, { useState } from "react";
import { HiMiniBars3BottomLeft, HiMiniChevronRight } from "react-icons/hi2";
import { ImCross } from "react-icons/im";
import CTABTN from "../../Elements/CTA/CTA-Button";
import { useRouter } from "next/navigation";
import UserAvatar from "@/components/Elements/UserAvatar";

const DropDown = [
  {
    navItem: "Setting",
    icon: "/images/dashboard/icon1.svg",
    href: "/hire-talent/dashboard/setting",
  },
  {
    navItem: "Sign Out",
    icon: "/images/dashboard/icon2.svg",
    href: "/hire-talent/dashboard/signout",
  },
];

const NavLinks = [
  {
    navItem: "Dashboard",
    href: "/hire-talent/dashboard",
  },
  {
    navItem: "Jobs",
    href: "/hire-talent/dashboard/my-jobs",
  },
  {
    navItem: "Settings",
    href: "/hire-talent/dashboard/settings",
  },
];
const DashboardMobileNav = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:hidden relative ">
      <section className="fixed inset-0 flex justify-between items-center h-24 px-9 max-sm:px-4  bg-white z-40">
        {isOpen ? (
          <button onClick={() => setIsOpen(!isOpen)}>
            <ImCross className="text-3xl text-[#000080] " />
          </button>
        ) : (
          <button onClick={() => setIsOpen(!isOpen)}>
            <HiMiniBars3BottomLeft className="text-3xl text-[#000080] " />
          </button>
        )}
        <div onClick={() => router.push("/")}>
          <img
            src="/images/homepage/fracklogo.png"
            alt="logo"
            className="max-sm:w-[119px]"
          />
        </div>
        <div className="max-xsm:hidden">
          <UserAvatar dropDown={DropDown} />
        </div>
      </section>
      {
        <section
          className={`${
            isOpen ? "translate-y-0 opacity-1" : "-translate-y-full opacity-0"
          } navItem`}
        >
          {NavLinks.map((item, idx) => (
            <ul className={`flex flex-col gap-14 mb-8`} key={idx}>
              <li
                className="sm:text-lg font-semibold text-[#000080] flex justify-between"
                onClick={() => router.push(item.href)}
              >
                <span>{item.navItem}</span>
                <span>
                  <HiMiniChevronRight />
                </span>
              </li>
            </ul>
          ))}
          <div className="flex flex-col md:hidden   gap-4">
            <div className="xsm:hidden">
              <UserAvatar dropDown={DropDown} />
            </div>
            <button
              className="bg-[#22CCED] h-[55px] rounded-[6px] font-semibold"
              onClick={() => {
                router.push("/hire-talent/dashboard/add-jobs");
              }}
            >
              Add Job
            </button>
            <CTABTN width="w-full" route="/" CTA="Sign Out" />
          </div>
        </section>
      }
    </nav>
  );
};

export default DashboardMobileNav;
