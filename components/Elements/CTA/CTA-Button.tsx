"use client"
import { useRouter } from "next/navigation";
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { FaArrowRight } from "react-icons/fa6";


interface ButtonProps{
className?:string
showIcon?:Boolean
CTA?: string
route:string
height?: string
width?: string
  }

const CTABTN:React.FC<ButtonProps>  = ({className,showIcon=false,CTA,route,height='55px',width='w-[130px]'}) => {

    const router = useRouter();

    const handleSignInClick = (route:string) => {
      router.push(route);
    };

  return (
        <button className={`${width} h-[${height}] bg-[#000080] text-white rounded-[6px] flex items-center justify-center gap-2`} onClick={()=>handleSignInClick(route)}>
            <span>{CTA}</span>
            <span className={`text-sm text-white ${showIcon?'': 'hidden'}`}><FaArrowRight/></span>
        </button>
  )
}

export default CTABTN