import { CalendarHeaderConfig } from './header-config.class';
import { MonthConfig } from './month-config.class';

export class CalendarConfig {

    constructor(
        public header: CalendarHeaderConfig = new CalendarHeaderConfig(),
        public month: MonthConfig = new MonthConfig()
    ) {

    }

}
