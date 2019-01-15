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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jYWxlbmRhci9kYXkvZGF5LmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssR0FBRyxNQUFNLFVBQVUsQ0FBQTtBQUcvQjtJQVVJLGFBQW9CLEtBQVUsRUFBUyxRQUF3QjtRQUF4Qix5QkFBQSxFQUFBLGdCQUF3QjtRQUEzQyxVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFDM0QsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUM7WUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7WUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBVEQsc0JBQUksMEJBQVM7Ozs7UUFBYjtZQUNJLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDcEMsQ0FBQzs7O09BQUE7SUFTTCxVQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQzs7OztJQWhCRyxtQkFBWTs7SUFDWixtQkFBWTs7SUFDWix5QkFBa0I7O0lBQ2xCLHdCQUFpQjs7Ozs7SUFNTCxvQkFBa0I7O0lBQUUsdUJBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZm5zIGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IHsgSURheSB9IGZyb20gJy4vZGF5LmludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBEYXkgaW1wbGVtZW50cyBJRGF5IHtcbiAgICBkYXRlOiBzdHJpbmdcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBkYXlPZk1vbnRoOiBudW1iZXJcbiAgICBkYXlPZldlZWs6IG51bWJlclxuXG4gICAgZ2V0IGlzV2Vla2VuZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZm5zLmlzV2Vla2VuZCh0aGlzLl9kYXRlKVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGU6RGF0ZSwgcHVibGljIGRpc2FibGVkOmJvb2xlYW4gPSBmYWxzZSl7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGZucy5mb3JtYXQoX2RhdGUsICdZWVlZLU1NLUREJyksXG4gICAgICAgIHRoaXMubmFtZSA9IGZucy5mb3JtYXQoX2RhdGUsICdkZGRkJyksXG4gICAgICAgIHRoaXMuZGF5T2ZNb250aCA9IGZucy5nZXREYXRlKF9kYXRlKVxuICAgICAgICB0aGlzLmRheU9mV2VlayA9IGZucy5nZXREYXkoX2RhdGUpXG4gICAgfVxuXG59XG4iXX0=