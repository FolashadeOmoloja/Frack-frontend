import React from 'react'
import Image from 'next/image'
import CTABTN from '../Elements/CTA/CTA-Button'

const Header = () => {
  return (
   <header className='px-[100px] max-lg:px-9 max-sm:px-4  flex pt-16 max-lg-[50px] justify-between'>
        <section className='flex flex-col pt-[84px]'>
            <h1 className='text-[48px] font-extrabold max-w-[700px]'>Welcome to Frack: Your Fractional Talent Solution</h1>
            <p className='text-lg'>Unlock the power of fractional talent with Frack.</p>
            <div className='mt-8'>
              <CTABTN route={'/hiretalent'} CTA='Get Started' showIcon={true}/>
            </div>
        </section>
        <section>
        <div className=' basis-[1/2]'>
          <img src="/images/homepage/globe.svg" alt="" className='w-full' />
       </div>
        </section>
   </header>
  )
}

export default Header