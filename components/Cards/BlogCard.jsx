import { Project1 } from "@/public/images";
import {
  faArrowRight,
  faCalendar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function BlogCard({ data }) {
  return (
    <div>
      <figure>
        <div>
          <Image src={Project1} alt={data?.title} className="w-full" />
        </div>
        <figcaption>
          <p className="space-x-4 py-1 xl:py-2">
            <span>
              <FontAwesomeIcon icon={faUser} className="mr-2 text-theme-six" />
              <span className="text-xs text-slate-500">{data?.author}</span>
            </span>
            <span>
              <FontAwesomeIcon
                icon={faCalendar}
                className="mr-2 text-theme-six"
              />
              <span className="text-xs text-slate-500">{data?.date}</span>
            </span>
          </p>
          <h2 className="font-medium text-lg">{data?.title}</h2>
          <p className="text-slate-600 my-4">{data?.description}</p>
          <button>
            <span className="font-semibold uppercase text-theme-six text-sm space-x-2">
              <span>Read more</span> <FontAwesomeIcon icon={faArrowRight} />
            </span>
            <span className="h-[2px] bg-theme-six w-10 block"></span>
          </button>
        </figcaption>
      </figure>
    </div>
  );
}
