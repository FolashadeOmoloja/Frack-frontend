import { successStories } from "@/utilities/constants";
const Review = () => {
  return (
    <section className="section-container">
      <h4 className="text-center font-semibold text-[38px] tracking-[1%] mb-14">
        Reviews
      </h4>
      <section className="flex flex-wrap gap-10">
        {successStories.map((item, idx) => (
          <div className="bg-[#90919C0F] flex flex-col p-7 rounded-md h-[408px] basis-1/3">
            <div className="flex div-center">
              <div className="rounded-full overflow-hidden w-[60px] h-[60px]">
                <img src={item.img} alt="img" className="w-full h-full" />
              </div>
              <div className="text-sm text-[#161519]">
                <span>{item.name}</span>
                <span className="font-semibold">{item.title}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Review;
