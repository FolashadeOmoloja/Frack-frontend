import CTABTN from "../Elements/CTA/CTA-Button"


const HireTalentSection = () => {
  return (
    <section className="section-container flex justify-center">
          <section className="bg-[#E7E4DE] sm:py-[120px] py-20 max-sm:py-12 sm:px-24 px-8 max-xsm:px-5  rounded-2xl flex max-slg:flex-col-reverse justify-between gap-20 max-xslg:gap-10 lg:w-[90%] ">
                 <article>
                     <h3 className='font-bold text-[40px] max-md:text-[24px] mb-8 text-[#111013] slg:w-[350px] max-slg:text-center'>Let us help you get the best opportunities. </h3>
                     <div className='mt-8 max-slg:justify-center flex'>
                        <CTABTN route={'/hiretalent'} CTA='Hire Talent' showIcon={true}/>
                      </div>
                 </article>
                 <article>
                      <p className="sm:text-lg leading-[29.92px] xslg:mt-9 max-slg:text-center">Whether you're a company looking to scale your team or a talented professional seeking new opportunities, we invite you to join us on our journey</p>
                 </article>
          </section>
  </section>
  )
}

export default HireTalentSection