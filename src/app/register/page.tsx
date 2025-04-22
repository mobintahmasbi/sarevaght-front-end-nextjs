"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BusinessTypeDictionary from "../utils/businessType.dictionary";
import { sendRegisterInfo } from "../utils/register.functionality";

export default function Register() {
  const [showPickerWindow, setShowPickerWindow] = useState(false);
  const [registerState, setRegisterState] = useState({
    businessName: "",
    ownerFullName: "",
    businessType: "",
    businessURL: "",
  });
  const router = useRouter()
  return (
    <>
      {showPickerWindow && (
        <div
          className="absolute top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.35)",
          }}
        >
          <div className="sm:w-sm w-4/5 main-border rounded-[15px] bg-white">
            <div className="w-full bg-main-blue text-center text-white py-3 rounded-t-[15px] font-bold sm:text-[18px]">
              انتخاب نوع کسب و کار
            </div>
            <div className="w-full px-6 my-5">
              <div className="w-full main-border rounded-[15px] overflow-hidden">
                <div
                  className={`mb-2 ps-6 py-2 cursor-pointer ${
                    registerState.businessType ===
                    BusinessTypeDictionary.maleHairArtist
                      ? "bg-gray-300"
                      : null
                  }`}
                  onClick={() => {
                    setRegisterState((v) => {
                      return {
                        ...v,
                        businessType: BusinessTypeDictionary.maleHairArtist,
                      };
                    });
                  }}
                >
                  آریشگر آقا
                </div>
                <div
                  className={`mb-2 ps-6 py-2 cursor-pointer ${
                    registerState.businessType ===
                    BusinessTypeDictionary.femaleHairArtist
                      ? "bg-gray-300"
                      : null
                  }`}
                  onClick={() => {
                    setRegisterState((v) => {
                      return {
                        ...v,
                        businessType: BusinessTypeDictionary.femaleHairArtist,
                      };
                    });
                  }}
                >
                  آریشگر خانم
                </div>
                <div
                  className={`mb-2 ps-6 py-2 cursor-pointer ${
                    registerState.businessType ===
                    BusinessTypeDictionary.nailArtist
                      ? "bg-gray-300"
                      : null
                  }`}
                  onClick={() => {
                    setRegisterState((v) => {
                      return {
                        ...v,
                        businessType: BusinessTypeDictionary.nailArtist,
                      };
                    });
                  }}
                >
                  ناخن کار
                </div>
                <div
                  className={`mb-2 ps-6 py-2 cursor-pointer ${
                    registerState.businessType ===
                    BusinessTypeDictionary.kidHairArtist
                      ? "bg-gray-300"
                      : null
                  }`}
                  onClick={() => {
                    setRegisterState((v) => {
                      return {
                        ...v,
                        businessType: BusinessTypeDictionary.kidHairArtist,
                      };
                    });
                  }}
                >
                  آرایشگر کودک
                </div>
                <div
                  className={`mb-2 ps-6 py-2 cursor-pointer ${
                    registerState.businessType ===
                    BusinessTypeDictionary.eyelashArtist
                      ? "bg-gray-300"
                      : null
                  }`}
                  onClick={() => {
                    setRegisterState((v) => {
                      return {
                        ...v,
                        businessType: BusinessTypeDictionary.eyelashArtist,
                      };
                    });
                  }}
                >
                  مژه کار
                </div>
                <div
                  className={`mb-2 ps-6 py-2 cursor-pointer ${
                    registerState.businessType ===
                    BusinessTypeDictionary.tatooArtist
                      ? "bg-gray-300"
                      : null
                  }`}
                  onClick={() => {
                    setRegisterState((v) => {
                      return {
                        ...v,
                        businessType: BusinessTypeDictionary.tatooArtist,
                      };
                    });
                  }}
                >
                  تتو آرتیست
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center mb-5">
              <button
                className="bg-main-orange text-white text-[16px] font-bold rounded-[15px] px-5 py-3 cursor-pointer hover:opacity-80"
                onClick={() => setShowPickerWindow(false)}
              >
                انتخاب
              </button>
            </div>
          </div>
        </div>
      )}
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
                value={registerState.businessName}
                onChange={(e) =>
                  setRegisterState((v) => {
                    return {
                      ...v,
                      businessName: e.target.value,
                    };
                  })
                }
                className="w-full rounded-[15px] px-4 sm:h-[60px] h-[52px] secondary-border bg-milky text-[15px] text-center focus:outline-none font-bold dark-white phone-entry"
                placeholder="نام کسب و کار خود را وارد نمایید"
              />
            </div>
            <div className="w-full text-start">
              <label className="block text-[13px] text-main-blue font-bold mt-4 mb-2 ms-2">
                نام کامل صاحب کسب و کار
              </label>
              <input
                type="text"
                value={registerState.ownerFullName}
                onChange={(e) =>
                  setRegisterState((v) => {
                    return {
                      ...v,
                      ownerFullName: e.target.value,
                    };
                  })
                }
                className="w-full rounded-[15px] px-4 sm:h-[60px] h-[52px] secondary-border bg-milky text-[15px] text-center focus:outline-none font-bold dark-white phone-entry"
                placeholder="نام و نام خانوادگی خود را وارد نمایید"
              />
            </div>
            <div className="w-full text-start">
              <label className="block text-[13px] text-main-blue font-bold mt-4 mb-2 ms-2">
                نوع کسب و کار
              </label>
              <input
                type="text"
                value={registerState.businessType}
                onClick={() => setShowPickerWindow(true)}
                readOnly
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
                value={registerState.businessURL}
                onChange={(e) =>
                  setRegisterState((v) => {
                    return {
                      ...v,
                      businessURL: e.target.value,
                    };
                  })
                }
                className="w-full rounded-[15px] px-4 sm:h-[60px] h-[52px] secondary-border bg-milky text-[15px] text-center focus:outline-none font-bold dark-white phone-entry mb-2"
                placeholder="شناسه انگلیسی کسب و کار خود را وارد نمایید"
              />
              <p className="text-[12px]">
                شناسه انگلیسی کسب و کار برای ایجاد صفحه شخصی کسب و کار شما در
                سروقت استفاده می شود.
              </p>
              <p className="text-[12px]">
                مثلا برای شناسه انگلیسی کسب و کار glayol آدرس شما به شکل زیر
                مشخص میشود:
              </p>
              <p className="text-[12px]">https://sarevaght.com/page/glayol</p>
            </div>
          </div>
          <div className="w-full flex justify-center mt-9 mb-4">
            <button className="bg-main-orange text-white text-[16px] font-bold rounded-[15px] px-5 py-3 cursor-pointer hover:opacity-80" onClick={() => sendRegisterInfo(registerState, router)}>
              ثبت نام
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
