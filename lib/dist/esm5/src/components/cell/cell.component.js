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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9jZWxsL2NlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFFBQVEsRUFBRyxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHekQ7SUFBQTtRQU9JLFdBQU0sR0FBUSxFQUFFLENBQUM7SUF3RHJCLENBQUM7SUF0REcsc0JBQ0ksMENBQU87Ozs7UUFEWDtZQUFBLGlCQUdDO1lBREcsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNENBQVM7Ozs7UUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFBQSxpQkE4QkM7UUE3QkcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFOztnQkFDUixLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUU7O2dCQUNsQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsWUFBWSxDQUFDO1lBRXRFLElBQUksQ0FBQyxVQUFVLEdBQUc7Z0JBQ2QsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtnQkFDbkQsSUFBSSxFQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO2dCQUNoRCxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pELE1BQU0sRUFBRyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTztnQkFDckUsZUFBZSxFQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUs7Z0JBQ25GLE9BQU8sRUFBRyxPQUFPO2dCQUNqQixhQUFhLEVBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssU0FBUztnQkFDbEQsTUFBTSxFQUFHLElBQUk7Z0JBQ2Isa0JBQWtCLEVBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLFFBQVE7Z0JBQzdELGlCQUFpQixFQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxPQUFPO2dCQUMzRCxnQkFBZ0IsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssTUFBTTtnQkFDekQsVUFBVSxFQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTthQUNyQyxDQUFDOztnQkFFSSxRQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBRXZDLElBQUksQ0FBQyxNQUFNLENBQUksUUFBTSxtQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUU5QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO2dCQUNwQyxLQUFJLENBQUMsTUFBTSxDQUFJLFFBQU0sdUJBQWtCLEdBQUssQ0FBQyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekUsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUVMLENBQUM7Ozs7SUFFRCwwQ0FBVTs7O0lBQVY7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELHlDQUFTOzs7SUFBVDtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQsdUNBQU87OztJQUFQO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUM7SUFDTCxDQUFDOztnQkE5REosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRyxtQkFBbUI7b0JBQzlCLHNRQUFvQztpQkFDdkM7OzswQkFFSSxLQUFLOzBCQUlMLFdBQVcsU0FBQyxPQUFPOztJQXNEeEIsNEJBQUM7Q0FBQSxBQS9ERCxJQStEQztTQTNEWSxxQkFBcUI7OztJQUM5Qix3Q0FBbUM7O0lBQ25DLDJDQUFnQjs7SUFDaEIsdUNBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0TW9udGgsICBwYXJzZSwgY29tcGFyZURlc2MsIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IENlbGxDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9jZWxsLWNvbnRleHQnO1xuaW1wb3J0IHsgSUNhbGVuZGFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvc2VsZWN0aW9uL2NhbGVuZGFyLXNlbGVjdGlvbi5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICd0cmItY2FsZW5kYXItY2VsbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NlbGwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgY29udGV4dDogQ2VsbENvbnRleHQ8YW55PjtcbiAgICBkYXRlU3RhdHVzOiBhbnk7XG4gICAgc3R5bGVzOiBhbnkgPSB7fTtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICAgIGdldCBjbGFzc2VzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zdHlsZXMpLmZpbHRlcihrZXkgPT4gdGhpcy5zdHlsZXNba2V5XSkuam9pbignICcpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3Rpb24oKTogSUNhbGVuZGFyU2VsZWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5zZWxlY3Rpb247XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IGlzVG9kYXkgPSB0aGlzLmNvbnRleHQuZGF0ZSA9PT0gZm9ybWF0KG5ldyBEYXRlKCksICdZWVlZLU1NLUREJyk7XG5cbiAgICAgICAgICAgIHRoaXMuZGF0ZVN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAnc2VsZWN0ZWQnOiB0aGlzLmlzU2VsZWN0ZWQoKSxcbiAgICAgICAgICAgICAgICAnZnJvbSc6IHRoaXMuc2VsZWN0aW9uLmZyb20oKSA9PT0gdGhpcy5jb250ZXh0LmRhdGUsXG4gICAgICAgICAgICAgICAgJ3RvJyA6IHRoaXMuc2VsZWN0aW9uLnRvKCkgPT09IHRoaXMuY29udGV4dC5kYXRlLFxuICAgICAgICAgICAgICAgICdpbi1yYW5nZSc6IHRoaXMuaXNJblJhbmdlKCkgfHwgdGhpcy5pc1NlbGVjdGVkKCksXG4gICAgICAgICAgICAgICAgJ3Bhc3QnIDogY29tcGFyZURlc2MocGFyc2UodGhpcy5jb250ZXh0LmRhdGUpLCB0b2RheSkgPiAwICYmICFpc1RvZGF5LFxuICAgICAgICAgICAgICAgICdvdXRzaWRlLW1vbnRoJyA6IGdldE1vbnRoKHRoaXMuY29udGV4dC5kYXRlKSAhPT0gdGhpcy5jb250ZXh0Lm1vbnRoU2VsZWN0aW9uLm1vbnRoLFxuICAgICAgICAgICAgICAgICd0b2RheScgOiBpc1RvZGF5LFxuICAgICAgICAgICAgICAgICdoYXMtcGF5bG9hZCcgOiB0aGlzLmNvbnRleHQucGF5bG9hZCAhPT0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICdob3N0JyA6IHRydWUsXG4gICAgICAgICAgICAgICAgJ3NlbGVjdGlvbi1zaW1wbGUnIDogdGhpcy5jb250ZXh0LnNlbGVjdGlvbi5uYW1lID09PSAnc2ltcGxlJyxcbiAgICAgICAgICAgICAgICAnc2VsZWN0aW9uLXJhbmdlJyA6IHRoaXMuY29udGV4dC5zZWxlY3Rpb24ubmFtZSA9PT0gJ3JhbmdlJyxcbiAgICAgICAgICAgICAgICAnc2VsZWN0aW9uLXBpY2snIDogdGhpcy5jb250ZXh0LnNlbGVjdGlvbi5uYW1lID09PSAncGljaycsXG4gICAgICAgICAgICAgICAgJ2Rpc2FibGVkJyA6IHRoaXMuY29udGV4dC5kaXNhYmxlZFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgcHJlZml4ID0gdGhpcy5jb250ZXh0LnN0eWxlUHJlZml4O1xuXG4gICAgICAgICAgICB0aGlzLnN0eWxlc1tgJHtwcmVmaXh9LWNhbGVuZGFyLWNlbGxgXSA9IHRydWU7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0ZVN0YXR1cykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVzW2Ake3ByZWZpeH0tY2FsZW5kYXItY2VsbC0ke2tleX1gXSA9IHRoaXMuZGF0ZVN0YXR1c1trZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGlzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbi5pc1NlbGVjdGVkKHRoaXMuY29udGV4dC5kYXRlKTtcbiAgICB9XG5cbiAgICBpc0luUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbi5pc0luUmFuZ2UodGhpcy5jb250ZXh0LmRhdGUpO1xuICAgIH1cblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIGlmICghdGhpcy5jb250ZXh0LmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5jaGFuZ2UodGhpcy5jb250ZXh0LmRhdGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0=