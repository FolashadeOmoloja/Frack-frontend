import CTABTN from "../../Elements/CTA/CTA-Button";

const About = () => {
  return (
    <section className="bg-[#000080] section-container flex text-white   xlg:py-24   py-16 relative max-slg:flex-col max-slg:items-center">
      <section className="xlg:max-w-[686px] max-w-[516px] max-slg:text-center">
        <h3 className="font-bold text-[40px] max-md:text-[24px] mb-6">
          Want your Dream Team Without <br className="max-md:hidden" />{" "}
          Full-Time Commitments?
        </h3>
        <p className="font-light leading-7 mb-6 ">
          Find Out How We Connect You with trusted experts ,save time, and
          reduce costs.
        </p>
        <div className="mb-4 flex max-slg:justify-center max-slg:mb-9">
          <CTABTN
            route={"/about-us"}
            CTA="About Us"
            showIcon={true}
            backGround="bg-white"
            color="text-black"
          />
        </div>
      </section>
      <div className="xslg:absolute top-[-20px] right-0 xlg:w-[573px] xlg:h-[468px] sm:w-[473px] sm:h-[368px]">
        <img
          src="/images/homepage/illustration.svg"
          alt="img"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default About;
