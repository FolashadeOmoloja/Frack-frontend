"use client"
import { NavLinks } from '@/utilities/constants';
import React, { useState } from 'react'
import { BsCaretRightFill } from 'react-icons/bs';
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { ImCross } from "react-icons/im";


const MobileNav = () => {
    const [isOpenDropdown, setisOpenDropdown] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setisOpenDropdown(!isOpenDropdown);}
  return (
   <nav className='lg:hidden relative '>

            <section className='flex justify-between items-center h-24 px-9 max-sm:px-4 max-sm:flex-row-reverse'>
              {
                isOpen ? (
                     <button onClick={()=>setIsOpen(!isOpen)} >
                        <ImCross className='text-3xl text-[#000080] '/>
                      </button>
                ) :   
                <button  onClick={()=>setIsOpen(!isOpen)}>
                     <HiMiniBars3BottomLeft className='text-3xl text-[#000080] ' />  
                </button>
              }
              <div>
                  <img src="/images/homepage/fracklogo.png" alt="logo" />
              </div>
              <ul className=' flex justify-center items-center gap-10 max-xlg:gap-[20px] max-sm:hidden '>
                   <li onClick={()=>{toggleDropdown()}} className="relative nav-links  cursor-pointer">
                     <div className={`text-[#000080] flex gap-[6px] items-center justify-center transition`}>
                     <span >Sign Up</span>
                       <BsCaretRightFill fontSize={13} className={`${isOpenDropdown? 'rotate-90 transition-transform duration-[180ms] ease-linear' :''}  `}/> 
                     </div>
                     {
                         isOpenDropdown && (
                         <ul className="absolute top-full left-[-50%] mt-2 bg-white shadow-md rounded-lg p-[20px] w-[8rem] flex flex-col gap-7">
                                 <li>Hire Talent</li>
                                 <li>Sign up</li>
                         </ul>
                      )
                      }
                 </li>
             </ul>
            </section>
            {
              isOpen && (
                <section className='absolute  top-[96px] left-0 bottom-0 px-9 py-5 max-sm:px-4 '>
                     {
                      NavLinks.map((item,idx) =>(
                        <ul>
                           <li className='text-normal font-semibold text-[#000080]'>{item.navItem}</li>
                        </ul>
                      ))
                     }
                </section>
              )
            }
   </nav>
  //           {
  //             isOpen? (
  //              <div
  //              className={`${
  //                isOpen ? 'translate-x-0' : '-translate-x-full'
  //              } fixed inset-y-0 left-0 w-[90%] bg-color shadow-lg z-40 transform transition-transform duration-300 ease-in-out`}
  //            >
  //              <button
  //                onClick={toggleSidebar}
  //                className="absolute top-0 right-0 mt-[39px] mr-[51px]"
  //              >
  //                <ImCross/>
  //              </button>
               
  //              <section className='flex flex-col gap-[10px]  mt-[0px] ml-[47px]'>
  //              <ul >
  //                   {
  //                     NavLinks.map((item,index) =>{
  //                       return(
  //                         <a href={item.href} key={index} >
  //                         {/* <li className="mobilenav-hover flex justify-between w-[210px] relative text-gray-700 mb-[20px] transition duration-300 rounded-lg pl-[10px] " key={index}>
  //                           <div className="flex gap-2 ">
  //                            <div className="p-2 border-[1px] border-gray-300 rounded-lg flex items-center item-icon "><span>{item.icon}</span></div>
  //                           <span className="flex items-center">{item.page}</span>
  //                           </div>
  //                         </li> */}
  //                         </a>
  //                       )
  //                     })
  //                   }
  //            </ul>
       
  //              </section>
  //            </div>
   )
}

export default MobileNav