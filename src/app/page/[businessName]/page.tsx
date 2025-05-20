/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import { Usable, use, useEffect, useState } from "react";
import banner from "../../../../public/banner-back.jpg";
import maleBarber from "../../../../public/male-barber-default.jpg";
import { getBusinessInfo } from "@/app/utils/page.functionality";

export default function PersonalPage({
  params,
}: {
  params: Usable<{ businessName: string }>;
}) {
  const { businessName } = use<{ businessName: string }>(params);
  const [businessInfo, setBusinessInfo] = useState({
    businessNameS: '',
    bstatus: '',
    phoneNumber: '',
    ownerFullName: '',
    address: '',
    backGroundColor: 'main-gray'
  })

  useEffect(() => {
    getBusinessInfo(businessName).then((Info) => {
      setBusinessInfo({
        businessNameS: Info.businessName,
        phoneNumber: Info.phoneNumber,
        bstatus: Info.bstatus,
        ownerFullName: Info.ownerFullName,
        address: Info.address,
        backGroundColor: Info.backGroundColor
      }) 
    })
  }, [])

  return (
    <>
      <header className="w-full text-center text-white bg-main-blue font-bold py-3 text-[23px]">
        سروقت
      </header>
      <div className="w-full flex justify-center">
        <Image
          src={banner}
          alt="banner"
          className="w-full h-[500px] sm:block hidden"
        />
        <Image
          src={maleBarber}
          alt="banner"
          className="w-full h-[400px] block sm:hidden"
        />
      </div>
      <div className="w-full sm:px-60 px-4 mt-10 mb-10">
        <div className="w-full main-border rounded-[15px] main-shadow px-5 py-5">
          <div className="w-full font-bold text-[18px] mb-2">
            آرایشگاه شازده کوچولو
          </div>
          <hr className="main-border" />
          <div className="w-full flex items-center sm:justify-start justify-around font-bold mt-3 sm:ms-2">
            <div className="me-2">آدرس:</div>
            <div>
              {businessInfo.address}
            </div>
          </div>
          <div className="w-full flex items-center justify-start font-bold mt-3 ms-2">
            <div className="me-2">نام صاحب کسب و کار :</div>
            <div>
              {businessInfo.ownerFullName}
            </div>
          </div>
          <div className="w-full flex items-center justify-start font-bold mt-3 ms-2">
            <div className="me-2">شماره تلفن :</div>
            <div>
              {businessInfo.phoneNumber}
            </div>
          </div>
          <div className="w-full flex items-center justify-start font-bold mt-3 ms-2">
            <div className="me-2">وضعیت کسب و کار :</div>
            <div className={businessInfo.backGroundColor}>
              {businessInfo.bstatus}
            </div>
          </div>
          <div className="w-full px-4 mt-4">
            <button className="w-full bg-light-green dark-green main-shadow py-1 font-bold rounded-[15px] cursor-pointer">
              دریافت نوبت
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
