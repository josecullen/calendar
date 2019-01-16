/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fns from 'date-fns';
var Day = /** @class */ (function () {
    function Day(_date, disabled) {
        if (disabled === void 0) { disabled = false; }
        this._date = _date;
        this.disabled = disabled;
        this.date = fns.format(_date, 'YYYY-MM-DD'),
            this.name = fns.format(_date, 'dddd'),
            this.dayOfMonth = fns.getDate(_date);
        this.dayOfWeek = fns.getDay(_date);
    }
    Object.defineProperty(Day.prototype, "isWeekend", {
        get: /**
         * @return {?}
         */
        function () {
            return fns.isWeekend(this._date);
        },
        enumerable: true,
        configurable: true
    });
    return Day;
}());
export { Day };
if (false) {
    /** @type {?} */
    Day.prototype.date;
    /** @type {?} */
    Day.prototype.name;
    /** @type {?} */
    Day.prototype.dayOfMonth;
    /** @type {?} */
    Day.prototype.dayOfWeek;
    /**
     * @type {?}
     * @private
     */
    Day.prototype._date;
    /** @type {?} */
    Day.prototype.disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jYWxlbmRhci9kYXkvZGF5LmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssR0FBRyxNQUFNLFVBQVUsQ0FBQztBQUdoQztJQVVJLGFBQW9CLEtBQVcsRUFBUyxRQUF5QjtRQUF6Qix5QkFBQSxFQUFBLGdCQUF5QjtRQUE3QyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDN0QsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUM7WUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7WUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBVEQsc0JBQUksMEJBQVM7Ozs7UUFBYjtZQUNJLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFTTCxVQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQzs7OztJQWhCRyxtQkFBYTs7SUFDYixtQkFBYTs7SUFDYix5QkFBbUI7O0lBQ25CLHdCQUFrQjs7Ozs7SUFNTixvQkFBbUI7O0lBQUUsdUJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZm5zIGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IElEYXkgfSBmcm9tICcuL2RheS5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgRGF5IGltcGxlbWVudHMgSURheSB7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkYXlPZk1vbnRoOiBudW1iZXI7XG4gICAgZGF5T2ZXZWVrOiBudW1iZXI7XG5cbiAgICBnZXQgaXNXZWVrZW5kKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZm5zLmlzV2Vla2VuZCh0aGlzLl9kYXRlKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRlOiBEYXRlLCBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRhdGUgPSBmbnMuZm9ybWF0KF9kYXRlLCAnWVlZWS1NTS1ERCcpLFxuICAgICAgICB0aGlzLm5hbWUgPSBmbnMuZm9ybWF0KF9kYXRlLCAnZGRkZCcpLFxuICAgICAgICB0aGlzLmRheU9mTW9udGggPSBmbnMuZ2V0RGF0ZShfZGF0ZSk7XG4gICAgICAgIHRoaXMuZGF5T2ZXZWVrID0gZm5zLmdldERheShfZGF0ZSk7XG4gICAgfVxuXG59XG4iXX0=