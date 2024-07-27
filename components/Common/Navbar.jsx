import { primaryNavbar } from "@/data/navigation";
import { Logo } from "@/public/images";
import Image from "next/image";
import Link from "next/link";

const NavLink = ({ nav }) => {
  return (
    <li className="group text-slate-600 hover:text-theme-six">
      <Link href={nav.link}>{nav.name}</Link>
      <span className="bg-slate-200 group-hover:bg-theme-six h-[2.5px] block w-0 group-hover:w-full transition-all duration-500"></span>
    </li>
  );
};

export default function Navbar() {
  return (
    <nav className="container z-20 border-b py-2">
      <div className="flex items-center justify-between px-4 xl:px-12">
        <Image src={Logo} alt="Artha Logo" width={50} />

        <div>
          <ul className="flex gap-3 xl:gap-x-6 text-sm">
            {primaryNavbar.map((item, i) => {
              return <NavLink key={i} nav={item} />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
