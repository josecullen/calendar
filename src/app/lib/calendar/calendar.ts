import * as fns from 'date-fns'
import { IYear } from './year/year.interface';
import { ICalendarFactory } from './factory/factory.interface';
import { CalendarDefaultFactory } from './factory/default-factory';
import { IMonth } from './month/month.interface';
import { IDay } from './day/day.interface';
import { CalendarConfig } from './config/calendar-config.class';

export class Calendar {

    private years:IYear[] = []

    constructor(
        public readonly factory:ICalendarFactory = new CalendarDefaultFactory(),
        public config:CalendarConfig = new CalendarConfig()
    ){}

    recalculate(){
        let _years = this.years.slice()

        this.years = []

        _years.map(year => this.getYear(year.value))
    }

    setDay(dateString:string, day:IDay){
        let date = new Date()
        let year = fns.getYear(date)
        let month = fns.getMonth(date)

        let selectedYear = this.getYear(year)
        let selectedMonth = selectedYear.getMonth(month)

        selectedMonth.setDay(day)
    }

    getYear(year:number):IYear {
        let currentYear = this.years.find(y => y.value === year)
        
        if(!currentYear){
            currentYear = this.factory.createYear(year, this)
            this.years.push(currentYear)
        }

        return currentYear
    }
    
    getCurrentYear():IYear {
        let year = fns.getYear(new Date())

        return this.getYear(year)
    }

    getPreviousMonth(currentMonth:IMonth):IMonth {
        let previousYear = this.getYear(currentMonth.year.value -1)
        
        let previousMonth = previousYear.months[11]
    
        return previousMonth
    }

    getNextMonth(currentMonth:IMonth):IMonth {
        let nextYear = this.getYear(currentMonth.year.value +1)
        
        let nextMonth = nextYear.months[0]
    
        return nextMonth
    }


}