"use client";
import React, { useState } from "react";
import Filter from "./Filter";
import { blogPosts } from "@/utilities/constants";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const BlogPost = () => {
  let startCounter = 0;
  let endCounter = 9;
  const [slicedBlogPosts, setSlicedBlogPost] = useState(
    blogPosts.slice(startCounter, endCounter)
  );
  const nextpagination = () => {
    startCounter += 9;
    endCounter += 9;
    console.log(startCounter, endCounter);
    setSlicedBlogPost(blogPosts.slice(startCounter, endCounter));
    console.log(slicedBlogPosts);
  };
  //   console.log(slicedBlogPosts);
  const [filteredPosts, setFilteredPosts] = useState(slicedBlogPosts);

  return (
    <section className="section-container">
      <div className="mb-10 flex justify-between max-md:flex-col">
        <Filter onFilter={setFilteredPosts} blogPosts={slicedBlogPosts} />
        <div className="flex items-center gap-3 w-full md:justify-end">
          <p>Showing {blogPosts.length} results</p>
          {startCounter !== 0 && (
            <button className="paginationBlogBtn ml-3">
              <FaAngleDoubleLeft />
              <span>Prev</span>
            </button>
          )}
          <button className="paginationBlogBtn" onClick={nextpagination}>
            <span>Next</span>
            <FaAngleDoubleRight />
          </button>
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((item, idx) => (
            <div className="col-span-1 flex flex-col" key={idx}>
              <div className="rounded-lg mb-5 aspect-video">
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
          ))
        ) : (
          <p className="col-span-3 text-2xl font-semibold text-red-700">
            No results found.
          </p>
        )}
      </section>
    </section>
  );
};

export default BlogPost;
