"use client"
import { useRouter } from "next/navigation";
import { BsFillCheckCircleFill } from 'react-icons/bs'


interface ButtonProps{
className?:string
showIcon?:Boolean
CTA?: string
route:string
height?: string
width?: string
  }

const CTABTN:React.FC<ButtonProps>  = ({className,showIcon,CTA,route,height='55px',width='138px'}) => {

    const router = useRouter();

    const handleSignInClick = (route:string) => {
      router.push(route);
    };

  return (
        <button className={`w-[${width}] h-[${height}] bg-[#000080] text-white rounded-[6px] flex items-center justify-center`} onClick={()=>handleSignInClick(route)}>
            <span>{CTA}</span>
            {/* <span className={`text-sm text-white ${showIcon?'': 'hidden'}`}><BsFillCheckCircleFill/></span> */}
        </button>
  )
}

export default CTABTN