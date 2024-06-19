import React from 'react'
import Image from 'next/image'
import CTABTN from '../Elements/CTA/CTA-Button'

const Header = () => {
  return (
   <header className='px-[100px] max-xlg:px-[50px] max-lg:px-9 max-sm:px-4  flex max-slg:flex-col pt-16 max-lg:pt-6 justify-between relative max-lg:top-[96px]'>
        <section className='flex flex-col pt-[84px]'>
            <h1 className='text-[48px] font-extrabold max-w-[700px] max-lg:text-[44px] '>Welcome to Frack: Your Fractional Talent Solution</h1>
            <p className='text-lg'>Unlock the power of fractional talent with Frack.</p>
            <div className='mt-8'>
              <CTABTN route={'/hiretalent'} CTA='Get Started' showIcon={true}/>
            </div>
        </section>
        <section>
        <div className=' basis-[1/2]'>
          <img src="/images/homepage/globe2.svg" alt="" className='w-full' />
       </div>
        </section>
   </header>
  )
}

export default Header