import DashboardNavbar from "@/components/Dashboard/Navbar/Navbar";
import JobBoard from "@/components/JobBoard/JobBoard";
const NavLinks = [
  {
    navItem: "Dashboard",
    href: "/dashboard",
  },
  {
    navItem: "Jobs",
    href: "/dashboard/jobs",
  },
];

const DropDown = [
  {
    navItem: "Setting",
    icon: "/images/dashboard/icon1.svg",
    href: "/dashboard/setting",
  },
  {
    navItem: "Sign Out",
    icon: "/images/dashboard/icon2.svg",
    href: "/",
  },
];

const TalentJobPage = () => {
  return (
    <>
      <DashboardNavbar
        activeItem={1}
        NavLinks={NavLinks}
        DropDown={DropDown}
        buttonCta="My Jobs"
        buttonLink="/dashboard/my-jobs"
      />
      <JobBoard className="relative top-[96px]" />
    </>
  );
};

export default TalentJobPage;
