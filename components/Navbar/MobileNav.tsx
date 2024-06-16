"use client"
import React, { useState } from 'react'
import { BsCaretRightFill } from 'react-icons/bs';
import { HiMiniBars3BottomLeft } from "react-icons/hi2";


const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);}
  return (
   <nav className='lg:hidden flex justify-between items-center h-24 px-9  max-sm:flex-row-reverse w-full'>
       <div>
           <HiMiniBars3BottomLeft className='text-3xl text-[#000080] '/>  
       </div>
       <div>
           <img src="/images/homepage/frack.png" alt="logo" />
       </div>
       <div>
       <ul className='flex-1 flex justify-center items-center gap-10 max-xlg:gap-[20px] max-sm:hidden '>
            <li onClick={()=>{toggleDropdown()}} className="relative nav-links  cursor-pointer">
              <div className={`hover:text-[#000080] flex gap-[6px] items-center justify-center transition`}>
              <span >Sign Up</span>
                <BsCaretRightFill fontSize={13} className={`${isOpen? 'rotate-90 transition-transform duration-[180ms] ease-linear' :''}  `}/> 
              </div>
              {
                  isOpen && (
                  <ul className="absolute top-full left-[-50%] mt-2 bg-white shadow-md rounded-lg p-[20px] w-[8rem] flex flex-col gap-7">
                          <li>Hire Talent</li>
                          <li>Sign up</li>
                  </ul>
              )
              }
            </li>
        </ul>
       </div>
   </nav>
  )
}

export default MobileNav