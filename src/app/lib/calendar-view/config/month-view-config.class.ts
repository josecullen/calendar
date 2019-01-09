export class MonthViewConfig {
    
    constructor(
        public hideWeekends:boolean = false,
        public hideDaysOutsideMonth:boolean = true,
        public showTwoCalendarIfNeed:boolean = false,
        public firstDay:number = 0
    ){}
    
}