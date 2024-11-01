"use client";
import { useGetAllReviews } from "@/hooks/content-hook";
import { Loader2 } from "lucide-react";

interface Reviews {
  _id: string;
  fullname: string;
  role: string;
  review: string;
  createdAt: string;
}
const Review = () => {
  const { loading, review } = useGetAllReviews();
  return (
    <section className="section-container">
      <h4 className="text-center font-semibold text-[38px] tracking-[1%] mb-14">
        Reviews
      </h4>
      {loading ? (
        <section className="flex flex-wrap gap-10 justify-center">
          {" "}
          <Loader2 className=" h-16 w-16 animate-spin ml-10 mt-10 text-[#000080]" />{" "}
        </section>
      ) : (
        <section className="flex flex-wrap gap-10 justify-center">
          {review.map((item: Reviews, idx: number) => (
            <div
              className="bg-[#90919C0F] flex flex-col p-7 rounded-md sm:h-[330px] h-[270px] lg:basis-[30%] max-md:w-full w-[330px] sm:gap-20 gap-10 max-xxsm:h-full shadow-md"
              key={idx}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full flex centered w-[60px] h-[60px] bg-[#000080]">
                  <span className="text-lg font-bold text-white">
                    {item.fullname[0]}
                  </span>
                </div>
                <div className="text-sm text-[#161519] flex flex-col gap-1">
                  <span>{item.fullname}</span>
                  <span className="font-semibold">{item.role}</span>
                </div>
              </div>
              <p className="tracking-[1.5%]">“{item.review}”</p>
            </div>
          ))}
        </section>
      )}
    </section>
  );
};

export default Review;
