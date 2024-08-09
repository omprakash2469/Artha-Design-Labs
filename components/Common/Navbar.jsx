"use client";
import { primaryNavbar } from "@/data/navigation";
import { Logo } from "@/public/images";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const NavLink = ({ nav }) => {
    return (
      <li
        className="group text-slate-600 hover:text-theme-six"
        onClick={() => setNavbar(false)}
      >
        <Link href={nav.link} className="font-hannari text-[17px]">
          {nav.name}
        </Link>
        <span className="bg-slate-200 group-hover:bg-theme-six h-[2.5px] block w-0 group-hover:w-full transition-all duration-500"></span>
      </li>
    );
  };

  return (
    <nav className="container z-20 border-b py-2">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Image src={Logo} alt="Artha Logo" width={50} className="xl:w-14" />
        </Link>

        <div>
          <ul
            className={`absolute xl:static top-20 right-0 bg-white z-20 w-52 xl:w-full xl:flex gap-3 xl:gap-x-6 text-sm ${
              navbar
                ? "block border border-slate-300 rounded-lg p-5 space-y-3 shadow-md"
                : "hidden"
            }`}
          >
            {primaryNavbar.map((item, i) => {
              return <NavLink key={i} nav={item} />;
            })}
          </ul>

          <button onClick={() => setNavbar(!navbar)} className="xl:hidden">
            <FontAwesomeIcon
              icon={navbar ? faClose : faBars}
              className="text-3xl"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
