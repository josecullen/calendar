export class CalendarHeaderConfig {
    constructor(
        public linkedMonths:boolean = true,
        public pastMonths:boolean = true
    ){

    }
}

export interface ICalendarHeaderConfig {
    linkedMonths?:boolean
    pastMonths?:boolean
}