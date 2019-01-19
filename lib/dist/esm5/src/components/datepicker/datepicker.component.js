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
        if (!this.preventClose) {
            switch (this.calendar.config.selection) {
                case 'simple':
                    setTimeout(function () {
                        _this.pickerRef.close({
                            form: selection.from(),
                            to: undefined,
                            selectedDates: selection.selectedDates,
                        });
                    }, 600);
                    break;
                case 'range':
                    if (selection.to()) {
                        setTimeout(function () {
                            _this.pickerRef.close({
                                from: selection.from(),
                                to: selection.to(),
                                selectedDates: selection.selectedDates
                            });
                        }, 600);
                    }
                    break;
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQWlCLFdBQVcsRUFDdEMsV0FBVyxFQUFFLGlCQUFpQixFQUNqRCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFHL0Y7SUFvRUUsNkJBQ1UsU0FBZ0QsRUFDNUIsSUFBb0IsRUFDekMsV0FBNkI7UUFGNUIsY0FBUyxHQUFULFNBQVMsQ0FBdUM7UUFDNUIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFDekMsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBeEQ5QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQTBEM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksdUJBQXVCLENBQUMsV0FBVyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksdUJBQXVCLENB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QXNEM0Isd0NBQXdEOztJQUN4RCxtQ0FBZ0Q7O0lBQ2hELDBDQUFvQzs7Ozs7QUFZeEMsb0NBS0M7OztJQUpDLHdDQUFvQzs7SUFDcEMsdUNBQXlCOztJQUN6QiwrQkFBd0I7O0lBQ3hCLHFDQUFxQjs7O0FBR3ZCLE1BQU0sS0FBTyx1QkFBdUIsR0FBbUI7SUFDckQsY0FBYyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQztRQUN0QyxTQUFTLEVBQUUsT0FBTztLQUNuQixDQUFDO0lBQ0YsYUFBYSxFQUFFLEVBQUU7SUFDakIsS0FBSyxFQUFFLEVBQUU7SUFDVCxXQUFXLEVBQUUsS0FBSztDQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5qZWN0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIFRlbXBsYXRlUmVmLFxuICBBZnRlckNvbnRlbnRJbml0LCBIb3N0QmluZGluZywgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4uL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBwYXJzZSwgYWRkTW9udGhzIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9zZWxlY3Rpb24vY2FsZW5kYXItc2VsZWN0aW9uLmNsYXNzJztcbmltcG9ydCB7IFBpY2tlck92ZXJsYXlSZWYgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3BpY2tlci9waWNrZXItb3ZlcmxheS1yZWYnO1xuaW1wb3J0IHsgUElDS0VSX0RBVEEgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3BpY2tlci9pbmplY3Rpb24tdG9rZW5zJztcbmltcG9ydCB7IENhbGVuZGFyVmlld0NvbmZpZyB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L2NvbmZpZy9jYWxlbmRhci12aWV3LWNvbmZpZy5jbGFzcyc7XG5pbXBvcnQgeyBDZWxsRGF0YSB9IGZyb20gJy4uLy4uL2NlbGwtZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyYi1kYXRlcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQge1xuICBAVmlld0NoaWxkKENhbGVuZGFyQ29tcG9uZW50KVxuICBjYWxlbmRhcjogQ2FsZW5kYXJDb21wb25lbnQ7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiBgJHt0aGlzLmRhdGEuc3R5bGVQcmVmaXh9LWRhdGVwaWNrZXJgO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmV2ZW50Q2xvc2UgPSBmYWxzZTtcblxuICBvblNlbGVjdGlvbkNoYW5nZShzZWxlY3Rpb246IENhbGVuZGFyU2VsZWN0aW9uKSB7XG4gICAgaWYgKCF0aGlzLnByZXZlbnRDbG9zZSkge1xuICAgICAgc3dpdGNoICh0aGlzLmNhbGVuZGFyLmNvbmZpZy5zZWxlY3Rpb24pIHtcbiAgICAgICAgY2FzZSAnc2ltcGxlJzpcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGlja2VyUmVmLmNsb3NlKHtcbiAgICAgICAgICAgICAgZm9ybTogc2VsZWN0aW9uLmZyb20oKSxcbiAgICAgICAgICAgICAgdG86IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXRlczogc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCA2MDApO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAgICBpZiAoc2VsZWN0aW9uLnRvKCkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnBpY2tlclJlZi5jbG9zZSh7XG4gICAgICAgICAgICAgICAgZnJvbTogc2VsZWN0aW9uLmZyb20oKSxcbiAgICAgICAgICAgICAgICB0bzogc2VsZWN0aW9uLnRvKCksXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWREYXRlczogc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXNcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCA2MDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucHJldmVudENsb3NlID0gdHJ1ZTtcblxuICAgIHRoaXMuZGF0YS5kYXRlc1NlbGVjdGVkLmZvckVhY2goZGF0ZSA9PiB0aGlzLmNhbGVuZGFyLnNlbGVjdGlvbi5jaGFuZ2UoZGF0ZSkpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5kYXRlc1NlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZyb20gPSBwYXJzZSh0aGlzLmRhdGEuZGF0ZXNTZWxlY3RlZFswXSk7XG4gICAgICAgIHRoaXMuY2FsZW5kYXIuc2VsZWN0aW9uLmNhbGVuZGFyTW9udGhWaWV3LmZyb20uc2V0TW9udGhBbmRZZWFyKGZyb20pO1xuICAgICAgICB0aGlzLmNhbGVuZGFyLnNlbGVjdGlvbi5jYWxlbmRhck1vbnRoVmlldy50by5zZXRNb250aEFuZFllYXIoYWRkTW9udGhzKGZyb20sIDEpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5wcmV2ZW50Q2xvc2UgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGlja2VyUmVmOiBQaWNrZXJPdmVybGF5UmVmPERhdGVwaWNrZXJDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoUElDS0VSX0RBVEEpIHB1YmxpYyBkYXRhOiBEYXRlcGlja2VyRGF0YSxcbiAgICBwdWJsaWMgY2FsZW5kYXJSZWY6IFRlbXBsYXRlUmVmPGFueT5cbiAgKSB7XG4gICAgdGhpcy5kYXRhLmNhbGVuZGFyQ29uZmlnID0gT2JqZWN0LmFzc2lnbihERUZBVUxUX0RBVEVQSUNLRVJfREFUQS5jYWxlbmRhckNvbmZpZywgZGF0YS5jYWxlbmRhckNvbmZpZyk7XG4gICAgdGhpcy5kYXRhLnN0eWxlUHJlZml4ID0gZGF0YS5zdHlsZVByZWZpeCB8fCBERUZBVUxUX0RBVEVQSUNLRVJfREFUQS5zdHlsZVByZWZpeDtcbiAgICB0aGlzLmRhdGEuZGF0ZXMgPSBkYXRhLmRhdGVzIHx8IERFRkFVTFRfREFURVBJQ0tFUl9EQVRBLmRhdGVzO1xuICAgIHRoaXMuZGF0YS5kYXRlc1NlbGVjdGVkID0gZGF0YS5kYXRlc1NlbGVjdGVkIHx8IERFRkFVTFRfREFURVBJQ0tFUl9EQVRBLmRhdGVzU2VsZWN0ZWQ7XG5cbiAgfVxufVxuXG5cblxuZXhwb3J0IGludGVyZmFjZSBEYXRlcGlja2VyRGF0YSB7XG4gIGNhbGVuZGFyQ29uZmlnPzogQ2FsZW5kYXJWaWV3Q29uZmlnO1xuICBkYXRlc1NlbGVjdGVkPzogc3RyaW5nW107XG4gIGRhdGVzPzogQ2VsbERhdGE8YW55PltdO1xuICBzdHlsZVByZWZpeD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfREFURVBJQ0tFUl9EQVRBOiBEYXRlcGlja2VyRGF0YSA9IHtcbiAgY2FsZW5kYXJDb25maWc6IENhbGVuZGFyVmlld0NvbmZpZy5mcm9tKHtcbiAgICBzZWxlY3Rpb246ICdyYW5nZSdcbiAgfSksXG4gIGRhdGVzU2VsZWN0ZWQ6IFtdLFxuICBkYXRlczogW10sXG4gIHN0eWxlUHJlZml4OiAndHJiJ1xufTtcbiJdfQ==