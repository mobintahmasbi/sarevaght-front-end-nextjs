"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import VerifyCodeEntry from "../components/verify-code-entry";
import { sendOtp } from "../utils/verifyCode.functionality";

export default function VerifyCode() {
  const [otpState, setOtpState] = useState<string[]>(Array(5).fill(""))
  const router = useRouter()

  //making sure user does not login before and come from phone entry page
  const otpCreationDetail = localStorage.getItem('otpCreationDetail')
  const token = localStorage.getItem('token')
  if(otpCreationDetail === null) {
    router.push('/phone-entry')
  }
  if(token !== null) {
    router.push('/panel/dayli-reports')
  }
  const OtpCreationDetail = JSON.parse(otpCreationDetail as string) as { phoneNumber: string, creationTime: number}
  const handleOtpChange = (otp: string[]) => {
    setOtpState(otp);
  };
  return (
    <>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <div className="sm:w-sm w-4/5 h-[300px] main-border rounded-[15px] main-shadow">
          <div className="w-full bg-main-blue text-center text-white py-3 rounded-t-[15px] font-bold sm:text-[18px]">
                کد تایید
          </div>
          <div className="w-full flex flex-wrap justify-center px-5 mt-9">
            <div className="w-full text-start">
              <label className="block text-[13px] text-main-blue font-bold mt-4 mb-2 ms-2">
                کد تایید
              </label>
              <VerifyCodeEntry onOtpChange={handleOtpChange} />
            </div>
          </div>
          <div className="w-full flex justify-center mt-9">
            <button className="bg-main-orange text-white text-[16px] font-bold rounded-[15px] px-5 py-3 cursor-pointer hover:opacity-80" onClick={() => sendOtp(otpState, {
              phoneNumber: OtpCreationDetail.phoneNumber,
              creationTime: OtpCreationDetail.creationTime
            }, router)}>
              تایید
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
