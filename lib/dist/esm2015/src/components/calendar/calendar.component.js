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
export class CalendarComponent {
    constructor() {
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
            // let change = changes['dates']
            // if (change) {
            // setTimeout(() => {
            // this.calendar.setDaysPayload(this.dates)
            // })
            this.calendar.recalculate();
            this.dates.forEach(day => {
                this.calendar.setDay(day.date, new CellData(day.date, day.payload, day.selected, day.disabled));
            });
            // }
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
                template: "<ng-container *ngIf=\"monthTemplate || calendarMonth else defaultMonths\">\n    <ng-container *ngTemplateOutlet=\"monthTemplate || calendarMonth; context: { $implicit : getMonthContext(0) }\">\n    </ng-container>\n\n    <ng-container *ngTemplateOutlet=\"monthTemplate || calendarMonth; context: { $implicit : getMonthContext(1) }\">\n    </ng-container>\n</ng-container>\n\n<ng-template #defaultMonths>\n    <trb-calendar-month [context]=\"getMonthContext(0)\">\n    </trb-calendar-month>\n\n    <trb-calendar-month *ngIf=\"selection.calendarMonthView.needTwoMonthView && calendar.config.month.showTwoCalendarIfNeed\"\n        [context]=\"getMonthContext(1)\">\n    </trb-calendar-month>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["*{font-family:sans-serif;color:#333;font-size:14px}.price{color:green;font-size:10px}.trb-calendar-arrow{border:solid #666;border-width:0 2px 2px 0;display:inline-block;padding:4px}.trb-calendar-arrow.trb-calendar-arrow-right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.trb-calendar-arrow.trb-calendar-arrow-left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.clickeable{cursor:pointer}.trb-calendar{display:flex;flex-wrap:wrap}.trb-calendar-month{margin:0 10px}.trb-calendar-header{height:16px}.trb-calendar-header .trb-calendar-header-buttons{padding:0 12px}.trb-calendar-row{display:flex}.trb-calendar-day-labels{padding:4px 0;font-size:12px}.trb-calendar-day-labels .day-label{flex:1;position:relative;text-align:center;padding:8px 0}.trb-calendar-cell{font-family:ProximaNova,sans-serif;position:relative;min-width:38px;min-height:38px;text-align:center;display:block;line-height:30px;align-items:center}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay{background:#e4e7e7;width:100%;height:100%;top:0;left:0;position:absolute;opacity:.1}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay:hover{background:#666;cursor:pointer}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month){background-color:#17a45f}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .label,.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .my-price{color:#fff}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-from{border-top-left-radius:4px;border-bottom-left-radius:4px}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-to{border-top-right-radius:4px;border-bottom-right-radius:4px}.trb-calendar-cell.trb-calendar-cell-past .label{color:rgba(0,0,0,.1)}.trb-calendar-cell.trb-calendar-cell-in-range:not(.trb-calendar-cell-outside-month){background-color:#d3ecd3}.trb-calendar-cell.trb-calendar-cell-disabled{background-color:#ccc;cursor:not-allowed}.trb-calendar-cell.trb-calendar-cell-disabled .label{color:rgba(0,0,0,.1)}", ""]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQTRCLE1BQU0sRUFDdkUsWUFBWSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBbUIsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUMvRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUMvRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFRbkYsTUFBTSxPQUFPLGlCQUFpQjtJQU45QjtRQU9JLGNBQVMsR0FBc0IsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQzlDLFVBQUssR0FBb0IsRUFBRSxDQUFDO1FBQzVCLFdBQU0sR0FBdUIsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBRXJELG9CQUFlLEdBQW9DLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDO1FBQ2xGLHlCQUFvQixHQUFvRCxJQUFJLENBQUMsU0FBUyxDQUFD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QiwwQ0FDc0M7O0lBRXRDLHFDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENvbnRlbnRDaGlsZCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIFZpZXdFbmNhcHN1bGF0aW9uLCBEb0NoZWNrLCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci9jYWxlbmRhcic7XG5pbXBvcnQgeyBJRGF5IH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyL2RheS9kYXkuaW50ZXJmYWNlJztcbmltcG9ydCB7IENhbGVuZGFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvc2VsZWN0aW9uL2NhbGVuZGFyLXNlbGVjdGlvbi5jbGFzcyc7XG5pbXBvcnQgeyBTaW5nbGVTZWxlY3Rpb25TdHJhdGVneSB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9zdHJhdGVneS9zaW1wbGUtc2VsZWN0aW9uLnN0cmF0ZWd5JztcbmltcG9ydCB7IFJhbmdlU2VsZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9zZWxlY3Rpb24vc3RyYXRlZ3kvcmFuZ2Utc2VsZWN0aW9uLnN0cmF0ZWd5JztcbmltcG9ydCB7IFBpY2tTZWxlY3Rpb25TdHJhdGVneSB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9zdHJhdGVneS9waWNrLXNlbGVjdGlvbi5zdHJhdGVneSc7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXdDb25maWcgfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9jb25maWcvY2FsZW5kYXItdmlldy1jb25maWcuY2xhc3MnO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3RmFjdG9yeSB9IGZyb20gJy4uLy4uL2NhbGVuZGFyLXZpZXcuZmFjdG9yeSc7XG5pbXBvcnQgeyBNb250aENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L21vbnRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbERhdGEgfSBmcm9tICcuLi8uLi9jZWxsLWRhdGEnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItbW9udGguZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0cmItY2FsZW5kYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4uL3N0eWxlcy5zYXNzJywgJy4vY2FsZW5kYXIuY29tcG9uZW50LnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBEb0NoZWNrLCBPbkluaXQge1xuICAgIHNlbGVjdGlvbjogQ2FsZW5kYXJTZWxlY3Rpb24gPSBuZXcgQ2FsZW5kYXJTZWxlY3Rpb24oKTtcbiAgICBASW5wdXQoKSBkYXRlczogQ2VsbERhdGE8YW55PltdID0gW107XG4gICAgQElucHV0KCkgY29uZmlnOiBDYWxlbmRhclZpZXdDb25maWcgPSBuZXcgQ2FsZW5kYXJWaWV3Q29uZmlnKCk7XG5cbiAgICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJTZWxlY3Rpb24+ID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0aW9uQ2hhbmdlO1xuICAgIEBPdXRwdXQoKSBtb250aFNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPHsgcHJldmlvdXM6IERhdGUsIGN1cnJlbnQ6IERhdGUgfT4gPSB0aGlzLnNlbGVjdGlvbi5tb250aFNlbGVjdGlvbkNoYW5nZTtcblxuICAgIEBJbnB1dCgpIG1vbnRoVGVtcGxhdGU6IGFueTtcblxuICAgIEBDb250ZW50Q2hpbGQoQ2FsZW5kYXJNb250aERpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZn0pXG4gICAgY2FsZW5kYXJNb250aDogQ2FsZW5kYXJNb250aERpcmVjdGl2ZTtcblxuICAgIGNhbGVuZGFyOiBDYWxlbmRhcjtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICAgIGdldCBjbGFzc2VzKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jb25maWcuc3R5bGVQcmVmaXh9LWNhbGVuZGFyYDtcbiAgICB9XG5cbiAgICBuZ0RvQ2hlY2soKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY2FsZW5kYXIgPSBuZXcgQ2FsZW5kYXIobmV3IENhbGVuZGFyVmlld0ZhY3RvcnkoKSwgdGhpcy5jb25maWcpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBjb25zdCBjb25maWdDaGFuZ2UgPSBjaGFuZ2VzWydjb25maWcnXTtcblxuICAgICAgICBpZiAodGhpcy5jYWxlbmRhcikge1xuICAgICAgICAgICAgLy8gbGV0IGNoYW5nZSA9IGNoYW5nZXNbJ2RhdGVzJ11cblxuICAgICAgICAgICAgLy8gaWYgKGNoYW5nZSkge1xuXG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIHRoaXMuY2FsZW5kYXIuc2V0RGF5c1BheWxvYWQodGhpcy5kYXRlcylcbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyLnJlY2FsY3VsYXRlKCk7XG4gICAgICAgICAgICB0aGlzLmRhdGVzLmZvckVhY2goZGF5ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFyLnNldERheShkYXkuZGF0ZSwgbmV3IENlbGxEYXRhKGRheS5kYXRlLCBkYXkucGF5bG9hZCwgZGF5LnNlbGVjdGVkLCBkYXkuZGlzYWJsZWQpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIGlmIChjb25maWdDaGFuZ2UpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuY2FsZW5kYXIuY29uZmlnID0gdGhpcy5jb25maWc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIHVwZGF0ZVNlbGVjdGlvbigpIHtcbiAgICAgICAgc3dpdGNoICgodGhpcy5jb25maWcgYXMgQ2FsZW5kYXJWaWV3Q29uZmlnKS5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3NpbXBsZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmdlU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwaWNrZWQnOlxuICAgICAgICAgICAgICAgIHRoaXMucGlja1NlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWxlbmRhci5yZWNhbGN1bGF0ZSgpO1xuICAgICAgICB0aGlzLmRhdGVzLmZvckVhY2goZGF5ID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXIuc2V0RGF5KGRheS5kYXRlLCBuZXcgQ2VsbERhdGEoZGF5LmRhdGUsIGRheS5wYXlsb2FkLCBkYXkuc2VsZWN0ZWQsIGRheS5kaXNhYmxlZCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjZWxsQ2xpY2tlZChkYXRhOiBDZWxsRGF0YTxhbnk+KSB7XG4gICAgICAgIGRhdGEuc2VsZWN0ZWQgPSAhZGF0YS5zZWxlY3RlZDtcbiAgICB9XG5cbiAgICBnZXRQYXlsb2FkKGRhdGU6IElEYXkpOiBhbnkge1xuICAgICAgICBjb25zdCBjZWxsRGF0YSA9IHRoaXMuZGF0ZXMuZmluZChkID0+IGQuZGF0ZSA9PT0gZGF0ZS5kYXRlKTtcbiAgICAgICAgcmV0dXJuIGNlbGxEYXRhID8gY2VsbERhdGEucGF5bG9hZCA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBkYXRlSW5jbHVkZWQoZGF0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVzLnNvbWUoZCA9PiBkLmRhdGUgPT09IGRhdGUpO1xuICAgIH1cblxuICAgIHNpbmdsZVNlbGVjdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uc2V0U3RyYXRlZ3kobmV3IFNpbmdsZVNlbGVjdGlvblN0cmF0ZWd5KCkpO1xuICAgIH1cblxuICAgIHJhbmdlU2VsZWN0aW9uKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5zZXRTdHJhdGVneShuZXcgUmFuZ2VTZWxlY3Rpb25TdHJhdGVneSgpKTtcbiAgICB9XG5cbiAgICBwaWNrU2VsZWN0aW9uKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5zZXRTdHJhdGVneShuZXcgUGlja1NlbGVjdGlvblN0cmF0ZWd5KCkpO1xuICAgIH1cblxuXG4gICAgZ2V0TW9udGhDb250ZXh0KG1vbnRoSW5kZXg6IG51bWJlcik6IE1vbnRoQ29udGV4dCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbmRleDogbW9udGhJbmRleCxcbiAgICAgICAgICAgIGNhbGVuZGFyOiB0aGlzLmNhbGVuZGFyLFxuICAgICAgICAgICAgc2VsZWN0aW9uOiB0aGlzLnNlbGVjdGlvbixcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICAgICAgICBtb250aFNlbGVjdGlvbjogbW9udGhJbmRleCA9PT0gMCA/IHRoaXMuc2VsZWN0aW9uLmNhbGVuZGFyTW9udGhWaWV3LmZyb20gOiB0aGlzLnNlbGVjdGlvbi5jYWxlbmRhck1vbnRoVmlldy50b1xuICAgICAgICB9IGFzIE1vbnRoQ29udGV4dDtcbiAgICB9XG5cbn1cblxuXG4iXX0=