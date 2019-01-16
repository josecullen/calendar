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
var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent(pickerRef, data, calendarRef) {
        this.pickerRef = pickerRef;
        this.data = data;
        this.calendarRef = calendarRef;
        this.preventClose = false;
        this.data.calendarConfig = Object.assign(DEFAULT_DATEPICKER_DATA.calendarConfig, data.calendarConfig);
        this.data.stylePrefix = data.stylePrefix || DEFAULT_DATEPICKER_DATA.stylePrefix;
        this.data.dates = data.dates || DEFAULT_DATEPICKER_DATA.dates;
        this.data.datesSelected = data.datesSelected || DEFAULT_DATEPICKER_DATA.datesSelected;
    }
    Object.defineProperty(DatepickerComponent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            return this.data.stylePrefix + "-datepicker";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} selection
     * @return {?}
     */
    DatepickerComponent.prototype.onSelectionChange = /**
     * @param {?} selection
     * @return {?}
     */
    function (selection) {
        var _this = this;
        if (!!selection.to() && !this.preventClose) {
            setTimeout(function () {
                _this.pickerRef.close({
                    from: selection.from(),
                    to: selection.to(),
                    selectedDates: selection.selectedDates
                });
            }, 600);
        }
    };
    /**
     * @return {?}
     */
    DatepickerComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    DatepickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // setTimeout(() => {
        this.preventClose = true;
        this.data.datesSelected.forEach(function (date) { return _this.calendar.selection.change(date); });
        if (this.data.datesSelected.length) {
            setTimeout(function () {
                /** @type {?} */
                var from = parse(_this.data.datesSelected[0]);
                _this.calendar.selection.calendarMonthView.from.setMonthAndYear(from);
                _this.calendar.selection.calendarMonthView.to.setMonthAndYear(addMonths(from, 1));
            });
        }
        setTimeout(function () {
            _this.preventClose = false;
        });
        // })
    };
    DatepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'trb-datepicker',
                    template: "    <trb-calendar\n        #calendar\n        [dates]=\"data.dates\"\n        [config]=\"data.calendarConfig\" \n        (selectionChange)=\"onSelectionChange($event)\" \n        [monthTemplate]=\"calendarRef\">\n    </trb-calendar>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".trb-datepicker{margin-top:8px;padding:16px;border-radius:2px;background:#fff;box-shadow:0 2px 8px 0 #ccc}"]
                }] }
    ];
    /** @nocollapse */
    DatepickerComponent.ctorParameters = function () { return [
        { type: PickerOverlayRef },
        { type: undefined, decorators: [{ type: Inject, args: [PICKER_DATA,] }] },
        { type: TemplateRef }
    ]; };
    DatepickerComponent.propDecorators = {
        calendar: [{ type: ViewChild, args: [CalendarComponent,] }],
        classes: [{ type: HostBinding, args: ['class',] }]
    };
    return DatepickerComponent;
}());
export { DatepickerComponent };
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
export var DEFAULT_DATEPICKER_DATA = {
    calendarConfig: CalendarViewConfig.from({
        selection: 'range'
    }),
    datesSelected: [],
    dates: [],
    stylePrefix: 'trb'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQWlCLFdBQVcsRUFDN0MsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUcvRjtJQXFESSw2QkFDWSxTQUFnRCxFQUM1QixJQUFvQixFQUN6QyxXQUE2QjtRQUY1QixjQUFTLEdBQVQsU0FBUyxDQUF1QztRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUN6QyxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUF6Q2hDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBMkN6QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSx1QkFBdUIsQ0FBQyxXQUFXLENBQUM7UUFDaEYsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSx1QkFBdUIsQ0FB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c0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgVGVtcGxhdGVSZWYsXG4gIEFmdGVyQ29udGVudEluaXQsIEhvc3RCaW5kaW5nLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuLi9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgcGFyc2UsIGFkZE1vbnRocyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IENhbGVuZGFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvc2VsZWN0aW9uL2NhbGVuZGFyLXNlbGVjdGlvbi5jbGFzcyc7XG5pbXBvcnQgeyBQaWNrZXJPdmVybGF5UmVmIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9waWNrZXIvcGlja2VyLW92ZXJsYXktcmVmJztcbmltcG9ydCB7IFBJQ0tFUl9EQVRBIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9waWNrZXIvaW5qZWN0aW9uLXRva2Vucyc7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXdDb25maWcgfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9jb25maWcvY2FsZW5kYXItdmlldy1jb25maWcuY2xhc3MnO1xuaW1wb3J0IHsgQ2VsbERhdGEgfSBmcm9tICcuLi8uLi9jZWxsLWRhdGEnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RyYi1kYXRlcGlja2VyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZGF0ZXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQge1xuICAgIEBWaWV3Q2hpbGQoQ2FsZW5kYXJDb21wb25lbnQpXG4gICAgY2FsZW5kYXI6IENhbGVuZGFyQ29tcG9uZW50O1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gICAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmRhdGEuc3R5bGVQcmVmaXh9LWRhdGVwaWNrZXJgO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHJldmVudENsb3NlID0gZmFsc2U7XG5cbiAgICBvblNlbGVjdGlvbkNoYW5nZShzZWxlY3Rpb246IENhbGVuZGFyU2VsZWN0aW9uKSB7XG4gICAgICAgIGlmICghIXNlbGVjdGlvbi50bygpICYmICF0aGlzLnByZXZlbnRDbG9zZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXJSZWYuY2xvc2Uoe1xuICAgICAgICAgICAgICAgICAgICBmcm9tOiBzZWxlY3Rpb24uZnJvbSgpLFxuICAgICAgICAgICAgICAgICAgICB0bzogc2VsZWN0aW9uLnRvKCksXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRGF0ZXM6IHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCA2MDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuXG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wcmV2ZW50Q2xvc2UgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZGF0YS5kYXRlc1NlbGVjdGVkLmZvckVhY2goZGF0ZSA9PiB0aGlzLmNhbGVuZGFyLnNlbGVjdGlvbi5jaGFuZ2UoZGF0ZSkpO1xuXG4gICAgICAgIGlmICh0aGlzLmRhdGEuZGF0ZXNTZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZyb20gPSBwYXJzZSh0aGlzLmRhdGEuZGF0ZXNTZWxlY3RlZFswXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxlbmRhci5zZWxlY3Rpb24uY2FsZW5kYXJNb250aFZpZXcuZnJvbS5zZXRNb250aEFuZFllYXIoZnJvbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxlbmRhci5zZWxlY3Rpb24uY2FsZW5kYXJNb250aFZpZXcudG8uc2V0TW9udGhBbmRZZWFyKGFkZE1vbnRocyhmcm9tLCAxKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmV2ZW50Q2xvc2UgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIH0pXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGlja2VyUmVmOiBQaWNrZXJPdmVybGF5UmVmPERhdGVwaWNrZXJDb21wb25lbnQ+LFxuICAgICAgICBASW5qZWN0KFBJQ0tFUl9EQVRBKSBwdWJsaWMgZGF0YTogRGF0ZXBpY2tlckRhdGEsXG4gICAgICAgIHB1YmxpYyBjYWxlbmRhclJlZjogVGVtcGxhdGVSZWY8YW55PlxuICAgICkge1xuICAgICAgICB0aGlzLmRhdGEuY2FsZW5kYXJDb25maWcgPSBPYmplY3QuYXNzaWduKERFRkFVTFRfREFURVBJQ0tFUl9EQVRBLmNhbGVuZGFyQ29uZmlnLCBkYXRhLmNhbGVuZGFyQ29uZmlnKTtcbiAgICAgICAgdGhpcy5kYXRhLnN0eWxlUHJlZml4ID0gZGF0YS5zdHlsZVByZWZpeCB8fCBERUZBVUxUX0RBVEVQSUNLRVJfREFUQS5zdHlsZVByZWZpeDtcbiAgICAgICAgdGhpcy5kYXRhLmRhdGVzID0gZGF0YS5kYXRlcyB8fCBERUZBVUxUX0RBVEVQSUNLRVJfREFUQS5kYXRlcztcbiAgICAgICAgdGhpcy5kYXRhLmRhdGVzU2VsZWN0ZWQgPSBkYXRhLmRhdGVzU2VsZWN0ZWQgfHwgREVGQVVMVF9EQVRFUElDS0VSX0RBVEEuZGF0ZXNTZWxlY3RlZDtcblxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZXBpY2tlckRhdGEge1xuICAgIGNhbGVuZGFyQ29uZmlnPzogQ2FsZW5kYXJWaWV3Q29uZmlnO1xuICAgIGRhdGVzU2VsZWN0ZWQ/OiBzdHJpbmdbXTtcbiAgICBkYXRlcz86IENlbGxEYXRhPGFueT5bXTtcbiAgICBzdHlsZVByZWZpeD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfREFURVBJQ0tFUl9EQVRBOiBEYXRlcGlja2VyRGF0YSA9IHtcbiAgICBjYWxlbmRhckNvbmZpZzogQ2FsZW5kYXJWaWV3Q29uZmlnLmZyb20oe1xuICAgICAgICBzZWxlY3Rpb246ICdyYW5nZSdcbiAgICB9KSxcbiAgICBkYXRlc1NlbGVjdGVkOiBbXSxcbiAgICBkYXRlczogW10sXG4gICAgc3R5bGVQcmVmaXggOiAndHJiJ1xufTtcbiJdfQ==