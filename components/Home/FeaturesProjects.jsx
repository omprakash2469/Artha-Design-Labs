import { Project1 } from "@/public/images";
import Image from "next/image";
import SectionHeader from "../Header/SectionHeader";
import ProjectCard from "../Cards/ProjectCard";

export default function FeaturesProjects() {
  return (
    <section className="container">
      <SectionHeader
        subtitle={"Featured projects"}
        heading={"Crafting Your Architectural Dreams Together"}
      />

      <div className="grid xl:grid-cols-2 gap-4 xl:gap-x-8">
        {[1, 2, 3, 4].map((i) => {
          return (
            <ProjectCard
              key={i}
              name={"Alixir"}
              image={Project1}
              slug={"alixir"}
            />
          );
        })}
      </div>
    </section>
  );
}
