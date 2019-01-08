import { IMonthViewConfig } from './month-view-config.interface';

export class MonthViewConfig implements IMonthViewConfig {
    
    constructor(
        public hideWeekends:boolean = false,
        public hideDaysOutsideMonth:boolean = false,
        public firstDay:number = 0
    ){}

    // get hideWeekends():boolean { return this._hideWeekends }
    // get hideDaysOutsideMonth():boolean { return this._hideDaysOutsideMonth }
    // get startAtMonday():boolean { return this._startAtMonday }

    
}