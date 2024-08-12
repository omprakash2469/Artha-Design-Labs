import { BLOGS } from "@/data/urls";
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
    <div className="hover:scale-[1.02] transition-all">
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
          <h2 className="font-hannari text-lg xl:text-2xl">{data?.title}</h2>
          <p className="text-slate-500 text-sm xl:text-base my-4">
            {data?.exerpt}...
          </p>
          <Link href={`${BLOGS}/${data?.slug}`} className="group">
            <span className="font-semibold font-poppins transition-all uppercase group-hover:text-theme-six text-sm space-x-2 flex items-start">
              <span>Read more </span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-4 -rotate-45 group-hover:rotate-0 transition-all"
              />
            </span>
            <span className="h-[2px] group-hover:bg-theme-six bg-black w-10 block"></span>
          </Link>
        </figcaption>
      </figure>
    </div>
  );
}
