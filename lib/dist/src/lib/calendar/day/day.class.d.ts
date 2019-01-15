import { IDay } from './day.interface';
export declare class Day implements IDay {
    private _date;
    disabled: boolean;
    date: string;
    name: string;
    dayOfMonth: number;
    dayOfWeek: number;
    readonly isWeekend: boolean;
    constructor(_date: Date, disabled?: boolean);
}
