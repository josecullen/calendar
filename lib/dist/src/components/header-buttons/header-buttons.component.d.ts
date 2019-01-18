import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
export declare class CalendarHeaderButtonsComponent implements OnChanges {
    type: 'back' | 'forward';
    showChangeYearButton: boolean;
    showChangeMonthButton: boolean;
    stylePrefix: string;
    yearClick: EventEmitter<{}>;
    monthClick: EventEmitter<{}>;
    leftArrowClasses: string;
    rightArrowClasses: string;
    ngOnChanges(changes: SimpleChanges): void;
}
