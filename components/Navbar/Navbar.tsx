"use client"
import { NavLinks } from "@/utilities/constants"
import Image from "next/image"
import { useRouter } from "next/navigation";



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
            <li key={item.navItem} onClick={()=>navigate(item.href) }  className="nav-links">{item.navItem}
            </li>
          ))}
        </ul>
        <div>
            {/* <BookRideButton className="mt-10 me-6 max-xsm:me-2 max-xsm:mt-8" /> */}
        </div>
    </nav>
  )
}

export default Navbar