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
        var _this = this;
        // console.log('cell init')
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
                'disabled': this.context.disabled
            };
            /** @type {?} */
            var prefix_1 = this.context.stylePrefix;
            this.styles[prefix_1 + "-calendar-cell"] = true;
            Object.keys(this.dateStatus).forEach(function (key) {
                _this.styles[prefix_1 + "-calendar-cell-" + key] = _this.dateStatus[key];
            });
        }
        // console.log(this.context.date, format(this.context.monthSelection.date, 'YYYY-MM-DD'), this.dateStatus)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9jZWxsL2NlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFFBQVEsRUFBRyxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHekQ7SUFBQTtRQU9JLFdBQU0sR0FBUSxFQUFFLENBQUM7SUEyRHJCLENBQUM7SUF6REcsc0JBQ0ksMENBQU87Ozs7UUFEWDtZQUFBLGlCQUdDO1lBREcsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNENBQVM7Ozs7UUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFBQSxpQkFpQ0M7UUFoQ0csMkJBQTJCO1FBQzNCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTs7Z0JBQ1IsS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFOztnQkFDbEIsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLFlBQVksQ0FBQztZQUV0RSxJQUFJLENBQUMsVUFBVSxHQUFHO2dCQUNkLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7Z0JBQ25ELElBQUksRUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtnQkFDaEQsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNqRCxNQUFNLEVBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87Z0JBQ3JFLGVBQWUsRUFBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLO2dCQUNuRixPQUFPLEVBQUcsT0FBTztnQkFDakIsYUFBYSxFQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxLQUFLLFNBQVM7Z0JBQ2xELE1BQU0sRUFBRyxJQUFJO2dCQUNiLGtCQUFrQixFQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxRQUFRO2dCQUM3RCxpQkFBaUIsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssT0FBTztnQkFDM0QsZ0JBQWdCLEVBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLE1BQU07Z0JBQ3pELFVBQVUsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVE7YUFDckMsQ0FBQzs7Z0JBRUksUUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVztZQUV2QyxJQUFJLENBQUMsTUFBTSxDQUFJLFFBQU0sbUJBQWdCLENBQUMsR0FBRyxJQUFJLENBQUM7WUFFOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztnQkFDcEMsS0FBSSxDQUFDLE1BQU0sQ0FBSSxRQUFNLHVCQUFrQixHQUFLLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pFLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFHRCwwR0FBMEc7SUFDOUcsQ0FBQzs7OztJQUVELDBDQUFVOzs7SUFBVjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQseUNBQVM7OztJQUFUO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFRCx1Q0FBTzs7O0lBQVA7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7O2dCQWpFSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFHLG1CQUFtQjtvQkFDOUIsc1FBQW9DO2lCQUN2Qzs7OzBCQUVJLEtBQUs7MEJBSUwsV0FBVyxTQUFDLE9BQU87O0lBeUR4Qiw0QkFBQztDQUFBLEFBbEVELElBa0VDO1NBOURZLHFCQUFxQjs7O0lBQzlCLHdDQUFtQzs7SUFDbkMsMkNBQWdCOztJQUNoQix1Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXRNb250aCwgIHBhcnNlLCBjb21wYXJlRGVzYywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgQ2VsbENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L2NlbGwtY29udGV4dCc7XG5pbXBvcnQgeyBJQ2FsZW5kYXJTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9zZWxlY3Rpb24vY2FsZW5kYXItc2VsZWN0aW9uLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ3RyYi1jYWxlbmRhci1jZWxsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2VsbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDZWxsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBjb250ZXh0OiBDZWxsQ29udGV4dDxhbnk+O1xuICAgIGRhdGVTdGF0dXM6IGFueTtcbiAgICBzdHlsZXM6IGFueSA9IHt9O1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gICAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnN0eWxlcykuZmlsdGVyKGtleSA9PiB0aGlzLnN0eWxlc1trZXldKS5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGlvbigpOiBJQ2FsZW5kYXJTZWxlY3Rpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnNlbGVjdGlvbjtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NlbGwgaW5pdCcpXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IGlzVG9kYXkgPSB0aGlzLmNvbnRleHQuZGF0ZSA9PT0gZm9ybWF0KG5ldyBEYXRlKCksICdZWVlZLU1NLUREJyk7XG5cbiAgICAgICAgICAgIHRoaXMuZGF0ZVN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAnc2VsZWN0ZWQnOiB0aGlzLmlzU2VsZWN0ZWQoKSxcbiAgICAgICAgICAgICAgICAnZnJvbSc6IHRoaXMuc2VsZWN0aW9uLmZyb20oKSA9PT0gdGhpcy5jb250ZXh0LmRhdGUsXG4gICAgICAgICAgICAgICAgJ3RvJyA6IHRoaXMuc2VsZWN0aW9uLnRvKCkgPT09IHRoaXMuY29udGV4dC5kYXRlLFxuICAgICAgICAgICAgICAgICdpbi1yYW5nZSc6IHRoaXMuaXNJblJhbmdlKCkgfHwgdGhpcy5pc1NlbGVjdGVkKCksXG4gICAgICAgICAgICAgICAgJ3Bhc3QnIDogY29tcGFyZURlc2MocGFyc2UodGhpcy5jb250ZXh0LmRhdGUpLCB0b2RheSkgPiAwICYmICFpc1RvZGF5LFxuICAgICAgICAgICAgICAgICdvdXRzaWRlLW1vbnRoJyA6IGdldE1vbnRoKHRoaXMuY29udGV4dC5kYXRlKSAhPT0gdGhpcy5jb250ZXh0Lm1vbnRoU2VsZWN0aW9uLm1vbnRoLFxuICAgICAgICAgICAgICAgICd0b2RheScgOiBpc1RvZGF5LFxuICAgICAgICAgICAgICAgICdoYXMtcGF5bG9hZCcgOiB0aGlzLmNvbnRleHQucGF5bG9hZCAhPT0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICdob3N0JyA6IHRydWUsXG4gICAgICAgICAgICAgICAgJ3NlbGVjdGlvbi1zaW1wbGUnIDogdGhpcy5jb250ZXh0LnNlbGVjdGlvbi5uYW1lID09PSAnc2ltcGxlJyxcbiAgICAgICAgICAgICAgICAnc2VsZWN0aW9uLXJhbmdlJyA6IHRoaXMuY29udGV4dC5zZWxlY3Rpb24ubmFtZSA9PT0gJ3JhbmdlJyxcbiAgICAgICAgICAgICAgICAnc2VsZWN0aW9uLXBpY2snIDogdGhpcy5jb250ZXh0LnNlbGVjdGlvbi5uYW1lID09PSAncGljaycsXG4gICAgICAgICAgICAgICAgJ2Rpc2FibGVkJyA6IHRoaXMuY29udGV4dC5kaXNhYmxlZFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgcHJlZml4ID0gdGhpcy5jb250ZXh0LnN0eWxlUHJlZml4O1xuXG4gICAgICAgICAgICB0aGlzLnN0eWxlc1tgJHtwcmVmaXh9LWNhbGVuZGFyLWNlbGxgXSA9IHRydWU7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0ZVN0YXR1cykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVzW2Ake3ByZWZpeH0tY2FsZW5kYXItY2VsbC0ke2tleX1gXSA9IHRoaXMuZGF0ZVN0YXR1c1trZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29udGV4dC5kYXRlLCBmb3JtYXQodGhpcy5jb250ZXh0Lm1vbnRoU2VsZWN0aW9uLmRhdGUsICdZWVlZLU1NLUREJyksIHRoaXMuZGF0ZVN0YXR1cylcbiAgICB9XG5cbiAgICBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb24uaXNTZWxlY3RlZCh0aGlzLmNvbnRleHQuZGF0ZSk7XG4gICAgfVxuXG4gICAgaXNJblJhbmdlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb24uaXNJblJhbmdlKHRoaXMuY29udGV4dC5kYXRlKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKCkge1xuICAgICAgICBpZiAoIXRoaXMuY29udGV4dC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uY2hhbmdlKHRoaXMuY29udGV4dC5kYXRlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19