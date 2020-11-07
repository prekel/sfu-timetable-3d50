export interface Timetable {
    timetable: Day[];
    target: string;
    type: "teacher" | "group";
}

export interface Day {
    day: number;
    week: number;
    time: string;
    subject: string;
    type: string;
    place: string;
    teacher: string | null;
    groups: string[] | null
}
