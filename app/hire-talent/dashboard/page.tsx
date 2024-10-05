"use client";
import DashboardLayout from "@/components/Dashboard/DashboardLayout/DashboardLayout";
import HireTalentNav from "@/components/Dashboard/HireTalentDashboard/HireTalentNav";
import { useGetCompanyJobs } from "@/hooks/job-hook";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const refresh = searchParams.get("refresh");

    if (refresh) {
      // Remove the `?refresh=true` from the URL without reloading the page
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [searchParams]);

  const { jobs } = useGetCompanyJobs();

  // Function to filter jobs based on status
  const filterJobs = (status: string) => {
    return jobs.filter((job) =>
      //@ts-ignore
      job.status?.toLowerCase().includes(status.toLowerCase())
    );
  };

  // Recalculate the jobs when `jobs` or `changeTable` changes
  const openedJobs = jobs.length != 0 ? filterJobs("open") : [];
  const closedJobs = jobs.length != 0 ? filterJobs("closed") : [];

  const companyAnalytics = [
    {
      analtyticsTitle: "Active Job Offers",
      stats: openedJobs.length,
      desc: `Current active job listings`,
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
