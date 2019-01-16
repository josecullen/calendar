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
        if (!!selection.to() && !this.preventClose) {
            setTimeout(() => {
                this.pickerRef.close({
                    from: selection.from(),
                    to: selection.to(),
                    selectedDates: selection.selectedDates
                });
            }, 600);
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
        // setTimeout(() => {
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
        // })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQWlCLFdBQVcsRUFDN0MsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQVMvRixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUErQzVCLFlBQ1ksU0FBZ0QsRUFDNUIsSUFBb0IsRUFDekMsV0FBNkI7UUFGNUIsY0FBUyxHQUFULFNBQVMsQ0FBdUM7UUFDNUIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFDekMsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBekNoQyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQTJDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksdUJBQXVCLENBQUMsV0FBVyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksdUJBQXVCLENBQUMsS0FBSyxDQUFDO1FBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksdUJBQXVCLENBQUMsYUFBYSxDQUFDO0lBRTFGLENBQUM7Ozs7SUFyREQsSUFDSSxPQUFPO1FBQ1AsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxhQUFhLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFJRCxpQkFBaUIsQ0FBQyxTQUE0QjtRQUMxQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3hDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7b0JBQ2pCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFO29CQUN0QixFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUUsRUFBRTtvQkFDbEIsYUFBYSxFQUFFLFNBQVMsQ0FBQyxhQUFhO2lCQUN6QyxDQUFDLENBQUM7WUFDUCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDWDtJQUNMLENBQUM7Ozs7SUFFRCxrQkFBa0I7SUFFbEIsQ0FBQzs7OztJQUVELGVBQWU7UUFDWCxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFekIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFOUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDaEMsVUFBVSxDQUFDLEdBQUcsRUFBRTs7c0JBQ04sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckYsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUNILEtBQUs7SUFDVCxDQUFDOzs7WUFuREosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHNQQUEwQztnQkFFMUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3hDOzs7O1lBVlEsZ0JBQWdCOzRDQTREaEIsTUFBTSxTQUFDLFdBQVc7WUFqRTJCLFdBQVc7Ozt1QkFpQjVELFNBQVMsU0FBQyxpQkFBaUI7c0JBRzNCLFdBQVcsU0FBQyxPQUFPOzs7O0lBSHBCLHVDQUM0Qjs7Ozs7SUFPNUIsMkNBQTZCOzs7OztJQXVDekIsd0NBQXdEOztJQUN4RCxtQ0FBZ0Q7O0lBQ2hELDBDQUFvQzs7Ozs7QUFZNUMsb0NBS0M7OztJQUpHLHdDQUFvQzs7SUFDcEMsdUNBQXlCOztJQUN6QiwrQkFBd0I7O0lBQ3hCLHFDQUFxQjs7O0FBR3pCLE1BQU0sT0FBTyx1QkFBdUIsR0FBbUI7SUFDbkQsY0FBYyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQztRQUNwQyxTQUFTLEVBQUUsT0FBTztLQUNyQixDQUFDO0lBQ0YsYUFBYSxFQUFFLEVBQUU7SUFDakIsS0FBSyxFQUFFLEVBQUU7SUFDVCxXQUFXLEVBQUcsS0FBSztDQUN0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIFRlbXBsYXRlUmVmLFxuICBBZnRlckNvbnRlbnRJbml0LCBIb3N0QmluZGluZywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi4vY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IHBhcnNlLCBhZGRNb250aHMgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBDYWxlbmRhclNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9jYWxlbmRhci1zZWxlY3Rpb24uY2xhc3MnO1xuaW1wb3J0IHsgUGlja2VyT3ZlcmxheVJlZiB9IGZyb20gJy4uLy4uL21vZHVsZXMvcGlja2VyL3BpY2tlci1vdmVybGF5LXJlZic7XG5pbXBvcnQgeyBQSUNLRVJfREFUQSB9IGZyb20gJy4uLy4uL21vZHVsZXMvcGlja2VyL2luamVjdGlvbi10b2tlbnMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3Q29uZmlnIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvY29uZmlnL2NhbGVuZGFyLXZpZXctY29uZmlnLmNsYXNzJztcbmltcG9ydCB7IENlbGxEYXRhIH0gZnJvbSAnLi4vLi4vY2VsbC1kYXRhJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0cmItZGF0ZXBpY2tlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2RhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBAVmlld0NoaWxkKENhbGVuZGFyQ29tcG9uZW50KVxuICAgIGNhbGVuZGFyOiBDYWxlbmRhckNvbXBvbmVudDtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICAgIGdldCBjbGFzc2VzKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5kYXRhLnN0eWxlUHJlZml4fS1kYXRlcGlja2VyYDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHByZXZlbnRDbG9zZSA9IGZhbHNlO1xuXG4gICAgb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0aW9uOiBDYWxlbmRhclNlbGVjdGlvbikge1xuICAgICAgICBpZiAoISFzZWxlY3Rpb24udG8oKSAmJiAhdGhpcy5wcmV2ZW50Q2xvc2UpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyUmVmLmNsb3NlKHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogc2VsZWN0aW9uLmZyb20oKSxcbiAgICAgICAgICAgICAgICAgICAgdG86IHNlbGVjdGlvbi50bygpLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERhdGVzOiBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgNjAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucHJldmVudENsb3NlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmRhdGEuZGF0ZXNTZWxlY3RlZC5mb3JFYWNoKGRhdGUgPT4gdGhpcy5jYWxlbmRhci5zZWxlY3Rpb24uY2hhbmdlKGRhdGUpKTtcblxuICAgICAgICBpZiAodGhpcy5kYXRhLmRhdGVzU2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmcm9tID0gcGFyc2UodGhpcy5kYXRhLmRhdGVzU2VsZWN0ZWRbMF0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsZW5kYXIuc2VsZWN0aW9uLmNhbGVuZGFyTW9udGhWaWV3LmZyb20uc2V0TW9udGhBbmRZZWFyKGZyb20pO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsZW5kYXIuc2VsZWN0aW9uLmNhbGVuZGFyTW9udGhWaWV3LnRvLnNldE1vbnRoQW5kWWVhcihhZGRNb250aHMoZnJvbSwgMSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudENsb3NlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB9KVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBpY2tlclJlZjogUGlja2VyT3ZlcmxheVJlZjxEYXRlcGlja2VyQ29tcG9uZW50PixcbiAgICAgICAgQEluamVjdChQSUNLRVJfREFUQSkgcHVibGljIGRhdGE6IERhdGVwaWNrZXJEYXRhLFxuICAgICAgICBwdWJsaWMgY2FsZW5kYXJSZWY6IFRlbXBsYXRlUmVmPGFueT5cbiAgICApIHtcbiAgICAgICAgdGhpcy5kYXRhLmNhbGVuZGFyQ29uZmlnID0gT2JqZWN0LmFzc2lnbihERUZBVUxUX0RBVEVQSUNLRVJfREFUQS5jYWxlbmRhckNvbmZpZywgZGF0YS5jYWxlbmRhckNvbmZpZyk7XG4gICAgICAgIHRoaXMuZGF0YS5zdHlsZVByZWZpeCA9IGRhdGEuc3R5bGVQcmVmaXggfHwgREVGQVVMVF9EQVRFUElDS0VSX0RBVEEuc3R5bGVQcmVmaXg7XG4gICAgICAgIHRoaXMuZGF0YS5kYXRlcyA9IGRhdGEuZGF0ZXMgfHwgREVGQVVMVF9EQVRFUElDS0VSX0RBVEEuZGF0ZXM7XG4gICAgICAgIHRoaXMuZGF0YS5kYXRlc1NlbGVjdGVkID0gZGF0YS5kYXRlc1NlbGVjdGVkIHx8IERFRkFVTFRfREFURVBJQ0tFUl9EQVRBLmRhdGVzU2VsZWN0ZWQ7XG5cbiAgICB9XG59XG5cblxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVwaWNrZXJEYXRhIHtcbiAgICBjYWxlbmRhckNvbmZpZz86IENhbGVuZGFyVmlld0NvbmZpZztcbiAgICBkYXRlc1NlbGVjdGVkPzogc3RyaW5nW107XG4gICAgZGF0ZXM/OiBDZWxsRGF0YTxhbnk+W107XG4gICAgc3R5bGVQcmVmaXg/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0RBVEVQSUNLRVJfREFUQTogRGF0ZXBpY2tlckRhdGEgPSB7XG4gICAgY2FsZW5kYXJDb25maWc6IENhbGVuZGFyVmlld0NvbmZpZy5mcm9tKHtcbiAgICAgICAgc2VsZWN0aW9uOiAncmFuZ2UnXG4gICAgfSksXG4gICAgZGF0ZXNTZWxlY3RlZDogW10sXG4gICAgZGF0ZXM6IFtdLFxuICAgIHN0eWxlUHJlZml4IDogJ3RyYidcbn07XG4iXX0=