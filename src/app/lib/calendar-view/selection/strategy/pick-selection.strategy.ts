import { ISelectionStrategy, CalendarMonthViewSelection } from './selection-strategy.interface';
import { ICalendarSelection } from '../calendar-selection.interface';
import { CalendarSelection } from '../calendar-selection.class';

export class PickSelectionStrategy implements ISelectionStrategy {
    calendarMonthView = new CalendarMonthViewSelection(true)
    
    isInRange(date: string, selection:ICalendarSelection) {
        return false
    }

    isSelected(date: string, selection:ICalendarSelection){
        return selection.selectedDates.some(d => d === date)
    }

    

    change(date: string, selection:CalendarSelection) {
        let index = selection.selectedDates.findIndex(d => d === date)

        if(index >= 0){
            selection.selectedDates.splice(index, 1)
        } else {
            selection.selectedDates.push(date)
        }
    }
}

