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
    <section className="my-5 flex gap-2">
      <div className="flex flex-col items-center">
        <div className={`step-circle ${activeOne ? active : ""}`}>1</div>
        <span className={`${activeOne ? "font-bold" : ""}`}>Account</span>
      </div>
      <div className="step-line"></div>
      <div>
        <div className={`step-circle ${activeTwo ? active : ""}`}>2</div>
        <span>Expertise</span>
      </div>
      <div className="step-line"></div>
      <div>
        <div className={`step-circle ${activeThree ? active : ""}`}>3</div>
        <span>Resume</span>
      </div>
    </section>
  );
};

export default StepCounter;
