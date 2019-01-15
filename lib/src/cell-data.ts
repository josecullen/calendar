import { IDay } from './lib/calendar/day/day.interface';
import { Day } from './lib/calendar/day/day.class';
import { parse } from 'date-fns';

export class CellData<T> extends Day implements IDay {

    constructor(
        date: string,
        public payload: T,
        public selected: boolean = false,
        public disabled: boolean = false
    ) {
        super(parse(date));
    }
}
