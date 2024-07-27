import { Project1 } from "@/public/images";
import Image from "next/image";
import SectionHeader from "../Header/SectionHeader";

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
            <figure key={i}>
              <div>
                <Image
                  src={Project1}
                  width={300}
                  height={150}
                  className="w-full"
                  alt="Project 1"
                />
              </div>
              <figcaption>
                <h2 className="font-medium xl:text-lg border-b-2 my-4 border-theme-six w-fit">
                  The Alixer
                </h2>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
