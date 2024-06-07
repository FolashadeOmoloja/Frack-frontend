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
            <li key={item.navItem} onClick={()=>navigate(item.href) }  className="nav-links flex gap-[6px] items-center justify-center">
              <span className="">{item.navItem}</span>
              {
                item.dropDown? <BsCaretRightFill fontSize={13}/> : null
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