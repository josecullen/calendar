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
    readonly classes: string;
    constructor(pickerRef: PickerOverlayRef<DatepickerComponent>, data: DatepickerData, calendarRef: TemplateRef<any>);
    calendar: CalendarComponent;
    private preventClose;
    onEnter(): void;
    close(): void;
    onSelectionChange(selection: CalendarSelection): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
}
export interface DatepickerData {
    calendarConfig?: CalendarViewConfig;
    datesSelected?: string[];
    dates?: CellData<any>[];
    stylePrefix?: string;
}
export declare const DEFAULT_DATEPICKER_DATA: DatepickerData;
