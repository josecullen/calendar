import { Component, Inject, ViewChild, AfterViewInit, TemplateRef, AfterContentInit } from "@angular/core";
import { PickerOverlayRef } from 'src/app/modules/picker/picker-overlay-ref';
import { PICKER_DATA } from 'src/app/modules/picker/injection-tokens';
import { CalendarViewConfig } from 'src/app/lib/calendar-view/config/calendar-view-config.class';
import { CalendarSelection } from 'src/app/lib/calendar-view/selection/calendar-selection.class';
import { CalendarComponent } from '../calendar/calendar.component';
import { RangeSelectionStrategy } from 'src/app/lib/calendar-view/selection/strategy/range-selection.strategy';
import { CellDataPayload } from 'src/app/app.component';



@Component({
    selector: 'datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements AfterViewInit, AfterContentInit {
    @ViewChild(CalendarComponent)
    calendar: CalendarComponent

    private preventClose = false

    onSelectionChange(selection: CalendarSelection) {
        if (!!selection.to() && !this.preventClose) {
            setTimeout(() => {
                this.pickerRef.close({
                    from: selection.from(),
                    to: selection.to(),
                    selectedDates: selection.selectedDates
                })
            }, 600)
        }
    }

    ngAfterContentInit(){
        
    }

    ngAfterViewInit() {
        // setTimeout(() => {
        this.preventClose = true
        this.data.datesSelected.forEach(date => this.calendar.selection.change(date))
        
        setTimeout(() => {
            this.preventClose = false
        })
        // })
    }

    constructor(
        private pickerRef: PickerOverlayRef<DatepickerComponent>,
        @Inject(PICKER_DATA) public data: DatepickerData,
        public calendarRef: TemplateRef<any>
    ) {
        console.log(this.data.calendarConfig.month)
        this.data.calendarConfig = Object.assign(DEFAULT_DATEPICKER_DATA.calendarConfig, data.calendarConfig)
        // { ...DEFAULT_DATEPICKER_DATA.calendarConfig, ...data.calendarConfig }

        console.log(this.data)
        this.data.dates = data.dates || DEFAULT_DATEPICKER_DATA.dates
        this.data.datesSelected = data.datesSelected || DEFAULT_DATEPICKER_DATA.datesSelected

    }
}



export interface DatepickerData {
    calendarConfig?: CalendarViewConfig,
    datesSelected?: string[]
    dates?: CellDataPayload[]
}

export const DEFAULT_DATEPICKER_DATA: DatepickerData = {
    calendarConfig: CalendarViewConfig.from({
        selection: 'range'
    }),
    datesSelected: [],
    dates: []
}