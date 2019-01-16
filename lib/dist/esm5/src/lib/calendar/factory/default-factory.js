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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jYWxlbmRhci9mYWN0b3J5L2RlZmF1bHQtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSTFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFdkM7SUFBQTtJQWNBLENBQUM7Ozs7OztJQVpHLDJDQUFVOzs7OztJQUFWLFVBQVcsS0FBYSxFQUFFLFFBQWtCO1FBQ3hDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7Ozs7SUFFRCw0Q0FBVzs7Ozs7O0lBQVgsVUFBWSxJQUFVLEVBQUUsSUFBVyxFQUFFLFFBQWtCO1FBQ25ELE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELDBDQUFTOzs7O0lBQVQsVUFBVSxJQUFVO1FBQ2hCLE9BQU8sSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVMLDZCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ2FsZW5kYXJGYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5LmludGVyZmFjZSc7XG5pbXBvcnQgeyBZZWFyIH0gZnJvbSAnLi4veWVhci95ZWFyLmNsYXNzJztcbmltcG9ydCB7IENhbGVuZGFyIH0gZnJvbSAnLi4vY2FsZW5kYXInO1xuaW1wb3J0IHsgSVllYXIgfSBmcm9tICcuLi95ZWFyL3llYXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IElNb250aCB9IGZyb20gJy4uL21vbnRoL21vbnRoLmludGVyZmFjZSc7XG5pbXBvcnQgeyBNb250aCB9IGZyb20gJy4uL21vbnRoL21vbnRoLmNsYXNzJztcbmltcG9ydCB7IElEYXkgfSBmcm9tICcuLi9kYXkvZGF5LmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYXkgfSBmcm9tICcuLi9kYXkvZGF5LmNsYXNzJztcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRGVmYXVsdEZhY3RvcnkgaW1wbGVtZW50cyBJQ2FsZW5kYXJGYWN0b3J5IHtcblxuICAgIGNyZWF0ZVllYXIodmFsdWU6IG51bWJlciwgY2FsZW5kYXI6IENhbGVuZGFyKTogSVllYXIge1xuICAgICAgICByZXR1cm4gbmV3IFllYXIodmFsdWUsIGNhbGVuZGFyKTtcbiAgICB9XG5cbiAgICBjcmVhdGVNb250aChkYXRlOiBEYXRlLCB5ZWFyOiBJWWVhciwgY2FsZW5kYXI6IENhbGVuZGFyKTogSU1vbnRoIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNb250aChkYXRlLCB5ZWFyLCBjYWxlbmRhcik7XG4gICAgfVxuXG4gICAgY3JlYXRlRGF5KGRhdGU6IERhdGUpOiBJRGF5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXkoZGF0ZSk7XG4gICAgfVxuXG59XG4iXX0=