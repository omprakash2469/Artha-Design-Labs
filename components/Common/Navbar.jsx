import { primaryNavbar } from "@/data/navigation";
import { Logo } from "@/public/images";
import Image from "next/image";
import Link from "next/link";

const NavLink = ({ nav }) => {
  return (
    <li className="group">
      <Link href={nav.link}>{nav.name}</Link>
      <span className="bg-slate-200 h-[2.5px] block w-0 group-hover:w-full transition-all duration-500"></span>
    </li>
  );
};

export default function Navbar() {
  return (
    <nav className="container absolute top-0 left-0 right-0 z-20">
      <div className="flex items-center justify-between px-4 xl:px-12">
        <Image src={Logo} alt="Artha Logo" width={60} />

        <div>
          <ul className="flex gap-3 xl:gap-x-6 text-sm text-slate-200">
            {primaryNavbar.map((item, i) => {
              return <NavLink key={i} nav={item} />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
