/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding } from '@angular/core';
import { HeaderContext } from '../../context/header-context';
import { getMonth, getYear } from 'date-fns';
var CalendarHeaderComponent = /** @class */ (function () {
    function CalendarHeaderComponent() {
        this.monthSelections = [];
        this.showTwoMonths = false;
        this.monthIndex = 0;
        this.linkedMonths = true;
    }
    Object.defineProperty(CalendarHeaderComponent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            return this.context.stylePrefix + "-calendar-header";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarHeaderComponent.prototype, "buttonClasses", {
        get: /**
         * @return {?}
         */
        function () {
            return this.classes + "-buttons";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.showPastMonth = /**
     * @return {?}
     */
    function () {
        return this.context.pastMonths || !this.isCurrentMonth;
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.isCurrentMonth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var today = new Date();
        return getMonth(today) === this.context.monthSelections[this.context.monthIndex].month
            && getYear(today) === this.context.monthSelections[this.context.monthIndex].year;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CalendarHeaderComponent.prototype.minusYear = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.linkedMonths) {
            this.monthSelections.forEach(function (monthSelection) { return monthSelection.minusYear(); });
        }
        else {
            this.monthSelections[index].minusYear();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CalendarHeaderComponent.prototype.minusMonth = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.linkedMonths) {
            this.monthSelections.forEach(function (monthSelection) { return monthSelection.minusMonth(); });
        }
        else {
            this.monthSelections[index].minusMonth();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CalendarHeaderComponent.prototype.addYear = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.linkedMonths) {
            this.monthSelections.forEach(function (monthSelection) { return monthSelection.addYear(); });
        }
        else {
            this.monthSelections[index].addYear();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CalendarHeaderComponent.prototype.addMonth = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.linkedMonths) {
            this.monthSelections.forEach(function (monthSelection) { return monthSelection.addMonth(); });
        }
        else {
            this.monthSelections[index].addMonth();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarHeaderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var contextChange = changes['context'];
        if (contextChange) {
            /** @type {?} */
            var context = this.context;
            this.linkedMonths = context.linkedMonths;
            this.monthIndex = context.monthIndex;
            this.monthSelections = context.monthSelections;
            this.showTwoMonths = context.showTwoMonths;
            this.monthLabels = context.monthLabels;
        }
    };
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
    return CalendarHeaderComponent;
}());
export { CalendarHeaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RyYi1jYWxlbmRhci8iLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUk3QztJQUFBO1FBT2Esb0JBQWUsR0FBcUIsRUFBRSxDQUFDO1FBQ3ZDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixpQkFBWSxHQUFHLElBQUksQ0FBQztJQW1FakMsQ0FBQztJQWhFRyxzQkFDSSw0Q0FBTzs7OztRQURYO1lBRUksT0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcscUJBQWtCLENBQUM7UUFDekQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrREFBYTs7OztRQUFqQjtZQUNJLE9BQVUsSUFBSSxDQUFDLE9BQU8sYUFBVSxDQUFDO1FBQ3JDLENBQUM7OztPQUFBOzs7O0lBRUQsK0NBQWE7OztJQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDM0QsQ0FBQzs7OztJQUVELGdEQUFjOzs7SUFBZDs7WUFDVSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDeEIsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLO2VBQ25GLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyRixDQUFDOzs7OztJQUVELDJDQUFTOzs7O0lBQVQsVUFBVSxLQUFhO1FBQ25CLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxTQUFTLEVBQUUsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO1NBQzlFO2FBQU07WUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzNDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCw0Q0FBVTs7OztJQUFWLFVBQVcsS0FBYTtRQUNwQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFFbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsVUFBVSxFQUFFLEVBQTNCLENBQTJCLENBQUMsQ0FBQztTQUMvRTthQUFNO1lBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUM1QztJQUNMLENBQUM7Ozs7O0lBRUQseUNBQU87Ozs7SUFBUCxVQUFRLEtBQWE7UUFDakIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLE9BQU8sRUFBRSxFQUF4QixDQUF3QixDQUFDLENBQUM7U0FDNUU7YUFBTTtZQUNILElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDekM7SUFDTCxDQUFDOzs7OztJQUVELDBDQUFROzs7O0lBQVIsVUFBUyxLQUFhO1FBQ2xCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxRQUFRLEVBQUUsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO1NBQzdFO2FBQU07WUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7O1lBQ3hCLGFBQWEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBRXhDLElBQUksYUFBYSxFQUFFOztnQkFDVCxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87WUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUM7WUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztTQUMxQztJQUNMLENBQUM7O2dCQTVFSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0Isay9CQUFzQzs7aUJBRXpDOzs7MEJBRUksS0FBSztrQ0FDTCxLQUFLO2dDQUNMLEtBQUs7NkJBQ0wsS0FBSzsrQkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBRUwsV0FBVyxTQUFDLE9BQU87O0lBZ0V4Qiw4QkFBQztDQUFBLEFBN0VELElBNkVDO1NBeEVZLHVCQUF1Qjs7O0lBQ2hDLDBDQUFnQzs7SUFDaEMsa0RBQWdEOztJQUNoRCxnREFBK0I7O0lBQy9CLDZDQUF3Qjs7SUFDeEIsK0NBQTZCOztJQUM3Qiw4Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWFkZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9oZWFkZXItY29udGV4dCc7XG5pbXBvcnQgeyBnZXRNb250aCwgZ2V0WWVhciB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IE1vbnRoU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvY2FsZW5kYXItbW9udGgtc2VsZWN0aW9uLmNsYXNzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RyYi1jYWxlbmRhci1oZWFkZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFySGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBjb250ZXh0OiBIZWFkZXJDb250ZXh0O1xuICAgIEBJbnB1dCgpIG1vbnRoU2VsZWN0aW9uczogTW9udGhTZWxlY3Rpb25bXSA9IFtdO1xuICAgIEBJbnB1dCgpIHNob3dUd29Nb250aHMgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBtb250aEluZGV4ID0gMDtcbiAgICBASW5wdXQoKSBsaW5rZWRNb250aHMgPSB0cnVlO1xuICAgIEBJbnB1dCgpIG1vbnRoTGFiZWxzOiBzdHJpbmdbXTtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICAgIGdldCBjbGFzc2VzKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jb250ZXh0LnN0eWxlUHJlZml4fS1jYWxlbmRhci1oZWFkZXJgO1xuICAgIH1cblxuICAgIGdldCBidXR0b25DbGFzc2VzKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jbGFzc2VzfS1idXR0b25zYDtcbiAgICB9XG5cbiAgICBzaG93UGFzdE1vbnRoKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnBhc3RNb250aHMgfHwgIXRoaXMuaXNDdXJyZW50TW9udGg7XG4gICAgfVxuXG4gICAgaXNDdXJyZW50TW9udGgoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgcmV0dXJuIGdldE1vbnRoKHRvZGF5KSA9PT0gdGhpcy5jb250ZXh0Lm1vbnRoU2VsZWN0aW9uc1t0aGlzLmNvbnRleHQubW9udGhJbmRleF0ubW9udGhcbiAgICAgICAgJiYgZ2V0WWVhcih0b2RheSkgPT09IHRoaXMuY29udGV4dC5tb250aFNlbGVjdGlvbnNbdGhpcy5jb250ZXh0Lm1vbnRoSW5kZXhdLnllYXI7XG4gICAgfVxuXG4gICAgbWludXNZZWFyKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMubGlua2VkTW9udGhzKSB7XG4gICAgICAgICAgICB0aGlzLm1vbnRoU2VsZWN0aW9ucy5mb3JFYWNoKG1vbnRoU2VsZWN0aW9uID0+IG1vbnRoU2VsZWN0aW9uLm1pbnVzWWVhcigpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25zW2luZGV4XS5taW51c1llYXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1pbnVzTW9udGgoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5saW5rZWRNb250aHMpIHtcblxuICAgICAgICAgICAgdGhpcy5tb250aFNlbGVjdGlvbnMuZm9yRWFjaChtb250aFNlbGVjdGlvbiA9PiBtb250aFNlbGVjdGlvbi5taW51c01vbnRoKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb250aFNlbGVjdGlvbnNbaW5kZXhdLm1pbnVzTW9udGgoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFllYXIoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5saW5rZWRNb250aHMpIHtcbiAgICAgICAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25zLmZvckVhY2gobW9udGhTZWxlY3Rpb24gPT4gbW9udGhTZWxlY3Rpb24uYWRkWWVhcigpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25zW2luZGV4XS5hZGRZZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRNb250aChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmxpbmtlZE1vbnRocykge1xuICAgICAgICAgICAgdGhpcy5tb250aFNlbGVjdGlvbnMuZm9yRWFjaChtb250aFNlbGVjdGlvbiA9PiBtb250aFNlbGVjdGlvbi5hZGRNb250aCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25zW2luZGV4XS5hZGRNb250aCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBjb25zdCBjb250ZXh0Q2hhbmdlID0gY2hhbmdlc1snY29udGV4dCddO1xuXG4gICAgICAgIGlmIChjb250ZXh0Q2hhbmdlKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICAgICAgdGhpcy5saW5rZWRNb250aHMgPSBjb250ZXh0LmxpbmtlZE1vbnRocztcbiAgICAgICAgICAgIHRoaXMubW9udGhJbmRleCA9IGNvbnRleHQubW9udGhJbmRleDtcbiAgICAgICAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25zID0gY29udGV4dC5tb250aFNlbGVjdGlvbnM7XG4gICAgICAgICAgICB0aGlzLnNob3dUd29Nb250aHMgPSBjb250ZXh0LnNob3dUd29Nb250aHM7XG4gICAgICAgICAgICB0aGlzLm1vbnRoTGFiZWxzID0gY29udGV4dC5tb250aExhYmVscztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==