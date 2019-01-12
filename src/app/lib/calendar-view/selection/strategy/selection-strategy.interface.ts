import { ICalendarSelection } from '../calendar-selection.interface';
import { getYear,  getMonth, addMonths, format, addYears, subMonths, subYears } from 'date-fns';

export interface ISelectionStrategy {
    calendarMonthView:CalendarMonthViewSelection
    
    change(date: string, selection?:ICalendarSelection): void

    isSelected(date:string, selection?:ICalendarSelection): boolean

    isInRange(date:string, selection?:ICalendarSelection): boolean
    
}

export class CalendarMonthView {
    
    constructor(
        public date:Date,
        public year: number,
        public month: number
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


    private update(previousDate){
        this.year = getYear(this.date)
        this.month = getMonth(this.date)
        console.log(format(this.date, 'YYYY-MM'),this.year, this.month)
    }
}

export class CalendarMonthViewSelection {
    
    constructor(
        public needTwoMonthView:boolean,
        public from?: CalendarMonthView,
        public to?: CalendarMonthView   
    ){
        let date = new Date()

        if(!from){
            this.from = new CalendarMonthView(
                date,
                getYear(date), 
                getMonth(date)
            )
        }

        if(!to){
            let nextMonth = addMonths(date, 1)
            this.to = new CalendarMonthView(
                nextMonth,
                getYear(nextMonth), 
                getMonth(nextMonth)
            )
        }
    }
}

