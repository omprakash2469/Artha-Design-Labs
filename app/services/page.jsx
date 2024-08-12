import ServicesSidebar from "@/components/Cards/ServicesSidebar";
import { services_data } from "@/data/services";
import {
  Project1,
  ServiceBell,
  ServiceBuilding,
  ServiceCommercial,
  ServiceHeader,
  ServiceHome,
} from "@/public/images";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ icon, name, desc, image }) => {
  return (
    <div className="relative bg-black rounded-xl shadow-xl shadow-slate-300 group border-slate-300">
      <div className="w-full h-full group-hover:bg-transparent rounded-lg border transition-all cursor-pointer bg-white px-8 absolute inset-0 grid place-items-center  text-center z-20">
        <div className="rounded-lg">
          <Image
            src={icon}
            alt="background image"
            className="w-14 object-cover mx-auto"
          />
          <h3 className="font-bold font-poppins xl:text-xl group-hover:text-white my-4 xl:my-8">
            {name}
          </h3>
          <p className="group-hover:text-slate-200 text-sm font-medium">
            {desc}
          </p>
        </div>
      </div>
      <Image
        src={Project1}
        alt="background image"
        className="h-80 object-cover opacity-40 rounded-lg"
      />
    </div>
  );
};

const ArticleCard = ({ id, info, image }) => {
  return (
    <div id={id}>
      <p className="mb-4">{info}</p>
      <Image src={image} alt="project image" className="w-full" />
    </div>
  );
};

export default function ServicesPage() {
  return (
    <>
      <header className="container py-10 xl:py-28 mt-14">
        <div className="grid xl:grid-cols-2 items-center gap-4 xl:gap-10">
          <div className="text-center xl:text-left">
            <h4 className="subtitle">Our Services</h4>
            <h1 className="primary-heading space-y-1 xl:space-y-2">
              <span>Crafting Innovation: </span>
              <span>Where Creativity, Sustainability, </span>
              <span>and Excellence Converge </span>
            </h1>
          </div>
          <div>
            <Image src={ServiceHeader} alt="main service" className="w-full" />
          </div>
        </div>
      </header>

      <section className="container mb-8 xl:mb-12">
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-14">
          <ServiceCard
            name={"Residental"}
            desc={
              "Crafting bespoke homes that reflect your lifestyle and aspirations"
            }
            icon={ServiceHome}
          />
          <ServiceCard
            name={"Commercial"}
            desc={
              "Crafting bespoke homes that reflect your lifestyle and aspirations"
            }
            icon={ServiceCommercial}
          />
          <ServiceCard
            name={"Hospitality"}
            desc={
              "Crafting bespoke homes that reflect your lifestyle and aspirations"
            }
            icon={ServiceBell}
          />
          <ServiceCard
            name={"Instituitional"}
            desc={
              "Crafting bespoke homes that reflect your lifestyle and aspirations"
            }
            icon={ServiceBuilding}
          />
        </div>
      </section>

      <section className="container grid gap-8 xl:grid-cols-[2fr_5fr]">
        <ServicesSidebar />

        <div className="space-y-4 xl:space-y-12 py-8 xl:py-12">
          {services_data.map((value, i) => {
            return (
              <ArticleCard
                key={i}
                id={value.name}
                image={value.image}
                info={value.desc}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
