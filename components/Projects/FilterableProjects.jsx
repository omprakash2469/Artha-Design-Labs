import { Project1 } from "@/public/images";
import ProjectCard from "../Cards/ProjectCard";

export default function FilterableProjects() {
  const tabs = [
    "All",
    "Hospitality",
    "Libraries",
    "Interior",
    "Residental",
    "Royal",
    "Buildings",
  ];
  return (
    <div>
      <ul className="flex flex-wrap gap-4 xl:gap-x-12 justify-center mb-6 xl:mb-10">
        {tabs.map((value, i) => {
          return (
            <li key={i}>
              <span className="hover:text-theme-six transition-all font-medium cursor-pointer">
                {value}
              </span>
            </li>
          );
        })}
      </ul>

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
    </div>
  );
}
