
import CTABTN from '../Elements/CTA/CTA-Button'

const About = () => {
  return (
    <section className='bg-[#000080] section-container flex '>
         <section>
               <h3>Unlock the power of fractional talent with Frack.</h3>
               <p>Our AI-driven platform connects companies with top-tier professionals
               on demand, saving you time, reducing hiring costs, and minimizing the financial commitment of full-time hires.</p>
               <div>
                 <CTABTN route={""} CTA="About Us" showIcon={true} backGround='bg-white' color='text-black'/>
               </div>
         </section>
    <div>
        <img src="/images/homepage/illustration.svg" alt="img" />
    </div>
</section>
  )
}

export default About