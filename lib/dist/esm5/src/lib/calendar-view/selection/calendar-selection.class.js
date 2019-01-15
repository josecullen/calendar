/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SelectionStatus } from './calendar-selection.interface';
import { SingleSelectionStrategy } from './strategy/simple-selection.strategy';
import { EventEmitter } from '@angular/core';
var CalendarSelection = /** @class */ (function () {
    function CalendarSelection(strategy, selectedDates, status, selectionChange, monthSelectionChange) {
        if (strategy === void 0) { strategy = new SingleSelectionStrategy(); }
        if (selectedDates === void 0) { selectedDates = []; }
        if (status === void 0) { status = SelectionStatus.unset; }
        if (selectionChange === void 0) { selectionChange = new EventEmitter(); }
        if (monthSelectionChange === void 0) { monthSelectionChange = new EventEmitter(); }
        this.strategy = strategy;
        this.selectedDates = selectedDates;
        this.status = status;
        this.selectionChange = selectionChange;
        this.monthSelectionChange = monthSelectionChange;
        this.strategy.calendarMonthView.monthSelectionChange = this.monthSelectionChange;
    }
    Object.defineProperty(CalendarSelection.prototype, "calendarMonthView", {
        get: /**
         * @return {?}
         */
        function () {
            return this.strategy.calendarMonthView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarSelection.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return this.strategy.name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} strategy
     * @return {?}
     */
    CalendarSelection.prototype.setStrategy = /**
     * @param {?} strategy
     * @return {?}
     */
    function (strategy) {
        this.strategy = strategy;
        this.selectedDates = [];
        this.strategy.calendarMonthView.monthSelectionChange = this.monthSelectionChange;
    };
    /**
     * @return {?}
     */
    CalendarSelection.prototype.getStrategy = /**
     * @return {?}
     */
    function () {
        return this.strategy;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarSelection.prototype.isInRange = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.strategy.isInRange(date, this);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarSelection.prototype.isSelected = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.strategy.isSelected(date, this);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarSelection.prototype.change = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.strategy.change(date, this);
        this.selectionChange.emit(this);
    };
    // selectedMonthChange(){
    //     this.monthSelectionChange.emit(this)
    // }
    // selectedMonthChange(){
    //     this.monthSelectionChange.emit(this)
    // }
    /**
     * @return {?}
     */
    CalendarSelection.prototype.from = 
    // selectedMonthChange(){
    //     this.monthSelectionChange.emit(this)
    // }
    /**
     * @return {?}
     */
    function () {
        return this.selectedDates.length
            ? this.selectedDates[0]
            : '';
    };
    /**
     * @return {?}
     */
    CalendarSelection.prototype.to = /**
     * @return {?}
     */
    function () {
        return this.selectedDates.length > 1
            ? this.selectedDates[this.selectedDates.length - 1]
            : '';
    };
    return CalendarSelection;
}());
export { CalendarSelection };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CalendarSelection.prototype.strategy;
    /** @type {?} */
    CalendarSelection.prototype.selectedDates;
    /** @type {?} */
    CalendarSelection.prototype.status;
    /** @type {?} */
    CalendarSelection.prototype.selectionChange;
    /** @type {?} */
    CalendarSelection.prototype.monthSelectionChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItc2VsZWN0aW9uLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9jYWxlbmRhci1zZWxlY3Rpb24uY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBc0IsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3QztJQUVJLDJCQUNZLFFBQTJELEVBQzVELGFBQTRCLEVBQzVCLE1BQStDLEVBQy9DLGVBQW9FLEVBQ3BFLG9CQUF5RjtRQUp4Rix5QkFBQSxFQUFBLGVBQWtDLHVCQUF1QixFQUFFO1FBQzVELDhCQUFBLEVBQUEsa0JBQTRCO1FBQzVCLHVCQUFBLEVBQUEsU0FBMEIsZUFBZSxDQUFDLEtBQUs7UUFDL0MsZ0NBQUEsRUFBQSxzQkFBc0QsWUFBWSxFQUFFO1FBQ3BFLHFDQUFBLEVBQUEsMkJBQTJFLFlBQVksRUFBRTtRQUp4RixhQUFRLEdBQVIsUUFBUSxDQUFtRDtRQUM1RCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUF5QztRQUMvQyxvQkFBZSxHQUFmLGVBQWUsQ0FBcUQ7UUFDcEUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxRTtRQUVoRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQTtJQUNwRixDQUFDO0lBRUQsc0JBQUksZ0RBQWlCOzs7O1FBQXJCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFBO1FBQzFDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQUk7Ozs7UUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUE7UUFDN0IsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsdUNBQVc7Ozs7SUFBWCxVQUFZLFFBQTRCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFBO0lBQ3BGLENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxxQ0FBUzs7OztJQUFULFVBQVUsSUFBVztRQUNqQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUM5QyxDQUFDOzs7OztJQUVELHNDQUFVOzs7O0lBQVYsVUFBVyxJQUFXO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQy9DLENBQUM7Ozs7O0lBRUQsa0NBQU07Ozs7SUFBTixVQUFPLElBQVc7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVELHlCQUF5QjtJQUN6QiwyQ0FBMkM7SUFDM0MsSUFBSTs7Ozs7OztJQUVKLGdDQUFJOzs7Ozs7O0lBQUo7UUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTTtZQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUNaLENBQUM7Ozs7SUFFRCw4QkFBRTs7O0lBQUY7UUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDaEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxFQUFFLENBQUE7SUFDWixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBM0RELElBMkRDOzs7Ozs7O0lBeERPLHFDQUFtRTs7SUFDbkUsMENBQW1DOztJQUNuQyxtQ0FBc0Q7O0lBQ3RELDRDQUEyRTs7SUFDM0UsaURBQWdHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUNhbGVuZGFyU2VsZWN0aW9uLCBTZWxlY3Rpb25TdGF0dXMgfSBmcm9tICcuL2NhbGVuZGFyLXNlbGVjdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVNlbGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVneS9zZWxlY3Rpb24tc3RyYXRlZ3kuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNpbmdsZVNlbGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVneS9zaW1wbGUtc2VsZWN0aW9uLnN0cmF0ZWd5JztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aFNlbGVjdGlvbiB9IGZyb20gJy4uL2NhbGVuZGFyLW1vbnRoLXNlbGVjdGlvbi5jbGFzcyc7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclNlbGVjdGlvbiBpbXBsZW1lbnRzIElDYWxlbmRhclNlbGVjdGlvbiwgSVNlbGVjdGlvblN0cmF0ZWd5IHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzdHJhdGVneTpJU2VsZWN0aW9uU3RyYXRlZ3kgPSBuZXcgU2luZ2xlU2VsZWN0aW9uU3RyYXRlZ3koKSxcbiAgICAgICAgcHVibGljIHNlbGVjdGVkRGF0ZXM6IHN0cmluZ1tdID0gW10sXG4gICAgICAgIHB1YmxpYyBzdGF0dXM6IFNlbGVjdGlvblN0YXR1cyA9IFNlbGVjdGlvblN0YXR1cy51bnNldCxcbiAgICAgICAgcHVibGljIHNlbGVjdGlvbkNoYW5nZTpFdmVudEVtaXR0ZXI8Q2FsZW5kYXJTZWxlY3Rpb24+ID0gbmV3IEV2ZW50RW1pdHRlcigpLFxuICAgICAgICBwdWJsaWMgbW9udGhTZWxlY3Rpb25DaGFuZ2U6RXZlbnRFbWl0dGVyPHsgcHJldmlvdXM6IERhdGUsIGN1cnJlbnQ6IERhdGUgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICApe1xuICAgICAgICB0aGlzLnN0cmF0ZWd5LmNhbGVuZGFyTW9udGhWaWV3Lm1vbnRoU2VsZWN0aW9uQ2hhbmdlID0gdGhpcy5tb250aFNlbGVjdGlvbkNoYW5nZVxuICAgIH1cblxuICAgIGdldCBjYWxlbmRhck1vbnRoVmlldygpOkNhbGVuZGFyTW9udGhTZWxlY3Rpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJhdGVneS5jYWxlbmRhck1vbnRoVmlld1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJhdGVneS5uYW1lXG4gICAgfVxuXG4gICAgc2V0U3RyYXRlZ3koc3RyYXRlZ3kgOklTZWxlY3Rpb25TdHJhdGVneSl7XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kgPSBzdHJhdGVneVxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZXMgPSBbXVxuICAgICAgICB0aGlzLnN0cmF0ZWd5LmNhbGVuZGFyTW9udGhWaWV3Lm1vbnRoU2VsZWN0aW9uQ2hhbmdlID0gdGhpcy5tb250aFNlbGVjdGlvbkNoYW5nZVxuICAgIH1cblxuICAgIGdldFN0cmF0ZWd5KCk6SVNlbGVjdGlvblN0cmF0ZWd5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyYXRlZ3lcbiAgICB9XG5cbiAgICBpc0luUmFuZ2UoZGF0ZTpzdHJpbmcpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJhdGVneS5pc0luUmFuZ2UoZGF0ZSwgdGhpcylcbiAgICB9XG5cbiAgICBpc1NlbGVjdGVkKGRhdGU6c3RyaW5nKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyYXRlZ3kuaXNTZWxlY3RlZChkYXRlLCB0aGlzKVxuICAgIH1cblxuICAgIGNoYW5nZShkYXRlOnN0cmluZyl7XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kuY2hhbmdlKGRhdGUsIHRoaXMpXG5cbiAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzKVxuICAgIH1cblxuICAgIC8vIHNlbGVjdGVkTW9udGhDaGFuZ2UoKXtcbiAgICAvLyAgICAgdGhpcy5tb250aFNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMpXG4gICAgLy8gfVxuXG4gICAgZnJvbSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkRGF0ZXMubGVuZ3RoIFxuICAgICAgICAgICAgPyB0aGlzLnNlbGVjdGVkRGF0ZXNbMF0gXG4gICAgICAgICAgICA6ICcnXG4gICAgfVxuXG4gICAgdG8oKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDEgXG4gICAgICAgICAgICA/IHRoaXMuc2VsZWN0ZWREYXRlc1t0aGlzLnNlbGVjdGVkRGF0ZXMubGVuZ3RoLTFdIFxuICAgICAgICAgICAgOiAnJ1xuICAgIH1cbn1cbiJdfQ==