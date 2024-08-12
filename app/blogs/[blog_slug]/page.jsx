import BlogDetails from "@/components/Blogs/BlogDetails";
import { BLOGS_URI } from "@/data/api";
import axios from "axios";

export const generateMetadata = async ({ params }) => {
  const slug = params.blog_slug;
  try {
    const response = await axios.get(BLOGS_URI, {
      params: {
        slug: slug,
      },
    });
    const blogData = {
      title: response.data.blogs.meta_title,
      description: response.data.blogs.meta_description,
    };
    return blogData;
  } catch (error) {
    return {
      title: "Artha Design Labs",
      description: "Artha Blog Posts",
    }; // or throw error, depending on your use case
  }
};

export default function BlogDetailPage({ params }) {
  return <BlogDetails slug={params.blog_slug} />;
}
