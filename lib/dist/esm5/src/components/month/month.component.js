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
                    styles: ["*{font-family:sans-serif;color:#333;font-size:14px}.price{color:green;font-size:10px}.trb-calendar-arrow{border:solid #666;border-width:0 2px 2px 0;display:inline-block;padding:4px}.trb-calendar-arrow.trb-calendar-arrow-right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.trb-calendar-arrow.trb-calendar-arrow-left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.clickeable{cursor:pointer}.trb-calendar{display:flex;flex-wrap:wrap}.trb-calendar-month{margin:0 10px}.trb-calendar-header{height:16px}.trb-calendar-header .trb-calendar-header-buttons{padding:0 12px}.trb-calendar-row{display:flex}.trb-calendar-day-labels{padding:4px 0;font-size:12px}.trb-calendar-day-labels .day-label{flex:1;position:relative;text-align:center;padding:8px 0}.trb-calendar-cell{font-family:ProximaNova,sans-serif;position:relative;min-width:38px;min-height:38px;text-align:center;display:block;line-height:30px;align-items:center}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay{background:#e4e7e7;width:100%;height:100%;top:0;left:0;position:absolute;opacity:.1}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay:hover{background:#666;cursor:pointer}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month){background-color:#17a45f}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .label,.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .my-price{color:#fff}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-from{border-top-left-radius:4px;border-bottom-left-radius:4px}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-to{border-top-right-radius:4px;border-bottom-right-radius:4px}.trb-calendar-cell:not(.trb-calendar-cell-has-payload){line-height:38px}.trb-calendar-cell.trb-calendar-cell-past .label{color:rgba(0,0,0,.1)}.trb-calendar-cell.trb-calendar-cell-in-range:not(.trb-calendar-cell-outside-month){background-color:#d3ecd3}.trb-calendar-cell.trb-calendar-cell-disabled{background-color:#ccc;cursor:not-allowed}.trb-calendar-cell.trb-calendar-cell-disabled .label{color:rgba(0,0,0,.1)}", ""]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NvbXBvbmVudHMvbW9udGgvbW9udGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQTRCLFdBQVcsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUU5RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDL0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDeEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFJckY7SUFBQTtJQXFFQSxDQUFDO0lBOURHLHNCQUNJLDJDQUFPOzs7O1FBRFg7WUFFSSxPQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxvQkFBaUIsQ0FBQztRQUN2RCxDQUFDOzs7T0FBQTs7Ozs7SUFpQkQsNENBQVc7Ozs7SUFBWCxVQUFZLEdBQWtCO1FBQzFCLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsb0JBQW9CO1lBQ3JFLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVc7U0FDdkMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELDhDQUFhOzs7SUFBYjtRQUNJLE9BQU8sbUJBQUE7WUFDSCxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVztZQUMxQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDdEIsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVU7WUFDekMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7WUFDMUgsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVk7WUFDN0MsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUM7WUFDN0YsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVztZQUNwQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBcUI7WUFDOUQsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsb0JBQW9CO1NBQy9ELEVBQWlCLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCw0Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7O1lBQ3hCLGFBQWEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBRXhDLElBQUksYUFBYSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsaUJBQWlCLENBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLGtCQUFlLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDekUsSUFBSSxDQUFDLGlCQUFpQixDQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyx5QkFBc0IsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNoRixJQUFJLENBQUMsUUFBUSxDQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxrQkFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3BFLENBQUM7O2dCQW5FSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsazJDQUFxQzs7aUJBRXhDOzs7MEJBR0ksV0FBVyxTQUFDLE9BQU87MEJBSW5CLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7aUNBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUtMLFlBQVksU0FBQyxxQkFBcUI7aUNBR2xDLFlBQVksU0FBQyx1QkFBdUI7O0lBNkN6Qyw2QkFBQztDQUFBLEFBckVELElBcUVDO1NBaEVZLHNCQUFzQjs7O0lBTS9CLHlDQUErQjs7SUFDL0IsMENBQTRCOztJQUM1Qix1Q0FBdUI7O0lBQ3ZCLDJDQUF1Qzs7SUFDdkMsZ0RBQXdDOztJQUN4Qyx3Q0FBb0M7O0lBRXBDLG1EQUF1Qjs7SUFDdkIsMENBQWM7O0lBRWQsOENBQ29DOztJQUVwQyxnREFDd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDb250ZW50Q2hpbGQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgSG9zdEJpbmRpbmcsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNhbGVuZGFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvc2VsZWN0aW9uL2NhbGVuZGFyLXNlbGVjdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXIvY2FsZW5kYXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3Q29uZmlnIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvY29uZmlnL2NhbGVuZGFyLXZpZXctY29uZmlnLmNsYXNzJztcbmltcG9ydCB7IENlbGxDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9jZWxsLWNvbnRleHQnO1xuaW1wb3J0IHsgSGVhZGVyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvaGVhZGVyLWNvbnRleHQnO1xuaW1wb3J0IHsgTW9udGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9tb250aC1jb250ZXh0JztcbmltcG9ydCB7IE1vbnRoU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvY2FsZW5kYXItbW9udGgtc2VsZWN0aW9uLmNsYXNzJztcbmltcG9ydCB7IENhbGVuZGFyQ2VsbERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItY2VsbCc7XG5pbXBvcnQgeyBDYWxlbmRhckhlYWRlckRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaGVhZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDZWxsRGF0YSB9IGZyb20gJy4uLy4uL2NlbGwtZGF0YSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0cmItY2FsZW5kYXItbW9udGgnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb250aC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4uL3N0eWxlcy5zYXNzJywgJy4vbW9udGguY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck1vbnRoQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICAgIGdldCBjbGFzc2VzKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jb25maWcuc3R5bGVQcmVmaXh9LWNhbGVuZGFyLW1vbnRoYDtcbiAgICB9XG4gICAgQElucHV0KCkgY29udGV4dDogTW9udGhDb250ZXh0O1xuICAgIEBJbnB1dCgpIGNhbGVuZGFyOiBDYWxlbmRhcjtcbiAgICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHNlbGVjdGlvbjogSUNhbGVuZGFyU2VsZWN0aW9uO1xuICAgIEBJbnB1dCgpIG1vbnRoU2VsZWN0aW9uOiBNb250aFNlbGVjdGlvbjtcbiAgICBASW5wdXQoKSBjb25maWc6IENhbGVuZGFyVmlld0NvbmZpZztcblxuICAgIGRheUxhYmVsc1Jvd0NsYXNzOiBhbnk7XG4gICAgcm93Q2xhc3M6IGFueTtcblxuICAgIEBDb250ZW50Q2hpbGQoQ2FsZW5kYXJDZWxsRGlyZWN0aXZlKVxuICAgIGNhbGVuZGFyQ2VsbDogQ2FsZW5kYXJDZWxsRGlyZWN0aXZlO1xuXG4gICAgQENvbnRlbnRDaGlsZChDYWxlbmRhckhlYWRlckRpcmVjdGl2ZSlcbiAgICBjYWxlbmRhckhlYWRlcjogQ2FsZW5kYXJIZWFkZXJEaXJlY3RpdmU7XG5cbiAgICBnZXRDZWxsRGF0YShkYXk6IENlbGxEYXRhPGFueT4pOiBDZWxsQ29udGV4dDxhbnk+IHtcbiAgICAgICAgcmV0dXJuIENlbGxDb250ZXh0LmZyb20oZGF5LCB7XG4gICAgICAgICAgICBzZWxlY3Rpb246IHRoaXMuc2VsZWN0aW9uLFxuICAgICAgICAgICAgbW9udGhTZWxlY3Rpb246IHRoaXMubW9udGhTZWxlY3Rpb24sXG4gICAgICAgICAgICBoaWRlRGF5c091dHNpZGVNb250aDogdGhpcy5jYWxlbmRhci5jb25maWcubW9udGguaGlkZURheXNPdXRzaWRlTW9udGgsXG4gICAgICAgICAgICBzdHlsZVByZWZpeDogdGhpcy5jb25maWcuc3R5bGVQcmVmaXhcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0SGVhZGVyRGF0YSgpOiBIZWFkZXJDb250ZXh0IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB0aGlzLmNvbmZpZy5tb250aC5tb250aExhYmVscyxcbiAgICAgICAgICAgIG1vbnRoSW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICAgICAgICBwYXN0TW9udGhzOiB0aGlzLmNvbmZpZy5oZWFkZXIucGFzdE1vbnRocyxcbiAgICAgICAgICAgIHNob3dUd29Nb250aHM6IHRoaXMuc2VsZWN0aW9uWydjYWxlbmRhck1vbnRoVmlldyddLm5lZWRUd29Nb250aFZpZXcgJiYgdGhpcy5jYWxlbmRhci5jb25maWcubW9udGhbJ3Nob3dUd29DYWxlbmRhcklmTmVlZCddLFxuICAgICAgICAgICAgbGlua2VkTW9udGhzOiB0aGlzLmNvbmZpZy5oZWFkZXIubGlua2VkTW9udGhzLFxuICAgICAgICAgICAgbW9udGhTZWxlY3Rpb25zOiBbdGhpcy5zZWxlY3Rpb24uY2FsZW5kYXJNb250aFZpZXcuZnJvbSwgdGhpcy5zZWxlY3Rpb24uY2FsZW5kYXJNb250aFZpZXcudG9dLFxuICAgICAgICAgICAgc3R5bGVQcmVmaXg6IHRoaXMuY29uZmlnLnN0eWxlUHJlZml4LFxuICAgICAgICAgICAgc2hvd0NoYW5nZU1vbnRoQnV0dG9uOiB0aGlzLmNvbmZpZy5tb250aC5zaG93Q2hhbmdlTW9udGhCdXR0b24sXG4gICAgICAgICAgICBzaG93Q2hhbmdlWWVhckJ1dHRvbjogdGhpcy5jb25maWcubW9udGguc2hvd0NoYW5nZVllYXJCdXR0b25cbiAgICAgICAgfSBhcyBIZWFkZXJDb250ZXh0O1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgY29udGV4dENoYW5nZSA9IGNoYW5nZXNbJ2NvbnRleHQnXTtcblxuICAgICAgICBpZiAoY29udGV4dENoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRhciA9IHRoaXMuY29udGV4dC5jYWxlbmRhcjtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLmNvbnRleHQuaW5kZXg7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMuY29udGV4dC5zZWxlY3Rpb247XG4gICAgICAgICAgICB0aGlzLm1vbnRoU2VsZWN0aW9uID0gdGhpcy5jb250ZXh0Lm1vbnRoU2VsZWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbnRleHQuY29uZmlnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXlMYWJlbHNSb3dDbGFzcyA9IHt9O1xuICAgICAgICB0aGlzLnJvd0NsYXNzID0ge307XG5cbiAgICAgICAgdGhpcy5kYXlMYWJlbHNSb3dDbGFzc1tgJHt0aGlzLmNvbmZpZy5zdHlsZVByZWZpeH0tY2FsZW5kYXItcm93YF0gPSB0cnVlO1xuICAgICAgICB0aGlzLmRheUxhYmVsc1Jvd0NsYXNzW2Ake3RoaXMuY29uZmlnLnN0eWxlUHJlZml4fS1jYWxlbmRhci1kYXktbGFiZWxzYF0gPSB0cnVlO1xuICAgICAgICB0aGlzLnJvd0NsYXNzW2Ake3RoaXMuY29uZmlnLnN0eWxlUHJlZml4fS1jYWxlbmRhci1yb3dgXSA9IHRydWU7XG4gICAgfVxuXG59XG5cbi8vIFttb250aEluZGV4XT1cImluZGV4XCJcbi8vIFtzaG93VHdvTW9udGhzXT1cInNlbGVjdGlvbi5jYWxlbmRhck1vbnRoVmlldy5uZWVkVHdvTW9udGhWaWV3ICYmIGNhbGVuZGFyLmNvbmZpZy5tb250aC5zaG93VHdvQ2FsZW5kYXJJZk5lZWRcIlxuLy8gW2xpbmtlZE1vbnRoc109XCJjb25maWc/LmhlYWRlci5saW5rZWRNb250aHNcIlxuLy8gW21vbnRoU2VsZWN0aW9uc109XCJbbW9udGhTZWxlY3Rpb25dXCJcbiJdfQ==