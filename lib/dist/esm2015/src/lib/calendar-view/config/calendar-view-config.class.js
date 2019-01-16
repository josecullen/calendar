/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CalendarHeaderConfig } from './header-config.class';
import { CalendarConfig } from '../../calendar/config/calendar-config.class';
import { MonthViewConfig } from './month-view-config.class';
export class CalendarViewConfig extends CalendarConfig {
    /**
     * @param {?=} header
     * @param {?=} month
     * @param {?=} selection
     * @param {?=} stylePrefix
     */
    constructor(header = new CalendarHeaderConfig(), month = new MonthViewConfig(), selection = 'simple', stylePrefix = 'trb') {
        super(header, month);
        this.header = header;
        this.month = month;
        this.selection = selection;
        this.stylePrefix = stylePrefix;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    static from(config) {
        /** @type {?} */
        const conf = this.copyObject(config, new CalendarViewConfig());
        return conf;
    }
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    static copyObject(from, to) {
        to = Object.assign({}, to);
        Object.keys(from).forEach(key => {
            this.assign(from[key], to, key);
        });
        return to;
    }
    /**
     * @private
     * @param {?} value
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    static assign(value, target, key) {
        if (value instanceof Array) {
            target[key] = value;
        }
        else if (value instanceof Object) {
            target[key] = this.copyObject(value, target[key]);
        }
        else {
            target[key] = value;
        }
    }
}
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
export class ICalendarViewConfig {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdmlldy1jb25maWcuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvbGliL2NhbGVuZGFyLXZpZXcvY29uZmlnL2NhbGVuZGFyLXZpZXctY29uZmlnLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQXlCLE1BQU0sdUJBQXVCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUc1RCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsY0FBYzs7Ozs7OztJQUVsRCxZQUNXLFNBQStCLElBQUksb0JBQW9CLEVBQUUsRUFDekQsUUFBeUIsSUFBSSxlQUFlLEVBQUUsRUFDOUMsWUFBMkMsUUFBUSxFQUNuRCxjQUFzQixLQUFLO1FBRWxDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFMZCxXQUFNLEdBQU4sTUFBTSxDQUFtRDtRQUN6RCxVQUFLLEdBQUwsS0FBSyxDQUF5QztRQUM5QyxjQUFTLEdBQVQsU0FBUyxDQUEwQztRQUNuRCxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7SUFHdEMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQTJCOztjQUM3QixJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQzlELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7Ozs7SUFFTyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQVMsRUFBRSxFQUFPO1FBRXhDLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUzQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7Ozs7O0lBRU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUc7UUFDcEMsSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFO1lBQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDdkI7YUFBTSxJQUFJLEtBQUssWUFBWSxNQUFNLEVBQUU7WUFDaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDSCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztDQUVKOzs7SUFsQ08sb0NBQWdFOztJQUNoRSxtQ0FBcUQ7O0lBQ3JELHVDQUEwRDs7SUFDMUQseUNBQWtDOztBQWlDMUMsTUFBTSxPQUFPLG1CQUFtQjtDQUsvQjs7O0lBSkcscUNBQStCOztJQUMvQixvQ0FBeUI7O0lBQ3pCLHdDQUEwQzs7SUFDMUMsMENBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FsZW5kYXJIZWFkZXJDb25maWcsIElDYWxlbmRhckhlYWRlckNvbmZpZyB9IGZyb20gJy4vaGVhZGVyLWNvbmZpZy5jbGFzcyc7XG5pbXBvcnQgeyBDYWxlbmRhckNvbmZpZyB9IGZyb20gJy4uLy4uL2NhbGVuZGFyL2NvbmZpZy9jYWxlbmRhci1jb25maWcuY2xhc3MnO1xuaW1wb3J0IHsgTW9udGhWaWV3Q29uZmlnIH0gZnJvbSAnLi9tb250aC12aWV3LWNvbmZpZy5jbGFzcyc7XG5pbXBvcnQgeyBJTW9udGhWaWV3Q29uZmlnIH0gZnJvbSAnLi9tb250aC12aWV3LWNvbmZpZy5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJWaWV3Q29uZmlnIGV4dGVuZHMgQ2FsZW5kYXJDb25maWcge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBoZWFkZXI6IENhbGVuZGFySGVhZGVyQ29uZmlnID0gbmV3IENhbGVuZGFySGVhZGVyQ29uZmlnKCksXG4gICAgICAgIHB1YmxpYyBtb250aDogTW9udGhWaWV3Q29uZmlnID0gbmV3IE1vbnRoVmlld0NvbmZpZygpLFxuICAgICAgICBwdWJsaWMgc2VsZWN0aW9uOiAnc2ltcGxlJyB8ICdwaWNrZWQnIHwgJ3JhbmdlJyA9ICdzaW1wbGUnLFxuICAgICAgICBwdWJsaWMgc3R5bGVQcmVmaXg6IHN0cmluZyA9ICd0cmInXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGhlYWRlciwgbW9udGgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tKGNvbmZpZzogSUNhbGVuZGFyVmlld0NvbmZpZyk6IENhbGVuZGFyVmlld0NvbmZpZyB7XG4gICAgICAgIGNvbnN0IGNvbmYgPSB0aGlzLmNvcHlPYmplY3QoY29uZmlnLCBuZXcgQ2FsZW5kYXJWaWV3Q29uZmlnKCkpO1xuICAgICAgICByZXR1cm4gY29uZjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjb3B5T2JqZWN0KGZyb206IGFueSwgdG86IGFueSk6IENhbGVuZGFyVmlld0NvbmZpZyB7XG5cbiAgICAgICAgdG8gPSBPYmplY3QuYXNzaWduKHt9LCB0byk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZnJvbSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hc3NpZ24oZnJvbVtrZXldLCB0bywga2V5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRvO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGFzc2lnbih2YWx1ZSwgdGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdGhpcy5jb3B5T2JqZWN0KHZhbHVlLCB0YXJnZXRba2V5XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBJQ2FsZW5kYXJWaWV3Q29uZmlnIHtcbiAgICBoZWFkZXI/OiBJQ2FsZW5kYXJIZWFkZXJDb25maWc7XG4gICAgbW9udGg/OiBJTW9udGhWaWV3Q29uZmlnO1xuICAgIHNlbGVjdGlvbj86ICdzaW1wbGUnIHwgJ3BpY2tlZCcgfCAncmFuZ2UnO1xuICAgIHN0eWxlUHJlZml4Pzogc3RyaW5nO1xufVxuIl19