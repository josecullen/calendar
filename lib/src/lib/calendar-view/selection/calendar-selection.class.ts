import { ICalendarSelection, SelectionStatus } from './calendar-selection.interface';
import { ISelectionStrategy } from './strategy/selection-strategy.interface';
import { SingleSelectionStrategy } from './strategy/simple-selection.strategy';
import { EventEmitter } from '@angular/core';
import { CalendarMonthSelection } from '../calendar-month-selection.class';

export class CalendarSelection implements ICalendarSelection, ISelectionStrategy {
    
    constructor(
        private strategy:ISelectionStrategy = new SingleSelectionStrategy(),
        public selectedDates: string[] = [],
        public status: SelectionStatus = SelectionStatus.unset,
        public selectionChange:EventEmitter<CalendarSelection> = new EventEmitter(),
        public monthSelectionChange:EventEmitter<{ previous: Date, current: Date }> = new EventEmitter()
    ){
        this.strategy.calendarMonthView.monthSelectionChange = this.monthSelectionChange
    }

    get calendarMonthView():CalendarMonthSelection {
        return this.strategy.calendarMonthView
    }

    get name() {
        return this.strategy.name
    }

    setStrategy(strategy :ISelectionStrategy){
        this.strategy = strategy
        this.selectedDates = []
        this.strategy.calendarMonthView.monthSelectionChange = this.monthSelectionChange
    }

    getStrategy():ISelectionStrategy {
        return this.strategy
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

    // selectedMonthChange(){
    //     this.monthSelectionChange.emit(this)
    // }

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
