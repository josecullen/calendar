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
        return this.context.pastMonths || !this.isCurrentMonth();
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
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RyYi1jYWxlbmRhci8iLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQVM3QyxNQUFNLE9BQU8sdUJBQXVCO0lBTHBDO1FBT1csb0JBQWUsR0FBcUIsRUFBRSxDQUFDO1FBQ3ZDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixpQkFBWSxHQUFHLElBQUksQ0FBQztJQW1FL0IsQ0FBQzs7OztJQWhFQyxJQUNJLE9BQU87UUFDVCxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLGtCQUFrQixDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMzRCxDQUFDOzs7O0lBRUQsY0FBYzs7Y0FDTixLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDeEIsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLO2VBQ2pGLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyRixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQzVFO2FBQU07WUFDTCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFFckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUM3RTthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUMxQztJQUNILENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDMUU7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3BCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzNFO2FBQU07WUFDTCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7O2NBQzFCLGFBQWEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBRXhDLElBQUksYUFBYSxFQUFFOztrQkFDWCxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87WUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUM7WUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztTQUN4QztJQUNILENBQUM7OztZQTVFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0Isa2tDQUFzQzs7YUFFdkM7OztzQkFFRSxLQUFLOzhCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSztzQkFFTCxXQUFXLFNBQUMsT0FBTzs7OztJQVBwQiwwQ0FBZ0M7O0lBQ2hDLGtEQUFnRDs7SUFDaEQsZ0RBQStCOztJQUMvQiw2Q0FBd0I7O0lBQ3hCLCtDQUE2Qjs7SUFDN0IsOENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVhZGVyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvaGVhZGVyLWNvbnRleHQnO1xuaW1wb3J0IHsgZ2V0TW9udGgsIGdldFllYXIgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBNb250aFNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L2NhbGVuZGFyLW1vbnRoLXNlbGVjdGlvbi5jbGFzcyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJiLWNhbGVuZGFyLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGNvbnRleHQ6IEhlYWRlckNvbnRleHQ7XG4gIEBJbnB1dCgpIG1vbnRoU2VsZWN0aW9uczogTW9udGhTZWxlY3Rpb25bXSA9IFtdO1xuICBASW5wdXQoKSBzaG93VHdvTW9udGhzID0gZmFsc2U7XG4gIEBJbnB1dCgpIG1vbnRoSW5kZXggPSAwO1xuICBASW5wdXQoKSBsaW5rZWRNb250aHMgPSB0cnVlO1xuICBASW5wdXQoKSBtb250aExhYmVsczogc3RyaW5nW107XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiBgJHt0aGlzLmNvbnRleHQuc3R5bGVQcmVmaXh9LWNhbGVuZGFyLWhlYWRlcmA7XG4gIH1cblxuICBnZXQgYnV0dG9uQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5jbGFzc2VzfS1idXR0b25zYDtcbiAgfVxuXG4gIHNob3dQYXN0TW9udGgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5wYXN0TW9udGhzIHx8ICF0aGlzLmlzQ3VycmVudE1vbnRoKCk7XG4gIH1cblxuICBpc0N1cnJlbnRNb250aCgpOiBib29sZWFuIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIGdldE1vbnRoKHRvZGF5KSA9PT0gdGhpcy5jb250ZXh0Lm1vbnRoU2VsZWN0aW9uc1t0aGlzLmNvbnRleHQubW9udGhJbmRleF0ubW9udGhcbiAgICAgICYmIGdldFllYXIodG9kYXkpID09PSB0aGlzLmNvbnRleHQubW9udGhTZWxlY3Rpb25zW3RoaXMuY29udGV4dC5tb250aEluZGV4XS55ZWFyO1xuICB9XG5cbiAgbWludXNZZWFyKGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5saW5rZWRNb250aHMpIHtcbiAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25zLmZvckVhY2gobW9udGhTZWxlY3Rpb24gPT4gbW9udGhTZWxlY3Rpb24ubWludXNZZWFyKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vbnRoU2VsZWN0aW9uc1tpbmRleF0ubWludXNZZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgbWludXNNb250aChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubGlua2VkTW9udGhzKSB7XG5cbiAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25zLmZvckVhY2gobW9udGhTZWxlY3Rpb24gPT4gbW9udGhTZWxlY3Rpb24ubWludXNNb250aCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb250aFNlbGVjdGlvbnNbaW5kZXhdLm1pbnVzTW9udGgoKTtcbiAgICB9XG4gIH1cblxuICBhZGRZZWFyKGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5saW5rZWRNb250aHMpIHtcbiAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25zLmZvckVhY2gobW9udGhTZWxlY3Rpb24gPT4gbW9udGhTZWxlY3Rpb24uYWRkWWVhcigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb250aFNlbGVjdGlvbnNbaW5kZXhdLmFkZFllYXIoKTtcbiAgICB9XG4gIH1cblxuICBhZGRNb250aChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubGlua2VkTW9udGhzKSB7XG4gICAgICB0aGlzLm1vbnRoU2VsZWN0aW9ucy5mb3JFYWNoKG1vbnRoU2VsZWN0aW9uID0+IG1vbnRoU2VsZWN0aW9uLmFkZE1vbnRoKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vbnRoU2VsZWN0aW9uc1tpbmRleF0uYWRkTW9udGgoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgY29udGV4dENoYW5nZSA9IGNoYW5nZXNbJ2NvbnRleHQnXTtcblxuICAgIGlmIChjb250ZXh0Q2hhbmdlKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgICAgdGhpcy5saW5rZWRNb250aHMgPSBjb250ZXh0LmxpbmtlZE1vbnRocztcbiAgICAgIHRoaXMubW9udGhJbmRleCA9IGNvbnRleHQubW9udGhJbmRleDtcbiAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25zID0gY29udGV4dC5tb250aFNlbGVjdGlvbnM7XG4gICAgICB0aGlzLnNob3dUd29Nb250aHMgPSBjb250ZXh0LnNob3dUd29Nb250aHM7XG4gICAgICB0aGlzLm1vbnRoTGFiZWxzID0gY29udGV4dC5tb250aExhYmVscztcbiAgICB9XG4gIH1cbn1cbiJdfQ==