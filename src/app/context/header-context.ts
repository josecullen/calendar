import { MonthSelection } from '../lib/calendar-view/calendar-month-selection.class';

export class HeaderContext {
    monthLabels: string[]
    monthIndex: number
    showTwoMonths: boolean
    linkedMonths: boolean
    monthSelections: MonthSelection[]
    showChangeYearButton: boolean
    showChangeMonthButton: boolean
    stylePrefix:string
}