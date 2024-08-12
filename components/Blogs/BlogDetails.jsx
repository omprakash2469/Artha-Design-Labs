"use client";
import "../../public/styles/blog.css";
import { getBlogs } from "@/utils/getBlogs";
import Image from "next/image";

export default function BlogDetails({ slug }) {
  const blog = getBlogs(0, slug);
  console.log(blog);

  return (
    <main className="container py-10 mt-16">
      <Image
        src={blog?.image}
        alt="blog one image"
        className="w-full"
        width={1280}
        height={450}
      />
      <h1 className="primary-heading py-4">{blog?.title}</h1>

      <article>
        <p className="mb-4 font-medium text-slate-600">{blog?.exerpt}</p>
        <div
          id="blog-content"
          className="space-y-6"
          dangerouslySetInnerHTML={{ __html: blog?.content }}
        />
      </article>
    </main>
  );
}
