/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, TemplateRef, ViewContainerRef, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { CellData } from '../cell-data';
var CalendarCellDirective = /** @class */ (function () {
    function CalendarCellDirective(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
        this.click = new EventEmitter();
    }
    Object.defineProperty(CalendarCellDirective.prototype, "trbCalendarCell", {
        set: /**
         * @param {?} content
         * @return {?}
         */
        function (content) {
            if (content) {
                /** @type {?} */
                var ref = this.viewContainer
                    .createEmbeddedView(this.template, { $implicit: content });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarCellDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.click.emit(event);
    };
    CalendarCellDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[trbCalendarCell]'
                },] }
    ];
    /** @nocollapse */
    CalendarCellDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    CalendarCellDirective.propDecorators = {
        trbCalendarCell: [{ type: Input }],
        click: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return CalendarCellDirective;
}());
export { CalendarCellDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItY2VsbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RyYi1jYWxlbmRhci8iLCJzb3VyY2VzIjpbInNyYy9kaXJlY3RpdmVzL2NhbGVuZGFyLWNlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR3hDO0lBSUksK0JBQW1CLFFBQTBCLEVBQ2pDLGFBQStCO1FBRHhCLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQ2pDLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQWNqQyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVZyQyxDQUFDO0lBRUQsc0JBQ0ksa0RBQWU7Ozs7O1FBRG5CLFVBQ29CLE9BQXNCO1lBQ3RDLElBQUksT0FBTyxFQUFFOztvQkFDSCxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWE7cUJBQzdCLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDN0Q7UUFDTCxDQUFDOzs7T0FBQTs7Ozs7SUFLRCx1Q0FBTzs7OztJQURQLFVBQ1EsS0FBaUI7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBeEJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2lCQUNoQzs7OztnQkFObUIsV0FBVztnQkFBRSxnQkFBZ0I7OztrQ0FlNUMsS0FBSzt3QkFRTCxNQUFNOzBCQUVOLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBSXJDLDRCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F0QlkscUJBQXFCOzs7SUFnQjlCLHNDQUFxQzs7SUFmekIseUNBQWlDOzs7OztJQUN6Qyw4Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBJbnB1dCwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2VsbERhdGEgfSBmcm9tICcuLi9jZWxsLWRhdGEnO1xuXG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3RyYkNhbGVuZGFyQ2VsbF0nXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ2VsbERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcbiAgICApIHtcblxuXG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgdHJiQ2FsZW5kYXJDZWxsKGNvbnRlbnQ6IENlbGxEYXRhPGFueT4pIHtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlZiA9IHRoaXMudmlld0NvbnRhaW5lclxuICAgICAgICAgICAgLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlLCB7ICRpbXBsaWNpdDogY29udGVudCB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBPdXRwdXQoKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMuY2xpY2suZW1pdChldmVudCk7XG4gICAgfVxufVxuIl19