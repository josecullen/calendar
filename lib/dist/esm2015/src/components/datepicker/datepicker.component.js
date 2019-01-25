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
        console.info('close');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQWlCLFdBQVcsRUFDdEMsV0FBVyxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFDL0QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBUy9GLE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQU85QixZQUNVLFNBQWdELEVBQzVCLElBQW9CLEVBQ3pDLFdBQTZCO1FBRjVCLGNBQVMsR0FBVCxTQUFTLENBQXVDO1FBQzVCLFNBQUksR0FBSixJQUFJLENBQWdCO1FBQ3pDLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQVc5QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQVQzQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSx1QkFBdUIsQ0FBQyxXQUFXLENBQUM7UUFDaEYsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcs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U0FBQyxXQUFXO1lBMUJ3QixXQUFXOzs7c0JBbUJ2RCxXQUFXLFNBQUMsT0FBTzt1QkFnQm5CLFNBQVMsU0FBQyxpQkFBaUI7c0JBSzNCLFlBQVksU0FBQyxhQUFhOzs7O0lBTDNCLHVDQUM0Qjs7Ozs7SUFFNUIsMkNBQTZCOzs7OztJQWIzQix3Q0FBd0Q7O0lBQ3hELG1DQUFnRDs7SUFDaEQsMENBQW9DOzs7OztBQTZFeEMsb0NBS0M7OztJQUpDLHdDQUFvQzs7SUFDcEMsdUNBQXlCOztJQUN6QiwrQkFBd0I7O0lBQ3hCLHFDQUFxQjs7O0FBR3ZCLE1BQU0sT0FBTyx1QkFBdUIsR0FBbUI7SUFDckQsY0FBYyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQztRQUN0QyxTQUFTLEVBQUUsT0FBTztLQUNuQixDQUFDO0lBQ0YsYUFBYSxFQUFFLEVBQUU7SUFDakIsS0FBSyxFQUFFLEVBQUU7SUFDVCxXQUFXLEVBQUUsS0FBSztDQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5qZWN0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIFRlbXBsYXRlUmVmLFxuICBBZnRlckNvbnRlbnRJbml0LCBIb3N0QmluZGluZywgVmlld0VuY2Fwc3VsYXRpb24sIEhvc3RMaXN0ZW5lclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi4vY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IHBhcnNlLCBhZGRNb250aHMgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBDYWxlbmRhclNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9jYWxlbmRhci1zZWxlY3Rpb24uY2xhc3MnO1xuaW1wb3J0IHsgUGlja2VyT3ZlcmxheVJlZiB9IGZyb20gJy4uLy4uL21vZHVsZXMvcGlja2VyL3BpY2tlci1vdmVybGF5LXJlZic7XG5pbXBvcnQgeyBQSUNLRVJfREFUQSB9IGZyb20gJy4uLy4uL21vZHVsZXMvcGlja2VyL2luamVjdGlvbi10b2tlbnMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3Q29uZmlnIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvY29uZmlnL2NhbGVuZGFyLXZpZXctY29uZmlnLmNsYXNzJztcbmltcG9ydCB7IENlbGxEYXRhIH0gZnJvbSAnLi4vLi4vY2VsbC1kYXRhJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJiLWRhdGVwaWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiBgJHt0aGlzLmRhdGEuc3R5bGVQcmVmaXh9LWRhdGVwaWNrZXJgO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwaWNrZXJSZWY6IFBpY2tlck92ZXJsYXlSZWY8RGF0ZXBpY2tlckNvbXBvbmVudD4sXG4gICAgQEluamVjdChQSUNLRVJfREFUQSkgcHVibGljIGRhdGE6IERhdGVwaWNrZXJEYXRhLFxuICAgIHB1YmxpYyBjYWxlbmRhclJlZjogVGVtcGxhdGVSZWY8YW55PlxuICApIHtcbiAgICB0aGlzLmRhdGEuY2FsZW5kYXJDb25maWcgPSBPYmplY3QuYXNzaWduKERFRkFVTFRfREFURVBJQ0tFUl9EQVRBLmNhbGVuZGFyQ29uZmlnLCBkYXRhLmNhbGVuZGFyQ29uZmlnKTtcbiAgICB0aGlzLmRhdGEuc3R5bGVQcmVmaXggPSBkYXRhLnN0eWxlUHJlZml4IHx8IERFRkFVTFRfREFURVBJQ0tFUl9EQVRBLnN0eWxlUHJlZml4O1xuICAgIHRoaXMuZGF0YS5kYXRlcyA9IGRhdGEuZGF0ZXMgfHwgREVGQVVMVF9EQVRFUElDS0VSX0RBVEEuZGF0ZXM7XG4gICAgdGhpcy5kYXRhLmRhdGVzU2VsZWN0ZWQgPSBkYXRhLmRhdGVzU2VsZWN0ZWQgfHwgREVGQVVMVF9EQVRFUElDS0VSX0RBVEEuZGF0ZXNTZWxlY3RlZDtcblxuICB9XG4gIEBWaWV3Q2hpbGQoQ2FsZW5kYXJDb21wb25lbnQpXG4gIGNhbGVuZGFyOiBDYWxlbmRhckNvbXBvbmVudDtcblxuICBwcml2YXRlIHByZXZlbnRDbG9zZSA9IGZhbHNlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0LmVudGVyJylcbiAgb25FbnRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmluZm8oJ2Nsb3NlJyk7XG4gICAgdGhpcy5waWNrZXJSZWYuY2xvc2UoKTtcbiAgfVxuXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGlvbjogQ2FsZW5kYXJTZWxlY3Rpb24pIHtcbiAgICBpZiAoIXRoaXMucHJldmVudENsb3NlKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuY2FsZW5kYXIuY29uZmlnLnNlbGVjdGlvbikge1xuICAgICAgICBjYXNlICdzaW1wbGUnOlxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5waWNrZXJSZWYuY2xvc2Uoe1xuICAgICAgICAgICAgICBmb3JtOiBzZWxlY3Rpb24uZnJvbSgpLFxuICAgICAgICAgICAgICB0bzogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBzZWxlY3RlZERhdGVzOiBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDYwMCk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICAgIGlmIChzZWxlY3Rpb24udG8oKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucGlja2VyUmVmLmNsb3NlKHtcbiAgICAgICAgICAgICAgICBmcm9tOiBzZWxlY3Rpb24uZnJvbSgpLFxuICAgICAgICAgICAgICAgIHRvOiBzZWxlY3Rpb24udG8oKSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZERhdGVzOiBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlc1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDYwMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5wcmV2ZW50Q2xvc2UgPSB0cnVlO1xuXG4gICAgdGhpcy5kYXRhLmRhdGVzU2VsZWN0ZWQuZm9yRWFjaChkYXRlID0+IHRoaXMuY2FsZW5kYXIuc2VsZWN0aW9uLmNoYW5nZShkYXRlKSk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmRhdGVzU2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZnJvbSA9IHBhcnNlKHRoaXMuZGF0YS5kYXRlc1NlbGVjdGVkWzBdKTtcbiAgICAgICAgdGhpcy5jYWxlbmRhci5zZWxlY3Rpb24uY2FsZW5kYXJNb250aFZpZXcuZnJvbS5zZXRNb250aEFuZFllYXIoZnJvbSk7XG4gICAgICAgIHRoaXMuY2FsZW5kYXIuc2VsZWN0aW9uLmNhbGVuZGFyTW9udGhWaWV3LnRvLnNldE1vbnRoQW5kWWVhcihhZGRNb250aHMoZnJvbSwgMSkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnByZXZlbnRDbG9zZSA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVwaWNrZXJEYXRhIHtcbiAgY2FsZW5kYXJDb25maWc/OiBDYWxlbmRhclZpZXdDb25maWc7XG4gIGRhdGVzU2VsZWN0ZWQ/OiBzdHJpbmdbXTtcbiAgZGF0ZXM/OiBDZWxsRGF0YTxhbnk+W107XG4gIHN0eWxlUHJlZml4Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9EQVRFUElDS0VSX0RBVEE6IERhdGVwaWNrZXJEYXRhID0ge1xuICBjYWxlbmRhckNvbmZpZzogQ2FsZW5kYXJWaWV3Q29uZmlnLmZyb20oe1xuICAgIHNlbGVjdGlvbjogJ3JhbmdlJ1xuICB9KSxcbiAgZGF0ZXNTZWxlY3RlZDogW10sXG4gIGRhdGVzOiBbXSxcbiAgc3R5bGVQcmVmaXg6ICd0cmInXG59O1xuIl19