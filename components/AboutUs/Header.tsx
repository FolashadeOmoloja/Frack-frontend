import React from 'react'

const AboutHeader = () => {
  return (
    <header className='about-section'>
         <div className='max-sm:flex max-sm:items-center max-sm:flex-col max-sm:justify-center'>
             <p className='flex sm:max-w-[605px] sm:items-end sm:text-center'>
              Redefining
              <img src="/images/homepage/flower.gif" alt="gif" className='w-[124px] h-[124px] max-sm:hidden'/>  </p>
              <p>Talent <span className=' bg-text'>Acquisition</span></p>
              <img src="/images/homepage/flower.gif" alt="gif" className='w-[56px] h-[56px] sm:hidden'/> 
         </div>

    </header>
  )
}

export default AboutHeader