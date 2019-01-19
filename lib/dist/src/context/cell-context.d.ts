import { ICalendarSelection } from '../lib/calendar-view/selection/calendar-selection.interface';
import { MonthSelection } from '../lib/calendar-view/calendar-month-selection.class';
import { CellData } from '../cell-data';
export declare class CellContext<T> extends CellData<T> {
    stylePrefix: string;
    selection: ICalendarSelection;
    monthSelection: MonthSelection;
    hideDaysOutsideMonth: boolean;
    filterDates: (date: Date) => boolean;
    constructor(date: string, payload: T, selected?: boolean, disabled?: boolean);
    static from<T>(cellData: CellData<T>, fields: any): CellContext<T>;
}
