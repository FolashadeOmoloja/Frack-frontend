const ContactHeader = () => {
  return (
    <header className="section-container flex max-slg:flex-col justify-between items-center">
      <div className="flex flex-col max-slg:items-center max-slg:mb-6 slg:ml-[5px]">
        <span className="text-[#161519] headingspan mb-0">Let’s talk!</span>
        <p className="font-bold text-[72px] max-xslg:text-[52px] leading-[52px] text-[#111013]  max-md:text-[38px] max-sm:text-3xl  max-xsm:text-center text-wrap">
          How can we{" "}
          <span className="bg-gradient-to-r from-[#000080] via-[#1995CF]  to-[#1995CF] text-transparent bg-clip-text max-xslg:mt-5">
            help ?
          </span>
        </p>
      </div>
      <div className="rounded-xl basis-[40%]">
        <img
          src="/images/homepage/contactuspic.svg"
          alt="img"
          className="w-full"
        />
      </div>
    </header>
  );
};

export default ContactHeader;
