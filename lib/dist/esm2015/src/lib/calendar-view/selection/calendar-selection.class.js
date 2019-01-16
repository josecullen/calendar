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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItc2VsZWN0aW9uLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9jYWxlbmRhci1zZWxlY3Rpb24uY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBc0IsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3QyxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7OztJQUUxQixZQUNZLFdBQStCLElBQUksdUJBQXVCLEVBQUUsRUFDN0QsZ0JBQTBCLEVBQUUsRUFDNUIsU0FBMEIsZUFBZSxDQUFDLEtBQUssRUFDL0Msa0JBQW1ELElBQUksWUFBWSxFQUFFLEVBQ3JFLHVCQUF3RSxJQUFJLFlBQVksRUFBRTtRQUp6RixhQUFRLEdBQVIsUUFBUSxDQUFvRDtRQUM3RCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUF5QztRQUMvQyxvQkFBZSxHQUFmLGVBQWUsQ0FBc0Q7UUFDckUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzRTtRQUVqRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNyRixDQUFDOzs7O0lBRUQsSUFBSSxpQkFBaUI7UUFDakIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQTRCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ3JGLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQVk7UUFDbEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBWTtRQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxJQUFZO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWpDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7Ozs7SUFNRCxJQUFJO1FBQ0EsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU07WUFDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDOzs7O0lBRUQsRUFBRTtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNoQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7Q0FDSjs7Ozs7O0lBeERPLHFDQUFvRTs7SUFDcEUsMENBQW1DOztJQUNuQyxtQ0FBc0Q7O0lBQ3RELDRDQUE0RTs7SUFDNUUsaURBQWlHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUNhbGVuZGFyU2VsZWN0aW9uLCBTZWxlY3Rpb25TdGF0dXMgfSBmcm9tICcuL2NhbGVuZGFyLXNlbGVjdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVNlbGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVneS9zZWxlY3Rpb24tc3RyYXRlZ3kuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNpbmdsZVNlbGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVneS9zaW1wbGUtc2VsZWN0aW9uLnN0cmF0ZWd5JztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aFNlbGVjdGlvbiB9IGZyb20gJy4uL2NhbGVuZGFyLW1vbnRoLXNlbGVjdGlvbi5jbGFzcyc7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclNlbGVjdGlvbiBpbXBsZW1lbnRzIElDYWxlbmRhclNlbGVjdGlvbiwgSVNlbGVjdGlvblN0cmF0ZWd5IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHN0cmF0ZWd5OiBJU2VsZWN0aW9uU3RyYXRlZ3kgPSBuZXcgU2luZ2xlU2VsZWN0aW9uU3RyYXRlZ3koKSxcbiAgICAgICAgcHVibGljIHNlbGVjdGVkRGF0ZXM6IHN0cmluZ1tdID0gW10sXG4gICAgICAgIHB1YmxpYyBzdGF0dXM6IFNlbGVjdGlvblN0YXR1cyA9IFNlbGVjdGlvblN0YXR1cy51bnNldCxcbiAgICAgICAgcHVibGljIHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPENhbGVuZGFyU2VsZWN0aW9uPiA9IG5ldyBFdmVudEVtaXR0ZXIoKSxcbiAgICAgICAgcHVibGljIG1vbnRoU2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBwcmV2aW91czogRGF0ZSwgY3VycmVudDogRGF0ZSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgICkge1xuICAgICAgICB0aGlzLnN0cmF0ZWd5LmNhbGVuZGFyTW9udGhWaWV3Lm1vbnRoU2VsZWN0aW9uQ2hhbmdlID0gdGhpcy5tb250aFNlbGVjdGlvbkNoYW5nZTtcbiAgICB9XG5cbiAgICBnZXQgY2FsZW5kYXJNb250aFZpZXcoKTogQ2FsZW5kYXJNb250aFNlbGVjdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmF0ZWd5LmNhbGVuZGFyTW9udGhWaWV3O1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJhdGVneS5uYW1lO1xuICAgIH1cblxuICAgIHNldFN0cmF0ZWd5KHN0cmF0ZWd5OiBJU2VsZWN0aW9uU3RyYXRlZ3kpIHtcbiAgICAgICAgdGhpcy5zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zdHJhdGVneS5jYWxlbmRhck1vbnRoVmlldy5tb250aFNlbGVjdGlvbkNoYW5nZSA9IHRoaXMubW9udGhTZWxlY3Rpb25DaGFuZ2U7XG4gICAgfVxuXG4gICAgZ2V0U3RyYXRlZ3koKTogSVNlbGVjdGlvblN0cmF0ZWd5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyYXRlZ3k7XG4gICAgfVxuXG4gICAgaXNJblJhbmdlKGRhdGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJhdGVneS5pc0luUmFuZ2UoZGF0ZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgaXNTZWxlY3RlZChkYXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyYXRlZ3kuaXNTZWxlY3RlZChkYXRlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBjaGFuZ2UoZGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kuY2hhbmdlKGRhdGUsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gc2VsZWN0ZWRNb250aENoYW5nZSgpe1xuICAgIC8vICAgICB0aGlzLm1vbnRoU2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcylcbiAgICAvLyB9XG5cbiAgICBmcm9tKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkRGF0ZXMubGVuZ3RoXG4gICAgICAgICAgICA/IHRoaXMuc2VsZWN0ZWREYXRlc1swXVxuICAgICAgICAgICAgOiAnJztcbiAgICB9XG5cbiAgICB0bygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDFcbiAgICAgICAgICAgID8gdGhpcy5zZWxlY3RlZERhdGVzW3RoaXMuc2VsZWN0ZWREYXRlcy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgOiAnJztcbiAgICB9XG59XG4iXX0=