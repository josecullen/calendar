/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { format, getMonth, getYear, addMonths, addYears, subMonths, subYears, setMonth, setYear } from 'date-fns';
var MonthSelection = /** @class */ (function () {
    function MonthSelection(date, year, month, selectionChange) {
        this.date = date;
        this.year = year;
        this.month = month;
        this.selectionChange = selectionChange;
    }
    Object.defineProperty(MonthSelection.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return format(this.date, 'MMMM YYYY');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} months
     * @return {?}
     */
    MonthSelection.prototype.labelWithConfig = /**
     * @param {?} months
     * @return {?}
     */
    function (months) {
        return months ? months[getMonth(this.date)] + " " + getYear(this.date) : this.label;
    };
    /**
     * @return {?}
     */
    MonthSelection.prototype.addMonth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previousDate = this.date;
        this.date = addMonths(this.date, 1);
        this.update(previousDate);
    };
    /**
     * @return {?}
     */
    MonthSelection.prototype.addYear = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previousDate = this.date;
        this.date = addYears(this.date, 1);
        this.update(previousDate);
    };
    /**
     * @return {?}
     */
    MonthSelection.prototype.minusMonth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previousDate = this.date;
        this.date = subMonths(this.date, 1);
        this.update(previousDate);
    };
    /**
     * @return {?}
     */
    MonthSelection.prototype.minusYear = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previousDate = this.date;
        this.date = subYears(this.date, 1);
        this.update(previousDate);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MonthSelection.prototype.setMonthAndYear = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var month = getMonth(date);
        /** @type {?} */
        var year = getYear(date);
        /** @type {?} */
        var previousDate = this.date;
        this.date = setMonth(this.date, month);
        this.date = setYear(this.date, year);
        this.update(previousDate);
    };
    /**
     * @private
     * @param {?} previous
     * @return {?}
     */
    MonthSelection.prototype.update = /**
     * @private
     * @param {?} previous
     * @return {?}
     */
    function (previous) {
        this.year = getYear(this.date);
        this.month = getMonth(this.date);
        this.selectionChange.emit({
            previous: previous, current: this.date
        });
    };
    return MonthSelection;
}());
export { MonthSelection };
if (false) {
    /** @type {?} */
    MonthSelection.prototype.date;
    /** @type {?} */
    MonthSelection.prototype.year;
    /** @type {?} */
    MonthSelection.prototype.month;
    /** @type {?} */
    MonthSelection.prototype.selectionChange;
}
var CalendarMonthSelection = /** @class */ (function () {
    function CalendarMonthSelection(needTwoMonthView, from, to, _monthSelectionChange) {
        this.needTwoMonthView = needTwoMonthView;
        this.from = from;
        this.to = to;
        this._monthSelectionChange = _monthSelectionChange;
        /** @type {?} */
        var date = new Date();
        if (!from) {
            this.from = new MonthSelection(date, getYear(date), getMonth(date), this.monthSelectionChange);
        }
        if (!to) {
            /** @type {?} */
            var nextMonth = addMonths(date, 1);
            this.to = new MonthSelection(nextMonth, getYear(nextMonth), getMonth(nextMonth), this.monthSelectionChange);
        }
    }
    Object.defineProperty(CalendarMonthSelection.prototype, "monthSelectionChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._monthSelectionChange;
        },
        set: /**
         * @param {?} monthSelectionChange
         * @return {?}
         */
        function (monthSelectionChange) {
            this._monthSelectionChange = monthSelectionChange;
            this.from.selectionChange = monthSelectionChange;
            this.to.selectionChange = monthSelectionChange;
        },
        enumerable: true,
        configurable: true
    });
    return CalendarMonthSelection;
}());
export { CalendarMonthSelection };
if (false) {
    /** @type {?} */
    CalendarMonthSelection.prototype.needTwoMonthView;
    /** @type {?} */
    CalendarMonthSelection.prototype.from;
    /** @type {?} */
    CalendarMonthSelection.prototype.to;
    /**
     * @type {?}
     * @private
     */
    CalendarMonthSelection.prototype._monthSelectionChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbW9udGgtc2VsZWN0aW9uLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jYWxlbmRhci12aWV3L2NhbGVuZGFyLW1vbnRoLXNlbGVjdGlvbi5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxIO0lBRUksd0JBQ1csSUFBVSxFQUNWLElBQVksRUFDWixLQUFhLEVBQ2IsZUFBaUU7UUFIakUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2Isb0JBQWUsR0FBZixlQUFlLENBQWtEO0lBQ3pFLENBQUM7SUFFSixzQkFBSSxpQ0FBSzs7OztRQUFUO1lBQ0ksT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTs7Ozs7SUFFRCx3Q0FBZTs7OztJQUFmLFVBQWdCLE1BQWdCO1FBQzVCLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDeEYsQ0FBQzs7OztJQUVELGlDQUFROzs7SUFBUjs7WUFDVSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLENB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QixJQUFJLENBQUMsb0JBQW9CLENBQzVCLENBQUM7U0FDTDtJQUNMLENBQUM7SUFFRCxzQkFBSSx3REFBb0I7Ozs7UUFNeEI7WUFDSSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7OztRQVJELFVBQXlCLG9CQUFxRTtZQUMxRixJQUFJLENBQUMscUJBQXFCLEdBQUcsb0JBQW9CLENBQUM7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQW9CLENBQUM7WUFDakQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEdBQUcsb0JBQW9CLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFLTCw2QkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7Ozs7SUFwQ08sa0RBQWdDOztJQUNoQyxzQ0FBNEI7O0lBQzVCLG9DQUEwQjs7Ozs7SUFDMUIsdURBQStFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmb3JtYXQsIGdldE1vbnRoLCBnZXRZZWFyLCBhZGRNb250aHMsIGFkZFllYXJzLCBzdWJNb250aHMsIHN1YlllYXJzLCBzZXRNb250aCwgc2V0WWVhciB9IGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGNsYXNzIE1vbnRoU2VsZWN0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZGF0ZTogRGF0ZSxcbiAgICAgICAgcHVibGljIHllYXI6IG51bWJlcixcbiAgICAgICAgcHVibGljIG1vbnRoOiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBzZWxlY3Rpb25DaGFuZ2U/OiBFdmVudEVtaXR0ZXI8eyBwcmV2aW91czogRGF0ZSwgY3VycmVudDogRGF0ZSB9PlxuICAgICkge31cblxuICAgIGdldCBsYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0KHRoaXMuZGF0ZSwgJ01NTU0gWVlZWScpO1xuICAgIH1cblxuICAgIGxhYmVsV2l0aENvbmZpZyhtb250aHM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG1vbnRocyA/IGAke21vbnRoc1tnZXRNb250aCh0aGlzLmRhdGUpXX0gJHtnZXRZZWFyKHRoaXMuZGF0ZSl9YCA6IHRoaXMubGFiZWw7XG4gICAgfVxuXG4gICAgYWRkTW9udGgoKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzRGF0ZSA9IHRoaXMuZGF0ZTtcbiAgICAgICAgdGhpcy5kYXRlID0gYWRkTW9udGhzKHRoaXMuZGF0ZSwgMSk7XG4gICAgICAgIHRoaXMudXBkYXRlKHByZXZpb3VzRGF0ZSk7XG4gICAgfVxuXG4gICAgYWRkWWVhcigpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNEYXRlID0gdGhpcy5kYXRlO1xuICAgICAgICB0aGlzLmRhdGUgPSBhZGRZZWFycyh0aGlzLmRhdGUsIDEpO1xuICAgICAgICB0aGlzLnVwZGF0ZShwcmV2aW91c0RhdGUpO1xuICAgIH1cblxuICAgIG1pbnVzTW9udGgoKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzRGF0ZSA9IHRoaXMuZGF0ZTtcbiAgICAgICAgdGhpcy5kYXRlID0gc3ViTW9udGhzKHRoaXMuZGF0ZSwgMSk7XG4gICAgICAgIHRoaXMudXBkYXRlKHByZXZpb3VzRGF0ZSk7XG4gICAgfVxuXG4gICAgbWludXNZZWFyKCkge1xuICAgICAgICBjb25zdCBwcmV2aW91c0RhdGUgPSB0aGlzLmRhdGU7XG4gICAgICAgIHRoaXMuZGF0ZSA9IHN1YlllYXJzKHRoaXMuZGF0ZSwgMSk7XG4gICAgICAgIHRoaXMudXBkYXRlKHByZXZpb3VzRGF0ZSk7XG4gICAgfVxuXG4gICAgc2V0TW9udGhBbmRZZWFyKGRhdGU6IERhdGUpIHtcbiAgICAgICAgY29uc3QgbW9udGggPSBnZXRNb250aChkYXRlKTtcbiAgICAgICAgY29uc3QgeWVhciA9IGdldFllYXIoZGF0ZSk7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzRGF0ZSA9IHRoaXMuZGF0ZTtcbiAgICAgICAgdGhpcy5kYXRlID0gc2V0TW9udGgodGhpcy5kYXRlLCBtb250aCk7XG4gICAgICAgIHRoaXMuZGF0ZSA9IHNldFllYXIodGhpcy5kYXRlLCB5ZWFyKTtcbiAgICAgICAgdGhpcy51cGRhdGUocHJldmlvdXNEYXRlKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgdXBkYXRlKHByZXZpb3VzOiBEYXRlKSB7XG4gICAgICAgIHRoaXMueWVhciA9IGdldFllYXIodGhpcy5kYXRlKTtcbiAgICAgICAgdGhpcy5tb250aCA9IGdldE1vbnRoKHRoaXMuZGF0ZSk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgcHJldmlvdXMsIGN1cnJlbnQ6IHRoaXMuZGF0ZVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhck1vbnRoU2VsZWN0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgbmVlZFR3b01vbnRoVmlldzogYm9vbGVhbixcbiAgICAgICAgcHVibGljIGZyb20/OiBNb250aFNlbGVjdGlvbixcbiAgICAgICAgcHVibGljIHRvPzogTW9udGhTZWxlY3Rpb24sXG4gICAgICAgIHByaXZhdGUgX21vbnRoU2VsZWN0aW9uQ2hhbmdlPzogRXZlbnRFbWl0dGVyPHsgcHJldmlvdXM6IERhdGUsIGN1cnJlbnQ6IERhdGUgfT5cbiAgICApIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgaWYgKCFmcm9tKSB7XG4gICAgICAgICAgICB0aGlzLmZyb20gPSBuZXcgTW9udGhTZWxlY3Rpb24oXG4gICAgICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgICAgICAgICBnZXRZZWFyKGRhdGUpLFxuICAgICAgICAgICAgICAgIGdldE1vbnRoKGRhdGUpLFxuICAgICAgICAgICAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25DaGFuZ2VcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRvKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0TW9udGggPSBhZGRNb250aHMoZGF0ZSwgMSk7XG4gICAgICAgICAgICB0aGlzLnRvID0gbmV3IE1vbnRoU2VsZWN0aW9uKFxuICAgICAgICAgICAgICAgIG5leHRNb250aCxcbiAgICAgICAgICAgICAgICBnZXRZZWFyKG5leHRNb250aCksXG4gICAgICAgICAgICAgICAgZ2V0TW9udGgobmV4dE1vbnRoKSxcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoU2VsZWN0aW9uQ2hhbmdlXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0IG1vbnRoU2VsZWN0aW9uQ2hhbmdlKG1vbnRoU2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBwcmV2aW91czogRGF0ZSwgY3VycmVudDogRGF0ZSB9Pikge1xuICAgICAgICB0aGlzLl9tb250aFNlbGVjdGlvbkNoYW5nZSA9IG1vbnRoU2VsZWN0aW9uQ2hhbmdlO1xuICAgICAgICB0aGlzLmZyb20uc2VsZWN0aW9uQ2hhbmdlID0gbW9udGhTZWxlY3Rpb25DaGFuZ2U7XG4gICAgICAgIHRoaXMudG8uc2VsZWN0aW9uQ2hhbmdlID0gbW9udGhTZWxlY3Rpb25DaGFuZ2U7XG4gICAgfVxuXG4gICAgZ2V0IG1vbnRoU2VsZWN0aW9uQ2hhbmdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhTZWxlY3Rpb25DaGFuZ2U7XG4gICAgfVxufVxuXG4iXX0=