import { Calendar } from '../calendar';
import { IYear } from '../year/year.interface';
import { IMonth } from '../month/month.interface';
import { IDay } from '../day/day.interface';

export interface ICalendarFactory {

    createYear(value: number, calendar: Calendar): IYear;

    createMonth(date: Date, year: IYear, calendar: Calendar): IMonth;

    createDay(date: Date): IDay;

}
