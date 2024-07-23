import { HomeBanner } from "@/public/images";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header className="container">
      <div className="relative">
        <div className="absolute left-20 top-1/2 -translate-y-1/2">
          <h1 className="grid text-white">
            <span className="text-lg xl:text-4xl 2xl:text-5xl mb-6 font-semibold">
              Giving Your Home
            </span>
            <span className="text-2xl xl:text-6xl 2xl:text-7xl uppercase font-bold">
              " Artha "
            </span>
          </h1>
        </div>
        <h5 className="text-white font-semibold xl:text-lg absolute left-20 bottom-20">
          Artha/meaning/love/care
        </h5>
        <Image
          src={HomeBanner}
          width={380}
          className="sm:w-full"
          alt="home banner"
        />
      </div>
    </header>
  );
}
