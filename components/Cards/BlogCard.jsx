import { BLOGS } from "@/data/urls";
import { Project1 } from "@/public/images";
import {
  faArrowRight,
  faCalendar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ data }) {
  return (
    <div>
      <figure>
        <div>
          <Image
            src={data?.image}
            width={600}
            height={350}
            alt={data?.title}
            className="w-full"
          />
        </div>
        <figcaption>
          <p className="space-x-4 py-2 xl:py-4 flex">
            <span className="flex items-end">
              <FontAwesomeIcon
                icon={faUser}
                className="mr-2 text-theme-six w-3 xl:w-4"
              />
              <span className="text-xs text-slate-500">By Artha</span>
            </span>
            <span className="flex items-end">
              <FontAwesomeIcon
                icon={faCalendar}
                className="mr-2 text-theme-six w-3 xl:w-4"
              />
              <span className="text-xs text-slate-500">{data?.date}</span>
            </span>
          </p>
          <h2 className="font-medium text-lg xl:text-xl">{data?.title}</h2>
          <p className="text-slate-500 text-sm xl:text-base my-4">
            {data?.exerpt}...
          </p>
          {/* <Link href={`${BLOGS}/${data?.slug}`}> */}
          <button>
            <span className="font-semibold uppercase text-theme-six text-sm space-x-2 flex items-start">
              <span>Read more </span>
              <FontAwesomeIcon icon={faArrowRight} className="w-4" />
            </span>
            <span className="h-[2px] bg-theme-six w-10 block"></span>
          </button>
        </figcaption>
      </figure>
    </div>
  );
}
