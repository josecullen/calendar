import { Calendar } from '../lib/calendar/calendar';
import { CalendarSelection } from '../lib/calendar-view/selection/calendar-selection.class';
import { CalendarViewConfig } from '../lib/calendar-view/config/calendar-view-config.class';
import { MonthSelection } from '../lib/calendar-view/calendar-month-selection.class';

export class MonthContext {
    index: number;
    calendar: Calendar;
    selection: CalendarSelection;
    config: CalendarViewConfig;
    monthSelection: MonthSelection;
}
