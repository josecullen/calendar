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
        console.log('dateessssss', config.month ? config.month.monthLabels : '');
        /** @type {?} */
        var conf = this.copyObject(config, new CalendarViewConfig());
        console.log('dateessssss', conf.month.dayLabels);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdmlldy1jb25maWcuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvbGliL2NhbGVuZGFyLXZpZXcvY29uZmlnL2NhbGVuZGFyLXZpZXctY29uZmlnLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUF5QixNQUFNLHVCQUF1QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHNUQ7SUFBd0MsOENBQWM7SUFFbEQsNEJBQ1csTUFBd0QsRUFDeEQsS0FBNkMsRUFDN0MsU0FBa0QsRUFDbEQsV0FBMEI7UUFIMUIsdUJBQUEsRUFBQSxhQUFrQyxvQkFBb0IsRUFBRTtRQUN4RCxzQkFBQSxFQUFBLFlBQTRCLGVBQWUsRUFBRTtRQUM3QywwQkFBQSxFQUFBLG9CQUFrRDtRQUNsRCw0QkFBQSxFQUFBLG1CQUEwQjtRQUpyQyxZQU1JLGtCQUFNLE1BQU0sRUFBRSxLQUFLLENBQUMsU0FDdkI7UUFOVSxZQUFNLEdBQU4sTUFBTSxDQUFrRDtRQUN4RCxXQUFLLEdBQUwsS0FBSyxDQUF3QztRQUM3QyxlQUFTLEdBQVQsU0FBUyxDQUF5QztRQUNsRCxpQkFBVyxHQUFYLFdBQVcsQ0FBZTs7SUFHckMsQ0FBQzs7Ozs7SUFFTSx1QkFBSTs7OztJQUFYLFVBQVksTUFBMEI7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBOztZQUNsRSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDaEQsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDOzs7Ozs7O0lBRWMsNkJBQVU7Ozs7OztJQUF6QixVQUEwQixJQUFRLEVBQUUsRUFBTTtRQUExQyxpQkFTQztRQVBHLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUUxQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDekIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ25DLENBQUMsQ0FBQyxDQUFBO1FBRUYsT0FBTyxFQUFFLENBQUE7SUFDYixDQUFDOzs7Ozs7OztJQUVjLHlCQUFNOzs7Ozs7O0lBQXJCLFVBQXNCLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRztRQUNwQyxJQUFHLEtBQUssWUFBWSxLQUFLLEVBQUM7WUFDdEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQTtTQUN0QjthQUFNLElBQUcsS0FBSyxZQUFZLE1BQU0sRUFBQztZQUM5QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDcEQ7YUFBTTtZQUNILE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUE7U0FDdEI7SUFDTCxDQUFDO0lBRUwseUJBQUM7QUFBRCxDQUFDLEFBdkNELENBQXdDLGNBQWMsR0F1Q3JEOzs7O0lBcENPLG9DQUErRDs7SUFDL0QsbUNBQW9EOztJQUNwRCx1Q0FBeUQ7O0lBQ3pELHlDQUFpQzs7QUFtQ3pDO0lBQUE7SUFLQSxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7OztJQUpHLHFDQUE2Qjs7SUFDN0Isb0NBQXVCOztJQUN2Qix3Q0FBd0M7O0lBQ3hDLDBDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbGVuZGFySGVhZGVyQ29uZmlnLCBJQ2FsZW5kYXJIZWFkZXJDb25maWcgfSBmcm9tICcuL2hlYWRlci1jb25maWcuY2xhc3MnO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb25maWcgfSBmcm9tICcuLi8uLi9jYWxlbmRhci9jb25maWcvY2FsZW5kYXItY29uZmlnLmNsYXNzJztcbmltcG9ydCB7IE1vbnRoVmlld0NvbmZpZyB9IGZyb20gJy4vbW9udGgtdmlldy1jb25maWcuY2xhc3MnO1xuaW1wb3J0IHsgSU1vbnRoVmlld0NvbmZpZyB9IGZyb20gJy4vbW9udGgtdmlldy1jb25maWcuaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyVmlld0NvbmZpZyBleHRlbmRzIENhbGVuZGFyQ29uZmlnIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaGVhZGVyOkNhbGVuZGFySGVhZGVyQ29uZmlnID0gbmV3IENhbGVuZGFySGVhZGVyQ29uZmlnKCksXG4gICAgICAgIHB1YmxpYyBtb250aDpNb250aFZpZXdDb25maWcgPSBuZXcgTW9udGhWaWV3Q29uZmlnKCksXG4gICAgICAgIHB1YmxpYyBzZWxlY3Rpb246J3NpbXBsZScgfCAncGlja2VkJyB8ICdyYW5nZScgPSAnc2ltcGxlJyxcbiAgICAgICAgcHVibGljIHN0eWxlUHJlZml4OnN0cmluZyA9ICd0cmInXG4gICAgKXtcbiAgICAgICAgc3VwZXIoaGVhZGVyLCBtb250aClcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbShjb25maWc6SUNhbGVuZGFyVmlld0NvbmZpZyk6IENhbGVuZGFyVmlld0NvbmZpZyB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRlZXNzc3NzcycsIGNvbmZpZy5tb250aCA/IGNvbmZpZy5tb250aC5tb250aExhYmVscyA6ICcnKVxuICAgICAgICBjb25zdCBjb25mID0gdGhpcy5jb3B5T2JqZWN0KGNvbmZpZywgbmV3IENhbGVuZGFyVmlld0NvbmZpZygpKVxuICAgICAgICBjb25zb2xlLmxvZygnZGF0ZWVzc3Nzc3MnLCBjb25mLm1vbnRoLmRheUxhYmVscylcbiAgICAgICAgcmV0dXJuIGNvbmZcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjb3B5T2JqZWN0KGZyb206YW55LCB0bzphbnkpOkNhbGVuZGFyVmlld0NvbmZpZyB7XG4gICAgICAgIFxuICAgICAgICB0byA9IE9iamVjdC5hc3NpZ24oe30sIHRvKVxuXG4gICAgICAgIE9iamVjdC5rZXlzKGZyb20pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXNzaWduKGZyb21ba2V5XSwgdG8sIGtleSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gdG9cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBhc3NpZ24odmFsdWUsIHRhcmdldCwga2V5KXtcbiAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBBcnJheSl7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlICAgIFxuICAgICAgICB9IGVsc2UgaWYodmFsdWUgaW5zdGFuY2VvZiBPYmplY3Qpe1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB0aGlzLmNvcHlPYmplY3QodmFsdWUsIHRhcmdldFtrZXldKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBJQ2FsZW5kYXJWaWV3Q29uZmlnIHtcbiAgICBoZWFkZXI/OklDYWxlbmRhckhlYWRlckNvbmZpZ1xuICAgIG1vbnRoPzpJTW9udGhWaWV3Q29uZmlnXG4gICAgc2VsZWN0aW9uPzonc2ltcGxlJyB8ICdwaWNrZWQnIHwgJ3JhbmdlJ1xuICAgIHN0eWxlUHJlZml4PzpzdHJpbmdcbn0iXX0=