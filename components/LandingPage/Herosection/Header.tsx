// "use client";
// import { motion } from "framer-motion";
import CTABTN from "../../Elements/CTA/CTA-Button";
import Globe from "./Globe";

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
    <header className="section-container flex max-sslg:flex-col max-lg:pt-6 justify-between mt-0 max-xslg:gap-5">
      <section className="flex flex-col max-sslg:items-center slg:pt-[92px] max-sslg:text-center">
        <h1 className="font-extrabold max-w-[700px] leading-[1.5] text-5xl max-sm:text-[36px] max-xsm:text-[28px]">
          BETTER HIRING,
          <br /> EFFICIENT RESULTS
        </h1>
        <p className="text-lg max-xslg:text-lg mt-6">
          Frack offers a gateway to exceptional fractional talent,
          <br className="max-sslg:hidden" /> enabling you to achieve maximum
          success in your business
        </p>
        <div className="mt-12 max-sslg:justify-center flex">
          <CTABTN route={"/hire-talent"} CTA="Get Started" showIcon={true} />
        </div>
      </section>
      <section>
        <div className="basis-[1/2] mt-8 flex max-sslg:justify-center">
          {/* <div className="xslg:w-[540px] xslg:h-[540px] w-full h-full max-sslg:max-w-[300px] rounded-full shadow-[0_0_20px_10px_rgba(0,0,128,0.3)] overflow-hidden">
            <img
              src="/images/homepage/rotating-globe.gif"
              alt=""
              className="w-full h-full object-cover scale-[1.2] filter"
              loading="eager"
            />
          </div> */}
          <Globe />
        </div>
      </section>
    </header>
  );
};

export default Header;
