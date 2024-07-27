import DashboardLayout from "@/components/Dashboard/DashboardLayout/DashboardLayout";
import TalentNavbar from "@/components/Dashboard/TalentDashboard/TalentNavbar";

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

const page = () => {
  return (
    <>
      <TalentNavbar activeItem={0} />
      <DashboardLayout
        dashInfo="This is the breakdown of your application info"
        analytics={talentAnalytics}
        link2="/dashboard/my-jobs"
        link1="/dashboard/profile"
        status1="Shortlist"
        status2="Remote"
        className="max-xslg:h-[230px] max-md:h-[200px]"
      />
    </>
  );
};

export default page;
