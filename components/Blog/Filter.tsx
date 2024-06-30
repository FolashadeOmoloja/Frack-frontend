import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

type BlogPost = {
  img: string;
  date: string;
  title: string;
  readTime: string;
};

const Filter = ({
  onFilter,
  blogPosts,
}: {
  onFilter: React.Dispatch<React.SetStateAction<BlogPost[]>>;
  blogPosts: BlogPost[];
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredPosts = blogPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onFilter(filteredPosts);
  }, [searchTerm, onFilter]);

  return (
    <div className=" inline-block w-full mb-8">
      <div className="mb-5 relative w-full md:w-[370px] ">
        <input
          type="text"
          id="searchInput"
          placeholder="Search Posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full  p-3 text-base border border-gray-300 rounded-md focus:border-2 focus:border-[#000080] outline-none"
        />
        <button className="absolute top-0 right-0 h-full w-12 flex items-center justify-center bg-transparent border-none cursor-pointer text-[#000080]">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Filter;
