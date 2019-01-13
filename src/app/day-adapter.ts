import { parse, isWeekend } from 'date-fns';
import { Day } from './lib/calendar/day/day.class';
import { IDay } from './lib/calendar/day/day.interface';

export class DayAdapter extends Day implements IDay {
    // private _day: Day

    constructor(_date: string) {
        super(parse(_date))
        // this._day = new Day(parse(_date))
    }

    get date(): string {
        return this.date
    }

    get dayOfMonth(): number {
        return this.dayOfMonth
    }

    get dayOfWeek(): number {
        return this.dayOfWeek
    }

    get name(): string {
        return this.name
    }

    

}
