"use client";
import { motion } from "framer-motion";
import CTABTN from "../../Elements/CTA/CTA-Button";

const Header = () => {
  const globeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      y: [0, -10, 0],
      x: [0, -10, 10, 0],
      transition: {
        y: {
          yoyo: Infinity,
          duration: 0.6,
          ease: "easeInOut",
        },
        x: {
          yoyo: Infinity,
          duration: 0.6,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <header className="section-container flex max-slg:flex-col max-lg:pt-6 justify-between mt-0">
      <section className="flex flex-col slg:pt-[92px] max-md:text-center">
        <h1 className="text-[48px] font-extrabold max-w-[700px] lg:text-[44px] max-sm:text-[36px] max-xsm:text-[28px]">
          Welcome to Frack: Your Fractional Talent Solution
        </h1>
        <p className="text-lg">
          Unlock the power of fractional talent with Frack.
        </p>
        <div className="mt-8 max-md:justify-center flex">
          <CTABTN route={"/hiretalent"} CTA="Get Started" showIcon={true} />
        </div>
      </section>
      <motion.section
        variants={globeVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <div className="basis-[1/2] mt-8 flex max-slg:justify-center">
          <img
            src="/images/homepage/globe2.svg"
            alt=""
            className="w-full max-slg:max-w-[500px]"
            loading="eager"
          />
        </div>
      </motion.section>
    </header>
  );
};

export default Header;
