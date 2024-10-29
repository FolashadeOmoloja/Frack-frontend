"use client";
import CTABTN from "@/components/Elements/CTA/CTA-Button";
import Navbar from "@/components/LandingPage/Navbar/NavBar";
import Footer from "@/components/LandingPage/Offer/Footer";
import { formatTimeDifference } from "@/utilities/constants";
import DOMPurify from "dompurify";
import { useSelector } from "react-redux";

const BlogPage = ({ params }: { params: { postId: string } }) => {
  const { post } = useSelector((store: any) => store.content);
  const postDate = formatTimeDifference(post.createdAt || post.updatedAt);

  const sanitizedContent = DOMPurify.sanitize(post.content ? post.content : "");

  return (
    <>
      <Navbar activeItem={3} />
      <main className="section-container mt-[50px]">
        <h3 className="header-headline text-[52px] max-md:text-[38px] max-sm:text-3xl">
          {post?.title}
        </h3>
        <div className="flex gap-3 my-10">
          <div className="w-14 h-14 rounded-full flex centered bg-[#000080] ">
            <span className="text-lg font-bold text-white">
              {post?.author[0]}
            </span>
          </div>
          <div className="flex flex-col justify-between text-sm">
            <span className="font-semibold">{post?.author}</span>
            <span className="text-gray-500">{postDate}</span>
          </div>
        </div>
        <div className="w-full aspect-video h-[500px] max-sm:h-[350px] rounded-2xl overflow-hidden mb-16">
          <img
            src={post.blogImage}
            alt="blog img"
            className="w-full h-full object-cover"
          />
        </div>
        <main className="tracking-[1%] ">
          <article dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
        </main>
        <div className="mt-24">
          <CTABTN route={"/blog"} CTA="Go back" showIcon />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
