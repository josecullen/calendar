import { IMonthViewConfig } from './month-view-config.interface';

export class MonthViewConfig implements IMonthViewConfig {
    
    constructor(
        public hideWeekends:boolean = false,
        public hideDaysOutsideMonth:boolean = true,
        public showTwoCalendarIfNeed:boolean = false,
        public firstDay:number = 0,
        public monthLabels:string[] = [],
        public dayLabels:string[] = [],
        public dayLength:number = 3,
        public showChangeYearButton: boolean = true,
        public showChangeMonthButton: boolean = true

    ){}
    
}