/* TypeScript file generated from Timetable.res by genType. */
/* eslint-disable import/first */


const $$toJS607543633: { [key: string]: any } = {"0": "Monday", "1": "Tuesday", "2": "Wednesday", "3": "Thursday", "4": "Friday", "5": "Saturday", "6": "Sunday"};

const $$toRE607543633: { [key: string]: any } = {"Monday": 0, "Tuesday": 1, "Wednesday": 2, "Thursday": 3, "Friday": 4, "Saturday": 5, "Sunday": 6};

const $$toJS668809359: { [key: string]: any } = {"0": "Uneven", "1": "Even"};

// @ts-ignore: Implicit any on import
import * as TimetableBS__Es6Import from './Timetable.bs';
const TimetableBS: any = TimetableBS__Es6Import;

// tslint:disable-next-line:interface-over-type-literal
export type Day_t = 
    "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

// tslint:disable-next-line:interface-over-type-literal
export type Day_en = 
    "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

// tslint:disable-next-line:interface-over-type-literal
export type Week_t = "Uneven" | "Even";

// tslint:disable-next-line:interface-over-type-literal
export type lessonTime = 
    "8:30-10:05"
  | "10:15-11:50"
  | "12:00-13:35"
  | "14:10-15:45"
  | "15:55-17:30"
  | "17:40-19:15"
  | "19:25-21:00";

// tslint:disable-next-line:interface-over-type-literal
export type lesson = {
  readonly day: Day_t; 
  readonly week: Week_t; 
  readonly time: lessonTime; 
  readonly subject: string; 
  readonly type_: string; 
  readonly place: string; 
  readonly teacher?: string; 
  readonly group?: string[]
};

// tslint:disable-next-line:interface-over-type-literal
export type timetable = {
  readonly timetable: lesson[]; 
  readonly target: string; 
  readonly type_: 
    "group"
  | "teacher"
};

export const Day_toNumber: (day:Day_t) => number = function (Arg1: any) {
  const result = TimetableBS.Day.toNumber($$toRE607543633[Arg1]);
  return result
};

export const Day_fromNumber: (number:number) => Day_t = function (Arg1: any) {
  const result = TimetableBS.Day.fromNumber(Arg1);
  return $$toJS607543633[result]
};

export const Day_toRu: (day:Day_t) => string = function (Arg1: any) {
  const result = TimetableBS.Day.toRu($$toRE607543633[Arg1]);
  return result
};

export const Day_toEn: (day:Day_t) => 
    "Friday"
  | "Monday"
  | "Saturday"
  | "Sunday"
  | "Thursday"
  | "Tuesday"
  | "Wednesday" = function (Arg1: any) {
  const result = TimetableBS.Day.toEn($$toRE607543633[Arg1]);
  return result
};

export const Week_fromNumber: (n:number) => Week_t = function (Arg1: any) {
  const result = TimetableBS.Week.fromNumber(Arg1);
  return $$toJS668809359[result]
};

export const Week_fromDate: (date:Date) => Week_t = function (Arg1: any) {
  const result = TimetableBS.Week.fromDate(Arg1);
  return $$toJS668809359[result]
};
