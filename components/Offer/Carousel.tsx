"use client"
import React, { useState } from 'react';
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

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const handleNext = () => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsSliding(false);
    }, 500); // Duration of the transition
  };

  const handlePrev = () => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setIsSliding(false);
    }, 500); // Duration of the transition
  };

  return (
    <section className="section-container flex justify-between">
      <span className='max-w-[432px] font-bold leading-10 text-[38px]'>
        What our clients say about Frack.
      </span>
      <article>
        <section className={`max-w-[632px] flex flex-col slide ${isSliding ? 'slide-exit-active' : ''} overflow-x-hidden`}>
          <p className='mb-5 leading-[29.4px] text-left tracking-[0.05em]'>
            {testimonials[currentIndex].text}
          </p>
          <span className='font-bold mb-1'>
            {testimonials[currentIndex].name}
          </span>
          <span className='text-[#5F5F6C] text-sm font-semibold'>
            {testimonials[currentIndex].title}
          </span>
        </section>
        <div className="flex gap-5 text-2xl mt-12 justify-end">
          <button onClick={handlePrev}>
            <FaArrowLeft />
          </button>
          <button onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      </article>
    </section>
  );
}

export default Carousel;
