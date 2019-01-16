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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RyYi1jYWxlbmRhci8iLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQVM3QyxNQUFNLE9BQU8sdUJBQXVCO0lBTHBDO1FBT2Esb0JBQWUsR0FBcUIsRUFBRSxDQUFDO1FBQ3ZDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixpQkFBWSxHQUFHLElBQUksQ0FBQztJQW1FakMsQ0FBQzs7OztJQWhFRyxJQUNJLE9BQU87UUFDUCxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLGtCQUFrQixDQUFDO0lBQ3pELENBQUM7Ozs7SUFFRCxJQUFJLGFBQWE7UUFDYixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDM0QsQ0FBQzs7OztJQUVELGNBQWM7O2NBQ0osS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3hCLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSztlQUNuRixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDckYsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBYTtRQUNuQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUM5RTthQUFNO1lBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUMzQztJQUNMLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBRW5CLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDL0U7YUFBTTtZQUNILElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDNUM7SUFDTCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFhO1FBQ2pCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQzVFO2FBQU07WUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUM3RTthQUFNO1lBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUMxQztJQUNMLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCOztjQUN4QixhQUFhLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUV4QyxJQUFJLGFBQWEsRUFBRTs7a0JBQ1QsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO1lBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDO1lBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7U0FDMUM7SUFDTCxDQUFDOzs7WUE1RUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLGsvQkFBc0M7O2FBRXpDOzs7c0JBRUksS0FBSzs4QkFDTCxLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7c0JBRUwsV0FBVyxTQUFDLE9BQU87Ozs7SUFQcEIsMENBQWdDOztJQUNoQyxrREFBZ0Q7O0lBQ2hELGdEQUErQjs7SUFDL0IsNkNBQXdCOztJQUN4QiwrQ0FBNkI7O0lBQzdCLDhDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlYWRlckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L2hlYWRlci1jb250ZXh0JztcbmltcG9ydCB7IGdldE1vbnRoLCBnZXRZZWFyIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgTW9udGhTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9jYWxlbmRhci1tb250aC1zZWxlY3Rpb24uY2xhc3MnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndHJiLWNhbGVuZGFyLWhlYWRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIGNvbnRleHQ6IEhlYWRlckNvbnRleHQ7XG4gICAgQElucHV0KCkgbW9udGhTZWxlY3Rpb25zOiBNb250aFNlbGVjdGlvbltdID0gW107XG4gICAgQElucHV0KCkgc2hvd1R3b01vbnRocyA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIG1vbnRoSW5kZXggPSAwO1xuICAgIEBJbnB1dCgpIGxpbmtlZE1vbnRocyA9IHRydWU7XG4gICAgQElucHV0KCkgbW9udGhMYWJlbHM6IHN0cmluZ1tdO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gICAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNvbnRleHQuc3R5bGVQcmVmaXh9LWNhbGVuZGFyLWhlYWRlcmA7XG4gICAgfVxuXG4gICAgZ2V0IGJ1dHRvbkNsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNsYXNzZXN9LWJ1dHRvbnNgO1xuICAgIH1cblxuICAgIHNob3dQYXN0TW9udGgoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQucGFzdE1vbnRocyB8fCAhdGhpcy5pc0N1cnJlbnRNb250aDtcbiAgICB9XG5cbiAgICBpc0N1cnJlbnRNb250aCgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICByZXR1cm4gZ2V0TW9udGgodG9kYXkpID09PSB0aGlzLmNvbnRleHQubW9udGhTZWxlY3Rpb25zW3RoaXMuY29udGV4dC5tb250aEluZGV4XS5tb250aFxuICAgICAgICAmJiBnZXRZZWFyKHRvZGF5KSA9PT0gdGhpcy5jb250ZXh0Lm1vbnRoU2VsZWN0aW9uc1t0aGlzLmNvbnRleHQubW9udGhJbmRleF0ueWVhcjtcbiAgICB9XG5cbiAgICBtaW51c1llYXIoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5saW5rZWRNb250aHMpIHtcbiAgICAgICAgICAgIHRoaXMubW9udGhTZWxlY3Rpb25zLmZvckVhY2gobW9udGhTZWxlY3Rpb24gPT4gbW9udGhTZWxlY3Rpb24ubWludXNZZWFyKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb250aFNlbGVjdGlvbnNbaW5kZXhdLm1pbnVzWWVhcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWludXNNb250aChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmxpbmtlZE1vbnRocykge1xuXG4gICAgICAgICAgICB0aGlzLm1vbnRoU2VsZWN0aW9ucy5mb3JFYWNoKG1vbnRoU2VsZWN0aW9uID0+IG1vbnRoU2VsZWN0aW9uLm1pbnVzTW9udGgoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vbnRoU2VsZWN0aW9uc1tpbmRleF0ubWludXNNb250aCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkWWVhcihpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmxpbmtlZE1vbnRocykge1xuICAgICAgICAgICAgdGhpcy5tb250aFNlbGVjdGlvbnMuZm9yRWFjaChtb250aFNlbGVjdGlvbiA9PiBtb250aFNlbGVjdGlvbi5hZGRZZWFyKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb250aFNlbGVjdGlvbnNbaW5kZXhdLmFkZFllYXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZE1vbnRoKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMubGlua2VkTW9udGhzKSB7XG4gICAgICAgICAgICB0aGlzLm1vbnRoU2VsZWN0aW9ucy5mb3JFYWNoKG1vbnRoU2VsZWN0aW9uID0+IG1vbnRoU2VsZWN0aW9uLmFkZE1vbnRoKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb250aFNlbGVjdGlvbnNbaW5kZXhdLmFkZE1vbnRoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHRDaGFuZ2UgPSBjaGFuZ2VzWydjb250ZXh0J107XG5cbiAgICAgICAgaWYgKGNvbnRleHRDaGFuZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgICAgICB0aGlzLmxpbmtlZE1vbnRocyA9IGNvbnRleHQubGlua2VkTW9udGhzO1xuICAgICAgICAgICAgdGhpcy5tb250aEluZGV4ID0gY29udGV4dC5tb250aEluZGV4O1xuICAgICAgICAgICAgdGhpcy5tb250aFNlbGVjdGlvbnMgPSBjb250ZXh0Lm1vbnRoU2VsZWN0aW9ucztcbiAgICAgICAgICAgIHRoaXMuc2hvd1R3b01vbnRocyA9IGNvbnRleHQuc2hvd1R3b01vbnRocztcbiAgICAgICAgICAgIHRoaXMubW9udGhMYWJlbHMgPSBjb250ZXh0Lm1vbnRoTGFiZWxzO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19