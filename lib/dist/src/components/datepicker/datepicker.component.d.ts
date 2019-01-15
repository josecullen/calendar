import { AfterViewInit, TemplateRef, AfterContentInit } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { CalendarSelection } from '../../lib/calendar-view/selection/calendar-selection.class';
import { PickerOverlayRef } from '../../modules/picker/picker-overlay-ref';
import { CalendarViewConfig } from '../../lib/calendar-view/config/calendar-view-config.class';
import { CellData } from '../../cell-data';
export declare class DatepickerComponent implements AfterViewInit, AfterContentInit {
    private pickerRef;
    data: DatepickerData;
    calendarRef: TemplateRef<any>;
    calendar: CalendarComponent;
    readonly classes: string;
    private preventClose;
    onSelectionChange(selection: CalendarSelection): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    constructor(pickerRef: PickerOverlayRef<DatepickerComponent>, data: DatepickerData, calendarRef: TemplateRef<any>);
}
export interface DatepickerData {
    calendarConfig?: CalendarViewConfig;
    datesSelected?: string[];
    dates?: CellData<any>[];
    stylePrefix?: string;
}
export declare const DEFAULT_DATEPICKER_DATA: DatepickerData;
