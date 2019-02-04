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
export class CalendarComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.selection = new CalendarSelection();
        this.dates = [];
        this.config = new CalendarViewConfig();
        this.selectionChange = this.selection.selectionChange;
        this.monthSelectionChange = this.selection.monthSelectionChange;
    }
    /**
     * @return {?}
     */
    get classes() {
        return `${this.config.stylePrefix}-calendar`;
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.calendar = new Calendar(new CalendarViewFactory(), this.config);
        this.updateSelection();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const configChange = changes['config'];
        if (this.calendar) {
            this.calendar.recalculate();
            this.dates.forEach(day => {
                this.calendar.setDay(day.date, new CellData(day.date, day.payload, day.selected, day.disabled));
            });
            if (configChange) {
                this.calendar.config = this.config;
                this.updateSelection();
            }
        }
    }
    /**
     * @return {?}
     */
    updateSelection() {
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
        this.dates.forEach(day => {
            this.calendar.setDay(day.date, new CellData(day.date, day.payload, day.selected, day.disabled));
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    cellClicked(data) {
        data.selected = !data.selected;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getPayload(date) {
        /** @type {?} */
        const cellData = this.dates.find(d => d.date === date.date);
        return cellData ? cellData.payload : undefined;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    dateIncluded(date) {
        return this.dates.some(d => d.date === date);
    }
    /**
     * @return {?}
     */
    singleSelection() {
        this.selection.setStrategy(new SingleSelectionStrategy());
    }
    /**
     * @return {?}
     */
    rangeSelection() {
        this.selection.setStrategy(new RangeSelectionStrategy());
    }
    /**
     * @return {?}
     */
    pickSelection() {
        this.selection.setStrategy(new PickSelectionStrategy());
    }
    /**
     * @param {?} monthIndex
     * @return {?}
     */
    getMonthContext(monthIndex) {
        return (/** @type {?} */ ({
            index: monthIndex,
            calendar: this.calendar,
            selection: this.selection,
            config: this.config,
            monthSelection: monthIndex === 0 ? this.selection.calendarMonthView.from : this.selection.calendarMonthView.to
        }));
    }
}
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
CalendarComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQTRCLE1BQU0sRUFDdkUsWUFBWSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBbUIsV0FBVyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hKLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUMvRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUMvRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFTbkYsTUFBTSxPQUFPLGlCQUFpQjs7OztJQWUxQixZQUFtQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWR6QyxjQUFTLEdBQXNCLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUM5QyxVQUFLLEdBQW9CLEVBQUUsQ0FBQztRQUM1QixXQUFNLEdBQXVCLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUVyRCxvQkFBZSxHQUFvQyxJ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OztJQUUvRCw0Q0FBNEY7O0lBQzVGLGlEQUFzSDs7SUFFdEgsMENBQTRCOztJQUU1QiwwQ0FDc0M7O0lBRXRDLHFDQUFtQjs7SUFFUCxnQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDb250ZW50Q2hpbGQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBWaWV3RW5jYXBzdWxhdGlvbiwgRG9DaGVjaywgT25Jbml0LCBUZW1wbGF0ZVJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci9jYWxlbmRhcic7XG5pbXBvcnQgeyBJRGF5IH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyL2RheS9kYXkuaW50ZXJmYWNlJztcbmltcG9ydCB7IENhbGVuZGFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvc2VsZWN0aW9uL2NhbGVuZGFyLXNlbGVjdGlvbi5jbGFzcyc7XG5pbXBvcnQgeyBTaW5nbGVTZWxlY3Rpb25TdHJhdGVneSB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9zdHJhdGVneS9zaW1wbGUtc2VsZWN0aW9uLnN0cmF0ZWd5JztcbmltcG9ydCB7IFJhbmdlU2VsZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9zZWxlY3Rpb24vc3RyYXRlZ3kvcmFuZ2Utc2VsZWN0aW9uLnN0cmF0ZWd5JztcbmltcG9ydCB7IFBpY2tTZWxlY3Rpb25TdHJhdGVneSB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9zdHJhdGVneS9waWNrLXNlbGVjdGlvbi5zdHJhdGVneSc7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXdDb25maWcgfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9jb25maWcvY2FsZW5kYXItdmlldy1jb25maWcuY2xhc3MnO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3RmFjdG9yeSB9IGZyb20gJy4uLy4uL2NhbGVuZGFyLXZpZXcuZmFjdG9yeSc7XG5pbXBvcnQgeyBNb250aENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L21vbnRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbERhdGEgfSBmcm9tICcuLi8uLi9jZWxsLWRhdGEnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItbW9udGguZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0cmItY2FsZW5kYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4uL3N0eWxlcy5zYXNzJywgJy4vY2FsZW5kYXIuY29tcG9uZW50LnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgRG9DaGVjaywgT25Jbml0IHtcbiAgICBzZWxlY3Rpb246IENhbGVuZGFyU2VsZWN0aW9uID0gbmV3IENhbGVuZGFyU2VsZWN0aW9uKCk7XG4gICAgQElucHV0KCkgZGF0ZXM6IENlbGxEYXRhPGFueT5bXSA9IFtdO1xuICAgIEBJbnB1dCgpIGNvbmZpZzogQ2FsZW5kYXJWaWV3Q29uZmlnID0gbmV3IENhbGVuZGFyVmlld0NvbmZpZygpO1xuXG4gICAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPENhbGVuZGFyU2VsZWN0aW9uPiA9IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGlvbkNoYW5nZTtcbiAgICBAT3V0cHV0KCkgbW9udGhTZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IHByZXZpb3VzOiBEYXRlLCBjdXJyZW50OiBEYXRlIH0+ID0gdGhpcy5zZWxlY3Rpb24ubW9udGhTZWxlY3Rpb25DaGFuZ2U7XG5cbiAgICBASW5wdXQoKSBtb250aFRlbXBsYXRlOiBhbnk7XG5cbiAgICBAQ29udGVudENoaWxkKENhbGVuZGFyTW9udGhEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWZ9KVxuICAgIGNhbGVuZGFyTW9udGg6IENhbGVuZGFyTW9udGhEaXJlY3RpdmU7XG5cbiAgICBjYWxlbmRhcjogQ2FsZW5kYXI7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICAgIGdldCBjbGFzc2VzKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jb25maWcuc3R5bGVQcmVmaXh9LWNhbGVuZGFyYDtcbiAgICB9XG5cbiAgICBuZ0RvQ2hlY2soKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY2FsZW5kYXIgPSBuZXcgQ2FsZW5kYXIobmV3IENhbGVuZGFyVmlld0ZhY3RvcnkoKSwgdGhpcy5jb25maWcpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBjb25zdCBjb25maWdDaGFuZ2UgPSBjaGFuZ2VzWydjb25maWcnXTtcblxuICAgICAgICBpZiAodGhpcy5jYWxlbmRhcikge1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRhci5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5kYXRlcy5mb3JFYWNoKGRheSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxlbmRhci5zZXREYXkoZGF5LmRhdGUsIG5ldyBDZWxsRGF0YShkYXkuZGF0ZSwgZGF5LnBheWxvYWQsIGRheS5zZWxlY3RlZCwgZGF5LmRpc2FibGVkKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbmZpZ0NoYW5nZSkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxlbmRhci5jb25maWcgPSB0aGlzLmNvbmZpZztcblxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgdXBkYXRlU2VsZWN0aW9uKCkge1xuICAgICAgICBzd2l0Y2ggKCh0aGlzLmNvbmZpZyBhcyBDYWxlbmRhclZpZXdDb25maWcpLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnc2ltcGxlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZVNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICAgICAgICAgIHRoaXMucmFuZ2VTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3BpY2tlZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5waWNrU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbGVuZGFyLnJlY2FsY3VsYXRlKCk7XG4gICAgICAgIHRoaXMuZGF0ZXMuZm9yRWFjaChkYXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRhci5zZXREYXkoZGF5LmRhdGUsIG5ldyBDZWxsRGF0YShkYXkuZGF0ZSwgZGF5LnBheWxvYWQsIGRheS5zZWxlY3RlZCwgZGF5LmRpc2FibGVkKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNlbGxDbGlja2VkKGRhdGE6IENlbGxEYXRhPGFueT4pIHtcbiAgICAgICAgZGF0YS5zZWxlY3RlZCA9ICFkYXRhLnNlbGVjdGVkO1xuICAgIH1cblxuICAgIGdldFBheWxvYWQoZGF0ZTogSURheSk6IGFueSB7XG4gICAgICAgIGNvbnN0IGNlbGxEYXRhID0gdGhpcy5kYXRlcy5maW5kKGQgPT4gZC5kYXRlID09PSBkYXRlLmRhdGUpO1xuICAgICAgICByZXR1cm4gY2VsbERhdGEgPyBjZWxsRGF0YS5wYXlsb2FkIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGRhdGVJbmNsdWRlZChkYXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZXMuc29tZShkID0+IGQuZGF0ZSA9PT0gZGF0ZSk7XG4gICAgfVxuXG4gICAgc2luZ2xlU2VsZWN0aW9uKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5zZXRTdHJhdGVneShuZXcgU2luZ2xlU2VsZWN0aW9uU3RyYXRlZ3koKSk7XG4gICAgfVxuXG4gICAgcmFuZ2VTZWxlY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLnNldFN0cmF0ZWd5KG5ldyBSYW5nZVNlbGVjdGlvblN0cmF0ZWd5KCkpO1xuICAgIH1cblxuICAgIHBpY2tTZWxlY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLnNldFN0cmF0ZWd5KG5ldyBQaWNrU2VsZWN0aW9uU3RyYXRlZ3koKSk7XG4gICAgfVxuXG5cbiAgICBnZXRNb250aENvbnRleHQobW9udGhJbmRleDogbnVtYmVyKTogTW9udGhDb250ZXh0IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluZGV4OiBtb250aEluZGV4LFxuICAgICAgICAgICAgY2FsZW5kYXI6IHRoaXMuY2FsZW5kYXIsXG4gICAgICAgICAgICBzZWxlY3Rpb246IHRoaXMuc2VsZWN0aW9uLFxuICAgICAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgICAgICAgIG1vbnRoU2VsZWN0aW9uOiBtb250aEluZGV4ID09PSAwID8gdGhpcy5zZWxlY3Rpb24uY2FsZW5kYXJNb250aFZpZXcuZnJvbSA6IHRoaXMuc2VsZWN0aW9uLmNhbGVuZGFyTW9udGhWaWV3LnRvXG4gICAgICAgIH0gYXMgTW9udGhDb250ZXh0O1xuICAgIH1cblxufVxuXG5cbiJdfQ==