import { IDay } from './lib/calendar/day/day.interface';
import { DayAdapter } from './day-adapter';

export class CellData extends DayAdapter implements IDay {

    constructor(
        date: string,
        public payload: any,
        public selected: boolean,
    ) {
        super(date)
    }
}