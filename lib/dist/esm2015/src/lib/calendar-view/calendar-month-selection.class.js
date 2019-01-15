/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { format, getMonth, getYear, addMonths, addYears, subMonths, subYears, setMonth, setYear } from 'date-fns';
export class MonthSelection {
    /**
     * @param {?} date
     * @param {?} year
     * @param {?} month
     * @param {?=} selectionChange
     */
    constructor(date, year, month, selectionChange) {
        this.date = date;
        this.year = year;
        this.month = month;
        this.selectionChange = selectionChange;
    }
    /**
     * @return {?}
     */
    get label() {
        return format(this.date, 'MMMM YYYY');
    }
    /**
     * @param {?} months
     * @return {?}
     */
    labelWithConfig(months) {
        return months ? `${months[getMonth(this.date)]} ${getYear(this.date)}` : this.label;
    }
    /**
     * @return {?}
     */
    addMonth() {
        /** @type {?} */
        let previousDate = this.date;
        this.date = addMonths(this.date, 1);
        this.update(previousDate);
    }
    /**
     * @return {?}
     */
    addYear() {
        /** @type {?} */
        let previousDate = this.date;
        this.date = addYears(this.date, 1);
        this.update(previousDate);
    }
    /**
     * @return {?}
     */
    minusMonth() {
        /** @type {?} */
        let previousDate = this.date;
        this.date = subMonths(this.date, 1);
        this.update(previousDate);
    }
    /**
     * @return {?}
     */
    minusYear() {
        /** @type {?} */
        let previousDate = this.date;
        this.date = subYears(this.date, 1);
        this.update(previousDate);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    setMonthAndYear(date) {
        /** @type {?} */
        const month = getMonth(date);
        /** @type {?} */
        const year = getYear(date);
        /** @type {?} */
        let previousDate = this.date;
        this.date = setMonth(this.date, month);
        this.date = setYear(this.date, year);
        this.update(previousDate);
    }
    /**
     * @private
     * @param {?} previous
     * @return {?}
     */
    update(previous) {
        this.year = getYear(this.date);
        this.month = getMonth(this.date);
        this.selectionChange.emit({
            previous, current: this.date
        });
        console.log(format(this.date, 'YYYY-MM'), this.year, this.month);
    }
}
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
export class CalendarMonthSelection {
    /**
     * @param {?} needTwoMonthView
     * @param {?=} from
     * @param {?=} to
     * @param {?=} _monthSelectionChange
     */
    constructor(needTwoMonthView, from, to, _monthSelectionChange) {
        this.needTwoMonthView = needTwoMonthView;
        this.from = from;
        this.to = to;
        this._monthSelectionChange = _monthSelectionChange;
        /** @type {?} */
        let date = new Date();
        if (!from) {
            this.from = new MonthSelection(date, getYear(date), getMonth(date), this.monthSelectionChange);
        }
        if (!to) {
            /** @type {?} */
            let nextMonth = addMonths(date, 1);
            this.to = new MonthSelection(nextMonth, getYear(nextMonth), getMonth(nextMonth), this.monthSelectionChange);
        }
    }
    /**
     * @param {?} monthSelectionChange
     * @return {?}
     */
    set monthSelectionChange(monthSelectionChange) {
        this._monthSelectionChange = monthSelectionChange;
        this.from.selectionChange = monthSelectionChange;
        this.to.selectionChange = monthSelectionChange;
    }
    /**
     * @return {?}
     */
    get monthSelectionChange() {
        return this._monthSelectionChange;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbW9udGgtc2VsZWN0aW9uLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jYWxlbmRhci12aWV3L2NhbGVuZGFyLW1vbnRoLXNlbGVjdGlvbi5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxILE1BQU0sT0FBTyxjQUFjOzs7Ozs7O0lBRXZCLFlBQ1csSUFBUyxFQUNULElBQVksRUFDWixLQUFhLEVBQ2IsZUFBZ0U7UUFIaEUsU0FBSSxHQUFKLElBQUksQ0FBSztRQUNULFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2Isb0JBQWUsR0FBZixlQUFlLENBQWlEO0lBQ3pFLENBQUM7Ozs7SUFFSCxJQUFJLEtBQUs7UUFDTCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLE1BQWU7UUFDM0IsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDdkYsQ0FBQzs7OztJQUVELFFBQVE7O1lBQ0EsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDbkMsSUFBSSxDQUFD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QVMsRUFDVCxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQ2xCLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFDbkIsSUFBSSxDQUFDLG9CQUFvQixDQUM1QixDQUFBO1NBQ0o7SUFDTCxDQUFDOzs7OztJQUVELElBQUksb0JBQW9CLENBQUMsb0JBQW9FO1FBQ3pGLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxvQkFBb0IsQ0FBQTtRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxvQkFBb0IsQ0FBQTtRQUNoRCxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsR0FBRyxvQkFBb0IsQ0FBQTtJQUNsRCxDQUFDOzs7O0lBRUQsSUFBSSxvQkFBb0I7UUFDcEIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUE7SUFDckMsQ0FBQztDQUNKOzs7SUFwQ08sa0RBQStCOztJQUMvQixzQ0FBNEI7O0lBQzVCLG9DQUEwQjs7Ozs7SUFDMUIsdURBQThFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IGZvcm1hdCwgZ2V0TW9udGgsIGdldFllYXIsIGFkZE1vbnRocywgYWRkWWVhcnMsIHN1Yk1vbnRocywgc3ViWWVhcnMsIHNldE1vbnRoLCBzZXRZZWFyIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5leHBvcnQgY2xhc3MgTW9udGhTZWxlY3Rpb24ge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZGF0ZTpEYXRlLFxuICAgICAgICBwdWJsaWMgeWVhcjogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgbW9udGg6IG51bWJlcixcbiAgICAgICAgcHVibGljIHNlbGVjdGlvbkNoYW5nZT86RXZlbnRFbWl0dGVyPHsgcHJldmlvdXM6IERhdGUsIGN1cnJlbnQ6IERhdGUgfT5cbiAgICApe31cblxuICAgIGdldCBsYWJlbCgpOnN0cmluZyB7ICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZvcm1hdCh0aGlzLmRhdGUsICdNTU1NIFlZWVknKVxuICAgIH1cblxuICAgIGxhYmVsV2l0aENvbmZpZyhtb250aHM6c3RyaW5nW10pOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBtb250aHMgPyBgJHttb250aHNbZ2V0TW9udGgodGhpcy5kYXRlKV19ICR7Z2V0WWVhcih0aGlzLmRhdGUpfWAgOiB0aGlzLmxhYmVsXG4gICAgfVxuXG4gICAgYWRkTW9udGgoKXtcbiAgICAgICAgbGV0IHByZXZpb3VzRGF0ZSA9IHRoaXMuZGF0ZVxuICAgICAgICB0aGlzLmRhdGUgPSBhZGRNb250aHModGhpcy5kYXRlLCAxKVxuICAgICAgICB0aGlzLnVwZGF0ZShwcmV2aW91c0RhdGUpXG4gICAgfVxuXG4gICAgYWRkWWVhcigpe1xuICAgICAgICBsZXQgcHJldmlvdXNEYXRlID0gdGhpcy5kYXRlXG4gICAgICAgIHRoaXMuZGF0ZSA9IGFkZFllYXJzKHRoaXMuZGF0ZSwgMSlcbiAgICAgICAgdGhpcy51cGRhdGUocHJldmlvdXNEYXRlKVxuICAgIH1cblxuICAgIG1pbnVzTW9udGgoKXtcbiAgICAgICAgbGV0IHByZXZpb3VzRGF0ZSA9IHRoaXMuZGF0ZVxuICAgICAgICB0aGlzLmRhdGUgPSBzdWJNb250aHModGhpcy5kYXRlLCAxKVxuICAgICAgICB0aGlzLnVwZGF0ZShwcmV2aW91c0RhdGUpXG4gICAgfVxuXG4gICAgbWludXNZZWFyKCl7XG4gICAgICAgIGxldCBwcmV2aW91c0RhdGUgPSB0aGlzLmRhdGVcbiAgICAgICAgdGhpcy5kYXRlID0gc3ViWWVhcnModGhpcy5kYXRlLCAxKVxuICAgICAgICB0aGlzLnVwZGF0ZShwcmV2aW91c0RhdGUpXG4gICAgfVxuXG4gICAgc2V0TW9udGhBbmRZZWFyKGRhdGU6RGF0ZSl7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gZ2V0TW9udGgoZGF0ZSlcbiAgICAgICAgY29uc3QgeWVhciA9IGdldFllYXIoZGF0ZSlcbiAgICAgICAgbGV0IHByZXZpb3VzRGF0ZSA9IHRoaXMuZGF0ZVxuICAgICAgICB0aGlzLmRhdGUgPSBzZXRNb250aCh0aGlzLmRhdGUsIG1vbnRoKVxuICAgICAgICB0aGlzLmRhdGUgPSBzZXRZZWFyKHRoaXMuZGF0ZSwgeWVhcilcbiAgICAgICAgdGhpcy51cGRhdGUocHJldmlvdXNEYXRlKVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSB1cGRhdGUocHJldmlvdXM6RGF0ZSl7XG4gICAgICAgIHRoaXMueWVhciA9IGdldFllYXIodGhpcy5kYXRlKVxuICAgICAgICB0aGlzLm1vbnRoID0gZ2V0TW9udGgodGhpcy5kYXRlKVxuICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgIHByZXZpb3VzLCBjdXJyZW50OiB0aGlzLmRhdGVcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coZm9ybWF0KHRoaXMuZGF0ZSwgJ1lZWVktTU0nKSx0aGlzLnllYXIsIHRoaXMubW9udGgpXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb250aFNlbGVjdGlvbiB7XG4gICAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBuZWVkVHdvTW9udGhWaWV3OmJvb2xlYW4sXG4gICAgICAgIHB1YmxpYyBmcm9tPzogTW9udGhTZWxlY3Rpb24sXG4gICAgICAgIHB1YmxpYyB0bz86IE1vbnRoU2VsZWN0aW9uLFxuICAgICAgICBwcml2YXRlIF9tb250aFNlbGVjdGlvbkNoYW5nZT86RXZlbnRFbWl0dGVyPHsgcHJldmlvdXM6IERhdGUsIGN1cnJlbnQ6IERhdGUgfT5cbiAgICApe1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKClcblxuICAgICAgICBpZighZnJvbSl7XG4gICAgICAgICAgICB0aGlzLmZyb20gPSBuZXcgTW9udGhTZWxlY3Rpb24oXG4gICAgICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgICAgICAgICBnZXRZZWFyKGRhdGUpLCBcbiAgICAgICAgICAgICAgICBnZXRNb250aChkYXRlKSxcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoU2VsZWN0aW9uQ2hhbmdlXG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBpZighdG8pe1xuICAgICAgICAgICAgbGV0IG5leHRNb250aCA9IGFkZE1vbnRocyhkYXRlLCAxKVxuICAgICAgICAgICAgdGhpcy50byA9IG5ldyBNb250aFNlbGVjdGlvbihcbiAgICAgICAgICAgICAgICBuZXh0TW9udGgsXG4gICAgICAgICAgICAgICAgZ2V0WWVhcihuZXh0TW9udGgpLCBcbiAgICAgICAgICAgICAgICBnZXRNb250aChuZXh0TW9udGgpLFxuICAgICAgICAgICAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25DaGFuZ2VcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldCBtb250aFNlbGVjdGlvbkNoYW5nZShtb250aFNlbGVjdGlvbkNoYW5nZTpFdmVudEVtaXR0ZXI8eyBwcmV2aW91czogRGF0ZSwgY3VycmVudDogRGF0ZSB9Pil7XG4gICAgICAgIHRoaXMuX21vbnRoU2VsZWN0aW9uQ2hhbmdlID0gbW9udGhTZWxlY3Rpb25DaGFuZ2VcbiAgICAgICAgdGhpcy5mcm9tLnNlbGVjdGlvbkNoYW5nZSA9IG1vbnRoU2VsZWN0aW9uQ2hhbmdlXG4gICAgICAgIHRoaXMudG8uc2VsZWN0aW9uQ2hhbmdlID0gbW9udGhTZWxlY3Rpb25DaGFuZ2VcbiAgICB9XG5cbiAgICBnZXQgbW9udGhTZWxlY3Rpb25DaGFuZ2UoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoU2VsZWN0aW9uQ2hhbmdlXG4gICAgfVxufVxuXG4iXX0=