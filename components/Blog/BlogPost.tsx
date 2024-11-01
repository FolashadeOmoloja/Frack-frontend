"use client";
import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";
import { useGetAllBlogPosts } from "@/hooks/content-hook";
import { formatTimeDifference } from "@/utilities/constants";
import { useDispatch } from "react-redux";
import { setPost } from "@/redux/slices/contentSlice";

interface Posts {
  _id: string;
  title: string;
  author: string;
  blogImage: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const BlogPost = () => {
  const { blog: blogPosts } = useGetAllBlogPosts();
  const [startCounter, setStartCounter] = useState(0);
  const [endCounter, setEndCounter] = useState(9);
  const [slicedBlogPosts, setSlicedBlogPosts] = useState(
    blogPosts.slice(startCounter, endCounter)
  );
  const [filteredPosts, setFilteredPosts] = useState(slicedBlogPosts);

  const nextPagination = () => {
    const newStartCounter = startCounter + 9;
    const newEndCounter = endCounter + 9;
    setStartCounter(newStartCounter);
    setEndCounter(newEndCounter);
  };

  useEffect(() => {
    const newSlicedBlogPosts = blogPosts.slice(startCounter, endCounter);
    setSlicedBlogPosts(newSlicedBlogPosts);
    setFilteredPosts(newSlicedBlogPosts);
  }, [startCounter, endCounter]);

  const dispatch = useDispatch();
  const handleClick = (item: any) => {
    dispatch(setPost(item));
  };

  return (
    <section className="section-container">
      <div className="mb-10 flex justify-between max-slg:flex-col items-center">
        <Filter onFilter={setFilteredPosts} blogPosts={slicedBlogPosts} />
        <div className="flex items-center gap-3 w-full slg:justify-end max-xxsm:flex-col">
          <p className="max-xxsm:text-=centerS">
            Showing {startCounter + 1} -{" "}
            {endCounter <= blogPosts.length ? endCounter : blogPosts.length} of{" "}
            {blogPosts.length} results
          </p>
          {startCounter !== 0 && (
            <button
              className="paginationBlogBtn xxsm:ml-3"
              onClick={() => {
                setStartCounter(startCounter - 9);
                setEndCounter(endCounter - 9);
              }}
            >
              <FaAngleDoubleLeft />
              <span>Prev</span>
            </button>
          )}
          {endCounter < blogPosts.length && (
            <button className="paginationBlogBtn" onClick={nextPagination}>
              <span>Next</span>
              <FaAngleDoubleRight />
            </button>
          )}
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((item: Posts, idx: number) => {
            const postDate = formatTimeDifference(
              item.createdAt || item.updatedAt
            );

            return (
              <Link
                href={{
                  pathname: `/blog-post/${item.title.replaceAll(" ", "-")}`,
                }}
                key={idx}
                onClick={() => handleClick(item)}
              >
                <div className="col-span-1 flex flex-col ">
                  <div className="rounded-lg mb-5 aspect-video md:h-[225.28px]">
                    <img
                      src={item.blogImage}
                      alt="img"
                      className="h-full w-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-[#60606B] text-sm mb-3 italic tracking-[1%] font-light">
                    <span>{postDate}</span>
                  </p>
                  <p className="text-[#0F0F19] text-xl font-bold mb-10">
                    {item.title}
                  </p>
                </div>
              </Link>
            );
          })
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
