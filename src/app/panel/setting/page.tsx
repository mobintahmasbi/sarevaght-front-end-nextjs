import maleBarber from "../../../../public/male-barber-default.jpg";
import PanelHeader from "@/app/components/panelHeader";
import Image from "next/image";

export default function Setting() {
  return (
    <>
      <PanelHeader />
      <div className="w-full flex justify-center mt-20 mb-10">
        <div className="sm:w-[600px] w-[340px] sm:h-[580px] h-[730px] main-border main-shadow relative rounded-[15px]">
          <div className="w-full flex justify-center">
            <div className="main-border p-1 rounded-[100%] absolute sm:-top-15 -top-12 bg-white">
              <Image
                src={maleBarber}
                alt="picture"
                className="sm:w-[120px] sm:h-[120px] w-[100px] h-[100px] rounded-[100%]"
              />
            </div>
          </div>
          <div className="w-full px-5 sm:mt-[80px] mt-[70px]">
            <button className="bg-main-blue text-white py-2 px-7 rounded-[15px] font-bold w-full">
              تغییر عکس پروفایل
            </button>
          </div>
          <hr className="w-full main-border my-4" />
          <div className="w-full flex sm:flex-nowrap flex-wrap sm:justify-between items-center px-5">
            <div className="flex flex-col sm:w-[45%] w-full">
              <label htmlFor="phone-number" className="text-[13px] mb-2 font-bold">
                شماره تلفن
              </label>
              <input
                id="phone-number"
                type="text"
                placeholder="09035083850"
                className="main-border rounded-[4px] py-2 px-4 text-center bg-milky font-bold"
              />
            </div>
            <div className="flex flex-col sm:w-[45%] w-[100%] sm:mt-0 mt-3">
              <label htmlFor="business-name" className="text-[13px] mb-2 font-bold">
                نام کسب و کار
              </label>
              <input
                id="business-name"
                type="text"
                placeholder="شازده کوچولو"
                className="main-border rounded-[4px] py-2 px-4 text-center bg-milky font-bold"
              />
            </div>
          </div>
          <div className="w-full flex sm:flex-nowrap flex-wrap sm:justify-between items-center px-5 mt-5">
            <div className="flex flex-col sm:w-[45%] w-[100%]">
              <label htmlFor="phone-number" className="text-[13px] mb-2 font-bold">
                 نام صاحب کسب و کار
              </label>
              <input
                id="phone-number"
                type="text"
                placeholder="مهدی رجب زاده"
                className="main-border rounded-[4px] py-2 px-4 text-center bg-milky font-bold"
              />
            </div>
            <div className="flex flex-col sm:w-[45%] w-[100%] sm:mt-0 mt-3">
              <label htmlFor="business-name" className="text-[13px] mb-2 font-bold">
                آدرس اینترنی کسب و کار   
              </label>
              <input
                id="business-name"
                type="text"
                placeholder="shazde-kocholoo"
                className="main-border rounded-[4px] py-2 px-4 text-center bg-milky font-bold"
              />
            </div>
          </div>
          <div className="w-full flex items-center px-5 sm:mt-5 mt-3">
            <div className="flex flex-col w-full">
              <label htmlFor="business-name" className="text-[13px] mb-2 font-bold">
                آدرس کسب و کار   
              </label>
              <textarea
                id="business-name"
                placeholder="خراسان رضوی - مشهد - الهیه - بین الهیه 32 و 34 انتهای ذوقی 3 سمت چپ آرایشگاه شازده کوچولو"
                className="main-border rounded-[4px] pt-4  px-4 text-center bg-milky font-bold sm:h-[85px] h-[100px]"
              />
            </div>
          </div>
          <div className="w-full px-5">
            <button className="w-full bg-light-green dark-green py-2 rounded-[15px] mt-4 font-bold">
                ذخیره اطلاعات
            </button>
          </div>
          <div className="w-full px-5">
            <button className="w-full bg-main-blue text-white py-2 rounded-[15px] mt-4 font-bold">
                 دیدن صفحه شخصی
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
