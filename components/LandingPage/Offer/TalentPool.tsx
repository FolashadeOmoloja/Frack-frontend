const cards1 = [
  {
    gif: "images/homepage/clock.gif",
    title: "Direct Connections: ",
    text: `At Frack, you connect directly with companies seeking your expertise—no recruiters, no middlemen. Just you and the opportunities.`,
  },
  {
    gif: "images/homepage/note.gif",
    title: "Transparent Job Offers: ",
    text: `Know exactly what you’re signing up for. View project details, rates, and expectations upfront, so you can choose the work that suits you best.`,
  },
  {
    gif: "images/homepage/spin.gif",
    title: "Simple Application Process: ",
    text: `Forget the endless resumes and cover letters. With Frack, your profile is all you need—just one click to apply and you’re all set.`,
  },
  {
    gif: "images/homepage/coins.gif",
    title: "Exclusive Job Opportunities: ",
    text: `Access unique, high-quality gigs and freelance projects you won’t find on other platforms. Whether you’re after short-term work or ongoing projects, we have options that match your skills.`,
  },
  {
    gif: "images/homepage/handshake.gif",
    title: "Work Your Way: ",
    text: `Enjoy the freedom to choose projects that fit your schedule and interests. With Frack, you have the flexibility to work when, where, and how you want.`,
  },
];

const cards2 = [
  {
    gif: "images/homepage/clock.gif",
    title: "A Talent Pool That Gets You: ",
    text: `At Frack, we don’t just glance through resumes. We handpick professionals who genuinely fit your needs and are ready to hit the ground running..`,
  },
  {
    gif: "images/homepage/note.gif",
    title: "Experts who get it done: ",
    text: `Whether you need a battle-hardened CFO, a creative marketing mind, or a tech whiz, our people really know what they're doing. They bring real-world experience and the know-how to tackle your challenges head-on.`,
  },
  {
    gif: "images/homepage/coins.gif",
    title: "People You Can Count On: ",
    text: `With Frack, you gain dedicated partners who are reliable, meet deadlines, and stay within budget, allowing you to focus on your bigger goals.
`,
  },
  {
    gif: "images/homepage/chart.gif",
    title: "Fresh Ideas, Real Results: ",
    text: `We collaborate with experts who don’t just keep up with the trends—they set them. They bring fresh, innovative ideas to the table, helping your business grow and evolve.`,
  },
];

const TalentPool = () => {
  return (
    <section className="section-container  ">
      <section className="flex max-slg:flex-col max-slg:gap-16 max-sm:text-center">
        <section className="basis-1/2 md:pr-10 pt-6">
          <span className="font-semibold text-lg text-[#161519] mb-4">
            Got talent ?
          </span>
          <h3 className="font-bold text-[40px]  text-[#111013]  max-sm:text-2xl mb-14">
            Why jobseekers love us{" "}
          </h3>
          <div className="flex flex-col gap-5 max-sm:gap-8">
            {cards1.map((item, idx) => (
              <div
                key={idx}
                className="flex max-sm:flex-col  gap-2 items-center"
              >
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

        <section className="basis-1/2 bg-[#00b6e844] sm:px-10 px-3 py-6  rounded-[20px] max-sm:text-center">
          <span className="font-semibold text-[20px] text-lg mb-4">
            Want great talent ?
          </span>
          <h3 className="font-bold text-[40px]   max-sm:text-2xl mb-14">
            Why Companies love us
          </h3>
          <div className="flex flex-col gap-5 max-sm:gap-8">
            {cards2.map((item, idx) => (
              <div
                key={idx}
                className="flex max-sm:flex-col gap-2 items-center"
              >
                <div className="min-w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={item.gif}
                    alt="gif"
                    className="w-[30px] h-[30px] object-contain"
                  />
                </div>
                <p className="sm:ml-4 text-sm leading-7">
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
