import { successStories } from "@/utilities/constants";
const Review = () => {
  return (
    <section className="section-container">
      <h4 className="text-center font-semibold text-[38px] tracking-[1%] mb-14">
        Reviews
      </h4>
      <section className="flex flex-wrap gap-10 justify-center">
        {successStories.map((item, idx) => (
          <div
            className="bg-[#90919C0F] flex flex-col p-7 rounded-md sm:h-[330px] h-[270px] lg:basis-[30%] max-md:w-full w-[330px] sm:gap-20 gap-10 max-xxsm:h-full shadow-md"
            key={idx}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full overflow-hidden w-[60px] h-[60px] ">
                <img
                  src={item.img}
                  alt="img"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-sm text-[#161519] flex flex-col gap-1">
                <span>{item.name}</span>
                <span className="font-semibold">{item.title}</span>
              </div>
            </div>
            <p className="tracking-[1.5%]">“{item.review}”</p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Review;
