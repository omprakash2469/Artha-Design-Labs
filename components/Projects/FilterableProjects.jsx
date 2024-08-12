"use client";
import { Project1 } from "@/public/images";
import ProjectCard from "../Cards/ProjectCard";
import { project_data } from "@/data/projects";
import { useState } from "react";

export default function FilterableProjects() {
  const [projects, setProjects] = useState(project_data);
  const [activeTab, setActiveTab] = useState("All");

  const filter_projects = (value) => {
    if (value == "All") {
      setProjects(project_data);
    } else {
      setProjects(project_data.filter((key) => key.category == value));
    }
    setActiveTab(value);
  };

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
            <li key={i} onClick={() => filter_projects(value)}>
              <p
                className={`transition-all text-sm xl:text-base font-medium cursor-pointer ${
                  activeTab == value ? "text-theme-six" : "hover:text-theme-six"
                }`}
              >
                {value}
              </p>
            </li>
          );
        })}
      </ul>

      <div className="grid xl:grid-cols-2 gap-4 xl:gap-x-8">
        {projects.map((value, i) => {
          return (
            <ProjectCard
              key={i}
              name={value?.name}
              image={Project1}
              slug={"alixir"}
            />
          );
        })}
      </div>
    </div>
  );
}
