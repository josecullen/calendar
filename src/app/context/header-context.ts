import { CalendarMonthView } from '../lib/calendar-view/selection/strategy/selection-strategy.interface';


export class HeaderContext {
    monthLabels: string[]
    monthIndex: number
    showTwoMonths: boolean
    linkedMonths: boolean
    monthSelections: CalendarMonthView[]
}