/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, ViewChild, TemplateRef, HostBinding, ViewEncapsulation } from '@angular/core';
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
                template: "    <trb-calendar\n        #calendar\n        [dates]=\"data.dates\"\n        [config]=\"data.calendarConfig\" \n        (selectionChange)=\"onSelectionChange($event)\" \n        [monthTemplate]=\"calendarRef\">\n    </trb-calendar>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".trb-datepicker{margin-top:8px;padding:16px;border-radius:2px;background:#fff;box-shadow:0 2px 8px 0 #ccc}"]
            }] }
];
/** @nocollapse */
DatepickerComponent.ctorParameters = () => [
    { type: PickerOverlayRef },
    { type: undefined, decorators: [{ type: Inject, args: [PICKER_DATA,] }] },
    { type: TemplateRef }
];
DatepickerComponent.propDecorators = {
    calendar: [{ type: ViewChild, args: [CalendarComponent,] }],
    classes: [{ type: HostBinding, args: ['class',] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQWlCLFdBQVcsRUFDdEMsV0FBVyxFQUFFLGlCQUFpQixFQUNqRCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFTL0YsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBOEQ5QixZQUNVLFNBQWdELEVBQzVCLElBQW9CLEVBQ3pDLFdBQTZCO1FBRjVCLGNBQVMsR0FBVCxTQUFTLENBQXVDO1FBQzVCLFNBQUksR0FBSixJQUFJLENBQWdCO1FBQ3pDLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQXhEOUIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUEwRDNCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLHVCQUF1QixDQUFDLFdBQVcsQ0FBQztRQUNoRixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENB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Ozs7SUFKQyx3Q0FBb0M7O0lBQ3BDLHVDQUF5Qjs7SUFDekIsK0JBQXdCOztJQUN4QixxQ0FBcUI7OztBQUd2QixNQUFNLE9BQU8sdUJBQXVCLEdBQW1CO0lBQ3JELGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7UUFDdEMsU0FBUyxFQUFFLE9BQU87S0FDbkIsQ0FBQztJQUNGLGFBQWEsRUFBRSxFQUFFO0lBQ2pCLEtBQUssRUFBRSxFQUFFO0lBQ1QsV0FBVyxFQUFFLEtBQUs7Q0FDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIEluamVjdCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBUZW1wbGF0ZVJlZixcbiAgQWZ0ZXJDb250ZW50SW5pdCwgSG9zdEJpbmRpbmcsIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuLi9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgcGFyc2UsIGFkZE1vbnRocyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IENhbGVuZGFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvc2VsZWN0aW9uL2NhbGVuZGFyLXNlbGVjdGlvbi5jbGFzcyc7XG5pbXBvcnQgeyBQaWNrZXJPdmVybGF5UmVmIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9waWNrZXIvcGlja2VyLW92ZXJsYXktcmVmJztcbmltcG9ydCB7IFBJQ0tFUl9EQVRBIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9waWNrZXIvaW5qZWN0aW9uLXRva2Vucyc7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXdDb25maWcgfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9jb25maWcvY2FsZW5kYXItdmlldy1jb25maWcuY2xhc3MnO1xuaW1wb3J0IHsgQ2VsbERhdGEgfSBmcm9tICcuLi8uLi9jZWxsLWRhdGEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmItZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgQFZpZXdDaGlsZChDYWxlbmRhckNvbXBvbmVudClcbiAgY2FsZW5kYXI6IENhbGVuZGFyQ29tcG9uZW50O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgY2xhc3NlcygpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5kYXRhLnN0eWxlUHJlZml4fS1kYXRlcGlja2VyYDtcbiAgfVxuXG4gIHByaXZhdGUgcHJldmVudENsb3NlID0gZmFsc2U7XG5cbiAgb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0aW9uOiBDYWxlbmRhclNlbGVjdGlvbikge1xuICAgIGlmICghdGhpcy5wcmV2ZW50Q2xvc2UpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5jYWxlbmRhci5jb25maWcuc2VsZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3NpbXBsZSc6XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBpY2tlclJlZi5jbG9zZSh7XG4gICAgICAgICAgICAgIGZvcm06IHNlbGVjdGlvbi5mcm9tKCksXG4gICAgICAgICAgICAgIHRvOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF0ZXM6IHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgNjAwKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyYW5nZSc6XG4gICAgICAgICAgaWYgKHNlbGVjdGlvbi50bygpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5waWNrZXJSZWYuY2xvc2Uoe1xuICAgICAgICAgICAgICAgIGZyb206IHNlbGVjdGlvbi5mcm9tKCksXG4gICAgICAgICAgICAgICAgdG86IHNlbGVjdGlvbi50bygpLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkRGF0ZXM6IHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgNjAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnByZXZlbnRDbG9zZSA9IHRydWU7XG5cbiAgICB0aGlzLmRhdGEuZGF0ZXNTZWxlY3RlZC5mb3JFYWNoKGRhdGUgPT4gdGhpcy5jYWxlbmRhci5zZWxlY3Rpb24uY2hhbmdlKGRhdGUpKTtcblxuICAgIGlmICh0aGlzLmRhdGEuZGF0ZXNTZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBmcm9tID0gcGFyc2UodGhpcy5kYXRhLmRhdGVzU2VsZWN0ZWRbMF0pO1xuICAgICAgICB0aGlzLmNhbGVuZGFyLnNlbGVjdGlvbi5jYWxlbmRhck1vbnRoVmlldy5mcm9tLnNldE1vbnRoQW5kWWVhcihmcm9tKTtcbiAgICAgICAgdGhpcy5jYWxlbmRhci5zZWxlY3Rpb24uY2FsZW5kYXJNb250aFZpZXcudG8uc2V0TW9udGhBbmRZZWFyKGFkZE1vbnRocyhmcm9tLCAxKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucHJldmVudENsb3NlID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBpY2tlclJlZjogUGlja2VyT3ZlcmxheVJlZjxEYXRlcGlja2VyQ29tcG9uZW50PixcbiAgICBASW5qZWN0KFBJQ0tFUl9EQVRBKSBwdWJsaWMgZGF0YTogRGF0ZXBpY2tlckRhdGEsXG4gICAgcHVibGljIGNhbGVuZGFyUmVmOiBUZW1wbGF0ZVJlZjxhbnk+XG4gICkge1xuICAgIHRoaXMuZGF0YS5jYWxlbmRhckNvbmZpZyA9IE9iamVjdC5hc3NpZ24oREVGQVVMVF9EQVRFUElDS0VSX0RBVEEuY2FsZW5kYXJDb25maWcsIGRhdGEuY2FsZW5kYXJDb25maWcpO1xuICAgIHRoaXMuZGF0YS5zdHlsZVByZWZpeCA9IGRhdGEuc3R5bGVQcmVmaXggfHwgREVGQVVMVF9EQVRFUElDS0VSX0RBVEEuc3R5bGVQcmVmaXg7XG4gICAgdGhpcy5kYXRhLmRhdGVzID0gZGF0YS5kYXRlcyB8fCBERUZBVUxUX0RBVEVQSUNLRVJfREFUQS5kYXRlcztcbiAgICB0aGlzLmRhdGEuZGF0ZXNTZWxlY3RlZCA9IGRhdGEuZGF0ZXNTZWxlY3RlZCB8fCBERUZBVUxUX0RBVEVQSUNLRVJfREFUQS5kYXRlc1NlbGVjdGVkO1xuXG4gIH1cbn1cblxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZXBpY2tlckRhdGEge1xuICBjYWxlbmRhckNvbmZpZz86IENhbGVuZGFyVmlld0NvbmZpZztcbiAgZGF0ZXNTZWxlY3RlZD86IHN0cmluZ1tdO1xuICBkYXRlcz86IENlbGxEYXRhPGFueT5bXTtcbiAgc3R5bGVQcmVmaXg/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0RBVEVQSUNLRVJfREFUQTogRGF0ZXBpY2tlckRhdGEgPSB7XG4gIGNhbGVuZGFyQ29uZmlnOiBDYWxlbmRhclZpZXdDb25maWcuZnJvbSh7XG4gICAgc2VsZWN0aW9uOiAncmFuZ2UnXG4gIH0pLFxuICBkYXRlc1NlbGVjdGVkOiBbXSxcbiAgZGF0ZXM6IFtdLFxuICBzdHlsZVByZWZpeDogJ3RyYidcbn07XG4iXX0=