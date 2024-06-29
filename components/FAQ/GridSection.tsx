import { faqs } from "@/utilities/constants";

const GridSection = () => {
  return (
    <section className="px-[100px] max-xlg:px-[50px] max-lg:px-9 max-sm:px-4 relative max-lg:top-[96px] pt-[151px] max-slg:pt-[50px] bg-[#F9FAFB]">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {faqs.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-5">
            <div className="rounded-xl w-14 h-14 border border-[#E1E4EA] flex items-center justify-center">
              <img src={item.img} alt="icon" className="w-6 h-6" />
            </div>
            <span className="font-semibold text-lg md:h-[56px]">
              {item.title}
            </span>
            <p className="text-sm text-[#545E6E] leading-6">{item.p}</p>
          </div>
        ))}
      </section>
      <section></section>
    </section>
  );
};

export default GridSection;
