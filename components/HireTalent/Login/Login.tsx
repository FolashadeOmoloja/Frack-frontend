import HireTalentLoginForm from "./Form";

const Login = () => {
  return (
    <section className="sm:h-[100vh] flex">
      <div
        className="basis-1/2 bg-cover bg-no-repeat bg-[#000080] relative max-md:hidden"
        style={{ backgroundImage: "url('/images/homepage/signup-bg1.svg')" }}
      >
        <p className="login-text">
          Access Talent with a simple Login We help organizations around the
          world harness the power of great talent to drive their success.
        </p>
      </div>
      <section className="md:basis-1/2 max-md:w-full flex items-center justify-center">
        <HireTalentLoginForm />
      </section>
    </section>
  );
};

export default Login;
