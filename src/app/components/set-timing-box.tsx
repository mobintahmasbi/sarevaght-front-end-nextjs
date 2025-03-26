import ISetTiming from "../utils/ISetTiming";

export default function SetTimingBox({
  dayName,
  morning,
  afternoon,
}: ISetTiming) {
  let morningTimes = null;
  let afternoonTimes = null;
  if (morning !== "closed") {
    morningTimes = morning.split("-");
  }
  if (afternoon !== "closed") {
    afternoonTimes = afternoon.split("-");
  }
  return (
    <>
      <div className="sm:w-[32%] w-full secondary-border rounded-[15px] p-2 main-shadow">
        <div className="w-full px-2">
          <div className="mx-2 my-2 flex justify-between items-center">
            <div>نام روز :</div>
            <div>{dayName}</div>
          </div>
          <hr className="secondary-border" />
        </div>
        <div className="w-full px-2">
          <div className="mx-2 my-2 flex justify-between items-center">
            <div className="font-bold dark-white">شیفت صبح :</div>
            <div
              className={`font-bold ${
                morning === "closed" ? "main-red" : "dark-green"
              }`}
            >
              {morning === "closed" ? "بسته" : "باز"}
            </div>
          </div>
          <div className="sm:mx-2 my-3 flex justify-between items-center">
            <div className="font-bold flex items-center">
              <div className="dark-white me-1 text-[13px]">ساعت شروع :</div>
              <input
                type="text"
                className="main-border bg-milky w-[55px] py-1 rounded-[4px] text-center text-[14px]"
                placeholder={morningTimes ? morningTimes[0] : "9"}
              />
            </div>
            <div className="font-bold flex items-center">
              <div className="dark-white me-1 text-[13px]">ساعت پایان :</div>
              <input
                type="text"
                className="main-border bg-milky w-[55px] py-1 rounded-[4px] text-center text-[14px]"
                placeholder={morningTimes ? morningTimes[1] : "13"}
              />
            </div>
          </div>
        </div>
        <div className="w-full px-2">
          <button
            className={`w-full rounded-[15px] py-1 mb-1 cursor-pointer font-bold ${
              morning === "closed"
                ? "dark-green bg-light-green"
                : "main-red bg-light-red"
            }`}
          >
            {morning === "closed" ? "باز" : "بسته"}
          </button>
          <hr className="secondary-border" />
        </div>
        <div className="w-full px-2">
          <div className="mx-2 my-2 flex justify-between items-center">
            <div className="font-bold dark-white">شیفت شب :</div>
            <div
              className={`font-bold ${
                afternoon === "closed" ? "main-red" : "dark-green"
              }`}
            >
              {afternoon === "closed" ? "بسته" : "باز"}
            </div>
          </div>
          <div className="sm:mx-2 my-3 flex justify-between items-center">
            <div className="font-bold flex items-center">
              <div className="dark-white me-1 text-[13px]">ساعت شروع :</div>
              <input
                type="text"
                className="main-border bg-milky w-[55px] py-1 rounded-[4px] text-center text-[14px]"
                placeholder={afternoonTimes ? afternoonTimes[0] : "17"}
              />
            </div>
            <div className="font-bold flex items-center">
              <div className="dark-white me-1 text-[13px]">ساعت پایان :</div>
              <input
                type="text"
                className="main-border bg-milky w-[55px] py-1 rounded-[4px] text-center text-[14px]"
                placeholder={afternoonTimes ? afternoonTimes[1] : "21"}
              />
            </div>
          </div>
        </div>
        <div className="w-full px-2">
          <button
            className={`w-full rounded-[15px] py-1 mb-1 cursor-pointer font-bold ${
              afternoon === "closed"
                ? "dark-green bg-light-green"
                : "main-red bg-light-red"
            }`}
          >
            {afternoon === "closed" ? "باز" : "بسته"}
          </button>
        </div>
      </div>
    </>
  );
}
