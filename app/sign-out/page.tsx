"use client";
import FormLogo from "@/components/Elements/FormLogo";
import { useRouter } from "next/navigation";
import React from "react";

const DashboardSignOut = () => {
  const router = useRouter();

  const handleCancel = () => {
    router.back();
  };

  const handleSignOut = () => {
    router.push("/");
  };

  return (
    <section className="flex">
      <div
        className="basis-1/2 bg-cover bg-no-repeat bg-[#000080] relative max-md:hidden"
        style={{ backgroundImage: "url('/images/homepage/signup-bg6.svg')" }}
      >
        <p className="login-text top-[30px] xlg:max-w-[230px] ">
          <span className="font-semibold text-base">
            "Thank You for Visiting Frack!"
          </span>{" "}
          <br />
          We hope you had a productive time. Remember, you can always come back
          and continue where you left off.
        </p>
      </div>
      <section className="md:basis-1/2 max-md:w-full flex items-center justify-center">
        <section className="signup-form h-[100vh]  ">
          <div className="mb-6 xsm:mt-32 mt-20">
            <FormLogo />
            <div className="centered flex-col  mb-20 ">
              <h3 className="text-[#1B1818] font-semibold text-2xl mb-1 text-center">
                We hope to see you again soon!
              </h3>
              <p className="text-gray-500  text-center">
                You are about to log out from this account.
              </p>
            </div>
          </div>
          <div className="mt-4 flex gap-10 max-xsm:gap-5">
            <button
              className="login-btn gap-3 cursor-pointer bg-[#00B5E8] hover:bg-[#00B5E8]"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button type="submit" className="login-btn" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </section>
      </section>
    </section>
  );
};

export default DashboardSignOut;
