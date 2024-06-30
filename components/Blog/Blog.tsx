import Header from "../FAQ/Header";
import BlogPost from "./BlogPost";
import Filter from "./Filter";

const Blog = () => {
  return (
    <main>
      <Header
        h2="Frack Resource Hub"
        p="Stay informed with our most recent news, announcements, and blog posts"
        textCenter=""
      />
      <Filter />
      <BlogPost />
    </main>
  );
};

export default Blog;
