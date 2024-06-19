import React from 'react'
import Image from 'next/image'
import CTABTN from '../Elements/CTA/CTA-Button'

const Header = () => {
  return (
   <header>
        <section className=''>
            <h1>Welcome to Frack: Your Fractional Talent Solution</h1>
            <p>Unlock the power of fractional talent with Frack.</p>
            <div>
              <CTABTN route={'/hiretalent'} CTA='Get Started'/>
            </div>
        </section>
        <section>
        <div>
          <img src="/images/homepage/globe.svg" alt="" />
       </div>
        </section>
   </header>
  )
}

export default Header