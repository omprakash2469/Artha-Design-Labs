import { PROJECTS } from "@/data/urls";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ name, image, slug }) {
  return (
    <figure>
      <div>
        <Image
          src={image}
          width={300}
          height={150}
          className="w-full"
          alt="Project 1"
        />
      </div>
      <figcaption>
        <h2 className="xl:text-2xl font-hannari border-b-2 my-4 border-theme-six w-fit">
          <Link href={`${PROJECTS}/${slug}`}>{name}</Link>
        </h2>
      </figcaption>
    </figure>
  );
}
