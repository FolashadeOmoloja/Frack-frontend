import DashboardNavbar from "../Navbar/Navbar";

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
    navItem: "Sign Out",
    icon: "/images/dashboard/icon2.svg",
    href: "/hire-talent/dashboard/signout",
  },
];

const HireTalentNav = ({ activeItem }: { activeItem?: number }) => {
  return (
    <>
      <DashboardNavbar
        activeItem={activeItem}
        NavLinks={NavLinks}
        DropDown={DropDown}
        buttonCta="Add Job"
        buttonLink="/hire-talent/dashboard/add-jobs"
      />
    </>
  );
};

export default HireTalentNav;
