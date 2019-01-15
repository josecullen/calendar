export class MonthConfig {

    constructor(
        public hideWeekends: boolean = false,
        public hideDaysOutsideMonth: boolean = true,
        public firstDay: number = 0,
        public showTwoCalendarIfNeed: boolean = false,
    ) {}


}
