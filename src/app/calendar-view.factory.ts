import { ICalendarFactory } from './lib/calendar/factory/factory.interface';
import { CalendarDefaultFactory } from './lib/calendar/factory/default-factory';
import { IDay } from './lib/calendar/day/day.interface';
import { CellData } from './calendar.component';
import { parse, format } from 'date-fns';


export class CalendarViewFactory extends CalendarDefaultFactory implements ICalendarFactory {

    createDay(date:Date):IDay {
        return new CellData(format(date), undefined, false)
    }
}