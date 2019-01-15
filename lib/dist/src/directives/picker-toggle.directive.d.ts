import { EventEmitter, TemplateRef, ElementRef, SimpleChanges } from "@angular/core";
import { PickerService } from '../modules/picker/picker.service';
import { DatepickerData } from '../components/datepicker/datepicker.component';
import { CalendarSelection } from '../lib/calendar-view/selection/calendar-selection.class';
import { CellData } from '../cell-data';
export declare class PickerToggleDirective {
    private elementRef;
    private pickerService;
    private datepicker;
    monthRef: TemplateRef<any>;
    config: DatepickerData;
    dates: CellData<any>[];
    selectionChange: EventEmitter<CalendarSelection>;
    monthSelectionChange: EventEmitter<{
        previous: Date;
        current: Date;
    }>;
    close: EventEmitter<any>;
    toggle(): void;
    ngOnChanges(changes: SimpleChanges): void;
    constructor(elementRef: ElementRef<any>, pickerService: PickerService);
}
