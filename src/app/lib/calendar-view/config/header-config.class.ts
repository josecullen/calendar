export class CalendarHeaderConfig {
    constructor(
        public linkedMonths:boolean = true,
    ){

    }
}

export interface ICalendarHeaderConfig {
    linkedMonths?:boolean
}