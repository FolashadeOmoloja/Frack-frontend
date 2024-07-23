import React from "react";

const LeftSection = ({ user }: { user: object }) => {
  return (
    <aside className="basis-[30%] flex flex-col gap-10">
      <div className="bg-white rounded-md h-[680px]"></div>
      <div className="bg-white rounded-md h-[124px]"></div>
    </aside>
  );
};

export default LeftSection;
