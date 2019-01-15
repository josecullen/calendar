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
        console.log(this.data.calendarConfig.month);
        this.data.calendarConfig = Object.assign(DEFAULT_DATEPICKER_DATA.calendarConfig, data.calendarConfig);
        this.data.stylePrefix = data.stylePrefix || DEFAULT_DATEPICKER_DATA.stylePrefix;
        console.log(this.data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQWlCLFdBQVcsRUFDN0MsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUcvRjtJQXFESSw2QkFDWSxTQUFnRCxFQUM1QixJQUFvQixFQUN6QyxXQUE2QjtRQUY1QixjQUFTLEdBQVQsU0FBUyxDQUF1QztRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUN6QyxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUF6Q2hDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBMkN6QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLHVCQUF1QixDQUFDLFdBQVcs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Q0FBQyxJQUFJLENBQUM7UUFDcEMsU0FBUyxFQUFFLE9BQU87S0FDckIsQ0FBQztJQUNGLGFBQWEsRUFBRSxFQUFFO0lBQ2pCLEtBQUssRUFBRSxFQUFFO0lBQ1QsV0FBVyxFQUFHLEtBQUs7Q0FDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBUZW1wbGF0ZVJlZixcbiAgQWZ0ZXJDb250ZW50SW5pdCwgSG9zdEJpbmRpbmcsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4uL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBwYXJzZSwgYWRkTW9udGhzIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9zZWxlY3Rpb24vY2FsZW5kYXItc2VsZWN0aW9uLmNsYXNzJztcbmltcG9ydCB7IFBpY2tlck92ZXJsYXlSZWYgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3BpY2tlci9waWNrZXItb3ZlcmxheS1yZWYnO1xuaW1wb3J0IHsgUElDS0VSX0RBVEEgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3BpY2tlci9pbmplY3Rpb24tdG9rZW5zJztcbmltcG9ydCB7IENhbGVuZGFyVmlld0NvbmZpZyB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L2NvbmZpZy9jYWxlbmRhci12aWV3LWNvbmZpZy5jbGFzcyc7XG5pbXBvcnQgeyBDZWxsRGF0YSB9IGZyb20gJy4uLy4uL2NlbGwtZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndHJiLWRhdGVwaWNrZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgQFZpZXdDaGlsZChDYWxlbmRhckNvbXBvbmVudClcbiAgICBjYWxlbmRhcjogQ2FsZW5kYXJDb21wb25lbnQ7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgICBnZXQgY2xhc3NlcygpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZGF0YS5zdHlsZVByZWZpeH0tZGF0ZXBpY2tlcmA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcmV2ZW50Q2xvc2UgPSBmYWxzZTtcblxuICAgIG9uU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGlvbjogQ2FsZW5kYXJTZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKCEhc2VsZWN0aW9uLnRvKCkgJiYgIXRoaXMucHJldmVudENsb3NlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlclJlZi5jbG9zZSh7XG4gICAgICAgICAgICAgICAgICAgIGZyb206IHNlbGVjdGlvbi5mcm9tKCksXG4gICAgICAgICAgICAgICAgICAgIHRvOiBzZWxlY3Rpb24udG8oKSxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREYXRlczogc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDYwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnByZXZlbnRDbG9zZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5kYXRhLmRhdGVzU2VsZWN0ZWQuZm9yRWFjaChkYXRlID0+IHRoaXMuY2FsZW5kYXIuc2VsZWN0aW9uLmNoYW5nZShkYXRlKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZGF0YS5kYXRlc1NlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZnJvbSA9IHBhcnNlKHRoaXMuZGF0YS5kYXRlc1NlbGVjdGVkWzBdKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFyLnNlbGVjdGlvbi5jYWxlbmRhck1vbnRoVmlldy5mcm9tLnNldE1vbnRoQW5kWWVhcihmcm9tKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFyLnNlbGVjdGlvbi5jYWxlbmRhck1vbnRoVmlldy50by5zZXRNb250aEFuZFllYXIoYWRkTW9udGhzKGZyb20sIDEpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXZlbnRDbG9zZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwaWNrZXJSZWY6IFBpY2tlck92ZXJsYXlSZWY8RGF0ZXBpY2tlckNvbXBvbmVudD4sXG4gICAgICAgIEBJbmplY3QoUElDS0VSX0RBVEEpIHB1YmxpYyBkYXRhOiBEYXRlcGlja2VyRGF0YSxcbiAgICAgICAgcHVibGljIGNhbGVuZGFyUmVmOiBUZW1wbGF0ZVJlZjxhbnk+XG4gICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5jYWxlbmRhckNvbmZpZy5tb250aCk7XG4gICAgICAgIHRoaXMuZGF0YS5jYWxlbmRhckNvbmZpZyA9IE9iamVjdC5hc3NpZ24oREVGQVVMVF9EQVRFUElDS0VSX0RBVEEuY2FsZW5kYXJDb25maWcsIGRhdGEuY2FsZW5kYXJDb25maWcpO1xuICAgICAgICB0aGlzLmRhdGEuc3R5bGVQcmVmaXggPSBkYXRhLnN0eWxlUHJlZml4IHx8IERFRkFVTFRfREFURVBJQ0tFUl9EQVRBLnN0eWxlUHJlZml4O1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLmRhdGEuZGF0ZXMgPSBkYXRhLmRhdGVzIHx8IERFRkFVTFRfREFURVBJQ0tFUl9EQVRBLmRhdGVzO1xuICAgICAgICB0aGlzLmRhdGEuZGF0ZXNTZWxlY3RlZCA9IGRhdGEuZGF0ZXNTZWxlY3RlZCB8fCBERUZBVUxUX0RBVEVQSUNLRVJfREFUQS5kYXRlc1NlbGVjdGVkO1xuXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGludGVyZmFjZSBEYXRlcGlja2VyRGF0YSB7XG4gICAgY2FsZW5kYXJDb25maWc/OiBDYWxlbmRhclZpZXdDb25maWc7XG4gICAgZGF0ZXNTZWxlY3RlZD86IHN0cmluZ1tdO1xuICAgIGRhdGVzPzogQ2VsbERhdGE8YW55PltdO1xuICAgIHN0eWxlUHJlZml4Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9EQVRFUElDS0VSX0RBVEE6IERhdGVwaWNrZXJEYXRhID0ge1xuICAgIGNhbGVuZGFyQ29uZmlnOiBDYWxlbmRhclZpZXdDb25maWcuZnJvbSh7XG4gICAgICAgIHNlbGVjdGlvbjogJ3JhbmdlJ1xuICAgIH0pLFxuICAgIGRhdGVzU2VsZWN0ZWQ6IFtdLFxuICAgIGRhdGVzOiBbXSxcbiAgICBzdHlsZVByZWZpeCA6ICd0cmInXG59O1xuIl19