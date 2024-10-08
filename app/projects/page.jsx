import SectionHeader from "@/components/Header/SectionHeader";
import FilterableProjects from "@/components/Projects/FilterableProjects";
import { ProjectHeader } from "@/public/images";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <>
      <header className="bg-black">
        <Image
          src={ProjectHeader}
          alt="home banner"
          className="w-full opacity-80"
        />
      </header>

      <section className="container py-10 xl:py-14">
        <div className="mb-8 xl:mb-10">
          <SectionHeader heading={"Our Projects"} />
          <p className="xl:-mt-4 text-center text-sm xl:text-base">
            Manifesting dreams into tangible triumphs,transforming visions into
            realities
          </p>
        </div>

        <FilterableProjects />
      </section>
    </>
  );
}
