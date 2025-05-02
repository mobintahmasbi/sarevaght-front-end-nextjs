import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";

export interface IStateName {
  province: string;
  _id: string;
}

export async function getAllStateNames(
  router: AppRouterInstance,
  setStateList: Dispatch<SetStateAction<IStateName[]>>
) {
  const token = localStorage.getItem("token");
  if (token == null) {
    alert("شما مجوز دسترسی به این پنل را ندارید");
    router.push("/");
    return null;
  }
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/iran-state-info/all-state`,
      {
        token,
      }
    );
    const { data } = response;
    setStateList(data);
  } catch (error) {
    console.log(error);
  }
}

export async function getAllCityNames(
  router: AppRouterInstance,
  setCityList: Dispatch<SetStateAction<string[]>>,
  addressState: { state: string; city: string; detail: string }
) {
  const token = localStorage.getItem("token");
  if (token == null) {
    alert("شما مجوز دسترسی به این پنل را ندارید");
    router.push("/");
    return null;
  }
  try {
    if (addressState.state != "") {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/iran-state-info/all-cities`,
        {
          token,
          stateName: addressState.state
        }
      );
      const { data } = response;
      setCityList(data.citiesName);
    }
    return null
  } catch (error) {
    console.log(error);
  }
}

export async function sendAddressInfo(addressState: { state: string; city: string; detail: string }, router: AppRouterInstance) {
  const { state, city, detail } = addressState
  const token = localStorage.getItem('token')
  if(token == null) {
    alert("شما مجوز دسترسی به این پنل را ندارید");
    router.push('/')
    return null
  }
  if(state == "" || city == "" || detail == "") {
    alert("لطفا تمام اطلاعات مورد نیاز را وارد نمایید")
    return null
  }
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/business/set-address`, {
      token,
      state,
      city,
      detail
    })
    const { data } = response
    if(data.status) {
      alert('آدرس با موفقیت تنظیم شد')
      return true
    }
  } catch (error) {
    if(axios.isAxiosError(error)) {
      if(error.status === 403) {
        alert("شما مجوز دسترسی به این پنل را ندارید");
      }
      if(error.status === 500) {
        alert("مشکلی غیر منتظره پیش آمده لطفا دوباره تلاش کنید")
      }
      return null
    }
    console.log(error);
    return null
  }
}