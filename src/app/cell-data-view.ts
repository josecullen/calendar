import { CellStyleClasses } from './lib/calendar-view/cell-style-classes.class';
import { CellData } from './cell-data';
import { CalendarSelection } from './lib/calendar-view/selection/calendar-selection.class';
import { CalendarMonthView } from './lib/calendar-view/selection/strategy/selection-strategy.interface';

export class CellViewData<T> extends CellData<T>{
    cellStyleClasses:CellStyleClasses
    selection:CalendarSelection
    monthSelection:CalendarMonthView
    hideDaysOutsideMonth:boolean
}