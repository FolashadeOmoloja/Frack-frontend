"use client"
import { NavLinks } from "@/utilities/constants"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { BsCaretRightFill } from "react-icons/bs";
import CTABTN from "../../Elements/CTA/CTA-Button";
import { useState } from "react";
import Link from "next/link";

type IsOpenState = {
  [key: number]: boolean;
};


const MainNav = ({activeItem}:{activeItem?:number}) => {
  const [isOpen, setIsOpen] = useState<IsOpenState>({});

const toggleDropdown = (idx:number) => {
  setIsOpen((prevState) => {
    const newState: IsOpenState = {};
    newState[idx] = !prevState[idx];
    return newState;
  });

};
  const router = useRouter();

  const navigate = (href:string, idx:number) => {
    if(href === 'nil'){
        toggleDropdown(idx)
    } else {
      router.push(href)
    }
  }



  return (
    <nav className="flex pl-16 pr-[100px] h-24 max-xlg:pr-[50px] max-xlg:pl-[10px] max-lg:hidden">
       <div className="cursor-pointer" onClick={()=> router.push('/')}>
          <Image 
          src={"/images/homepage/frack.png"} 
          alt={"logo"} 
          width={191} 
          height={96} 
          quality={100}
          className="" />
       </div>
       <ul className='flex-1 flex justify-center items-center gap-10 max-xlg:gap-[20px] '>
          {NavLinks.map((item,idx) => (
            <Link href={item.href} key={item.navItem} onClick={()=>navigate(item.href, idx) }  className={`relative cursor-pointer ${activeItem === idx ? 'text-[#000080] font-semibold': ''}`}>
              <div className={`hover:text-[#000080] flex gap-[6px] items-center justify-center transition ${isOpen[idx]? 'text-[#000080]':''}`}>
              <span >{item.navItem}</span>
              {
                item.dropDown? 
                <BsCaretRightFill fontSize={13} className={`${isOpen[idx]? 'rotate-90 transition-transform duration-[180ms] ease-linear' :''}  `}/> 
                : null
              }
              </div>
              {
              item.dropDown && isOpen[idx] && (
                  <ul className="absolute z-20 top-full left-0 mt-2 bg-white shadow-lg rounded-lg px-[50px] py-[40px]  w-[27.5rem] flex flex-col gap-7">
                       <span className="font-bold text-lg ">{item.navItem}</span>
                       {
                        Array.isArray(item.dropDownOpt) && item.dropDownOpt.map((opt,idx)=>(
                          <li key={idx} className="flex pl-[13px] gap-5 items-center ">
                              <div>
                                  <img src={opt.icon} alt="icon" className="w-[27px] h-[27px]"/>
                              </div>
                              <div className="">
                                <span className="font-semibold mb-2" >{opt.title}</span>
                                <p className="text-[#7C8698] text-sm">{opt.desc}</p>
                              </div>
                       </li>
                        ))
                       }
                  </ul>
              )
              }
            </Link>
          ))}
        </ul>
        <div className="flex items-center  gap-10">
            <button className="" onClick={()=>{router.push('/sign-up')}}>Sign Up</button>
            <CTABTN route="/hire-talent" CTA="Hire Talent" />
        </div>
    </nav>
  )
}

export default MainNav