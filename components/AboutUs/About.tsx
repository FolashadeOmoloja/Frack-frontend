const AboutUs = () => {
  return (
    <section className="section-container mb-[151px] max-slg:mb-[50px]">
      <section className="flex max-lg:flex-col gap-10 md:mb-28 mb-14">
        <div className="max-lg:text-center">
          <span className="font-semibold leading-[26.4px] md:text-2xl text-[20px] max-sm:text-lg text-[#161519] mb-4">
            About us
          </span>
          <p className="font-bold text-[32px] leading-[38px] text-[#111013] lg:w-[520px]  max-sm:text-3xl max-xsm:text-[22px]">
            Get to know Frack, your partner in streamlining the hiring process
            for a seamless match.
          </p>
        </div>
        <p className="leading-[27px] tracking-[0.02em] sm:text-lg  text-[#161519] text-pretty max-lg:text-center">
          Work has evolved, with flexible talent becoming the new standard.
          Frack connects businesses with top-notch fractional talent, making it
          easy to find the perfect fit quickly and cost-effectively. Our
          AI-driven platform streamlines recruitment, saving time and money
          while helping companies build their dream teams. Is it time to level
          up to the next phase? Start hiring with Frack today and see how easy
          we make it for you to build your ideal team.
        </p>
      </section>
      <section className="flex justify-between gap-24 max-md:mb-[100px] max-sm:mb-[70px]">
        <div className=" 2xl:basis-[70%]">
          <img
            src="/images/homepage/about-pic1.svg"
            alt="img"
            className="2xl:w-full"
          />
        </div>
        <div className="max-slg:hidden 2xl:basis-[30%]">
          <img
            src="/images/homepage/about-pic2.svg"
            alt="img"
            className="2xl:w-full 2xl:h-full"
          />
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
