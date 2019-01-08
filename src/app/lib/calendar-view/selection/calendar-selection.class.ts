import { ICalendarSelection, SelectionStatus } from './calendar-selection.interface';
import { ISelectionStrategy, CalendarMonthViewSelection } from './strategy/selection-strategy.interface';
import { SingleSelectionStrategy } from './strategy/simple-selection.strategy';
import { EventEmitter } from '@angular/core';

export class CalendarSelection implements ICalendarSelection, ISelectionStrategy {
    
    constructor(
        private strategy:ISelectionStrategy = new SingleSelectionStrategy(),
        public selectedDates: string[] = [],
        public status: SelectionStatus = SelectionStatus.unset,
        public selectionChange:EventEmitter<CalendarSelection> = new EventEmitter()
    ){
    }

    get calendarMonthView():CalendarMonthViewSelection {
        return this.strategy.calendarMonthView
    }

    setStrategy(strategy :ISelectionStrategy){
        this.strategy = strategy
        this.selectedDates = []
    }

    isInRange(date:string):boolean {
        return this.strategy.isInRange(date, this)
    }

    isSelected(date:string):boolean {
        return this.strategy.isSelected(date, this)
    }

    change(date:string){
        this.strategy.change(date, this)

        this.selectionChange.emit(this)
    }

    from():string {
        return this.selectedDates.length 
            ? this.selectedDates[0] 
            : ''
    }

    to():string {
        return this.selectedDates.length > 1 
            ? this.selectedDates[this.selectedDates.length-1] 
            : ''
    }
}
