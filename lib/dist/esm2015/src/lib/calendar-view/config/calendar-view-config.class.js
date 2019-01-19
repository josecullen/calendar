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
     * @param {?=} filterDates
     */
    constructor(header = new CalendarHeaderConfig(), month = new MonthViewConfig(), selection = 'simple', stylePrefix = 'trb', filterDates) {
        super(header, month);
        this.header = header;
        this.month = month;
        this.selection = selection;
        this.stylePrefix = stylePrefix;
        this.filterDates = filterDates;
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
        if (value instanceof Array || value instanceof Function) {
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
    /** @type {?} */
    CalendarViewConfig.prototype.filterDates;
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
    ICalendarViewConfig.prototype.filterDates;
    /** @type {?} */
    ICalendarViewConfig.prototype.stylePrefix;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdmlldy1jb25maWcuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvbGliL2NhbGVuZGFyLXZpZXcvY29uZmlnL2NhbGVuZGFyLXZpZXctY29uZmlnLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQXlCLE1BQU0sdUJBQXVCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUc1RCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsY0FBYzs7Ozs7Ozs7SUFFbEQsWUFDVyxTQUErQixJQUFJLG9CQUFvQixFQUFFLEVBQ3pELFFBQXlCLElBQUksZUFBZSxFQUFFLEVBQzlDLFlBQTJDLFFBQVEsRUFDbkQsY0FBc0IsS0FBSyxFQUMzQixXQUFxQztRQUU1QyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBTmQsV0FBTSxHQUFOLE1BQU0sQ0FBbUQ7UUFDekQsVUFBSyxHQUFMLEtBQUssQ0FBeUM7UUFDOUMsY0FBUyxHQUFULFNBQVMsQ0FBMEM7UUFDbkQsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtJQUdoRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBMkI7O2NBQzdCLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLGtCQUFrQixFQUFFLENBQUM7UUFDOUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7OztJQUVPLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBUyxFQUFFLEVBQU87UUFFeEMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7SUFFTyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRztRQUNwQyxJQUFJLEtBQUssWUFBWSxLQUFLLElBQUksS0FBSyxZQUFZLFFBQVEsRUFBRTtZQUNyRCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxLQUFLLFlBQVksTUFBTSxFQUFFO1lBQ2hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNyRDthQUFNO1lBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUN2QjtJQUNMLENBQUM7Q0FFSjs7O0lBbkNPLG9DQUFnRTs7SUFDaEUsbUNBQXFEOztJQUNyRCx1Q0FBMEQ7O0lBQzFELHlDQUFrQzs7SUFDbEMseUNBQTRDOztBQWlDcEQsTUFBTSxPQUFPLG1CQUFtQjtDQU0vQjs7O0lBTEcscUNBQStCOztJQUMvQixvQ0FBeUI7O0lBQ3pCLHdDQUEwQzs7SUFDMUMsMENBQXNDOztJQUN0QywwQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYWxlbmRhckhlYWRlckNvbmZpZywgSUNhbGVuZGFySGVhZGVyQ29uZmlnIH0gZnJvbSAnLi9oZWFkZXItY29uZmlnLmNsYXNzJztcbmltcG9ydCB7IENhbGVuZGFyQ29uZmlnIH0gZnJvbSAnLi4vLi4vY2FsZW5kYXIvY29uZmlnL2NhbGVuZGFyLWNvbmZpZy5jbGFzcyc7XG5pbXBvcnQgeyBNb250aFZpZXdDb25maWcgfSBmcm9tICcuL21vbnRoLXZpZXctY29uZmlnLmNsYXNzJztcbmltcG9ydCB7IElNb250aFZpZXdDb25maWcgfSBmcm9tICcuL21vbnRoLXZpZXctY29uZmlnLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclZpZXdDb25maWcgZXh0ZW5kcyBDYWxlbmRhckNvbmZpZyB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGhlYWRlcjogQ2FsZW5kYXJIZWFkZXJDb25maWcgPSBuZXcgQ2FsZW5kYXJIZWFkZXJDb25maWcoKSxcbiAgICAgICAgcHVibGljIG1vbnRoOiBNb250aFZpZXdDb25maWcgPSBuZXcgTW9udGhWaWV3Q29uZmlnKCksXG4gICAgICAgIHB1YmxpYyBzZWxlY3Rpb246ICdzaW1wbGUnIHwgJ3BpY2tlZCcgfCAncmFuZ2UnID0gJ3NpbXBsZScsXG4gICAgICAgIHB1YmxpYyBzdHlsZVByZWZpeDogc3RyaW5nID0gJ3RyYicsXG4gICAgICAgIHB1YmxpYyBmaWx0ZXJEYXRlcz86IChkYXRlOiBEYXRlKSA9PiBib29sZWFuLFxuICAgICkge1xuICAgICAgICBzdXBlcihoZWFkZXIsIG1vbnRoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbShjb25maWc6IElDYWxlbmRhclZpZXdDb25maWcpOiBDYWxlbmRhclZpZXdDb25maWcge1xuICAgICAgICBjb25zdCBjb25mID0gdGhpcy5jb3B5T2JqZWN0KGNvbmZpZywgbmV3IENhbGVuZGFyVmlld0NvbmZpZygpKTtcbiAgICAgICAgcmV0dXJuIGNvbmY7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY29weU9iamVjdChmcm9tOiBhbnksIHRvOiBhbnkpOiBDYWxlbmRhclZpZXdDb25maWcge1xuXG4gICAgICAgIHRvID0gT2JqZWN0LmFzc2lnbih7fSwgdG8pO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGZyb20pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXNzaWduKGZyb21ba2V5XSwgdG8sIGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0bztcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBhc3NpZ24odmFsdWUsIHRhcmdldCwga2V5KSB7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5IHx8IHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdGhpcy5jb3B5T2JqZWN0KHZhbHVlLCB0YXJnZXRba2V5XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBJQ2FsZW5kYXJWaWV3Q29uZmlnIHtcbiAgICBoZWFkZXI/OiBJQ2FsZW5kYXJIZWFkZXJDb25maWc7XG4gICAgbW9udGg/OiBJTW9udGhWaWV3Q29uZmlnO1xuICAgIHNlbGVjdGlvbj86ICdzaW1wbGUnIHwgJ3BpY2tlZCcgfCAncmFuZ2UnO1xuICAgIGZpbHRlckRhdGVzPzogKGRhdGU6IERhdGUpID0+IGJvb2xlYW47XG4gICAgc3R5bGVQcmVmaXg/OiBzdHJpbmc7XG59XG4iXX0=