/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fns from 'date-fns';
export class Day {
    /**
     * @param {?} _date
     * @param {?=} disabled
     */
    constructor(_date, disabled = false) {
        this._date = _date;
        this.disabled = disabled;
        this.date = fns.format(_date, 'YYYY-MM-DD'),
            this.name = fns.format(_date, 'dddd'),
            this.dayOfMonth = fns.getDate(_date);
        this.dayOfWeek = fns.getDay(_date);
    }
    /**
     * @return {?}
     */
    get isWeekend() {
        return fns.isWeekend(this._date);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jYWxlbmRhci9kYXkvZGF5LmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssR0FBRyxNQUFNLFVBQVUsQ0FBQztBQUdoQyxNQUFNLE9BQU8sR0FBRzs7Ozs7SUFVWixZQUFvQixLQUFXLEVBQVMsV0FBb0IsS0FBSztRQUE3QyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDN0QsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUM7WUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7WUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBVEQsSUFBSSxTQUFTO1FBQ1QsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBU0o7OztJQWhCRyxtQkFBYTs7SUFDYixtQkFBYTs7SUFDYix5QkFBbUI7O0lBQ25CLHdCQUFrQjs7Ozs7SUFNTixvQkFBbUI7O0lBQUUsdUJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZm5zIGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IElEYXkgfSBmcm9tICcuL2RheS5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgRGF5IGltcGxlbWVudHMgSURheSB7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkYXlPZk1vbnRoOiBudW1iZXI7XG4gICAgZGF5T2ZXZWVrOiBudW1iZXI7XG5cbiAgICBnZXQgaXNXZWVrZW5kKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZm5zLmlzV2Vla2VuZCh0aGlzLl9kYXRlKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRlOiBEYXRlLCBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRhdGUgPSBmbnMuZm9ybWF0KF9kYXRlLCAnWVlZWS1NTS1ERCcpLFxuICAgICAgICB0aGlzLm5hbWUgPSBmbnMuZm9ybWF0KF9kYXRlLCAnZGRkZCcpLFxuICAgICAgICB0aGlzLmRheU9mTW9udGggPSBmbnMuZ2V0RGF0ZShfZGF0ZSk7XG4gICAgICAgIHRoaXMuZGF5T2ZXZWVrID0gZm5zLmdldERheShfZGF0ZSk7XG4gICAgfVxuXG59XG4iXX0=