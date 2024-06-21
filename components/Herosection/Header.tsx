import React from 'react'
import Image from 'next/image'
import CTABTN from '../Elements/CTA/CTA-Button'

const Header = () => {
  return (
   <header className='  flex max-slg:flex-col pt-16 max-lg:pt-6 justify-between '>
        <section className='flex flex-col slg:pt-[92px] max-md:text-center'>
            <h1 className='text-[48px] font-extrabold max-w-[700px] lg:text-[44px] max-sm:text-[36px] max-xsm:text-[28px] '>Welcome to Frack: Your Fractional Talent Solution</h1>
            <p className='text-lg'>Unlock the power of fractional talent with Frack.</p>
            <div className='mt-8 max-md:justify-center flex'>
              <CTABTN route={'/hiretalent'} CTA='Get Started' showIcon={true}/>
            </div>
        </section>
        <section>
        <div className=' basis-[1/2] mt-8 flex max-slg:justify-center'>
          <img src="/images/homepage/globe2.svg" alt="" className='w-full max-slg:max-w-[500px]' />
       </div>
        </section>
   </header>
  )
}

export default Header