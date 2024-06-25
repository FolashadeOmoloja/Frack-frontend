

const cards = [{
    img: '/images/homepage/delivery.svg',
    cardTitle: 'Quality You Can Trust',
    text: "At Frack, we believe in quality over quantity. Every professional in our network undergoes a rigorous vetting process to ensure they possess the skills, experience, and expertise needed to excel in their roles."
},
{
    img: '/images/homepage/Character.svg',
    cardTitle: 'Cost-Effective Solutions',
    text: "Why pay for more than you need? With Frack, companies can access the expertise they need on an as-needed basis, without the financial commitment of full-time hires."
},
{
    img: '/images/homepage/error.svg',
    cardTitle: 'Flexible Scaling',
    text: "Whether you're a startup looking to build your dream team on a budget or a large corporation seeking specialized skills for a short-term project, Frack offers the flexibility to scale your teams up or down quickly and easily."
},

]

const Offer = () => {
  return (
   <section className='section-container  '>
        <div className=' flex flex-col items-center text-center '>
            <h2 className='font-extrabold text-[40px] max-md:text-[24px] mb-5'>Efficiency at Your Fingertips</h2>
            <p className='font-light md:text-[20px] text-lg max-w-[941px] max-md:text-lg'>Say goodbye to endless hours spent searching for the perfect candidate. With Frack, companies can post their requirements on our job board and instantly access acurated list of qualified professionals from our network.</p>
        </div>
        <section className='md:mt-[112px] mt-[50px] flex max-xlg:flex-wrap max-slg:flex-col  justify-center items-center md:gap-16 gap-6 text-center'>
             {
                cards.map((item,idx)=>(
                <div key={idx} className='flex flex-col justify-center items-center max-xlg:max-w-[420px] '>
                    <div className='mb-11 w-[328.5px] h-[250px] max-sm:w-[280px]'>
                       <img src={item.img} alt="card" className='w-full h-full'/>
                    </div>
                     <span className='font-bold text-2xl'>{item.cardTitle}</span>
                    <p className='font-light leading-7 mt-4 h-[140px]'>{item.text}</p>
                </div>
                ))
             }
        </section>
   </section>
  )
}

export default Offer