import BlogsGrid from "@/components/Blogs/BlogsGrid";
import NewsletterSubscriptionForm from "@/components/Forms/NewsletterSubscriptionForm";
import { Project1 } from "@/public/images";
import Image from "next/image";

export default function BlogsPage() {
  return (
    <>
      <header className="container py-12 xl:py-28 mt-14">
        <div className="grid xl:grid-cols-2 items-center gap-4 xl:gap-10">
          <div className="lg:pr-10">
            <h4 className="subtitle">Blogs</h4>
            <h1 className="primary-heading space-y-1 xl:space-y-2">
              <span>Exploring the World: </span>
              <span>Stories, Insights, and Inspiration</span>
            </h1>
            <p>
              Embark on a journey through the mesmerizing world of architecture
              with us. Discover the latest trends, delve into timeless designs,
              and unlock the secrets behind iconic structures. Let&apos;s
              explore the intersection of art, culture, and innovation in the
              built environment together
            </p>
          </div>
          <div>
            <Image src={Project1} alt="main blog" className="w-full" />
          </div>
        </div>
      </header>

      {/* Latest Blogs */}
      <section className="container">
        <div className="text-center mb-4 xl:mb-12">
          <h2 className="primary-heading">Latest Blogs</h2>
          <p className="-mt-2">
            Discover the artistry of architecture through our lens
          </p>
        </div>

        <BlogsGrid limit={0} />
      </section>

      <NewsletterSubscriptionForm />
    </>
  );
}
