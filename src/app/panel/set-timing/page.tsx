import PanelHeader from "@/app/components/panelHeader";
import SetTimingBox from "@/app/components/set-timing-box";

export default function SetTiming() {
  return (
    <>
      <PanelHeader />
      <div className="w-full px-5 my-5">
        <div className="w-full main-shadow secondary-border rounded-[15px] pb-5">
          <div className="w-full p-4">
            <div className="ms-2 mb-2">شیفت های کاری</div>
            <hr className="secondary-border" />
          </div>
          <div className="w-full flex flex-wrap gap-y-5 items-center justify-between px-4">
            <SetTimingBox dayName="شنبه" afternoon="9-12:30" morning="closed" />
            <SetTimingBox dayName="شنبه" afternoon="closed" morning="closed" />
            <SetTimingBox dayName="شنبه" afternoon="closed" morning="closed" />
            <SetTimingBox dayName="شنبه" afternoon="closed" morning="closed" />
            <SetTimingBox dayName="شنبه" afternoon="closed" morning="closed" />
            <SetTimingBox dayName="شنبه" afternoon="closed" morning="closed" />
            <SetTimingBox dayName="شنبه" afternoon="closed" morning="closed" />
          </div>
          <div className="w-full px-4 flex items-center justify-center">
            <button  className="w-full rounded-[15px] py-2 mt-6 cursor-pointer font-bold dark-green bg-light-green main-shadow">
              ثبت تغییرات
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
