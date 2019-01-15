import { IYear } from './year/year.interface';
import { ICalendarFactory } from './factory/factory.interface';
import { IMonth } from './month/month.interface';
import { IDay } from './day/day.interface';
import { CalendarConfig } from './config/calendar-config.class';
export declare class Calendar {
    readonly factory: ICalendarFactory;
    config: CalendarConfig;
    private years;
    constructor(factory?: ICalendarFactory, config?: CalendarConfig);
    recalculate(): void;
    setDaysPayload(payloads: {
        date: string;
        payload: IDay;
    }[]): void;
    setDay(dateString: string, day: IDay): void;
    getYear(year: number): IYear;
    getCurrentYear(): IYear;
    getPreviousMonth(currentMonth: IMonth): IMonth;
    getNextMonth(currentMonth: IMonth): IMonth;
}
