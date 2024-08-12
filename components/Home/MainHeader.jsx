import { HomeBanner } from "@/public/images";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header className="bg-black relative">
      <div className="container absolute inset-0 z-20 grid items-center xl:justify-between text-center xl:text-left">
        <div></div>
        <h1 className="grid text-white xl:text-left">
          <span className="text-lg xl:text-4xl 2xl:text-5xl mb-2 xl:mb-6 font-medium font-poppins">
            Giving Your Home
          </span>
          <span className="text-2xl xl:text-6xl 2xl:text-7xl uppercase font-bold font-poppins">
            &quot; Artha &quot;
          </span>
        </h1>
        <h5 className="text-white font-semibold xl:text-lg font-poppins left-20 bottom-20 z-20">
          Artha/meaning/love/care
        </h5>
      </div>
      <Image
        src={HomeBanner}
        className="w-full opacity-80 object-cover h-80 md:h-auto z-10"
        alt="home banner"
      />
    </header>
  );
}
