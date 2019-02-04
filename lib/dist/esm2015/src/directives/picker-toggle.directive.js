/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Directive, HostListener, Input, TemplateRef, ElementRef, Output } from '@angular/core';
import { PickerService } from '../modules/picker/picker.service';
import { DatepickerComponent, DEFAULT_DATEPICKER_DATA } from '../components/datepicker/datepicker.component';
export class PickerToggleDirective {
    /**
     * @param {?} elementRef
     * @param {?} pickerService
     */
    constructor(elementRef, pickerService) {
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
    toggle() {
        /** @type {?} */
        const ref = this.pickerService.open({
            data: this.config
        }, this.elementRef, DatepickerComponent, this.monthRef);
        this.datepicker = ref.instance;
        ref.instance.calendar.selectionChange.subscribe(data => this.selectionChange.emit(data));
        ref.instance.calendar.monthSelectionChange.subscribe(data => this.monthSelectionChange.emit(data));
        // this.monthSelectionChange = ref.instance.calendar.monthSelectionChange
        ref.subscribe(result => {
            this.close.emit(result);
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const datesChange = changes['dates'];
        if (datesChange && this.dates && this.datepicker) {
            this.datepicker.data.dates = this.dates;
        }
    }
}
PickerToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[trb-datepicker-toggle]'
            },] }
];
/** @nocollapse */
PickerToggleDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: PickerService }
];
PickerToggleDirective.propDecorators = {
    monthRef: [{ type: Input, args: ['trb-datepicker-toggle',] }],
    config: [{ type: Input }],
    dates: [{ type: Input }],
    selectionChange: [{ type: Output }],
    monthSelectionChange: [{ type: Output }],
    close: [{ type: Output }],
    toggle: [{ type: HostListener, args: ['click',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvZGlyZWN0aXZlcy9waWNrZXItdG9nZ2xlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDeEksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBa0IsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQVM3SCxNQUFNLE9BQU8scUJBQXFCOzs7OztJQWtEOUIsWUFDWSxVQUEyQixFQUMzQixhQUE0QjtRQUQ1QixlQUFVLEdBQVYsVUFBVSxDQUFpQjtRQUMzQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQTdDeEMsV0FBTSxHQUFtQix1QkFBdUIsQ0FBQztRQU1qRCxvQkFBZSxHQUFvQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3RFLHlCQUFvQixHQUFvRCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzNGLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWtDOUMsQ0FBQzs7OztJQS9CRCxNQUFNOztjQUVJLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztZQUNoQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLG1CQUFtQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFdkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBRS9CLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVuRyx5RUFBeUU7UUFDekUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCOztjQUN4QixXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUVwQyxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDM0M7SUFDTCxDQUFDOzs7WUFoREosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx5QkFBeUI7YUFDdEM7Ozs7WUFWbUUsVUFBVTtZQUNyRSxhQUFhOzs7dUJBYWpCLEtBQUssU0FBQyx1QkFBdUI7cUJBRzdCLEtBQUs7b0JBR0wsS0FBSzs4QkFHTCxNQUFNO21DQUdOLE1BQU07b0JBR04sTUFBTTtxQkFHTixZQUFZLFNBQUMsT0FBTzs7Ozs7OztJQXBCckIsMkNBQXdDOztJQUV4Qyx5Q0FDMkI7O0lBRTNCLHVDQUNpRDs7SUFFakQsc0NBQ3VCOztJQUV2QixnREFDc0U7O0lBRXRFLHFEQUMyRjs7SUFFM0Ysc0NBQzhDOzs7OztJQWdDMUMsMkNBQW1DOzs7OztJQUNuQyw4Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgVGVtcGxhdGVSZWYsIEVsZW1lbnRSZWYsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kdWxlcy9waWNrZXIvcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZXBpY2tlckRhdGEsIERhdGVwaWNrZXJDb21wb25lbnQsIERFRkFVTFRfREFURVBJQ0tFUl9EQVRBIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ2FsZW5kYXJTZWxlY3Rpb24gfSBmcm9tICcuLi9saWIvY2FsZW5kYXItdmlldy9zZWxlY3Rpb24vY2FsZW5kYXItc2VsZWN0aW9uLmNsYXNzJztcbmltcG9ydCB7IENlbGxEYXRhIH0gZnJvbSAnLi4vY2VsbC1kYXRhJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t0cmItZGF0ZXBpY2tlci10b2dnbGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBQaWNrZXJUb2dnbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIHByaXZhdGUgZGF0ZXBpY2tlcjogRGF0ZXBpY2tlckNvbXBvbmVudDtcblxuICAgIEBJbnB1dCgndHJiLWRhdGVwaWNrZXItdG9nZ2xlJylcbiAgICBtb250aFJlZjogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBJbnB1dCgpXG4gICAgY29uZmlnOiBEYXRlcGlja2VyRGF0YSA9IERFRkFVTFRfREFURVBJQ0tFUl9EQVRBO1xuXG4gICAgQElucHV0KClcbiAgICBkYXRlczogQ2VsbERhdGE8YW55PltdO1xuXG4gICAgQE91dHB1dCgpXG4gICAgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJTZWxlY3Rpb24+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgbW9udGhTZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IHByZXZpb3VzOiBEYXRlLCBjdXJyZW50OiBEYXRlIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICAgIHRvZ2dsZSgpIHtcblxuICAgICAgICBjb25zdCByZWYgPSB0aGlzLnBpY2tlclNlcnZpY2Uub3Blbih7XG4gICAgICAgICAgICBkYXRhOiB0aGlzLmNvbmZpZ1xuICAgICAgICB9LCB0aGlzLmVsZW1lbnRSZWYsIERhdGVwaWNrZXJDb21wb25lbnQsIHRoaXMubW9udGhSZWYpO1xuXG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlciA9IHJlZi5pbnN0YW5jZTtcblxuICAgICAgICByZWYuaW5zdGFuY2UuY2FsZW5kYXIuc2VsZWN0aW9uQ2hhbmdlLnN1YnNjcmliZShkYXRhID0+IHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoZGF0YSkpO1xuICAgICAgICByZWYuaW5zdGFuY2UuY2FsZW5kYXIubW9udGhTZWxlY3Rpb25DaGFuZ2Uuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5tb250aFNlbGVjdGlvbkNoYW5nZS5lbWl0KGRhdGEpKTtcblxuICAgICAgICAvLyB0aGlzLm1vbnRoU2VsZWN0aW9uQ2hhbmdlID0gcmVmLmluc3RhbmNlLmNhbGVuZGFyLm1vbnRoU2VsZWN0aW9uQ2hhbmdlXG4gICAgICAgIHJlZi5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UuZW1pdChyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IGRhdGVzQ2hhbmdlID0gY2hhbmdlc1snZGF0ZXMnXTtcblxuICAgICAgICBpZiAoZGF0ZXNDaGFuZ2UgJiYgdGhpcy5kYXRlcyAmJiB0aGlzLmRhdGVwaWNrZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZXBpY2tlci5kYXRhLmRhdGVzID0gdGhpcy5kYXRlcztcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8YW55PixcbiAgICAgICAgcHJpdmF0ZSBwaWNrZXJTZXJ2aWNlOiBQaWNrZXJTZXJ2aWNlKSB7XG4gICAgfVxuXG59XG4iXX0=