const BlogPage = ({ params }: { params: { postId: string } }) => {
  return <div>page {params.postId}</div>;
};

export default BlogPage;
