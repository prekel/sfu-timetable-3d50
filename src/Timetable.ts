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
    groups: string[] | null
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
    Group = "group"
}

export enum WeekEnum {
    Uneven = "1",
    Even = "2"
}

export type LessonTime = "8:30-10:05" | "10:15-11:50" | "12:00-13:35" | "14:10-15:45" | "15:55-17:30" | "17:40-19:15" | "19:25-21:00";

export type DayOfWeek = "Воскресенье" | "Понедельник" | "Вторник" | "Среда" | "Четверг" | "Пятница" | "Суббота";

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
}
