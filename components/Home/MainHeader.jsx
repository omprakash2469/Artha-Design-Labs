import { HomeBanner } from "@/public/images";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header className="container">
      <div className="relative bg-black">
        <div className="absolute xl:left-20 left-1/2 -translate-x-1/2 xl:translate-x-0 z-20 top-1/2 -translate-y-1/2">
          <h1 className="grid text-white text-center xl:text-left">
            <span className="text-lg xl:text-4xl 2xl:text-5xl mb-2 xl:mb-6 font-semibold">
              Giving Your Home
            </span>
            <span className="text-2xl xl:text-6xl 2xl:text-7xl uppercase font-bold">
              " Artha "
            </span>
          </h1>
        </div>
        <h5 className="text-white font-semibold xl:text-lg absolute left-20 bottom-20 hidden xl:block z-20">
          Artha/meaning/love/care
        </h5>
        <Image
          src={HomeBanner}
          width={380}
          className="w-full opacity-80 z-10"
          alt="home banner"
        />
      </div>
    </header>
  );
}
