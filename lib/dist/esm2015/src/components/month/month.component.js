/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ContentChild, HostBinding, ChangeDetectionStrategy } from '@angular/core';
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
     * @return {?}
     */
    ngOnInit() {
        this.calendarView = this.calendar.getYear(this.monthSelection.year).months[this.monthSelection.month].getCalendarView();
        this.monthSelection.selectionChange.subscribe(change => {
            // console.info('month selection change');
            this.calendarView = this.calendar.getYear(this.monthSelection.year).months[this.monthSelection.month].getCalendarView();
        });
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
        console.info('month change', changes);
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
                template: "<ng-container *ngIf=\"calendarHeader else defaultHeader\">\n  <ng-container *ngTemplateOutlet=\"calendarHeader.template; context: { $implicit: getHeaderData()}\">\n  </ng-container>\n</ng-container>\n\n<ng-template #defaultHeader>\n  <trb-calendar-header [context]=\"getHeaderData()\">\n  </trb-calendar-header>\n</ng-template>\n\n\n<ng-container *ngIf=\"calendarView as calendarView\">\n  <div [ngClass]=\"dayLabelsRowClass\">\n    <trb-calendar-day-header-cell class=\"day-label\" *ngFor=\"let day of [0,1,2,3,4,5,6]\" [day]=\"day\" [dayLabels]=\"config.month.dayLabels\"\n      [dayLength]=\"config.month.dayLength\">\n    </trb-calendar-day-header-cell>\n  </div>\n\n  <div [ngClass]=\"rowClass\" *ngFor=\"let week of calendarView; index as i\">\n\n    <ng-container *ngFor=\"let day of week\">\n\n      <ng-container *ngIf=\"calendarCell else defaultCell\">\n        <ng-container *ngTemplateOutlet=\"calendarCell.template; context: { $implicit: getCellData(day) }\">\n        </ng-container>\n      </ng-container>\n\n      <ng-template #defaultCell>\n        <trb-calendar-cell [context]=\"getCellData(day)\"></trb-calendar-cell>\n      </ng-template>\n\n    </ng-container>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["*{font-family:sans-serif;color:#333;font-size:14px}.price{color:green;font-size:10px}.trb-calendar-arrow{border:solid #666;border-width:0 2px 2px 0;display:inline-block;padding:4px}.trb-calendar-arrow.trb-calendar-arrow-right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.trb-calendar-arrow.trb-calendar-arrow-left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.clickeable{cursor:pointer}.trb-calendar{display:flex;flex-wrap:wrap}.trb-calendar-month{margin:0 10px}@media screen and (max-width:600px){.trb-calendar-month{margin:auto;padding-top:24px}}.trb-calendar-header{height:16px}.trb-calendar-header .trb-calendar-header-buttons{padding:0 12px}.trb-calendar-row{display:flex}.trb-calendar-day-labels{padding:4px 0;font-size:12px}.trb-calendar-day-labels .day-label{flex:1;position:relative;text-align:center;padding:8px 0}.trb-calendar-cell{font-family:ProximaNova,sans-serif;position:relative;min-width:38px;min-height:38px;text-align:center;display:block;line-height:30px;align-items:center}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay{background:#e4e7e7;width:100%;height:100%;top:0;left:0;position:absolute;opacity:.1}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay:hover{background:#666;cursor:pointer}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month){background-color:#17a45f}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .label,.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .my-price{color:#fff}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-from{border-top-left-radius:4px;border-bottom-left-radius:4px}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-to{border-top-right-radius:4px;border-bottom-right-radius:4px}.trb-calendar-cell.trb-calendar-cell-past .label{color:rgba(0,0,0,.1)}.trb-calendar-cell.trb-calendar-cell-in-range:not(.trb-calendar-cell-outside-month){background-color:#d3ecd3}.trb-calendar-cell.trb-calendar-cell-disabled{background-color:#ccc;cursor:not-allowed}.trb-calendar-cell.trb-calendar-cell-disabled .label{color:rgba(0,0,0,.1)}.trb-button-close{position:absolute;right:8px;top:8px;width:30px;height:24px;opacity:.3}.trb-button-close:hover{opacity:1}.trb-button-close:after,.trb-button-close:before{position:absolute;left:15px;content:' ';height:24px;width:2px;background-color:#333}.trb-button-close:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.trb-button-close:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}", ""]
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
    /** @type {?} */
    CalendarMonthComponent.prototype.calendarView;
    /**
     * @type {?}
     * @private
     */
    CalendarMonthComponent.prototype.breakpointObserver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NvbXBvbmVudHMvbW9udGgvbW9udGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQTRCLFdBQVcsRUFBVSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2SSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDL0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDeEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFckYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBU3RFLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUF3QmpDLFlBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQzFELENBQUM7Ozs7SUF2QkQsSUFDSSxPQUFPO1FBQ1QsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxpQkFBaUIsQ0FBQztJQUNyRCxDQUFDOzs7O0lBc0JELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFj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ZCw4Q0FDb0M7O0lBRXBDLGdEQUN3Qzs7SUFFeEMsOENBQXVCOzs7OztJQUVYLG9EQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENvbnRlbnRDaGlsZCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBIb3N0QmluZGluZywgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNhbGVuZGFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvc2VsZWN0aW9uL2NhbGVuZGFyLXNlbGVjdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXIvY2FsZW5kYXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3Q29uZmlnIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvY29uZmlnL2NhbGVuZGFyLXZpZXctY29uZmlnLmNsYXNzJztcbmltcG9ydCB7IENlbGxDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9jZWxsLWNvbnRleHQnO1xuaW1wb3J0IHsgSGVhZGVyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvaGVhZGVyLWNvbnRleHQnO1xuaW1wb3J0IHsgTW9udGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9tb250aC1jb250ZXh0JztcbmltcG9ydCB7IE1vbnRoU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvY2FsZW5kYXItbW9udGgtc2VsZWN0aW9uLmNsYXNzJztcbmltcG9ydCB7IENhbGVuZGFyQ2VsbERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItY2VsbCc7XG5pbXBvcnQgeyBDYWxlbmRhckhlYWRlckRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaGVhZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDZWxsRGF0YSB9IGZyb20gJy4uLy4uL2NlbGwtZGF0YSc7XG5pbXBvcnQgeyBCcmVha3BvaW50T2JzZXJ2ZXIsIEJyZWFrcG9pbnRzIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQgeyBJRGF5IH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJiLWNhbGVuZGFyLW1vbnRoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vbnRoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4uL3N0eWxlcy5zYXNzJywgJy4vbW9udGguY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyTW9udGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiBgJHt0aGlzLmNvbmZpZy5zdHlsZVByZWZpeH0tY2FsZW5kYXItbW9udGhgO1xuICB9XG4gIEBJbnB1dCgpIGNvbnRleHQ6IE1vbnRoQ29udGV4dDtcbiAgQElucHV0KCkgY2FsZW5kYXI6IENhbGVuZGFyO1xuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBzZWxlY3Rpb246IElDYWxlbmRhclNlbGVjdGlvbjtcbiAgQElucHV0KCkgbW9udGhTZWxlY3Rpb246IE1vbnRoU2VsZWN0aW9uO1xuICBASW5wdXQoKSBjb25maWc6IENhbGVuZGFyVmlld0NvbmZpZztcblxuICBkYXlMYWJlbHNSb3dDbGFzczogYW55O1xuICByb3dDbGFzczogYW55O1xuXG4gIEBDb250ZW50Q2hpbGQoQ2FsZW5kYXJDZWxsRGlyZWN0aXZlKVxuICBjYWxlbmRhckNlbGw6IENhbGVuZGFyQ2VsbERpcmVjdGl2ZTtcblxuICBAQ29udGVudENoaWxkKENhbGVuZGFySGVhZGVyRGlyZWN0aXZlKVxuICBjYWxlbmRhckhlYWRlcjogQ2FsZW5kYXJIZWFkZXJEaXJlY3RpdmU7XG5cbiAgY2FsZW5kYXJWaWV3OiBJRGF5W11bXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbGVuZGFyVmlldyA9IHRoaXMuY2FsZW5kYXIuZ2V0WWVhcih0aGlzLm1vbnRoU2VsZWN0aW9uLnllYXIpLm1vbnRoc1t0aGlzLm1vbnRoU2VsZWN0aW9uLm1vbnRoXS5nZXRDYWxlbmRhclZpZXcoKTtcblxuICAgIHRoaXMubW9udGhTZWxlY3Rpb24uc2VsZWN0aW9uQ2hhbmdlLnN1YnNjcmliZShjaGFuZ2UgPT4ge1xuICAgICAgLy8gY29uc29sZS5pbmZvKCdtb250aCBzZWxlY3Rpb24gY2hhbmdlJyk7XG4gICAgICB0aGlzLmNhbGVuZGFyVmlldyA9IHRoaXMuY2FsZW5kYXIuZ2V0WWVhcih0aGlzLm1vbnRoU2VsZWN0aW9uLnllYXIpLm1vbnRoc1t0aGlzLm1vbnRoU2VsZWN0aW9uLm1vbnRoXS5nZXRDYWxlbmRhclZpZXcoKTtcbiAgICB9KTtcblxuICB9XG5cbiAgZ2V0Q2VsbERhdGEoZGF5OiBDZWxsRGF0YTxhbnk+KTogQ2VsbENvbnRleHQ8YW55PiB7XG4gICAgcmV0dXJuIENlbGxDb250ZXh0LmZyb20oZGF5LCB7XG4gICAgICBzZWxlY3Rpb246IHRoaXMuc2VsZWN0aW9uLFxuICAgICAgbW9udGhTZWxlY3Rpb246IHRoaXMubW9udGhTZWxlY3Rpb24sXG4gICAgICBoaWRlRGF5c091dHNpZGVNb250aDogdGhpcy5jYWxlbmRhci5jb25maWcubW9udGguaGlkZURheXNPdXRzaWRlTW9udGgsXG4gICAgICBzdHlsZVByZWZpeDogdGhpcy5jb25maWcuc3R5bGVQcmVmaXgsXG4gICAgICBmaWx0ZXJEYXRlczogdGhpcy5jb25maWcuZmlsdGVyRGF0ZXNcbiAgICB9KTtcbiAgfVxuXG4gIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnRPYnNlcnZlci5pc01hdGNoZWQoQnJlYWtwb2ludHMuSGFuZHNldFBvcnRyYWl0KTtcbiAgfVxuXG4gIGdldEhlYWRlckRhdGEoKTogSGVhZGVyQ29udGV4dCB7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgbW9udGhMYWJlbHM6IHRoaXMuY29uZmlnLm1vbnRoLm1vbnRoTGFiZWxzLFxuICAgICAgbW9udGhJbmRleDogdGhpcy5pbmRleCxcbiAgICAgIHBhc3RNb250aHM6IHRoaXMuY29uZmlnLmhlYWRlci5wYXN0TW9udGhzLFxuICAgICAgc2hvd1R3b01vbnRoczogdGhpcy5zZWxlY3Rpb25bJ2NhbGVuZGFyTW9udGhWaWV3J10ubmVlZFR3b01vbnRoVmlldyAmJiB0aGlzLmNhbGVuZGFyLmNvbmZpZy5tb250aFsnc2hvd1R3b0NhbGVuZGFySWZOZWVkJ10sXG4gICAgICBsaW5rZWRNb250aHM6IHRoaXMuY29uZmlnLmhlYWRlci5saW5rZWRNb250aHMsXG4gICAgICBtb250aFNlbGVjdGlvbnM6IFt0aGlzLnNlbGVjdGlvbi5jYWxlbmRhck1vbnRoVmlldy5mcm9tLCB0aGlzLnNlbGVjdGlvbi5jYWxlbmRhck1vbnRoVmlldy50b10sXG4gICAgICBzdHlsZVByZWZpeDogdGhpcy5jb25maWcuc3R5bGVQcmVmaXgsXG4gICAgICBzaG93Q2hhbmdlTW9udGhCdXR0b246IHRoaXMuY29uZmlnLm1vbnRoLnNob3dDaGFuZ2VNb250aEJ1dHRvbixcbiAgICAgIHNob3dDaGFuZ2VZZWFyQnV0dG9uOiB0aGlzLmNvbmZpZy5tb250aC5zaG93Q2hhbmdlWWVhckJ1dHRvblxuICAgIH0gYXMgSGVhZGVyQ29udGV4dDtcblxuICAgIGlmICh0aGlzLmlzTW9iaWxlKCkpIHtcbiAgICAgIGNvbmZpZy5zaG93VHdvTW9udGhzID0gdGhpcy5pbmRleCA9PT0gMCA/IGZhbHNlIDogdHJ1ZTtcblxuICAgICAgaWYgKHRoaXMuaW5kZXggPT09IDEpIHtcbiAgICAgICAgY29uZmlnLnNob3dDaGFuZ2VZZWFyQnV0dG9uID0gZmFsc2U7XG4gICAgICAgIGNvbmZpZy5zaG93Q2hhbmdlTW9udGhCdXR0b24gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnNvbGUuaW5mbygnbW9udGggY2hhbmdlJywgY2hhbmdlcyk7XG4gICAgY29uc3QgY29udGV4dENoYW5nZSA9IGNoYW5nZXNbJ2NvbnRleHQnXTtcblxuICAgIGlmIChjb250ZXh0Q2hhbmdlKSB7XG4gICAgICB0aGlzLmNhbGVuZGFyID0gdGhpcy5jb250ZXh0LmNhbGVuZGFyO1xuICAgICAgdGhpcy5pbmRleCA9IHRoaXMuY29udGV4dC5pbmRleDtcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gdGhpcy5jb250ZXh0LnNlbGVjdGlvbjtcbiAgICAgIHRoaXMubW9udGhTZWxlY3Rpb24gPSB0aGlzLmNvbnRleHQubW9udGhTZWxlY3Rpb247XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5jb25maWc7XG4gICAgfVxuXG4gICAgdGhpcy5kYXlMYWJlbHNSb3dDbGFzcyA9IHt9O1xuICAgIHRoaXMucm93Q2xhc3MgPSB7fTtcblxuICAgIHRoaXMuZGF5TGFiZWxzUm93Q2xhc3NbYCR7dGhpcy5jb25maWcuc3R5bGVQcmVmaXh9LWNhbGVuZGFyLXJvd2BdID0gdHJ1ZTtcbiAgICB0aGlzLmRheUxhYmVsc1Jvd0NsYXNzW2Ake3RoaXMuY29uZmlnLnN0eWxlUHJlZml4fS1jYWxlbmRhci1kYXktbGFiZWxzYF0gPSB0cnVlO1xuICAgIHRoaXMucm93Q2xhc3NbYCR7dGhpcy5jb25maWcuc3R5bGVQcmVmaXh9LWNhbGVuZGFyLXJvd2BdID0gdHJ1ZTtcbiAgfVxuXG59XG5cbi8vIFttb250aEluZGV4XT1cImluZGV4XCJcbi8vIFtzaG93VHdvTW9udGhzXT1cInNlbGVjdGlvbi5jYWxlbmRhck1vbnRoVmlldy5uZWVkVHdvTW9udGhWaWV3ICYmIGNhbGVuZGFyLmNvbmZpZy5tb250aC5zaG93VHdvQ2FsZW5kYXJJZk5lZWRcIlxuLy8gW2xpbmtlZE1vbnRoc109XCJjb25maWc/LmhlYWRlci5saW5rZWRNb250aHNcIlxuLy8gW21vbnRoU2VsZWN0aW9uc109XCJbbW9udGhTZWxlY3Rpb25dXCJcbiJdfQ==