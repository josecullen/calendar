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
    constructor(hideWeekends = false, hideDaysOutsideMonth = true, showTwoCalendarIfNeed = false, firstDay = 0, monthLabels, dayLabels = [], dayLength = 3, showChangeYearButton = true, showChangeMonthButton = true) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy1jb25maWcuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvbGliL2NhbGVuZGFyLXZpZXcvY29uZmlnL21vbnRoLXZpZXctY29uZmlnLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNLE9BQU8sZUFBZTs7Ozs7Ozs7Ozs7O0lBRXhCLFlBQ1csZUFBd0IsS0FBSyxFQUM3Qix1QkFBZ0MsSUFBSSxFQUNwQyx3QkFBaUMsS0FBSyxFQUN0QyxXQUFtQixDQUFDLEVBQ3BCLFdBQXNCLEVBQ3RCLFlBQXNCLEVBQUUsRUFDeEIsWUFBb0IsQ0FBQyxFQUNyQix1QkFBZ0MsSUFBSSxFQUNwQyx3QkFBaUMsSUFBSTtRQVJyQyxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFDN0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFnQjtRQUNwQywwQkFBcUIsR0FBckIscUJBQXFCLENBQWlCO1FBQ3RDLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQVc7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixjQUFTLEdBQVQsU0FBUyxDQUFZO1FBQ3JCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBZ0I7UUFDcEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFnQjtJQUU3QyxDQUFDO0NBRVA7OztJQVpPLHVDQUFvQzs7SUFDcEMsK0NBQTJDOztJQUMzQyxnREFBNkM7O0lBQzdDLG1DQUEyQjs7SUFDM0Isc0NBQTZCOztJQUM3QixvQ0FBK0I7O0lBQy9CLG9DQUE0Qjs7SUFDNUIsK0NBQTJDOztJQUMzQyxnREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTW9udGhWaWV3Q29uZmlnIH0gZnJvbSAnLi9tb250aC12aWV3LWNvbmZpZy5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3Q29uZmlnIGltcGxlbWVudHMgSU1vbnRoVmlld0NvbmZpZyB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGhpZGVXZWVrZW5kczogYm9vbGVhbiA9IGZhbHNlLFxuICAgICAgICBwdWJsaWMgaGlkZURheXNPdXRzaWRlTW9udGg6IGJvb2xlYW4gPSB0cnVlLFxuICAgICAgICBwdWJsaWMgc2hvd1R3b0NhbGVuZGFySWZOZWVkOiBib29sZWFuID0gZmFsc2UsXG4gICAgICAgIHB1YmxpYyBmaXJzdERheTogbnVtYmVyID0gMCxcbiAgICAgICAgcHVibGljIG1vbnRoTGFiZWxzPzogc3RyaW5nW10sXG4gICAgICAgIHB1YmxpYyBkYXlMYWJlbHM6IHN0cmluZ1tdID0gW10sXG4gICAgICAgIHB1YmxpYyBkYXlMZW5ndGg6IG51bWJlciA9IDMsXG4gICAgICAgIHB1YmxpYyBzaG93Q2hhbmdlWWVhckJ1dHRvbjogYm9vbGVhbiA9IHRydWUsXG4gICAgICAgIHB1YmxpYyBzaG93Q2hhbmdlTW9udGhCdXR0b246IGJvb2xlYW4gPSB0cnVlXG5cbiAgICApIHt9XG5cbn1cbiJdfQ==