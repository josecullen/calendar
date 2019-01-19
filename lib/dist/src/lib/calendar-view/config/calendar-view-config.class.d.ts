import { CalendarHeaderConfig, ICalendarHeaderConfig } from './header-config.class';
import { CalendarConfig } from '../../calendar/config/calendar-config.class';
import { MonthViewConfig } from './month-view-config.class';
import { IMonthViewConfig } from './month-view-config.interface';
export declare class CalendarViewConfig extends CalendarConfig {
    header: CalendarHeaderConfig;
    month: MonthViewConfig;
    selection: 'simple' | 'picked' | 'range';
    stylePrefix: string;
    filterDates?: (date: Date) => boolean;
    constructor(header?: CalendarHeaderConfig, month?: MonthViewConfig, selection?: 'simple' | 'picked' | 'range', stylePrefix?: string, filterDates?: (date: Date) => boolean);
    static from(config: ICalendarViewConfig): CalendarViewConfig;
    private static copyObject;
    private static assign;
}
export declare class ICalendarViewConfig {
    header?: ICalendarHeaderConfig;
    month?: IMonthViewConfig;
    selection?: 'simple' | 'picked' | 'range';
    filterDates?: (date: Date) => boolean;
    stylePrefix?: string;
}
