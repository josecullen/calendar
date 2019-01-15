/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding } from '@angular/core';
import { HeaderContext } from '../../context/header-context';
import { getMonth, getYear } from 'date-fns';
export class CalendarHeaderComponent {
    constructor() {
        this.monthSelections = [];
        this.showTwoMonths = false;
        this.monthIndex = 0;
        this.linkedMonths = true;
    }
    /**
     * @return {?}
     */
    get classes() {
        return `${this.context.stylePrefix}-calendar-header`;
    }
    /**
     * @return {?}
     */
    get buttonClasses() {
        return `${this.classes}-buttons`;
    }
    /**
     * @return {?}
     */
    showPastMonth() {
        return this.context.pastMonths || !this.isCurrentMonth;
    }
    /**
     * @return {?}
     */
    isCurrentMonth() {
        /** @type {?} */
        const today = new Date();
        return getMonth(today) === this.context.monthSelections[this.context.monthIndex].month
            && getYear(today) === this.context.monthSelections[this.context.monthIndex].year;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    minusYear(index) {
        if (this.linkedMonths) {
            this.monthSelections.forEach(monthSelection => monthSelection.minusYear());
        }
        else {
            this.monthSelections[index].minusYear();
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    minusMonth(index) {
        if (this.linkedMonths) {
            this.monthSelections.forEach(monthSelection => monthSelection.minusMonth());
        }
        else {
            this.monthSelections[index].minusMonth();
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    addYear(index) {
        if (this.linkedMonths) {
            this.monthSelections.forEach(monthSelection => monthSelection.addYear());
        }
        else {
            this.monthSelections[index].addYear();
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    addMonth(index) {
        if (this.linkedMonths) {
            this.monthSelections.forEach(monthSelection => monthSelection.addMonth());
        }
        else {
            this.monthSelections[index].addMonth();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const contextChange = changes['context'];
        if (contextChange) {
            /** @type {?} */
            const context = this.context;
            this.linkedMonths = context.linkedMonths;
            this.monthIndex = context.monthIndex;
            this.monthSelections = context.monthSelections;
            this.showTwoMonths = context.showTwoMonths;
            this.monthLabels = context.monthLabels;
            // console.log('context change', context, this.monthSelections)
        }
    }
}
CalendarHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'trb-calendar-header',
                template: "<trb-calendar-header-buttons \n    [class]=\"buttonClasses\"\n    type=\"back\" \n    *ngIf=\"!showTwoMonths || monthIndex === 0 || !linkedMonths\"\n    (monthClick)=\"minusMonth(0)\" \n    (yearClick)=\"minusYear(0)\"\n    [showChangeMonthButton]=\"context.showChangeMonthButton && showPastMonth()\"\n    [showChangeYearButton]=\"context.showChangeYearButton\">\n</trb-calendar-header-buttons>\n\n<span class=\"filler\"></span>\n\n<span class=\"label\" *ngIf=\"monthSelections && monthSelections.length\">\n    {{ monthSelections[monthIndex].labelWithConfig(monthLabels) }}\n</span>\n\n<span class=\"filler\"></span>\n\n<trb-calendar-header-buttons \n    [class]=\"buttonClasses\"\n    *ngIf=\"!showTwoMonths || monthIndex === 1  || !linkedMonths\"\n    type=\"forward\" \n    (monthClick)=\"addMonth(0)\" \n    (yearClick)=\"addYear(0)\"\n    [showChangeMonthButton]=\"context.showChangeMonthButton\"\n    [showChangeYearButton]=\"context.showChangeYearButton\">\n</trb-calendar-header-buttons>\n",
                styles: [":host{position:relative;width:100%;display:flex}.filler{flex:1 1 auto}.label{position:absolute;left:50%;flex:0 1 auto;-webkit-transform:translateX(-50%);transform:translateX(-50%)}"]
            }] }
];
CalendarHeaderComponent.propDecorators = {
    context: [{ type: Input }],
    monthSelections: [{ type: Input }],
    showTwoMonths: [{ type: Input }],
    monthIndex: [{ type: Input }],
    linkedMonths: [{ type: Input }],
    monthLabels: [{ type: Input }],
    classes: [{ type: HostBinding, args: ['class',] }]
};
if (false) {
    /** @type {?} */
    CalendarHeaderComponent.prototype.context;
    /** @type {?} */
    CalendarHeaderComponent.prototype.monthSelections;
    /** @type {?} */
    CalendarHeaderComponent.prototype.showTwoMonths;
    /** @type {?} */
    CalendarHeaderComponent.prototype.monthIndex;
    /** @type {?} */
    CalendarHeaderComponent.prototype.linkedMonths;
    /** @type {?} */
    CalendarHeaderComponent.prototype.monthLabels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RyYi1jYWxlbmRhci8iLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQVM3QyxNQUFNLE9BQU8sdUJBQXVCO0lBTHBDO1FBT2Esb0JBQWUsR0FBcUIsRUFBRSxDQUFDO1FBQ3ZDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixpQkFBWSxHQUFHLElBQUksQ0FBQztJQW9FakMsQ0FBQzs7OztJQWpFRyxJQUNJLE9BQU87UUFDUCxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLGtCQUFrQixDQUFDO0lBQ3pELENBQUM7Ozs7SUFFRCxJQUFJLGFBQWE7UUFDYixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDM0QsQ0FBQzs7OztJQUVELGNBQWM7O2NBQ0osS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3hCLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSztlQUNuRixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDckYsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBYTtRQUNuQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUM5RTthQUFNO1lBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUMzQztJQUNMLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBRW5CLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDL0U7YUFBTTtZQUNILElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDNUM7SUFDTCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFhO1FBQ2pCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQzVFO2FBQU07WUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUM3RTthQUFNO1lBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUMxQztJQUNMLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCOztjQUN4QixhQUFhLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUV4QyxJQUFJLGFBQWEsRUFBRTs7a0JBQ1QsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO1lBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDO1lBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDdkMsK0RBQStEO1NBQ2xFO0lBQ0wsQ0FBQzs7O1lBN0VKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixrL0JBQXNDOzthQUV6Qzs7O3NCQUVJLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUVMLFdBQVcsU0FBQyxPQUFPOzs7O0lBUHBCLDBDQUFnQzs7SUFDaEMsa0RBQWdEOztJQUNoRCxnREFBK0I7O0lBQy9CLDZDQUF3Qjs7SUFDeEIsK0NBQTZCOztJQUM3Qiw4Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWFkZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9oZWFkZXItY29udGV4dCc7XG5pbXBvcnQgeyBnZXRNb250aCwgZ2V0WWVhciB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IE1vbnRoU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvY2FsZW5kYXItbW9udGgtc2VsZWN0aW9uLmNsYXNzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RyYi1jYWxlbmRhci1oZWFkZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFySGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBjb250ZXh0OiBIZWFkZXJDb250ZXh0O1xuICAgIEBJbnB1dCgpIG1vbnRoU2VsZWN0aW9uczogTW9udGhTZWxlY3Rpb25bXSA9IFtdO1xuICAgIEBJbnB1dCgpIHNob3dUd29Nb250aHMgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBtb250aEluZGV4ID0gMDtcbiAgICBASW5wdXQoKSBsaW5rZWRNb250aHMgPSB0cnVlO1xuICAgIEBJbnB1dCgpIG1vbnRoTGFiZWxzOiBzdHJpbmdbXTtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICAgIGdldCBjbGFzc2VzKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jb250ZXh0LnN0eWxlUHJlZml4fS1jYWxlbmRhci1oZWFkZXJgO1xuICAgIH1cblxuICAgIGdldCBidXR0b25DbGFzc2VzKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jbGFzc2VzfS1idXR0b25zYDtcbiAgICB9XG5cbiAgICBzaG93UGFzdE1vbnRoKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnBhc3RNb250aHMgfHwgIXRoaXMuaXNDdXJyZW50TW9udGg7XG4gICAgfVxuXG4gICAgaXNDdXJyZW50TW9udGgoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgcmV0dXJuIGdldE1vbnRoKHRvZGF5KSA9PT0gdGhpcy5jb250ZXh0Lm1vbnRoU2VsZWN0aW9uc1t0aGlzLmNvbnRleHQubW9udGhJbmRleF0ubW9udGhcbiAgICAgICAgJiYgZ2V0WWVhcih0b2RheSkgPT09IHRoaXMuY29udGV4dC5tb250aFNlbGVjdGlvbnNbdGhpcy5jb250ZXh0Lm1vbnRoSW5kZXhdLnllYXI7XG4gICAgfVxuXG4gICAgbWludXNZZWFyKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMubGlua2VkTW9udGhzKSB7XG4gICAgICAgICAgICB0aGlzLm1vbnRoU2VsZWN0aW9ucy5mb3JFYWNoKG1vbnRoU2VsZWN0aW9uID0+IG1vbnRoU2VsZWN0aW9uLm1pbnVzWWVhcigpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25zW2luZGV4XS5taW51c1llYXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1pbnVzTW9udGgoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5saW5rZWRNb250aHMpIHtcblxuICAgICAgICAgICAgdGhpcy5tb250aFNlbGVjdGlvbnMuZm9yRWFjaChtb250aFNlbGVjdGlvbiA9PiBtb250aFNlbGVjdGlvbi5taW51c01vbnRoKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb250aFNlbGVjdGlvbnNbaW5kZXhdLm1pbnVzTW9udGgoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFllYXIoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5saW5rZWRNb250aHMpIHtcbiAgICAgICAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25zLmZvckVhY2gobW9udGhTZWxlY3Rpb24gPT4gbW9udGhTZWxlY3Rpb24uYWRkWWVhcigpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25zW2luZGV4XS5hZGRZZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRNb250aChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmxpbmtlZE1vbnRocykge1xuICAgICAgICAgICAgdGhpcy5tb250aFNlbGVjdGlvbnMuZm9yRWFjaChtb250aFNlbGVjdGlvbiA9PiBtb250aFNlbGVjdGlvbi5hZGRNb250aCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25zW2luZGV4XS5hZGRNb250aCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBjb25zdCBjb250ZXh0Q2hhbmdlID0gY2hhbmdlc1snY29udGV4dCddO1xuXG4gICAgICAgIGlmIChjb250ZXh0Q2hhbmdlKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICAgICAgdGhpcy5saW5rZWRNb250aHMgPSBjb250ZXh0LmxpbmtlZE1vbnRocztcbiAgICAgICAgICAgIHRoaXMubW9udGhJbmRleCA9IGNvbnRleHQubW9udGhJbmRleDtcbiAgICAgICAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25zID0gY29udGV4dC5tb250aFNlbGVjdGlvbnM7XG4gICAgICAgICAgICB0aGlzLnNob3dUd29Nb250aHMgPSBjb250ZXh0LnNob3dUd29Nb250aHM7XG4gICAgICAgICAgICB0aGlzLm1vbnRoTGFiZWxzID0gY29udGV4dC5tb250aExhYmVscztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb250ZXh0IGNoYW5nZScsIGNvbnRleHQsIHRoaXMubW9udGhTZWxlY3Rpb25zKVxuICAgICAgICB9XG4gICAgfVxufVxuIl19