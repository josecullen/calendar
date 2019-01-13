import { IMonth } from './month.interface';
import { 
    getMonth,  
    getDaysInMonth,
    format,
    addDays
 } from 'date-fns'
import { IYear } from '../year/year.interface';
import { Calendar } from '../calendar';
import { IDay } from '../day/day.interface';


export class Month implements IMonth {
    private static readonly DAYS_IN_CALENDAR_VIEW = 35
    public readonly name: string
    public readonly ofYear:number
    public readonly days: IDay[] = []
    
    constructor(private date:Date, public readonly year:IYear, public readonly calendar:Calendar){
        this.ofYear = getMonth(date)
        this.name = format(date, 'MMMM')
        
        this.days.push(calendar.factory.createDay(date))

        for(let d = 0; d < getDaysInMonth(date)-1; d++){
            date = addDays(date, 1)
            this.days.push(calendar.factory.createDay(date))
        }
    }

    setDay(day:IDay): void{
        let dayIndex = this.days.findIndex(d => d.date === day.date)

        if(dayIndex >= 0){
            this.days.splice(dayIndex, 1, day)
        }
        console.log(day.disabled)
    }

    getCalendarView():IDay[][] {
        let days = this.days.slice()
        const firstDayOfMonth = this.days[0].dayOfWeek
        const monthConfig = this.calendar.config.month
        
        if(firstDayOfMonth !== monthConfig.firstDay){
            const previousMonth = this.year.previousMonth(this)
            let previousDays = previousMonth.days.slice(
                previousMonth.days.length - (((firstDayOfMonth - monthConfig.firstDay) + 7) % 7), 
                previousMonth.days.length)

            days = previousDays.concat(days)
        }

        if(days.length < Month.DAYS_IN_CALENDAR_VIEW){
            const nextMonth = this.year.nextMonth(this)
            let forwardDays = nextMonth.days.slice(0, Month.DAYS_IN_CALENDAR_VIEW - days.length)

            days = days.concat(forwardDays)
        } else if(days.length > Month.DAYS_IN_CALENDAR_VIEW){
            const nextMonth = this.year.nextMonth(this)
            let forwardDays = nextMonth.days.slice(0, (Month.DAYS_IN_CALENDAR_VIEW + 7) - days.length)

            days = days.concat(forwardDays)
        }

        return days.reduce((acc:IDay[][], curr:IDay, i:number) => {

            if(curr.dayOfWeek === monthConfig.firstDay || i === 0){
                acc.push([])
            }

            if((!monthConfig.hideWeekends || !curr.isWeekend) && acc[acc.length-1]){
                acc[acc.length-1].push(curr)
            }              

            return acc
        }, new Array<Array<IDay>>())

    }



    
}