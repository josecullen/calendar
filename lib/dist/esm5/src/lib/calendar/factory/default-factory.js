/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Year } from '../year/year.class';
import { Month } from '../month/month.class';
import { Day } from '../day/day.class';
var CalendarDefaultFactory = /** @class */ (function () {
    function CalendarDefaultFactory() {
    }
    /**
     * @param {?} value
     * @param {?} calendar
     * @return {?}
     */
    CalendarDefaultFactory.prototype.createYear = /**
     * @param {?} value
     * @param {?} calendar
     * @return {?}
     */
    function (value, calendar) {
        return new Year(value, calendar);
    };
    /**
     * @param {?} date
     * @param {?} year
     * @param {?} calendar
     * @return {?}
     */
    CalendarDefaultFactory.prototype.createMonth = /**
     * @param {?} date
     * @param {?} year
     * @param {?} calendar
     * @return {?}
     */
    function (date, year, calendar) {
        return new Month(date, year, calendar);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarDefaultFactory.prototype.createDay = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return new Day(date);
    };
    return CalendarDefaultFactory;
}());
export { CalendarDefaultFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jYWxlbmRhci9mYWN0b3J5L2RlZmF1bHQtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSTFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFdkM7SUFBQTtJQWNBLENBQUM7Ozs7OztJQVpHLDJDQUFVOzs7OztJQUFWLFVBQVcsS0FBWSxFQUFFLFFBQWlCO1FBQ3RDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7Ozs7Ozs7SUFFRCw0Q0FBVzs7Ozs7O0lBQVgsVUFBWSxJQUFTLEVBQUUsSUFBVSxFQUFFLFFBQWlCO1FBQ2hELE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUMxQyxDQUFDOzs7OztJQUVELDBDQUFTOzs7O0lBQVQsVUFBVSxJQUFTO1FBQ2YsT0FBTyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDO0lBRUwsNkJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDYWxlbmRhckZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnkuaW50ZXJmYWNlJztcbmltcG9ydCB7IFllYXIgfSBmcm9tICcuLi95ZWFyL3llYXIuY2xhc3MnO1xuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICcuLi9jYWxlbmRhcic7XG5pbXBvcnQgeyBJWWVhciB9IGZyb20gJy4uL3llYXIveWVhci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSU1vbnRoIH0gZnJvbSAnLi4vbW9udGgvbW9udGguaW50ZXJmYWNlJztcbmltcG9ydCB7IE1vbnRoIH0gZnJvbSAnLi4vbW9udGgvbW9udGguY2xhc3MnO1xuaW1wb3J0IHsgSURheSB9IGZyb20gJy4uL2RheS9kYXkuaW50ZXJmYWNlJztcbmltcG9ydCB7IERheSB9IGZyb20gJy4uL2RheS9kYXkuY2xhc3MnO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJEZWZhdWx0RmFjdG9yeSBpbXBsZW1lbnRzIElDYWxlbmRhckZhY3Rvcnkge1xuXG4gICAgY3JlYXRlWWVhcih2YWx1ZTpudW1iZXIsIGNhbGVuZGFyOkNhbGVuZGFyKTpJWWVhciB7XG4gICAgICAgIHJldHVybiBuZXcgWWVhcih2YWx1ZSwgY2FsZW5kYXIpXG4gICAgfVxuXG4gICAgY3JlYXRlTW9udGgoZGF0ZTpEYXRlLCB5ZWFyOklZZWFyLCBjYWxlbmRhcjpDYWxlbmRhcik6SU1vbnRoIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNb250aChkYXRlLCB5ZWFyLCBjYWxlbmRhcilcbiAgICB9XG5cbiAgICBjcmVhdGVEYXkoZGF0ZTpEYXRlKTpJRGF5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXkoZGF0ZSlcbiAgICB9XG5cbn1cbiJdfQ==