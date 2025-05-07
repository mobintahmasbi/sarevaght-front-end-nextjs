import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { dayNames } from "./dayName";

export async function checkActivation(
  pageName: string,
  router: AppRouterInstance
) {
  const returningObj = {
    address: false,
    workSchedule: false,
  };
  const token = localStorage.getItem("token");
  if (token == null) {
    router.push("/");
    return null;
  }
  const data = await getAdditionalData(token, router);
  if (data == null) {
    return null;
  }
  const additionalData = data;
  const { workSchedule } = additionalData;
  const enDayNames = Object.keys(dayNames);
  for (let i = 0; i < enDayNames.length; i++) {
    const dayDetail = workSchedule[enDayNames[i]];
    if (dayDetail.morning == "" || dayDetail.afternoon == "") {
      if (pageName !== "not-active") {
        router.push("/panel/not-active");
        return false;
      }
      returningObj.workSchedule = true;
      break;
    }
  }
  const { address } = additionalData;
  if (address.city == null || address.state == null || address.detail == null) {
    if (pageName !== "not-active") {
      router.push("/panel/not-active");
      return false;
    }
    returningObj.address = true;
  }
  if(pageName === 'not-active' && !returningObj.address && !returningObj.workSchedule) {
    router.push('/panel/dayli-reports')
  }
  return returningObj
}

export async function getAdditionalData(token: string, router: AppRouterInstance) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/business/additional-data`,
      {
        token,
      }
    );
    const { data } = response;
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (axios.isAxiosError(error)) {
        if (error.status == 403) {
          alert(
            "شما مجوز دسترسی به پنل کاربری را ندارید. لطفا دوباره وارد شوید."
          );
          router.push('/phone-entry')
          return null;
        }
        if (error.status == 500) {
          alert("مشکلی غیر منتظره اتفاق افتاده لطفا دوباره تلاش کنید");
          return null;
        }
      } else {
        alert("خطای غیر منتظره");
      }
    }
    console.log(error);
    return null;
  }
}
