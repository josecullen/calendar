import { CalendarHeaderConfig } from './header-config.class';
import { CalendarConfig } from '../../calendar/config/calendar-config.class';
import { MonthViewConfig } from './month-view-config.class';

export class CalendarViewConfig extends CalendarConfig {

    constructor(
        public header:CalendarHeaderConfig = new CalendarHeaderConfig(),
        public month:MonthViewConfig = new MonthViewConfig()
    ){
        super(header, month)
    }

}