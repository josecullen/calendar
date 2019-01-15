/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fns from 'date-fns';
import { CalendarDefaultFactory } from './factory/default-factory';
import { CalendarConfig } from './config/calendar-config.class';
export class Calendar {
    /**
     * @param {?=} factory
     * @param {?=} config
     */
    constructor(factory = new CalendarDefaultFactory(), config = new CalendarConfig()) {
        this.factory = factory;
        this.config = config;
        this.years = [];
    }
    /**
     * @return {?}
     */
    recalculate() {
        /** @type {?} */
        const _years = this.years.slice();
        this.years = [];
        // debugger
        _years.map(year => this.getYear(year.value));
    }
    /**
     * @param {?} payloads
     * @return {?}
     */
    setDaysPayload(payloads) {
        // this.recalculate()
        payloads.forEach(payload => this.setDay(payload.date, payload.payload));
    }
    /**
     * @param {?} dateString
     * @param {?} day
     * @return {?}
     */
    setDay(dateString, day) {
        /** @type {?} */
        const date = new Date(dateString);
        /** @type {?} */
        const year = fns.getYear(date);
        /** @type {?} */
        const month = fns.getMonth(date);
        /** @type {?} */
        const selectedYear = this.getYear(year);
        /** @type {?} */
        const selectedMonth = selectedYear.getMonth(month);
        selectedMonth.setDay(day);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    getYear(year) {
        /** @type {?} */
        let currentYear = this.years.find(y => y.value === year);
        if (!currentYear) {
            currentYear = this.factory.createYear(year, this);
            this.years.push(currentYear);
        }
        return currentYear;
    }
    /**
     * @return {?}
     */
    getCurrentYear() {
        /** @type {?} */
        const year = fns.getYear(new Date());
        return this.getYear(year);
    }
    /**
     * @param {?} currentMonth
     * @return {?}
     */
    getPreviousMonth(currentMonth) {
        /** @type {?} */
        const previousYear = this.getYear(currentMonth.year.value - 1);
        /** @type {?} */
        const previousMonth = previousYear.months[11];
        return previousMonth;
    }
    /**
     * @param {?} currentMonth
     * @return {?}
     */
    getNextMonth(currentMonth) {
        /** @type {?} */
        const nextYear = this.getYear(currentMonth.year.value + 1);
        /** @type {?} */
        const nextMonth = nextYear.months[0];
        return nextMonth;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvbGliL2NhbGVuZGFyL2NhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssR0FBRyxNQUFNLFVBQVUsQ0FBQztBQUdoQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUduRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFaEUsTUFBTSxPQUFPLFFBQVE7Ozs7O0lBSWpCLFlBQ29CLFVBQTRCLElBQUksc0JBQXNCLEVBQUUsRUFDakUsU0FBeUIsSUFBSSxjQUFjLEVBQUU7UUFEcEMsWUFBTyxHQUFQLE9BQU8sQ0FBaUQ7UUFDakUsV0FBTSxHQUFOLE1BQU0sQ0FBdUM7UUFKaEQsVUFBSyxHQUFZLEVBQUUsQ0FBQztJQUt6QixDQUFDOzs7O0lBRUosV0FBVzs7Y0FDRCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7UUFFakMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsV0FBVztRQUNYLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFFBQTJDO1FBQ3RELHFCQUFxQjtRQUNyQixRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxVQUFrQixFQUFFLEdBQVM7O2NBQzFCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUM7O2NBQzNCLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzs7Y0FDeEIsS0FBSyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDOztjQUUxQixZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7O2NBQ2pDLGFBQWEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUNsRCxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQVk7O1lBQ1osV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUM7UUFFeEQsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNkLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEM7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsY0FBYzs7Y0FDSixJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRXBDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLFlBQW9COztjQUMzQixZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7O2NBRXhELGFBQWEsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUU3QyxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxZQUFvQjs7Y0FDdkIsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztjQUVwRCxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFcEMsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztDQUdKOzs7Ozs7SUFoRUcseUJBQTRCOztJQUd4QiwyQkFBd0U7O0lBQ3hFLDBCQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZucyBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBJWWVhciB9IGZyb20gJy4veWVhci95ZWFyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJQ2FsZW5kYXJGYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5L2ZhY3RvcnkuaW50ZXJmYWNlJztcbmltcG9ydCB7IENhbGVuZGFyRGVmYXVsdEZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnkvZGVmYXVsdC1mYWN0b3J5JztcbmltcG9ydCB7IElNb250aCB9IGZyb20gJy4vbW9udGgvbW9udGguaW50ZXJmYWNlJztcbmltcG9ydCB7IElEYXkgfSBmcm9tICcuL2RheS9kYXkuaW50ZXJmYWNlJztcbmltcG9ydCB7IENhbGVuZGFyQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvY2FsZW5kYXItY29uZmlnLmNsYXNzJztcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyIHtcblxuICAgIHByaXZhdGUgeWVhcnM6IElZZWFyW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgZmFjdG9yeTogSUNhbGVuZGFyRmFjdG9yeSA9IG5ldyBDYWxlbmRhckRlZmF1bHRGYWN0b3J5KCksXG4gICAgICAgIHB1YmxpYyBjb25maWc6IENhbGVuZGFyQ29uZmlnID0gbmV3IENhbGVuZGFyQ29uZmlnKClcbiAgICApIHt9XG5cbiAgICByZWNhbGN1bGF0ZSgpIHtcbiAgICAgICAgY29uc3QgX3llYXJzID0gdGhpcy55ZWFycy5zbGljZSgpO1xuXG4gICAgICAgIHRoaXMueWVhcnMgPSBbXTtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgX3llYXJzLm1hcCh5ZWFyID0+IHRoaXMuZ2V0WWVhcih5ZWFyLnZhbHVlKSk7XG4gICAgfVxuXG4gICAgc2V0RGF5c1BheWxvYWQocGF5bG9hZHM6IHsgZGF0ZTogc3RyaW5nLCBwYXlsb2FkOiBJRGF5IH1bXSkge1xuICAgICAgICAvLyB0aGlzLnJlY2FsY3VsYXRlKClcbiAgICAgICAgcGF5bG9hZHMuZm9yRWFjaChwYXlsb2FkID0+IHRoaXMuc2V0RGF5KHBheWxvYWQuZGF0ZSwgcGF5bG9hZC5wYXlsb2FkKSk7XG4gICAgfVxuXG4gICAgc2V0RGF5KGRhdGVTdHJpbmc6IHN0cmluZywgZGF5OiBJRGF5KSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgICAgICAgY29uc3QgeWVhciA9IGZucy5nZXRZZWFyKGRhdGUpO1xuICAgICAgICBjb25zdCBtb250aCA9IGZucy5nZXRNb250aChkYXRlKTtcblxuICAgICAgICBjb25zdCBzZWxlY3RlZFllYXIgPSB0aGlzLmdldFllYXIoeWVhcik7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkTW9udGggPSBzZWxlY3RlZFllYXIuZ2V0TW9udGgobW9udGgpO1xuICAgICAgICBzZWxlY3RlZE1vbnRoLnNldERheShkYXkpO1xuICAgIH1cblxuICAgIGdldFllYXIoeWVhcjogbnVtYmVyKTogSVllYXIge1xuICAgICAgICBsZXQgY3VycmVudFllYXIgPSB0aGlzLnllYXJzLmZpbmQoeSA9PiB5LnZhbHVlID09PSB5ZWFyKTtcblxuICAgICAgICBpZiAoIWN1cnJlbnRZZWFyKSB7XG4gICAgICAgICAgICBjdXJyZW50WWVhciA9IHRoaXMuZmFjdG9yeS5jcmVhdGVZZWFyKHllYXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy55ZWFycy5wdXNoKGN1cnJlbnRZZWFyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjdXJyZW50WWVhcjtcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50WWVhcigpOiBJWWVhciB7XG4gICAgICAgIGNvbnN0IHllYXIgPSBmbnMuZ2V0WWVhcihuZXcgRGF0ZSgpKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRZZWFyKHllYXIpO1xuICAgIH1cblxuICAgIGdldFByZXZpb3VzTW9udGgoY3VycmVudE1vbnRoOiBJTW9udGgpOiBJTW9udGgge1xuICAgICAgICBjb25zdCBwcmV2aW91c1llYXIgPSB0aGlzLmdldFllYXIoY3VycmVudE1vbnRoLnllYXIudmFsdWUgLSAxKTtcblxuICAgICAgICBjb25zdCBwcmV2aW91c01vbnRoID0gcHJldmlvdXNZZWFyLm1vbnRoc1sxMV07XG5cbiAgICAgICAgcmV0dXJuIHByZXZpb3VzTW9udGg7XG4gICAgfVxuXG4gICAgZ2V0TmV4dE1vbnRoKGN1cnJlbnRNb250aDogSU1vbnRoKTogSU1vbnRoIHtcbiAgICAgICAgY29uc3QgbmV4dFllYXIgPSB0aGlzLmdldFllYXIoY3VycmVudE1vbnRoLnllYXIudmFsdWUgKyAxKTtcblxuICAgICAgICBjb25zdCBuZXh0TW9udGggPSBuZXh0WWVhci5tb250aHNbMF07XG5cbiAgICAgICAgcmV0dXJuIG5leHRNb250aDtcbiAgICB9XG5cblxufVxuIl19