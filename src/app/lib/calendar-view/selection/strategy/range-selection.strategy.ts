import { ISelectionStrategy, CalendarMonthViewSelection } from './selection-strategy.interface';
import { ICalendarSelection, SelectionStatus } from '../calendar-selection.interface';
import { CalendarSelection } from '../calendar-selection.class';
import { parse, compareDesc, addDays, format } from 'date-fns';

export class RangeSelectionStrategy implements ISelectionStrategy {
    calendarMonthView = new CalendarMonthViewSelection(true)
    readonly name = 'range'

    isInRange(date: string, selection:ICalendarSelection) {
        const index = selection.selectedDates.findIndex(d => d === date)

        return index > 0 && index < selection.selectedDates.length -1
    }

    isSelected(date: string, selection:ICalendarSelection){
        const index = selection.selectedDates.findIndex(d => d === date)

        return selection.selectedDates.length && (index === 0 || index === selection.selectedDates.length -1)
        
    }

    change(date: string, selection:CalendarSelection) {
        if (selection.status === SelectionStatus.unset) {
            selection.selectedDates.push(date)
            selection.status = SelectionStatus.startRangeSelected
        }
        else if (selection.status === SelectionStatus.startRangeSelected) {
            let start = parse(selection.selectedDates[0])
            let end = parse(date)

            let diff = compareDesc(start, end)

            if (diff === 0) {
                selection.selectedDates = []
                selection.status = SelectionStatus.unset
            }
            else if (diff < 0) {
                selection.selectedDates = []
                selection.selectedDates.push(date)
            } else if (diff > 0) {
                do {
                    start = addDays(start, 1)
                    selection.selectedDates.push(format(start, 'YYYY-MM-DD'))
                } while (compareDesc(start, end) > 0)

                selection.status = SelectionStatus.rangeSelected
            }

        }
        else {
            selection.selectedDates = []
            selection.status = SelectionStatus.unset
        }
    }
}

