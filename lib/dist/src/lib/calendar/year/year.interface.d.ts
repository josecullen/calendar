import { IMonth } from '../month/month.interface';
export interface IYear {
    readonly value: number;
    readonly months: IMonth[];
    previousMonth(currentMonth: IMonth): IMonth;
    nextMonth(currentMonth: IMonth): IMonth;
    getMonth(month: number): IMonth;
}
