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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RyYi1jYWxlbmRhci8iLCJzb3VyY2VzIjpbInNyYy9saWIvY2FsZW5kYXIveWVhci95ZWFyLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixZQUFZLEVBQ2QsTUFBTSxVQUFVLENBQUE7QUFJbEI7SUFHSSxjQUE0QixLQUFhLEVBQWtCLFFBQWlCO1FBQWhELFVBQUssR0FBTCxLQUFLLENBQVE7UUFBa0IsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUZuRSxXQUFNLEdBQVksRUFBRSxDQUFBOztZQUdyQixJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFJLEtBQUssV0FBUSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRW5ELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFFekUsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBQztZQUN2QixJQUFJLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFBO1NBQzVFO0lBQ0wsQ0FBQzs7Ozs7SUFFRCw0QkFBYTs7OztJQUFiLFVBQWMsWUFBbUI7O1lBQ3pCLGFBQW9CO1FBRXhCLElBQUcsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7WUFDdkIsYUFBYSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUUsQ0FBQyxDQUFDLENBQUE7U0FDbkU7YUFBTTtZQUNILGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFBO1NBQy9EO1FBRUQsT0FBTyxhQUFhLENBQUE7SUFDeEIsQ0FBQzs7Ozs7SUFFRCx3QkFBUzs7OztJQUFULFVBQVUsWUFBbUI7O1lBQ3JCLFNBQWdCO1FBRXBCLElBQUcsWUFBWSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUM7WUFDeEIsU0FBUyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUUsQ0FBQyxDQUFDLENBQUE7U0FDL0Q7YUFBTTtZQUNILFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQTtTQUN2RDtRQUVELE9BQU8sU0FBUyxDQUFBO0lBQ3BCLENBQUM7Ozs7O0lBRUQsdUJBQVE7Ozs7SUFBUixVQUFTLEtBQVk7UUFDakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFTCxXQUFDO0FBQUQsQ0FBQyxBQTFDRCxJQTBDQzs7OztJQXpDRyxzQkFBNkI7O0lBRWpCLHFCQUE2Qjs7SUFBRSx3QkFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTW9udGggfSBmcm9tICcuLi9tb250aC9tb250aC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICcuLi9jYWxlbmRhcic7XG5pbXBvcnQgeyBcbiAgICBhZGRNb250aHMsXG4gICAgYWRkSG91cnMsXG4gICAgc3RhcnRPZk1vbnRoXG4gfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCB7IElZZWFyIH0gZnJvbSAnLi95ZWFyLmludGVyZmFjZSc7XG5cblxuZXhwb3J0IGNsYXNzIFllYXIgaW1wbGVtZW50cyBJWWVhciB7XG4gICAgcmVhZG9ubHkgbW9udGhzOklNb250aFtdID0gW11cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSB2YWx1ZTogbnVtYmVyLCBwdWJsaWMgcmVhZG9ubHkgY2FsZW5kYXI6Q2FsZW5kYXIpe1xuICAgICAgICBsZXQgZGF0ZSA9IGFkZEhvdXJzKG5ldyBEYXRlKGAke3ZhbHVlfS0wMS0wMWApLCAxMilcbiAgICAgICAgXG4gICAgICAgIHRoaXMubW9udGhzLnB1c2godGhpcy5jYWxlbmRhci5mYWN0b3J5LmNyZWF0ZU1vbnRoKGRhdGUsIHRoaXMsIGNhbGVuZGFyKSlcblxuICAgICAgICBmb3IobGV0IG0gPSAwOyBtIDwgMTI7IG0rKyl7XG4gICAgICAgICAgICBkYXRlID0gc3RhcnRPZk1vbnRoKGFkZE1vbnRocyhkYXRlLCAxKSlcbiAgICAgICAgICAgIHRoaXMubW9udGhzLnB1c2godGhpcy5jYWxlbmRhci5mYWN0b3J5LmNyZWF0ZU1vbnRoKGRhdGUsIHRoaXMsIGNhbGVuZGFyKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByZXZpb3VzTW9udGgoY3VycmVudE1vbnRoOklNb250aCk6SU1vbnRoIHtcbiAgICAgICAgbGV0IHByZXZpb3VzTW9udGg6SU1vbnRoXG5cbiAgICAgICAgaWYoY3VycmVudE1vbnRoLm9mWWVhciA+IDApe1xuICAgICAgICAgICAgcHJldmlvdXNNb250aCA9IGN1cnJlbnRNb250aC55ZWFyLm1vbnRoc1tjdXJyZW50TW9udGgub2ZZZWFyIC0xXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJldmlvdXNNb250aCA9IHRoaXMuY2FsZW5kYXIuZ2V0UHJldmlvdXNNb250aChjdXJyZW50TW9udGgpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJldmlvdXNNb250aFxuICAgIH1cblxuICAgIG5leHRNb250aChjdXJyZW50TW9udGg6SU1vbnRoKTpJTW9udGgge1xuICAgICAgICBsZXQgbmV4dE1vbnRoOklNb250aFxuXG4gICAgICAgIGlmKGN1cnJlbnRNb250aC5vZlllYXIgPCAxMSl7XG4gICAgICAgICAgICBuZXh0TW9udGggPSBjdXJyZW50TW9udGgueWVhci5tb250aHNbY3VycmVudE1vbnRoLm9mWWVhciArMV1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHRNb250aCA9IHRoaXMuY2FsZW5kYXIuZ2V0TmV4dE1vbnRoKGN1cnJlbnRNb250aClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0TW9udGhcbiAgICB9XG5cbiAgICBnZXRNb250aChtb250aDpudW1iZXIpOklNb250aCB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vbnRoc1ttb250aF1cbiAgICB9XG5cbn1cbiJdfQ==