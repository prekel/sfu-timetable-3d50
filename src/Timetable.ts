export interface Timetable {
    timetable: Lesson[];
    target: string;
    type: "teacher" | "group";
}

export interface Lesson {
    day: string;
    week: string;
    time: string;
    subject: string;
    type: string;
    place: string;
    teacher: string | null;
    groups: string[] | null
}

export type DayOfWeek = "воскресенье" | "понедельник" | "вторник" | "среда" | "четверг" | "пятница" | "суббота";

export const DayOfWeekFromNumber = (day: number): DayOfWeek => {
    switch (day) {
        case 0: {
            return "воскресенье";
        }
        case 1: {
            return "понедельник";
        }
        case 2: {
            return "вторник";
        }
        case 3: {
            return "среда";
        }
        case 4: {
            return "четверг";
        }
        case 5: {
            return "пятница";
        }
        case 6: {
            return "суббота";
        }
        default: {
            throw new Error("Несуществующий день");
        }
    }
}
