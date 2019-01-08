import * as fns from 'date-fns'
import { IDay } from './day.interface';

export class Day implements IDay {
    date: string
    name: string
    dayOfMonth: number
    dayOfWeek: number

    get isWeekend():boolean {
        return fns.isWeekend(this._date)
    }

    constructor(private _date:Date){
        this.date = fns.format(_date, 'YYYY-MM-DD'),
        this.name = fns.format(_date, 'dddd'),
        this.dayOfMonth = fns.getDate(_date)
        this.dayOfWeek = fns.getDay(_date)
    }

}
