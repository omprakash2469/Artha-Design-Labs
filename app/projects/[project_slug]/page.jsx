import InfoList from "@/components/Cards/InfoList";
import { CONTACT_US } from "@/data/urls";
import { Project1, ProjectHeader } from "@/public/images";
import {
  faCalendar,
  faLocation,
  faLocationPin,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetails({ params }) {
  const slug = params.project_slug;
  return (
    <>
      <header className="container py-6 xl:py-14">
        <div className="grid grid-cols-2 items-center">
          <div>
            <h2 className="text-xl xl:text-3xl mb-4 xl:mb-8">Altroz Villa</h2>
            <ul className="space-y-2 xl:space-y-6">
              <InfoList
                name="Location:"
                value="Mumbai, India"
                icon={faLocationPin}
              />
              <InfoList name="Square Meters:" value="10000" icon={faSquare} />
              <InfoList name="Date:" value="12/4/24" icon={faCalendar} />
            </ul>
          </div>
          <div>
            <Image src={Project1} alt="project image" className="w-full" />
          </div>
        </div>
      </header>

      <section className="container">
        <article>
          <h4 className="subtitle">Project Brief</h4>
          <p className="mb-10 xl:mb-14">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur aperiam quod perspiciatis similique! Fugiat, assumenda
            inventore? Nisi eaque, sit optio aut a iste rerum eveniet nulla nam
            molestias nesciunt adipisci cupiditate in asperiores quae explicabo
            repellendus magnam! Deserunt hic laboriosam similique asperiores
            culpa nihil consequatur omnis labore, placeat neque accusantium,
            voluptate sequi doloribus veniam aspernatur sint harum. Velit ullam
            quaerat totam, perspiciatis recusandae aliquam, et fuga explicabo,
            doloribus laboriosam consequatur ducimus error animi dicta. Dolorem
            provident placeat deleniti ullam est?
          </p>

          <div className="grid gap-5">
            <Image
              src={ProjectHeader}
              alt="project image"
              className="w-full col-span-2"
            />
            <Image
              src={ProjectHeader}
              alt="project image"
              className="w-full col-span-2"
            />
            <Image src={ProjectHeader} alt="project image" className="w-full" />
            <Image src={ProjectHeader} alt="project image" className="w-full" />
          </div>
        </article>

        <div className="py-5 xl:pt-14 text-center">
          <h4 className="text-xl xl:text-2xl mb-4">How Can We Help You?</h4>
          <Link href={CONTACT_US} className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
