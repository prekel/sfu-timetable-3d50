export interface Timetable {
  timetable: Lesson[];
  target: string;
  type: TimetableTypeEnum;
}

export interface Lesson {
  day: DayEnum;
  week: WeekEnum;
  time: LessonTime;
  subject: string;
  type: string;
  place: string;
  teacher: string | null;
  groups: string[] | null;
}

export enum DayEnum {
  Monday = "1",
  Tuesday = "2",
  Wednesday = "3",
  Thursday = "4",
  Friday = "5",
  Saturday = "6",
  Sunday = "0",
}

export enum TimetableTypeEnum {
  Teacher = "teacher",
  Group = "group",
}

export enum WeekEnum {
  Uneven = "1",
  Even = "2",
}

export type LessonTime =
  | "8:30-10:05"
  | "10:15-11:50"
  | "12:00-13:35"
  | "14:10-15:45"
  | "15:55-17:30"
  | "17:40-19:15"
  | "19:25-21:00";

export type DayOfWeek =
  | "Воскресенье"
  | "Понедельник"
  | "Вторник"
  | "Среда"
  | "Четверг"
  | "Пятница"
  | "Суббота";

export const DayEnumFromDayNumber = (day: number): DayEnum => {
  switch (day) {
    case 1: {
      return DayEnum.Monday;
    }
    case 2: {
      return DayEnum.Tuesday;
    }
    case 3: {
      return DayEnum.Wednesday;
    }
    case 4: {
      return DayEnum.Thursday;
    }
    case 5: {
      return DayEnum.Friday;
    }
    case 6: {
      return DayEnum.Saturday;
    }
    case 0: {
      return DayEnum.Sunday;
    }
    default: {
      throw new Error("Нет такого дня недели");
    }
  }
};

export const DayOfWeekFromNumber = (day: DayEnum): DayOfWeek => {
  switch (day) {
    case DayEnum.Monday: {
      return "Понедельник";
    }
    case DayEnum.Tuesday: {
      return "Вторник";
    }
    case DayEnum.Wednesday: {
      return "Среда";
    }
    case DayEnum.Thursday: {
      return "Четверг";
    }
    case DayEnum.Friday: {
      return "Пятница";
    }
    case DayEnum.Saturday: {
      return "Суббота";
    }
    case DayEnum.Sunday: {
      return "Воскресенье";
    }
  }
};

export const GetWeekNum = (date: Date): WeekEnum => {
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  month++;
  let a = Math.floor((14 - month) / 12);
  let y = year + 4800 - a;
  let m = month + 12 * a - 3;
  let J =
    day +
    Math.floor((153 * m + 2) / 5) + 365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) - 32045;
  let d4 = (((J + 31741 - (J % 7)) % 146097) % 36524) % 1461;
  let L = Math.floor(d4 / 1460);
  let d1 = ((d4 - L) % 365) + L;
  let week = Math.floor(d1 / 7) + 1;
  return week % 2 === 0 ? WeekEnum.Uneven : WeekEnum.Even;
};


export const FetchTimetable = async (target: string) => {
  const res = await fetch(
    "https://edu.sfu-kras.ru/api/timetable/get&target=" + encodeURIComponent(target)
  );
  return await res.json() as Timetable;
}
