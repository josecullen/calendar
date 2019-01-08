import { ISelectionStrategy, CalendarMonthViewSelection } from './selection-strategy.interface';
import { ICalendarSelection } from '../calendar-selection.interface';

export class SingleSelectionStrategy implements ISelectionStrategy {
    calendarMonthView = new CalendarMonthViewSelection(false)
    
    constructor(){}

    isInRange(date: string, selection:ICalendarSelection) {
        return false
    }

    isSelected(date: string, selection:ICalendarSelection){
        return selection.selectedDates.some(d => d === date)
    }

    change(date: string, selection:ICalendarSelection) {
        if(selection.selectedDates.length === 0 || selection.selectedDates[0] !== date){
            selection.selectedDates = []
            selection.selectedDates = [date]
        } else {
            selection.selectedDates = []
        }
    }
}
