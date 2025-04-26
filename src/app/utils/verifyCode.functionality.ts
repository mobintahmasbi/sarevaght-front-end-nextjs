import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function otpValidator(
  otp: string[],
  detail: { phoneNumber: string; creationTime: number }
) {
  const stringOtp = otp.join("");
  const otpValidation = /^\d{5}$/.test(stringOtp);
  if (!otpValidation) {
    return false;
  }
  if (detail.creationTime >= Date.now()) {
    return false;
  }
  return true;
}

export async function sendOtp(
  otp: string[],
  detail: { phoneNumber: string; creationTime: number },
  router: AppRouterInstance
) {
  const otpValidation = otpValidator(otp, detail);
  if (!otpValidation) {
    alert("کد تایید اشتباه است");
    return null;
  }
  const stringOtp = otp.join("");
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_URL}/otp/validate`,
    {
      phoneNumber: detail.phoneNumber,
      otpCode: stringOtp,
    }
  );
  const { status } = response;
  const { data } = response;
  if (status == 500 || data == null) {
    alert("مشکلی غیرمنتظره رخ داده لطفا دوباره تلاش کنید");
    return null;
  }
  if (data.status == 400) {
    alert("کد تایید اشتباه است");
    return null;
  }
  if (data.status == 200) {
    localStorage.clear();
    if (data.registered) {
      localStorage.setItem("token", data.token);
      router.push("/panel/dayli-reports");
      return null;
    }
    localStorage.setItem("registerToken", data.registerToken);
    router.push("/register");
    return null;
  }
  alert("something impossible just happened");
  return null;
}
