import { IMonth } from '../month/month.interface';
import { Calendar } from '../calendar';
import { 
    addMonths,
    addHours,
    startOfMonth
 } from 'date-fns'
import { IYear } from './year.interface';


export class Year implements IYear {
    readonly months:IMonth[] = []

    constructor(public readonly value: number, public readonly calendar:Calendar){
        let date = addHours(new Date(`${value}-01-01`), 12)
        
        this.months.push(this.calendar.factory.createMonth(date, this, calendar))

        for(let m = 0; m < 12; m++){
            date = startOfMonth(addMonths(date, 1))
            this.months.push(this.calendar.factory.createMonth(date, this, calendar))
        }
    }

    previousMonth(currentMonth:IMonth):IMonth {
        let previousMonth:IMonth

        if(currentMonth.ofYear > 0){
            previousMonth = currentMonth.year.months[currentMonth.ofYear -1]
        } else {
            previousMonth = this.calendar.getPreviousMonth(currentMonth)
        }

        return previousMonth
    }

    nextMonth(currentMonth:IMonth):IMonth {
        let nextMonth:IMonth

        if(currentMonth.ofYear < 11){
            nextMonth = currentMonth.year.months[currentMonth.ofYear +1]
        } else {
            nextMonth = this.calendar.getNextMonth(currentMonth)
        }

        return nextMonth
    }

    getMonth(month:number):IMonth {
        return this.months[month]
    }

}
