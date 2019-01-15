import { IMonth } from '../month/month.interface';
import { Calendar } from '../calendar';
import { IYear } from './year.interface';
export declare class Year implements IYear {
    readonly value: number;
    readonly calendar: Calendar;
    readonly months: IMonth[];
    constructor(value: number, calendar: Calendar);
    previousMonth(currentMonth: IMonth): IMonth;
    nextMonth(currentMonth: IMonth): IMonth;
    getMonth(month: number): IMonth;
}
