import { IMonth } from './month.interface';
import { IYear } from '../year/year.interface';
import { Calendar } from '../calendar';
import { IDay } from '../day/day.interface';
export declare class Month implements IMonth {
    private date;
    readonly year: IYear;
    readonly calendar: Calendar;
    private static readonly DAYS_IN_CALENDAR_VIEW;
    readonly name: string;
    readonly ofYear: number;
    readonly days: IDay[];
    constructor(date: Date, year: IYear, calendar: Calendar);
    setDay(day: IDay): void;
    getCalendarView(): IDay[][];
}
