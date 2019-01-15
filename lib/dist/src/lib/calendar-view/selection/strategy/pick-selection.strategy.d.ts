import { ISelectionStrategy } from './selection-strategy.interface';
import { ICalendarSelection } from '../calendar-selection.interface';
import { CalendarSelection } from '../calendar-selection.class';
import { CalendarMonthSelection } from '../../calendar-month-selection.class';
export declare class PickSelectionStrategy implements ISelectionStrategy {
    calendarMonthView: CalendarMonthSelection;
    readonly name = "pick";
    isInRange(date: string, selection: ICalendarSelection): boolean;
    isSelected(date: string, selection: ICalendarSelection): boolean;
    change(date: string, selection: CalendarSelection): void;
}
