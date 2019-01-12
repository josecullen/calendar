import { CalendarMonthView } from '../lib/calendar-view/selection/strategy/selection-strategy.interface';
import { Calendar } from '../lib/calendar/calendar';
import { CalendarSelection } from '../lib/calendar-view/selection/calendar-selection.class';
import { CalendarConfig } from '../lib/calendar/config/calendar-config.class';
import { CellStyleClasses } from '../lib/calendar-view/cell-style-classes.class';


export class MonthContext {
    index: number
    calendar: Calendar
    selection: CalendarSelection
    config: CalendarConfig
    monthSelection: CalendarMonthView
    cellStyleClasses: CellStyleClasses
}