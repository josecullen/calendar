/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CalendarHeaderConfig } from './header-config.class';
import { CalendarConfig } from '../../calendar/config/calendar-config.class';
import { MonthViewConfig } from './month-view-config.class';
var CalendarViewConfig = /** @class */ (function (_super) {
    tslib_1.__extends(CalendarViewConfig, _super);
    function CalendarViewConfig(header, month, selection, stylePrefix, filterDates) {
        if (header === void 0) { header = new CalendarHeaderConfig(); }
        if (month === void 0) { month = new MonthViewConfig(); }
        if (selection === void 0) { selection = 'simple'; }
        if (stylePrefix === void 0) { stylePrefix = 'trb'; }
        var _this = _super.call(this, header, month) || this;
        _this.header = header;
        _this.month = month;
        _this.selection = selection;
        _this.stylePrefix = stylePrefix;
        _this.filterDates = filterDates;
        return _this;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    CalendarViewConfig.from = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var conf = this.copyObject(config, new CalendarViewConfig());
        return conf;
    };
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    CalendarViewConfig.copyObject = /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    function (from, to) {
        var _this = this;
        to = Object.assign({}, to);
        Object.keys(from).forEach(function (key) {
            _this.assign(from[key], to, key);
        });
        return to;
    };
    /**
     * @private
     * @param {?} value
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    CalendarViewConfig.assign = /**
     * @private
     * @param {?} value
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    function (value, target, key) {
        if (value instanceof Array || value instanceof Function) {
            target[key] = value;
        }
        else if (value instanceof Object) {
            target[key] = this.copyObject(value, target[key]);
        }
        else {
            target[key] = value;
        }
    };
    return CalendarViewConfig;
}(CalendarConfig));
export { CalendarViewConfig };
if (false) {
    /** @type {?} */
    CalendarViewConfig.prototype.header;
    /** @type {?} */
    CalendarViewConfig.prototype.month;
    /** @type {?} */
    CalendarViewConfig.prototype.selection;
    /** @type {?} */
    CalendarViewConfig.prototype.stylePrefix;
    /** @type {?} */
    CalendarViewConfig.prototype.filterDates;
}
var ICalendarViewConfig = /** @class */ (function () {
    function ICalendarViewConfig() {
    }
    return ICalendarViewConfig;
}());
export { ICalendarViewConfig };
if (false) {
    /** @type {?} */
    ICalendarViewConfig.prototype.header;
    /** @type {?} */
    ICalendarViewConfig.prototype.month;
    /** @type {?} */
    ICalendarViewConfig.prototype.selection;
    /** @type {?} */
    ICalendarViewConfig.prototype.filterDates;
    /** @type {?} */
    ICalendarViewConfig.prototype.stylePrefix;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdmlldy1jb25maWcuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvbGliL2NhbGVuZGFyLXZpZXcvY29uZmlnL2NhbGVuZGFyLXZpZXctY29uZmlnLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUF5QixNQUFNLHVCQUF1QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHNUQ7SUFBd0MsOENBQWM7SUFFbEQsNEJBQ1csTUFBeUQsRUFDekQsS0FBOEMsRUFDOUMsU0FBbUQsRUFDbkQsV0FBMkIsRUFDM0IsV0FBcUM7UUFKckMsdUJBQUEsRUFBQSxhQUFtQyxvQkFBb0IsRUFBRTtRQUN6RCxzQkFBQSxFQUFBLFlBQTZCLGVBQWUsRUFBRTtRQUM5QywwQkFBQSxFQUFBLG9CQUFtRDtRQUNuRCw0QkFBQSxFQUFBLG1CQUEyQjtRQUp0QyxZQU9JLGtCQUFNLE1BQU0sRUFBRSxLQUFLLENBQUMsU0FDdkI7UUFQVSxZQUFNLEdBQU4sTUFBTSxDQUFtRDtRQUN6RCxXQUFLLEdBQUwsS0FBSyxDQUF5QztRQUM5QyxlQUFTLEdBQVQsU0FBUyxDQUEwQztRQUNuRCxpQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFDM0IsaUJBQVcsR0FBWCxXQUFXLENBQTBCOztJQUdoRCxDQUFDOzs7OztJQUVNLHVCQUFJOzs7O0lBQVgsVUFBWSxNQUEyQjs7WUFDN0IsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUM5RCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7Ozs7O0lBRWMsNkJBQVU7Ozs7OztJQUF6QixVQUEwQixJQUFTLEVBQUUsRUFBTztRQUE1QyxpQkFTQztRQVBHLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUzQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDekIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDOzs7Ozs7OztJQUVjLHlCQUFNOzs7Ozs7O0lBQXJCLFVBQXNCLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRztRQUNwQyxJQUFJLEtBQUssWUFBWSxLQUFLLElBQUksS0FBSyxZQUFZLFFBQVEsRUFBRTtZQUNyRCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxLQUFLLFlBQVksTUFBTSxFQUFFO1lBQ2hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNyRDthQUFNO1lBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFTCx5QkFBQztBQUFELENBQUMsQUF0Q0QsQ0FBd0MsY0FBYyxHQXNDckQ7Ozs7SUFuQ08sb0NBQWdFOztJQUNoRSxtQ0FBcUQ7O0lBQ3JELHVDQUEwRDs7SUFDMUQseUNBQWtDOztJQUNsQyx5Q0FBNEM7O0FBaUNwRDtJQUFBO0lBTUEsQ0FBQztJQUFELDBCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMRyxxQ0FBK0I7O0lBQy9CLG9DQUF5Qjs7SUFDekIsd0NBQTBDOztJQUMxQywwQ0FBc0M7O0lBQ3RDLDBDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbGVuZGFySGVhZGVyQ29uZmlnLCBJQ2FsZW5kYXJIZWFkZXJDb25maWcgfSBmcm9tICcuL2hlYWRlci1jb25maWcuY2xhc3MnO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb25maWcgfSBmcm9tICcuLi8uLi9jYWxlbmRhci9jb25maWcvY2FsZW5kYXItY29uZmlnLmNsYXNzJztcbmltcG9ydCB7IE1vbnRoVmlld0NvbmZpZyB9IGZyb20gJy4vbW9udGgtdmlldy1jb25maWcuY2xhc3MnO1xuaW1wb3J0IHsgSU1vbnRoVmlld0NvbmZpZyB9IGZyb20gJy4vbW9udGgtdmlldy1jb25maWcuaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyVmlld0NvbmZpZyBleHRlbmRzIENhbGVuZGFyQ29uZmlnIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaGVhZGVyOiBDYWxlbmRhckhlYWRlckNvbmZpZyA9IG5ldyBDYWxlbmRhckhlYWRlckNvbmZpZygpLFxuICAgICAgICBwdWJsaWMgbW9udGg6IE1vbnRoVmlld0NvbmZpZyA9IG5ldyBNb250aFZpZXdDb25maWcoKSxcbiAgICAgICAgcHVibGljIHNlbGVjdGlvbjogJ3NpbXBsZScgfCAncGlja2VkJyB8ICdyYW5nZScgPSAnc2ltcGxlJyxcbiAgICAgICAgcHVibGljIHN0eWxlUHJlZml4OiBzdHJpbmcgPSAndHJiJyxcbiAgICAgICAgcHVibGljIGZpbHRlckRhdGVzPzogKGRhdGU6IERhdGUpID0+IGJvb2xlYW4sXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGhlYWRlciwgbW9udGgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tKGNvbmZpZzogSUNhbGVuZGFyVmlld0NvbmZpZyk6IENhbGVuZGFyVmlld0NvbmZpZyB7XG4gICAgICAgIGNvbnN0IGNvbmYgPSB0aGlzLmNvcHlPYmplY3QoY29uZmlnLCBuZXcgQ2FsZW5kYXJWaWV3Q29uZmlnKCkpO1xuICAgICAgICByZXR1cm4gY29uZjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjb3B5T2JqZWN0KGZyb206IGFueSwgdG86IGFueSk6IENhbGVuZGFyVmlld0NvbmZpZyB7XG5cbiAgICAgICAgdG8gPSBPYmplY3QuYXNzaWduKHt9LCB0byk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZnJvbSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hc3NpZ24oZnJvbVtrZXldLCB0bywga2V5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRvO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGFzc2lnbih2YWx1ZSwgdGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgfHwgdmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB0aGlzLmNvcHlPYmplY3QodmFsdWUsIHRhcmdldFtrZXldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIElDYWxlbmRhclZpZXdDb25maWcge1xuICAgIGhlYWRlcj86IElDYWxlbmRhckhlYWRlckNvbmZpZztcbiAgICBtb250aD86IElNb250aFZpZXdDb25maWc7XG4gICAgc2VsZWN0aW9uPzogJ3NpbXBsZScgfCAncGlja2VkJyB8ICdyYW5nZSc7XG4gICAgZmlsdGVyRGF0ZXM/OiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbjtcbiAgICBzdHlsZVByZWZpeD86IHN0cmluZztcbn1cbiJdfQ==