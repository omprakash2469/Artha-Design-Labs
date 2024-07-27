import {
  footer_location,
  our_servcies,
  social_media,
  usefulLinks,
} from "@/data/navigation";
import { Logo } from "@/public/images";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const FooterSection = ({ name, links, external }) => {
  return (
    <div>
      <h4 className="text-lg xl:text-xl font-semibold mb-4">
        <span>{name}</span>
        <span className="h-[3px] w-16 bg-theme-six block"></span>
      </h4>
      <ul className="space-y-2">
        {links.map((value, i) => {
          return (
            <li key={i} className={value.icon && "flex !mb-4"}>
              {value.icon && (
                <FontAwesomeIcon
                  icon={value.icon}
                  className="mr-2 xl:mr-4 mt-2 text-theme-six"
                />
              )}

              <Link
                href={value.link}
                className="font-medium"
                target={external ? "_blank" : "_self"}
              >
                {value.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="container bg-[url(/images/home/footer-bg.png)] bg-cover">
      <div className="grid md:grid-cols-2 xl:grid-cols-[3fr_2fr_2fr_2fr] gap-6 xl:gap-14 py-10 xl:py-20">
        <div>
          <Image src={Logo} alt="footer logo" className="w-14" />
          <p className="my-4 xl:my-8">
            Our construction services are customized to fit the specific
            requirements and characteristics of every project
          </p>
          <div className="flex gap-x-2">
            {social_media.map((value, i) => {
              return (
                <Link
                  key={i}
                  href={value.link}
                  className="bg-theme-six w-9 h-9 grid place-items-center text-white text-sm"
                >
                  <FontAwesomeIcon icon={value.icon} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Useful links */}
        <FooterSection
          name={"Useful Links"}
          links={usefulLinks}
          external={false}
        />

        {/* Our Services */}
        <FooterSection
          name={"Our Services"}
          links={our_servcies}
          external={false}
        />

        {/* Our Services */}
        <FooterSection
          name={"Location"}
          links={footer_location}
          external={true}
        />
      </div>

      <p className="py-5 text-center border-t border-slate-400">
        <span>
          <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()}
        </span>
        <span> || All Rights Reserved</span>
      </p>
    </footer>
  );
}
