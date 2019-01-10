import { IMonthViewConfig } from './month-view-config.interface';

export class MonthViewConfig implements IMonthViewConfig {
    
    constructor(
        public hideWeekends:boolean = false,
        public hideDaysOutsideMonth:boolean = true,
        public showTwoCalendarIfNeed:boolean = false,
        public firstDay:number = 0
    ){}
    
}