const Header = ({
  h2 = "Need to ask a question?",
  p = "Here’s a few of our frequently asked questions.",
  textCenter = "text-center",
}: {
  h2?: string;
  p?: string;
  textCenter?: string;
}) => {
  return (
    <section
      className={`bg-faq-gradient ${textCenter}  px-[100px] max-xlg:px-[50px] max-lg:px-9 max-sm:px-[10px] relative max-lg:top-[96px] py-[151px] max-slg:py-[80px]`}
    >
      <h2 className="header-headline text-white font-extrabold">{h2}</h2>
      <p className="text-white font-semibold md:text-xl">{p}</p>
    </section>
  );
};

export default Header;
