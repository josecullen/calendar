import { CalendarHeaderConfig } from './header-config.class';
import { MonthConfig } from './month-config.class';
export declare class CalendarConfig {
    header: CalendarHeaderConfig;
    month: MonthConfig;
    constructor(header?: CalendarHeaderConfig, month?: MonthConfig);
}
