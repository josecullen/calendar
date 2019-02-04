import { EventEmitter, Directive, HostListener, Input, TemplateRef, ElementRef, Output, SimpleChanges, OnChanges } from '@angular/core';
import { PickerService } from '../modules/picker/picker.service';
import { DatepickerData, DatepickerComponent, DEFAULT_DATEPICKER_DATA } from '../components/datepicker/datepicker.component';

import { CalendarSelection } from '../lib/calendar-view/selection/calendar-selection.class';
import { CellData } from '../cell-data';


@Directive({
    selector: '[trb-datepicker-toggle]'
})
export class PickerToggleDirective implements OnChanges {
    private datepicker: DatepickerComponent;

    @Input('trb-datepicker-toggle')
    monthRef: TemplateRef<any>;

    @Input()
    config: DatepickerData = DEFAULT_DATEPICKER_DATA;

    @Input()
    dates: CellData<any>[];

    @Output()
    selectionChange: EventEmitter<CalendarSelection> = new EventEmitter();

    @Output()
    monthSelectionChange: EventEmitter<{ previous: Date, current: Date }> = new EventEmitter();

    @Output()
    close: EventEmitter<any> = new EventEmitter();

    @HostListener('click')
    toggle() {

        const ref = this.pickerService.open({
            data: this.config
        }, this.elementRef, DatepickerComponent, this.monthRef);

        this.datepicker = ref.instance;

        ref.instance.calendar.selectionChange.subscribe(data => this.selectionChange.emit(data));
        ref.instance.calendar.monthSelectionChange.subscribe(data => this.monthSelectionChange.emit(data));

        // this.monthSelectionChange = ref.instance.calendar.monthSelectionChange
        ref.subscribe(result => {
            this.close.emit(result);
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        const datesChange = changes['dates'];

        if (datesChange && this.dates && this.datepicker) {
            this.datepicker.data.dates = this.dates;
        }
    }




    constructor(
        private elementRef: ElementRef<any>,
        private pickerService: PickerService) {
    }

}
