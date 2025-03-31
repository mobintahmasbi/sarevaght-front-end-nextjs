import PanelHeader from "@/app/components/panelHeader";
import Image from "next/image";
import check from "../../../../public/check.png";

export default function Plans() {
  return (
    <>
      <PanelHeader />
      <section className="w-full px-5 my-5">
        <div className="w-full main-shadow secondary-border rounded-[15px] pb-5">
          <article className="w-full p-4">
            <div className="ms-2 mb-2 font-bold">پلن های موجود</div>
            <hr className="secondary-border" />
          </article>
          <article className="w-full flex items-center justify-center flex-wrap px-4">
            <div className="sm:w-[32%] w-full main-shadow rounded-[15px] sm:me-4 sm:mb-0 mb-4">
              <div className="w-full py-4 bg-main-blue text-white text-center font-bold rounded-t-[15px]">
                پلن یک ماهه رایگان
              </div>
              <div className="w-full p-4">
                <div className="flex items-center mt-2">
                  <Image
                    src={check}
                    alt="check"
                    className="w-[25px] h-[25px]"
                  />
                  <div className="font-bold ms-2">مدیریت نوبت ها</div>
                </div>
                <div className="flex items-center mt-2">
                  <Image
                    src={check}
                    alt="check"
                    className="w-[25px] h-[25px]"
                  />
                  <div className="font-bold ms-2">
                    صفحه ی اختصاصی برای کسب و کار شما
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <Image
                    src={check}
                    alt="check"
                    className="w-[25px] h-[25px]"
                  />
                  <div className="font-bold ms-2">
                    امکان ارسال پیامک به مشتریان
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <Image
                    src={check}
                    alt="check"
                    className="w-[25px] h-[25px]"
                  />
                  <div className="font-bold ms-2">دسترسی به اطلاعات مشتری</div>
                </div>
                <div className="flex items-center mt-2">
                  <Image
                    src={check}
                    alt="check"
                    className="w-[25px] h-[25px]"
                  />
                  <div className="font-bold ms-2">
                    سامانه مخصوص مدیریت مشتریان
                  </div>
                </div>
              </div>
              <div className="w-full px-4 pb-4">
                <button className="w-full py-2 bg-main-blue text-white font-bold rounded-[15px] cursor-pointer">
                    شروع پلن یک ماهه رایگان
                </button>
              </div>
            </div>
            <div className="sm:w-[32%] w-full main-shadow rounded-[15px]">
              <div className="w-full py-4 bg-main-blue text-white text-center font-bold rounded-t-[15px]">
                پلن پایه
              </div>
              <div className="w-full p-4">
                <div className="flex items-center mt-2">
                  <Image
                    src={check}
                    alt="check"
                    className="w-[25px] h-[25px]"
                  />
                  <div className="font-bold ms-2">مدیریت نوبت ها</div>
                </div>
                <div className="flex items-center mt-2">
                  <Image
                    src={check}
                    alt="check"
                    className="w-[25px] h-[25px]"
                  />
                  <div className="font-bold ms-2">
                    صفحه ی اختصاصی برای کسب و کار شما
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <Image
                    src={check}
                    alt="check"
                    className="w-[25px] h-[25px]"
                  />
                  <div className="font-bold ms-2">
                    امکان ارسال پیامک به مشتریان
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <Image
                    src={check}
                    alt="check"
                    className="w-[25px] h-[25px]"
                  />
                  <div className="font-bold ms-2">دسترسی به اطلاعات مشتری</div>
                </div>
                <div className="flex items-center mt-2">
                  <Image
                    src={check}
                    alt="check"
                    className="w-[25px] h-[25px]"
                  />
                  <div className="font-bold ms-2">
                    سامانه مخصوص مدیریت مشتریان
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <label htmlFor="plan-duration" className="font-bold">
                    مدت زمان پلن:
                  </label>
                  <select
                    id="plan-duration"
                    className="ms-2 px-2 py-1 main-border rounded-[4px] text-[15px] font-bold dark-white focus:outline-none text-center"
                    style={{ appearance: 'none'}}
                  >
                    <option value="">
                        انتخاب کنید
                    </option>
                    <option value="one-month">یک ماه</option>
                    <option value="two-months">شش ماه</option>
                    <option value="three-months">یک سال</option>
                  </select>
                </div>
                <div className="font-bold mt-4">
                    <span>
                        مبلغ پرداختی :
                    </span>
                    <span  className="ms-2 main-red sm:text-[15px] text-[13px]">
                        لطفا مدت زمان پلن را انتخاب کنید
                    </span>
                </div>
              </div>
              <div className="w-full px-4 pb-4">
                <button className="w-full py-2 bg-main-blue text-white font-bold rounded-[15px] cursor-pointer">
                    پرداخت 
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
