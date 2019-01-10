import { parse, isWeekend } from 'date-fns';
import { Day } from './lib/calendar/day/day.class';
import { IDay } from './lib/calendar/day/day.interface';

export class DayAdapter implements IDay {
    private _day: Day

    constructor(private _date: string) {
        this._day = new Day(parse(_date))
    }

    get date(): string {
        return this._day.date
    }

    get dayOfMonth(): number {
        return this._day.dayOfMonth
    }

    get dayOfWeek(): number {
        return this._day.dayOfWeek
    }

    get name(): string {
        return this._day.name
    }

    get isWeekend(): boolean {
        return isWeekend(this._date)
    }

}
