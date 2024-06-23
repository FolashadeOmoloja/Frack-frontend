"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    text: "“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.”",
    name: "Colin Lucido",
    title: "Lover’s Tek"
  },
  {
    text: "“Another testimonial text here.”",
    name: "Jane Doe",
    title: "Some Company"
  },
  {
    text: "“Yet another testimonial text here.”",
    name: "John Smith",
    title: "Another Company"
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <section className="section-container flex flex-col">
      <span className='max-w-[432px] font-bold leading-10 text-[38px]'>
        What our clients say about Frack.
      </span>
      <Swiper
      modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="max-w-[632px] mt-8"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <section className='flex flex-col'>
              <p className='mb-5 leading-[29.4px] text-left tracking-[0.05em]'>
                {testimonial.text}
              </p>
              <span className='font-bold mb-1'>
                {testimonial.name}
              </span>
              <span className='text-[#5F5F6C] text-sm font-semibold'>
                {testimonial.title}
              </span>
            </section>
          </SwiperSlide>
        ))}
        <div className="flex justify-end gap-5 text-2xl mt-12">
          <button className="swiper-button-prev">
            <FaArrowLeft />
          </button>
          <button className="swiper-button-next">
            <FaArrowRight />
          </button>
        </div>
      </Swiper>
    </section>
  );
}

export default Testimonials;
