/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, TemplateRef, ViewContainerRef, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { CellData } from '../cell-data';
export class CalendarCellDirective {
    /**
     * @param {?} template
     * @param {?} viewContainer
     */
    constructor(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
        this.click = new EventEmitter();
    }
    /**
     * @param {?} content
     * @return {?}
     */
    set trbCalendarCell(content) {
        if (content) {
            /** @type {?} */
            const ref = this.viewContainer
                .createEmbeddedView(this.template, { $implicit: content });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.click.emit(event);
    }
}
CalendarCellDirective.decorators = [
    { type: Directive, args: [{
                selector: '[trbCalendarCell]'
            },] }
];
/** @nocollapse */
CalendarCellDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
CalendarCellDirective.propDecorators = {
    trbCalendarCell: [{ type: Input }],
    click: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    CalendarCellDirective.prototype.click;
    /** @type {?} */
    CalendarCellDirective.prototype.template;
    /**
     * @type {?}
     * @private
     */
    CalendarCellDirective.prototype.viewContainer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItY2VsbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RyYi1jYWxlbmRhci8iLCJzb3VyY2VzIjpbInNyYy9kaXJlY3RpdmVzL2NhbGVuZGFyLWNlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBTXhDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBQzlCLFlBQW1CLFFBQTBCLEVBQ2pDLGFBQStCO1FBRHhCLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQ2pDLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQWNqQyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVZyQyxDQUFDOzs7OztJQUVELElBQ0ksZUFBZSxDQUFDLE9BQXNCO1FBQ3RDLElBQUksT0FBTyxFQUFFOztrQkFDSCxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWE7aUJBQzdCLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUM7U0FDN0Q7SUFDTCxDQUFDOzs7OztJQUtELE9BQU8sQ0FBQyxLQUFpQjtRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUF4QkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7YUFDaEM7Ozs7WUFObUIsV0FBVztZQUFFLGdCQUFnQjs7OzhCQWU1QyxLQUFLO29CQVFMLE1BQU07c0JBRU4sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQUZqQyxzQ0FBcUM7O0lBZnpCLHlDQUFpQzs7Ozs7SUFDekMsOENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgSW5wdXQsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENlbGxEYXRhIH0gZnJvbSAnLi4vY2VsbC1kYXRhJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t0cmJDYWxlbmRhckNlbGxdJ1xufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNlbGxEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PixcbiAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXG4gICAgKSB7XG5cblxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHRyYkNhbGVuZGFyQ2VsbChjb250ZW50OiBDZWxsRGF0YTxhbnk+KSB7XG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICBjb25zdCByZWYgPSB0aGlzLnZpZXdDb250YWluZXJcbiAgICAgICAgICAgIC5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZSwgeyAkaW1wbGljaXQ6IGNvbnRlbnQgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAT3V0cHV0KCkgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gICAgb25DbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICB0aGlzLmNsaWNrLmVtaXQoZXZlbnQpO1xuICAgIH1cbn1cbiJdfQ==