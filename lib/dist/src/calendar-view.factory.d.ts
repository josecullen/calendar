import { ICalendarFactory } from './lib/calendar/factory/factory.interface';
import { CalendarDefaultFactory } from './lib/calendar/factory/default-factory';
import { IDay } from './lib/calendar/day/day.interface';
export declare class CalendarViewFactory extends CalendarDefaultFactory implements ICalendarFactory {
    createDay(date: Date, selected?: boolean, disabled?: boolean): IDay;
}
