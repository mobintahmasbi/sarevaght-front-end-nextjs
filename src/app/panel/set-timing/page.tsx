/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import PanelHeader from "@/app/components/panelHeader";
import SetTimingBox from "@/app/components/set-timing-box";
import { getAdditionalData } from "@/app/utils/checkActivation";
import { useEffect, useState } from "react";
import {dayNames, EnDay} from "@/app/utils/dayName";
import type { WorkSchedule } from "@/app/utils/dayType";
import sendWorkScheduleData from "@/app/utils/setTiming.functionality";
import { useRouter } from "next/navigation";

export default function SetTiming() {
  const [timingList, setTimingList] = useState<Partial<WorkSchedule>>({});
  const router = useRouter()


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      getAdditionalData(token, router).then((value) => {
        if (value?.workSchedule) {
          // Should already match WorkSchedule
          setTimingList(value.workSchedule);
        }
      });
    }
  }, []);

  const enDayNames = Object.keys(dayNames) as EnDay[];
  const timingListObj = enDayNames.map((day) => {
    const sched = timingList[day];
    const morning   = sched?.morning;
    const afternoon = sched?.afternoon;
    if(morning !== undefined && afternoon !== undefined) {
      return (
        <SetTimingBox
          key={day}
          dayName={dayNames[day]}
          morning={morning}
          afternoon={afternoon}
          enDayName={day}
          changer={changeWorkScheduleData}
        />
      );
    }
  });

  function changeWorkScheduleData(enDay: EnDay, shiftType: "afternoon"| "morning", wokingTime: string) {
    const state = timingList
    
    if(shiftType === 'morning') {
      state[enDay] = {
        morning: wokingTime,
        afternoon: state[enDay]?.afternoon as string
      }
    }
    if(shiftType === 'afternoon') {
      state[enDay] = {
        morning: state[enDay]?.morning as string,
        afternoon: wokingTime
      }
    }
    setTimingList({ ...state })
  }
  return (
    <>
      <PanelHeader />
      <div className="w-full px-5 my-5">
        <div className="w-full main-shadow secondary-border rounded-[15px] pb-5">
          <div className="w-full p-4">
            <div className="ms-2 mb-2">شیفت های کاری</div>
            <hr className="secondary-border" />
          </div>
          <div className="w-full flex flex-wrap gap-y-5 items-center justify-between px-4">
            {timingListObj}
          </div>
          <div className="w-full px-4 flex items-center justify-center">
            <button className="w-full rounded-[15px] py-2 mt-6 cursor-pointer font-bold dark-green bg-light-green main-shadow" onClick={() => sendWorkScheduleData(timingList)}>
              ثبت تغییرات
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
