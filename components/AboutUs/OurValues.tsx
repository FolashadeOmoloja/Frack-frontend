const OurValues = () => {
  return (
    <section className="section-container  ">
      <section className="flex max-lg:flex-col gap-10 md:mb-28 mb-14">
        <div className="max-lg:text-center">
          <span className="font-semibold leading-[26.4px] md:text-2xl text-[20px] max-sm:text-lg text-[#161519] mb-4">
            Our Values
          </span>
          <p className="font-bold text-[32px] leading-[38px] text-[#111013] lg:w-[520px]  max-sm:text-3xl max-xsm:text-[22px]">
            Without values as a compass, the core direction of a business is
            lost.
          </p>
        </div>
        <p className="leading-[27px] tracking-[0.02em] sm:text-lg  text-[#161519] text-pretty max-lg:text-center">
          At Frack, our core values—excellence, integrity, collaboration, and
          innovation—shape everything we do. We focus on connecting you with top
          talent and maintaining transparency in all our dealings. We prioritize
          building lasting relationships based on trust and flexibility. Our
          goal is to be your reliable partner, offering dynamic solutions that
          ensure your success.
        </p>
      </section>
      <section className="flex justify-between gap-24 max-md:mb-[100px] max-sm:mb-[70px]">
        <div className=" 2xl:basis-[70%]">
          <img
            src="/images/homepage/ourvalues-pic1.svg"
            alt="img"
            className="2xl:w-full"
          />
        </div>
        <div className="max-slg:hidden 2xl:basis-[30%]">
          <img
            src="/images/homepage/ourvalues-pic2.svg"
            alt="img"
            className="2xl:w-full 2xl:h-full"
          />
        </div>
      </section>
    </section>
  );
};

export default OurValues;
