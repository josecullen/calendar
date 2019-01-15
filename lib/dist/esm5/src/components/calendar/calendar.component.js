/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ContentChild, Output, EventEmitter, HostBinding, ViewEncapsulation, TemplateRef } from '@angular/core';
import { Calendar } from '../../lib/calendar/calendar';
import { CalendarSelection } from '../../lib/calendar-view/selection/calendar-selection.class';
import { SingleSelectionStrategy } from '../../lib/calendar-view/selection/strategy/simple-selection.strategy';
import { RangeSelectionStrategy } from '../../lib/calendar-view/selection/strategy/range-selection.strategy';
import { PickSelectionStrategy } from '../../lib/calendar-view/selection/strategy/pick-selection.strategy';
import { CalendarViewConfig } from '../../lib/calendar-view/config/calendar-view-config.class';
import { CalendarViewFactory } from '../../calendar-view.factory';
import { CellData } from '../../cell-data';
import { CalendarMonthDirective } from '../../directives/calendar-month.directive';
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
        this.selection = new CalendarSelection();
        this.dates = [];
        this.config = new CalendarViewConfig();
        this.selectionChange = this.selection.selectionChange;
        this.monthSelectionChange = this.selection.monthSelectionChange;
    }
    Object.defineProperty(CalendarComponent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.stylePrefix + "-calendar";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        // console.log('calendar do check')
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // console.log('calendar init')
        this.calendar = new Calendar(new CalendarViewFactory(), this.config);
        this.updateSelection();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        /** @type {?} */
        var configChange = changes['config'];
        if (this.calendar) {
            // let change = changes['dates']
            // if (change) {
            // setTimeout(() => {
            // this.calendar.setDaysPayload(this.dates)
            // })
            this.calendar.recalculate();
            this.dates.forEach(function (day) {
                _this.calendar.setDay(day.date, new CellData(day.date, day.payload, day.selected, day.disabled));
            });
            // }
            if (configChange) {
                this.calendar.config = this.config;
                this.updateSelection();
            }
        }
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.updateSelection = /**
     * @return {?}
     */
    function () {
        var _this = this;
        switch (((/** @type {?} */ (this.config))).selection) {
            case 'simple':
                this.singleSelection();
                break;
            case 'range':
                this.rangeSelection();
                break;
            case 'picked':
                this.pickSelection();
                break;
        }
        this.calendar.recalculate();
        this.dates.forEach(function (day) {
            _this.calendar.setDay(day.date, new CellData(day.date, day.payload, day.selected, day.disabled));
        });
        // console.log(this.calendar.getYear(2019).getMonth(0).days.map(day => day.disabled))
    };
    /**
     * @param {?} data
     * @return {?}
     */
    CalendarComponent.prototype.cellClicked = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        data.selected = !data.selected;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarComponent.prototype.getPayload = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var cellData = this.dates.find(function (d) { return d.date === date.date; });
        return cellData ? cellData.payload : undefined;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarComponent.prototype.dateIncluded = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.dates.some(function (d) { return d.date === date; });
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.singleSelection = /**
     * @return {?}
     */
    function () {
        this.selection.setStrategy(new SingleSelectionStrategy());
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.rangeSelection = /**
     * @return {?}
     */
    function () {
        this.selection.setStrategy(new RangeSelectionStrategy());
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.pickSelection = /**
     * @return {?}
     */
    function () {
        this.selection.setStrategy(new PickSelectionStrategy());
    };
    /**
     * @param {?} monthIndex
     * @return {?}
     */
    CalendarComponent.prototype.getMonthContext = /**
     * @param {?} monthIndex
     * @return {?}
     */
    function (monthIndex) {
        return (/** @type {?} */ ({
            index: monthIndex,
            calendar: this.calendar,
            selection: this.selection,
            config: this.config,
            monthSelection: monthIndex === 0 ? this.selection.calendarMonthView.from : this.selection.calendarMonthView.to
        }));
    };
    CalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'trb-calendar',
                    template: "<ng-container *ngIf=\"monthTemplate || calendarMonth else defaultMonths\">\n    <ng-container *ngTemplateOutlet=\"monthTemplate || calendarMonth; context: { $implicit : getMonthContext(0) }\">\n    </ng-container>\n\n    <ng-container *ngTemplateOutlet=\"monthTemplate || calendarMonth; context: { $implicit : getMonthContext(1) }\">\n    </ng-container>\n</ng-container>\n\n<ng-template #defaultMonths>\n    <trb-calendar-month [context]=\"getMonthContext(0)\">\n    </trb-calendar-month>\n\n    <trb-calendar-month *ngIf=\"selection.calendarMonthView.needTwoMonthView && calendar.config.month.showTwoCalendarIfNeed\"\n        [context]=\"getMonthContext(1)\">\n    </trb-calendar-month>\n</ng-template>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".trb-calendar{display:flex;flex-wrap:wrap}.trb-calendar-month{margin:0 10px}.trb-calendar-header{height:16px}.trb-calendar-header .trb-calendar-header-buttons{padding:0 12px}.trb-calendar-row{display:flex}.trb-calendar-day-labels{padding:4px 0;font-size:12px}.trb-calendar-day-labels .day-label{flex:1;position:relative;text-align:center;padding:8px 0}.trb-calendar-cell{font-family:ProximaNova,sans-serif;position:relative;min-width:38px;min-height:38px;text-align:center;display:block;line-height:30px;align-items:center}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay{background:#e4e7e7;width:100%;height:100%;top:0;left:0;position:absolute;opacity:.1}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay:hover{background:#666;cursor:pointer}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month){background-color:#17a45f}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .label,.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .my-price{color:#fff}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-from{border-top-left-radius:4px;border-bottom-left-radius:4px}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-to{border-top-right-radius:4px;border-bottom-right-radius:4px}.trb-calendar-cell:not(.trb-calendar-cell-has-payload){line-height:38px}.trb-calendar-cell.trb-calendar-cell-past .label{color:rgba(0,0,0,.1)}.trb-calendar-cell.trb-calendar-cell-in-range:not(.trb-calendar-cell-outside-month){background-color:#d3ecd3}.trb-calendar-cell.trb-calendar-cell-disabled{background-color:#ccc;cursor:not-allowed}.trb-calendar-cell.trb-calendar-cell-disabled .label{color:rgba(0,0,0,.1)}", ""]
                }] }
    ];
    CalendarComponent.propDecorators = {
        dates: [{ type: Input }],
        config: [{ type: Input }],
        selectionChange: [{ type: Output }],
        monthSelectionChange: [{ type: Output }],
        monthTemplate: [{ type: Input }],
        calendarMonth: [{ type: ContentChild, args: [CalendarMonthDirective, { read: TemplateRef },] }],
        classes: [{ type: HostBinding, args: ['class',] }]
    };
    return CalendarComponent;
}());
export { CalendarComponent };
if (false) {
    /** @type {?} */
    CalendarComponent.prototype.selection;
    /** @type {?} */
    CalendarComponent.prototype.dates;
    /** @type {?} */
    CalendarComponent.prototype.config;
    /** @type {?} */
    CalendarComponent.prototype.selectionChange;
    /** @type {?} */
    CalendarComponent.prototype.monthSelectionChange;
    /** @type {?} */
    CalendarComponent.prototype.monthTemplate;
    /** @type {?} */
    CalendarComponent.prototype.calendarMonth;
    /** @type {?} */
    CalendarComponent.prototype.calendar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQTRCLE1BQU0sRUFDdkUsWUFBWSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBbUIsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUMvRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUMvRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFbkY7SUFBQTtRQU9JLGNBQVMsR0FBc0IsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQzlDLFVBQUssR0FBb0IsRUFBRSxDQUFDO1FBQzVCLFdBQU0sR0FBdUIsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBRXJELG9CQUFlLEdBQW9DLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDO1FBQ2xGLHlCQUFvQixHQUFvRCxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDO0lBK0cx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RUwsWUFBWSxTQUFDLHNCQUFzQixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQzswQkFLekQsV0FBVyxTQUFDLE9BQU87O0lBc0d4Qix3QkFBQztDQUFBLEFBM0hELElBMkhDO1NBckhZLGlCQUFpQjs7O0lBQzFCLHNDQUF1RDs7SUFDdkQsa0NBQXFDOztJQUNyQyxtQ0FBK0Q7O0lBRS9ELDRDQUE0Rjs7SUFDNUYsaURBQXNIOztJQUV0SCwwQ0FBNEI7O0lBRTVCLDBDQUNzQzs7SUFFdEMscUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ29udGVudENoaWxkLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgVmlld0VuY2Fwc3VsYXRpb24sIERvQ2hlY2ssIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyL2NhbGVuZGFyJztcbmltcG9ydCB7IElEYXkgfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXIvZGF5L2RheS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9zZWxlY3Rpb24vY2FsZW5kYXItc2VsZWN0aW9uLmNsYXNzJztcbmltcG9ydCB7IFNpbmdsZVNlbGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvc2VsZWN0aW9uL3N0cmF0ZWd5L3NpbXBsZS1zZWxlY3Rpb24uc3RyYXRlZ3knO1xuaW1wb3J0IHsgUmFuZ2VTZWxlY3Rpb25TdHJhdGVneSB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9zdHJhdGVneS9yYW5nZS1zZWxlY3Rpb24uc3RyYXRlZ3knO1xuaW1wb3J0IHsgUGlja1NlbGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvc2VsZWN0aW9uL3N0cmF0ZWd5L3BpY2stc2VsZWN0aW9uLnN0cmF0ZWd5JztcbmltcG9ydCB7IENhbGVuZGFyVmlld0NvbmZpZyB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L2NvbmZpZy9jYWxlbmRhci12aWV3LWNvbmZpZy5jbGFzcyc7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXdGYWN0b3J5IH0gZnJvbSAnLi4vLi4vY2FsZW5kYXItdmlldy5mYWN0b3J5JztcbmltcG9ydCB7IE1vbnRoQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvbW9udGgtY29udGV4dCc7XG5pbXBvcnQgeyBDZWxsRGF0YSB9IGZyb20gJy4uLy4uL2NlbGwtZGF0YSc7XG5pbXBvcnQgeyBDYWxlbmRhck1vbnRoRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1tb250aC5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RyYi1jYWxlbmRhcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi4vc3R5bGVzLnNhc3MnLCAnLi9jYWxlbmRhci5jb21wb25lbnQuc2NzcyddLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIERvQ2hlY2ssIE9uSW5pdCB7XG4gICAgc2VsZWN0aW9uOiBDYWxlbmRhclNlbGVjdGlvbiA9IG5ldyBDYWxlbmRhclNlbGVjdGlvbigpO1xuICAgIEBJbnB1dCgpIGRhdGVzOiBDZWxsRGF0YTxhbnk+W10gPSBbXTtcbiAgICBASW5wdXQoKSBjb25maWc6IENhbGVuZGFyVmlld0NvbmZpZyA9IG5ldyBDYWxlbmRhclZpZXdDb25maWcoKTtcblxuICAgIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxDYWxlbmRhclNlbGVjdGlvbj4gPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3Rpb25DaGFuZ2U7XG4gICAgQE91dHB1dCgpIG1vbnRoU2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBwcmV2aW91czogRGF0ZSwgY3VycmVudDogRGF0ZSB9PiA9IHRoaXMuc2VsZWN0aW9uLm1vbnRoU2VsZWN0aW9uQ2hhbmdlO1xuXG4gICAgQElucHV0KCkgbW9udGhUZW1wbGF0ZTogYW55O1xuXG4gICAgQENvbnRlbnRDaGlsZChDYWxlbmRhck1vbnRoRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmfSlcbiAgICBjYWxlbmRhck1vbnRoOiBDYWxlbmRhck1vbnRoRGlyZWN0aXZlO1xuXG4gICAgY2FsZW5kYXI6IENhbGVuZGFyO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gICAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNvbmZpZy5zdHlsZVByZWZpeH0tY2FsZW5kYXJgO1xuICAgIH1cblxuICAgIG5nRG9DaGVjaygpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NhbGVuZGFyIGRvIGNoZWNrJylcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NhbGVuZGFyIGluaXQnKVxuICAgICAgICB0aGlzLmNhbGVuZGFyID0gbmV3IENhbGVuZGFyKG5ldyBDYWxlbmRhclZpZXdGYWN0b3J5KCksIHRoaXMuY29uZmlnKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbigpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgY29uZmlnQ2hhbmdlID0gY2hhbmdlc1snY29uZmlnJ107XG5cbiAgICAgICAgaWYgKHRoaXMuY2FsZW5kYXIpIHtcbiAgICAgICAgICAgIC8vIGxldCBjaGFuZ2UgPSBjaGFuZ2VzWydkYXRlcyddXG5cbiAgICAgICAgICAgIC8vIGlmIChjaGFuZ2UpIHtcblxuICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLmNhbGVuZGFyLnNldERheXNQYXlsb2FkKHRoaXMuZGF0ZXMpXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgdGhpcy5jYWxlbmRhci5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5kYXRlcy5mb3JFYWNoKGRheSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxlbmRhci5zZXREYXkoZGF5LmRhdGUsIG5ldyBDZWxsRGF0YShkYXkuZGF0ZSwgZGF5LnBheWxvYWQsIGRheS5zZWxlY3RlZCwgZGF5LmRpc2FibGVkKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICBpZiAoY29uZmlnQ2hhbmdlKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFyLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xuXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICB1cGRhdGVTZWxlY3Rpb24oKSB7XG4gICAgICAgIHN3aXRjaCAoKHRoaXMuY29uZmlnIGFzIENhbGVuZGFyVmlld0NvbmZpZykuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICdzaW1wbGUnOlxuICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyYW5nZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5yYW5nZVNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGlja2VkJzpcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FsZW5kYXIucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgdGhpcy5kYXRlcy5mb3JFYWNoKGRheSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyLnNldERheShkYXkuZGF0ZSwgbmV3IENlbGxEYXRhKGRheS5kYXRlLCBkYXkucGF5bG9hZCwgZGF5LnNlbGVjdGVkLCBkYXkuZGlzYWJsZWQpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jYWxlbmRhci5nZXRZZWFyKDIwMTkpLmdldE1vbnRoKDApLmRheXMubWFwKGRheSA9PiBkYXkuZGlzYWJsZWQpKVxuICAgIH1cblxuICAgIGNlbGxDbGlja2VkKGRhdGE6IENlbGxEYXRhPGFueT4pIHtcbiAgICAgICAgZGF0YS5zZWxlY3RlZCA9ICFkYXRhLnNlbGVjdGVkO1xuICAgIH1cblxuICAgIGdldFBheWxvYWQoZGF0ZTogSURheSk6IGFueSB7XG4gICAgICAgIGNvbnN0IGNlbGxEYXRhID0gdGhpcy5kYXRlcy5maW5kKGQgPT4gZC5kYXRlID09PSBkYXRlLmRhdGUpO1xuICAgICAgICByZXR1cm4gY2VsbERhdGEgPyBjZWxsRGF0YS5wYXlsb2FkIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGRhdGVJbmNsdWRlZChkYXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZXMuc29tZShkID0+IGQuZGF0ZSA9PT0gZGF0ZSk7XG4gICAgfVxuXG4gICAgc2luZ2xlU2VsZWN0aW9uKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5zZXRTdHJhdGVneShuZXcgU2luZ2xlU2VsZWN0aW9uU3RyYXRlZ3koKSk7XG4gICAgfVxuXG4gICAgcmFuZ2VTZWxlY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLnNldFN0cmF0ZWd5KG5ldyBSYW5nZVNlbGVjdGlvblN0cmF0ZWd5KCkpO1xuICAgIH1cblxuICAgIHBpY2tTZWxlY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLnNldFN0cmF0ZWd5KG5ldyBQaWNrU2VsZWN0aW9uU3RyYXRlZ3koKSk7XG4gICAgfVxuXG5cbiAgICBnZXRNb250aENvbnRleHQobW9udGhJbmRleDogbnVtYmVyKTogTW9udGhDb250ZXh0IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluZGV4OiBtb250aEluZGV4LFxuICAgICAgICAgICAgY2FsZW5kYXI6IHRoaXMuY2FsZW5kYXIsXG4gICAgICAgICAgICBzZWxlY3Rpb246IHRoaXMuc2VsZWN0aW9uLFxuICAgICAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgICAgICAgIG1vbnRoU2VsZWN0aW9uOiBtb250aEluZGV4ID09PSAwID8gdGhpcy5zZWxlY3Rpb24uY2FsZW5kYXJNb250aFZpZXcuZnJvbSA6IHRoaXMuc2VsZWN0aW9uLmNhbGVuZGFyTW9udGhWaWV3LnRvXG4gICAgICAgIH0gYXMgTW9udGhDb250ZXh0O1xuICAgIH1cblxufVxuXG5cbiJdfQ==