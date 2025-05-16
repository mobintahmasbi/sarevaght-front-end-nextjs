import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";

interface IAddress {
  state: string;
  city: string;
  detail: string;
}

export interface IUserInfo {
  phoneNumber: string;
  businessName: string;
  ownerName: string;
  businessURL: string;
  address: IAddress;
}

export async function getUserInfo(
  setUserInfo: Dispatch<SetStateAction<IUserInfo>>,
  router: AppRouterInstance
) {
  const token = localStorage.getItem("token");
  if (token === null) {
    alert("شما مجوز دسترسی به پنل را ندارید.");
    router.push("/");
    return null;
  }
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/business/get-info`,
      { token }
    );
    const { data } = response;
    if (data.status) {
      const { business } = data;
      setUserInfo({
        phoneNumber: business.phoneNumber,
        businessName: business.businessName,
        ownerName: business.ownerName,
        businessURL: business.BusinessURL,
        address: {
          state: business.address.state,
          city: business.address.city,
          detail: business.address.detail,
        },
      });
      return null;
    }
    alert("خطای غیر متظره رخ داده است. لطفا دوباره تلاش کنید.");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status === 403) {
        alert("شما مجوز دسترسی به این بخش را ندارید.");
        router.push("/");
      }
      if (error.status === 500) {
        alert("خطای غیر متظره رخ داده است. لطفا دوباره تلاش کنید.");
      }
    }
    console.log(error);
    return null;
  }
}

export async function setSetting(
  userInfo: IUserInfo,
  router: AppRouterInstance
) {
  const token = localStorage.getItem("token");
  if (token === null) {
    alert("شما مجوز دسترسی به پنل را ندارید.");
    router.push("/");
    return null;
  }
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/business/setting`,
      {
        businessName: userInfo.businessName,
        ownerFullName: userInfo.ownerName,
        businessURL: userInfo.businessURL,
        token,
      }
    );
    const { data } = response;
    const { status } = data;
    if (status === true) {
      alert("اطلاعات با موفقیت بروزرسانی شد.");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status === 403) {
        alert("شما مجوز دسترسی به این بخش را ندارید.");
        router.push("/");
      }
      if (error.status === 500) {
        alert("خطای غیر متظره رخ داده است. لطفا دوباره تلاش کنید.");
      }
    }
    console.log(error);
    return null;
  }
}

export async function setAddressInfo(
  userInfo: IUserInfo,
  setUserInfo: Dispatch<SetStateAction<IUserInfo>>,
  router: AppRouterInstance
) {
  const token = localStorage.getItem("token");
  if (token === null) {
    alert("شما مجوز دسترسی به پنل را ندارید.");
    router.push("/");
    return null;
  }
  try {
    if (
      userInfo.address.city != "" &&
      userInfo.address.state != "" &&
      userInfo.address.detail != ""
    ) {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/business/get-info`,
        { token }
      );
      const { data } = response;
      if (data.status) {
        const { business } = data;
        setUserInfo((prevState) => {
          return {
            ...prevState,
            address: {
              state: business.address.state,
              city: business.address.city,
              detail: business.address.detail,
            },
          };
        });
        return null;
      }
      alert("خطای غیر متظره رخ داده است. لطفا دوباره تلاش کنید.");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status === 403) {
        alert("شما مجوز دسترسی به این بخش را ندارید.");
        router.push("/");
      }
      if (error.status === 500) {
        alert("خطای غیر متظره رخ داده است. لطفا دوباره تلاش کنید.");
      }
    }
    console.log(error);
    return null;
  }
}
