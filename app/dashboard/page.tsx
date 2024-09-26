"use client";
import DashboardLayout from "@/components/Dashboard/DashboardLayout/DashboardLayout";
import TalentNavbar from "@/components/Dashboard/TalentDashboard/TalentNavbar";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

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
  const searchParams = useSearchParams();

  useEffect(() => {
    const refresh = searchParams.get("refresh");
    console.log("Refresh Param:", refresh);

    if (refresh) {
      // Remove the `?refresh=true` from the URL without reloading the page
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [searchParams]);
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
