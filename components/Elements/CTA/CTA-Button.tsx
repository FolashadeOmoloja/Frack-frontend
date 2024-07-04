"use client";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";

interface ButtonProps {
  className?: string;
  showIcon?: boolean;
  CTA?: string;
  route: string;
  height?: string;
  height2?: string;
  width?: string;
  backGround?: string;
  color?: string;
}

const CTABTN: React.FC<ButtonProps> = ({
  className,
  showIcon = false,
  CTA,
  route,
  height = "55px",
  width = "w-[130px]",
  backGround = "bg-[#000080]",
  color = "text-white",
  height2,
}) => {
  const router = useRouter();

  const handleSignInClick = (route: string) => {
    router.push(route);
  };

  return (
    <button
      className={`${width} h-[${height}] ${height2} ${backGround} ${color} rounded-[6px] flex items-center justify-center gap-2 font-semibold button-container`}
      onClick={() => handleSignInClick(route)}
    >
      <span>{CTA}</span>
      <span
        className={`text-sm ${color} ${showIcon ? "icon-animate" : "hidden"}`}
      >
        <FaArrowRight />
      </span>
    </button>
  );
};

export default CTABTN;
