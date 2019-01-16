/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { addMonths, addHours, startOfMonth } from 'date-fns';
var Year = /** @class */ (function () {
    function Year(value, calendar) {
        this.value = value;
        this.calendar = calendar;
        this.months = [];
        /** @type {?} */
        var date = addHours(new Date(value + "-01-01"), 12);
        this.months.push(this.calendar.factory.createMonth(date, this, calendar));
        for (var m = 0; m < 12; m++) {
            date = startOfMonth(addMonths(date, 1));
            this.months.push(this.calendar.factory.createMonth(date, this, calendar));
        }
    }
    /**
     * @param {?} currentMonth
     * @return {?}
     */
    Year.prototype.previousMonth = /**
     * @param {?} currentMonth
     * @return {?}
     */
    function (currentMonth) {
        /** @type {?} */
        var previousMonth;
        if (currentMonth.ofYear > 0) {
            previousMonth = currentMonth.year.months[currentMonth.ofYear - 1];
        }
        else {
            previousMonth = this.calendar.getPreviousMonth(currentMonth);
        }
        return previousMonth;
    };
    /**
     * @param {?} currentMonth
     * @return {?}
     */
    Year.prototype.nextMonth = /**
     * @param {?} currentMonth
     * @return {?}
     */
    function (currentMonth) {
        /** @type {?} */
        var nextMonth;
        if (currentMonth.ofYear < 11) {
            nextMonth = currentMonth.year.months[currentMonth.ofYear + 1];
        }
        else {
            nextMonth = this.calendar.getNextMonth(currentMonth);
        }
        return nextMonth;
    };
    /**
     * @param {?} month
     * @return {?}
     */
    Year.prototype.getMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        return this.months[month];
    };
    return Year;
}());
export { Year };
if (false) {
    /** @type {?} */
    Year.prototype.months;
    /** @type {?} */
    Year.prototype.value;
    /** @type {?} */
    Year.prototype.calendar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RyYi1jYWxlbmRhci8iLCJzb3VyY2VzIjpbInNyYy9saWIvY2FsZW5kYXIveWVhci95ZWFyLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixZQUFZLEVBQ2QsTUFBTSxVQUFVLENBQUM7QUFJbkI7SUFHSSxjQUE0QixLQUFhLEVBQWtCLFFBQWtCO1FBQWpELFVBQUssR0FBTCxLQUFLLENBQVE7UUFBa0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUZwRSxXQUFNLEdBQWEsRUFBRSxDQUFDOztZQUd2QixJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFJLEtBQUssV0FBUSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRW5ELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFMUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixJQUFJLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQzdFO0lBQ0wsQ0FBQzs7Ozs7SUFFRCw0QkFBYTs7OztJQUFiLFVBQWMsWUFBb0I7O1lBQzFCLGFBQXFCO1FBRXpCLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekIsYUFBYSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDckU7YUFBTTtZQUNILGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2hFO1FBRUQsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCx3QkFBUzs7OztJQUFULFVBQVUsWUFBb0I7O1lBQ3RCLFNBQWlCO1FBRXJCLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7WUFDMUIsU0FBUyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDakU7YUFBTTtZQUNILFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RDtRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsdUJBQVE7Ozs7SUFBUixVQUFTLEtBQWE7UUFDbEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTCxXQUFDO0FBQUQsQ0FBQyxBQTFDRCxJQTBDQzs7OztJQXpDRyxzQkFBK0I7O0lBRW5CLHFCQUE2Qjs7SUFBRSx3QkFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTW9udGggfSBmcm9tICcuLi9tb250aC9tb250aC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICcuLi9jYWxlbmRhcic7XG5pbXBvcnQge1xuICAgIGFkZE1vbnRocyxcbiAgICBhZGRIb3VycyxcbiAgICBzdGFydE9mTW9udGhcbiB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IElZZWFyIH0gZnJvbSAnLi95ZWFyLmludGVyZmFjZSc7XG5cblxuZXhwb3J0IGNsYXNzIFllYXIgaW1wbGVtZW50cyBJWWVhciB7XG4gICAgcmVhZG9ubHkgbW9udGhzOiBJTW9udGhbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHZhbHVlOiBudW1iZXIsIHB1YmxpYyByZWFkb25seSBjYWxlbmRhcjogQ2FsZW5kYXIpIHtcbiAgICAgICAgbGV0IGRhdGUgPSBhZGRIb3VycyhuZXcgRGF0ZShgJHt2YWx1ZX0tMDEtMDFgKSwgMTIpO1xuXG4gICAgICAgIHRoaXMubW9udGhzLnB1c2godGhpcy5jYWxlbmRhci5mYWN0b3J5LmNyZWF0ZU1vbnRoKGRhdGUsIHRoaXMsIGNhbGVuZGFyKSk7XG5cbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCAxMjsgbSsrKSB7XG4gICAgICAgICAgICBkYXRlID0gc3RhcnRPZk1vbnRoKGFkZE1vbnRocyhkYXRlLCAxKSk7XG4gICAgICAgICAgICB0aGlzLm1vbnRocy5wdXNoKHRoaXMuY2FsZW5kYXIuZmFjdG9yeS5jcmVhdGVNb250aChkYXRlLCB0aGlzLCBjYWxlbmRhcikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJldmlvdXNNb250aChjdXJyZW50TW9udGg6IElNb250aCk6IElNb250aCB7XG4gICAgICAgIGxldCBwcmV2aW91c01vbnRoOiBJTW9udGg7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRNb250aC5vZlllYXIgPiAwKSB7XG4gICAgICAgICAgICBwcmV2aW91c01vbnRoID0gY3VycmVudE1vbnRoLnllYXIubW9udGhzW2N1cnJlbnRNb250aC5vZlllYXIgLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByZXZpb3VzTW9udGggPSB0aGlzLmNhbGVuZGFyLmdldFByZXZpb3VzTW9udGgoY3VycmVudE1vbnRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcmV2aW91c01vbnRoO1xuICAgIH1cblxuICAgIG5leHRNb250aChjdXJyZW50TW9udGg6IElNb250aCk6IElNb250aCB7XG4gICAgICAgIGxldCBuZXh0TW9udGg6IElNb250aDtcblxuICAgICAgICBpZiAoY3VycmVudE1vbnRoLm9mWWVhciA8IDExKSB7XG4gICAgICAgICAgICBuZXh0TW9udGggPSBjdXJyZW50TW9udGgueWVhci5tb250aHNbY3VycmVudE1vbnRoLm9mWWVhciArIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV4dE1vbnRoID0gdGhpcy5jYWxlbmRhci5nZXROZXh0TW9udGgoY3VycmVudE1vbnRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0TW9udGg7XG4gICAgfVxuXG4gICAgZ2V0TW9udGgobW9udGg6IG51bWJlcik6IElNb250aCB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vbnRoc1ttb250aF07XG4gICAgfVxuXG59XG4iXX0=