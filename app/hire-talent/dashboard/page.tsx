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

const page = () => {
  return (
    <>
      <DashboardNavbar activeItem={0} />
      <DashboardLayout
        dashInfo="This is the breakdown of your recruitment info"
        analytics={companyAnalytics}
      />
    </>
  );
};

export default page;
