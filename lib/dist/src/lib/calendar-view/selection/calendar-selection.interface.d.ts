import { CalendarMonthSelection } from '../calendar-month-selection.class';
export interface ICalendarSelection {
    name: string;
    selectedDates: string[];
    status: SelectionStatus;
    isInRange(date: string): boolean;
    isSelected(date: string): boolean;
    from(): string;
    to(): string;
    change(date: string): void;
    calendarMonthView: CalendarMonthSelection;
}
export declare enum SelectionType {
    single = "single",
    range = "range",
    multirange = "multirange",
    pick = "pick"
}
export declare enum SelectionStatus {
    unset = "unset",
    startRangeSelected = "startRangeSelected",
    rangeSelected = "rangeSelected",
    picked = "picked"
}
