import SectionHeader from "@/components/Header/SectionHeader";
import FilterableProjects from "@/components/Projects/FilterableProjects";
import { ProjectHeader } from "@/public/images";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <>
      <header className="container">
        <Image src={ProjectHeader} alt="home banner" className="w-full" />
      </header>

      <section className="container py-10 xl:py-14">
        <div className="mb-8 xl:mb-10">
          <SectionHeader heading={"Our Projects"} />
          <p className="-mt-4 text-center">
            Manifesting dreams into tangible triumphs,transforming visions into
            realities
          </p>
        </div>

        <FilterableProjects />
      </section>
    </>
  );
}
