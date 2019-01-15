/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class MonthViewConfig {
    /**
     * @param {?=} hideWeekends
     * @param {?=} hideDaysOutsideMonth
     * @param {?=} showTwoCalendarIfNeed
     * @param {?=} firstDay
     * @param {?=} monthLabels
     * @param {?=} dayLabels
     * @param {?=} dayLength
     * @param {?=} showChangeYearButton
     * @param {?=} showChangeMonthButton
     */
    constructor(hideWeekends = false, hideDaysOutsideMonth = true, showTwoCalendarIfNeed = false, firstDay = 0, monthLabels = undefined, dayLabels = [], dayLength = 3, showChangeYearButton = true, showChangeMonthButton = true) {
        this.hideWeekends = hideWeekends;
        this.hideDaysOutsideMonth = hideDaysOutsideMonth;
        this.showTwoCalendarIfNeed = showTwoCalendarIfNeed;
        this.firstDay = firstDay;
        this.monthLabels = monthLabels;
        this.dayLabels = dayLabels;
        this.dayLength = dayLength;
        this.showChangeYearButton = showChangeYearButton;
        this.showChangeMonthButton = showChangeMonthButton;
    }
}
if (false) {
    /** @type {?} */
    MonthViewConfig.prototype.hideWeekends;
    /** @type {?} */
    MonthViewConfig.prototype.hideDaysOutsideMonth;
    /** @type {?} */
    MonthViewConfig.prototype.showTwoCalendarIfNeed;
    /** @type {?} */
    MonthViewConfig.prototype.firstDay;
    /** @type {?} */
    MonthViewConfig.prototype.monthLabels;
    /** @type {?} */
    MonthViewConfig.prototype.dayLabels;
    /** @type {?} */
    MonthViewConfig.prototype.dayLength;
    /** @type {?} */
    MonthViewConfig.prototype.showChangeYearButton;
    /** @type {?} */
    MonthViewConfig.prototype.showChangeMonthButton;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy1jb25maWcuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvbGliL2NhbGVuZGFyLXZpZXcvY29uZmlnL21vbnRoLXZpZXctY29uZmlnLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNLE9BQU8sZUFBZTs7Ozs7Ozs7Ozs7O0lBRXhCLFlBQ1csZUFBdUIsS0FBSyxFQUM1Qix1QkFBK0IsSUFBSSxFQUNuQyx3QkFBZ0MsS0FBSyxFQUNyQyxXQUFrQixDQUFDLEVBQ25CLGNBQXVCLFNBQVMsRUFDaEMsWUFBcUIsRUFBRSxFQUN2QixZQUFtQixDQUFDLEVBQ3BCLHVCQUFnQyxJQUFJLEVBQ3BDLHdCQUFpQyxJQUFJO1FBUnJDLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUM1Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWU7UUFDbkMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFnQjtRQUNyQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtRQUNoQyxjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFnQjtRQUNwQywwQkFBcUIsR0FBckIscUJBQXFCLENBQWdCO0lBRTlDLENBQUM7Q0FFTjs7O0lBWk8sdUNBQW1DOztJQUNuQywrQ0FBMEM7O0lBQzFDLGdEQUE0Qzs7SUFDNUMsbUNBQTBCOztJQUMxQixzQ0FBdUM7O0lBQ3ZDLG9DQUE4Qjs7SUFDOUIsb0NBQTJCOztJQUMzQiwrQ0FBMkM7O0lBQzNDLGdEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElNb250aFZpZXdDb25maWcgfSBmcm9tICcuL21vbnRoLXZpZXctY29uZmlnLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBNb250aFZpZXdDb25maWcgaW1wbGVtZW50cyBJTW9udGhWaWV3Q29uZmlnIHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGhpZGVXZWVrZW5kczpib29sZWFuID0gZmFsc2UsXG4gICAgICAgIHB1YmxpYyBoaWRlRGF5c091dHNpZGVNb250aDpib29sZWFuID0gdHJ1ZSxcbiAgICAgICAgcHVibGljIHNob3dUd29DYWxlbmRhcklmTmVlZDpib29sZWFuID0gZmFsc2UsXG4gICAgICAgIHB1YmxpYyBmaXJzdERheTpudW1iZXIgPSAwLFxuICAgICAgICBwdWJsaWMgbW9udGhMYWJlbHM6c3RyaW5nW10gPSB1bmRlZmluZWQsXG4gICAgICAgIHB1YmxpYyBkYXlMYWJlbHM6c3RyaW5nW10gPSBbXSxcbiAgICAgICAgcHVibGljIGRheUxlbmd0aDpudW1iZXIgPSAzLFxuICAgICAgICBwdWJsaWMgc2hvd0NoYW5nZVllYXJCdXR0b246IGJvb2xlYW4gPSB0cnVlLFxuICAgICAgICBwdWJsaWMgc2hvd0NoYW5nZU1vbnRoQnV0dG9uOiBib29sZWFuID0gdHJ1ZVxuXG4gICAgKXt9XG4gICAgXG59Il19