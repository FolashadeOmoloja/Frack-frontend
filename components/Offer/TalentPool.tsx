const cards = [
    {
        gif:'images/homepage/clock.gif',
        title: 'Expertise',
        text: `Every member of the Frack talent pool is a master of their craft. From seasoned CFOs toinnovative marketing strategists to talented software developers, our professionalsbring a wealth of expertise to the table. With years of experience under their belts,they're equipped to tackle even the most complex challenges withconfidence and precision.`,
        bgColor:'bg-[#F4E7E5]',
        color: 'text-[#000080]'
    },
    {
        gif:'images/homepage/note.gif',
        title: 'Reliability',
        text: `When you partner with Frack, you can trust that you're working with professionals who are committed to excellence. Our talent pool is known for its reliability and dedication to delivering results on time and on budget. With Frack, you can rest easy knowing that your projects are in good hands.`,
        bgColor:'bg-[#00B5E8]',
        color: 'text-white'
    },
    {
        gif:'images/homepage/coins.gif',
        title: 'Innovation',
        text: `At Frack, we believe in pushing the boundaries of what's possible. That's why we're proud to work with professionals who are not only experts in their fields but also innovators who are constantly pushing the envelope and driving change.`,
        bgColor:'bg-[#000080]',
        color: 'text-white'
    },
]

const TalentPool = () => {
  return (
    <section className='section-container  '>
    <div className=' flex flex-col items-center text-center '>
        <h2 className='font-extrabold text-[40px] max-md:text-[24px] mb-5'>Frack Talent Pool</h2>
        <p className='font-light md:text-[20px] text-lg max-w-[941px] max-md:text-lg'>At Frack, our talent pool is more than just a collection of resumes,it's a carefully curated ecosystem of top-tier professionals whoembody the four key characteristics that set Frack apart from the rest:</p>
    </div>
    <section className="md:mt-[108px] mt-[50px] flex flex-col md:gap-[104px] gap-9">
        {
            cards.map((item,idx) =>(
                <div key={idx} className={`${item.bgColor} md:py-[104px] py-[50px] max-w-[1304px] div-center flex-col  gap-6 rounded-2xl max-xslg:px-7`}>
                        <div className="div-center gap-4 " >
                                <div className="w-[57px] h-[57px]"><img src={item.gif} alt="gif" className="w-full h-full"/></div>
                            <span className={`${item.color} xsm:text-lg font-bold`}>{item.title}</span>
                        </div>     
                        <p className={`${item.color} text-center leading-[30px] max-w-[909px] max-xsm:text-sm`}>{item.text}</p>  
                </div>
            ))
        }
    </section>

</section>
  )
}

export default TalentPool