import { CellData } from '../cell-data';
import { ICalendarSelection } from '../lib/calendar-view/selection/calendar-selection.interface';
import { MonthSelection } from '../lib/calendar-view/calendar-month-selection.class';

export class CellContext<T> extends CellData<T>{
    stylePrefix:string
    selection:ICalendarSelection
    monthSelection:MonthSelection
    hideDaysOutsideMonth:boolean

    constructor(date:string, payload:T, selected?:boolean, disabled?:boolean){
        super(date, payload, selected, disabled)
    }

    static from<T>(cellData:CellData<T>, fields:any):CellContext<T> {
        let context = new CellContext(cellData.date, cellData.payload, cellData.selected, cellData.disabled)

        Object.keys(fields).forEach(key => {
            context[key] = fields[key]
        })

        return context
    }
}