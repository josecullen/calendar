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
export class CalendarMonthComponent {
    /**
     * @param {?} breakpointObserver
     */
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
    }
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
    isMobile() {
        return this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait);
    }
    /**
     * @return {?}
     */
    getHeaderData() {
        /** @type {?} */
        const config = (/** @type {?} */ ({
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
                template: "<ng-container *ngIf=\"calendarHeader else defaultHeader\">\n  <ng-container *ngTemplateOutlet=\"calendarHeader.template; context: { $implicit: getHeaderData()}\">\n  </ng-container>\n</ng-container>\n\n<ng-template #defaultHeader>\n  <trb-calendar-header [context]=\"getHeaderData()\">\n  </trb-calendar-header>\n</ng-template>\n\n\n<ng-container *ngIf=\"calendar.getYear(monthSelection.year).months[monthSelection.month].getCalendarView() as calendarView\">\n  <div [ngClass]=\"dayLabelsRowClass\">\n    <trb-calendar-day-header-cell class=\"day-label\" *ngFor=\"let day of [0,1,2,3,4,5,6]\" [day]=\"day\" [dayLabels]=\"config.month.dayLabels\"\n      [dayLength]=\"config.month.dayLength\">\n    </trb-calendar-day-header-cell>\n  </div>\n\n  <div [ngClass]=\"rowClass\" *ngFor=\"let week of calendarView; index as i\">\n\n    <ng-container *ngFor=\"let day of week\">\n\n      <ng-container *ngIf=\"calendarCell else defaultCell\">\n        <ng-container *ngTemplateOutlet=\"calendarCell.template; context: { $implicit: getCellData(day) }\">\n        </ng-container>\n      </ng-container>\n\n      <ng-template #defaultCell>\n        <trb-calendar-cell [context]=\"getCellData(day)\"></trb-calendar-cell>\n      </ng-template>\n\n    </ng-container>\n  </div>\n</ng-container>\n",
                styles: ["*{font-family:sans-serif;color:#333;font-size:14px}.price{color:green;font-size:10px}.trb-calendar-arrow{border:solid #666;border-width:0 2px 2px 0;display:inline-block;padding:4px}.trb-calendar-arrow.trb-calendar-arrow-right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.trb-calendar-arrow.trb-calendar-arrow-left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.clickeable{cursor:pointer}.trb-calendar{display:flex;flex-wrap:wrap}.trb-calendar-month{margin:0 10px}@media screen and (max-width:600px){.trb-calendar-month{margin:auto;padding-top:24px}}.trb-calendar-header{height:16px}.trb-calendar-header .trb-calendar-header-buttons{padding:0 12px}.trb-calendar-row{display:flex}.trb-calendar-day-labels{padding:4px 0;font-size:12px}.trb-calendar-day-labels .day-label{flex:1;position:relative;text-align:center;padding:8px 0}.trb-calendar-cell{font-family:ProximaNova,sans-serif;position:relative;min-width:38px;min-height:38px;text-align:center;display:block;line-height:30px;align-items:center}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay{background:#e4e7e7;width:100%;height:100%;top:0;left:0;position:absolute;opacity:.1}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay:hover{background:#666;cursor:pointer}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month){background-color:#17a45f}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .label,.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .my-price{color:#fff}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-from{border-top-left-radius:4px;border-bottom-left-radius:4px}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-to{border-top-right-radius:4px;border-bottom-right-radius:4px}.trb-calendar-cell.trb-calendar-cell-past .label{color:rgba(0,0,0,.1)}.trb-calendar-cell.trb-calendar-cell-in-range:not(.trb-calendar-cell-outside-month){background-color:#d3ecd3}.trb-calendar-cell.trb-calendar-cell-disabled{background-color:#ccc;cursor:not-allowed}.trb-calendar-cell.trb-calendar-cell-disabled .label{color:rgba(0,0,0,.1)}", ""]
            }] }
];
/** @nocollapse */
CalendarMonthComponent.ctorParameters = () => [
    { type: BreakpointObserver }
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
    /**
     * @type {?}
     * @private
     */
    CalendarMonthComponent.prototype.breakpointObserver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NvbXBvbmVudHMvbW9udGgvbW9udGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQTRCLFdBQVcsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUU5RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDL0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDeEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFckYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBTXRFLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFzQmpDLFlBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBRTFELENBQUM7Ozs7SUF0QkQsSUFDSSxPQUFPO1FBQ1QsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxpQkFBaUIsQ0FBQztJQUNyRCxDQUFDOzs7OztJQXFCRCxXQUFXLENBQUMsR0FBa0I7UUFDNUIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUMzQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLG9CQUFv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TUFBTSxDQUFDLFdBQVcsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ2xFLENBQUM7OztZQXZGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsOHdDQUFxQzs7YUFFdEM7Ozs7WUFMUSxrQkFBa0I7OztzQkFReEIsV0FBVyxTQUFDLE9BQU87c0JBSW5CLEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7NkJBQ0wsS0FBSztxQkFDTCxLQUFLOzJCQUtMLFlBQVksU0FBQyxxQkFBcUI7NkJBR2xDLFlBQVksU0FBQyx1QkFBdUI7Ozs7SUFickMseUNBQStCOztJQUMvQiwwQ0FBNEI7O0lBQzVCLHVDQUF1Qjs7SUFDdkIsMkNBQXVDOztJQUN2QyxnREFBd0M7O0lBQ3hDLHdDQUFvQzs7SUFFcEMsbURBQXVCOztJQUN2QiwwQ0FBYzs7SUFFZCw4Q0FDb0M7O0lBRXBDLGdEQUN3Qzs7Ozs7SUFFNUIsb0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ29udGVudENoaWxkLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEhvc3RCaW5kaW5nLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDYWxlbmRhclNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9jYWxlbmRhci1zZWxlY3Rpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IENhbGVuZGFyIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyL2NhbGVuZGFyJztcbmltcG9ydCB7IENhbGVuZGFyVmlld0NvbmZpZyB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L2NvbmZpZy9jYWxlbmRhci12aWV3LWNvbmZpZy5jbGFzcyc7XG5pbXBvcnQgeyBDZWxsQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvY2VsbC1jb250ZXh0JztcbmltcG9ydCB7IEhlYWRlckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L2hlYWRlci1jb250ZXh0JztcbmltcG9ydCB7IE1vbnRoQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvbW9udGgtY29udGV4dCc7XG5pbXBvcnQgeyBNb250aFNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L2NhbGVuZGFyLW1vbnRoLXNlbGVjdGlvbi5jbGFzcyc7XG5pbXBvcnQgeyBDYWxlbmRhckNlbGxEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWNlbGwnO1xuaW1wb3J0IHsgQ2FsZW5kYXJIZWFkZXJEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2VsbERhdGEgfSBmcm9tICcuLi8uLi9jZWxsLWRhdGEnO1xuaW1wb3J0IHsgQnJlYWtwb2ludE9ic2VydmVyLCBCcmVha3BvaW50cyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJiLWNhbGVuZGFyLW1vbnRoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vbnRoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4uL3N0eWxlcy5zYXNzJywgJy4vbW9udGguY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck1vbnRoQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuY29uZmlnLnN0eWxlUHJlZml4fS1jYWxlbmRhci1tb250aGA7XG4gIH1cbiAgQElucHV0KCkgY29udGV4dDogTW9udGhDb250ZXh0O1xuICBASW5wdXQoKSBjYWxlbmRhcjogQ2FsZW5kYXI7XG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIHNlbGVjdGlvbjogSUNhbGVuZGFyU2VsZWN0aW9uO1xuICBASW5wdXQoKSBtb250aFNlbGVjdGlvbjogTW9udGhTZWxlY3Rpb247XG4gIEBJbnB1dCgpIGNvbmZpZzogQ2FsZW5kYXJWaWV3Q29uZmlnO1xuXG4gIGRheUxhYmVsc1Jvd0NsYXNzOiBhbnk7XG4gIHJvd0NsYXNzOiBhbnk7XG5cbiAgQENvbnRlbnRDaGlsZChDYWxlbmRhckNlbGxEaXJlY3RpdmUpXG4gIGNhbGVuZGFyQ2VsbDogQ2FsZW5kYXJDZWxsRGlyZWN0aXZlO1xuXG4gIEBDb250ZW50Q2hpbGQoQ2FsZW5kYXJIZWFkZXJEaXJlY3RpdmUpXG4gIGNhbGVuZGFySGVhZGVyOiBDYWxlbmRhckhlYWRlckRpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyKSB7XG5cbiAgfVxuXG4gIGdldENlbGxEYXRhKGRheTogQ2VsbERhdGE8YW55Pik6IENlbGxDb250ZXh0PGFueT4ge1xuICAgIHJldHVybiBDZWxsQ29udGV4dC5mcm9tKGRheSwge1xuICAgICAgc2VsZWN0aW9uOiB0aGlzLnNlbGVjdGlvbixcbiAgICAgIG1vbnRoU2VsZWN0aW9uOiB0aGlzLm1vbnRoU2VsZWN0aW9uLFxuICAgICAgaGlkZURheXNPdXRzaWRlTW9udGg6IHRoaXMuY2FsZW5kYXIuY29uZmlnLm1vbnRoLmhpZGVEYXlzT3V0c2lkZU1vbnRoLFxuICAgICAgc3R5bGVQcmVmaXg6IHRoaXMuY29uZmlnLnN0eWxlUHJlZml4LFxuICAgICAgZmlsdGVyRGF0ZXM6IHRoaXMuY29uZmlnLmZpbHRlckRhdGVzXG4gICAgfSk7XG4gIH1cblxuICBpc01vYmlsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIuaXNNYXRjaGVkKEJyZWFrcG9pbnRzLkhhbmRzZXRQb3J0cmFpdCk7XG4gIH1cblxuICBnZXRIZWFkZXJEYXRhKCk6IEhlYWRlckNvbnRleHQge1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIG1vbnRoTGFiZWxzOiB0aGlzLmNvbmZpZy5tb250aC5tb250aExhYmVscyxcbiAgICAgIG1vbnRoSW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICBwYXN0TW9udGhzOiB0aGlzLmNvbmZpZy5oZWFkZXIucGFzdE1vbnRocyxcbiAgICAgIHNob3dUd29Nb250aHM6IHRoaXMuc2VsZWN0aW9uWydjYWxlbmRhck1vbnRoVmlldyddLm5lZWRUd29Nb250aFZpZXcgJiYgdGhpcy5jYWxlbmRhci5jb25maWcubW9udGhbJ3Nob3dUd29DYWxlbmRhcklmTmVlZCddLFxuICAgICAgbGlua2VkTW9udGhzOiB0aGlzLmNvbmZpZy5oZWFkZXIubGlua2VkTW9udGhzLFxuICAgICAgbW9udGhTZWxlY3Rpb25zOiBbdGhpcy5zZWxlY3Rpb24uY2FsZW5kYXJNb250aFZpZXcuZnJvbSwgdGhpcy5zZWxlY3Rpb24uY2FsZW5kYXJNb250aFZpZXcudG9dLFxuICAgICAgc3R5bGVQcmVmaXg6IHRoaXMuY29uZmlnLnN0eWxlUHJlZml4LFxuICAgICAgc2hvd0NoYW5nZU1vbnRoQnV0dG9uOiB0aGlzLmNvbmZpZy5tb250aC5zaG93Q2hhbmdlTW9udGhCdXR0b24sXG4gICAgICBzaG93Q2hhbmdlWWVhckJ1dHRvbjogdGhpcy5jb25maWcubW9udGguc2hvd0NoYW5nZVllYXJCdXR0b25cbiAgICB9IGFzIEhlYWRlckNvbnRleHQ7XG5cbiAgICBpZiAodGhpcy5pc01vYmlsZSgpKSB7XG4gICAgICBjb25maWcuc2hvd1R3b01vbnRocyA9IHRoaXMuaW5kZXggPT09IDAgPyBmYWxzZSA6IHRydWU7XG5cbiAgICAgIGlmICh0aGlzLmluZGV4ID09PSAxKSB7XG4gICAgICAgIGNvbmZpZy5zaG93Q2hhbmdlWWVhckJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICBjb25maWcuc2hvd0NoYW5nZU1vbnRoQnV0dG9uID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCBjb250ZXh0Q2hhbmdlID0gY2hhbmdlc1snY29udGV4dCddO1xuXG4gICAgaWYgKGNvbnRleHRDaGFuZ2UpIHtcbiAgICAgIHRoaXMuY2FsZW5kYXIgPSB0aGlzLmNvbnRleHQuY2FsZW5kYXI7XG4gICAgICB0aGlzLmluZGV4ID0gdGhpcy5jb250ZXh0LmluZGV4O1xuICAgICAgdGhpcy5zZWxlY3Rpb24gPSB0aGlzLmNvbnRleHQuc2VsZWN0aW9uO1xuICAgICAgdGhpcy5tb250aFNlbGVjdGlvbiA9IHRoaXMuY29udGV4dC5tb250aFNlbGVjdGlvbjtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmNvbmZpZztcbiAgICB9XG5cbiAgICB0aGlzLmRheUxhYmVsc1Jvd0NsYXNzID0ge307XG4gICAgdGhpcy5yb3dDbGFzcyA9IHt9O1xuXG4gICAgdGhpcy5kYXlMYWJlbHNSb3dDbGFzc1tgJHt0aGlzLmNvbmZpZy5zdHlsZVByZWZpeH0tY2FsZW5kYXItcm93YF0gPSB0cnVlO1xuICAgIHRoaXMuZGF5TGFiZWxzUm93Q2xhc3NbYCR7dGhpcy5jb25maWcuc3R5bGVQcmVmaXh9LWNhbGVuZGFyLWRheS1sYWJlbHNgXSA9IHRydWU7XG4gICAgdGhpcy5yb3dDbGFzc1tgJHt0aGlzLmNvbmZpZy5zdHlsZVByZWZpeH0tY2FsZW5kYXItcm93YF0gPSB0cnVlO1xuICB9XG5cbn1cblxuLy8gW21vbnRoSW5kZXhdPVwiaW5kZXhcIlxuLy8gW3Nob3dUd29Nb250aHNdPVwic2VsZWN0aW9uLmNhbGVuZGFyTW9udGhWaWV3Lm5lZWRUd29Nb250aFZpZXcgJiYgY2FsZW5kYXIuY29uZmlnLm1vbnRoLnNob3dUd29DYWxlbmRhcklmTmVlZFwiXG4vLyBbbGlua2VkTW9udGhzXT1cImNvbmZpZz8uaGVhZGVyLmxpbmtlZE1vbnRoc1wiXG4vLyBbbW9udGhTZWxlY3Rpb25zXT1cIlttb250aFNlbGVjdGlvbl1cIlxuIl19