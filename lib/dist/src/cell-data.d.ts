import { IDay } from './lib/calendar/day/day.interface';
import { Day } from './lib/calendar/day/day.class';
export declare class CellData<T> extends Day implements IDay {
    payload: T;
    selected: boolean;
    disabled: boolean;
    constructor(date: string, payload: T, selected?: boolean, disabled?: boolean);
}
