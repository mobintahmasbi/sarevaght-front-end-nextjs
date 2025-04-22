import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface IRegisterInfo {
  businessName: string;
  ownerFullName: string;
  businessType: string;
  businessURL: string;
}

export function registerValidator(registerInfo: IRegisterInfo) {
  const noDigitRegex = /^[^0-9]*$/;
  const onlypersianCharacterRegex =
    /^[\u0600-\u06FF\uFB8A\u067E\u0686\u0698\u06A9\u06AF\s]+$/u;
  const onlyEnglishCharacterRegex = /^[A-Za-z-]+$/;
  if (
    registerInfo.businessName == "" ||
    !onlypersianCharacterRegex.test(registerInfo.businessName)
  ) {
    alert(
      "نام کسب و کار نباید خالی باشد .همچنین فقط باید شامل حروف فارسی باشد"
    );
    return false;
  }
  if (
    registerInfo.businessURL == "" ||
    !onlyEnglishCharacterRegex.test(registerInfo.businessURL)
  ) {
    alert(
      "شناسه انگلیسی کسب و کار نباید خالی باشد. همچنین فقط باید شامل حروف انگلیسی باشد. استفاده از (-) مجاز است."
    );
    return false;
  }
  if (registerInfo.businessType == "") {
    alert("نوع کسب و کار نباید خالی باشد.");
    return false;
  }
  if (
    registerInfo.ownerFullName == "" ||
    !noDigitRegex.test(registerInfo.ownerFullName) ||
    !onlypersianCharacterRegex.test(registerInfo.ownerFullName)
  ) {
    alert(
      "نام کامل صاحب کسب و کار نباید خالی باشد. همچنین باید فقط شامل حروف فارسی باشد. استفاده از عدد امکان پذیر نیست."
    );
    return false;
  }
  return true;
}

export async function sendRegisterInfo(
  registerInfo: IRegisterInfo,
  router: AppRouterInstance
) {
  const validationResult = registerValidator(registerInfo);
  if (!validationResult) {
    return null;
  }
  const token = localStorage.getItem("registerToken");
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/business/create`,
      {
        businessName: registerInfo.businessName,
        ownerFullName: registerInfo.ownerFullName,
        businessType: registerInfo.businessType,
        businessURL: registerInfo.businessURL,
        token,
      }
    );
    const { data } = response;
    const { status } = response;
    if (status == 403) {
      localStorage.clear();
      alert("زمان مجاز ثبت نام شما به پایان رسیده، لطفا دوباره تلاش کنید.");
      router.push("/phone-entry");
      return null;
    }
    if (status == 500) {
      alert("مشکلی غیر منتظره اتفاق افتاده لطفا دوباره تلاش کنید");
      return null;
    }
    if (data.status == true) {
      localStorage.clear();
      localStorage.setItem("token", data.token);
      router.push("/panel/not-active");
      return null;
    }
  } catch (error) {
    if(axios.isAxiosError(error)) {
      if (error.status == 403) {
        localStorage.clear();
        alert("زمان مجاز ثبت نام شما به پایان رسیده، لطفا دوباره تلاش کنید.");
        router.push("/phone-entry");
        return null;
      }
      if (error.status == 500) {
        alert("مشکلی غیر منتظره اتفاق افتاده لطفا دوباره تلاش کنید");
        return null;
      }
    } else {
      alert("خطای غیر منتظره")
    }
  }
}
