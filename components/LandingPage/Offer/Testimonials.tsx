"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    text: "“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.”",
    name: "Colin Lucido",
    title: "Lover’s Tek",
  },
  {
    text: "“Another testimonial text here.”",
    name: "Jane Doe",
    title: "Some Company",
  },
  {
    text: "“Yet another testimonial text here.”",
    name: "John Smith",
    title: "Another Company",
  },
  // Add more testimonials as needed
];

const Testimonials = ({ color }: { color?: string }) => {
  return (
    <section
      className={`section-container flex  max-xslg:gap-7 max-slg:gap-14  max-slg:flex-col justify-between max-slg:items-center ${color}`}
    >
      <span className="max-w-[432px] font-bold leading-10 text-[38px] max-slg:text-center max-md:text-[24px]">
        What our clients say about Frack.
      </span>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="max-w-[632px] relative h-[250px] max-md:w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <section className="flex flex-col max-md:text-wrap">
              <p className="mb-5 leading-[29.4px] text-left tracking-[0.05em] max-sm:text-sm">
                {testimonial.text}
              </p>
              <span className="font-bold mb-1">{testimonial.name}</span>
              <span className={`text-[#5F5F6C] text-sm font-semibold ${color}`}>
                {testimonial.title}
              </span>
            </section>
          </SwiperSlide>
        ))}
        <div className="flex  gap-5 md:text-2xl text-lg mt-4 absolute bottom-0 right-0 max-slg:left-[45%] z-20">
          <button className="swiper-button-prev cursor-pointer">
            <FaArrowLeft />
          </button>
          <button className="swiper-button-next cursor-pointer">
            <FaArrowRight />
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonials;
