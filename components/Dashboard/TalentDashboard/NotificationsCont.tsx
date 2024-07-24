"use client";

import { useState } from "react";
type IsActiveState = {
  [key: number]: boolean;
};
type Notification = {
  message: string;
  timestamp: string;
};
const Notifications = ({
  notifications,
}: {
  notifications: Notification[];
}) => {
  const filterArr = ["Notifications", "Payment History"];
  const [active, setActive] = useState<IsActiveState>({ [0]: true });
  const activeFunc = (idx: number) => {
    const newState: IsActiveState = {};
    filterArr.forEach((_, i) => (newState[i] = i === idx));
    setActive(newState);
  };
  return (
    <section className="dashboard-container min-h-svh">
      <h2 className="text-2xl font-bold mb-1">
        Ditimi, Keep track of your notifications and payment history
      </h2>
      <div className="flex w-full text-[#626263] md:text-lg font-bold mt-16 border-b border-[#CCD2D9]">
        {filterArr.map((item, idx) => (
          <span
            className={`tab ${active[idx] ? "active" : ""} max-sm:h-[50px]`}
            key={idx}
            onClick={() => activeFunc(idx)}
          >
            {item}
          </span>
        ))}
      </div>
      <section></section>
    </section>
  );
};

export default Notifications;
