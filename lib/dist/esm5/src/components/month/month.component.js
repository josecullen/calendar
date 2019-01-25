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
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
var CalendarMonthComponent = /** @class */ (function () {
    function CalendarMonthComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
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
            stylePrefix: this.config.stylePrefix,
            filterDates: this.config.filterDates
        });
    };
    /**
     * @return {?}
     */
    CalendarMonthComponent.prototype.isMobile = /**
     * @return {?}
     */
    function () {
        return this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait);
    };
    /**
     * @return {?}
     */
    CalendarMonthComponent.prototype.getHeaderData = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var config = (/** @type {?} */ ({
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
        if (this.isMobile()) {
            config.showTwoMonths = this.index === 0 ? false : true;
            if (this.index === 1) {
                config.showChangeYearButton = false;
                config.showChangeMonthButton = false;
            }
        }
        return config;
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
                    template: "<ng-container *ngIf=\"calendarHeader else defaultHeader\">\n  <ng-container *ngTemplateOutlet=\"calendarHeader.template; context: { $implicit: getHeaderData()}\">\n  </ng-container>\n</ng-container>\n\n<ng-template #defaultHeader>\n  <trb-calendar-header [context]=\"getHeaderData()\">\n  </trb-calendar-header>\n</ng-template>\n\n\n<ng-container *ngIf=\"calendar.getYear(monthSelection.year).months[monthSelection.month].getCalendarView() as calendarView\">\n  <div [ngClass]=\"dayLabelsRowClass\">\n    <trb-calendar-day-header-cell class=\"day-label\" *ngFor=\"let day of [0,1,2,3,4,5,6]\" [day]=\"day\" [dayLabels]=\"config.month.dayLabels\"\n      [dayLength]=\"config.month.dayLength\">\n    </trb-calendar-day-header-cell>\n  </div>\n\n  <div [ngClass]=\"rowClass\" *ngFor=\"let week of calendarView; index as i\">\n\n    <ng-container *ngFor=\"let day of week\">\n\n      <ng-container *ngIf=\"calendarCell else defaultCell\">\n        <ng-container *ngTemplateOutlet=\"calendarCell.template; context: { $implicit: getCellData(day) }\">\n        </ng-container>\n      </ng-container>\n\n      <ng-template #defaultCell>\n        <trb-calendar-cell [context]=\"getCellData(day)\"></trb-calendar-cell>\n      </ng-template>\n\n    </ng-container>\n  </div>\n</ng-container>\n",
                    styles: ["*{font-family:sans-serif;color:#333;font-size:14px}.price{color:green;font-size:10px}.trb-calendar-arrow{border:solid #666;border-width:0 2px 2px 0;display:inline-block;padding:4px}.trb-calendar-arrow.trb-calendar-arrow-right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.trb-calendar-arrow.trb-calendar-arrow-left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.clickeable{cursor:pointer}.trb-calendar{display:flex;flex-wrap:wrap}.trb-calendar-month{margin:0 10px}@media screen and (max-width:600px){.trb-calendar-month{margin:auto;padding-top:24px}}.trb-calendar-header{height:16px}.trb-calendar-header .trb-calendar-header-buttons{padding:0 12px}.trb-calendar-row{display:flex}.trb-calendar-day-labels{padding:4px 0;font-size:12px}.trb-calendar-day-labels .day-label{flex:1;position:relative;text-align:center;padding:8px 0}.trb-calendar-cell{font-family:ProximaNova,sans-serif;position:relative;min-width:38px;min-height:38px;text-align:center;display:block;line-height:30px;align-items:center}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay{background:#e4e7e7;width:100%;height:100%;top:0;left:0;position:absolute;opacity:.1}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay:hover{background:#666;cursor:pointer}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month){background-color:#17a45f}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .label,.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .my-price{color:#fff}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-from{border-top-left-radius:4px;border-bottom-left-radius:4px}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-to{border-top-right-radius:4px;border-bottom-right-radius:4px}.trb-calendar-cell.trb-calendar-cell-past .label{color:rgba(0,0,0,.1)}.trb-calendar-cell.trb-calendar-cell-in-range:not(.trb-calendar-cell-outside-month){background-color:#d3ecd3}.trb-calendar-cell.trb-calendar-cell-disabled{background-color:#ccc;cursor:not-allowed}.trb-calendar-cell.trb-calendar-cell-disabled .label{color:rgba(0,0,0,.1)}.trb-button-close{position:absolute;right:8px;top:8px;width:30px;height:24px;opacity:.3}.trb-button-close:hover{opacity:1}.trb-button-close:after,.trb-button-close:before{position:absolute;left:15px;content:' ';height:24px;width:2px;background-color:#333}.trb-button-close:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.trb-button-close:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}", ""]
                }] }
    ];
    /** @nocollapse */
    CalendarMonthComponent.ctorParameters = function () { return [
        { type: BreakpointObserver }
    ]; };
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
    /**
     * @type {?}
     * @private
     */
    CalendarMonthComponent.prototype.breakpointObserver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NvbXBvbmVudHMvbW9udGgvbW9udGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQTRCLFdBQVcsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUU5RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDL0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDeEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFckYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFO0lBMkJFLGdDQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUUxRCxDQUFDO0lBdEJELHNCQUNJLDJDQUFPOzs7O1FBRFg7WUFFRSxPQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxvQkFBaUIsQ0FBQztRQUNyRCxDQUFDOzs7T0FBQTs7Ozs7SUFxQkQsNENBQVc7Ozs7SUFBWCxVQUFZLEdBQWtCO1FBQzVCLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDM0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxvQkFBb0Is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QUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsa0JBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNsRSxDQUFDOztnQkF2RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLDh3Q0FBcUM7O2lCQUV0Qzs7OztnQkFMUSxrQkFBa0I7OzswQkFReEIsV0FBVyxTQUFDLE9BQU87MEJBSW5CLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7aUNBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUtMLFlBQVksU0FBQyxxQkFBcUI7aUNBR2xDLFlBQVksU0FBQyx1QkFBdUI7O0lBaUV2Qyw2QkFBQztDQUFBLEFBekZELElBeUZDO1NBcEZZLHNCQUFzQjs7O0lBTWpDLHlDQUErQjs7SUFDL0IsMENBQTRCOztJQUM1Qix1Q0FBdUI7O0lBQ3ZCLDJDQUF1Qzs7SUFDdkMsZ0RBQXdDOztJQUN4Qyx3Q0FBb0M7O0lBRXBDLG1EQUF1Qjs7SUFDdkIsMENBQWM7O0lBRWQsOENBQ29DOztJQUVwQyxnREFDd0M7Ozs7O0lBRTVCLG9EQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENvbnRlbnRDaGlsZCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBIb3N0QmluZGluZywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ2FsZW5kYXJTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9zZWxlY3Rpb24vY2FsZW5kYXItc2VsZWN0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci9jYWxlbmRhcic7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXdDb25maWcgfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9jb25maWcvY2FsZW5kYXItdmlldy1jb25maWcuY2xhc3MnO1xuaW1wb3J0IHsgQ2VsbENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L2NlbGwtY29udGV4dCc7XG5pbXBvcnQgeyBIZWFkZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9oZWFkZXItY29udGV4dCc7XG5pbXBvcnQgeyBNb250aENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L21vbnRoLWNvbnRleHQnO1xuaW1wb3J0IHsgTW9udGhTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9jYWxlbmRhci1tb250aC1zZWxlY3Rpb24uY2xhc3MnO1xuaW1wb3J0IHsgQ2FsZW5kYXJDZWxsRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1jZWxsJztcbmltcG9ydCB7IENhbGVuZGFySGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IENlbGxEYXRhIH0gZnJvbSAnLi4vLi4vY2VsbC1kYXRhJztcbmltcG9ydCB7IEJyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludHMgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyYi1jYWxlbmRhci1tb250aCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tb250aC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuLi9zdHlsZXMuc2FzcycsICcuL21vbnRoLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb250aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiBgJHt0aGlzLmNvbmZpZy5zdHlsZVByZWZpeH0tY2FsZW5kYXItbW9udGhgO1xuICB9XG4gIEBJbnB1dCgpIGNvbnRleHQ6IE1vbnRoQ29udGV4dDtcbiAgQElucHV0KCkgY2FsZW5kYXI6IENhbGVuZGFyO1xuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBzZWxlY3Rpb246IElDYWxlbmRhclNlbGVjdGlvbjtcbiAgQElucHV0KCkgbW9udGhTZWxlY3Rpb246IE1vbnRoU2VsZWN0aW9uO1xuICBASW5wdXQoKSBjb25maWc6IENhbGVuZGFyVmlld0NvbmZpZztcblxuICBkYXlMYWJlbHNSb3dDbGFzczogYW55O1xuICByb3dDbGFzczogYW55O1xuXG4gIEBDb250ZW50Q2hpbGQoQ2FsZW5kYXJDZWxsRGlyZWN0aXZlKVxuICBjYWxlbmRhckNlbGw6IENhbGVuZGFyQ2VsbERpcmVjdGl2ZTtcblxuICBAQ29udGVudENoaWxkKENhbGVuZGFySGVhZGVyRGlyZWN0aXZlKVxuICBjYWxlbmRhckhlYWRlcjogQ2FsZW5kYXJIZWFkZXJEaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcikge1xuXG4gIH1cblxuICBnZXRDZWxsRGF0YShkYXk6IENlbGxEYXRhPGFueT4pOiBDZWxsQ29udGV4dDxhbnk+IHtcbiAgICByZXR1cm4gQ2VsbENvbnRleHQuZnJvbShkYXksIHtcbiAgICAgIHNlbGVjdGlvbjogdGhpcy5zZWxlY3Rpb24sXG4gICAgICBtb250aFNlbGVjdGlvbjogdGhpcy5tb250aFNlbGVjdGlvbixcbiAgICAgIGhpZGVEYXlzT3V0c2lkZU1vbnRoOiB0aGlzLmNhbGVuZGFyLmNvbmZpZy5tb250aC5oaWRlRGF5c091dHNpZGVNb250aCxcbiAgICAgIHN0eWxlUHJlZml4OiB0aGlzLmNvbmZpZy5zdHlsZVByZWZpeCxcbiAgICAgIGZpbHRlckRhdGVzOiB0aGlzLmNvbmZpZy5maWx0ZXJEYXRlc1xuICAgIH0pO1xuICB9XG5cbiAgaXNNb2JpbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludE9ic2VydmVyLmlzTWF0Y2hlZChCcmVha3BvaW50cy5IYW5kc2V0UG9ydHJhaXQpO1xuICB9XG5cbiAgZ2V0SGVhZGVyRGF0YSgpOiBIZWFkZXJDb250ZXh0IHtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBtb250aExhYmVsczogdGhpcy5jb25maWcubW9udGgubW9udGhMYWJlbHMsXG4gICAgICBtb250aEluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgcGFzdE1vbnRoczogdGhpcy5jb25maWcuaGVhZGVyLnBhc3RNb250aHMsXG4gICAgICBzaG93VHdvTW9udGhzOiB0aGlzLnNlbGVjdGlvblsnY2FsZW5kYXJNb250aFZpZXcnXS5uZWVkVHdvTW9udGhWaWV3ICYmIHRoaXMuY2FsZW5kYXIuY29uZmlnLm1vbnRoWydzaG93VHdvQ2FsZW5kYXJJZk5lZWQnXSxcbiAgICAgIGxpbmtlZE1vbnRoczogdGhpcy5jb25maWcuaGVhZGVyLmxpbmtlZE1vbnRocyxcbiAgICAgIG1vbnRoU2VsZWN0aW9uczogW3RoaXMuc2VsZWN0aW9uLmNhbGVuZGFyTW9udGhWaWV3LmZyb20sIHRoaXMuc2VsZWN0aW9uLmNhbGVuZGFyTW9udGhWaWV3LnRvXSxcbiAgICAgIHN0eWxlUHJlZml4OiB0aGlzLmNvbmZpZy5zdHlsZVByZWZpeCxcbiAgICAgIHNob3dDaGFuZ2VNb250aEJ1dHRvbjogdGhpcy5jb25maWcubW9udGguc2hvd0NoYW5nZU1vbnRoQnV0dG9uLFxuICAgICAgc2hvd0NoYW5nZVllYXJCdXR0b246IHRoaXMuY29uZmlnLm1vbnRoLnNob3dDaGFuZ2VZZWFyQnV0dG9uXG4gICAgfSBhcyBIZWFkZXJDb250ZXh0O1xuXG4gICAgaWYgKHRoaXMuaXNNb2JpbGUoKSkge1xuICAgICAgY29uZmlnLnNob3dUd29Nb250aHMgPSB0aGlzLmluZGV4ID09PSAwID8gZmFsc2UgOiB0cnVlO1xuXG4gICAgICBpZiAodGhpcy5pbmRleCA9PT0gMSkge1xuICAgICAgICBjb25maWcuc2hvd0NoYW5nZVllYXJCdXR0b24gPSBmYWxzZTtcbiAgICAgICAgY29uZmlnLnNob3dDaGFuZ2VNb250aEJ1dHRvbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgY29udGV4dENoYW5nZSA9IGNoYW5nZXNbJ2NvbnRleHQnXTtcblxuICAgIGlmIChjb250ZXh0Q2hhbmdlKSB7XG4gICAgICB0aGlzLmNhbGVuZGFyID0gdGhpcy5jb250ZXh0LmNhbGVuZGFyO1xuICAgICAgdGhpcy5pbmRleCA9IHRoaXMuY29udGV4dC5pbmRleDtcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gdGhpcy5jb250ZXh0LnNlbGVjdGlvbjtcbiAgICAgIHRoaXMubW9udGhTZWxlY3Rpb24gPSB0aGlzLmNvbnRleHQubW9udGhTZWxlY3Rpb247XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5jb25maWc7XG4gICAgfVxuXG4gICAgdGhpcy5kYXlMYWJlbHNSb3dDbGFzcyA9IHt9O1xuICAgIHRoaXMucm93Q2xhc3MgPSB7fTtcblxuICAgIHRoaXMuZGF5TGFiZWxzUm93Q2xhc3NbYCR7dGhpcy5jb25maWcuc3R5bGVQcmVmaXh9LWNhbGVuZGFyLXJvd2BdID0gdHJ1ZTtcbiAgICB0aGlzLmRheUxhYmVsc1Jvd0NsYXNzW2Ake3RoaXMuY29uZmlnLnN0eWxlUHJlZml4fS1jYWxlbmRhci1kYXktbGFiZWxzYF0gPSB0cnVlO1xuICAgIHRoaXMucm93Q2xhc3NbYCR7dGhpcy5jb25maWcuc3R5bGVQcmVmaXh9LWNhbGVuZGFyLXJvd2BdID0gdHJ1ZTtcbiAgfVxuXG59XG5cbi8vIFttb250aEluZGV4XT1cImluZGV4XCJcbi8vIFtzaG93VHdvTW9udGhzXT1cInNlbGVjdGlvbi5jYWxlbmRhck1vbnRoVmlldy5uZWVkVHdvTW9udGhWaWV3ICYmIGNhbGVuZGFyLmNvbmZpZy5tb250aC5zaG93VHdvQ2FsZW5kYXJJZk5lZWRcIlxuLy8gW2xpbmtlZE1vbnRoc109XCJjb25maWc/LmhlYWRlci5saW5rZWRNb250aHNcIlxuLy8gW21vbnRoU2VsZWN0aW9uc109XCJbbW9udGhTZWxlY3Rpb25dXCJcbiJdfQ==