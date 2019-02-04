/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding } from '@angular/core';
import { getMonth, parse, compareDesc, format } from 'date-fns';
import { CellContext } from '../../context/cell-context';
var CalendarCellComponent = /** @class */ (function () {
    function CalendarCellComponent() {
        this.styles = {};
    }
    Object.defineProperty(CalendarCellComponent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return Object.keys(this.styles).filter(function (key) { return _this.styles[key]; }).join(' ');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarCellComponent.prototype, "selection", {
        get: /**
         * @return {?}
         */
        function () {
            return this.context.selection;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalendarCellComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CalendarCellComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.context) {
            /** @type {?} */
            var today = new Date();
            /** @type {?} */
            var isToday = this.context.date === format(new Date(), 'YYYY-MM-DD');
            this.dateStatus = {
                'selected': this.isSelected(),
                'from': this.selection.from() === this.context.date,
                'to': this.selection.to() === this.context.date,
                'in-range': this.isInRange() || this.isSelected(),
                'past': compareDesc(parse(this.context.date), today) > 0 && !isToday,
                'outside-month': getMonth(this.context.date) !== this.context.monthSelection.month,
                'today': isToday,
                'has-payload': this.context.payload !== undefined,
                'host': true,
                'selection-simple': this.context.selection.name === 'simple',
                'selection-range': this.context.selection.name === 'range',
                'selection-pick': this.context.selection.name === 'pick',
                'disabled': this.context.disabled || (this.context.filterDates && this.context.filterDates(parse(this.context.date))),
            };
            /** @type {?} */
            var prefix_1 = this.context.stylePrefix;
            this.styles[prefix_1 + "-calendar-cell"] = true;
            Object.keys(this.dateStatus).forEach(function (key) {
                _this.styles[prefix_1 + "-calendar-cell-" + key] = _this.dateStatus[key];
            });
        }
    };
    /**
     * @return {?}
     */
    CalendarCellComponent.prototype.isSelected = /**
     * @return {?}
     */
    function () {
        return this.selection.isSelected(this.context.date);
    };
    /**
     * @return {?}
     */
    CalendarCellComponent.prototype.isInRange = /**
     * @return {?}
     */
    function () {
        return this.selection.isInRange(this.context.date);
    };
    /**
     * @return {?}
     */
    CalendarCellComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (!this.context.disabled) {
            this.selection.change(this.context.date);
        }
    };
    CalendarCellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'trb-calendar-cell',
                    template: "<ng-container *ngIf=\"!context.hideDaysOutsideMonth || !dateStatus['outside-month']\">\n    <div class=\"overlay\" (click)=\"onClick()\"></div>\n    <span class=\"label\">{{ context.dayOfMonth }}</span>\n    <ng-content></ng-content>\n</ng-container>"
                }] }
    ];
    CalendarCellComponent.propDecorators = {
        context: [{ type: Input }],
        classes: [{ type: HostBinding, args: ['class',] }]
    };
    return CalendarCellComponent;
}());
export { CalendarCellComponent };
if (false) {
    /** @type {?} */
    CalendarCellComponent.prototype.context;
    /** @type {?} */
    CalendarCellComponent.prototype.dateStatus;
    /** @type {?} */
    CalendarCellComponent.prototype.styles;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9jZWxsL2NlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHekQ7SUFBQTtRQU9FLFdBQU0sR0FBUSxFQUFFLENBQUM7SUEyRG5CLENBQUM7SUF6REMsc0JBQ0ksMENBQU87Ozs7UUFEWDtZQUFBLGlCQUdDO1lBREMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNENBQVM7Ozs7UUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsMkNBQVc7OztJQUFYO1FBQUEsaUJBOEJDO1FBN0JDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTs7Z0JBQ1YsS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFOztnQkFDbEIsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLFlBQVksQ0FBQztZQUV0RSxJQUFJ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bXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEhvc3RCaW5kaW5nLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldE1vbnRoLCBwYXJzZSwgY29tcGFyZURlc2MsIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IENlbGxDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9jZWxsLWNvbnRleHQnO1xuaW1wb3J0IHsgSUNhbGVuZGFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvc2VsZWN0aW9uL2NhbGVuZGFyLXNlbGVjdGlvbi5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmItY2FsZW5kYXItY2VsbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jZWxsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGNvbnRleHQ6IENlbGxDb250ZXh0PGFueT47XG4gIGRhdGVTdGF0dXM6IGFueTtcbiAgc3R5bGVzOiBhbnkgPSB7fTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc3R5bGVzKS5maWx0ZXIoa2V5ID0+IHRoaXMuc3R5bGVzW2tleV0pLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldCBzZWxlY3Rpb24oKTogSUNhbGVuZGFyU2VsZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnNlbGVjdGlvbjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udGV4dCkge1xuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgaXNUb2RheSA9IHRoaXMuY29udGV4dC5kYXRlID09PSBmb3JtYXQobmV3IERhdGUoKSwgJ1lZWVktTU0tREQnKTtcblxuICAgICAgdGhpcy5kYXRlU3RhdHVzID0ge1xuICAgICAgICAnc2VsZWN0ZWQnOiB0aGlzLmlzU2VsZWN0ZWQoKSxcbiAgICAgICAgJ2Zyb20nOiB0aGlzLnNlbGVjdGlvbi5mcm9tKCkgPT09IHRoaXMuY29udGV4dC5kYXRlLFxuICAgICAgICAndG8nOiB0aGlzLnNlbGVjdGlvbi50bygpID09PSB0aGlzLmNvbnRleHQuZGF0ZSxcbiAgICAgICAgJ2luLXJhbmdlJzogdGhpcy5pc0luUmFuZ2UoKSB8fCB0aGlzLmlzU2VsZWN0ZWQoKSxcbiAgICAgICAgJ3Bhc3QnOiBjb21wYXJlRGVzYyhwYXJzZSh0aGlzLmNvbnRleHQuZGF0ZSksIHRvZGF5KSA+IDAgJiYgIWlzVG9kYXksXG4gICAgICAgICdvdXRzaWRlLW1vbnRoJzogZ2V0TW9udGgodGhpcy5jb250ZXh0LmRhdGUpICE9PSB0aGlzLmNvbnRleHQubW9udGhTZWxlY3Rpb24ubW9udGgsXG4gICAgICAgICd0b2RheSc6IGlzVG9kYXksXG4gICAgICAgICdoYXMtcGF5bG9hZCc6IHRoaXMuY29udGV4dC5wYXlsb2FkICE9PSB1bmRlZmluZWQsXG4gICAgICAgICdob3N0JzogdHJ1ZSxcbiAgICAgICAgJ3NlbGVjdGlvbi1zaW1wbGUnOiB0aGlzLmNvbnRleHQuc2VsZWN0aW9uLm5hbWUgPT09ICdzaW1wbGUnLFxuICAgICAgICAnc2VsZWN0aW9uLXJhbmdlJzogdGhpcy5jb250ZXh0LnNlbGVjdGlvbi5uYW1lID09PSAncmFuZ2UnLFxuICAgICAgICAnc2VsZWN0aW9uLXBpY2snOiB0aGlzLmNvbnRleHQuc2VsZWN0aW9uLm5hbWUgPT09ICdwaWNrJyxcbiAgICAgICAgJ2Rpc2FibGVkJzogdGhpcy5jb250ZXh0LmRpc2FibGVkIHx8ICh0aGlzLmNvbnRleHQuZmlsdGVyRGF0ZXMgJiYgdGhpcy5jb250ZXh0LmZpbHRlckRhdGVzKHBhcnNlKHRoaXMuY29udGV4dC5kYXRlKSkpLFxuICAgICAgfTtcblxuICAgICAgY29uc3QgcHJlZml4ID0gdGhpcy5jb250ZXh0LnN0eWxlUHJlZml4O1xuXG4gICAgICB0aGlzLnN0eWxlc1tgJHtwcmVmaXh9LWNhbGVuZGFyLWNlbGxgXSA9IHRydWU7XG5cbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0ZVN0YXR1cykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICB0aGlzLnN0eWxlc1tgJHtwcmVmaXh9LWNhbGVuZGFyLWNlbGwtJHtrZXl9YF0gPSB0aGlzLmRhdGVTdGF0dXNba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbiAgaXNTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb24uaXNTZWxlY3RlZCh0aGlzLmNvbnRleHQuZGF0ZSk7XG4gIH1cblxuICBpc0luUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uLmlzSW5SYW5nZSh0aGlzLmNvbnRleHQuZGF0ZSk7XG4gIH1cblxuICBvbkNsaWNrKCkge1xuICAgIGlmICghdGhpcy5jb250ZXh0LmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbi5jaGFuZ2UodGhpcy5jb250ZXh0LmRhdGUpO1xuICAgIH1cbiAgfVxufVxuXG4iXX0=