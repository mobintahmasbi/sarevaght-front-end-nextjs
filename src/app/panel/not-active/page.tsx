import Image from "next/image";
import Link from "next/link";
import PanelHeader from "../../components/panelHeader";
import setAddress from "../../../../public/set-address.jpg";
import setTiming from "../../../../public/set-timing.jpg";

export default function NotActive() {
  return (
    <>
      <PanelHeader />
      <div className="w-full flex flex-wrap justify-center items-center sm:mb-0 mb-5">
        <div className="sm:w-[400px] sm:h-[490px] flex flex-wrap items-center justify-center main-border rounded-[15px] p-4 mt-6 mx-4">
          <div className="text-center w-full font-bold mt-2">
            هنوز آدرس کسب و کار شما مشخص نشده است
          </div>
          <Image src={setAddress} alt="set-address" className="" />
          <div className="w-full flex items-center justify-center">
            <button className="w-1/3 bg-main-blue text-white rounded-[15px] p-2 mt-2">
              تنظیم آدرس
            </button>
          </div>
        </div>
        <div className="sm:w-[400px] sm:h-[490px] flex flex-wrap items-center justify-center main-border rounded-[15px] p-4 mt-6 mx-4">
          <div className="text-center w-full font-bold mt-2">
            هنوز شیفت های کاری شما مشخص نشده است
          </div>
          <Image src={setTiming} alt="set-timing" className="" />
          <div className="w-full flex items-center justify-center">
            <Link
              className="sm:w-1/2 w-2/3 bg-main-blue text-white rounded-[15px] p-2 mt-2 text-center"
              href={"/panel/set-timing"}
            >
              تنظیم شیفت های کاری
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
