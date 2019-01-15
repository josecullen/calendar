import { ISelectionStrategy } from './selection-strategy.interface';
import { ICalendarSelection } from '../calendar-selection.interface';
import { CalendarSelection } from '../calendar-selection.class';
import { CalendarMonthSelection } from '../../calendar-month-selection.class';
export declare class RangeSelectionStrategy implements ISelectionStrategy {
    calendarMonthView: CalendarMonthSelection;
    readonly name = "range";
    isInRange(date: string, selection: ICalendarSelection): boolean;
    isSelected(date: string, selection: ICalendarSelection): boolean;
    change(date: string, selection: CalendarSelection): void;
}
