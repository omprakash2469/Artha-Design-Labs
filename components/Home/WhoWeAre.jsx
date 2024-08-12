import { ABOUT_US } from "@/data/urls";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section className="container py-8 xl:py-14 mb-10">
      <h2 className="text-2xl text-center xl:text-6xl uppercase font-bold mb-4 xl:mb-8 font-poppins">
        Artha
      </h2>
      <div className="grid xl:grid-cols-2 gap-4 2xl:gap-20">
        <div>
          <h3 className="subtitle">WHO WE ARE</h3>
          <h2 className="primary-heading grid">
            <span>Artistry, Sustainability, Technology:</span>
            <span>Our Architectural Ambition</span>
          </h2>
          <p className="leading-[30px] text-sm text-slate-600 xl:text-base">
            ARTHA DesignLabs is a young and hungry architectural firm dedicated
            to merging artistry, sustainability, and technology in every
            project. With years of research and a commitment to excellence, we
            create inspiring spaces that stand the test of time and nature
          </p>
        </div>
        <div>
          <p className="leading-[30px] text-sm text-slate-600 xl:text-base">
            Artha DesignLabs is your partner for comprehensive architectural
            solutions. From innovative architectural and interior design to
            urban planning and sustainability consulting, we offer a diverse
            range of services tailored to your needs. Our expertise extends to
            feasibility studies, project management, 3D visualization,
            renovation, and restoration. Additionally, we provide Valuation
            services and handle dealings with ULBs for hassle-free execution.
            With a commitment to creativity, sustainability, integrity, and
            excellence, Artha DesignLabs ensures that every project exceeds
            expectationsz
          </p>
          <Link href={ABOUT_US} className="btn-primary mt-6">
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
