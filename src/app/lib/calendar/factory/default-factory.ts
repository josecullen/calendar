import { ICalendarFactory } from './factory.interface';
import { Year } from '../year/year.class';
import { Calendar } from '../calendar';
import { IYear } from '../year/year.interface';
import { IMonth } from '../month/month.interface';
import { Month } from '../month/month.class';
import { IDay } from '../day/day.interface';
import { Day } from '../day/day.class';

export class CalendarDefaultFactory implements ICalendarFactory {

    createYear(value:number, calendar:Calendar):IYear {
        return new Year(value, calendar)
    }

    createMonth(date:Date, year:IYear, calendar:Calendar):IMonth {
        return new Month(date, year, calendar)
    }

    createDay(date:Date):IDay {
        return new Day(date)
    }

}
