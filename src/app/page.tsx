import Image from "next/image";
import LandingHeader from "./components/landingHeader";
import mdBanner from "../../public/banner-md.jpg";
import smBanner from "../../public/ms-landing-banner.jpg";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <div className="w-full sm:h-[558px] h-[393px] relative">
        <Image
          src={mdBanner}
          alt="banner"
          className="w-full h-full opacity-50 z-0 hidden sm:block"
        />
        <Image
          src={smBanner}
          alt="banner"
          className="w-full h-full opacity-50 z-0 block sm:hidden"
        />
        <div className="absolute top-1/2 transform -translate-y-1/2 z-10 w-full">
          <div className="flex flex-col items-center w-full">
            <div className="dark-blue sm:text-[40px] text-2xl  font-bold text-center w-full">
              با سروقت، زمان خود را بهینه کنید.
            </div>
            <button className="bg-main-orange text-white sm:text-2xl text-[16px] font-bold sm:py-4 sm:px-5 py-3 px-4 text-center rounded-[15px] cursor-pointer mt-4">
              شروع ثبت نام
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
