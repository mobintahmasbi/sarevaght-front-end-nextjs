/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import Link from "next/link";
import PanelHeader from "../../components/panelHeader";
import setAddress from "../../../../public/set-address.jpg";
import setTiming from "../../../../public/set-timing.jpg";
import AdjustAddress from "@/app/components/adjustAddress";
import { useState, useEffect } from "react";
import { checkActivation } from "@/app/utils/checkActivation";
import { useRouter } from "next/navigation";

export default function NotActive() {
  const [showAdjustAddressWindow, setShowAdjustAddressWindow] = useState(false);
  const [decider, setDecider] = useState({
    address: false,
    workSchedule: false,
  });
  const router = useRouter();

  function hideAdjustAddressWindow() {
    setShowAdjustAddressWindow(false);
  }

  useEffect(() => {
    if (!showAdjustAddressWindow) {
      checkActivation("not-active", router).then((v) => {
        if (v != null && v) {
          setDecider({
            address: v.address,
            workSchedule: v.workSchedule,
          });
        }
      });
    }
  }, [showAdjustAddressWindow]);

  return (
    <>
      {showAdjustAddressWindow && (
        <>
          <AdjustAddress hideWindow={hideAdjustAddressWindow} />
        </>
      )}
      <PanelHeader />
      <div className="w-full flex flex-wrap justify-center items-center sm:mb-0 mb-5">
        {decider.address ? (
          <>
            <div className="sm:w-[400px] sm:h-[490px] flex flex-wrap items-center justify-center main-border rounded-[15px] p-4 mt-6 mx-4">
              <div className="text-center w-full font-bold mt-2">
                هنوز آدرس کسب و کار شما مشخص نشده است
              </div>
              <Image src={setAddress} alt="set-address" className="" />
              <div className="w-full flex items-center justify-center">
                <button
                  className="w-1/3 bg-main-blue text-white rounded-[15px] p-2 mt-2 cursor-pointer"
                  onClick={() => setShowAdjustAddressWindow(true)}
                >
                  تنظیم آدرس
                </button>
              </div>
            </div>
          </>
        ) : null}
        {decider.workSchedule ? (
          <>
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
          </>
        ) : null}
      </div>
    </>
  );
}
