import { blogPosts } from "@/utilities/constants";
import Filter from "./Filter";

const BlogPost = () => {
  return (
    <section className="section-container">
      <Filter />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((item, idx) => (
          <div className="col-span-1 flex flex-col" key={idx}>
            <div className="rounded-lg mb-5  aspect-video">
              <img
                src={item.img}
                alt="img"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            <p className="text-[#60606B] text-sm mb-3 italic tracking-[1%] font-light">
              <span>{item.date}</span> . <span>{item.readTime}</span>
            </p>
            <p className="text-[#0F0F19] text-xl font-bold mb-10">
              {item.title}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default BlogPost;
