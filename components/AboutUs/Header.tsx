const AboutHeader = () => {
  return (
    <header className="about-section">
      <div className="max-sm:flex max-sm:items-center max-sm:flex-col max-sm:justify-center">
        <p className="flex  sm:items-end sm:text-center">
          Talent Acquisition
          <img
            src="/images/homepage/flower.gif"
            alt="gif"
            className="w-[124px] h-[124px] max-sm:hidden"
          />{" "}
        </p>
        <p className="max-sm:text-center">
          Upgraded Fast Hiring, <br />
          <span className=" sm:bg-text text-[#000080]">Guaranteed</span>
        </p>
        <img
          src="/images/homepage/flower.gif"
          alt="gif"
          className="w-[56px] h-[56px] sm:hidden"
        />
      </div>
    </header>
  );
};

export default AboutHeader;
