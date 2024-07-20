import DashCards from "./DashCards";
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
    <section className="dashboard-container flex gap-10 max-md:flex-col">
      <section className="bg-white pt-14 px-9 max-sm:px-[10px] pb-20 rounded-md md:basis-[75%]">
        <h2 className="text-2xl font-bold mb-1">Your dashboard info</h2>
        <span className="text-[#7C8698] ">{dashInfo}</span>
        <StatsCard analytics={analytics} />
      </section>
      <aside className="md:basis-[25%] flex flex-col gap-7">
        <DashCards
          gif="/images/dashboard/profile.gif"
          title={"Profile Status:"}
          status={"Recruit"}
          link={"hire-talent/dashboard/edit-profile"}
          linkName={"Edit Profile"}
        />
        <DashCards
          gif="/images/dashboard/suitcase.gif"
          title={"Work mode preference"}
          status={"Remote/hybrid"}
          link={"hire-talent/dashboard/my-jobs"}
          linkName={"Check My Jobs"}
        />
        <DashCards
          gif="/images/dashboard/message.gif"
          title={"Have an idea you’d like to share?"}
          status={""}
          link={"hire-talent/dashboard/contact"}
          linkName={"Send us a message"}
        />
      </aside>
    </section>
  );
};

export default DashboardLayout;
