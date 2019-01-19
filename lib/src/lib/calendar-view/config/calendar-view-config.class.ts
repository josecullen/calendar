import { CalendarHeaderConfig, ICalendarHeaderConfig } from './header-config.class';
import { CalendarConfig } from '../../calendar/config/calendar-config.class';
import { MonthViewConfig } from './month-view-config.class';
import { IMonthViewConfig } from './month-view-config.interface';

export class CalendarViewConfig extends CalendarConfig {

    constructor(
        public header: CalendarHeaderConfig = new CalendarHeaderConfig(),
        public month: MonthViewConfig = new MonthViewConfig(),
        public selection: 'simple' | 'picked' | 'range' = 'simple',
        public stylePrefix: string = 'trb',
        public filterDates?: (date: Date) => boolean,
    ) {
        super(header, month);
    }

    static from(config: ICalendarViewConfig): CalendarViewConfig {
        const conf = this.copyObject(config, new CalendarViewConfig());
        return conf;
    }

    private static copyObject(from: any, to: any): CalendarViewConfig {

        to = Object.assign({}, to);

        Object.keys(from).forEach(key => {
            this.assign(from[key], to, key);
        });

        return to;
    }

    private static assign(value, target, key) {
        if (value instanceof Array || value instanceof Function) {
            target[key] = value;
        } else if (value instanceof Object) {
            target[key] = this.copyObject(value, target[key]);
        } else {
            target[key] = value;
        }
    }

}

export class ICalendarViewConfig {
    header?: ICalendarHeaderConfig;
    month?: IMonthViewConfig;
    selection?: 'simple' | 'picked' | 'range';
    filterDates?: (date: Date) => boolean;
    stylePrefix?: string;
}
