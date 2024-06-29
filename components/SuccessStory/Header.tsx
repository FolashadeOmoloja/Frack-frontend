const Header = () => {
  return (
    <header className="section-container flex justify-between items-center max-slg:flex-col gap-10">
      <section className="flex flex-col max-slg:items-center max-slg:mb-6 slg:ml-[5px] text-[#161519] ">
        <span className=" headingspan mb-0">Success Stories</span>
        <h2 className="header-headline ">
          Real Results, Real{" "}
          <span className="header-headline-span">Impact</span>
        </h2>
        <p className="leading-[29.4px] tracking-[1.5%] max-slg:text-center">
          Welcome to our <span className="font-bold">Success Stories page</span>
          , where we celebrate the achievements of our clients and showcase the
          real results and impact of partnering with Frack.
        </p>
      </section>
      <section className="flex gap-10">
        <div className="xlg:w-[290px] xlg:h-[513px]">
          <img
            src="/images/homepage/iPhone.svg"
            alt="img"
            className="w-full h-full"
          />
        </div>
        <div className="xlg:w-[290px] xlg:h-[513px]">
          <img
            src="/images/homepage/iPhone1.svg"
            alt="img"
            className="w-full h-full"
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
