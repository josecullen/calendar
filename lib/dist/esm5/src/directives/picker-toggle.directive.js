/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Directive, HostListener, Input, TemplateRef, ElementRef, Output } from "@angular/core";
import { PickerService } from '../modules/picker/picker.service';
import { DatepickerComponent, DEFAULT_DATEPICKER_DATA } from '../components/datepicker/datepicker.component';
var PickerToggleDirective = /** @class */ (function () {
    function PickerToggleDirective(elementRef, pickerService) {
        this.elementRef = elementRef;
        this.pickerService = pickerService;
        this.config = DEFAULT_DATEPICKER_DATA;
        this.selectionChange = new EventEmitter();
        this.monthSelectionChange = new EventEmitter();
        this.close = new EventEmitter();
    }
    /**
     * @return {?}
     */
    PickerToggleDirective.prototype.toggle = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var ref = this.pickerService.open({
            data: this.config
        }, this.elementRef, DatepickerComponent, this.monthRef);
        this.datepicker = ref.instance;
        ref.instance.calendar.selectionChange.subscribe(function (data) { return _this.selectionChange.emit(data); });
        ref.instance.calendar.monthSelectionChange.subscribe(function (data) { return _this.monthSelectionChange.emit(data); });
        // this.monthSelectionChange = ref.instance.calendar.monthSelectionChange
        ref.subscribe(function (result) {
            _this.close.emit(result);
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PickerToggleDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var datesChange = changes['dates'];
        if (datesChange && this.dates && this.datepicker) {
            this.datepicker.data.dates = this.dates;
        }
    };
    PickerToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[trb-datepicker-toggle]'
                },] }
    ];
    /** @nocollapse */
    PickerToggleDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: PickerService }
    ]; };
    PickerToggleDirective.propDecorators = {
        monthRef: [{ type: Input, args: ['trb-datepicker-toggle',] }],
        config: [{ type: Input }],
        dates: [{ type: Input }],
        selectionChange: [{ type: Output }],
        monthSelectionChange: [{ type: Output }],
        close: [{ type: Output }],
        toggle: [{ type: HostListener, args: ['click',] }]
    };
    return PickerToggleDirective;
}());
export { PickerToggleDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PickerToggleDirective.prototype.datepicker;
    /** @type {?} */
    PickerToggleDirective.prototype.monthRef;
    /** @type {?} */
    PickerToggleDirective.prototype.config;
    /** @type {?} */
    PickerToggleDirective.prototype.dates;
    /** @type {?} */
    PickerToggleDirective.prototype.selectionChange;
    /** @type {?} */
    PickerToggleDirective.prototype.monthSelectionChange;
    /** @type {?} */
    PickerToggleDirective.prototype.close;
    /**
     * @type {?}
     * @private
     */
    PickerToggleDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    PickerToggleDirective.prototype.pickerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvZGlyZWN0aXZlcy9waWNrZXItdG9nZ2xlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBa0IsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQU03SDtJQXFESSwrQkFDWSxVQUEyQixFQUMzQixhQUE0QjtRQUQ1QixlQUFVLEdBQVYsVUFBVSxDQUFpQjtRQUMzQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQTdDeEMsV0FBTSxHQUFtQix1QkFBdUIsQ0FBQTtRQU1oRCxvQkFBZSxHQUFtQyxJQUFJLFlBQVksRUFBRSxDQUFBO1FBR3BFLHlCQUFvQixHQUFtRCxJQUFJLFlBQVksRUFBRSxDQUFBO1FBR3pGLFVBQUssR0FBcUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQWtDNUMsQ0FBQzs7OztJQS9CRCxzQ0FBTTs7O0lBRE47UUFBQSxpQkFnQkM7O1lBZFMsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ2hDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQixFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUV2RCxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7UUFFOUIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUE7UUFDeEYsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBcEMsQ0FBb0MsQ0FBQyxDQUFBO1FBRWxHLHlFQUF5RTtRQUV6RSxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNoQixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMzQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Ozs7O0lBRUQsMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXFCOztZQUN2QixXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUVwQyxJQUFHLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUM7WUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7U0FDMUM7SUFDTCxDQUFDOztnQkFoREosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx5QkFBeUI7aUJBQ3RDOzs7O2dCQVZtRSxVQUFVO2dCQUNyRSxhQUFhOzs7MkJBYWpCLEtBQUssU0FBQyx1QkFBdUI7eUJBRzdCLEtBQUs7d0JBR0wsS0FBSztrQ0FHTCxNQUFNO3VDQUdOLE1BQU07d0JBR04sTUFBTTt5QkFHTixZQUFZLFNBQUMsT0FBTzs7SUFrQ3pCLDRCQUFDO0NBQUEsQUExREQsSUEwREM7U0F2RFkscUJBQXFCOzs7Ozs7SUFDOUIsMkNBQXNDOztJQUV0Qyx5Q0FDMEI7O0lBRTFCLHVDQUNnRDs7SUFFaEQsc0NBQ3FCOztJQUVyQixnREFDb0U7O0lBRXBFLHFEQUN5Rjs7SUFFekYsc0NBQzRDOzs7OztJQWdDeEMsMkNBQW1DOzs7OztJQUNuQyw4Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgVGVtcGxhdGVSZWYsIEVsZW1lbnRSZWYsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kdWxlcy9waWNrZXIvcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZXBpY2tlckRhdGEsIERhdGVwaWNrZXJDb21wb25lbnQsIERFRkFVTFRfREFURVBJQ0tFUl9EQVRBIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ2FsZW5kYXJTZWxlY3Rpb24gfSBmcm9tICcuLi9saWIvY2FsZW5kYXItdmlldy9zZWxlY3Rpb24vY2FsZW5kYXItc2VsZWN0aW9uLmNsYXNzJztcbmltcG9ydCB7IENlbGxEYXRhIH0gZnJvbSAnLi4vY2VsbC1kYXRhJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t0cmItZGF0ZXBpY2tlci10b2dnbGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBQaWNrZXJUb2dnbGVEaXJlY3RpdmUge1xuICAgIHByaXZhdGUgZGF0ZXBpY2tlcjpEYXRlcGlja2VyQ29tcG9uZW50XG5cbiAgICBASW5wdXQoJ3RyYi1kYXRlcGlja2VyLXRvZ2dsZScpXG4gICAgbW9udGhSZWY6IFRlbXBsYXRlUmVmPGFueT5cblxuICAgIEBJbnB1dCgpXG4gICAgY29uZmlnOiBEYXRlcGlja2VyRGF0YSA9IERFRkFVTFRfREFURVBJQ0tFUl9EQVRBXG5cbiAgICBASW5wdXQoKVxuICAgIGRhdGVzOkNlbGxEYXRhPGFueT5bXVxuXG4gICAgQE91dHB1dCgpXG4gICAgc2VsZWN0aW9uQ2hhbmdlOkV2ZW50RW1pdHRlcjxDYWxlbmRhclNlbGVjdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICBcbiAgICBAT3V0cHV0KClcbiAgICBtb250aFNlbGVjdGlvbkNoYW5nZTpFdmVudEVtaXR0ZXI8eyBwcmV2aW91czogRGF0ZSwgY3VycmVudDogRGF0ZSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gICAgQE91dHB1dCgpXG4gICAgY2xvc2U6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIGNvbnN0IHJlZiA9IHRoaXMucGlja2VyU2VydmljZS5vcGVuKHtcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuY29uZmlnXG4gICAgICAgIH0sIHRoaXMuZWxlbWVudFJlZiwgRGF0ZXBpY2tlckNvbXBvbmVudCwgdGhpcy5tb250aFJlZilcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlciA9IHJlZi5pbnN0YW5jZVxuICAgICAgICBcbiAgICAgICAgcmVmLmluc3RhbmNlLmNhbGVuZGFyLnNlbGVjdGlvbkNoYW5nZS5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KGRhdGEpKVxuICAgICAgICByZWYuaW5zdGFuY2UuY2FsZW5kYXIubW9udGhTZWxlY3Rpb25DaGFuZ2Uuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5tb250aFNlbGVjdGlvbkNoYW5nZS5lbWl0KGRhdGEpKVxuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy5tb250aFNlbGVjdGlvbkNoYW5nZSA9IHJlZi5pbnN0YW5jZS5jYWxlbmRhci5tb250aFNlbGVjdGlvbkNoYW5nZVxuICAgICAgICBcbiAgICAgICAgcmVmLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZS5lbWl0KHJlc3VsdClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOlNpbXBsZUNoYW5nZXMpe1xuICAgICAgICBjb25zdCBkYXRlc0NoYW5nZSA9IGNoYW5nZXNbJ2RhdGVzJ11cblxuICAgICAgICBpZihkYXRlc0NoYW5nZSAmJiB0aGlzLmRhdGVzICYmIHRoaXMuZGF0ZXBpY2tlcil7XG4gICAgICAgICAgICB0aGlzLmRhdGVwaWNrZXIuZGF0YS5kYXRlcyA9IHRoaXMuZGF0ZXNcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8YW55PixcbiAgICAgICAgcHJpdmF0ZSBwaWNrZXJTZXJ2aWNlOiBQaWNrZXJTZXJ2aWNlKSB7XG4gICAgfVxuXG59Il19