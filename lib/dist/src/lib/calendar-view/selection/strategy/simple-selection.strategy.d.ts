import { ISelectionStrategy } from './selection-strategy.interface';
import { ICalendarSelection } from '../calendar-selection.interface';
import { CalendarMonthSelection } from '../../calendar-month-selection.class';
export declare class SingleSelectionStrategy implements ISelectionStrategy {
    calendarMonthView: CalendarMonthSelection;
    readonly name = "simple";
    constructor();
    isInRange(date: string, selection: ICalendarSelection): boolean;
    isSelected(date: string, selection: ICalendarSelection): boolean;
    change(date: string, selection: ICalendarSelection): void;
}
