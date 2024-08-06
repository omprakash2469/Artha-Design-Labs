import BlogsGrid from "../Blogs/BlogsGrid";
import SectionHeader from "../Header/SectionHeader";

export default function Blogs() {
  return (
    <section className="container py-10">
      <SectionHeader
        subtitle={"our blogs"}
        heading={"Architectural Insights and Inspiration"}
      />
      <BlogsGrid limit={2} />
    </section>
  );
}
