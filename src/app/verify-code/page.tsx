import VerifyCodeEntry from "../components/verify-code-entry";

export default function VerifyCode() {
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
              <VerifyCodeEntry />
            </div>
          </div>
          <div className="w-full flex justify-center mt-9">
            <button className="bg-main-orange text-white text-[16px] font-bold rounded-[15px] px-5 py-3 cursor-pointer hover:opacity-80">
              تایید
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
