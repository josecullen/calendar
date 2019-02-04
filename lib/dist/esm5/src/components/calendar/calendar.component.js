/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ContentChild, Output, EventEmitter, HostBinding, ViewEncapsulation, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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
    function CalendarComponent(cdr) {
        this.cdr = cdr;
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
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
            this.calendar.recalculate();
            this.dates.forEach(function (day) {
                _this.calendar.setDay(day.date, new CellData(day.date, day.payload, day.selected, day.disabled));
            });
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
                    template: "<ng-container *ngIf=\"monthTemplate || calendarMonth else defaultMonths\">\n    <ng-container *ngTemplateOutlet=\"monthTemplate || calendarMonth; context: { $implicit : getMonthContext(0) }\">\n    </ng-container>\n\n    <ng-container *ngIf=\"selection.calendarMonthView.needTwoMonthView && calendar.config.month.showTwoCalendarIfNeed\">\n      <ng-container *ngTemplateOutlet=\"monthTemplate || calendarMonth; context: { $implicit : getMonthContext(1) }\">\n      </ng-container>\n    </ng-container>\n</ng-container>\n\n<ng-template #defaultMonths>\n    <trb-calendar-month [context]=\"getMonthContext(0)\">\n    </trb-calendar-month>\n\n    <trb-calendar-month *ngIf=\"selection.calendarMonthView.needTwoMonthView && calendar.config.month.showTwoCalendarIfNeed\"\n        [context]=\"getMonthContext(1)\">\n    </trb-calendar-month>\n</ng-template>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["*{font-family:sans-serif;color:#333;font-size:14px}.price{color:green;font-size:10px}.trb-calendar-arrow{border:solid #666;border-width:0 2px 2px 0;display:inline-block;padding:4px}.trb-calendar-arrow.trb-calendar-arrow-right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.trb-calendar-arrow.trb-calendar-arrow-left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.clickeable{cursor:pointer}.trb-calendar{display:flex;flex-wrap:wrap}.trb-calendar-month{margin:0 10px}@media screen and (max-width:600px){.trb-calendar-month{margin:auto;padding-top:24px}}.trb-calendar-header{height:16px}.trb-calendar-header .trb-calendar-header-buttons{padding:0 12px}.trb-calendar-row{display:flex}.trb-calendar-day-labels{padding:4px 0;font-size:12px}.trb-calendar-day-labels .day-label{flex:1;position:relative;text-align:center;padding:8px 0}.trb-calendar-cell{font-family:ProximaNova,sans-serif;position:relative;min-width:38px;min-height:38px;text-align:center;display:block;line-height:30px;align-items:center}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay{background:#e4e7e7;width:100%;height:100%;top:0;left:0;position:absolute;opacity:.1}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay:hover{background:#666;cursor:pointer}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month){background-color:#17a45f}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .label,.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .my-price{color:#fff}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-from{border-top-left-radius:4px;border-bottom-left-radius:4px}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-to{border-top-right-radius:4px;border-bottom-right-radius:4px}.trb-calendar-cell.trb-calendar-cell-past .label{color:rgba(0,0,0,.1)}.trb-calendar-cell.trb-calendar-cell-in-range:not(.trb-calendar-cell-outside-month){background-color:#d3ecd3}.trb-calendar-cell.trb-calendar-cell-disabled{background-color:#ccc;cursor:not-allowed}.trb-calendar-cell.trb-calendar-cell-disabled .label{color:rgba(0,0,0,.1)}.trb-button-close{position:absolute;right:8px;top:8px;width:30px;height:24px;opacity:.3}.trb-button-close:hover{opacity:1}.trb-button-close:after,.trb-button-close:before{position:absolute;left:15px;content:' ';height:24px;width:2px;background-color:#333}.trb-button-close:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.trb-button-close:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}", ""]
                }] }
    ];
    /** @nocollapse */
    CalendarComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
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
    /** @type {?} */
    CalendarComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQTRCLE1BQU0sRUFDdkUsWUFBWSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBbUIsV0FBVyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hKLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUMvRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUMvRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFbkY7SUFzQkksMkJBQW1CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBZHpDLGNBQVMsR0FBc0IsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQzlDLFVBQUssR0FBb0IsRUFBRSxDQUFDO1FBQzVCLFdBQU0sR0FBdUIsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBRXJELG9CQUFlLEdBQW9DLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDO1FBQ2xGLHlCQUFvQixHQUFvRCxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDO0lBUzFFLENBQUM7SUFFN0Msc0JBQ0ksc0NBQU87Ozs7UUFEWDtZQUVJLE9BQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLGNBQVcsQ0FBQztRQUNqRCxDQUFDOzs7T0FBQTs7OztJQUVELHFDQUFTOzs7SUFBVDtJQUNBLENBQUM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksbUJBQW1CLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsdUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQWtCQzs7WUFqQlMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFFdEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7Z0JBQ2xCLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDcEcsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLFlBQVksRUFBRTtnQkFFZCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUVuQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDMUI7U0FDSjtJQUdMLENBQUM7Ozs7SUFFRCwyQ0FBZTs7O0lBQWY7UUFBQSxpQkFpQkM7UUFoQkcsUUFBUSxDQUFDLG1CQUFBLElBQUksQ0FBQyxNQUFNLEVBQXNCLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDbkQsS0FBSyxRQUFRO2dCQUNULElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdkIsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3RCLE1BQU07WUFDVixLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixNQUFNO1NBQ2I7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUNsQixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3BHLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFFRCx1Q0FBVzs7OztJQUFYLFVBQVksSUFBbUI7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxzQ0FBVTs7OztJQUFWLFVBQVcsSUFBVTs7WUFDWCxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQXBCLENBQW9CLENBQUM7UUFDM0QsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUVELHdDQUFZOzs7O0lBQVosVUFBYSxJQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksRUFBZixDQUFlLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsMkNBQWU7OztJQUFmO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSx1QkFBdUIsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7OztJQUVELDBDQUFjOzs7SUFBZDtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7SUFFRCx5Q0FBYTs7O0lBQWI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLHFCQUFxQixFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7OztJQUdELDJDQUFlOzs7O0lBQWYsVUFBZ0IsVUFBa0I7UUFDOUIsT0FBTyxtQkFBQTtZQUNILEtBQUssRUFBRSxVQUFVO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGNBQWMsRUFBRSxVQUFVLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1NBQ2pILEVBQWdCLENBQUM7SUFDdEIsQ0FBQzs7Z0JBL0dKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsaTJCQUF3QztvQkFFeEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDbEQ7Ozs7Z0JBbkJzRyxpQkFBaUI7Ozt3QkFzQm5ILEtBQUs7eUJBQ0wsS0FBSztrQ0FFTCxNQUFNO3VDQUNOLE1BQU07Z0NBRU4sS0FBSztnQ0FFTCxZQUFZLFNBQUMsc0JBQXNCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDOzBCQU96RCxXQUFXLFNBQUMsT0FBTzs7SUF5RnhCLHdCQUFDO0NBQUEsQUFqSEQsSUFpSEM7U0ExR1ksaUJBQWlCOzs7SUFDMUIsc0NBQXVEOztJQUN2RCxrQ0FBcUM7O0lBQ3JDLG1DQUErRDs7SUFFL0QsNENBQTRGOztJQUM1RixpREFBc0g7O0lBRXRILDBDQUE0Qjs7SUFFNUIsMENBQ3NDOztJQUV0QyxxQ0FBbUI7O0lBRVAsZ0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ29udGVudENoaWxkLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgVmlld0VuY2Fwc3VsYXRpb24sIERvQ2hlY2ssIE9uSW5pdCwgVGVtcGxhdGVSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXIvY2FsZW5kYXInO1xuaW1wb3J0IHsgSURheSB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci9kYXkvZGF5LmludGVyZmFjZSc7XG5pbXBvcnQgeyBDYWxlbmRhclNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9jYWxlbmRhci1zZWxlY3Rpb24uY2xhc3MnO1xuaW1wb3J0IHsgU2luZ2xlU2VsZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9zZWxlY3Rpb24vc3RyYXRlZ3kvc2ltcGxlLXNlbGVjdGlvbi5zdHJhdGVneSc7XG5pbXBvcnQgeyBSYW5nZVNlbGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvc2VsZWN0aW9uL3N0cmF0ZWd5L3JhbmdlLXNlbGVjdGlvbi5zdHJhdGVneSc7XG5pbXBvcnQgeyBQaWNrU2VsZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9zZWxlY3Rpb24vc3RyYXRlZ3kvcGljay1zZWxlY3Rpb24uc3RyYXRlZ3knO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3Q29uZmlnIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvY29uZmlnL2NhbGVuZGFyLXZpZXctY29uZmlnLmNsYXNzJztcbmltcG9ydCB7IENhbGVuZGFyVmlld0ZhY3RvcnkgfSBmcm9tICcuLi8uLi9jYWxlbmRhci12aWV3LmZhY3RvcnknO1xuaW1wb3J0IHsgTW9udGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9tb250aC1jb250ZXh0JztcbmltcG9ydCB7IENlbGxEYXRhIH0gZnJvbSAnLi4vLi4vY2VsbC1kYXRhJztcbmltcG9ydCB7IENhbGVuZGFyTW9udGhEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2NhbGVuZGFyLW1vbnRoLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndHJiLWNhbGVuZGFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuLi9zdHlsZXMuc2FzcycsICcuL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIERvQ2hlY2ssIE9uSW5pdCB7XG4gICAgc2VsZWN0aW9uOiBDYWxlbmRhclNlbGVjdGlvbiA9IG5ldyBDYWxlbmRhclNlbGVjdGlvbigpO1xuICAgIEBJbnB1dCgpIGRhdGVzOiBDZWxsRGF0YTxhbnk+W10gPSBbXTtcbiAgICBASW5wdXQoKSBjb25maWc6IENhbGVuZGFyVmlld0NvbmZpZyA9IG5ldyBDYWxlbmRhclZpZXdDb25maWcoKTtcblxuICAgIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxDYWxlbmRhclNlbGVjdGlvbj4gPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3Rpb25DaGFuZ2U7XG4gICAgQE91dHB1dCgpIG1vbnRoU2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBwcmV2aW91czogRGF0ZSwgY3VycmVudDogRGF0ZSB9PiA9IHRoaXMuc2VsZWN0aW9uLm1vbnRoU2VsZWN0aW9uQ2hhbmdlO1xuXG4gICAgQElucHV0KCkgbW9udGhUZW1wbGF0ZTogYW55O1xuXG4gICAgQENvbnRlbnRDaGlsZChDYWxlbmRhck1vbnRoRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmfSlcbiAgICBjYWxlbmRhck1vbnRoOiBDYWxlbmRhck1vbnRoRGlyZWN0aXZlO1xuXG4gICAgY2FsZW5kYXI6IENhbGVuZGFyO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgICBnZXQgY2xhc3NlcygpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY29uZmlnLnN0eWxlUHJlZml4fS1jYWxlbmRhcmA7XG4gICAgfVxuXG4gICAgbmdEb0NoZWNrKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNhbGVuZGFyID0gbmV3IENhbGVuZGFyKG5ldyBDYWxlbmRhclZpZXdGYWN0b3J5KCksIHRoaXMuY29uZmlnKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbigpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgY29uZmlnQ2hhbmdlID0gY2hhbmdlc1snY29uZmlnJ107XG5cbiAgICAgICAgaWYgKHRoaXMuY2FsZW5kYXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXIucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZGF0ZXMuZm9yRWFjaChkYXkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsZW5kYXIuc2V0RGF5KGRheS5kYXRlLCBuZXcgQ2VsbERhdGEoZGF5LmRhdGUsIGRheS5wYXlsb2FkLCBkYXkuc2VsZWN0ZWQsIGRheS5kaXNhYmxlZCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjb25maWdDaGFuZ2UpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuY2FsZW5kYXIuY29uZmlnID0gdGhpcy5jb25maWc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIHVwZGF0ZVNlbGVjdGlvbigpIHtcbiAgICAgICAgc3dpdGNoICgodGhpcy5jb25maWcgYXMgQ2FsZW5kYXJWaWV3Q29uZmlnKS5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3NpbXBsZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmdlU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwaWNrZWQnOlxuICAgICAgICAgICAgICAgIHRoaXMucGlja1NlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWxlbmRhci5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICB0aGlzLmRhdGVzLmZvckVhY2goZGF5ID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXIuc2V0RGF5KGRheS5kYXRlLCBuZXcgQ2VsbERhdGEoZGF5LmRhdGUsIGRheS5wYXlsb2FkLCBkYXkuc2VsZWN0ZWQsIGRheS5kaXNhYmxlZCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjZWxsQ2xpY2tlZChkYXRhOiBDZWxsRGF0YTxhbnk+KSB7XG4gICAgICAgIGRhdGEuc2VsZWN0ZWQgPSAhZGF0YS5zZWxlY3RlZDtcbiAgICB9XG5cbiAgICBnZXRQYXlsb2FkKGRhdGU6IElEYXkpOiBhbnkge1xuICAgICAgICBjb25zdCBjZWxsRGF0YSA9IHRoaXMuZGF0ZXMuZmluZChkID0+IGQuZGF0ZSA9PT0gZGF0ZS5kYXRlKTtcbiAgICAgICAgcmV0dXJuIGNlbGxEYXRhID8gY2VsbERhdGEucGF5bG9hZCA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBkYXRlSW5jbHVkZWQoZGF0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVzLnNvbWUoZCA9PiBkLmRhdGUgPT09IGRhdGUpO1xuICAgIH1cblxuICAgIHNpbmdsZVNlbGVjdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uc2V0U3RyYXRlZ3kobmV3IFNpbmdsZVNlbGVjdGlvblN0cmF0ZWd5KCkpO1xuICAgIH1cblxuICAgIHJhbmdlU2VsZWN0aW9uKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5zZXRTdHJhdGVneShuZXcgUmFuZ2VTZWxlY3Rpb25TdHJhdGVneSgpKTtcbiAgICB9XG5cbiAgICBwaWNrU2VsZWN0aW9uKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5zZXRTdHJhdGVneShuZXcgUGlja1NlbGVjdGlvblN0cmF0ZWd5KCkpO1xuICAgIH1cblxuXG4gICAgZ2V0TW9udGhDb250ZXh0KG1vbnRoSW5kZXg6IG51bWJlcik6IE1vbnRoQ29udGV4dCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbmRleDogbW9udGhJbmRleCxcbiAgICAgICAgICAgIGNhbGVuZGFyOiB0aGlzLmNhbGVuZGFyLFxuICAgICAgICAgICAgc2VsZWN0aW9uOiB0aGlzLnNlbGVjdGlvbixcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICAgICAgICBtb250aFNlbGVjdGlvbjogbW9udGhJbmRleCA9PT0gMCA/IHRoaXMuc2VsZWN0aW9uLmNhbGVuZGFyTW9udGhWaWV3LmZyb20gOiB0aGlzLnNlbGVjdGlvbi5jYWxlbmRhck1vbnRoVmlldy50b1xuICAgICAgICB9IGFzIE1vbnRoQ29udGV4dDtcbiAgICB9XG5cbn1cblxuXG4iXX0=