/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, Input, EventEmitter } from '@angular/core';
export class CalendarHeaderButtonsComponent {
    constructor() {
        this.showChangeYearButton = true;
        this.showChangeMonthButton = true;
        this.yearClick = new EventEmitter();
        this.monthClick = new EventEmitter();
        this.leftArrowClasses = '';
        this.rightArrowClasses = '';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const styleChange = changes['stylePrefix'];
        if (styleChange) {
            this.leftArrowClasses = `${this.stylePrefix}-calendar-arrow ${this.stylePrefix}-calendar-arrow-left`;
            this.rightArrowClasses = `${this.stylePrefix}-calendar-arrow ${this.stylePrefix}-calendar-arrow-right`;
        }
    }
}
CalendarHeaderButtonsComponent.decorators = [
    { type: Component, args: [{
                selector: 'trb-calendar-header-buttons',
                template: "<ng-container *ngIf=\"type === 'back'\">\n\n    <span (click)=\"yearClick.emit()\" *ngIf=\"showChangeYearButton\">\n        <i [class]=\"leftArrowClasses\"></i>\n        <i [class]=\"leftArrowClasses\"></i>\n    </span>\n\n    <span (click)=\"monthClick.emit()\" *ngIf=\"showChangeMonthButton\">\n        <i [class]=\"leftArrowClasses\"></i>\n    </span>\n</ng-container>\n\n<ng-container *ngIf=\"type === 'forward'\">\n    <span (click)=\"monthClick.emit()\" *ngIf=\"showChangeMonthButton\">\n        <i [class]=\"rightArrowClasses\"></i>\n    </span>\n\n    <span (click)=\"yearClick.emit()\" *ngIf=\"showChangeYearButton\">\n        <i [class]=\"rightArrowClasses\"></i>\n        <i [class]=\"rightArrowClasses\"></i>\n    </span>\n</ng-container>\n",
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
    stylePrefix: [{ type: Input }],
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
    CalendarHeaderButtonsComponent.prototype.stylePrefix;
    /** @type {?} */
    CalendarHeaderButtonsComponent.prototype.yearClick;
    /** @type {?} */
    CalendarHeaderButtonsComponent.prototype.monthClick;
    /** @type {?} */
    CalendarHeaderButtonsComponent.prototype.leftArrowClasses;
    /** @type {?} */
    CalendarHeaderButtonsComponent.prototype.rightArrowClasses;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWJ1dHRvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NvbXBvbmVudHMvaGVhZGVyLWJ1dHRvbnMvaGVhZGVyLWJ1dHRvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUEwQyxNQUFNLGVBQWUsQ0FBQztBQWUvRyxNQUFNLE9BQU8sOEJBQThCO0lBWDNDO1FBYWEseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQzVCLDBCQUFxQixHQUFHLElBQUksQ0FBQztRQUU1QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxQyxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO0lBWTNCLENBQUM7Ozs7O0lBVkcsV0FBVyxDQUFDLE9BQXNCOztjQUMxQixXQUFXLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUUxQyxJQUFJLFdBQVcsRUFBRTtZQUNmLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLG1CQUFtQixJQUFJLENBQUMsV0FBVyxzQkFBc0IsQ0FBQztZQUNyRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxtQkFBbUIsSUFBSSxDQUFDLFdBQVcsdUJBQXVCLENBQUM7U0FDeEc7SUFDSCxDQUFDOzs7WUE3QkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLDR2QkFBOEM7eUJBQ3JDOzs7OztLQUtSO2FBRUo7OzttQkFFSSxLQUFLO21DQUNMLEtBQUs7b0NBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLE1BQU07eUJBQ04sTUFBTTs7OztJQUxQLDhDQUFrQzs7SUFDbEMsOERBQXFDOztJQUNyQywrREFBc0M7O0lBQ3RDLHFEQUE2Qjs7SUFDN0IsbURBQXlDOztJQUN6QyxvREFBMEM7O0lBRTFDLDBEQUFzQjs7SUFDdEIsMkRBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RyYi1jYWxlbmRhci1oZWFkZXItYnV0dG9ucycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci1idXR0b25zLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtgXG4gICAgOmhvc3Qgc3BhbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogMCA2cHg7XG4gICAgfVxuICAgIGBdXG5cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJIZWFkZXJCdXR0b25zQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSB0eXBlOiAnYmFjaycgfCAnZm9yd2FyZCc7XG4gICAgQElucHV0KCkgc2hvd0NoYW5nZVllYXJCdXR0b24gPSB0cnVlO1xuICAgIEBJbnB1dCgpIHNob3dDaGFuZ2VNb250aEJ1dHRvbiA9IHRydWU7XG4gICAgQElucHV0KCkgc3R5bGVQcmVmaXg6IHN0cmluZztcbiAgICBAT3V0cHV0KCkgeWVhckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBtb250aENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgbGVmdEFycm93Q2xhc3NlcyA9ICcnO1xuICAgIHJpZ2h0QXJyb3dDbGFzc2VzID0gJyc7XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICBjb25zdCBzdHlsZUNoYW5nZSA9IGNoYW5nZXNbJ3N0eWxlUHJlZml4J107XG5cbiAgICAgIGlmIChzdHlsZUNoYW5nZSkge1xuICAgICAgICB0aGlzLmxlZnRBcnJvd0NsYXNzZXMgPSBgJHt0aGlzLnN0eWxlUHJlZml4fS1jYWxlbmRhci1hcnJvdyAke3RoaXMuc3R5bGVQcmVmaXh9LWNhbGVuZGFyLWFycm93LWxlZnRgO1xuICAgICAgICB0aGlzLnJpZ2h0QXJyb3dDbGFzc2VzID0gYCR7dGhpcy5zdHlsZVByZWZpeH0tY2FsZW5kYXItYXJyb3cgJHt0aGlzLnN0eWxlUHJlZml4fS1jYWxlbmRhci1hcnJvdy1yaWdodGA7XG4gICAgICB9XG4gICAgfVxuXG5cbn1cbiJdfQ==