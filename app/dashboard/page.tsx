import DashboardLayout from "@/components/Dashboard/DashboardLayout/DashboardLayout";
import DashboardNavbar from "@/components/Dashboard/Navbar/Navbar";

const talentAnalytics = [
  {
    analtyticsTitle: "Active Job Applications",
    stats: 16,
    desc: "A Total of 7 Profile Views",
  },
  {
    analtyticsTitle: "Total Applications",
    stats: 136,
    desc: "3 Shortlisted Applications",
  },
  {
    analtyticsTitle: "Active Interviews",
    stats: 1,
    desc: "1 Active Interviews",
  },
  {
    analtyticsTitle: "Total Offers",
    stats: 3,
    desc: "1 Rejected Offer",
  },
];

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

const page = () => {
  return (
    <>
      <DashboardNavbar
        activeItem={0}
        NavLinks={NavLinks}
        DropDown={DropDown}
        buttonCta="My Jobs"
        buttonLink="/dashboard/my-jobs"
      />
      <DashboardLayout
        dashInfo="This is the breakdown of your application info"
        analytics={talentAnalytics}
        link2="/dashboard/my-jobs"
        link1="/dashboard/edit-profile"
        status1="Shortlist"
        status2="Remote"
      />
    </>
  );
};

export default page;
