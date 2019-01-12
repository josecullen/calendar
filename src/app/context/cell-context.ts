import { CellData } from '../cell-data';
import { CalendarMonthView } from '../lib/calendar-view/selection/strategy/selection-strategy.interface';
import { ICalendarSelection } from '../lib/calendar-view/selection/calendar-selection.interface';

export class CellContext<T> extends CellData<T>{
    stylePrefix:string
    selection:ICalendarSelection
    monthSelection:CalendarMonthView
    hideDaysOutsideMonth:boolean

    constructor(date:string, payload:T, selected?:boolean){
        super(date, payload, selected)
    }

    static from<T>(cellData:CellData<T>, fields:any):CellContext<T> {
        let context = new CellContext(cellData.date, cellData.payload, cellData.selected)

        Object.keys(fields).forEach(key => {
            context[key] = fields[key]
        })

        return context
    }
}