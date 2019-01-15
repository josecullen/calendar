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
     * @return {?}
     */
    ngOnInit() {
        // console.log('month init')
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
            stylePrefix: this.config.stylePrefix
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NvbXBvbmVudHMvbW9udGgvbW9udGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQTRCLFdBQVcsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUU5RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDL0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDeEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFTckYsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUUvQixJQUNJLE9BQU87UUFDUCxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLGlCQUFpQixDQUFDO0lBQ3ZELENBQUM7Ozs7SUFpQkQsUUFBUTtRQUNKLDRCQUE0QjtJQUNoQyxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxHQUFrQjtRQUMxQixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFvQjtZQUNyRSxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXO1NBQ3ZDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1QsT0FBTyxtQkFBQTtZQUNILFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXO1lBQzFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSztZQUN0QixVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVTtZQUN6QyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztZQUMxSCxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWTtZQUM3QyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQztZQUM3RixXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXO1lBQ3BDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFxQjtZQUM5RCxvQkFBb0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxvQkFBb0I7U0FDL0QsRUFBaUIsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjs7Y0FDeEIsYUFBYSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFFeEMsSUFBSSxhQUFhLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7U0FDckM7UUFFRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDekUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLHNCQUFzQixDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2hGLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3BFLENBQUM7OztZQXZFSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsazJDQUFxQzs7YUFFeEM7OztzQkFHSSxXQUFXLFNBQUMsT0FBTztzQkFJbkIsS0FBSzt1QkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxLQUFLO3FCQUNMLEtBQUs7MkJBS0wsWUFBWSxTQUFDLHFCQUFxQjs2QkFHbEMsWUFBWSxTQUFDLHVCQUF1Qjs7OztJQWJyQyx5Q0FBK0I7O0lBQy9CLDBDQUE0Qjs7SUFDNUIsdUNBQXVCOztJQUN2QiwyQ0FBdUM7O0lBQ3ZDLGdEQUF3Qzs7SUFDeEMsd0NBQW9DOztJQUVwQyxtREFBdUI7O0lBQ3ZCLDBDQUFjOztJQUVkLDhDQUNvQzs7SUFFcEMsZ0RBQ3dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ29udGVudENoaWxkLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEhvc3RCaW5kaW5nLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDYWxlbmRhclNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9jYWxlbmRhci1zZWxlY3Rpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IENhbGVuZGFyIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyL2NhbGVuZGFyJztcbmltcG9ydCB7IENhbGVuZGFyVmlld0NvbmZpZyB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L2NvbmZpZy9jYWxlbmRhci12aWV3LWNvbmZpZy5jbGFzcyc7XG5pbXBvcnQgeyBDZWxsQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvY2VsbC1jb250ZXh0JztcbmltcG9ydCB7IEhlYWRlckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L2hlYWRlci1jb250ZXh0JztcbmltcG9ydCB7IE1vbnRoQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvbW9udGgtY29udGV4dCc7XG5pbXBvcnQgeyBNb250aFNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L2NhbGVuZGFyLW1vbnRoLXNlbGVjdGlvbi5jbGFzcyc7XG5pbXBvcnQgeyBDYWxlbmRhckNlbGxEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWNlbGwnO1xuaW1wb3J0IHsgQ2FsZW5kYXJIZWFkZXJEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2VsbERhdGEgfSBmcm9tICcuLi8uLi9jZWxsLWRhdGEnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndHJiLWNhbGVuZGFyLW1vbnRoJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9udGguY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuLi9zdHlsZXMuc2FzcycsICcuL21vbnRoLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb250aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICAgIGdldCBjbGFzc2VzKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jb25maWcuc3R5bGVQcmVmaXh9LWNhbGVuZGFyLW1vbnRoYDtcbiAgICB9XG4gICAgQElucHV0KCkgY29udGV4dDogTW9udGhDb250ZXh0O1xuICAgIEBJbnB1dCgpIGNhbGVuZGFyOiBDYWxlbmRhcjtcbiAgICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHNlbGVjdGlvbjogSUNhbGVuZGFyU2VsZWN0aW9uO1xuICAgIEBJbnB1dCgpIG1vbnRoU2VsZWN0aW9uOiBNb250aFNlbGVjdGlvbjtcbiAgICBASW5wdXQoKSBjb25maWc6IENhbGVuZGFyVmlld0NvbmZpZztcblxuICAgIGRheUxhYmVsc1Jvd0NsYXNzOiBhbnk7XG4gICAgcm93Q2xhc3M6IGFueTtcblxuICAgIEBDb250ZW50Q2hpbGQoQ2FsZW5kYXJDZWxsRGlyZWN0aXZlKVxuICAgIGNhbGVuZGFyQ2VsbDogQ2FsZW5kYXJDZWxsRGlyZWN0aXZlO1xuXG4gICAgQENvbnRlbnRDaGlsZChDYWxlbmRhckhlYWRlckRpcmVjdGl2ZSlcbiAgICBjYWxlbmRhckhlYWRlcjogQ2FsZW5kYXJIZWFkZXJEaXJlY3RpdmU7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ21vbnRoIGluaXQnKVxuICAgIH1cblxuICAgIGdldENlbGxEYXRhKGRheTogQ2VsbERhdGE8YW55Pik6IENlbGxDb250ZXh0PGFueT4ge1xuICAgICAgICByZXR1cm4gQ2VsbENvbnRleHQuZnJvbShkYXksIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbjogdGhpcy5zZWxlY3Rpb24sXG4gICAgICAgICAgICBtb250aFNlbGVjdGlvbjogdGhpcy5tb250aFNlbGVjdGlvbixcbiAgICAgICAgICAgIGhpZGVEYXlzT3V0c2lkZU1vbnRoOiB0aGlzLmNhbGVuZGFyLmNvbmZpZy5tb250aC5oaWRlRGF5c091dHNpZGVNb250aCxcbiAgICAgICAgICAgIHN0eWxlUHJlZml4OiB0aGlzLmNvbmZpZy5zdHlsZVByZWZpeFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRIZWFkZXJEYXRhKCk6IEhlYWRlckNvbnRleHQge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHRoaXMuY29uZmlnLm1vbnRoLm1vbnRoTGFiZWxzLFxuICAgICAgICAgICAgbW9udGhJbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgICAgIHBhc3RNb250aHM6IHRoaXMuY29uZmlnLmhlYWRlci5wYXN0TW9udGhzLFxuICAgICAgICAgICAgc2hvd1R3b01vbnRoczogdGhpcy5zZWxlY3Rpb25bJ2NhbGVuZGFyTW9udGhWaWV3J10ubmVlZFR3b01vbnRoVmlldyAmJiB0aGlzLmNhbGVuZGFyLmNvbmZpZy5tb250aFsnc2hvd1R3b0NhbGVuZGFySWZOZWVkJ10sXG4gICAgICAgICAgICBsaW5rZWRNb250aHM6IHRoaXMuY29uZmlnLmhlYWRlci5saW5rZWRNb250aHMsXG4gICAgICAgICAgICBtb250aFNlbGVjdGlvbnM6IFt0aGlzLnNlbGVjdGlvbi5jYWxlbmRhck1vbnRoVmlldy5mcm9tLCB0aGlzLnNlbGVjdGlvbi5jYWxlbmRhck1vbnRoVmlldy50b10sXG4gICAgICAgICAgICBzdHlsZVByZWZpeDogdGhpcy5jb25maWcuc3R5bGVQcmVmaXgsXG4gICAgICAgICAgICBzaG93Q2hhbmdlTW9udGhCdXR0b246IHRoaXMuY29uZmlnLm1vbnRoLnNob3dDaGFuZ2VNb250aEJ1dHRvbixcbiAgICAgICAgICAgIHNob3dDaGFuZ2VZZWFyQnV0dG9uOiB0aGlzLmNvbmZpZy5tb250aC5zaG93Q2hhbmdlWWVhckJ1dHRvblxuICAgICAgICB9IGFzIEhlYWRlckNvbnRleHQ7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBjb25zdCBjb250ZXh0Q2hhbmdlID0gY2hhbmdlc1snY29udGV4dCddO1xuXG4gICAgICAgIGlmIChjb250ZXh0Q2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyID0gdGhpcy5jb250ZXh0LmNhbGVuZGFyO1xuICAgICAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMuY29udGV4dC5pbmRleDtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdGhpcy5jb250ZXh0LnNlbGVjdGlvbjtcbiAgICAgICAgICAgIHRoaXMubW9udGhTZWxlY3Rpb24gPSB0aGlzLmNvbnRleHQubW9udGhTZWxlY3Rpb247XG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5jb25maWc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRheUxhYmVsc1Jvd0NsYXNzID0ge307XG4gICAgICAgIHRoaXMucm93Q2xhc3MgPSB7fTtcblxuICAgICAgICB0aGlzLmRheUxhYmVsc1Jvd0NsYXNzW2Ake3RoaXMuY29uZmlnLnN0eWxlUHJlZml4fS1jYWxlbmRhci1yb3dgXSA9IHRydWU7XG4gICAgICAgIHRoaXMuZGF5TGFiZWxzUm93Q2xhc3NbYCR7dGhpcy5jb25maWcuc3R5bGVQcmVmaXh9LWNhbGVuZGFyLWRheS1sYWJlbHNgXSA9IHRydWU7XG4gICAgICAgIHRoaXMucm93Q2xhc3NbYCR7dGhpcy5jb25maWcuc3R5bGVQcmVmaXh9LWNhbGVuZGFyLXJvd2BdID0gdHJ1ZTtcbiAgICB9XG5cbn1cblxuLy8gW21vbnRoSW5kZXhdPVwiaW5kZXhcIlxuLy8gW3Nob3dUd29Nb250aHNdPVwic2VsZWN0aW9uLmNhbGVuZGFyTW9udGhWaWV3Lm5lZWRUd29Nb250aFZpZXcgJiYgY2FsZW5kYXIuY29uZmlnLm1vbnRoLnNob3dUd29DYWxlbmRhcklmTmVlZFwiXG4vLyBbbGlua2VkTW9udGhzXT1cImNvbmZpZz8uaGVhZGVyLmxpbmtlZE1vbnRoc1wiXG4vLyBbbW9udGhTZWxlY3Rpb25zXT1cIlttb250aFNlbGVjdGlvbl1cIlxuIl19