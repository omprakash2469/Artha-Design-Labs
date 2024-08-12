import { HomeBanner } from "@/public/images";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header className="bg-black">
      <div className="container absolute inset-0 z-20 grid items-center justify-between">
        {/* <div className="absolute xl:left-20 left-1/2 bottom-0 -translate-x-1/2 xl:translate-x-0 z-20 top-1/2 -translate-y-1/2"> */}
        <div></div>
        <h1 className="grid text-white text-center xl:text-left">
          <span className="text-lg xl:text-4xl 2xl:text-5xl mb-2 xl:mb-6 font-medium font-poppins">
            Giving Your Home
          </span>
          <span className="text-2xl xl:text-6xl 2xl:text-7xl uppercase font-bold font-poppins">
            &quot; Artha &quot;
          </span>
        </h1>
        <h5 className="text-white font-semibold xl:text-lg font-poppins  left-20 bottom-20 hidden xl:block z-20">
          Artha/meaning/love/care
        </h5>
      </div>
      <Image
        src={HomeBanner}
        className="w-full opacity-80 z-10"
        alt="home banner"
      />
    </header>
  );
}
