/* TypeScript file generated from Timetable.ml by genType. */
/* eslint-disable import/first */


const $$toJS607543633: { [key: string]: any } = {"0": "Monday", "1": "Tuesday", "2": "Wednesday", "3": "Thursday", "4": "Friday", "5": "Saturday", "6": "Sunday"};

const $$toRE607543633: { [key: string]: any } = {"Monday": 0, "Tuesday": 1, "Wednesday": 2, "Thursday": 3, "Friday": 4, "Saturday": 5, "Sunday": 6};

const $$toJS668809359: { [key: string]: any } = {"0": "Uneven", "1": "Even"};

// @ts-ignore: Implicit any on import
import * as TimetableBS__Es6Import from './Timetable.bs';
const TimetableBS: any = TimetableBS__Es6Import;

import type {t as LessonTime_t} from './LessonTime.gen';

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
export type Lesson_t = {
  readonly day: Day_t; 
  readonly week: Week_t; 
  readonly time: LessonTime_t; 
  readonly subject: string; 
  readonly type_: string; 
  readonly teacher?: string; 
  readonly group?: string[]; 
  readonly place: string; 
  readonly building: string; 
  readonly room: string; 
  readonly sync: string
};

// tslint:disable-next-line:interface-over-type-literal
export type Timetable_t = {
  readonly timetable: Lesson_t[]; 
  readonly target: string; 
  readonly type_: 
    "group"
  | "teacher"; 
  readonly institute: string
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

export const Day_toEn: (day:Day_t) => Day_en = function (Arg1: any) {
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

export const Timetable_fetch: (target:string) => Promise<
    { tag: "Ok"; value: Timetable_t }
  | { tag: "Error"; value: string }> = function (Arg1: any) {
  const result = TimetableBS.Timetable.fetch(Arg1);
  return result.then(function _element($promise: any) { return $promise.TAG===0
    ? {tag:"Ok", value:{timetable:$promise._0.timetable.map(function _element(ArrayItem: any) { return {day:$$toJS607543633[ArrayItem.day], week:$$toJS668809359[ArrayItem.week], time:ArrayItem.time, subject:ArrayItem.subject, type_:ArrayItem.type_, teacher:ArrayItem.teacher, group:ArrayItem.group, place:ArrayItem.place, building:ArrayItem.building, room:ArrayItem.room, sync:ArrayItem.sync}}), target:$promise._0.target, type_:$promise._0.type_, institute:$promise._0.institute}}
    : {tag:"Error", value:$promise._0}})
};

export const Timetable_fetchOpt: (target:string) => Promise<(null | undefined | Timetable_t)> = function (Arg1: any) {
  const result = TimetableBS.Timetable.fetchOpt(Arg1);
  return result.then(function _element($promise: any) { return ($promise == null ? $promise : {timetable:$promise.timetable.map(function _element(ArrayItem: any) { return {day:$$toJS607543633[ArrayItem.day], week:$$toJS668809359[ArrayItem.week], time:ArrayItem.time, subject:ArrayItem.subject, type_:ArrayItem.type_, teacher:ArrayItem.teacher, group:ArrayItem.group, place:ArrayItem.place, building:ArrayItem.building, room:ArrayItem.room, sync:ArrayItem.sync}}), target:$promise.target, type_:$promise.type_, institute:$promise.institute})})
};
