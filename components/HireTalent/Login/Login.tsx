import React from "react";
import HireTalentLoginForm from "./Form";

const Login = () => {
  return (
    <section className="h-[100vh] flex">
      <div
        className="basis-1/2 bg-cover bg-no-repeat bg-[#000080] relative"
        style={{ backgroundImage: "url('/images/homepage/signup-bg1.svg')" }}
      >
        <p className="text-white max-w-[320px] leading-[29px] tracking-[1.5%] absolute right-0 mr-4 top-[150px] text-sm">
          companies can simply post their requirements on our job board, and
          within moments,they'll be matched with a curated list of highly
          qualified professionals from our extensive network.
        </p>
      </div>
      <section className="basis-1/2 flex items-center justify-center">
        <HireTalentLoginForm />
      </section>
    </section>
  );
};

export default Login;
