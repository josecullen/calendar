import { OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { ICalendarSelection } from '../../lib/calendar-view/selection/calendar-selection.interface';
import { Calendar } from '../../lib/calendar/calendar';
import { CalendarViewConfig } from '../../lib/calendar-view/config/calendar-view-config.class';
import { CellContext } from '../../context/cell-context';
import { HeaderContext } from '../../context/header-context';
import { MonthContext } from '../../context/month-context';
import { MonthSelection } from '../../lib/calendar-view/calendar-month-selection.class';
import { CalendarCellDirective } from '../../directives/calendar-cell';
import { CalendarHeaderDirective } from '../../directives/calendar-header.directive';
import { CellData } from '../../cell-data';
export declare class CalendarMonthComponent implements OnChanges, OnInit {
    readonly classes: string;
    context: MonthContext;
    calendar: Calendar;
    index: number;
    selection: ICalendarSelection;
    monthSelection: MonthSelection;
    config: CalendarViewConfig;
    dayLabelsRowClass: any;
    rowClass: any;
    calendarCell: CalendarCellDirective;
    calendarHeader: CalendarHeaderDirective;
    ngOnInit(): void;
    getCellData(day: CellData<any>): CellContext<any>;
    getHeaderData(): HeaderContext;
    ngOnChanges(changes: SimpleChanges): void;
}
