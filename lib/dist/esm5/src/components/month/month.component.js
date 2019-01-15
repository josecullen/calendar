/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ContentChild, HostBinding } from '@angular/core';
import { Calendar } from '../../lib/calendar/calendar';
import { CalendarViewConfig } from '../../lib/calendar-view/config/calendar-view-config.class';
import { CellContext } from '../../context/cell-context';
import { MonthContext } from '../../context/month-context';
import { MonthSelection } from '../../lib/calendar-view/calendar-month-selection.class';
import { CalendarCellDirective } from '../../directives/calendar-cell';
import { CalendarHeaderDirective } from '../../directives/calendar-header.directive';
var CalendarMonthComponent = /** @class */ (function () {
    function CalendarMonthComponent() {
    }
    Object.defineProperty(CalendarMonthComponent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.stylePrefix + "-calendar-month";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalendarMonthComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // console.log('month init')
    };
    /**
     * @param {?} day
     * @return {?}
     */
    CalendarMonthComponent.prototype.getCellData = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        return CellContext.from(day, {
            selection: this.selection,
            monthSelection: this.monthSelection,
            hideDaysOutsideMonth: this.calendar.config.month.hideDaysOutsideMonth,
            stylePrefix: this.config.stylePrefix
        });
    };
    /**
     * @return {?}
     */
    CalendarMonthComponent.prototype.getHeaderData = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ ({
            monthLabels: this.config.month.monthLabels,
            monthIndex: this.index,
            pastMonths: this.config.header.pastMonths,
            showTwoMonths: this.selection['calendarMonthView'].needTwoMonthView && this.calendar.config.month['showTwoCalendarIfNeed'],
            linkedMonths: this.config.header.linkedMonths,
            monthSelections: [this.selection.calendarMonthView.from, this.selection.calendarMonthView.to],
            stylePrefix: this.config.stylePrefix,
            showChangeMonthButton: this.config.month.showChangeMonthButton,
            showChangeYearButton: this.config.month.showChangeYearButton
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarMonthComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var contextChange = changes['context'];
        if (contextChange) {
            this.calendar = this.context.calendar;
            this.index = this.context.index;
            this.selection = this.context.selection;
            this.monthSelection = this.context.monthSelection;
            this.config = this.context.config;
        }
        this.dayLabelsRowClass = {};
        this.rowClass = {};
        this.dayLabelsRowClass[this.config.stylePrefix + "-calendar-row"] = true;
        this.dayLabelsRowClass[this.config.stylePrefix + "-calendar-day-labels"] = true;
        this.rowClass[this.config.stylePrefix + "-calendar-row"] = true;
    };
    CalendarMonthComponent.decorators = [
        { type: Component, args: [{
                    selector: 'trb-calendar-month',
                    template: "\n<ng-container *ngIf=\"calendarHeader else defaultHeader\">\n    <ng-container *ngTemplateOutlet=\"calendarHeader.template; context: { $implicit: getHeaderData()}\">\n    </ng-container>\n</ng-container>\n\n<ng-template #defaultHeader>\n    <trb-calendar-header [context]=\"getHeaderData()\">\n    </trb-calendar-header>\n</ng-template>\n\n<ng-container *ngIf=\"calendar.getYear(monthSelection.year).months[monthSelection.month].getCalendarView() as calendarView\">\n    <div [ngClass]=\"dayLabelsRowClass\">\n        <trb-calendar-day-header-cell class=\"day-label\" *ngFor=\"let day of [0,1,2,3,4,5,6]\" [day]=\"day\" [dayLabels]=\"config.month.dayLabels\"\n            [dayLength]=\"config.month.dayLength\">\n        </trb-calendar-day-header-cell>\n    </div>\n\n    <div [ngClass]=\"rowClass\" *ngFor=\"let week of calendarView; index as i\">\n\n        <ng-container *ngFor=\"let day of week\">\n\n            <ng-container *ngIf=\"calendarCell else defaultCell\">\n                <ng-container *ngTemplateOutlet=\"calendarCell.template; context: { $implicit: getCellData(day) }\">\n                </ng-container>\n            </ng-container>\n\n            <ng-template #defaultCell>\n                <trb-calendar-cell [context]=\"getCellData(day)\"></trb-calendar-cell>\n            </ng-template>\n\n        </ng-container>\n    </div>\n</ng-container>",
                    styles: [".trb-calendar{display:flex;flex-wrap:wrap}.trb-calendar-month{margin:0 10px}.trb-calendar-header{height:16px}.trb-calendar-header .trb-calendar-header-buttons{padding:0 12px}.trb-calendar-row{display:flex}.trb-calendar-day-labels{padding:4px 0;font-size:12px}.trb-calendar-day-labels .day-label{flex:1;position:relative;text-align:center;padding:8px 0}.trb-calendar-cell{font-family:ProximaNova,sans-serif;position:relative;min-width:38px;min-height:38px;text-align:center;display:block;line-height:30px;align-items:center}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay{background:#e4e7e7;width:100%;height:100%;top:0;left:0;position:absolute;opacity:.1}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay:hover{background:#666;cursor:pointer}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month){background-color:#17a45f}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .label,.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .my-price{color:#fff}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-from{border-top-left-radius:4px;border-bottom-left-radius:4px}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-to{border-top-right-radius:4px;border-bottom-right-radius:4px}.trb-calendar-cell:not(.trb-calendar-cell-has-payload){line-height:38px}.trb-calendar-cell.trb-calendar-cell-past .label{color:rgba(0,0,0,.1)}.trb-calendar-cell.trb-calendar-cell-in-range:not(.trb-calendar-cell-outside-month){background-color:#d3ecd3}.trb-calendar-cell.trb-calendar-cell-disabled{background-color:#ccc;cursor:not-allowed}.trb-calendar-cell.trb-calendar-cell-disabled .label{color:rgba(0,0,0,.1)}", ""]
                }] }
    ];
    CalendarMonthComponent.propDecorators = {
        classes: [{ type: HostBinding, args: ['class',] }],
        context: [{ type: Input }],
        calendar: [{ type: Input }],
        index: [{ type: Input }],
        selection: [{ type: Input }],
        monthSelection: [{ type: Input }],
        config: [{ type: Input }],
        calendarCell: [{ type: ContentChild, args: [CalendarCellDirective,] }],
        calendarHeader: [{ type: ContentChild, args: [CalendarHeaderDirective,] }]
    };
    return CalendarMonthComponent;
}());
export { CalendarMonthComponent };
if (false) {
    /** @type {?} */
    CalendarMonthComponent.prototype.context;
    /** @type {?} */
    CalendarMonthComponent.prototype.calendar;
    /** @type {?} */
    CalendarMonthComponent.prototype.index;
    /** @type {?} */
    CalendarMonthComponent.prototype.selection;
    /** @type {?} */
    CalendarMonthComponent.prototype.monthSelection;
    /** @type {?} */
    CalendarMonthComponent.prototype.config;
    /** @type {?} */
    CalendarMonthComponent.prototype.dayLabelsRowClass;
    /** @type {?} */
    CalendarMonthComponent.prototype.rowClass;
    /** @type {?} */
    CalendarMonthComponent.prototype.calendarCell;
    /** @type {?} */
    CalendarMonthComponent.prototype.calendarHeader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NvbXBvbmVudHMvbW9udGgvbW9udGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQTRCLFdBQVcsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUU5RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDL0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDeEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFJckY7SUFBQTtJQXlFQSxDQUFDO0lBbEVHLHNCQUNJLDJDQUFPOzs7O1FBRFg7WUFFSSxPQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxvQkFBaUIsQ0FBQztRQUN2RCxDQUFDOzs7T0FBQTs7OztJQWlCRCx5Q0FBUTs7O0lBQVI7UUFDSSw0QkFBNEI7SUFDaEMsQ0FBQzs7Ozs7SUFFRCw0Q0FBVzs7OztJQUFYLFVBQVksR0FBa0I7UUFDMUIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUN6QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLG9CQUFvQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxvQkFBb0I7WUFDckUsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVztTQUN2QyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQsOENBQWE7OztJQUFiO1FBQ0ksT0FBTyxtQkFBQTtZQUNILFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXO1lBQzFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSztZQUN0QixVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVTtZQUN6QyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztZQUMxSCxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWTtZQUM3QyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQztZQUM3RixXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXO1lBQ3BDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFxQjtZQUM5RCxvQkFBb0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxvQkFBb0I7U0FDL0QsRUFBaUIsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELDRDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjs7WUFDeEIsYUFBYSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFFeEMsSUFBSSxhQUFhLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7U0FDckM7UUFFRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxpQkFBaUIsQ0FBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsa0JBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN6RSxJQUFJLENBQUMsaUJBQWlCLENBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLHlCQUFzQixDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2hGLElBQUksQ0FBQyxRQUFRLENBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLGtCQUFlLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDcEUsQ0FBQzs7Z0JBdkVKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixrMkNBQXFDOztpQkFFeEM7OzswQkFHSSxXQUFXLFNBQUMsT0FBTzswQkFJbkIsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSztpQ0FDTCxLQUFLO3lCQUNMLEtBQUs7K0JBS0wsWUFBWSxTQUFDLHFCQUFxQjtpQ0FHbEMsWUFBWSxTQUFDLHVCQUF1Qjs7SUFpRHpDLDZCQUFDO0NBQUEsQUF6RUQsSUF5RUM7U0FwRVksc0JBQXNCOzs7SUFNL0IseUNBQStCOztJQUMvQiwwQ0FBNEI7O0lBQzVCLHVDQUF1Qjs7SUFDdkIsMkNBQXVDOztJQUN2QyxnREFBd0M7O0lBQ3hDLHdDQUFvQzs7SUFFcEMsbURBQXVCOztJQUN2QiwwQ0FBYzs7SUFFZCw4Q0FDb0M7O0lBRXBDLGdEQUN3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENvbnRlbnRDaGlsZCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBIb3N0QmluZGluZywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ2FsZW5kYXJTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9zZWxlY3Rpb24vY2FsZW5kYXItc2VsZWN0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci9jYWxlbmRhcic7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXdDb25maWcgfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9jb25maWcvY2FsZW5kYXItdmlldy1jb25maWcuY2xhc3MnO1xuaW1wb3J0IHsgQ2VsbENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L2NlbGwtY29udGV4dCc7XG5pbXBvcnQgeyBIZWFkZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9oZWFkZXItY29udGV4dCc7XG5pbXBvcnQgeyBNb250aENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L21vbnRoLWNvbnRleHQnO1xuaW1wb3J0IHsgTW9udGhTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9jYWxlbmRhci1tb250aC1zZWxlY3Rpb24uY2xhc3MnO1xuaW1wb3J0IHsgQ2FsZW5kYXJDZWxsRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1jZWxsJztcbmltcG9ydCB7IENhbGVuZGFySGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IENlbGxEYXRhIH0gZnJvbSAnLi4vLi4vY2VsbC1kYXRhJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RyYi1jYWxlbmRhci1tb250aCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21vbnRoLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi4vc3R5bGVzLnNhc3MnLCAnLi9tb250aC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyTW9udGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgICBnZXQgY2xhc3NlcygpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY29uZmlnLnN0eWxlUHJlZml4fS1jYWxlbmRhci1tb250aGA7XG4gICAgfVxuICAgIEBJbnB1dCgpIGNvbnRleHQ6IE1vbnRoQ29udGV4dDtcbiAgICBASW5wdXQoKSBjYWxlbmRhcjogQ2FsZW5kYXI7XG4gICAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcbiAgICBASW5wdXQoKSBzZWxlY3Rpb246IElDYWxlbmRhclNlbGVjdGlvbjtcbiAgICBASW5wdXQoKSBtb250aFNlbGVjdGlvbjogTW9udGhTZWxlY3Rpb247XG4gICAgQElucHV0KCkgY29uZmlnOiBDYWxlbmRhclZpZXdDb25maWc7XG5cbiAgICBkYXlMYWJlbHNSb3dDbGFzczogYW55O1xuICAgIHJvd0NsYXNzOiBhbnk7XG5cbiAgICBAQ29udGVudENoaWxkKENhbGVuZGFyQ2VsbERpcmVjdGl2ZSlcbiAgICBjYWxlbmRhckNlbGw6IENhbGVuZGFyQ2VsbERpcmVjdGl2ZTtcblxuICAgIEBDb250ZW50Q2hpbGQoQ2FsZW5kYXJIZWFkZXJEaXJlY3RpdmUpXG4gICAgY2FsZW5kYXJIZWFkZXI6IENhbGVuZGFySGVhZGVyRGlyZWN0aXZlO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdtb250aCBpbml0JylcbiAgICB9XG5cbiAgICBnZXRDZWxsRGF0YShkYXk6IENlbGxEYXRhPGFueT4pOiBDZWxsQ29udGV4dDxhbnk+IHtcbiAgICAgICAgcmV0dXJuIENlbGxDb250ZXh0LmZyb20oZGF5LCB7XG4gICAgICAgICAgICBzZWxlY3Rpb246IHRoaXMuc2VsZWN0aW9uLFxuICAgICAgICAgICAgbW9udGhTZWxlY3Rpb246IHRoaXMubW9udGhTZWxlY3Rpb24sXG4gICAgICAgICAgICBoaWRlRGF5c091dHNpZGVNb250aDogdGhpcy5jYWxlbmRhci5jb25maWcubW9udGguaGlkZURheXNPdXRzaWRlTW9udGgsXG4gICAgICAgICAgICBzdHlsZVByZWZpeDogdGhpcy5jb25maWcuc3R5bGVQcmVmaXhcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0SGVhZGVyRGF0YSgpOiBIZWFkZXJDb250ZXh0IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB0aGlzLmNvbmZpZy5tb250aC5tb250aExhYmVscyxcbiAgICAgICAgICAgIG1vbnRoSW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICAgICAgICBwYXN0TW9udGhzOiB0aGlzLmNvbmZpZy5oZWFkZXIucGFzdE1vbnRocyxcbiAgICAgICAgICAgIHNob3dUd29Nb250aHM6IHRoaXMuc2VsZWN0aW9uWydjYWxlbmRhck1vbnRoVmlldyddLm5lZWRUd29Nb250aFZpZXcgJiYgdGhpcy5jYWxlbmRhci5jb25maWcubW9udGhbJ3Nob3dUd29DYWxlbmRhcklmTmVlZCddLFxuICAgICAgICAgICAgbGlua2VkTW9udGhzOiB0aGlzLmNvbmZpZy5oZWFkZXIubGlua2VkTW9udGhzLFxuICAgICAgICAgICAgbW9udGhTZWxlY3Rpb25zOiBbdGhpcy5zZWxlY3Rpb24uY2FsZW5kYXJNb250aFZpZXcuZnJvbSwgdGhpcy5zZWxlY3Rpb24uY2FsZW5kYXJNb250aFZpZXcudG9dLFxuICAgICAgICAgICAgc3R5bGVQcmVmaXg6IHRoaXMuY29uZmlnLnN0eWxlUHJlZml4LFxuICAgICAgICAgICAgc2hvd0NoYW5nZU1vbnRoQnV0dG9uOiB0aGlzLmNvbmZpZy5tb250aC5zaG93Q2hhbmdlTW9udGhCdXR0b24sXG4gICAgICAgICAgICBzaG93Q2hhbmdlWWVhckJ1dHRvbjogdGhpcy5jb25maWcubW9udGguc2hvd0NoYW5nZVllYXJCdXR0b25cbiAgICAgICAgfSBhcyBIZWFkZXJDb250ZXh0O1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgY29udGV4dENoYW5nZSA9IGNoYW5nZXNbJ2NvbnRleHQnXTtcblxuICAgICAgICBpZiAoY29udGV4dENoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRhciA9IHRoaXMuY29udGV4dC5jYWxlbmRhcjtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLmNvbnRleHQuaW5kZXg7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMuY29udGV4dC5zZWxlY3Rpb247XG4gICAgICAgICAgICB0aGlzLm1vbnRoU2VsZWN0aW9uID0gdGhpcy5jb250ZXh0Lm1vbnRoU2VsZWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbnRleHQuY29uZmlnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXlMYWJlbHNSb3dDbGFzcyA9IHt9O1xuICAgICAgICB0aGlzLnJvd0NsYXNzID0ge307XG5cbiAgICAgICAgdGhpcy5kYXlMYWJlbHNSb3dDbGFzc1tgJHt0aGlzLmNvbmZpZy5zdHlsZVByZWZpeH0tY2FsZW5kYXItcm93YF0gPSB0cnVlO1xuICAgICAgICB0aGlzLmRheUxhYmVsc1Jvd0NsYXNzW2Ake3RoaXMuY29uZmlnLnN0eWxlUHJlZml4fS1jYWxlbmRhci1kYXktbGFiZWxzYF0gPSB0cnVlO1xuICAgICAgICB0aGlzLnJvd0NsYXNzW2Ake3RoaXMuY29uZmlnLnN0eWxlUHJlZml4fS1jYWxlbmRhci1yb3dgXSA9IHRydWU7XG4gICAgfVxuXG59XG5cbi8vIFttb250aEluZGV4XT1cImluZGV4XCJcbi8vIFtzaG93VHdvTW9udGhzXT1cInNlbGVjdGlvbi5jYWxlbmRhck1vbnRoVmlldy5uZWVkVHdvTW9udGhWaWV3ICYmIGNhbGVuZGFyLmNvbmZpZy5tb250aC5zaG93VHdvQ2FsZW5kYXJJZk5lZWRcIlxuLy8gW2xpbmtlZE1vbnRoc109XCJjb25maWc/LmhlYWRlci5saW5rZWRNb250aHNcIlxuLy8gW21vbnRoU2VsZWN0aW9uc109XCJbbW9udGhTZWxlY3Rpb25dXCJcbiJdfQ==