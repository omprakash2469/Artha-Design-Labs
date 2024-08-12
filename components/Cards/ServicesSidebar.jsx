"use client";
import { services_data } from "@/data/services";
import Link from "next/link";
import { useState } from "react";

export default function ServicesSidebar() {
  const [active, setActive] = useState("Interior Design");
  return (
    <div>
      <div className="sticky top-0 py-8 xl:py-12">
        <ul className="space-y-4">
          {services_data.map((value, i) => {
            return (
              <li key={i}>
                <Link
                  href={`#${value.name}`}
                  onClick={() => setActive(value.name)}
                  className={`transition-all cursor-pointer ${
                    active == value.name
                      ? "text-theme-six"
                      : "hover:text-theme-six"
                  }`}
                >
                  {value.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
