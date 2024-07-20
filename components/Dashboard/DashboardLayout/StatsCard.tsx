type analytics = {
  analtyticsTitle: string;
  stats: number;
  desc: string;
}[];
const StatsCard = ({ analytics }: { analytics: analytics }) => {
  return (
    <section className="mt-8  grid grid-cols-1 md:grid-cols-2 gap-8">
      {analytics.map((item, idx) => (
        <div
          className={`col-span-1 ${
            idx === 0 ? "bg-[#000080] text-white" : "border border-[#E0E1E6] "
          } h-[277px] w-full rounded-md pt-14 pb-16 pl-9 flex flex-col`}
          key={idx}
        >
          <span className="font-bold text-lg mb-8">{item.analtyticsTitle}</span>
          <span className="text-5xl font-bold mb-5">{item.stats}</span>
          <span
            className={`${
              idx === 0 ? "text-white" : "text-[#7C8698]"
            } font-semibold`}
          >
            {item.desc}
          </span>
        </div>
      ))}
    </section>
  );
};

export default StatsCard;
