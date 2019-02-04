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
     * @return {?}
     */
    DatepickerComponent.prototype.onEnter = /**
     * @return {?}
     */
    function () {
        this.close();
    };
    /**
     * @return {?}
     */
    DatepickerComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.pickerRef.close();
    };
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
                _this.calendar.cdr.markForCheck();
            });
        }
        setTimeout(function () {
            _this.preventClose = false;
        });
    };
    DatepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'trb-datepicker',
                    template: "<i class=\"trb-button-close\" (click)=\"close()\"></i>\n<trb-calendar\n    #calendar\n    [dates]=\"data.dates\"\n    [config]=\"data.calendarConfig\"\n    (selectionChange)=\"onSelectionChange($event)\"\n    [monthTemplate]=\"calendarRef\">\n</trb-calendar>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".trb-datepicker{margin-top:8px;padding:16px;border-radius:2px;background:#fff;box-shadow:0 2px 8px 0 #ccc}.trb-button-close{display:none}@media (max-width:550px){.trb-datepicker{margin-top:0}.trb-button-close{display:inherit}}"]
                }] }
    ];
    /** @nocollapse */
    DatepickerComponent.ctorParameters = function () { return [
        { type: PickerOverlayRef },
        { type: undefined, decorators: [{ type: Inject, args: [PICKER_DATA,] }] },
        { type: TemplateRef }
    ]; };
    DatepickerComponent.propDecorators = {
        classes: [{ type: HostBinding, args: ['class',] }],
        calendar: [{ type: ViewChild, args: [CalendarComponent,] }],
        onEnter: [{ type: HostListener, args: ['input.enter',] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQWlCLFdBQVcsRUFDdEMsV0FBVyxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFDL0QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBRy9GO0lBYUUsNkJBQ1UsU0FBZ0QsRUFDNUIsSUFBb0IsRUFDekMsV0FBNkI7UUFGNUIsY0FBUyxHQUFULFNBQVMsQ0FBdUM7UUFDNUIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFDekMsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBVzlCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBVDNCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLHVCQUF1QixDQUFDLFdBQVcsQ0FBQztRQUNoRixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLHVC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QUk7O2lCQUN0Qzs7OztnQkFWUSxnQkFBZ0I7Z0RBb0JwQixNQUFNLFNBQUMsV0FBVztnQkExQndCLFdBQVc7OzswQkFtQnZELFdBQVcsU0FBQyxPQUFPOzJCQWdCbkIsU0FBUyxTQUFDLGlCQUFpQjswQkFLM0IsWUFBWSxTQUFDLGFBQWE7O0lBNEQ3QiwwQkFBQztDQUFBLEFBekZELElBeUZDO1NBbkZZLG1CQUFtQjs7O0lBa0I5Qix1Q0FDNEI7Ozs7O0lBRTVCLDJDQUE2Qjs7Ozs7SUFiM0Isd0NBQXdEOztJQUN4RCxtQ0FBZ0Q7O0lBQ2hELDBDQUFvQzs7Ozs7QUE2RXhDLG9DQUtDOzs7SUFKQyx3Q0FBb0M7O0lBQ3BDLHVDQUF5Qjs7SUFDekIsK0JBQXdCOztJQUN4QixxQ0FBcUI7OztBQUd2QixNQUFNLEtBQU8sdUJBQXVCLEdBQW1CO0lBQ3JELGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7UUFDdEMsU0FBUyxFQUFFLE9BQU87S0FDbkIsQ0FBQztJQUNGLGFBQWEsRUFBRSxFQUFFO0lBQ2pCLEtBQUssRUFBRSxFQUFFO0lBQ1QsV0FBVyxFQUFFLEtBQUs7Q0FDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIEluamVjdCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBUZW1wbGF0ZVJlZixcbiAgQWZ0ZXJDb250ZW50SW5pdCwgSG9zdEJpbmRpbmcsIFZpZXdFbmNhcHN1bGF0aW9uLCBIb3N0TGlzdGVuZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4uL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBwYXJzZSwgYWRkTW9udGhzIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9zZWxlY3Rpb24vY2FsZW5kYXItc2VsZWN0aW9uLmNsYXNzJztcbmltcG9ydCB7IFBpY2tlck92ZXJsYXlSZWYgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3BpY2tlci9waWNrZXItb3ZlcmxheS1yZWYnO1xuaW1wb3J0IHsgUElDS0VSX0RBVEEgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3BpY2tlci9pbmplY3Rpb24tdG9rZW5zJztcbmltcG9ydCB7IENhbGVuZGFyVmlld0NvbmZpZyB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L2NvbmZpZy9jYWxlbmRhci12aWV3LWNvbmZpZy5jbGFzcyc7XG5pbXBvcnQgeyBDZWxsRGF0YSB9IGZyb20gJy4uLy4uL2NlbGwtZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyYi1kYXRlcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgY2xhc3NlcygpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5kYXRhLnN0eWxlUHJlZml4fS1kYXRlcGlja2VyYDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGlja2VyUmVmOiBQaWNrZXJPdmVybGF5UmVmPERhdGVwaWNrZXJDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoUElDS0VSX0RBVEEpIHB1YmxpYyBkYXRhOiBEYXRlcGlja2VyRGF0YSxcbiAgICBwdWJsaWMgY2FsZW5kYXJSZWY6IFRlbXBsYXRlUmVmPGFueT5cbiAgKSB7XG4gICAgdGhpcy5kYXRhLmNhbGVuZGFyQ29uZmlnID0gT2JqZWN0LmFzc2lnbihERUZBVUxUX0RBVEVQSUNLRVJfREFUQS5jYWxlbmRhckNvbmZpZywgZGF0YS5jYWxlbmRhckNvbmZpZyk7XG4gICAgdGhpcy5kYXRhLnN0eWxlUHJlZml4ID0gZGF0YS5zdHlsZVByZWZpeCB8fCBERUZBVUxUX0RBVEVQSUNLRVJfREFUQS5zdHlsZVByZWZpeDtcbiAgICB0aGlzLmRhdGEuZGF0ZXMgPSBkYXRhLmRhdGVzIHx8IERFRkFVTFRfREFURVBJQ0tFUl9EQVRBLmRhdGVzO1xuICAgIHRoaXMuZGF0YS5kYXRlc1NlbGVjdGVkID0gZGF0YS5kYXRlc1NlbGVjdGVkIHx8IERFRkFVTFRfREFURVBJQ0tFUl9EQVRBLmRhdGVzU2VsZWN0ZWQ7XG5cbiAgfVxuICBAVmlld0NoaWxkKENhbGVuZGFyQ29tcG9uZW50KVxuICBjYWxlbmRhcjogQ2FsZW5kYXJDb21wb25lbnQ7XG5cbiAgcHJpdmF0ZSBwcmV2ZW50Q2xvc2UgPSBmYWxzZTtcblxuICBASG9zdExpc3RlbmVyKCdpbnB1dC5lbnRlcicpXG4gIG9uRW50ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5waWNrZXJSZWYuY2xvc2UoKTtcbiAgfVxuXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGlvbjogQ2FsZW5kYXJTZWxlY3Rpb24pIHtcbiAgICBpZiAoIXRoaXMucHJldmVudENsb3NlKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuY2FsZW5kYXIuY29uZmlnLnNlbGVjdGlvbikge1xuICAgICAgICBjYXNlICdzaW1wbGUnOlxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5waWNrZXJSZWYuY2xvc2Uoe1xuICAgICAgICAgICAgICBmb3JtOiBzZWxlY3Rpb24uZnJvbSgpLFxuICAgICAgICAgICAgICB0bzogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBzZWxlY3RlZERhdGVzOiBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDYwMCk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICAgIGlmIChzZWxlY3Rpb24udG8oKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucGlja2VyUmVmLmNsb3NlKHtcbiAgICAgICAgICAgICAgICBmcm9tOiBzZWxlY3Rpb24uZnJvbSgpLFxuICAgICAgICAgICAgICAgIHRvOiBzZWxlY3Rpb24udG8oKSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZERhdGVzOiBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlc1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDYwMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5wcmV2ZW50Q2xvc2UgPSB0cnVlO1xuXG4gICAgdGhpcy5kYXRhLmRhdGVzU2VsZWN0ZWQuZm9yRWFjaChkYXRlID0+IHRoaXMuY2FsZW5kYXIuc2VsZWN0aW9uLmNoYW5nZShkYXRlKSk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmRhdGVzU2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZnJvbSA9IHBhcnNlKHRoaXMuZGF0YS5kYXRlc1NlbGVjdGVkWzBdKTtcbiAgICAgICAgdGhpcy5jYWxlbmRhci5zZWxlY3Rpb24uY2FsZW5kYXJNb250aFZpZXcuZnJvbS5zZXRNb250aEFuZFllYXIoZnJvbSk7XG4gICAgICAgIHRoaXMuY2FsZW5kYXIuc2VsZWN0aW9uLmNhbGVuZGFyTW9udGhWaWV3LnRvLnNldE1vbnRoQW5kWWVhcihhZGRNb250aHMoZnJvbSwgMSkpO1xuICAgICAgICB0aGlzLmNhbGVuZGFyLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5wcmV2ZW50Q2xvc2UgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuZXhwb3J0IGludGVyZmFjZSBEYXRlcGlja2VyRGF0YSB7XG4gIGNhbGVuZGFyQ29uZmlnPzogQ2FsZW5kYXJWaWV3Q29uZmlnO1xuICBkYXRlc1NlbGVjdGVkPzogc3RyaW5nW107XG4gIGRhdGVzPzogQ2VsbERhdGE8YW55PltdO1xuICBzdHlsZVByZWZpeD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfREFURVBJQ0tFUl9EQVRBOiBEYXRlcGlja2VyRGF0YSA9IHtcbiAgY2FsZW5kYXJDb25maWc6IENhbGVuZGFyVmlld0NvbmZpZy5mcm9tKHtcbiAgICBzZWxlY3Rpb246ICdyYW5nZSdcbiAgfSksXG4gIGRhdGVzU2VsZWN0ZWQ6IFtdLFxuICBkYXRlczogW10sXG4gIHN0eWxlUHJlZml4OiAndHJiJ1xufTtcbiJdfQ==