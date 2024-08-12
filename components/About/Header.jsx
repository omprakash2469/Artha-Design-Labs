import { AboutUsHeader } from "@/public/images";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="container py-12 xl:py-28 mt-16">
      <div className="grid xl:grid-cols-2 items-center gap-5 xl:gap-14 text-center xl:text-left">
        <div className="mb-4 xl:mb-8">
          <h3 className="subtitle">About us</h3>
          <h2 className="primary-heading">
            <span>Artha Design Labs: </span>
            <span> Design Philosophy and Approach </span>
          </h2>
        </div>
        <div>
          <Image
            src={AboutUsHeader}
            alt="about us header"
            className="w-[450px] mx-auto"
          />
        </div>
      </div>
    </header>
  );
}
