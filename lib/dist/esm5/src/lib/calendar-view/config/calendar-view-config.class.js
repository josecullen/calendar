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
    function CalendarViewConfig(header, month, selection, stylePrefix) {
        if (header === void 0) { header = new CalendarHeaderConfig(); }
        if (month === void 0) { month = new MonthViewConfig(); }
        if (selection === void 0) { selection = 'simple'; }
        if (stylePrefix === void 0) { stylePrefix = 'trb'; }
        var _this = _super.call(this, header, month) || this;
        _this.header = header;
        _this.month = month;
        _this.selection = selection;
        _this.stylePrefix = stylePrefix;
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
        if (value instanceof Array) {
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
    ICalendarViewConfig.prototype.stylePrefix;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdmlldy1jb25maWcuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvbGliL2NhbGVuZGFyLXZpZXcvY29uZmlnL2NhbGVuZGFyLXZpZXctY29uZmlnLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUF5QixNQUFNLHVCQUF1QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHNUQ7SUFBd0MsOENBQWM7SUFFbEQsNEJBQ1csTUFBeUQsRUFDekQsS0FBOEMsRUFDOUMsU0FBbUQsRUFDbkQsV0FBMkI7UUFIM0IsdUJBQUEsRUFBQSxhQUFtQyxvQkFBb0IsRUFBRTtRQUN6RCxzQkFBQSxFQUFBLFlBQTZCLGVBQWUsRUFBRTtRQUM5QywwQkFBQSxFQUFBLG9CQUFtRDtRQUNuRCw0QkFBQSxFQUFBLG1CQUEyQjtRQUp0QyxZQU1JLGtCQUFNLE1BQU0sRUFBRSxLQUFLLENBQUMsU0FDdkI7UUFOVSxZQUFNLEdBQU4sTUFBTSxDQUFtRDtRQUN6RCxXQUFLLEdBQUwsS0FBSyxDQUF5QztRQUM5QyxlQUFTLEdBQVQsU0FBUyxDQUEwQztRQUNuRCxpQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7O0lBR3RDLENBQUM7Ozs7O0lBRU0sdUJBQUk7Ozs7SUFBWCxVQUFZLE1BQTJCOztZQUM3QixJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQzlELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7Ozs7SUFFYyw2QkFBVTs7Ozs7O0lBQXpCLFVBQTBCLElBQVMsRUFBRSxFQUFPO1FBQTVDLGlCQVNDO1FBUEcsRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUN6QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7Ozs7O0lBRWMseUJBQU07Ozs7Ozs7SUFBckIsVUFBc0IsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHO1FBQ3BDLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtZQUN4QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxLQUFLLFlBQVksTUFBTSxFQUFFO1lBQ2hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNyRDthQUFNO1lBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFTCx5QkFBQztBQUFELENBQUMsQUFyQ0QsQ0FBd0MsY0FBYyxHQXFDckQ7Ozs7SUFsQ08sb0NBQWdFOztJQUNoRSxtQ0FBcUQ7O0lBQ3JELHVDQUEwRDs7SUFDMUQseUNBQWtDOztBQWlDMUM7SUFBQTtJQUtBLENBQUM7SUFBRCwwQkFBQztBQUFELENBQUMsQUFMRCxJQUtDOzs7O0lBSkcscUNBQStCOztJQUMvQixvQ0FBeUI7O0lBQ3pCLHdDQUEwQzs7SUFDMUMsMENBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FsZW5kYXJIZWFkZXJDb25maWcsIElDYWxlbmRhckhlYWRlckNvbmZpZyB9IGZyb20gJy4vaGVhZGVyLWNvbmZpZy5jbGFzcyc7XG5pbXBvcnQgeyBDYWxlbmRhckNvbmZpZyB9IGZyb20gJy4uLy4uL2NhbGVuZGFyL2NvbmZpZy9jYWxlbmRhci1jb25maWcuY2xhc3MnO1xuaW1wb3J0IHsgTW9udGhWaWV3Q29uZmlnIH0gZnJvbSAnLi9tb250aC12aWV3LWNvbmZpZy5jbGFzcyc7XG5pbXBvcnQgeyBJTW9udGhWaWV3Q29uZmlnIH0gZnJvbSAnLi9tb250aC12aWV3LWNvbmZpZy5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJWaWV3Q29uZmlnIGV4dGVuZHMgQ2FsZW5kYXJDb25maWcge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBoZWFkZXI6IENhbGVuZGFySGVhZGVyQ29uZmlnID0gbmV3IENhbGVuZGFySGVhZGVyQ29uZmlnKCksXG4gICAgICAgIHB1YmxpYyBtb250aDogTW9udGhWaWV3Q29uZmlnID0gbmV3IE1vbnRoVmlld0NvbmZpZygpLFxuICAgICAgICBwdWJsaWMgc2VsZWN0aW9uOiAnc2ltcGxlJyB8ICdwaWNrZWQnIHwgJ3JhbmdlJyA9ICdzaW1wbGUnLFxuICAgICAgICBwdWJsaWMgc3R5bGVQcmVmaXg6IHN0cmluZyA9ICd0cmInXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGhlYWRlciwgbW9udGgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tKGNvbmZpZzogSUNhbGVuZGFyVmlld0NvbmZpZyk6IENhbGVuZGFyVmlld0NvbmZpZyB7XG4gICAgICAgIGNvbnN0IGNvbmYgPSB0aGlzLmNvcHlPYmplY3QoY29uZmlnLCBuZXcgQ2FsZW5kYXJWaWV3Q29uZmlnKCkpO1xuICAgICAgICByZXR1cm4gY29uZjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjb3B5T2JqZWN0KGZyb206IGFueSwgdG86IGFueSk6IENhbGVuZGFyVmlld0NvbmZpZyB7XG5cbiAgICAgICAgdG8gPSBPYmplY3QuYXNzaWduKHt9LCB0byk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZnJvbSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hc3NpZ24oZnJvbVtrZXldLCB0bywga2V5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRvO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGFzc2lnbih2YWx1ZSwgdGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdGhpcy5jb3B5T2JqZWN0KHZhbHVlLCB0YXJnZXRba2V5XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBJQ2FsZW5kYXJWaWV3Q29uZmlnIHtcbiAgICBoZWFkZXI/OiBJQ2FsZW5kYXJIZWFkZXJDb25maWc7XG4gICAgbW9udGg/OiBJTW9udGhWaWV3Q29uZmlnO1xuICAgIHNlbGVjdGlvbj86ICdzaW1wbGUnIHwgJ3BpY2tlZCcgfCAncmFuZ2UnO1xuICAgIHN0eWxlUHJlZml4Pzogc3RyaW5nO1xufVxuIl19