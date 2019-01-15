import { ICalendarSelection, SelectionStatus } from './calendar-selection.interface';
import { ISelectionStrategy } from './strategy/selection-strategy.interface';
import { EventEmitter } from '@angular/core';
import { CalendarMonthSelection } from '../calendar-month-selection.class';
export declare class CalendarSelection implements ICalendarSelection, ISelectionStrategy {
    private strategy;
    selectedDates: string[];
    status: SelectionStatus;
    selectionChange: EventEmitter<CalendarSelection>;
    monthSelectionChange: EventEmitter<{
        previous: Date;
        current: Date;
    }>;
    constructor(strategy?: ISelectionStrategy, selectedDates?: string[], status?: SelectionStatus, selectionChange?: EventEmitter<CalendarSelection>, monthSelectionChange?: EventEmitter<{
        previous: Date;
        current: Date;
    }>);
    readonly calendarMonthView: CalendarMonthSelection;
    readonly name: string;
    setStrategy(strategy: ISelectionStrategy): void;
    getStrategy(): ISelectionStrategy;
    isInRange(date: string): boolean;
    isSelected(date: string): boolean;
    change(date: string): void;
    from(): string;
    to(): string;
}
