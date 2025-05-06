import { EnDay } from "./dayName";

// e.g. in types.ts
export interface DaySchedule {
    morning:   string;
    afternoon: string;
  }
  
  // A full work schedule is a record from each day to its schedule
  export type WorkSchedule = Record<EnDay, DaySchedule>;
  