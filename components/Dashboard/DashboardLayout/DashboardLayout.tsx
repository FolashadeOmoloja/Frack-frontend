import StatsCard from "./StatsCard";
type analytics = {
  analtyticsTitle: string;
  stats: number;
  desc: string;
}[];
const DashboardLayout = ({
  dashInfo,
  analytics,
}: {
  dashInfo: string;
  analytics: analytics;
}) => {
  return (
    <section className="dashboard-container flex">
      <section className="bg-white pt-14 px-9 pb-20 rounded-md basis-[75%]">
        <h2 className="text-2xl font-bold mb-1">Your dashboard info</h2>
        <span className="text-[#7C8698] ">{dashInfo}</span>
        <StatsCard analytics={analytics} />
      </section>
      <aside></aside>
    </section>
  );
};

export default DashboardLayout;
