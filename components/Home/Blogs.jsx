import BlogCard from "../Cards/BlogCard";
import SectionHeader from "../Header/SectionHeader";

const blog_data = {
  title: "Eco-Friendly Trends in Modern Interiors",
  description:
    "Eco-friendly trends in modern interiors have become increasingly popular as people seek sustainable solutions for their homes that reduce environmental impact without sacrificing style or comfort.",
  author: "By Artha",
  date: "21 April, 2024",
};

export default function Blogs() {
  return (
    <section className="container py-10">
      <SectionHeader
        subtitle={"our blogs"}
        heading={"Architectural Insights and Inspiration"}
      />
      <div className="grid xl:grid-cols-2 gap-y-8 xl:gap-10">
        <BlogCard data={blog_data} />
        <BlogCard data={blog_data} />
      </div>
    </section>
  );
}
