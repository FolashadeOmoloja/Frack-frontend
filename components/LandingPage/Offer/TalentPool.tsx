const cards1 = [
  {
    gif: "images/homepage/clock.gif",
    title: "Direct Connections: ",
    text: `At Frack, you connect directly with companies seeking your expertise—no recruiters, no middlemen. Just you and the opportunities.`,
    bgColor: "bg-[#F4E7E5]",
    color: "text-[#000080]",
  },
  {
    gif: "images/homepage/note.gif",
    title: "Transparent Job Offers: ",
    text: `Know exactly what you’re signing up for. View project details, rates, and expectations upfront, so you can choose the work that suits you best.`,
    bgColor: "bg-[#00B5E8]",
    color: "text-white",
  },
  {
    gif: "images/homepage/coins.gif",
    title: "Simple Application Process: ",
    text: `Forget the endless resumes and cover letters. With Frack, your profile is all you need—just one click to apply and you’re all set.`,
    bgColor: "bg-[#000080]",
    color: "text-white",
  },
  {
    gif: "images/homepage/coins.gif",
    title: "Exclusive Job Opportunities: ",
    text: `Access unique, high-quality gigs and freelance projects you won’t find on other platforms. Whether you’re after short-term work or ongoing projects, we have options that match your skills.`,
    bgColor: "bg-[#000080]",
    color: "text-white",
  },
  {
    gif: "images/homepage/coins.gif",
    title: "Work Your Way: ",
    text: `Enjoy the freedom to choose projects that fit your schedule and interests. With Frack, you have the flexibility to work when, where, and how you want.`,
    bgColor: "bg-[#000080]",
    color: "text-white",
  },
];

const cards2 = [
  {
    gif: "images/homepage/clock.gif",
    title: "A Talent Pool That Gets You: ",
    text: `At Frack, we don’t just glance through resumes. We handpick professionals who genuinely fit your needs and are ready to hit the ground running..`,
    bgColor: "bg-[#F4E7E5]",
    color: "text-[#000080]",
  },
  {
    gif: "images/homepage/note.gif",
    title: "Experts who get it done: ",
    text: `Whether you need a battle-hardened CFO, a creative marketing mind, or a tech whiz, our people really know what they're doing. They bring real-world experience and the know-how to tackle your challenges head-on.`,
    bgColor: "bg-[#00B5E8]",
    color: "text-white",
  },
  {
    gif: "images/homepage/coins.gif",
    title: "People You Can Count On: ",
    text: `With Frack, you gain dedicated partners who are reliable, meet deadlines, and stay within budget, allowing you to focus on your bigger goals.
`,
    bgColor: "bg-[#000080]",
    color: "text-white",
  },
  {
    gif: "images/homepage/coins.gif",
    title: "Fresh Ideas, Real Results: ",
    text: `We collaborate with experts who don’t just keep up with the trends—they set them. They bring fresh, innovative ideas to the table, helping your business grow and evolve.`,
    bgColor: "bg-[#000080]",
    color: "text-white",
  },
];

const TalentPool = () => {
  return (
    <section className="section-container  ">
      {/* <div className=' flex flex-col items-center text-center '>
        <h2 className='font-extrabold text-[40px] max-md:text-[24px] mb-5'>Frack Talent Pool</h2>
        <p className='font-light md:text-[20px] text-lg max-w-[941px] max-md:text-lg'>At Frack, our talent pool is more than just a collection of resumes,it's a carefully curated ecosystem of top-tier professionals whoembody the four key characteristics that set Frack apart from the rest:</p>
    </div> */}
      <section className="flex ">
        <section className="basis-1/2 md:pr-10 pt-6">
          <span className="font-semibold text-lg text-[#161519] mb-4">
            Got talent ?
          </span>
          <h3 className="font-bold text-[40px]  text-[#111013]  max-sm:text-2xl mb-14">
            Why jobseekers love us{" "}
          </h3>
          <div className="flex flex-col gap-5">
            {cards1.map((item, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <div className="min-w-[60px] h-[60px] rounded-full bg-[#000080] flex items-center justify-center overflow-hidden">
                  <img
                    src={item.gif}
                    alt="gif"
                    className="w-[30px] h-[30px] object-contain"
                  />
                </div>
                <p className="ml-4 text-sm leading-7">
                  <span className="font-bold block">{item.title}</span>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="basis-1/2 bg-[#00b6e844] px-10 py-6  rounded-[20px]">
          <span className="font-semibold text-[20px] text-lg mb-4">
            Want great talent ?
          </span>
          <h3 className="font-bold text-[40px]   max-sm:text-2xl mb-14">
            Why Companies love us
          </h3>
          <div className="flex flex-col gap-5">
            {cards2.map((item, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <div className="min-w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={item.gif}
                    alt="gif"
                    className="w-[30px] h-[30px] object-contain"
                  />
                </div>
                <p className="ml-4 text-sm leading-7">
                  <span className="font-bold block">{item.title}</span>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
};

export default TalentPool;
