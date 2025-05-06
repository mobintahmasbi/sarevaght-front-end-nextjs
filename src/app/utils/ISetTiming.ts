import { EnDay } from "./dayName";

interface ISetTiming {
  dayName: string;
  morning: string;
  afternoon: string;
  enDayName: EnDay;
  changer: (
    enDay:
      | "Saturday"
      | "Sunday"
      | "Monday"
      | "Tuesday"
      | "Wednesday"
      | "Thursday"
      | "Friday",
    shiftType: "afternoon" | "morning",
    wokingTime: string
  ) => void;
}

export default ISetTiming;
