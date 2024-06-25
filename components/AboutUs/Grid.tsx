const items = [
    {
        num:'01',
        title:'Access to Talent for All:',
        txt:`We believe that every business, regardless of size or budget constraints, deserves access to top-tier talent. Our mission is to level the playing field and provide companies of all sizes with the tools and resources they need to compete in today's competitive landscape.`
    },
    {
        num:'02',
        title:'Streamlined Recruitment Processes:',
        txt:"Traditional hiring processes are often time-consuming, inefficient, and costly. Our mission is to streamline the recruitment process and make it easier than ever for companies to find the talent they need."
    },
    {
        num:'03',
        title:'Personalized Experience:',
        txt:`At Frack, we understand that every company is unique, with its own set of challenges and requirements. That's why our mission is to provide a personalized experience for every client. From matching companies with qualified professionals to providing ongoing support and guidance, we're committed to delivering solutions that meet the specific needs of each business.`
    },
    {
        num:'04',
        title:'Driving Success:',
        txt:`Ultimately, our mission is to drive success for businesses around the world. By helping companies build high-performing teams, we're not just filling positions—we're driving growth, innovation, and success. Our mission is to be a trusted partner on the journey to success, providing the support and resources companies need to thrive in today's ever-changing business landscape.`
    },

]

const Grid = () => {
  return (
    <section className="section-container md:mt-0 mt-24  flex max-lg:flex-col gap-10">
         <div className="max-sm:text-center">
             <span className="font-semibold leading-[26.4px] md:text-2xl text-[20px] max-sm:text-lg text-[#161519] mb-4">Our Mission</span>
             <p className="font-bold text-[52px] leading-[52px] text-[#111013] lg:max-w-[408px] max-md:text-[38px] max-sm:text-3xl max-xsm:text-[22px]">Empowering Companies to Build Their Dream Teams</p>
        </div>   
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {
                items.map((item,index)=>{
                    return(
                        <div key={index} className=" col-span-1  flex flex-col  max-md:items-center max-md:text-center border-l border-[#3b3b4e] pl-6">
                            <span className="text-[#000080] font-semibold mb-4">{item.num}.</span>
                            <span className="text-[#111013] text-2xl max-xsm:text-lg font-bold mb-5 sm:min-h-16">{item.title}</span>
                            <p className="text-[#161519] tracking-[0.02em] leading-7 max-sm:text-[15px]">{item.txt}</p>
                        </div>
                    )
                })
              }
         </section>
    </section>
  )
}

export default Grid


