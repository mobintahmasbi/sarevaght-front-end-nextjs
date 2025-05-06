"use client"
import ISetTiming from "../utils/ISetTiming";

export default function SetTimingBox({
  dayName,
  morning,
  afternoon,
  enDayName,
  changer
}: ISetTiming) {
  let morningTimes = null;
  let afternoonTimes = null;
  
  if (morning !== "closed" && morning != "") {
    morningTimes = morning.split("-");
  }
  if (afternoon !== "closed" && afternoon != "") {
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
                morning === "closed" ? "main-red" : morning == "" ? "main-gray": "dark-green"
              }`}
            >
              {morning === "closed" ? "بسته" : morning == ""? "نامشخص": "باز"}
            </div>
          </div>
          <div className="sm:mx-2 my-3 flex justify-between items-center">
            <div className="font-bold flex items-center">
              <div className="dark-white me-1 text-[13px]">ساعت شروع :</div>
              <input
                type="text"
                className="main-border bg-milky w-[55px] py-1 rounded-[4px] text-center text-[14px]"
                placeholder={morningTimes ? morningTimes[0] : "9:00"}
                value={morningTimes? morningTimes[0]: "9:00"}
                onChange={(e) => {
                  if(morningTimes != null) {
                    changer(enDayName, "morning", `${e.target.value}-${morningTimes[1]}`)
                  }
                }}
              />
            </div>
            <div className="font-bold flex items-center">
              <div className="dark-white me-1 text-[13px]">ساعت پایان :</div>
              <input
                type="text"
                className="main-border bg-milky w-[55px] py-1 rounded-[4px] text-center text-[14px]"
                placeholder={morningTimes ? morningTimes[1] : "13:00"}
                value={morningTimes? morningTimes[1]: "13:00"}
                onChange={(e) => {
                  if(morningTimes != null) {
                    changer(enDayName, "morning", `${morningTimes[0]}-${e.target.value}`)
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full px-2">
          <button
            className={`w-full rounded-[15px] py-1 mb-1 cursor-pointer font-bold ${
              morning === "closed"
                ? "dark-green bg-light-green"
                : morning == "" ? "main-gray bg-light-gray": "main-red bg-light-red"
            }`}
            onClick={() => {
              if(morning === "closed") {
                changer(enDayName, "morning", "9:00-13:00")
              } else {
                changer(enDayName, "morning", "closed")
              }
            }}
          >
            {morning === "closed" ? "باز" : morning == "" ? "مشخص کردن": "بسته"}
          </button>
          <hr className="secondary-border" />
        </div>
        <div className="w-full px-2">
          <div className="mx-2 my-2 flex justify-between items-center">
            <div className="font-bold dark-white">شیفت شب :</div>
            <div
              className={`font-bold ${
                afternoon === "closed" ? "main-red" : afternoon == "" ? "main-gray": "dark-green"
              }`}
            >
              {afternoon === "closed" ? "بسته" : afternoon == "" ? "نامشخص": "باز"}
            </div>
          </div>
          <div className="sm:mx-2 my-3 flex justify-between items-center">
            <div className="font-bold flex items-center">
              <div className="dark-white me-1 text-[13px]">ساعت شروع :</div>
              <input
                type="text"
                className="main-border bg-milky w-[55px] py-1 rounded-[4px] text-center text-[14px]"
                placeholder={afternoonTimes ? afternoonTimes[0] : "17:00"}
                value={afternoonTimes? afternoonTimes[0]: "17:00"}
                onChange={(e) => {
                  if(afternoonTimes != null) {
                    changer(enDayName, "afternoon", `${e.target.value}-${afternoonTimes[1]}`)
                  }
                }}
                
              />
            </div>
            <div className="font-bold flex items-center">
              <div className="dark-white me-1 text-[13px]">ساعت پایان :</div>
              <input
                type="text"
                className="main-border bg-milky w-[55px] py-1 rounded-[4px] text-center text-[14px]"
                placeholder={afternoonTimes ? afternoonTimes[1] : "21:00"}
                value={afternoonTimes? afternoonTimes[1]: "21:00"}
                onChange={(e) => {
                  if(afternoonTimes != null) {
                    changer(enDayName, "afternoon", `${afternoonTimes[0]}-${e.target.value}`)
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full px-2">
          <button
            className={`w-full rounded-[15px] py-1 mb-1 cursor-pointer font-bold ${
              afternoon === "closed"
                ? "dark-green bg-light-green"
                : afternoon == "" ? "bg-light-gray main-gray": "main-red bg-light-red"
            }`}
            onClick={() => {
              if(afternoon === "closed") {
                changer(enDayName, "afternoon", "17:00-21:00")
              } else {
                changer(enDayName, "afternoon", "closed")
              }
            }}
          >
            {afternoon === "closed" ? "باز" : afternoon == "" ? "مشخص کردن": "بسته"}
          </button>
        </div>
      </div>
    </>
  );
}
