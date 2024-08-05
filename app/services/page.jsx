import { Project1, ServiceHeader } from "@/public/images";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const categories = [
  "Interior Design",
  "Urban Planning",
  "Sustainability Consulting",
  "Feasibility Studies",
  "Project Management",
  "3D Visualization",
  "Renovation and Restoration",
  "Interior Styling and Decoration",
  "Custom Furniture Design",
  "Valuation Work",
  "ULB Dealings",
];

const ServiceCard = ({ icon, name, desc, image }) => {
  return (
    <div className="relative bg-black rounded-xl shadow-xl shadow-slate-300 group border-slate-300">
      <div className="w-full h-full group-hover:bg-transparent rounded-lg border transition-all cursor-pointer bg-white px-8 absolute inset-0 grid place-items-center  text-center z-20">
        <div className="rounded-lg">
          <FontAwesomeIcon
            icon={icon}
            className="w-10 mx-auto text-theme-six"
          />
          <h3 className="font-semibold group-hover:text-white my-4">{name}</h3>
          <p className="group-hover:text-slate-200 text-sm">{desc}</p>
        </div>
      </div>
      <Image
        src={Project1}
        alt="background image"
        className="h-80 object-cover opacity-50 rounded-lg"
      />
    </div>
  );
};

const ArticleCard = () => {
  return (
    <div>
      <p className="mb-4">
        Designing interior spaces that seamlessly integrate with the
        architectural vision, reflecting the client&apos;s aesthetic preferences
        and functional requirements.
      </p>
      <Image src={Project1} alt="project image" className="w-full" />
    </div>
  );
};

export default function ServicesPage() {
  return (
    <>
      <header className="container py-10 xl:py-20">
        <div className="grid xl:grid-cols-2 items-center gap-4 xl:gap-10">
          <div className="text-center xl:text-left">
            <h4 className="subtitle">Our Services</h4>
            <h1 className="primary-heading">
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
            icon={faHome}
          />
          <ServiceCard
            name={"Residental"}
            desc={
              "Crafting bespoke homes that reflect your lifestyle and aspirations"
            }
            icon={faHome}
          />
          <ServiceCard
            name={"Residental"}
            desc={
              "Crafting bespoke homes that reflect your lifestyle and aspirations"
            }
            icon={faHome}
          />
          <ServiceCard
            name={"Residental"}
            desc={
              "Crafting bespoke homes that reflect your lifestyle and aspirations"
            }
            icon={faHome}
          />
        </div>
      </section>

      <section className="container py-8 xl:py-14">
        <div className="grid gap-8 xl:grid-cols-[2fr_5fr]">
          <div>
            <ul className="space-y-4">
              {categories.map((value, i) => {
                return (
                  <li key={i}>
                    <span className="hover:text-theme-six transition-all cursor-pointer">
                      {value}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <ArticleCard />
          </div>
        </div>
      </section>
    </>
  );
}
