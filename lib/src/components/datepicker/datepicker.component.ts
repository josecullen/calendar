import { Component, Inject, ViewChild, AfterViewInit, TemplateRef,
  AfterContentInit, HostBinding, ViewEncapsulation } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { parse, addMonths } from 'date-fns';
import { CalendarSelection } from '../../lib/calendar-view/selection/calendar-selection.class';
import { PickerOverlayRef } from '../../modules/picker/picker-overlay-ref';
import { PICKER_DATA } from '../../modules/picker/injection-tokens';
import { CalendarViewConfig } from '../../lib/calendar-view/config/calendar-view-config.class';
import { CellData } from '../../cell-data';

@Component({
    selector: 'trb-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DatepickerComponent implements AfterViewInit, AfterContentInit {
    @ViewChild(CalendarComponent)
    calendar: CalendarComponent;

    @HostBinding('class')
    get classes() {
        return `${this.data.stylePrefix}-datepicker`;
    }

    private preventClose = false;

    onSelectionChange(selection: CalendarSelection) {
        if (!!selection.to() && !this.preventClose) {
            setTimeout(() => {
                this.pickerRef.close({
                    from: selection.from(),
                    to: selection.to(),
                    selectedDates: selection.selectedDates
                });
            }, 600);
        }
    }

    ngAfterContentInit() {

    }

    ngAfterViewInit() {
        // setTimeout(() => {
        this.preventClose = true;

        this.data.datesSelected.forEach(date => this.calendar.selection.change(date));

        if (this.data.datesSelected.length) {
            setTimeout(() => {
                const from = parse(this.data.datesSelected[0]);
                this.calendar.selection.calendarMonthView.from.setMonthAndYear(from);
                this.calendar.selection.calendarMonthView.to.setMonthAndYear(addMonths(from, 1));
            });
        }

        setTimeout(() => {
            this.preventClose = false;
        });
        // })
    }

    constructor(
        private pickerRef: PickerOverlayRef<DatepickerComponent>,
        @Inject(PICKER_DATA) public data: DatepickerData,
        public calendarRef: TemplateRef<any>
    ) {
        this.data.calendarConfig = Object.assign(DEFAULT_DATEPICKER_DATA.calendarConfig, data.calendarConfig);
        this.data.stylePrefix = data.stylePrefix || DEFAULT_DATEPICKER_DATA.stylePrefix;
        this.data.dates = data.dates || DEFAULT_DATEPICKER_DATA.dates;
        this.data.datesSelected = data.datesSelected || DEFAULT_DATEPICKER_DATA.datesSelected;

    }
}



export interface DatepickerData {
    calendarConfig?: CalendarViewConfig;
    datesSelected?: string[];
    dates?: CellData<any>[];
    stylePrefix?: string;
}

export const DEFAULT_DATEPICKER_DATA: DatepickerData = {
    calendarConfig: CalendarViewConfig.from({
        selection: 'range'
    }),
    datesSelected: [],
    dates: [],
    stylePrefix : 'trb'
};
