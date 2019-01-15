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
        // console.log('calendar do check')
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log('calendar init')
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
        // console.log(this.calendar.getYear(2019).getMonth(0).days.map(day => day.disabled))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQTRCLE1BQU0sRUFDdkUsWUFBWSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBbUIsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUMvRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUMvRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFRbkYsTUFBTSxPQUFPLGlCQUFpQjtJQU45QjtRQU9JLGNBQVMsR0FBc0IsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQzlDLFVBQUssR0FBb0IsRUFBRSxDQUFDO1FBQzVCLFdBQU0sR0FBdUIsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBRXJELG9CQUFlLEdBQW9DLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDO1FBQ2xGLHlCQUFvQixHQUFvRCxJQUFJLENBQUMsU0FBUyxDQUFD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Q0FBNEY7O0lBQzVGLGlEQUFzSDs7SUFFdEgsMENBQTRCOztJQUU1QiwwQ0FDc0M7O0lBRXRDLHFDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENvbnRlbnRDaGlsZCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIFZpZXdFbmNhcHN1bGF0aW9uLCBEb0NoZWNrLCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci9jYWxlbmRhcic7XG5pbXBvcnQgeyBJRGF5IH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyL2RheS9kYXkuaW50ZXJmYWNlJztcbmltcG9ydCB7IENhbGVuZGFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vbGliL2NhbGVuZGFyLXZpZXcvc2VsZWN0aW9uL2NhbGVuZGFyLXNlbGVjdGlvbi5jbGFzcyc7XG5pbXBvcnQgeyBTaW5nbGVTZWxlY3Rpb25TdHJhdGVneSB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9zdHJhdGVneS9zaW1wbGUtc2VsZWN0aW9uLnN0cmF0ZWd5JztcbmltcG9ydCB7IFJhbmdlU2VsZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9zZWxlY3Rpb24vc3RyYXRlZ3kvcmFuZ2Utc2VsZWN0aW9uLnN0cmF0ZWd5JztcbmltcG9ydCB7IFBpY2tTZWxlY3Rpb25TdHJhdGVneSB9IGZyb20gJy4uLy4uL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9zdHJhdGVneS9waWNrLXNlbGVjdGlvbi5zdHJhdGVneSc7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXdDb25maWcgfSBmcm9tICcuLi8uLi9saWIvY2FsZW5kYXItdmlldy9jb25maWcvY2FsZW5kYXItdmlldy1jb25maWcuY2xhc3MnO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3RmFjdG9yeSB9IGZyb20gJy4uLy4uL2NhbGVuZGFyLXZpZXcuZmFjdG9yeSc7XG5pbXBvcnQgeyBNb250aENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L21vbnRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbERhdGEgfSBmcm9tICcuLi8uLi9jZWxsLWRhdGEnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItbW9udGguZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0cmItY2FsZW5kYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4uL3N0eWxlcy5zYXNzJywgJy4vY2FsZW5kYXIuY29tcG9uZW50LnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBEb0NoZWNrLCBPbkluaXQge1xuICAgIHNlbGVjdGlvbjogQ2FsZW5kYXJTZWxlY3Rpb24gPSBuZXcgQ2FsZW5kYXJTZWxlY3Rpb24oKTtcbiAgICBASW5wdXQoKSBkYXRlczogQ2VsbERhdGE8YW55PltdID0gW107XG4gICAgQElucHV0KCkgY29uZmlnOiBDYWxlbmRhclZpZXdDb25maWcgPSBuZXcgQ2FsZW5kYXJWaWV3Q29uZmlnKCk7XG5cbiAgICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJTZWxlY3Rpb24+ID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0aW9uQ2hhbmdlO1xuICAgIEBPdXRwdXQoKSBtb250aFNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPHsgcHJldmlvdXM6IERhdGUsIGN1cnJlbnQ6IERhdGUgfT4gPSB0aGlzLnNlbGVjdGlvbi5tb250aFNlbGVjdGlvbkNoYW5nZTtcblxuICAgIEBJbnB1dCgpIG1vbnRoVGVtcGxhdGU6IGFueTtcblxuICAgIEBDb250ZW50Q2hpbGQoQ2FsZW5kYXJNb250aERpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZn0pXG4gICAgY2FsZW5kYXJNb250aDogQ2FsZW5kYXJNb250aERpcmVjdGl2ZTtcblxuICAgIGNhbGVuZGFyOiBDYWxlbmRhcjtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICAgIGdldCBjbGFzc2VzKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jb25maWcuc3R5bGVQcmVmaXh9LWNhbGVuZGFyYDtcbiAgICB9XG5cbiAgICBuZ0RvQ2hlY2soKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjYWxlbmRhciBkbyBjaGVjaycpXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjYWxlbmRhciBpbml0JylcbiAgICAgICAgdGhpcy5jYWxlbmRhciA9IG5ldyBDYWxlbmRhcihuZXcgQ2FsZW5kYXJWaWV3RmFjdG9yeSgpLCB0aGlzLmNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rpb24oKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZ0NoYW5nZSA9IGNoYW5nZXNbJ2NvbmZpZyddO1xuXG4gICAgICAgIGlmICh0aGlzLmNhbGVuZGFyKSB7XG4gICAgICAgICAgICAvLyBsZXQgY2hhbmdlID0gY2hhbmdlc1snZGF0ZXMnXVxuXG4gICAgICAgICAgICAvLyBpZiAoY2hhbmdlKSB7XG5cbiAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gdGhpcy5jYWxlbmRhci5zZXREYXlzUGF5bG9hZCh0aGlzLmRhdGVzKVxuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXIucmVjYWxjdWxhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZGF0ZXMuZm9yRWFjaChkYXkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsZW5kYXIuc2V0RGF5KGRheS5kYXRlLCBuZXcgQ2VsbERhdGEoZGF5LmRhdGUsIGRheS5wYXlsb2FkLCBkYXkuc2VsZWN0ZWQsIGRheS5kaXNhYmxlZCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgaWYgKGNvbmZpZ0NoYW5nZSkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxlbmRhci5jb25maWcgPSB0aGlzLmNvbmZpZztcblxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgdXBkYXRlU2VsZWN0aW9uKCkge1xuICAgICAgICBzd2l0Y2ggKCh0aGlzLmNvbmZpZyBhcyBDYWxlbmRhclZpZXdDb25maWcpLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnc2ltcGxlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZVNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICAgICAgICAgIHRoaXMucmFuZ2VTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3BpY2tlZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5waWNrU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbGVuZGFyLnJlY2FsY3VsYXRlKCk7XG4gICAgICAgIHRoaXMuZGF0ZXMuZm9yRWFjaChkYXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRhci5zZXREYXkoZGF5LmRhdGUsIG5ldyBDZWxsRGF0YShkYXkuZGF0ZSwgZGF5LnBheWxvYWQsIGRheS5zZWxlY3RlZCwgZGF5LmRpc2FibGVkKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY2FsZW5kYXIuZ2V0WWVhcigyMDE5KS5nZXRNb250aCgwKS5kYXlzLm1hcChkYXkgPT4gZGF5LmRpc2FibGVkKSlcbiAgICB9XG5cbiAgICBjZWxsQ2xpY2tlZChkYXRhOiBDZWxsRGF0YTxhbnk+KSB7XG4gICAgICAgIGRhdGEuc2VsZWN0ZWQgPSAhZGF0YS5zZWxlY3RlZDtcbiAgICB9XG5cbiAgICBnZXRQYXlsb2FkKGRhdGU6IElEYXkpOiBhbnkge1xuICAgICAgICBjb25zdCBjZWxsRGF0YSA9IHRoaXMuZGF0ZXMuZmluZChkID0+IGQuZGF0ZSA9PT0gZGF0ZS5kYXRlKTtcbiAgICAgICAgcmV0dXJuIGNlbGxEYXRhID8gY2VsbERhdGEucGF5bG9hZCA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBkYXRlSW5jbHVkZWQoZGF0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVzLnNvbWUoZCA9PiBkLmRhdGUgPT09IGRhdGUpO1xuICAgIH1cblxuICAgIHNpbmdsZVNlbGVjdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uc2V0U3RyYXRlZ3kobmV3IFNpbmdsZVNlbGVjdGlvblN0cmF0ZWd5KCkpO1xuICAgIH1cblxuICAgIHJhbmdlU2VsZWN0aW9uKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5zZXRTdHJhdGVneShuZXcgUmFuZ2VTZWxlY3Rpb25TdHJhdGVneSgpKTtcbiAgICB9XG5cbiAgICBwaWNrU2VsZWN0aW9uKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5zZXRTdHJhdGVneShuZXcgUGlja1NlbGVjdGlvblN0cmF0ZWd5KCkpO1xuICAgIH1cblxuXG4gICAgZ2V0TW9udGhDb250ZXh0KG1vbnRoSW5kZXg6IG51bWJlcik6IE1vbnRoQ29udGV4dCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbmRleDogbW9udGhJbmRleCxcbiAgICAgICAgICAgIGNhbGVuZGFyOiB0aGlzLmNhbGVuZGFyLFxuICAgICAgICAgICAgc2VsZWN0aW9uOiB0aGlzLnNlbGVjdGlvbixcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICAgICAgICBtb250aFNlbGVjdGlvbjogbW9udGhJbmRleCA9PT0gMCA/IHRoaXMuc2VsZWN0aW9uLmNhbGVuZGFyTW9udGhWaWV3LmZyb20gOiB0aGlzLnNlbGVjdGlvbi5jYWxlbmRhck1vbnRoVmlldy50b1xuICAgICAgICB9IGFzIE1vbnRoQ29udGV4dDtcbiAgICB9XG5cbn1cblxuXG4iXX0=