import { IDay } from '../day/day.interface';
import { IYear } from '../year/year.interface';
export interface IMonth {
    readonly name: string;
    readonly ofYear: number;
    readonly days: IDay[];
    readonly year: IYear;
    setDay(day: IDay): void;
    getCalendarView(): IDay[][];
}
