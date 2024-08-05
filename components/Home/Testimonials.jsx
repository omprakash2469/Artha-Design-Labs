import Image from "next/image";
import SectionHeader from "../Header/SectionHeader";
import { Testimonial1 } from "@/public/images";

export default function Testimonials() {
  return (
    <section className="container py-10">
      <div className="bg-[url(/images/home/home-testimonials.png)] bg-cover">
        <SectionHeader
          subtitle={"testimonials"}
          heading={"What Clients says About us"}
        />

        <div className="py-10 px-4 xl:py-20 text-center">
          <p className="text-sm xl:text-lg xl:w-[700px] mx-auto">
            Working with ARTHA DesignLabs was a transformative experience. Their
            attention to detail and creative approach exceeded our expectations.
          </p>
          <Image
            src={Testimonial1}
            alt="testimonials 1"
            width={50}
            height={50}
            className="xl:w-24 xl:h-24 mx-auto my-4"
          />
          <span className="font-medium">
            <span>Japneet Singh / </span>
            <span className=" text-theme-six">Space Studio</span>
          </span>
        </div>
      </div>
    </section>
  );
}
