import { blogPosts } from "@/utilities/constants";

const BlogPage = ({ params }: { params: { postId: string } }) => {
  const decodedPostTitle = decodeURIComponent(params.postId);
  const postTitle = decodedPostTitle.replace(/-/g, " ").trim().toLowerCase();

  const post = blogPosts.find(
    (element) => element.title.trim().toLowerCase() === postTitle
  );

  console.log(post);

  return <section>{post?.title}</section>;
};

export default BlogPage;
