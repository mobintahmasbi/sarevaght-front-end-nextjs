"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import PanelHeader from "@/app/components/panelHeader";
import { checkActivation } from "@/app/utils/checkActivation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DayliReports() {
  const router = useRouter()

  useEffect(() => {
    checkActivation('dayli-report', router)
  }, [])
  return (
    <>
      <PanelHeader />
      <div className="w-full sm:px-5 px-2 my-5">
        <div className="sm:hidden w-full main-shadow secondary-border rounded-[15px] py-2 mb-7">
          <div className="w-full flex items-center justify-between px-5 py-2">
            <div className="font-bold">
              مشتری بعدی :
            </div>
            <div className="font-bold">
              مبین طهماسبی اصل
            </div>
          </div>
          <div className="w-full flex items-center justify-between px-5 py-2">
            <div className="font-bold">
              بازه زمانی :
            </div>
            <div className="font-bold">
              9:30 - 9
            </div>
          </div>
          <div className="w-full flex items-center justify-between px-5 py-2">
            <div className="font-bold">
                شماره تلفن :
            </div>
            <div className="font-bold">
              09035083850
            </div>
          </div>
          <div className="w-full flex items-center justify-between px-5 py-2">
            <div className="font-bold">
              شرح :
            </div>
            <div className="font-bold">
              اصلاح سر و صورت
            </div>
          </div>
          <div className="w-full flex items-center justify-between px-5 py-2">
            <div className="font-bold">
              وضعیت :
            </div>
            <div className="font-bold">
              مشتری جدید
            </div>
          </div>
          <div className="w-full px-4 py-2">
              <button className="w-full dark-green bg-light-green font-bold rounded-[15px] py-2">
                تماس با مشتری
              </button>
          </div>
          <div className="w-full px-4 py-1">
              <button className="w-full main-red bg-light-red font-bold rounded-[15px] py-2">
                لغو کردن
              </button>
          </div>
        </div>
        <div className="w-full main-shadow secondary-border rounded-[15px] pb-5">
          <div className="w-full p-4">
            <div className="ms-2 mb-2 font-bold">گزارش روزانه</div>
            <hr className="secondary-border" />
          </div>
          <div className="w-full sm:px-5 px-2">
            <table className="w-full border-collapse sm:table-fixed table-auto">
              <thead>
                <tr>
                  <th>نام مشتری</th>
                  <th className="sm:table-cell hidden">شماره تلفن</th>
                  <th className="sm:table-cell hidden">وضعیت</th>
                  <th className="sm:table-cell hidden">شرح</th>
                  <th>بازه زمانی</th>
                  <th>لغو کردن</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>مبین طهماسبی اصل</td>
                  <td className="sm:table-cell hidden">09035083850</td>
                  <td className="sm:table-cell hidden">مشتری جدید</td>
                  <td className="sm:table-cell hidden">اصلاح سر و صورت</td>
                  <td>9:30 - 9</td>
                  <td>
                    <button className="main-red bg-light-red px-4 py-2 rounded-[4px] cursor-pointer">
                      لغو کردن
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
