"use client";
import { useState } from "react";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import FormFour from "./FormFour";

const SignUpStep1 = () => {
  const [bgImage, setBgImage] = useState(
    "url('/images/homepage/signup-bg6.svg')"
  );
  const [active, setActive] = useState(4);
  return (
    <section className="flex">
      <div
        className="basis-1/2 bg-cover bg-no-repeat bg-[#000080] relative max-md:hidden"
        style={{ backgroundImage: bgImage }}
      >
        <p className="login-text top-[30px] xlg:max-w-[230px] ">
          <span className="font-semibold text-base">
            {active === 4
              ? "Welcome to Frack!"
              : " Our AI-driven platform streamlines the process"}
          </span>{" "}
          <br />
          making it easier and more efficient than ever before. Gone are the
          days of sifting through countless resumes and conducting endless
          interviews.
        </p>
      </div>
      <section className="md:basis-1/2 max-md:w-full flex items-center justify-center">
        {active === 1 && (
          <FormOne changeBgState={setBgImage} changeActive={setActive} />
        )}
        {active === 2 && (
          <FormTwo changeBgState={setBgImage} changeActive={setActive} />
        )}
        {active === 3 && (
          <FormThree changeBgState={setBgImage} changeActive={setActive} />
        )}
        {active === 4 && <FormFour />}
      </section>
    </section>
  );
};

export default SignUpStep1;
