"use client";
import BlogCard from "../Cards/BlogCard";
import { getBlogs } from "@/utils/getBlogs";

export default function BlogsGrid({ limit }) {
  const blogs = getBlogs(limit);

  return (
    <div className="grid xl:grid-cols-2 gap-y-8 xl:gap-10">
      {blogs?.map((value, i) => (
        <BlogCard key={i} data={value} />
      ))}
    </div>
  );
}
