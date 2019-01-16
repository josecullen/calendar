import { ISelectionStrategy } from './selection-strategy.interface';
import { ICalendarSelection } from '../calendar-selection.interface';
import { CalendarMonthSelection } from '../../calendar-month-selection.class';


export class SingleSelectionStrategy implements ISelectionStrategy {
    calendarMonthView = new CalendarMonthSelection(false);
    readonly name = 'simple';

    constructor() {}

    isInRange(date: string, selection: ICalendarSelection) {
        return false;
    }

    isSelected(date: string, selection: ICalendarSelection) {
        return selection.selectedDates.some(d => d === date);
    }

    change(date: string, selection: ICalendarSelection) {
        if (selection.selectedDates.length === 0 || selection.selectedDates[0] !== date) {
            selection.selectedDates = [];
            selection.selectedDates = [date];
        } else {
            selection.selectedDates = [];
        }
    }
}
