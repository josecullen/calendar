import { ICalendarSelection } from '../calendar-selection.interface';
import { CalendarMonthSelection } from '../../calendar-month-selection.class';
export interface ISelectionStrategy {
    calendarMonthView: CalendarMonthSelection;
    name: string;
    change(date: string, selection?: ICalendarSelection): void;
    isSelected(date: string, selection?: ICalendarSelection): boolean;
    isInRange(date: string, selection?: ICalendarSelection): boolean;
}
