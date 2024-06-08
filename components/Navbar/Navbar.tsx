"use client"
import { NavLinks } from "@/utilities/constants"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { BsCaretRightFill } from "react-icons/bs";
import CTABTN from "../Elements/CTA/CTA-Button";



const Navbar = () => {
  const router = useRouter();

  const navigate = (href:string) => {
    if(href === 'nil'){

    } else {
      router.push(href)
    }
  }

  return (
    <nav className="flex pl-16 pr-[100px] h-24">
       <div>
          <Image 
          src={"/images/homepage/fracklogo.svg"} alt={"logo"} width={191} height={96} className=""/>
       </div>
       <ul className='flex-1 flex justify-center items-center gap-10 max-lg:hidden'>
          {NavLinks.map((item) => (
            <li key={item.navItem} onClick={()=>navigate(item.href) }  className="relative nav-links  cursor-pointer">
              <div className="hover:text-[#000080] flex gap-[6px] items-center justify-center transition">
              <span >{item.navItem}</span>
              {
                item.dropDown? <BsCaretRightFill fontSize={13}/> : null
              }
              </div>
              {
              item.dropDown && (
                  <ul className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-lg px-[50px] py-[40px]  w-[27.5rem] flex flex-col gap-7">
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
            </li>
          ))}
        </ul>
        <div className="flex items-center  gap-10">
            <button className="" onClick={()=>{router.push('/sign-up')}}>Sign Up</button>
            <CTABTN route="/hire-talent" CTA="Hire Talent"/>

            {/* <BookRideButton className="mt-10 me-6 max-xsm:me-2 max-xsm:mt-8" /> */}
        </div>
    </nav>
  )
}

export default Navbar