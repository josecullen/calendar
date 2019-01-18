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
        return this.context.pastMonths || !this.isCurrentMonth();
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
                    template: "<trb-calendar-header-buttons\n    [class]=\"buttonClasses\"\n    type=\"back\"\n    *ngIf=\"!showTwoMonths || monthIndex === 0 || !linkedMonths\"\n    (monthClick)=\"minusMonth(0)\"\n    (yearClick)=\"minusYear(0)\"\n    [stylePrefix]=\"context.stylePrefix\"\n    [showChangeMonthButton]=\"context.showChangeMonthButton && showPastMonth()\"\n    [showChangeYearButton]=\"context.showChangeYearButton\">\n</trb-calendar-header-buttons>\n\n<span class=\"filler\"></span>\n\n<span class=\"label\" *ngIf=\"monthSelections && monthSelections.length\">\n    {{ monthSelections[monthIndex].labelWithConfig(monthLabels) }}\n</span>\n\n<span class=\"filler\"></span>\n\n<trb-calendar-header-buttons\n    [class]=\"buttonClasses\"\n    *ngIf=\"!showTwoMonths || monthIndex === 1  || !linkedMonths\"\n    type=\"forward\"\n    (monthClick)=\"addMonth(0)\"\n    (yearClick)=\"addYear(0)\"\n    [stylePrefix]=\"context.stylePrefix\"\n    [showChangeMonthButton]=\"context.showChangeMonthButton\"\n    [showChangeYearButton]=\"context.showChangeYearButton\">\n</trb-calendar-header-buttons>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RyYi1jYWxlbmRhci8iLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUk3QztJQUFBO1FBT1csb0JBQWUsR0FBcUIsRUFBRSxDQUFDO1FBQ3ZDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixpQkFBWSxHQUFHLElBQUksQ0FBQztJQW1FL0IsQ0FBQztJQWhFQyxzQkFDSSw0Q0FBTzs7OztRQURYO1lBRUUsT0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcscUJBQWtCLENBQUM7UUFDdkQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrREFBYTs7OztRQUFqQjtZQUNFLE9BQVUsSUFBSSxDQUFDLE9BQU8sYUFBVSxDQUFDO1FBQ25DLENBQUM7OztPQUFBOzs7O0lBRUQsK0NBQWE7OztJQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMzRCxDQUFDOzs7O0lBRUQsZ0RBQWM7OztJQUFkOztZQUNRLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRTtRQUN4QixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUs7ZUFDakYsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3JGLENBQUM7Ozs7O0lBRUQsMkNBQVM7Ozs7SUFBVCxVQUFVLEtBQWE7UUFDckIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLFNBQVMsRUFBRSxFQUExQixDQUEwQixDQUFDLENBQUM7U0FDNUU7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7OztJQUVELDRDQUFVOzs7O0lBQVYsVUFBVyxLQUFhO1FBQ3RCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUVyQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxVQUFVLEVBQUUsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1NBQzdFO2FBQU07WUFDTCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx5Q0FBTzs7OztJQUFQLFVBQVEsS0FBYTtRQUNuQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsT0FBTyxFQUFFLEVBQXhCLENBQXdCLENBQUMsQ0FBQztTQUMxRTthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7O0lBRUQsMENBQVE7Ozs7SUFBUixVQUFTLEtBQWE7UUFDcEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLFFBQVEsRUFBRSxFQUF6QixDQUF5QixDQUFDLENBQUM7U0FDM0U7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDeEM7SUFDSCxDQUFDOzs7OztJQUVELDZDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjs7WUFDMUIsYUFBYSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFFeEMsSUFBSSxhQUFhLEVBQUU7O2dCQUNYLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTztZQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQztZQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7Z0JBNUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixra0NBQXNDOztpQkFFdkM7OzswQkFFRSxLQUFLO2tDQUNMLEtBQUs7Z0NBQ0wsS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7OEJBQ0wsS0FBSzswQkFFTCxXQUFXLFNBQUMsT0FBTzs7SUFnRXRCLDhCQUFDO0NBQUEsQUE3RUQsSUE2RUM7U0F4RVksdUJBQXVCOzs7SUFDbEMsMENBQWdDOztJQUNoQyxrREFBZ0Q7O0lBQ2hELGdEQUErQjs7SUFDL0IsNkNBQXdCOztJQUN4QiwrQ0FBNkI7O0lBQzdCLDhDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlYWRlckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L2hlYWRlci1jb250ZXh0JztcbmltcG9ydCB7IGdldE1vbnRoLCBnZXRZZWFyIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgTW9udGhTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9jYWxlbmRhci1tb250aC1zZWxlY3Rpb24uY2xhc3MnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyYi1jYWxlbmRhci1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBjb250ZXh0OiBIZWFkZXJDb250ZXh0O1xuICBASW5wdXQoKSBtb250aFNlbGVjdGlvbnM6IE1vbnRoU2VsZWN0aW9uW10gPSBbXTtcbiAgQElucHV0KCkgc2hvd1R3b01vbnRocyA9IGZhbHNlO1xuICBASW5wdXQoKSBtb250aEluZGV4ID0gMDtcbiAgQElucHV0KCkgbGlua2VkTW9udGhzID0gdHJ1ZTtcbiAgQElucHV0KCkgbW9udGhMYWJlbHM6IHN0cmluZ1tdO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgY2xhc3NlcygpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5jb250ZXh0LnN0eWxlUHJlZml4fS1jYWxlbmRhci1oZWFkZXJgO1xuICB9XG5cbiAgZ2V0IGJ1dHRvbkNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuY2xhc3Nlc30tYnV0dG9uc2A7XG4gIH1cblxuICBzaG93UGFzdE1vbnRoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucGFzdE1vbnRocyB8fCAhdGhpcy5pc0N1cnJlbnRNb250aCgpO1xuICB9XG5cbiAgaXNDdXJyZW50TW9udGgoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiBnZXRNb250aCh0b2RheSkgPT09IHRoaXMuY29udGV4dC5tb250aFNlbGVjdGlvbnNbdGhpcy5jb250ZXh0Lm1vbnRoSW5kZXhdLm1vbnRoXG4gICAgICAmJiBnZXRZZWFyKHRvZGF5KSA9PT0gdGhpcy5jb250ZXh0Lm1vbnRoU2VsZWN0aW9uc1t0aGlzLmNvbnRleHQubW9udGhJbmRleF0ueWVhcjtcbiAgfVxuXG4gIG1pbnVzWWVhcihpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubGlua2VkTW9udGhzKSB7XG4gICAgICB0aGlzLm1vbnRoU2VsZWN0aW9ucy5mb3JFYWNoKG1vbnRoU2VsZWN0aW9uID0+IG1vbnRoU2VsZWN0aW9uLm1pbnVzWWVhcigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb250aFNlbGVjdGlvbnNbaW5kZXhdLm1pbnVzWWVhcigpO1xuICAgIH1cbiAgfVxuXG4gIG1pbnVzTW9udGgoaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmxpbmtlZE1vbnRocykge1xuXG4gICAgICB0aGlzLm1vbnRoU2VsZWN0aW9ucy5mb3JFYWNoKG1vbnRoU2VsZWN0aW9uID0+IG1vbnRoU2VsZWN0aW9uLm1pbnVzTW9udGgoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25zW2luZGV4XS5taW51c01vbnRoKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkWWVhcihpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubGlua2VkTW9udGhzKSB7XG4gICAgICB0aGlzLm1vbnRoU2VsZWN0aW9ucy5mb3JFYWNoKG1vbnRoU2VsZWN0aW9uID0+IG1vbnRoU2VsZWN0aW9uLmFkZFllYXIoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25zW2luZGV4XS5hZGRZZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkTW9udGgoaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmxpbmtlZE1vbnRocykge1xuICAgICAgdGhpcy5tb250aFNlbGVjdGlvbnMuZm9yRWFjaChtb250aFNlbGVjdGlvbiA9PiBtb250aFNlbGVjdGlvbi5hZGRNb250aCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb250aFNlbGVjdGlvbnNbaW5kZXhdLmFkZE1vbnRoKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IGNvbnRleHRDaGFuZ2UgPSBjaGFuZ2VzWydjb250ZXh0J107XG5cbiAgICBpZiAoY29udGV4dENoYW5nZSkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICAgIHRoaXMubGlua2VkTW9udGhzID0gY29udGV4dC5saW5rZWRNb250aHM7XG4gICAgICB0aGlzLm1vbnRoSW5kZXggPSBjb250ZXh0Lm1vbnRoSW5kZXg7XG4gICAgICB0aGlzLm1vbnRoU2VsZWN0aW9ucyA9IGNvbnRleHQubW9udGhTZWxlY3Rpb25zO1xuICAgICAgdGhpcy5zaG93VHdvTW9udGhzID0gY29udGV4dC5zaG93VHdvTW9udGhzO1xuICAgICAgdGhpcy5tb250aExhYmVscyA9IGNvbnRleHQubW9udGhMYWJlbHM7XG4gICAgfVxuICB9XG59XG4iXX0=