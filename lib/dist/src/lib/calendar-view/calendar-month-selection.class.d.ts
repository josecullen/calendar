import { EventEmitter } from '@angular/core';
export declare class MonthSelection {
    date: Date;
    year: number;
    month: number;
    selectionChange?: EventEmitter<{
        previous: Date;
        current: Date;
    }>;
    constructor(date: Date, year: number, month: number, selectionChange?: EventEmitter<{
        previous: Date;
        current: Date;
    }>);
    readonly label: string;
    labelWithConfig(months: string[]): string;
    addMonth(): void;
    addYear(): void;
    minusMonth(): void;
    minusYear(): void;
    setMonthAndYear(date: Date): void;
    private update;
}
export declare class CalendarMonthSelection {
    needTwoMonthView: boolean;
    from?: MonthSelection;
    to?: MonthSelection;
    private _monthSelectionChange?;
    constructor(needTwoMonthView: boolean, from?: MonthSelection, to?: MonthSelection, _monthSelectionChange?: EventEmitter<{
        previous: Date;
        current: Date;
    }>);
    monthSelectionChange: EventEmitter<{
        previous: Date;
        current: Date;
    }>;
}
