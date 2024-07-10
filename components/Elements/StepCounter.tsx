import React from "react";

const StepCounter = ({
  activeOne,
  activeTwo,
  activeThree,
  pastActiveOne,
  pastActiveTwo,
  pastActiveThree,
}: {
  activeOne?: boolean;
  activeTwo?: boolean;
  activeThree?: boolean;
  pastActiveOne?: boolean;
  pastActiveTwo?: boolean;
  pastActiveThree?: boolean;
}) => {
  const active = "text-[#000080] border-[#000080] font-bold border-2";
  return (
    <section>
      <section className="mt-5 mb-10 flex items-center">
        <div className="relative">
          <div className={`step-circle ${activeOne ? active : ""}`}>1</div>
          <span className="absolute left-[-50%] mt-[5px] ">Account</span>
        </div>
        <div className="step-line"></div>
        <div className="relative">
          <div className={`step-circle ${activeTwo ? active : ""}`}>2</div>
          <span className="absolute left-[-50%] mt-[5px]">Expertise</span>
        </div>
        <div className="step-line"></div>
        <div className="relative">
          <div className={`step-circle ${activeThree ? active : ""}`}>3</div>
          <span className="absolute left-[-50%] mt-[5px]">Resume</span>
        </div>
      </section>
    </section>
  );
};

export default StepCounter;
