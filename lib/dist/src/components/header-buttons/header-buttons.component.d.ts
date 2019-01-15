import { EventEmitter } from "@angular/core";
export declare class CalendarHeaderButtonsComponent {
    type: 'back' | 'forward';
    showChangeYearButton: boolean;
    showChangeMonthButton: boolean;
    yearClick: EventEmitter<{}>;
    monthClick: EventEmitter<{}>;
}
