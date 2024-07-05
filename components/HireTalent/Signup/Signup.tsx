import HireTalentSignUpForm from "./Form";

const HireTalentSignUp = () => {
  return (
    <section className="xsm:h-[100vh] flex">
      <div
        className="basis-1/2 bg-cover bg-no-repeat bg-[#000080] relative max-md:hidden"
        style={{ backgroundImage: "url('/images/homepage/signup-bg1.svg')" }}
      >
        <p className="login-text">
          companies can simply post their requirements on our job board, and
          within moments,they'll be matched with a curated list of highly
          qualified professionals from our extensive network.
        </p>
      </div>
      <section className="md:basis-1/2 max-md:w-full flex items-center justify-center">
        <HireTalentSignUpForm />
      </section>
    </section>
  );
};

export default HireTalentSignUp;
