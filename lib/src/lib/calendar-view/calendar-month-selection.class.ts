import { EventEmitter } from '@angular/core'
import { format, getMonth, getYear, addMonths, addYears, subMonths, subYears, setMonth, setYear } from 'date-fns';

export class MonthSelection {
    
    constructor(
        public date:Date,
        public year: number,
        public month: number,
        public selectionChange?:EventEmitter<{ previous: Date, current: Date }>
    ){}

    get label():string {        
        return format(this.date, 'MMMM YYYY')
    }

    labelWithConfig(months:string[]):string {
        return months ? `${months[getMonth(this.date)]} ${getYear(this.date)}` : this.label
    }

    addMonth(){
        let previousDate = this.date
        this.date = addMonths(this.date, 1)
        this.update(previousDate)
    }

    addYear(){
        let previousDate = this.date
        this.date = addYears(this.date, 1)
        this.update(previousDate)
    }

    minusMonth(){
        let previousDate = this.date
        this.date = subMonths(this.date, 1)
        this.update(previousDate)
    }

    minusYear(){
        let previousDate = this.date
        this.date = subYears(this.date, 1)
        this.update(previousDate)
    }

    setMonthAndYear(date:Date){
        const month = getMonth(date)
        const year = getYear(date)
        let previousDate = this.date
        this.date = setMonth(this.date, month)
        this.date = setYear(this.date, year)
        this.update(previousDate)
    }


    private update(previous:Date){
        this.year = getYear(this.date)
        this.month = getMonth(this.date)
        this.selectionChange.emit({
            previous, current: this.date
        })
        console.log(format(this.date, 'YYYY-MM'),this.year, this.month)
    }
}

export class CalendarMonthSelection {
    
    constructor(
        public needTwoMonthView:boolean,
        public from?: MonthSelection,
        public to?: MonthSelection,
        private _monthSelectionChange?:EventEmitter<{ previous: Date, current: Date }>
    ){
        let date = new Date()

        if(!from){
            this.from = new MonthSelection(
                date,
                getYear(date), 
                getMonth(date),
                this.monthSelectionChange
            )
        }

        if(!to){
            let nextMonth = addMonths(date, 1)
            this.to = new MonthSelection(
                nextMonth,
                getYear(nextMonth), 
                getMonth(nextMonth),
                this.monthSelectionChange
            )
        }
    }

    set monthSelectionChange(monthSelectionChange:EventEmitter<{ previous: Date, current: Date }>){
        this._monthSelectionChange = monthSelectionChange
        this.from.selectionChange = monthSelectionChange
        this.to.selectionChange = monthSelectionChange
    }

    get monthSelectionChange(){
        return this._monthSelectionChange
    }
}

