import { AboutUsPortrait } from "@/public/images";
import Image from "next/image";
import React from "react";

export default function Details() {
  return (
    <section className="container">
      <div className="grid xl:grid-cols-2 gap-5 mb-6 xl:mb-16">
        <div>
          <div className="mb-10">
            <h2 className="primary-heading">
              At the heart of our approach lies a dedication to occupant
              well-being and environmental stewardship.
            </h2>
            <p>
              We conscientiously consider the local context, climate, and
              available resources to create spaces that offer comfort and a
              symbiotic relationship with nature. Mindful of the economic and
              logistical constraints of each project, we actively explore
              alternative solutions to realize our design vision
            </p>
          </div>
          <div>
            <h2 className="primary-heading">
              In every project we undertake, there&apos;s a story of passion
              woven into the fabric of creativity, functionality, and
              sustainability
            </h2>
            <p>
              As part of our long-term goal, we research and utilize building
              biology principles to create healthier and more human-conscious
              living spaces, contributing positively to both individuals and the
              environment.
            </p>
          </div>
        </div>
        <div>
          <Image
            src={AboutUsPortrait}
            alt="about us portrait"
            className="w-[420px] mx-auto"
          />
        </div>
      </div>

      <div>
        <h2 className="primary-heading text-center px-4 xl:px-20 mb-8 xl:mb-12">
          we believe that &apos;God is in the details,&apos; and we meticulously
          ensure the highest quality in every aspect of our work. From concept
          to completion, excellence remains our unwavering standard.
        </h2>

        <div className="xl:columns-2 gap-10 pb-10">
          <p>
            our team consistently reflects on the broader impact of our projects
            within the urban landscape, acknowledging their role in shaping
            communities and cityscapes.
          </p>
          <p>
            Ultimately, our goal is not only to create aesthetically compelling
            and functional spaces but also to make meaningful contributions to
            the communities we serve.
          </p>
        </div>
      </div>
    </section>
  );
}
