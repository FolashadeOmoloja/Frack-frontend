import DashboardLayout from "@/components/Dashboard/DashboardLayout/DashboardLayout";
import DashboardNavbar from "@/components/Dashboard/Navbar/Navbar";

const companyAnalytics = [
  {
    analtyticsTitle: "Active Job Offers",
    stats: 36,
    desc: "A Total of 123 Job Views",
  },
  {
    analtyticsTitle: "Total Applicants",
    stats: 336,
    desc: "96 Shortlisted Applicants",
  },
  {
    analtyticsTitle: "Talent Interviews",
    stats: 136,
    desc: "25 Active Interviews",
  },
  {
    analtyticsTitle: "Employed Talents",
    stats: 16,
    desc: "6 Job Categories",
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

const page = () => {
  return (
    <>
      <DashboardNavbar
        activeItem={0}
        NavLinks={NavLinks}
        DropDown={DropDown}
        buttonCta="Add Job"
        buttonLink="/hire-talent/dashboard/add-jobs"
      />
      <DashboardLayout
        dashInfo="This is the breakdown of your recruitment info"
        analytics={companyAnalytics}
        link2="hire-talent/dashboard/my-jobs"
        link1="hire-talent/dashboard/edit-profile"
        status1="Recruit"
        status2="Remote/hybrid"
      />
    </>
  );
};

export default page;
