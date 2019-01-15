import { ISelectionStrategy } from './selection-strategy.interface';
import { ICalendarSelection } from '../calendar-selection.interface';
import { CalendarSelection } from '../calendar-selection.class';
import { CalendarMonthSelection } from '../../calendar-month-selection.class';

export class PickSelectionStrategy implements ISelectionStrategy {
    calendarMonthView = new CalendarMonthSelection(true)
    readonly name = 'pick'
    
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

