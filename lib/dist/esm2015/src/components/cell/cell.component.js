/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding } from '@angular/core';
import { getMonth, parse, compareDesc, format } from 'date-fns';
import { CellContext } from '../../context/cell-context';
export class CalendarCellComponent {
    constructor() {
        this.styles = {};
    }
    /**
     * @return {?}
     */
    get classes() {
        return Object.keys(this.styles).filter(key => this.styles[key]).join(' ');
    }
    /**
     * @return {?}
     */
    get selection() {
        return this.context.selection;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.context) {
            /** @type {?} */
            const today = new Date();
            /** @type {?} */
            const isToday = this.context.date === format(new Date(), 'YYYY-MM-DD');
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
            const prefix = this.context.stylePrefix;
            this.styles[`${prefix}-calendar-cell`] = true;
            Object.keys(this.dateStatus).forEach(key => {
                this.styles[`${prefix}-calendar-cell-${key}`] = this.dateStatus[key];
            });
        }
    }
    /**
     * @return {?}
     */
    isSelected() {
        return this.selection.isSelected(this.context.date);
    }
    /**
     * @return {?}
     */
    isInRange() {
        return this.selection.isInRange(this.context.date);
    }
    /**
     * @return {?}
     */
    onClick() {
        if (!this.context.disabled) {
            this.selection.change(this.context.date);
        }
    }
}
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
if (false) {
    /** @type {?} */
    CalendarCellComponent.prototype.context;
    /** @type {?} */
    CalendarCellComponent.prototype.dateStatus;
    /** @type {?} */
    CalendarCellComponent.prototype.styles;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9jZWxsL2NlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFPekQsTUFBTSxPQUFPLHFCQUFxQjtJQUpsQztRQU9FLFdBQU0sR0FBUSxFQUFFLENBQUM7SUEyRG5CLENBQUM7Ozs7SUF6REMsSUFDSSxPQUFPO1FBQ1QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7O2tCQUNWLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRTs7a0JBQ2xCLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxZQUFZLENBQUM7WUFFdEUsSUFBSSxDQUFDLFVBQVUsR0FBRztnQkFDaEIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtnQkFDbkQsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO2dCQUMvQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pELE1BQU0sRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTztnQkFDcEUsZUFBZSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUs7Z0JBQ2xGLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssU0FBUztnQkFDakQsTUFBTSxFQUFFLElBQUk7Z0JBQ1osa0JBQWtCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLFFBQVE7Z0JBQzVELGlCQUFpQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxPQUFPO2dCQUMxRCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssTUFBTTtnQkFDeEQsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN0SCxDQUFDOztrQkFFSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBRXZDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLGdCQUFnQixDQUFDLEdBQUcsSUFBSSxDQUFDO1lBRTlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sa0JBQWtCLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2RSxDQUFDLENBQUMsQ0FBQztTQUNKO0lBRUgsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7OztZQWpFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0Isc1FBQW9DO2FBQ3JDOzs7c0JBRUUsS0FBSztzQkFJTCxXQUFXLFNBQUMsT0FBTzs7OztJQUpwQix3Q0FBbUM7O0lBQ25DLDJDQUFnQjs7SUFDaEIsdUNBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBIb3N0QmluZGluZywgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXRNb250aCwgcGFyc2UsIGNvbXBhcmVEZXNjLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBDZWxsQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvY2VsbC1jb250ZXh0JztcbmltcG9ydCB7IElDYWxlbmRhclNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9jYWxlbmRhci1zZWxlY3Rpb24uaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJiLWNhbGVuZGFyLWNlbGwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2VsbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDZWxsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBjb250ZXh0OiBDZWxsQ29udGV4dDxhbnk+O1xuICBkYXRlU3RhdHVzOiBhbnk7XG4gIHN0eWxlczogYW55ID0ge307XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnN0eWxlcykuZmlsdGVyKGtleSA9PiB0aGlzLnN0eWxlc1trZXldKS5qb2luKCcgJyk7XG4gIH1cblxuICBnZXQgc2VsZWN0aW9uKCk6IElDYWxlbmRhclNlbGVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5zZWxlY3Rpb247XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbnRleHQpIHtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IGlzVG9kYXkgPSB0aGlzLmNvbnRleHQuZGF0ZSA9PT0gZm9ybWF0KG5ldyBEYXRlKCksICdZWVlZLU1NLUREJyk7XG5cbiAgICAgIHRoaXMuZGF0ZVN0YXR1cyA9IHtcbiAgICAgICAgJ3NlbGVjdGVkJzogdGhpcy5pc1NlbGVjdGVkKCksXG4gICAgICAgICdmcm9tJzogdGhpcy5zZWxlY3Rpb24uZnJvbSgpID09PSB0aGlzLmNvbnRleHQuZGF0ZSxcbiAgICAgICAgJ3RvJzogdGhpcy5zZWxlY3Rpb24udG8oKSA9PT0gdGhpcy5jb250ZXh0LmRhdGUsXG4gICAgICAgICdpbi1yYW5nZSc6IHRoaXMuaXNJblJhbmdlKCkgfHwgdGhpcy5pc1NlbGVjdGVkKCksXG4gICAgICAgICdwYXN0JzogY29tcGFyZURlc2MocGFyc2UodGhpcy5jb250ZXh0LmRhdGUpLCB0b2RheSkgPiAwICYmICFpc1RvZGF5LFxuICAgICAgICAnb3V0c2lkZS1tb250aCc6IGdldE1vbnRoKHRoaXMuY29udGV4dC5kYXRlKSAhPT0gdGhpcy5jb250ZXh0Lm1vbnRoU2VsZWN0aW9uLm1vbnRoLFxuICAgICAgICAndG9kYXknOiBpc1RvZGF5LFxuICAgICAgICAnaGFzLXBheWxvYWQnOiB0aGlzLmNvbnRleHQucGF5bG9hZCAhPT0gdW5kZWZpbmVkLFxuICAgICAgICAnaG9zdCc6IHRydWUsXG4gICAgICAgICdzZWxlY3Rpb24tc2ltcGxlJzogdGhpcy5jb250ZXh0LnNlbGVjdGlvbi5uYW1lID09PSAnc2ltcGxlJyxcbiAgICAgICAgJ3NlbGVjdGlvbi1yYW5nZSc6IHRoaXMuY29udGV4dC5zZWxlY3Rpb24ubmFtZSA9PT0gJ3JhbmdlJyxcbiAgICAgICAgJ3NlbGVjdGlvbi1waWNrJzogdGhpcy5jb250ZXh0LnNlbGVjdGlvbi5uYW1lID09PSAncGljaycsXG4gICAgICAgICdkaXNhYmxlZCc6IHRoaXMuY29udGV4dC5kaXNhYmxlZCB8fCAodGhpcy5jb250ZXh0LmZpbHRlckRhdGVzICYmIHRoaXMuY29udGV4dC5maWx0ZXJEYXRlcyhwYXJzZSh0aGlzLmNvbnRleHQuZGF0ZSkpKSxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHByZWZpeCA9IHRoaXMuY29udGV4dC5zdHlsZVByZWZpeDtcblxuICAgICAgdGhpcy5zdHlsZXNbYCR7cHJlZml4fS1jYWxlbmRhci1jZWxsYF0gPSB0cnVlO1xuXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGVTdGF0dXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgdGhpcy5zdHlsZXNbYCR7cHJlZml4fS1jYWxlbmRhci1jZWxsLSR7a2V5fWBdID0gdGhpcy5kYXRlU3RhdHVzW2tleV07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIGlzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uLmlzU2VsZWN0ZWQodGhpcy5jb250ZXh0LmRhdGUpO1xuICB9XG5cbiAgaXNJblJhbmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbi5pc0luUmFuZ2UodGhpcy5jb250ZXh0LmRhdGUpO1xuICB9XG5cbiAgb25DbGljaygpIHtcbiAgICBpZiAoIXRoaXMuY29udGV4dC5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5zZWxlY3Rpb24uY2hhbmdlKHRoaXMuY29udGV4dC5kYXRlKTtcbiAgICB9XG4gIH1cbn1cblxuIl19