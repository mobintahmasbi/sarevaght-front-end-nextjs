/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import AdjustAddress from "@/app/components/adjustAddress";
import maleBarber from "../../../../public/male-barber-default.jpg";
import PanelHeader from "@/app/components/panelHeader";
import {
  getUserInfo,
  IUserInfo,
  setAddressInfo,
  setSetting,
} from "@/app/utils/setting.functionality";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Setting() {
  const [userInfoState, setUserInfoState] = useState<IUserInfo>({
    phoneNumber: "",
    businessName: "",
    ownerName: "",
    businessURL: "",
    address: {
      state: "",
      city: "",
      detail: "",
    },
  });
  const [showAddressChanger, setShowAddressChanger] = useState(false)
  const router = useRouter();

  function hideAddressChanger() {
    setShowAddressChanger(false)
  }

  useEffect(() => {
    getUserInfo(setUserInfoState, router);
  }, []);

  useEffect(() => {
    if(!showAddressChanger) {
      setAddressInfo(userInfoState, setUserInfoState, router)
    }
  }, [showAddressChanger])
  return (
    <>
      {
        showAddressChanger ? <AdjustAddress hideWindow={hideAddressChanger} /> : null
      }
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
            <button className="bg-main-blue text-white py-2 px-7 rounded-[15px] font-bold w-full main-shadow cursor-pointer">
              تغییر عکس پروفایل
            </button>
          </div>
          <hr className="w-full main-border my-4" />
          <div className="w-full flex sm:flex-nowrap flex-wrap sm:justify-between items-center px-5">
            <div className="flex flex-col sm:w-[45%] w-full">
              <label
                htmlFor="phone-number"
                className="text-[13px] mb-2 font-bold"
              >
                شماره تلفن
              </label>
              <input
                id="phone-number"
                type="text"
                placeholder="شماره تلفن"
                className="main-border rounded-[4px] py-2 px-4 text-center bg-milky font-bold"
                value={userInfoState.phoneNumber}
                readOnly
              />
            </div>
            <div className="flex flex-col sm:w-[45%] w-[100%] sm:mt-0 mt-3">
              <label
                htmlFor="business-name"
                className="text-[13px] mb-2 font-bold"
              >
                نام کسب و کار
              </label>
              <input
                id="business-name"
                type="text"
                placeholder="نام کسب و کار"
                className="main-border rounded-[4px] py-2 px-4 text-center bg-milky font-bold"
                value={userInfoState.businessName}
                onChange={(e) => {
                  setUserInfoState((prevState) => {
                    return {
                      ...prevState,
                      businessName: e.target.value,
                    };
                  });
                }}
              />
            </div>
          </div>
          <div className="w-full flex sm:flex-nowrap flex-wrap sm:justify-between items-center px-5 mt-5">
            <div className="flex flex-col sm:w-[45%] w-[100%]">
              <label
                htmlFor="phone-number"
                className="text-[13px] mb-2 font-bold"
              >
                نام صاحب کسب و کار
              </label>
              <input
                id="phone-number"
                type="text"
                placeholder="نام صاحب کسب و کار"
                className="main-border rounded-[4px] py-2 px-4 text-center bg-milky font-bold"
                value={userInfoState.ownerName}
                onChange={(e) => {
                  setUserInfoState((prevState) => {
                    return {
                      ...prevState,
                      ownerName: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <div className="flex flex-col sm:w-[45%] w-[100%] sm:mt-0 mt-3">
              <label
                htmlFor="business-name"
                className="text-[13px] mb-2 font-bold"
              >
                آدرس اینترنی کسب و کار
              </label>
              <input
                id="business-name"
                type="text"
                placeholder="آدرس اینترنتی کسب و کار"
                className="main-border rounded-[4px] py-2 px-4 text-center bg-milky font-bold"
                value={userInfoState.businessURL}
                onChange={(e) => {
                  setUserInfoState((prevState) => {
                    return {
                      ...prevState,
                      businessURL: e.target.value,
                    };
                  });
                }}
              />
            </div>
          </div>
          <div className="w-full flex items-center px-5 sm:mt-5 mt-3">
            <div className="flex flex-col w-full">
              <label
                htmlFor="business-name"
                className="text-[13px] mb-2 font-bold"
              >
                آدرس کسب و کار
              </label>
              <textarea
                id="business-name"
                placeholder="آدرس کسب و کار"
                className="main-border rounded-[4px] pt-4  px-4 text-center bg-milky font-bold sm:h-[85px] h-[100px]"
                value={`${userInfoState.address.state} - ${userInfoState.address.city} - ${userInfoState.address.detail}`}
                onClick={() => setShowAddressChanger(true)}
                readOnly
              />
            </div>
          </div>
          <div className="w-full px-5">
            <button
              className="w-full bg-light-green dark-green py-2 rounded-[15px] mt-4 font-bold main-shadow cursor-pointer"
              onClick={() => {
                setSetting(userInfoState, router);
              }}
            >
              ذخیره اطلاعات
            </button>
          </div>
          <div className="w-full px-5">
            <button className="w-full bg-main-blue text-white py-2 rounded-[15px] mt-4 font-bold main-shadow cursor-pointer" onClick={() => {
              router.push(`/page/${userInfoState.businessURL}`)
            }}>
              دیدن صفحه شخصی
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
