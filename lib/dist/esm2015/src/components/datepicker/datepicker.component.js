/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, ViewChild, TemplateRef, HostBinding, ViewEncapsulation, HostListener } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { parse, addMonths } from 'date-fns';
import { PickerOverlayRef } from '../../modules/picker/picker-overlay-ref';
import { PICKER_DATA } from '../../modules/picker/injection-tokens';
import { CalendarViewConfig } from '../../lib/calendar-view/config/calendar-view-config.class';
export class DatepickerComponent {
    /**
     * @param {?} pickerRef
     * @param {?} data
     * @param {?} calendarRef
     */
    constructor(pickerRef, data, calendarRef) {
        this.pickerRef = pickerRef;
        this.data = data;
        this.calendarRef = calendarRef;
        this.preventClose = false;
        this.data.calendarConfig = Object.assign(DEFAULT_DATEPICKER_DATA.calendarConfig, data.calendarConfig);
        this.data.stylePrefix = data.stylePrefix || DEFAULT_DATEPICKER_DATA.stylePrefix;
        this.data.dates = data.dates || DEFAULT_DATEPICKER_DATA.dates;
        this.data.datesSelected = data.datesSelected || DEFAULT_DATEPICKER_DATA.datesSelected;
    }
    /**
     * @return {?}
     */
    get classes() {
        return `${this.data.stylePrefix}-datepicker`;
    }
    /**
     * @return {?}
     */
    onEnter() {
        this.close();
    }
    /**
     * @return {?}
     */
    close() {
        this.pickerRef.close();
    }
    /**
     * @param {?} selection
     * @return {?}
     */
    onSelectionChange(selection) {
        if (!this.preventClose) {
            switch (this.calendar.config.selection) {
                case 'simple':
                    setTimeout(() => {
                        this.pickerRef.close({
                            form: selection.from(),
                            to: undefined,
                            selectedDates: selection.selectedDates,
                        });
                    }, 600);
                    break;
                case 'range':
                    if (selection.to()) {
                        setTimeout(() => {
                            this.pickerRef.close({
                                from: selection.from(),
                                to: selection.to(),
                                selectedDates: selection.selectedDates
                            });
                        }, 600);
                    }
                    break;
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.preventClose = true;
        this.data.datesSelected.forEach(date => this.calendar.selection.change(date));
        if (this.data.datesSelected.length) {
            setTimeout(() => {
                /** @type {?} */
                const from = parse(this.data.datesSelected[0]);
                this.calendar.selection.calendarMonthView.from.setMonthAndYear(from);
                this.calendar.selection.calendarMonthView.to.setMonthAndYear(addMonths(from, 1));
                this.calendar.cdr.markForCheck();
            });
        }
        setTimeout(() => {
            this.preventClose = false;
        });
    }
}
DatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'trb-datepicker',
                template: "<i class=\"trb-button-close\" (click)=\"close()\"></i>\n<trb-calendar\n    #calendar\n    [dates]=\"data.dates\"\n    [config]=\"data.calendarConfig\"\n    (selectionChange)=\"onSelectionChange($event)\"\n    [monthTemplate]=\"calendarRef\">\n</trb-calendar>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".trb-datepicker{margin-top:8px;padding:16px;border-radius:2px;background:#fff;box-shadow:0 2px 8px 0 #ccc}.trb-button-close{display:none}@media (max-width:550px){.trb-datepicker{margin-top:0}.trb-button-close{display:inherit}}"]
            }] }
];
/** @nocollapse */
DatepickerComponent.ctorParameters = () => [
    { type: PickerOverlayRef },
    { type: undefined, decorators: [{ type: Inject, args: [PICKER_DATA,] }] },
    { type: TemplateRef }
];
DatepickerComponent.propDecorators = {
    classes: [{ type: HostBinding, args: ['class',] }],
    calendar: [{ type: ViewChild, args: [CalendarComponent,] }],
    onEnter: [{ type: HostListener, args: ['input.enter',] }]
};
if (false) {
    /** @type {?} */
    DatepickerComponent.prototype.calendar;
    /**
     * @type {?}
     * @private
     */
    DatepickerComponent.prototype.preventClose;
    /**
     * @type {?}
     * @private
     */
    DatepickerComponent.prototype.pickerRef;
    /** @type {?} */
    DatepickerComponent.prototype.data;
    /** @type {?} */
    DatepickerComponent.prototype.calendarRef;
}
/**
 * @record
 */
export function DatepickerData() { }
if (false) {
    /** @type {?|undefined} */
    DatepickerData.prototype.calendarConfig;
    /** @type {?|undefined} */
    DatepickerData.prototype.datesSelected;
    /** @type {?|undefined} */
    DatepickerData.prototype.dates;
    /** @type {?|undefined} */
    DatepickerData.prototype.stylePrefix;
}
/** @type {?} */
export const DEFAULT_DATEPICKER_DATA = {
    calendarConfig: CalendarViewConfig.from({
        selection: 'range'
    }),
    datesSelected: [],
    dates: [],
    stylePrefix: 'trb'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQWlCLFdBQVcsRUFDdEMsV0FBVyxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFDL0QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBUy9GLE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQU85QixZQUNVLFNBQWdELEVBQzVCLElBQW9CLEVBQ3pDLFdBQTZCO1FBRjVCLGNBQVMsR0FBVCxTQUFTLENBQXVDO1FBQzVCLFNBQUksR0FBSixJQUFJLENBQWdCO1FBQ3pDLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQVc5QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQVQzQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSx1QkFBdUIsQ0FBQyxXQUFXLENBQUM7UUFDaEYsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcs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QW9CcEIsTUFBTSxTQUFDLFdBQVc7WUExQndCLFdBQVc7OztzQkFtQnZELFdBQVcsU0FBQyxPQUFPO3VCQWdCbkIsU0FBUyxTQUFDLGlCQUFpQjtzQkFLM0IsWUFBWSxTQUFDLGFBQWE7Ozs7SUFMM0IsdUNBQzRCOzs7OztJQUU1QiwyQ0FBNkI7Ozs7O0lBYjNCLHdDQUF3RDs7SUFDeEQsbUNBQWdEOztJQUNoRCwwQ0FBb0M7Ozs7O0FBNkV4QyxvQ0FLQzs7O0lBSkMsd0NBQW9DOztJQUNwQyx1Q0FBeUI7O0lBQ3pCLCtCQUF3Qjs7SUFDeEIscUNBQXFCOzs7QUFHdkIsTUFBTSxPQUFPLHVCQUF1QixHQUFtQjtJQUNyRCxjQUFjLEVBQUUsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1FBQ3RDLFNBQVMsRUFBRSxPQUFPO0tBQ25CLENBQUM7SUFDRixhQUFhLEVBQUUsRUFBRTtJQUNqQixLQUFLLEVBQUUsRUFBRTtJQUNULFdBQVcsRUFBRSxLQUFLO0NBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgVGVtcGxhdGVSZWYsXG4gIEFmdGVyQ29udGVudEluaXQsIEhvc3RCaW5kaW5nLCBWaWV3RW5jYXBzdWxhdGlvbiwgSG9zdExpc3RlbmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuLi9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgcGFyc2UsIGFkZE1vbnRocyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IENhbGVuZGFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvc2VsZWN0aW9uL2NhbGVuZGFyLXNlbGVjdGlvbi5jbGFzcyc7XG5pbXBvcnQgeyBQaWNrZXJPdmVybGF5UmVmIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9waWNrZXIvcGlja2VyLW92ZXJsYXktcmVmJztcbmltcG9ydCB7IFBJQ0tFUl9EQVRBIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9waWNrZXIvaW5qZWN0aW9uLXRva2Vucyc7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXdDb25maWcgfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9jb25maWcvY2FsZW5kYXItdmlldy1jb25maWcuY2xhc3MnO1xuaW1wb3J0IHsgQ2VsbERhdGEgfSBmcm9tICcuLi8uLi9jZWxsLWRhdGEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmItZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0IHtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuZGF0YS5zdHlsZVByZWZpeH0tZGF0ZXBpY2tlcmA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBpY2tlclJlZjogUGlja2VyT3ZlcmxheVJlZjxEYXRlcGlja2VyQ29tcG9uZW50PixcbiAgICBASW5qZWN0KFBJQ0tFUl9EQVRBKSBwdWJsaWMgZGF0YTogRGF0ZXBpY2tlckRhdGEsXG4gICAgcHVibGljIGNhbGVuZGFyUmVmOiBUZW1wbGF0ZVJlZjxhbnk+XG4gICkge1xuICAgIHRoaXMuZGF0YS5jYWxlbmRhckNvbmZpZyA9IE9iamVjdC5hc3NpZ24oREVGQVVMVF9EQVRFUElDS0VSX0RBVEEuY2FsZW5kYXJDb25maWcsIGRhdGEuY2FsZW5kYXJDb25maWcpO1xuICAgIHRoaXMuZGF0YS5zdHlsZVByZWZpeCA9IGRhdGEuc3R5bGVQcmVmaXggfHwgREVGQVVMVF9EQVRFUElDS0VSX0RBVEEuc3R5bGVQcmVmaXg7XG4gICAgdGhpcy5kYXRhLmRhdGVzID0gZGF0YS5kYXRlcyB8fCBERUZBVUxUX0RBVEVQSUNLRVJfREFUQS5kYXRlcztcbiAgICB0aGlzLmRhdGEuZGF0ZXNTZWxlY3RlZCA9IGRhdGEuZGF0ZXNTZWxlY3RlZCB8fCBERUZBVUxUX0RBVEVQSUNLRVJfREFUQS5kYXRlc1NlbGVjdGVkO1xuXG4gIH1cbiAgQFZpZXdDaGlsZChDYWxlbmRhckNvbXBvbmVudClcbiAgY2FsZW5kYXI6IENhbGVuZGFyQ29tcG9uZW50O1xuXG4gIHByaXZhdGUgcHJldmVudENsb3NlID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQuZW50ZXInKVxuICBvbkVudGVyKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMucGlja2VyUmVmLmNsb3NlKCk7XG4gIH1cblxuICBvblNlbGVjdGlvbkNoYW5nZShzZWxlY3Rpb246IENhbGVuZGFyU2VsZWN0aW9uKSB7XG4gICAgaWYgKCF0aGlzLnByZXZlbnRDbG9zZSkge1xuICAgICAgc3dpdGNoICh0aGlzLmNhbGVuZGFyLmNvbmZpZy5zZWxlY3Rpb24pIHtcbiAgICAgICAgY2FzZSAnc2ltcGxlJzpcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGlja2VyUmVmLmNsb3NlKHtcbiAgICAgICAgICAgICAgZm9ybTogc2VsZWN0aW9uLmZyb20oKSxcbiAgICAgICAgICAgICAgdG86IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXRlczogc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCA2MDApO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAgICBpZiAoc2VsZWN0aW9uLnRvKCkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnBpY2tlclJlZi5jbG9zZSh7XG4gICAgICAgICAgICAgICAgZnJvbTogc2VsZWN0aW9uLmZyb20oKSxcbiAgICAgICAgICAgICAgICB0bzogc2VsZWN0aW9uLnRvKCksXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWREYXRlczogc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXNcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCA2MDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucHJldmVudENsb3NlID0gdHJ1ZTtcblxuICAgIHRoaXMuZGF0YS5kYXRlc1NlbGVjdGVkLmZvckVhY2goZGF0ZSA9PiB0aGlzLmNhbGVuZGFyLnNlbGVjdGlvbi5jaGFuZ2UoZGF0ZSkpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5kYXRlc1NlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZyb20gPSBwYXJzZSh0aGlzLmRhdGEuZGF0ZXNTZWxlY3RlZFswXSk7XG4gICAgICAgIHRoaXMuY2FsZW5kYXIuc2VsZWN0aW9uLmNhbGVuZGFyTW9udGhWaWV3LmZyb20uc2V0TW9udGhBbmRZZWFyKGZyb20pO1xuICAgICAgICB0aGlzLmNhbGVuZGFyLnNlbGVjdGlvbi5jYWxlbmRhck1vbnRoVmlldy50by5zZXRNb250aEFuZFllYXIoYWRkTW9udGhzKGZyb20sIDEpKTtcbiAgICAgICAgdGhpcy5jYWxlbmRhci5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucHJldmVudENsb3NlID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZXBpY2tlckRhdGEge1xuICBjYWxlbmRhckNvbmZpZz86IENhbGVuZGFyVmlld0NvbmZpZztcbiAgZGF0ZXNTZWxlY3RlZD86IHN0cmluZ1tdO1xuICBkYXRlcz86IENlbGxEYXRhPGFueT5bXTtcbiAgc3R5bGVQcmVmaXg/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0RBVEVQSUNLRVJfREFUQTogRGF0ZXBpY2tlckRhdGEgPSB7XG4gIGNhbGVuZGFyQ29uZmlnOiBDYWxlbmRhclZpZXdDb25maWcuZnJvbSh7XG4gICAgc2VsZWN0aW9uOiAncmFuZ2UnXG4gIH0pLFxuICBkYXRlc1NlbGVjdGVkOiBbXSxcbiAgZGF0ZXM6IFtdLFxuICBzdHlsZVByZWZpeDogJ3RyYidcbn07XG4iXX0=