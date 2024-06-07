"use client"
import { useRouter } from "next/navigation";
import { BsFillCheckCircleFill } from 'react-icons/bs'


interface ButtonProps{
className?:string
showIcon?:Boolean
CTA?: string
route:string
  }

const CTABTN:React.FC<ButtonProps>  = ({className,showIcon,CTA,route}) => {

    const router = useRouter();

    const handleSignInClick = (route:string) => {
      router.push(route);
    };

  return (
        <button className={`w-[138px] h-[55px] bg-[#000080] text-white rounded-[6px] flex items-center justify-center`} onClick={()=>handleSignInClick(route)}>
            <span>{CTA}</span>
            {/* <span className={`text-sm text-white ${showIcon?'': 'hidden'}`}><BsFillCheckCircleFill/></span> */}
        </button>
  )
}

export default CTABTN