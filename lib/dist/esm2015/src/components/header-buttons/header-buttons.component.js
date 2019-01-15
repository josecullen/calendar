/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, Input, EventEmitter } from "@angular/core";
export class CalendarHeaderButtonsComponent {
    constructor() {
        this.showChangeYearButton = true;
        this.showChangeMonthButton = true;
        this.yearClick = new EventEmitter();
        this.monthClick = new EventEmitter();
    }
}
CalendarHeaderButtonsComponent.decorators = [
    { type: Component, args: [{
                selector: 'trb-calendar-header-buttons',
                template: "<ng-container *ngIf=\"type === 'back'\">\n    <span (click)=\"yearClick.emit()\" *ngIf=\"showChangeYearButton\">\n        <i class=\"arrow left\"></i>\n        <i class=\"arrow left\"></i>\n    </span>\n\n    <span (click)=\"monthClick.emit()\" *ngIf=\"showChangeMonthButton\">\n        <i class=\"arrow left\"></i>\n    </span>\n</ng-container>\n\n<ng-container *ngIf=\"type === 'forward'\">\n    <span (click)=\"monthClick.emit()\" *ngIf=\"showChangeMonthButton\">\n        <i class=\"arrow right\"></i>\n    </span>\n\n    <span (click)=\"yearClick.emit()\" *ngIf=\"showChangeYearButton\">\n        <i class=\"arrow right\"></i>\n        <i class=\"arrow right\"></i>\n    </span>\n</ng-container>",
                styles: [`
    :host span {
        cursor: pointer;
        padding: 0 6px;
    }
    `]
            }] }
];
CalendarHeaderButtonsComponent.propDecorators = {
    type: [{ type: Input }],
    showChangeYearButton: [{ type: Input }],
    showChangeMonthButton: [{ type: Input }],
    yearClick: [{ type: Output }],
    monthClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CalendarHeaderButtonsComponent.prototype.type;
    /** @type {?} */
    CalendarHeaderButtonsComponent.prototype.showChangeYearButton;
    /** @type {?} */
    CalendarHeaderButtonsComponent.prototype.showChangeMonthButton;
    /** @type {?} */
    CalendarHeaderButtonsComponent.prototype.yearClick;
    /** @type {?} */
    CalendarHeaderButtonsComponent.prototype.monthClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWJ1dHRvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NvbXBvbmVudHMvaGVhZGVyLWJ1dHRvbnMvaGVhZGVyLWJ1dHRvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZXZFLE1BQU0sT0FBTyw4QkFBOEI7SUFYM0M7UUFhYSx5QkFBb0IsR0FBVyxJQUFJLENBQUE7UUFDbkMsMEJBQXFCLEdBQVcsSUFBSSxDQUFBO1FBQ25DLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO1FBQzlCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO0lBQzdDLENBQUM7OztZQWpCQSxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsd3NCQUE4Qzt5QkFDckM7Ozs7O0tBS1I7YUFFSjs7O21CQUVJLEtBQUs7bUNBQ0wsS0FBSztvQ0FDTCxLQUFLO3dCQUNMLE1BQU07eUJBQ04sTUFBTTs7OztJQUpQLDhDQUFnQzs7SUFDaEMsOERBQTRDOztJQUM1QywrREFBNkM7O0lBQzdDLG1EQUF3Qzs7SUFDeEMsb0RBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0cmItY2FsZW5kYXItaGVhZGVyLWJ1dHRvbnMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXItYnV0dG9ucy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbYFxuICAgIDpob3N0IHNwYW4ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgIH1cbiAgICBgXVxuXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFySGVhZGVyQnV0dG9uc0NvbXBvbmVudCB7XG4gICAgQElucHV0KCkgdHlwZTonYmFjaycgfCAnZm9yd2FyZCdcbiAgICBASW5wdXQoKSBzaG93Q2hhbmdlWWVhckJ1dHRvbjpib29sZWFuID0gdHJ1ZVxuICAgIEBJbnB1dCgpIHNob3dDaGFuZ2VNb250aEJ1dHRvbjpib29sZWFuID0gdHJ1ZVxuICAgIEBPdXRwdXQoKSB5ZWFyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICBAT3V0cHV0KCkgbW9udGhDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKVxufSJdfQ==