import CTABTN from "@/components/Elements/CTA/CTA-Button";
import Navbar from "@/components/LandingPage/Navbar/NavBar";
import CTA from "@/components/LandingPage/Offer/CTA";
import Footer from "@/components/LandingPage/Offer/Footer";
import { jobPostings } from "@/utilities/constants/jobData";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const Joblisting = ({ params }: { params: { jobId: string } }) => {
  const jobData = jobPostings[parseInt(params.jobId)];

  return (
    <>
      <Navbar activeItem={1} />
      <main className="section-container mt-[50px]">
        <Link
          href={"/jobs"}
          className="flex text-[#000080] gap-3 text-xl items-center font-bold"
        >
          <FaArrowLeft />
          <span>Go back</span>
        </Link>
        <h3 className="text-[52px] max-md:text-[38px] max-sm:text-3xl font-bold text-[#111013] md:max-w-[500px] leading-[72px] mb-9 mt-10">
          {jobData.title}
        </h3>
        <div className="flex md:gap-7 gap-4  md:text-lg flex-wrap md:mb-[100px] mb-[50px]">
          <span>{jobData.location}</span>
          <span>{jobData.priceRange}</span>
          <span>{jobData.jobProximity}</span>
          <span>{jobData.experience} level</span>
        </div>
        <section>
          <span className="md:text-2xl text-lg font-bold mb-4 inline-block">
            Description
          </span>
          <p className="tracking-[0.02em] leading-6 text-[#161519]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio enim
            nobis facere nostrum itaque omnis cupiditate perspiciatis ipsa
            similique, quia accusantium! Temporibus optio ratione sequi
            voluptatibus omnis porro iste asperiores! Vero nesciunt porro labore
            recusandae, vel adipisci laborum cupiditate ducimus corrupti harum.
            Nobis ipsam doloremque facilis sapiente quia eligendi totam ea
            excepturi, possimus corrupti ducimus, repellat iusto eos odit
            accusamus. Itaque cupiditate recusandae illo enim, eius neque
            aperiam ea commodi harum natus dolorem porro in illum, voluptates
            dicta odit dolores nam error dolorum quia, laborum nihil eligendi
            est sit. Delectus. Repellat iste dolores consequatur aperiam
            accusantium amet, molestias suscipit, maiores cupiditate, odit sed
            architecto quo. Beatae, aspernatur. Perferendis quis sunt rem
            quaerat quisquam a blanditiis. Corporis quis excepturi eum ratione?
            Accusantium a in omnis necessitatibus sit iusto saepe tempore earum
            corporis perferendis velit doloribus veritatis, accusamus minus quis
            neque asperiores aut quam laborum! Sapiente maxime blanditiis,
            beatae quas ipsam ipsa! Odio reprehenderit provident sint odit
            assumenda natus doloribus vero dolore nisi minima totam, sequi amet
            omnis culpa ab, iusto cupiditate quam? Necessitatibus unde earum
            deserunt est, fugit fuga autem quasi? Magnam quo fugit repellat esse
            pariatur accusamus libero, corporis vero aliquam sint quos
            accusantium nisi eos laborum obcaecati facilis aliquid similique.
            Sequi expedita ullam, ipsam obcaecati veritatis cupiditate quae.
            Esse? Fugiat aliquam esse itaque dolores blanditiis consequuntur at
            minima veniam? Est vitae sint voluptates saepe quos? Dolor facilis
            tenetur quam ipsum eveniet nobis, neque praesentium saepe incidunt
            laudantium qui fugiat! Ipsa quaerat modi vel, cumque nulla, possimus
            id magni veritatis mollitia aliquid eos! Autem, illum delectus?
            Illo, ullam. Veritatis, nisi qui. Fugiat adipisci cupiditate ducimus
            ad illo sequi voluptatem dolor! Impedit, consequatur neque. Dolorum
            tenetur blanditiis temporibus nam doloremque, ea, quo dicta
            asperiores quisquam omnis maxime quia, modi reprehenderit
            praesentium? Maiores doloribus ab, saepe a magnam in quo aliquid
            eveniet. Totam fugiat id illo vitae dolorum incidunt rerum eos
            aspernatur nisi? Et, alias voluptas eaque ex tenetur ratione ipsa
            placeat ipsum, optio consectetur fugit reprehenderit in? Quis,
            obcaecati. Magni, dolorum? Eum nesciunt delectus ab saepe beatae
            quis rem commodi vero. Culpa temporibus porro obcaecati et numquam,
            laboriosam possimus adipisci voluptates sed minima ullam at ipsa
            vero optio harum corporis minus. Tempore harum dignissimos deserunt
            voluptatem sequi recusandae nobis corrupti nemo aspernatur delectus!
            Nihil deleniti placeat perspiciatis dignissimos, dolor a aut alias
            voluptatem odit quis, itaque aliquam earum nam fugiat deleEEEEEctus.
          </p>
        </section>
        <div>
          <span className="mt-20 mb-4 md:text-2xl text-lg font-bold inline-block">
            Skills
          </span>
          <div className="flex gap-4 flex-wrap mb-16">
            {jobData.skills.map((opt, idx) => (
              <span
                key={idx}
                className="text-sm h-11 min-w-32 bg-[#000080] rounded-md flex items-center justify-center px-2 text-white font-semibold"
              >
                {opt}
              </span>
            ))}
          </div>
        </div>
        <div>
          <span className="mb-4 md:text-2xl text-lg font-bold inline-block">
            Experience
          </span>
          <span className="block md:text-lg">{jobData.experience} level</span>
        </div>
        <div className="my-14">
          <span className="mb-4 md:text-2xl font-bold inline-block ">
            Salary Range
          </span>
          <span className="block md:text-lg">{jobData.priceRange} </span>
        </div>
        <div>
          <CTABTN route={"./sign-in"} CTA="Apply" showIcon />
        </div>
      </main>
      <CTA />
      <Footer />
    </>
  );
};
export default Joblisting;
