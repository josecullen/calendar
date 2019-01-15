/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SelectionStatus } from './calendar-selection.interface';
import { SingleSelectionStrategy } from './strategy/simple-selection.strategy';
import { EventEmitter } from '@angular/core';
export class CalendarSelection {
    /**
     * @param {?=} strategy
     * @param {?=} selectedDates
     * @param {?=} status
     * @param {?=} selectionChange
     * @param {?=} monthSelectionChange
     */
    constructor(strategy = new SingleSelectionStrategy(), selectedDates = [], status = SelectionStatus.unset, selectionChange = new EventEmitter(), monthSelectionChange = new EventEmitter()) {
        this.strategy = strategy;
        this.selectedDates = selectedDates;
        this.status = status;
        this.selectionChange = selectionChange;
        this.monthSelectionChange = monthSelectionChange;
        this.strategy.calendarMonthView.monthSelectionChange = this.monthSelectionChange;
    }
    /**
     * @return {?}
     */
    get calendarMonthView() {
        return this.strategy.calendarMonthView;
    }
    /**
     * @return {?}
     */
    get name() {
        return this.strategy.name;
    }
    /**
     * @param {?} strategy
     * @return {?}
     */
    setStrategy(strategy) {
        this.strategy = strategy;
        this.selectedDates = [];
        this.strategy.calendarMonthView.monthSelectionChange = this.monthSelectionChange;
    }
    /**
     * @return {?}
     */
    getStrategy() {
        return this.strategy;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isInRange(date) {
        return this.strategy.isInRange(date, this);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSelected(date) {
        return this.strategy.isSelected(date, this);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    change(date) {
        this.strategy.change(date, this);
        this.selectionChange.emit(this);
    }
    // selectedMonthChange(){
    //     this.monthSelectionChange.emit(this)
    // }
    /**
     * @return {?}
     */
    from() {
        return this.selectedDates.length
            ? this.selectedDates[0]
            : '';
    }
    /**
     * @return {?}
     */
    to() {
        return this.selectedDates.length > 1
            ? this.selectedDates[this.selectedDates.length - 1]
            : '';
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItc2VsZWN0aW9uLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9jYWxlbmRhci1zZWxlY3Rpb24uY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBc0IsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3QyxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7OztJQUUxQixZQUNZLFdBQThCLElBQUksdUJBQXVCLEVBQUUsRUFDNUQsZ0JBQTBCLEVBQUUsRUFDNUIsU0FBMEIsZUFBZSxDQUFDLEtBQUssRUFDL0Msa0JBQWtELElBQUksWUFBWSxFQUFFLEVBQ3BFLHVCQUF1RSxJQUFJLFlBQVksRUFBRTtRQUp4RixhQUFRLEdBQVIsUUFBUSxDQUFtRDtRQUM1RCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUF5QztRQUMvQyxvQkFBZSxHQUFmLGVBQWUsQ0FBcUQ7UUFDcEUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxRTtRQUVoRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQTtJQUNwRixDQUFDOzs7O0lBRUQsSUFBSSxpQkFBaUI7UUFDakIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFBO0lBQzFDLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFBO0lBQzdCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQTRCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFBO0lBQ3BGLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3hCLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBVztRQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMvQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxJQUFXO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRWhDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ25DLENBQUM7Ozs7Ozs7SUFNRCxJQUFJO1FBQ0EsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU07WUFDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxFQUFFLENBQUE7SUFDWixDQUFDOzs7O0lBRUQsRUFBRTtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNoQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7WUFDakQsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUNaLENBQUM7Q0FDSjs7Ozs7O0lBeERPLHFDQUFtRTs7SUFDbkUsMENBQW1DOztJQUNuQyxtQ0FBc0Q7O0lBQ3RELDRDQUEyRTs7SUFDM0UsaURBQWdHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUNhbGVuZGFyU2VsZWN0aW9uLCBTZWxlY3Rpb25TdGF0dXMgfSBmcm9tICcuL2NhbGVuZGFyLXNlbGVjdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVNlbGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVneS9zZWxlY3Rpb24tc3RyYXRlZ3kuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNpbmdsZVNlbGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVneS9zaW1wbGUtc2VsZWN0aW9uLnN0cmF0ZWd5JztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aFNlbGVjdGlvbiB9IGZyb20gJy4uL2NhbGVuZGFyLW1vbnRoLXNlbGVjdGlvbi5jbGFzcyc7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclNlbGVjdGlvbiBpbXBsZW1lbnRzIElDYWxlbmRhclNlbGVjdGlvbiwgSVNlbGVjdGlvblN0cmF0ZWd5IHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzdHJhdGVneTpJU2VsZWN0aW9uU3RyYXRlZ3kgPSBuZXcgU2luZ2xlU2VsZWN0aW9uU3RyYXRlZ3koKSxcbiAgICAgICAgcHVibGljIHNlbGVjdGVkRGF0ZXM6IHN0cmluZ1tdID0gW10sXG4gICAgICAgIHB1YmxpYyBzdGF0dXM6IFNlbGVjdGlvblN0YXR1cyA9IFNlbGVjdGlvblN0YXR1cy51bnNldCxcbiAgICAgICAgcHVibGljIHNlbGVjdGlvbkNoYW5nZTpFdmVudEVtaXR0ZXI8Q2FsZW5kYXJTZWxlY3Rpb24+ID0gbmV3IEV2ZW50RW1pdHRlcigpLFxuICAgICAgICBwdWJsaWMgbW9udGhTZWxlY3Rpb25DaGFuZ2U6RXZlbnRFbWl0dGVyPHsgcHJldmlvdXM6IERhdGUsIGN1cnJlbnQ6IERhdGUgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICApe1xuICAgICAgICB0aGlzLnN0cmF0ZWd5LmNhbGVuZGFyTW9udGhWaWV3Lm1vbnRoU2VsZWN0aW9uQ2hhbmdlID0gdGhpcy5tb250aFNlbGVjdGlvbkNoYW5nZVxuICAgIH1cblxuICAgIGdldCBjYWxlbmRhck1vbnRoVmlldygpOkNhbGVuZGFyTW9udGhTZWxlY3Rpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJhdGVneS5jYWxlbmRhck1vbnRoVmlld1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJhdGVneS5uYW1lXG4gICAgfVxuXG4gICAgc2V0U3RyYXRlZ3koc3RyYXRlZ3kgOklTZWxlY3Rpb25TdHJhdGVneSl7XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kgPSBzdHJhdGVneVxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZXMgPSBbXVxuICAgICAgICB0aGlzLnN0cmF0ZWd5LmNhbGVuZGFyTW9udGhWaWV3Lm1vbnRoU2VsZWN0aW9uQ2hhbmdlID0gdGhpcy5tb250aFNlbGVjdGlvbkNoYW5nZVxuICAgIH1cblxuICAgIGdldFN0cmF0ZWd5KCk6SVNlbGVjdGlvblN0cmF0ZWd5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyYXRlZ3lcbiAgICB9XG5cbiAgICBpc0luUmFuZ2UoZGF0ZTpzdHJpbmcpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJhdGVneS5pc0luUmFuZ2UoZGF0ZSwgdGhpcylcbiAgICB9XG5cbiAgICBpc1NlbGVjdGVkKGRhdGU6c3RyaW5nKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyYXRlZ3kuaXNTZWxlY3RlZChkYXRlLCB0aGlzKVxuICAgIH1cblxuICAgIGNoYW5nZShkYXRlOnN0cmluZyl7XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kuY2hhbmdlKGRhdGUsIHRoaXMpXG5cbiAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzKVxuICAgIH1cblxuICAgIC8vIHNlbGVjdGVkTW9udGhDaGFuZ2UoKXtcbiAgICAvLyAgICAgdGhpcy5tb250aFNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMpXG4gICAgLy8gfVxuXG4gICAgZnJvbSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkRGF0ZXMubGVuZ3RoIFxuICAgICAgICAgICAgPyB0aGlzLnNlbGVjdGVkRGF0ZXNbMF0gXG4gICAgICAgICAgICA6ICcnXG4gICAgfVxuXG4gICAgdG8oKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDEgXG4gICAgICAgICAgICA/IHRoaXMuc2VsZWN0ZWREYXRlc1t0aGlzLnNlbGVjdGVkRGF0ZXMubGVuZ3RoLTFdIFxuICAgICAgICAgICAgOiAnJ1xuICAgIH1cbn1cbiJdfQ==