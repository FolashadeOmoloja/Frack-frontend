"use client";

import { Loader2 } from "lucide-react";
import CTABTN from "../Elements/CTA/CTA-Button";
import { useGetAllFaqs } from "@/hooks/content-hook";

interface Faqs {
  _id: string;
  img: string;
  question: string;
  answer: string;
  createdAt: string;
}

const GridSection = () => {
  const { loading, faq } = useGetAllFaqs();
  return (
    <section className="px-[100px] max-xlg:px-[50px] max-lg:px-9 max-sm:px-4 relative max-lg:top-[96px] py-[151px] max-slg:py-[50px] bg-[#F9FAFB]">
      {loading ? (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {" "}
          <Loader2 className=" h-16 w-16 animate-spin ml-10 mt-10 text-[#000080]" />{" "}
        </section>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {faq.map((item: Faqs, idx: number) => (
            <div key={idx} className="flex flex-col gap-5 col-span-1">
              <div className="rounded-xl w-14 h-14 border border-[#E1E4EA] flex items-center justify-center">
                <img src={item.img} alt="icon" className="w-6 h-6" />
              </div>
              <span className="font-semibold text-lg md:h-[56px]">
                {item.question}
              </span>
              <p className="text-sm text-[#545E6E] leading-6">{item.answer}</p>
            </div>
          ))}
        </section>
      )}

      <section className="bg-white rounded-xl py-12 px-9 flex justify-between mt-20 max-md:flex-col max-md:gap-6 max-sm:px-4">
        <div className="flex flex-col gap-1">
          <span className="font-semibold">Still have questions?</span>
          <span>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </span>
        </div>
        <div>
          <CTABTN route={"/contact-us"} CTA="Get in touch" showIcon />
        </div>
      </section>
    </section>
  );
};

export default GridSection;
