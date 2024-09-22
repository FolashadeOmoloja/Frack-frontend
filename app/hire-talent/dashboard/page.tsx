"use client";
import DashboardLayout from "@/components/Dashboard/DashboardLayout/DashboardLayout";
import HireTalentNav from "@/components/Dashboard/HireTalentDashboard/HireTalentNav";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

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
      <HireTalentNav activeItem={0} />
      <DashboardLayout
        dashInfo="This provides a summary of your application details"
        analytics={companyAnalytics}
        link2="/hire-talent/dashboard/my-jobs"
        link1="/hire-talent/dashboard/profile"
        status1="Recruit"
        status2="Remote/hybrid"
      />
    </>
  );
};

export default page;
