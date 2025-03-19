export default function Register() {
  return (
    <>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <div className="sm:w-sm w-4/5 main-border rounded-[15px] main-shadow">
          <div className="w-full bg-main-blue text-center text-white py-3 rounded-t-[15px] font-bold sm:text-[18px]">
            ثبت نام
          </div>
          <div className="w-full flex flex-wrap justify-center px-5 mt-4">
            <div className="w-full text-start">
              <label className="block text-[13px] text-main-blue font-bold mt-4 mb-2 ms-2">
                نام کسب و کار
              </label>
              <input
                type="text"
                className="w-full rounded-[15px] px-4 sm:h-[60px] h-[52px] secondary-border bg-milky text-[15px] text-center focus:outline-none font-bold dark-white phone-entry"
                placeholder="نام کسب و کار خود را وارد نمایید"
              />
            </div>
            <div className="w-full text-start">
              <label className="block text-[13px] text-main-blue font-bold mt-4 mb-2 ms-2">
                نام کامل صاحب کسب و کار
              </label>
              <input
                lang="en"
                dir="ltr"
                type="text"
                className="w-full rounded-[15px] px-4 sm:h-[60px] h-[52px] secondary-border bg-milky text-[15px] text-center focus:outline-none font-bold dark-white phone-entry"
                placeholder="نام و نام خانوادگی خود را وارد نمایید"
              />
            </div>
            <div className="w-full text-start">
              <label className="block text-[13px] text-main-blue font-bold mt-4 mb-2 ms-2">
                نوع کسب و کار
              </label>
              <input
                lang="en"
                dir="ltr"
                type="text"
                className="w-full rounded-[15px] px-4 sm:h-[60px] h-[52px] secondary-border bg-milky text-[15px] text-center focus:outline-none font-bold dark-white phone-entry"
                placeholder="نوع کسب و کار خود را وارد نمایید"
              />
            </div>
            <div className="w-full text-start">
              <label className="block text-[13px] text-main-blue font-bold mt-4 mb-2 ms-2">
                شناسه انگلیسی کسب و کار
              </label>
              <input
                lang="en"
                dir="ltr"
                type="text"
                className="w-full rounded-[15px] px-4 sm:h-[60px] h-[52px] secondary-border bg-milky text-[15px] text-center focus:outline-none font-bold dark-white phone-entry mb-2"
                placeholder="شناسه انگلیسی کسب و کار خود را وارد نمایید"
              />
              <p className="text-[12px]">
                شناسه انگلیسی کسب و کار برای ایجاد صفحه شخصی کسب و کار شما در
                سروقت استفاده می شود.
              </p>
              <p className="text-[12px]">
                    مثلا برای شناسه انگلیسی کسب و کار glayol آدرس شما به شکل زیر مشخص میشود:
              </p>
              <p className="text-[12px]">https://sarevaght.com/page/glayol</p>
            </div>
          </div>
          <div className="w-full flex justify-center mt-9 mb-4">
            <button className="bg-main-orange text-white text-[16px] font-bold rounded-[15px] px-5 py-3 cursor-pointer hover:opacity-80">
              ثبت نام
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
