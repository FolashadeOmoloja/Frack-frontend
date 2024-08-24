"use client";
import { motion } from "framer-motion";

const cards = [
  {
    img: "/images/homepage/delivery.svg",
    cardTitle: "Quality without Compromise",
    text: "At Frack, we prioritize quality over quantity. Each professional in our network is thoroughly vetted to ensure they have the skills, experience, and expertise necessary to excel in their roles.",
  },
  {
    img: "/images/homepage/Character.svg",
    cardTitle: "High- Value Solutions",
    text: "Why pay for more than you need? With Frack, companies can access the precise expertise they require on an as-needed basis, without the financial commitment of full-time employees.",
  },
  {
    img: "/images/homepage/error.svg",
    cardTitle: "Flexible Team Scaling",
    text: "Whether you’re a budget-conscious startup or a large corporation needing short-term expertise, Frack lets you scale your team quickly and efficiently.",
  },
];

const Offer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3, duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="section-container">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-extrabold text-[40px] max-md:text-[24px] mb-5">
          Speed Up Success: Faster, Better, Quicker with Frack
        </h2>
        <p className="font-light md:text-[20px] text-lg max-w-[941px] max-md:text-lg">
          Fewer hours, more results. Simply post your requirements on our job
          board and instantly connect with top professionals from our curated
          network
        </p>
      </div>
      <motion.section
        className="md:mt-[112px] mt-[50px] flex max-xlg:flex-wrap max-slg:flex-col justify-center items-center md:gap-16 gap-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {cards.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col justify-center items-center max-xlg:max-w-[420px]"
            variants={itemVariants}
          >
            <div className="mb-11 w-[328.5px] h-[250px] max-sm:w-[280px]">
              <img src={item.img} alt="card" className="w-full h-full" />
            </div>
            <span className="font-bold text-2xl">{item.cardTitle}</span>
            <p className="font-light leading-7 mt-4 h-[140px]">{item.text}</p>
          </motion.div>
        ))}
      </motion.section>
    </section>
  );
};

export default Offer;
