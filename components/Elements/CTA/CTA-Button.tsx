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
backGround?: string
color?: string
  }

const CTABTN:React.FC<ButtonProps>  = ({className,showIcon=false,CTA,route,height='55px',width='w-[130px]',backGround='bg-[#000080]', color='text-white'}) => {

    const router = useRouter();

    const handleSignInClick = (route:string) => {
      router.push(route);
    };

  return (
        <button className={`${width} h-[${height}] ${backGround}  ${color} rounded-[6px] flex items-center justify-center gap-2 font-semibold`} onClick={()=>handleSignInClick(route)}>
            <span>{CTA}</span>
            <span className={`text-sm ${color} ${showIcon?'': 'hidden'}`}><FaArrowRight/></span>
        </button>
  )
}

export default CTABTN