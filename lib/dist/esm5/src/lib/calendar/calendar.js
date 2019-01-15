/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fns from 'date-fns';
import { CalendarDefaultFactory } from './factory/default-factory';
import { CalendarConfig } from './config/calendar-config.class';
var Calendar = /** @class */ (function () {
    function Calendar(factory, config) {
        if (factory === void 0) { factory = new CalendarDefaultFactory(); }
        if (config === void 0) { config = new CalendarConfig(); }
        this.factory = factory;
        this.config = config;
        this.years = [];
    }
    /**
     * @return {?}
     */
    Calendar.prototype.recalculate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var _years = this.years.slice();
        this.years = [];
        // debugger
        _years.map(function (year) { return _this.getYear(year.value); });
    };
    /**
     * @param {?} payloads
     * @return {?}
     */
    Calendar.prototype.setDaysPayload = /**
     * @param {?} payloads
     * @return {?}
     */
    function (payloads) {
        var _this = this;
        // this.recalculate()
        payloads.forEach(function (payload) { return _this.setDay(payload.date, payload.payload); });
    };
    /**
     * @param {?} dateString
     * @param {?} day
     * @return {?}
     */
    Calendar.prototype.setDay = /**
     * @param {?} dateString
     * @param {?} day
     * @return {?}
     */
    function (dateString, day) {
        /** @type {?} */
        var date = new Date(dateString);
        /** @type {?} */
        var year = fns.getYear(date);
        /** @type {?} */
        var month = fns.getMonth(date);
        /** @type {?} */
        var selectedYear = this.getYear(year);
        /** @type {?} */
        var selectedMonth = selectedYear.getMonth(month);
        selectedMonth.setDay(day);
    };
    /**
     * @param {?} year
     * @return {?}
     */
    Calendar.prototype.getYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var currentYear = this.years.find(function (y) { return y.value === year; });
        if (!currentYear) {
            currentYear = this.factory.createYear(year, this);
            this.years.push(currentYear);
        }
        return currentYear;
    };
    /**
     * @return {?}
     */
    Calendar.prototype.getCurrentYear = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var year = fns.getYear(new Date());
        return this.getYear(year);
    };
    /**
     * @param {?} currentMonth
     * @return {?}
     */
    Calendar.prototype.getPreviousMonth = /**
     * @param {?} currentMonth
     * @return {?}
     */
    function (currentMonth) {
        /** @type {?} */
        var previousYear = this.getYear(currentMonth.year.value - 1);
        /** @type {?} */
        var previousMonth = previousYear.months[11];
        return previousMonth;
    };
    /**
     * @param {?} currentMonth
     * @return {?}
     */
    Calendar.prototype.getNextMonth = /**
     * @param {?} currentMonth
     * @return {?}
     */
    function (currentMonth) {
        /** @type {?} */
        var nextYear = this.getYear(currentMonth.year.value + 1);
        /** @type {?} */
        var nextMonth = nextYear.months[0];
        return nextMonth;
    };
    return Calendar;
}());
export { Calendar };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Calendar.prototype.years;
    /** @type {?} */
    Calendar.prototype.factory;
    /** @type {?} */
    Calendar.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvbGliL2NhbGVuZGFyL2NhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssR0FBRyxNQUFNLFVBQVUsQ0FBQztBQUdoQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUduRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFaEU7SUFJSSxrQkFDb0IsT0FBd0QsRUFDakUsTUFBNkM7UUFEcEMsd0JBQUEsRUFBQSxjQUFnQyxzQkFBc0IsRUFBRTtRQUNqRSx1QkFBQSxFQUFBLGFBQTZCLGNBQWMsRUFBRTtRQURwQyxZQUFPLEdBQVAsT0FBTyxDQUFpRDtRQUNqRSxXQUFNLEdBQU4sTUFBTSxDQUF1QztRQUpoRCxVQUFLLEdBQVksRUFBRSxDQUFDO0lBS3pCLENBQUM7Ozs7SUFFSiw4QkFBVzs7O0lBQVg7UUFBQSxpQkFNQzs7WUFMUyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7UUFFakMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsV0FBVztRQUNYLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsaUNBQWM7Ozs7SUFBZCxVQUFlLFFBQTJDO1FBQTFELGlCQUdDO1FBRkcscUJBQXFCO1FBQ3JCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUExQyxDQUEwQyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7O0lBRUQseUJBQU07Ozs7O0lBQU4sVUFBTyxVQUFrQixFQUFFLEdBQVM7O1lBQzFCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUM7O1lBQzNCLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzs7WUFDeEIsS0FBSyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDOztZQUUxQixZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7O1lBQ2pDLGFBQWEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUNsRCxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsMEJBQU87Ozs7SUFBUCxVQUFRLElBQVk7O1lBQ1osV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQWhCLENBQWdCLENBQUM7UUFFeEQsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNkLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEM7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsaUNBQWM7OztJQUFkOztZQUNVLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFFcEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsbUNBQWdCOzs7O0lBQWhCLFVBQWlCLFlBQW9COztZQUMzQixZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7O1lBRXhELGFBQWEsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUU3QyxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELCtCQUFZOzs7O0lBQVosVUFBYSxZQUFvQjs7WUFDdkIsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztZQUVwRCxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFcEMsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUdMLGVBQUM7QUFBRCxDQUFDLEFBbEVELElBa0VDOzs7Ozs7O0lBaEVHLHlCQUE0Qjs7SUFHeEIsMkJBQXdFOztJQUN4RSwwQkFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmbnMgZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgSVllYXIgfSBmcm9tICcuL3llYXIveWVhci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUNhbGVuZGFyRmFjdG9yeSB9IGZyb20gJy4vZmFjdG9yeS9mYWN0b3J5LmludGVyZmFjZSc7XG5pbXBvcnQgeyBDYWxlbmRhckRlZmF1bHRGYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5L2RlZmF1bHQtZmFjdG9yeSc7XG5pbXBvcnQgeyBJTW9udGggfSBmcm9tICcuL21vbnRoL21vbnRoLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJRGF5IH0gZnJvbSAnLi9kYXkvZGF5LmludGVyZmFjZSc7XG5pbXBvcnQgeyBDYWxlbmRhckNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2NhbGVuZGFyLWNvbmZpZy5jbGFzcyc7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhciB7XG5cbiAgICBwcml2YXRlIHllYXJzOiBJWWVhcltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGZhY3Rvcnk6IElDYWxlbmRhckZhY3RvcnkgPSBuZXcgQ2FsZW5kYXJEZWZhdWx0RmFjdG9yeSgpLFxuICAgICAgICBwdWJsaWMgY29uZmlnOiBDYWxlbmRhckNvbmZpZyA9IG5ldyBDYWxlbmRhckNvbmZpZygpXG4gICAgKSB7fVxuXG4gICAgcmVjYWxjdWxhdGUoKSB7XG4gICAgICAgIGNvbnN0IF95ZWFycyA9IHRoaXMueWVhcnMuc2xpY2UoKTtcblxuICAgICAgICB0aGlzLnllYXJzID0gW107XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIF95ZWFycy5tYXAoeWVhciA9PiB0aGlzLmdldFllYXIoeWVhci52YWx1ZSkpO1xuICAgIH1cblxuICAgIHNldERheXNQYXlsb2FkKHBheWxvYWRzOiB7IGRhdGU6IHN0cmluZywgcGF5bG9hZDogSURheSB9W10pIHtcbiAgICAgICAgLy8gdGhpcy5yZWNhbGN1bGF0ZSgpXG4gICAgICAgIHBheWxvYWRzLmZvckVhY2gocGF5bG9hZCA9PiB0aGlzLnNldERheShwYXlsb2FkLmRhdGUsIHBheWxvYWQucGF5bG9hZCkpO1xuICAgIH1cblxuICAgIHNldERheShkYXRlU3RyaW5nOiBzdHJpbmcsIGRheTogSURheSkge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG4gICAgICAgIGNvbnN0IHllYXIgPSBmbnMuZ2V0WWVhcihkYXRlKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBmbnMuZ2V0TW9udGgoZGF0ZSk7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRZZWFyID0gdGhpcy5nZXRZZWFyKHllYXIpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZE1vbnRoID0gc2VsZWN0ZWRZZWFyLmdldE1vbnRoKG1vbnRoKTtcbiAgICAgICAgc2VsZWN0ZWRNb250aC5zZXREYXkoZGF5KTtcbiAgICB9XG5cbiAgICBnZXRZZWFyKHllYXI6IG51bWJlcik6IElZZWFyIHtcbiAgICAgICAgbGV0IGN1cnJlbnRZZWFyID0gdGhpcy55ZWFycy5maW5kKHkgPT4geS52YWx1ZSA9PT0geWVhcik7XG5cbiAgICAgICAgaWYgKCFjdXJyZW50WWVhcikge1xuICAgICAgICAgICAgY3VycmVudFllYXIgPSB0aGlzLmZhY3RvcnkuY3JlYXRlWWVhcih5ZWFyLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMueWVhcnMucHVzaChjdXJyZW50WWVhcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3VycmVudFllYXI7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFllYXIoKTogSVllYXIge1xuICAgICAgICBjb25zdCB5ZWFyID0gZm5zLmdldFllYXIobmV3IERhdGUoKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0WWVhcih5ZWFyKTtcbiAgICB9XG5cbiAgICBnZXRQcmV2aW91c01vbnRoKGN1cnJlbnRNb250aDogSU1vbnRoKTogSU1vbnRoIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNZZWFyID0gdGhpcy5nZXRZZWFyKGN1cnJlbnRNb250aC55ZWFyLnZhbHVlIC0gMSk7XG5cbiAgICAgICAgY29uc3QgcHJldmlvdXNNb250aCA9IHByZXZpb3VzWWVhci5tb250aHNbMTFdO1xuXG4gICAgICAgIHJldHVybiBwcmV2aW91c01vbnRoO1xuICAgIH1cblxuICAgIGdldE5leHRNb250aChjdXJyZW50TW9udGg6IElNb250aCk6IElNb250aCB7XG4gICAgICAgIGNvbnN0IG5leHRZZWFyID0gdGhpcy5nZXRZZWFyKGN1cnJlbnRNb250aC55ZWFyLnZhbHVlICsgMSk7XG5cbiAgICAgICAgY29uc3QgbmV4dE1vbnRoID0gbmV4dFllYXIubW9udGhzWzBdO1xuXG4gICAgICAgIHJldHVybiBuZXh0TW9udGg7XG4gICAgfVxuXG5cbn1cbiJdfQ==