import { OnChanges, SimpleChanges, EventEmitter, DoCheck, OnInit } from '@angular/core';
import { Calendar } from '../../lib/calendar/calendar';
import { IDay } from '../../lib/calendar/day/day.interface';
import { CalendarSelection } from '../../lib/calendar-view/selection/calendar-selection.class';
import { CalendarViewConfig } from '../../lib/calendar-view/config/calendar-view-config.class';
import { MonthContext } from '../../context/month-context';
import { CellData } from '../../cell-data';
import { CalendarMonthDirective } from '../../directives/calendar-month.directive';
export declare class CalendarComponent implements OnChanges, DoCheck, OnInit {
    selection: CalendarSelection;
    dates: CellData<any>[];
    config: CalendarViewConfig;
    selectionChange: EventEmitter<CalendarSelection>;
    monthSelectionChange: EventEmitter<{
        previous: Date;
        current: Date;
    }>;
    monthTemplate: any;
    calendarMonth: CalendarMonthDirective;
    calendar: Calendar;
    readonly classes: string;
    ngDoCheck(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    updateSelection(): void;
    cellClicked(data: CellData<any>): void;
    getPayload(date: IDay): any;
    dateIncluded(date: string): boolean;
    singleSelection(): void;
    rangeSelection(): void;
    pickSelection(): void;
    getMonthContext(monthIndex: number): MonthContext;
}
