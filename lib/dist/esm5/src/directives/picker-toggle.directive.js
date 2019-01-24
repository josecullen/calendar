/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Directive, HostListener, Input, TemplateRef, ElementRef, Output } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvZGlyZWN0aXZlcy9waWNrZXItdG9nZ2xlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBa0IsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQU03SDtJQXFESSwrQkFDWSxVQUEyQixFQUMzQixhQUE0QjtRQUQ1QixlQUFVLEdBQVYsVUFBVSxDQUFpQjtRQUMzQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQTdDeEMsV0FBTSxHQUFtQix1QkFBdUIsQ0FBQztRQU1qRCxvQkFBZSxHQUFvQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3RFLHlCQUFvQixHQUFvRCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzNGLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWtDOUMsQ0FBQzs7OztJQS9CRCxzQ0FBTTs7O0lBRE47UUFBQSxpQkFnQkM7O1lBZFMsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ2hDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQixFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUV2RCxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFFL0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUM7UUFDekYsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBcEMsQ0FBb0MsQ0FBQyxDQUFDO1FBRW5HLHlFQUF5RTtRQUV6RSxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNoQixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRUQsMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCOztZQUN4QixXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUVwQyxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDM0M7SUFDTCxDQUFDOztnQkFoREosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx5QkFBeUI7aUJBQ3RDOzs7O2dCQVZtRSxVQUFVO2dCQUNyRSxhQUFhOzs7MkJBYWpCLEtBQUssU0FBQyx1QkFBdUI7eUJBRzdCLEtBQUs7d0JBR0wsS0FBSztrQ0FHTCxNQUFNO3VDQUdOLE1BQU07d0JBR04sTUFBTTt5QkFHTixZQUFZLFNBQUMsT0FBTzs7SUFrQ3pCLDRCQUFDO0NBQUEsQUExREQsSUEwREM7U0F2RFkscUJBQXFCOzs7Ozs7SUFDOUIsMkNBQXdDOztJQUV4Qyx5Q0FDMkI7O0lBRTNCLHVDQUNpRDs7SUFFakQsc0NBQ3VCOztJQUV2QixnREFDc0U7O0lBRXRFLHFEQUMyRjs7SUFFM0Ysc0NBQzhDOzs7OztJQWdDMUMsMkNBQW1DOzs7OztJQUNuQyw4Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgVGVtcGxhdGVSZWYsIEVsZW1lbnRSZWYsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGlja2VyU2VydmljZSB9IGZyb20gJy4uL21vZHVsZXMvcGlja2VyL3BpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGVwaWNrZXJEYXRhLCBEYXRlcGlja2VyQ29tcG9uZW50LCBERUZBVUxUX0RBVEVQSUNLRVJfREFUQSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENhbGVuZGFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vbGliL2NhbGVuZGFyLXZpZXcvc2VsZWN0aW9uL2NhbGVuZGFyLXNlbGVjdGlvbi5jbGFzcyc7XG5pbXBvcnQgeyBDZWxsRGF0YSB9IGZyb20gJy4uL2NlbGwtZGF0YSc7XG5cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbdHJiLWRhdGVwaWNrZXItdG9nZ2xlXSdcbn0pXG5leHBvcnQgY2xhc3MgUGlja2VyVG9nZ2xlRGlyZWN0aXZlIHtcbiAgICBwcml2YXRlIGRhdGVwaWNrZXI6IERhdGVwaWNrZXJDb21wb25lbnQ7XG5cbiAgICBASW5wdXQoJ3RyYi1kYXRlcGlja2VyLXRvZ2dsZScpXG4gICAgbW9udGhSZWY6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBASW5wdXQoKVxuICAgIGNvbmZpZzogRGF0ZXBpY2tlckRhdGEgPSBERUZBVUxUX0RBVEVQSUNLRVJfREFUQTtcblxuICAgIEBJbnB1dCgpXG4gICAgZGF0ZXM6IENlbGxEYXRhPGFueT5bXTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPENhbGVuZGFyU2VsZWN0aW9uPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIG1vbnRoU2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBwcmV2aW91czogRGF0ZSwgY3VycmVudDogRGF0ZSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIGNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIGNvbnN0IHJlZiA9IHRoaXMucGlja2VyU2VydmljZS5vcGVuKHtcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuY29uZmlnXG4gICAgICAgIH0sIHRoaXMuZWxlbWVudFJlZiwgRGF0ZXBpY2tlckNvbXBvbmVudCwgdGhpcy5tb250aFJlZik7XG5cbiAgICAgICAgdGhpcy5kYXRlcGlja2VyID0gcmVmLmluc3RhbmNlO1xuXG4gICAgICAgIHJlZi5pbnN0YW5jZS5jYWxlbmRhci5zZWxlY3Rpb25DaGFuZ2Uuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChkYXRhKSk7XG4gICAgICAgIHJlZi5pbnN0YW5jZS5jYWxlbmRhci5tb250aFNlbGVjdGlvbkNoYW5nZS5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLm1vbnRoU2VsZWN0aW9uQ2hhbmdlLmVtaXQoZGF0YSkpO1xuXG4gICAgICAgIC8vIHRoaXMubW9udGhTZWxlY3Rpb25DaGFuZ2UgPSByZWYuaW5zdGFuY2UuY2FsZW5kYXIubW9udGhTZWxlY3Rpb25DaGFuZ2VcblxuICAgICAgICByZWYuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlLmVtaXQocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBjb25zdCBkYXRlc0NoYW5nZSA9IGNoYW5nZXNbJ2RhdGVzJ107XG5cbiAgICAgICAgaWYgKGRhdGVzQ2hhbmdlICYmIHRoaXMuZGF0ZXMgJiYgdGhpcy5kYXRlcGlja2VyKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGVwaWNrZXIuZGF0YS5kYXRlcyA9IHRoaXMuZGF0ZXM7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPGFueT4sXG4gICAgICAgIHByaXZhdGUgcGlja2VyU2VydmljZTogUGlja2VyU2VydmljZSkge1xuICAgIH1cblxufVxuIl19