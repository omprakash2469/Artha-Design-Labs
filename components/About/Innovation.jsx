import { AboutUsLandscape } from "@/public/images";
import Image from "next/image";
import React from "react";

export default function Innovation() {
  return (
    <section className="py-10 xl:py-20">
      <div className="container">
        <h2 className="primary-heading px-4 xl:px-20 text-center mb-6 xl:mb-12">
          We love to build homes using our core principles - innovation,
          collaboration, sustainability, integrity, and excellence - guiding our
          iterative design process
        </h2>
        <div className="xl:columns-2 gap-10 mb-6 xl:mb-10">
          <p>
            Through inventive problem-solving, we aim to create works that are
            both refined and distinctive, expressed through architectural form,
            spatial organization, materials, and innovative technology.{" "}
          </p>
          <p>
            We strive to imbue our structures with an air of intrigue,
            manipulating space and form to craft unique experiential journeys
            for occupants.
          </p>
        </div>
      </div>

      <Image
        src={AboutUsLandscape}
        alt="about us landscape"
        className="w-full"
      />
    </section>
  );
}
