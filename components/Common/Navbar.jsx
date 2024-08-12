"use client";
import { social_media_icons } from "@/data/contacts";
import { primaryNavbar, white_navbar_pages } from "@/data/navigation";
import { Logo } from "@/public/images";
import { faBars, faClose, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [lightTheme, setlightTheme] = useState(false);

  // Handle navbar theme
  const pathname = usePathname();
  useEffect(() => {
    if (
      white_navbar_pages.includes(pathname) ||
      pathname.startsWith("/projects/") ||
      pathname.startsWith("/blogs/")
    ) {
      setlightTheme(true);
    } else {
      setlightTheme(false);
    }
  }, [pathname]);

  // Navigation link
  const NavLink = ({ nav }) => {
    return (
      <li
        className={`group ${
          lightTheme ? "text-black hover:text-theme-six" : "text-white"
        }`}
        onClick={() => setNavbar(false)}
      >
        <Link href={nav.link} className="font-hannari tracking-wide">
          {nav.name}
        </Link>
        <span
          className={`h-[2.5px] mt-1 block w-0 group-hover:w-full transition-all duration-500 ${
            lightTheme ? "bg-theme-six" : "bg-white"
          }`}
        ></span>
      </li>
    );
  };

  return (
    <nav className="container z-30 py-2 absolute left-0 right-0 top-0 w-full">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Image src={Logo} alt="Artha Logo" width={50} className="xl:w-14" />
        </Link>

        <div className="flex gap-x-5 xl:gap-x-10 divide-x">
          <ul
            className={`absolute xl:static top-20 right-0 z-20 w-52 xl:w-full xl:flex gap-3 xl:gap-x-6 text-sm ${
              navbar
                ? "block border border-slate-300 rounded-lg p-5 space-y-3 shadow-md"
                : "hidden"
            }`}
          >
            {primaryNavbar.map((item, i) => {
              return <NavLink key={i} nav={item} />;
            })}
          </ul>

          {/* Social Media Icons */}
          <ul
            className={`flex gap-x-2 xl:gap-x-4 pl-4 xl:pl-8 ${
              lightTheme ? "text-black" : "text-white"
            }`}
          >
            {social_media_icons.map((value, i) => {
              return (
                <li key={i}>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={value?.icon}
                      className={`${value?.color} text-lg transition-all hover:bg-white rounded-md p-[3px]`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Hamburger icon */}
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
