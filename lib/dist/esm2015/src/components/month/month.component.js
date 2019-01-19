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
export class CalendarMonthComponent {
    /**
     * @return {?}
     */
    get classes() {
        return `${this.config.stylePrefix}-calendar-month`;
    }
    /**
     * @param {?} day
     * @return {?}
     */
    getCellData(day) {
        return CellContext.from(day, {
            selection: this.selection,
            monthSelection: this.monthSelection,
            hideDaysOutsideMonth: this.calendar.config.month.hideDaysOutsideMonth,
            stylePrefix: this.config.stylePrefix,
            filterDates: this.config.filterDates
        });
    }
    /**
     * @return {?}
     */
    getHeaderData() {
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
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const contextChange = changes['context'];
        if (contextChange) {
            this.calendar = this.context.calendar;
            this.index = this.context.index;
            this.selection = this.context.selection;
            this.monthSelection = this.context.monthSelection;
            this.config = this.context.config;
        }
        this.dayLabelsRowClass = {};
        this.rowClass = {};
        this.dayLabelsRowClass[`${this.config.stylePrefix}-calendar-row`] = true;
        this.dayLabelsRowClass[`${this.config.stylePrefix}-calendar-day-labels`] = true;
        this.rowClass[`${this.config.stylePrefix}-calendar-row`] = true;
    }
}
CalendarMonthComponent.decorators = [
    { type: Component, args: [{
                selector: 'trb-calendar-month',
                template: "\n<ng-container *ngIf=\"calendarHeader else defaultHeader\">\n    <ng-container *ngTemplateOutlet=\"calendarHeader.template; context: { $implicit: getHeaderData()}\">\n    </ng-container>\n</ng-container>\n\n<ng-template #defaultHeader>\n    <trb-calendar-header [context]=\"getHeaderData()\">\n    </trb-calendar-header>\n</ng-template>\n\n<ng-container *ngIf=\"calendar.getYear(monthSelection.year).months[monthSelection.month].getCalendarView() as calendarView\">\n    <div [ngClass]=\"dayLabelsRowClass\">\n        <trb-calendar-day-header-cell class=\"day-label\" *ngFor=\"let day of [0,1,2,3,4,5,6]\" [day]=\"day\" [dayLabels]=\"config.month.dayLabels\"\n            [dayLength]=\"config.month.dayLength\">\n        </trb-calendar-day-header-cell>\n    </div>\n\n    <div [ngClass]=\"rowClass\" *ngFor=\"let week of calendarView; index as i\">\n\n        <ng-container *ngFor=\"let day of week\">\n\n            <ng-container *ngIf=\"calendarCell else defaultCell\">\n                <ng-container *ngTemplateOutlet=\"calendarCell.template; context: { $implicit: getCellData(day) }\">\n                </ng-container>\n            </ng-container>\n\n            <ng-template #defaultCell>\n                <trb-calendar-cell [context]=\"getCellData(day)\"></trb-calendar-cell>\n            </ng-template>\n\n        </ng-container>\n    </div>\n</ng-container>",
                styles: ["*{font-family:sans-serif;color:#333;font-size:14px}.price{color:green;font-size:10px}.trb-calendar-arrow{border:solid #666;border-width:0 2px 2px 0;display:inline-block;padding:4px}.trb-calendar-arrow.trb-calendar-arrow-right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.trb-calendar-arrow.trb-calendar-arrow-left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.clickeable{cursor:pointer}.trb-calendar{display:flex;flex-wrap:wrap}.trb-calendar-month{margin:0 10px}.trb-calendar-header{height:16px}.trb-calendar-header .trb-calendar-header-buttons{padding:0 12px}.trb-calendar-row{display:flex}.trb-calendar-day-labels{padding:4px 0;font-size:12px}.trb-calendar-day-labels .day-label{flex:1;position:relative;text-align:center;padding:8px 0}.trb-calendar-cell{font-family:ProximaNova,sans-serif;position:relative;min-width:38px;min-height:38px;text-align:center;display:block;line-height:30px;align-items:center}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay{background:#e4e7e7;width:100%;height:100%;top:0;left:0;position:absolute;opacity:.1}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay:hover{background:#666;cursor:pointer}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month){background-color:#17a45f}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .label,.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .my-price{color:#fff}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-from{border-top-left-radius:4px;border-bottom-left-radius:4px}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-to{border-top-right-radius:4px;border-bottom-right-radius:4px}.trb-calendar-cell.trb-calendar-cell-past .label{color:rgba(0,0,0,.1)}.trb-calendar-cell.trb-calendar-cell-in-range:not(.trb-calendar-cell-outside-month){background-color:#d3ecd3}.trb-calendar-cell.trb-calendar-cell-disabled{background-color:#ccc;cursor:not-allowed}.trb-calendar-cell.trb-calendar-cell-disabled .label{color:rgba(0,0,0,.1)}", ""]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NvbXBvbmVudHMvbW9udGgvbW9udGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQTRCLFdBQVcsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUU5RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDL0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDeEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFPckYsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUUvQixJQUNJLE9BQU87UUFDUCxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLGlCQUFpQixDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBaUJELFdBQVcsQ0FBQyxHQUFrQjtRQUMxQixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFvQjtZQUNyRSxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXO1lBQ3BDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVc7U0FDdkMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELGFBQWE7UUFDVCxPQUFPLG1CQUFBO1lBQ0gsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVc7WUFDMUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3RCLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQ3pDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO1lBQzFILFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQzdDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDO1lBQzdGLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVc7WUFDcEMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMscUJBQXFCO1lBQzlELG9CQUFvQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFvQjtTQUMvRCxFQUFpQixDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCOztjQUN4QixhQUFhLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUV4QyxJQUFJLGFBQWEsRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUNyQztRQUVELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN6RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsc0JBQXNCLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDaEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDcEUsQ0FBQzs7O1lBcEVKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixrMkNBQXFDOzthQUV4Qzs7O3NCQUdJLFdBQVcsU0FBQyxPQUFPO3NCQUluQixLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzZCQUNMLEtBQUs7cUJBQ0wsS0FBSzsyQkFLTCxZQUFZLFNBQUMscUJBQXFCOzZCQUdsQyxZQUFZLFNBQUMsdUJBQXVCOzs7O0lBYnJDLHlDQUErQjs7SUFDL0IsMENBQTRCOztJQUM1Qix1Q0FBdUI7O0lBQ3ZCLDJDQUF1Qzs7SUFDdkMsZ0RBQXdDOztJQUN4Qyx3Q0FBb0M7O0lBRXBDLG1EQUF1Qjs7SUFDdkIsMENBQWM7O0lBRWQsOENBQ29DOztJQUVwQyxnREFDd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDb250ZW50Q2hpbGQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgSG9zdEJpbmRpbmcsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNhbGVuZGFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvc2VsZWN0aW9uL2NhbGVuZGFyLXNlbGVjdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXIvY2FsZW5kYXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3Q29uZmlnIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvY29uZmlnL2NhbGVuZGFyLXZpZXctY29uZmlnLmNsYXNzJztcbmltcG9ydCB7IENlbGxDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9jZWxsLWNvbnRleHQnO1xuaW1wb3J0IHsgSGVhZGVyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvaGVhZGVyLWNvbnRleHQnO1xuaW1wb3J0IHsgTW9udGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9tb250aC1jb250ZXh0JztcbmltcG9ydCB7IE1vbnRoU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvY2FsZW5kYXItbW9udGgtc2VsZWN0aW9uLmNsYXNzJztcbmltcG9ydCB7IENhbGVuZGFyQ2VsbERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItY2VsbCc7XG5pbXBvcnQgeyBDYWxlbmRhckhlYWRlckRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaGVhZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDZWxsRGF0YSB9IGZyb20gJy4uLy4uL2NlbGwtZGF0YSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RyYi1jYWxlbmRhci1tb250aCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21vbnRoLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi4vc3R5bGVzLnNhc3MnLCAnLi9tb250aC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyTW9udGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gICAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNvbmZpZy5zdHlsZVByZWZpeH0tY2FsZW5kYXItbW9udGhgO1xuICAgIH1cbiAgICBASW5wdXQoKSBjb250ZXh0OiBNb250aENvbnRleHQ7XG4gICAgQElucHV0KCkgY2FsZW5kYXI6IENhbGVuZGFyO1xuICAgIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG4gICAgQElucHV0KCkgc2VsZWN0aW9uOiBJQ2FsZW5kYXJTZWxlY3Rpb247XG4gICAgQElucHV0KCkgbW9udGhTZWxlY3Rpb246IE1vbnRoU2VsZWN0aW9uO1xuICAgIEBJbnB1dCgpIGNvbmZpZzogQ2FsZW5kYXJWaWV3Q29uZmlnO1xuXG4gICAgZGF5TGFiZWxzUm93Q2xhc3M6IGFueTtcbiAgICByb3dDbGFzczogYW55O1xuXG4gICAgQENvbnRlbnRDaGlsZChDYWxlbmRhckNlbGxEaXJlY3RpdmUpXG4gICAgY2FsZW5kYXJDZWxsOiBDYWxlbmRhckNlbGxEaXJlY3RpdmU7XG5cbiAgICBAQ29udGVudENoaWxkKENhbGVuZGFySGVhZGVyRGlyZWN0aXZlKVxuICAgIGNhbGVuZGFySGVhZGVyOiBDYWxlbmRhckhlYWRlckRpcmVjdGl2ZTtcblxuICAgIGdldENlbGxEYXRhKGRheTogQ2VsbERhdGE8YW55Pik6IENlbGxDb250ZXh0PGFueT4ge1xuICAgICAgICByZXR1cm4gQ2VsbENvbnRleHQuZnJvbShkYXksIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbjogdGhpcy5zZWxlY3Rpb24sXG4gICAgICAgICAgICBtb250aFNlbGVjdGlvbjogdGhpcy5tb250aFNlbGVjdGlvbixcbiAgICAgICAgICAgIGhpZGVEYXlzT3V0c2lkZU1vbnRoOiB0aGlzLmNhbGVuZGFyLmNvbmZpZy5tb250aC5oaWRlRGF5c091dHNpZGVNb250aCxcbiAgICAgICAgICAgIHN0eWxlUHJlZml4OiB0aGlzLmNvbmZpZy5zdHlsZVByZWZpeCxcbiAgICAgICAgICAgIGZpbHRlckRhdGVzOiB0aGlzLmNvbmZpZy5maWx0ZXJEYXRlc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRIZWFkZXJEYXRhKCk6IEhlYWRlckNvbnRleHQge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHRoaXMuY29uZmlnLm1vbnRoLm1vbnRoTGFiZWxzLFxuICAgICAgICAgICAgbW9udGhJbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgICAgIHBhc3RNb250aHM6IHRoaXMuY29uZmlnLmhlYWRlci5wYXN0TW9udGhzLFxuICAgICAgICAgICAgc2hvd1R3b01vbnRoczogdGhpcy5zZWxlY3Rpb25bJ2NhbGVuZGFyTW9udGhWaWV3J10ubmVlZFR3b01vbnRoVmlldyAmJiB0aGlzLmNhbGVuZGFyLmNvbmZpZy5tb250aFsnc2hvd1R3b0NhbGVuZGFySWZOZWVkJ10sXG4gICAgICAgICAgICBsaW5rZWRNb250aHM6IHRoaXMuY29uZmlnLmhlYWRlci5saW5rZWRNb250aHMsXG4gICAgICAgICAgICBtb250aFNlbGVjdGlvbnM6IFt0aGlzLnNlbGVjdGlvbi5jYWxlbmRhck1vbnRoVmlldy5mcm9tLCB0aGlzLnNlbGVjdGlvbi5jYWxlbmRhck1vbnRoVmlldy50b10sXG4gICAgICAgICAgICBzdHlsZVByZWZpeDogdGhpcy5jb25maWcuc3R5bGVQcmVmaXgsXG4gICAgICAgICAgICBzaG93Q2hhbmdlTW9udGhCdXR0b246IHRoaXMuY29uZmlnLm1vbnRoLnNob3dDaGFuZ2VNb250aEJ1dHRvbixcbiAgICAgICAgICAgIHNob3dDaGFuZ2VZZWFyQnV0dG9uOiB0aGlzLmNvbmZpZy5tb250aC5zaG93Q2hhbmdlWWVhckJ1dHRvblxuICAgICAgICB9IGFzIEhlYWRlckNvbnRleHQ7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBjb25zdCBjb250ZXh0Q2hhbmdlID0gY2hhbmdlc1snY29udGV4dCddO1xuXG4gICAgICAgIGlmIChjb250ZXh0Q2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyID0gdGhpcy5jb250ZXh0LmNhbGVuZGFyO1xuICAgICAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMuY29udGV4dC5pbmRleDtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdGhpcy5jb250ZXh0LnNlbGVjdGlvbjtcbiAgICAgICAgICAgIHRoaXMubW9udGhTZWxlY3Rpb24gPSB0aGlzLmNvbnRleHQubW9udGhTZWxlY3Rpb247XG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5jb25maWc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRheUxhYmVsc1Jvd0NsYXNzID0ge307XG4gICAgICAgIHRoaXMucm93Q2xhc3MgPSB7fTtcblxuICAgICAgICB0aGlzLmRheUxhYmVsc1Jvd0NsYXNzW2Ake3RoaXMuY29uZmlnLnN0eWxlUHJlZml4fS1jYWxlbmRhci1yb3dgXSA9IHRydWU7XG4gICAgICAgIHRoaXMuZGF5TGFiZWxzUm93Q2xhc3NbYCR7dGhpcy5jb25maWcuc3R5bGVQcmVmaXh9LWNhbGVuZGFyLWRheS1sYWJlbHNgXSA9IHRydWU7XG4gICAgICAgIHRoaXMucm93Q2xhc3NbYCR7dGhpcy5jb25maWcuc3R5bGVQcmVmaXh9LWNhbGVuZGFyLXJvd2BdID0gdHJ1ZTtcbiAgICB9XG5cbn1cblxuLy8gW21vbnRoSW5kZXhdPVwiaW5kZXhcIlxuLy8gW3Nob3dUd29Nb250aHNdPVwic2VsZWN0aW9uLmNhbGVuZGFyTW9udGhWaWV3Lm5lZWRUd29Nb250aFZpZXcgJiYgY2FsZW5kYXIuY29uZmlnLm1vbnRoLnNob3dUd29DYWxlbmRhcklmTmVlZFwiXG4vLyBbbGlua2VkTW9udGhzXT1cImNvbmZpZz8uaGVhZGVyLmxpbmtlZE1vbnRoc1wiXG4vLyBbbW9udGhTZWxlY3Rpb25zXT1cIlttb250aFNlbGVjdGlvbl1cIlxuIl19