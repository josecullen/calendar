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
            // console.log('context change', context, this.monthSelections)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RyYi1jYWxlbmRhci8iLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUk3QztJQUFBO1FBT2Esb0JBQWUsR0FBcUIsRUFBRSxDQUFDO1FBQ3ZDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixpQkFBWSxHQUFHLElBQUksQ0FBQztJQW9FakMsQ0FBQztJQWpFRyxzQkFDSSw0Q0FBTzs7OztRQURYO1lBRUksT0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcscUJBQWtCLENBQUM7UUFDekQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrREFBYTs7OztRQUFqQjtZQUNJLE9BQVUsSUFBSSxDQUFDLE9BQU8sYUFBVSxDQUFDO1FBQ3JDLENBQUM7OztPQUFBOzs7O0lBRUQsK0NBQWE7OztJQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDM0QsQ0FBQzs7OztJQUVELGdEQUFjOzs7SUFBZDs7WUFDVSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDeEIsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLO2VBQ25GLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyRixDQUFDOzs7OztJQUVELDJDQUFTOzs7O0lBQVQsVUFBVSxLQUFhO1FBQ25CLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxTQUFTLEVBQUUsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO1NBQzlFO2FBQU07WUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzNDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCw0Q0FBVTs7OztJQUFWLFVBQVcsS0FBYTtRQUNwQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFFbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsVUFBVSxFQUFFLEVBQTNCLENBQTJCLENBQUMsQ0FBQztTQUMvRTthQUFNO1lBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUM1QztJQUNMLENBQUM7Ozs7O0lBRUQseUNBQU87Ozs7SUFBUCxVQUFRLEtBQWE7UUFDakIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLE9BQU8sRUFBRSxFQUF4QixDQUF3QixDQUFDLENBQUM7U0FDNUU7YUFBTTtZQUNILElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDekM7SUFDTCxDQUFDOzs7OztJQUVELDBDQUFROzs7O0lBQVIsVUFBUyxLQUFhO1FBQ2xCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxRQUFRLEVBQUUsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO1NBQzdFO2FBQU07WUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7O1lBQ3hCLGFBQWEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBRXhDLElBQUksYUFBYSxFQUFFOztnQkFDVCxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87WUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUM7WUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUN2QywrREFBK0Q7U0FDbEU7SUFDTCxDQUFDOztnQkE3RUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLGsvQkFBc0M7O2lCQUV6Qzs7OzBCQUVJLEtBQUs7a0NBQ0wsS0FBSztnQ0FDTCxLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzBCQUVMLFdBQVcsU0FBQyxPQUFPOztJQWlFeEIsOEJBQUM7Q0FBQSxBQTlFRCxJQThFQztTQXpFWSx1QkFBdUI7OztJQUNoQywwQ0FBZ0M7O0lBQ2hDLGtEQUFnRDs7SUFDaEQsZ0RBQStCOztJQUMvQiw2Q0FBd0I7O0lBQ3hCLCtDQUE2Qjs7SUFDN0IsOENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVhZGVyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvaGVhZGVyLWNvbnRleHQnO1xuaW1wb3J0IHsgZ2V0TW9udGgsIGdldFllYXIgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBNb250aFNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L2NhbGVuZGFyLW1vbnRoLXNlbGVjdGlvbi5jbGFzcyc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0cmItY2FsZW5kYXItaGVhZGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgY29udGV4dDogSGVhZGVyQ29udGV4dDtcbiAgICBASW5wdXQoKSBtb250aFNlbGVjdGlvbnM6IE1vbnRoU2VsZWN0aW9uW10gPSBbXTtcbiAgICBASW5wdXQoKSBzaG93VHdvTW9udGhzID0gZmFsc2U7XG4gICAgQElucHV0KCkgbW9udGhJbmRleCA9IDA7XG4gICAgQElucHV0KCkgbGlua2VkTW9udGhzID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBtb250aExhYmVsczogc3RyaW5nW107XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgICBnZXQgY2xhc3NlcygpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY29udGV4dC5zdHlsZVByZWZpeH0tY2FsZW5kYXItaGVhZGVyYDtcbiAgICB9XG5cbiAgICBnZXQgYnV0dG9uQ2xhc3NlcygpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY2xhc3Nlc30tYnV0dG9uc2A7XG4gICAgfVxuXG4gICAgc2hvd1Bhc3RNb250aCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5wYXN0TW9udGhzIHx8ICF0aGlzLmlzQ3VycmVudE1vbnRoO1xuICAgIH1cblxuICAgIGlzQ3VycmVudE1vbnRoKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHJldHVybiBnZXRNb250aCh0b2RheSkgPT09IHRoaXMuY29udGV4dC5tb250aFNlbGVjdGlvbnNbdGhpcy5jb250ZXh0Lm1vbnRoSW5kZXhdLm1vbnRoXG4gICAgICAgICYmIGdldFllYXIodG9kYXkpID09PSB0aGlzLmNvbnRleHQubW9udGhTZWxlY3Rpb25zW3RoaXMuY29udGV4dC5tb250aEluZGV4XS55ZWFyO1xuICAgIH1cblxuICAgIG1pbnVzWWVhcihpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmxpbmtlZE1vbnRocykge1xuICAgICAgICAgICAgdGhpcy5tb250aFNlbGVjdGlvbnMuZm9yRWFjaChtb250aFNlbGVjdGlvbiA9PiBtb250aFNlbGVjdGlvbi5taW51c1llYXIoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vbnRoU2VsZWN0aW9uc1tpbmRleF0ubWludXNZZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtaW51c01vbnRoKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMubGlua2VkTW9udGhzKSB7XG5cbiAgICAgICAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25zLmZvckVhY2gobW9udGhTZWxlY3Rpb24gPT4gbW9udGhTZWxlY3Rpb24ubWludXNNb250aCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25zW2luZGV4XS5taW51c01vbnRoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRZZWFyKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMubGlua2VkTW9udGhzKSB7XG4gICAgICAgICAgICB0aGlzLm1vbnRoU2VsZWN0aW9ucy5mb3JFYWNoKG1vbnRoU2VsZWN0aW9uID0+IG1vbnRoU2VsZWN0aW9uLmFkZFllYXIoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vbnRoU2VsZWN0aW9uc1tpbmRleF0uYWRkWWVhcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkTW9udGgoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5saW5rZWRNb250aHMpIHtcbiAgICAgICAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25zLmZvckVhY2gobW9udGhTZWxlY3Rpb24gPT4gbW9udGhTZWxlY3Rpb24uYWRkTW9udGgoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vbnRoU2VsZWN0aW9uc1tpbmRleF0uYWRkTW9udGgoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgY29udGV4dENoYW5nZSA9IGNoYW5nZXNbJ2NvbnRleHQnXTtcblxuICAgICAgICBpZiAoY29udGV4dENoYW5nZSkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgICAgIHRoaXMubGlua2VkTW9udGhzID0gY29udGV4dC5saW5rZWRNb250aHM7XG4gICAgICAgICAgICB0aGlzLm1vbnRoSW5kZXggPSBjb250ZXh0Lm1vbnRoSW5kZXg7XG4gICAgICAgICAgICB0aGlzLm1vbnRoU2VsZWN0aW9ucyA9IGNvbnRleHQubW9udGhTZWxlY3Rpb25zO1xuICAgICAgICAgICAgdGhpcy5zaG93VHdvTW9udGhzID0gY29udGV4dC5zaG93VHdvTW9udGhzO1xuICAgICAgICAgICAgdGhpcy5tb250aExhYmVscyA9IGNvbnRleHQubW9udGhMYWJlbHM7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY29udGV4dCBjaGFuZ2UnLCBjb250ZXh0LCB0aGlzLm1vbnRoU2VsZWN0aW9ucylcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==