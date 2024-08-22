const items = [
  {
    num: "01",
    title: "Talent for every Business:",
    txt: `We connect businesses of all sizes with exceptional talent. No matter your budget, we ensure you get the professionals who can drive your success.`,
  },
  {
    num: "02",
    title: "Effortless Hiring:",
    txt: "We’re just as picky as you are . We ditch the tedious traditional hiring methods and make finding the right people ultra-quick and hassle free, so you can focus on what really matters.",
  },
  {
    num: "03",
    title: "Customized Support:",
    txt: `We know every business is different. That is why we work on a very personalized level to ensure that you get exactly the right support and talent for your needs.`,
  },
  {
    num: "04",
    title: "Fueling your success:",
    txt: `We want to see your business succeed. We enable growth and innovation with powerful and effective teams, driving you toward achieving your goals.`,
  },
];

const Grid = () => {
  return (
    <section className="section-container md:mt-0 mt-24  flex max-lg:flex-col gap-10">
      <div className="max-sm:text-center">
        <span className="headingspan">Our Mission</span>
        <p className="font-bold text-[52px] leading-[52px] text-[#111013] lg:max-w-[408px] max-md:text-[38px] max-sm:text-3xl max-xsm:text-[22px]">
          Transforming How You Build Your Dream Team
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className=" col-span-1  flex flex-col  max-sm:items-center max-sm:text-center border-l border-[#3b3b4e] pl-6"
            >
              <span className="text-[#000080] font-semibold mb-4">
                {item.num}.
              </span>
              <span className="text-[#111013] text-2xl max-xsm:text-lg font-bold mb-5 sm:min-h-16">
                {item.title}
              </span>
              <p className="text-[#161519] tracking-[0.02em] leading-7 max-sm:text-[15px]">
                {item.txt}
              </p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Grid;
