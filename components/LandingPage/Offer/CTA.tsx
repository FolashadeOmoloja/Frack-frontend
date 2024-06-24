import CTABTN from "../../Elements/CTA/CTA-Button"


const CTA = () => {
  return (
          <section className="section-container ">
            <section className=" bg-custom-bg bg-cover bg-no-repeat sm:py-[120px] py-20 sm:px-24 px-14   max-xsm:px-12 rounded-2xl">
           <h3 className='font-bold text-[40px] max-md:text-[24px] mb-8 text-[#000080] max-w-[400px] max-sm:text-center'>Get started with 
           Frack today! </h3>
           <div className='mt-8 max-md:justify-center flex'>
              <CTABTN route={'/hiretalent'} CTA='Get Started' showIcon={true}/>
            </div>
    </section>
          </section>
  )
}

export default CTA