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
        console.log(format(this.date, 'YYYY-MM'), this.year, this.month);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbW9udGgtc2VsZWN0aW9uLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jYWxlbmRhci12aWV3L2NhbGVuZGFyLW1vbnRoLXNlbGVjdGlvbi5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxIO0lBRUksd0JBQ1csSUFBUyxFQUNULElBQVksRUFDWixLQUFhLEVBQ2IsZUFBZ0U7UUFIaEUsU0FBSSxHQUFKLElBQUksQ0FBSztRQUNULFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2Isb0JBQWUsR0FBZixlQUFlLENBQWlEO0lBQ3pFLENBQUM7SUFFSCxzQkFBSSxpQ0FBSzs7OztRQUFUO1lBQ0ksT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQTtRQUN6QyxDQUFDOzs7T0FBQTs7Ozs7SUFFRCx3Q0FBZTs7OztJQUFmLFVBQWdCLE1BQWU7UUFDM0IsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUN2RixDQUFDOzs7O0lBRUQsaUNBQVE7OztJQUFSOztZQUNRLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSTtRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDN0IsQ0FBQzs7OztJQUVELGdDQUFPOzs7SUFBUDs7WUFDUSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQzdCLENBQUM7Ozs7SUFFRCxtQ0FBVTs7O0lBQVY7O1lBQ1EsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUM3QixDQUFDOzs7O0lBRUQsa0NBQVM7OztJQUFUOztZQUNRLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSTtRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDN0IsQ0FBQzs7Ozs7SUFFRCx3Q0FBZTs7OztJQUFmLFVBQWdCLElBQVM7O1lBQ2YsS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7O1lBQ3RCLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDOztZQUN0QixZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDN0IsQ0FBQzs7Ozs7O0lBR08sK0JBQU07Ozs7O0lBQWQsVUFBZSxRQUFhO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDdEIsUUFBUSxVQUFBLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQy9CLENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDbkUsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQTNERCxJQTJEQzs7OztJQXhETyw4QkFBZ0I7O0lBQ2hCLDhCQUFtQjs7SUFDbkIsK0JBQW9COztJQUNwQix5Q0FBdUU7O0FBdUQvRTtJQUVJLGdDQUNXLGdCQUF3QixFQUN4QixJQUFxQixFQUNyQixFQUFtQixFQUNsQixxQkFBc0U7UUFIdkUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFRO1FBQ3hCLFNBQUksR0FBSixJQUFJLENBQWlCO1FBQ3JCLE9BQUUsR0FBRixFQUFFLENBQWlCO1FBQ2xCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBaUQ7O1lBRTFFLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtRQUVyQixJQUFHLENBQUMsSUFBSSxFQUFDO1lBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGNBQWMsQ0FDMUIsSUFBSSxFQUNKLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFDYixRQUFRLENBQUMsSUFBSSxDQUFDLEVBQ2QsSUFBSSxDQUFDLG9CQUFvQixDQUM1QixDQUFBO1NBQ0o7UUFFRCxJQUFHLENBQUMsRUFBRSxFQUFDOztnQkFDQyxTQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLGNBQWMsQ0FDeEIsU0FBUyxFQUNULE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFDbEIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUNuQixJQUFJLENBQUMsb0JBQW9CLENBQzVCLENBQUE7U0FDSjtJQUNMLENBQUM7SUFFRCxzQkFBSSx3REFBb0I7Ozs7UUFNeEI7WUFDSSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQTtRQUNyQyxDQUFDOzs7OztRQVJELFVBQXlCLG9CQUFvRTtZQUN6RixJQUFJLENBQUMscUJBQXFCLEdBQUcsb0JBQW9CLENBQUE7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQW9CLENBQUE7WUFDaEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEdBQUcsb0JBQW9CLENBQUE7UUFDbEQsQ0FBQzs7O09BQUE7SUFLTCw2QkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7Ozs7SUFwQ08sa0RBQStCOztJQUMvQixzQ0FBNEI7O0lBQzVCLG9DQUEwQjs7Ozs7SUFDMUIsdURBQThFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IGZvcm1hdCwgZ2V0TW9udGgsIGdldFllYXIsIGFkZE1vbnRocywgYWRkWWVhcnMsIHN1Yk1vbnRocywgc3ViWWVhcnMsIHNldE1vbnRoLCBzZXRZZWFyIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5leHBvcnQgY2xhc3MgTW9udGhTZWxlY3Rpb24ge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZGF0ZTpEYXRlLFxuICAgICAgICBwdWJsaWMgeWVhcjogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgbW9udGg6IG51bWJlcixcbiAgICAgICAgcHVibGljIHNlbGVjdGlvbkNoYW5nZT86RXZlbnRFbWl0dGVyPHsgcHJldmlvdXM6IERhdGUsIGN1cnJlbnQ6IERhdGUgfT5cbiAgICApe31cblxuICAgIGdldCBsYWJlbCgpOnN0cmluZyB7ICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZvcm1hdCh0aGlzLmRhdGUsICdNTU1NIFlZWVknKVxuICAgIH1cblxuICAgIGxhYmVsV2l0aENvbmZpZyhtb250aHM6c3RyaW5nW10pOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBtb250aHMgPyBgJHttb250aHNbZ2V0TW9udGgodGhpcy5kYXRlKV19ICR7Z2V0WWVhcih0aGlzLmRhdGUpfWAgOiB0aGlzLmxhYmVsXG4gICAgfVxuXG4gICAgYWRkTW9udGgoKXtcbiAgICAgICAgbGV0IHByZXZpb3VzRGF0ZSA9IHRoaXMuZGF0ZVxuICAgICAgICB0aGlzLmRhdGUgPSBhZGRNb250aHModGhpcy5kYXRlLCAxKVxuICAgICAgICB0aGlzLnVwZGF0ZShwcmV2aW91c0RhdGUpXG4gICAgfVxuXG4gICAgYWRkWWVhcigpe1xuICAgICAgICBsZXQgcHJldmlvdXNEYXRlID0gdGhpcy5kYXRlXG4gICAgICAgIHRoaXMuZGF0ZSA9IGFkZFllYXJzKHRoaXMuZGF0ZSwgMSlcbiAgICAgICAgdGhpcy51cGRhdGUocHJldmlvdXNEYXRlKVxuICAgIH1cblxuICAgIG1pbnVzTW9udGgoKXtcbiAgICAgICAgbGV0IHByZXZpb3VzRGF0ZSA9IHRoaXMuZGF0ZVxuICAgICAgICB0aGlzLmRhdGUgPSBzdWJNb250aHModGhpcy5kYXRlLCAxKVxuICAgICAgICB0aGlzLnVwZGF0ZShwcmV2aW91c0RhdGUpXG4gICAgfVxuXG4gICAgbWludXNZZWFyKCl7XG4gICAgICAgIGxldCBwcmV2aW91c0RhdGUgPSB0aGlzLmRhdGVcbiAgICAgICAgdGhpcy5kYXRlID0gc3ViWWVhcnModGhpcy5kYXRlLCAxKVxuICAgICAgICB0aGlzLnVwZGF0ZShwcmV2aW91c0RhdGUpXG4gICAgfVxuXG4gICAgc2V0TW9udGhBbmRZZWFyKGRhdGU6RGF0ZSl7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gZ2V0TW9udGgoZGF0ZSlcbiAgICAgICAgY29uc3QgeWVhciA9IGdldFllYXIoZGF0ZSlcbiAgICAgICAgbGV0IHByZXZpb3VzRGF0ZSA9IHRoaXMuZGF0ZVxuICAgICAgICB0aGlzLmRhdGUgPSBzZXRNb250aCh0aGlzLmRhdGUsIG1vbnRoKVxuICAgICAgICB0aGlzLmRhdGUgPSBzZXRZZWFyKHRoaXMuZGF0ZSwgeWVhcilcbiAgICAgICAgdGhpcy51cGRhdGUocHJldmlvdXNEYXRlKVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSB1cGRhdGUocHJldmlvdXM6RGF0ZSl7XG4gICAgICAgIHRoaXMueWVhciA9IGdldFllYXIodGhpcy5kYXRlKVxuICAgICAgICB0aGlzLm1vbnRoID0gZ2V0TW9udGgodGhpcy5kYXRlKVxuICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgIHByZXZpb3VzLCBjdXJyZW50OiB0aGlzLmRhdGVcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coZm9ybWF0KHRoaXMuZGF0ZSwgJ1lZWVktTU0nKSx0aGlzLnllYXIsIHRoaXMubW9udGgpXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb250aFNlbGVjdGlvbiB7XG4gICAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBuZWVkVHdvTW9udGhWaWV3OmJvb2xlYW4sXG4gICAgICAgIHB1YmxpYyBmcm9tPzogTW9udGhTZWxlY3Rpb24sXG4gICAgICAgIHB1YmxpYyB0bz86IE1vbnRoU2VsZWN0aW9uLFxuICAgICAgICBwcml2YXRlIF9tb250aFNlbGVjdGlvbkNoYW5nZT86RXZlbnRFbWl0dGVyPHsgcHJldmlvdXM6IERhdGUsIGN1cnJlbnQ6IERhdGUgfT5cbiAgICApe1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKClcblxuICAgICAgICBpZighZnJvbSl7XG4gICAgICAgICAgICB0aGlzLmZyb20gPSBuZXcgTW9udGhTZWxlY3Rpb24oXG4gICAgICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgICAgICAgICBnZXRZZWFyKGRhdGUpLCBcbiAgICAgICAgICAgICAgICBnZXRNb250aChkYXRlKSxcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoU2VsZWN0aW9uQ2hhbmdlXG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBpZighdG8pe1xuICAgICAgICAgICAgbGV0IG5leHRNb250aCA9IGFkZE1vbnRocyhkYXRlLCAxKVxuICAgICAgICAgICAgdGhpcy50byA9IG5ldyBNb250aFNlbGVjdGlvbihcbiAgICAgICAgICAgICAgICBuZXh0TW9udGgsXG4gICAgICAgICAgICAgICAgZ2V0WWVhcihuZXh0TW9udGgpLCBcbiAgICAgICAgICAgICAgICBnZXRNb250aChuZXh0TW9udGgpLFxuICAgICAgICAgICAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25DaGFuZ2VcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldCBtb250aFNlbGVjdGlvbkNoYW5nZShtb250aFNlbGVjdGlvbkNoYW5nZTpFdmVudEVtaXR0ZXI8eyBwcmV2aW91czogRGF0ZSwgY3VycmVudDogRGF0ZSB9Pil7XG4gICAgICAgIHRoaXMuX21vbnRoU2VsZWN0aW9uQ2hhbmdlID0gbW9udGhTZWxlY3Rpb25DaGFuZ2VcbiAgICAgICAgdGhpcy5mcm9tLnNlbGVjdGlvbkNoYW5nZSA9IG1vbnRoU2VsZWN0aW9uQ2hhbmdlXG4gICAgICAgIHRoaXMudG8uc2VsZWN0aW9uQ2hhbmdlID0gbW9udGhTZWxlY3Rpb25DaGFuZ2VcbiAgICB9XG5cbiAgICBnZXQgbW9udGhTZWxlY3Rpb25DaGFuZ2UoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoU2VsZWN0aW9uQ2hhbmdlXG4gICAgfVxufVxuXG4iXX0=