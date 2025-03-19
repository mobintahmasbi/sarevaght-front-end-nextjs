import Image from "next/image";
import LandingHeader from "./components/landingHeader";
import Footer from './components/footer'
import mdBanner from "../../public/banner-md.jpg";
import smBanner from "../../public/ms-landing-banner.jpg";
import dollarCoin from "../../public/dollar-coin.png";
import updating from "../../public/updating.png";
import supporting from "../../public/tech-support.png";
import Link from "next/link";

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
            <Link className="bg-main-orange text-white sm:text-2xl text-[16px] font-bold sm:py-4 sm:px-5 py-3 px-4 text-center rounded-[15px] cursor-pointer mt-4" href={'/phone-entry'}>
              شروع ثبت نام
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full">
          <div className="w-full text-center sm:text-4xl text-2xl font-bold dark-blue mt-10">
            با سروقت :
          </div>
          <div className="w-full flex flex-wrap justify-between mt-10 sm:px-14 px-4">
            <div className="sm:w-xl w-full sm:h-[154px] h-[100px] flex items-center justify-center bg-secondary-blue rounded-[15px]">
              <div className="text-white sm:text-2xl text-[16px] sm:font-bold sm:w-3/4 w-4/5">
                دیگه مشکلی توی نوبت دادن به مشتری هات نداری
              </div>
            </div>
            <div className="sm:w-xl w-full sm:h-[154px] h-[100px] flex items-center justify-center bg-secondary-blue rounded-[15px] sm:mt-0 mt-4">
              <div className="text-white sm:text-2xl text-[16px] sm:font-bold sm:w-3/4 w-4/5">
                میتونی اطلاعات مشتری هات رو داشته باشی ، مثل : اسم ، تاریخ آخرین
                مراجعه ، شماره تلفن
              </div>
            </div>
            <div className="sm:w-xl w-full sm:h-[154px] h-[100px] flex items-center justify-center bg-secondary-blue rounded-[15px] mt-5">
              <div className="text-white sm:text-2xl text-[16px] sm:font-bold sm:w-3/4 w-4/5">
                میتونی با مشتری هات تعامل هدفمند و با برنامه ای داشته باشی که
                باعث میشه سود بسیار بیشتری بدست بیاری
              </div>
            </div>
            <div className="sm:w-xl w-full sm:h-[154px] h-[100px] flex items-center justify-center bg-secondary-blue rounded-[15px] mt-5">
              <div className="text-white sm:text-2xl text-[16px] sm:font-bold sm:w-3/4 w-4/5">
                میتونی صفحه و سایت شخصی خودتو داشته باشی.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:mt-32 mt-20 sm:px-28 px-10 flex flex-wrap items-center sm:justify-between justify-center mb-10">
        <div className="sm:w-64 sm:h-40 w-full h-36 border-4 border-dark-blue rounded-[15px] flex justify-center items-center relative">
          <div className="bg-white sm:w-[86px] sm:h-[75px] w-[100px] h-[89px] absolute rounded-full flex justify-center  sm:-top-9 -top-11">
            <Image
              src={dollarCoin}
              alt="dollar coin"
              className="sm:w-[75px] w-[89px] h-[89px] sm:h-[75px]"
            />
          </div>
          <div className="text-center text-2xl font-bold px-8 mt-6">
            یک ماه استفاده رایگان
          </div>
        </div>
        <div className="sm:w-64 sm:h-40 w-full h-36 border-4 border-dark-blue rounded-[15px] flex justify-center items-center relative sm:mt-0 mt-20">
          <div className="bg-white sm:w-[86px] sm:h-[75px] w-[100px] h-[89px] absolute rounded-full flex justify-center sm:-top-9 -top-11">
            <Image
              src={supporting}
              alt="dollar coin"
              className="sm:w-[75px] w-[89px] h-[89px] sm:h-[75px]"
            />
          </div>
          <div className="text-center text-2xl font-bold px-8 mt-6">
            پشتیبانی 24 ساعته
          </div>
        </div>
        <div className="sm:w-64 sm:h-40 w-full h-36 border-4 border-dark-blue rounded-[15px] flex justify-center items-center relative sm:mt-0 mt-20">
          <div className="bg-white sm:w-[86px] sm:h-[75px] w-[100px] h-[89px] absolute rounded-full flex justify-center sm:-top-9 -top-11">
            <Image
              src={updating}
              alt="dollar coin"
              className="sm:w-[75px] w-[89px] h-[89px] sm:h-[75px]"
            />
          </div>
          <div className="text-center text-2xl font-bold px-8 mt-6">
            بروزرسانی های پیوسته
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
