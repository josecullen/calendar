/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { addMonths, addHours, startOfMonth } from 'date-fns';
export class Year {
    /**
     * @param {?} value
     * @param {?} calendar
     */
    constructor(value, calendar) {
        this.value = value;
        this.calendar = calendar;
        this.months = [];
        /** @type {?} */
        let date = addHours(new Date(`${value}-01-01`), 12);
        this.months.push(this.calendar.factory.createMonth(date, this, calendar));
        for (let m = 0; m < 12; m++) {
            date = startOfMonth(addMonths(date, 1));
            this.months.push(this.calendar.factory.createMonth(date, this, calendar));
        }
    }
    /**
     * @param {?} currentMonth
     * @return {?}
     */
    previousMonth(currentMonth) {
        /** @type {?} */
        let previousMonth;
        if (currentMonth.ofYear > 0) {
            previousMonth = currentMonth.year.months[currentMonth.ofYear - 1];
        }
        else {
            previousMonth = this.calendar.getPreviousMonth(currentMonth);
        }
        return previousMonth;
    }
    /**
     * @param {?} currentMonth
     * @return {?}
     */
    nextMonth(currentMonth) {
        /** @type {?} */
        let nextMonth;
        if (currentMonth.ofYear < 11) {
            nextMonth = currentMonth.year.months[currentMonth.ofYear + 1];
        }
        else {
            nextMonth = this.calendar.getNextMonth(currentMonth);
        }
        return nextMonth;
    }
    /**
     * @param {?} month
     * @return {?}
     */
    getMonth(month) {
        return this.months[month];
    }
}
if (false) {
    /** @type {?} */
    Year.prototype.months;
    /** @type {?} */
    Year.prototype.value;
    /** @type {?} */
    Year.prototype.calendar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RyYi1jYWxlbmRhci8iLCJzb3VyY2VzIjpbInNyYy9saWIvY2FsZW5kYXIveWVhci95ZWFyLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixZQUFZLEVBQ2QsTUFBTSxVQUFVLENBQUE7QUFJbEIsTUFBTSxPQUFPLElBQUk7Ozs7O0lBR2IsWUFBNEIsS0FBYSxFQUFrQixRQUFpQjtRQUFoRCxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQWtCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFGbkUsV0FBTSxHQUFZLEVBQUUsQ0FBQTs7WUFHckIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRW5ELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFFekUsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBQztZQUN2QixJQUFJLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFBO1NBQzVFO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsWUFBbUI7O1lBQ3pCLGFBQW9CO1FBRXhCLElBQUcsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7WUFDdkIsYUFBYSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUUsQ0FBQyxDQUFDLENBQUE7U0FDbkU7YUFBTTtZQUNILGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFBO1NBQy9EO1FBRUQsT0FBTyxhQUFhLENBQUE7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsWUFBbUI7O1lBQ3JCLFNBQWdCO1FBRXBCLElBQUcsWUFBWSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUM7WUFDeEIsU0FBUyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUUsQ0FBQyxDQUFDLENBQUE7U0FDL0Q7YUFBTTtZQUNILFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQTtTQUN2RDtRQUVELE9BQU8sU0FBUyxDQUFBO0lBQ3BCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQVk7UUFDakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdCLENBQUM7Q0FFSjs7O0lBekNHLHNCQUE2Qjs7SUFFakIscUJBQTZCOztJQUFFLHdCQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElNb250aCB9IGZyb20gJy4uL21vbnRoL21vbnRoLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gJy4uL2NhbGVuZGFyJztcbmltcG9ydCB7IFxuICAgIGFkZE1vbnRocyxcbiAgICBhZGRIb3VycyxcbiAgICBzdGFydE9mTW9udGhcbiB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IHsgSVllYXIgfSBmcm9tICcuL3llYXIuaW50ZXJmYWNlJztcblxuXG5leHBvcnQgY2xhc3MgWWVhciBpbXBsZW1lbnRzIElZZWFyIHtcbiAgICByZWFkb25seSBtb250aHM6SU1vbnRoW10gPSBbXVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHZhbHVlOiBudW1iZXIsIHB1YmxpYyByZWFkb25seSBjYWxlbmRhcjpDYWxlbmRhcil7XG4gICAgICAgIGxldCBkYXRlID0gYWRkSG91cnMobmV3IERhdGUoYCR7dmFsdWV9LTAxLTAxYCksIDEyKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5tb250aHMucHVzaCh0aGlzLmNhbGVuZGFyLmZhY3RvcnkuY3JlYXRlTW9udGgoZGF0ZSwgdGhpcywgY2FsZW5kYXIpKVxuXG4gICAgICAgIGZvcihsZXQgbSA9IDA7IG0gPCAxMjsgbSsrKXtcbiAgICAgICAgICAgIGRhdGUgPSBzdGFydE9mTW9udGgoYWRkTW9udGhzKGRhdGUsIDEpKVxuICAgICAgICAgICAgdGhpcy5tb250aHMucHVzaCh0aGlzLmNhbGVuZGFyLmZhY3RvcnkuY3JlYXRlTW9udGgoZGF0ZSwgdGhpcywgY2FsZW5kYXIpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJldmlvdXNNb250aChjdXJyZW50TW9udGg6SU1vbnRoKTpJTW9udGgge1xuICAgICAgICBsZXQgcHJldmlvdXNNb250aDpJTW9udGhcblxuICAgICAgICBpZihjdXJyZW50TW9udGgub2ZZZWFyID4gMCl7XG4gICAgICAgICAgICBwcmV2aW91c01vbnRoID0gY3VycmVudE1vbnRoLnllYXIubW9udGhzW2N1cnJlbnRNb250aC5vZlllYXIgLTFdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcmV2aW91c01vbnRoID0gdGhpcy5jYWxlbmRhci5nZXRQcmV2aW91c01vbnRoKGN1cnJlbnRNb250aClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcmV2aW91c01vbnRoXG4gICAgfVxuXG4gICAgbmV4dE1vbnRoKGN1cnJlbnRNb250aDpJTW9udGgpOklNb250aCB7XG4gICAgICAgIGxldCBuZXh0TW9udGg6SU1vbnRoXG5cbiAgICAgICAgaWYoY3VycmVudE1vbnRoLm9mWWVhciA8IDExKXtcbiAgICAgICAgICAgIG5leHRNb250aCA9IGN1cnJlbnRNb250aC55ZWFyLm1vbnRoc1tjdXJyZW50TW9udGgub2ZZZWFyICsxXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV4dE1vbnRoID0gdGhpcy5jYWxlbmRhci5nZXROZXh0TW9udGgoY3VycmVudE1vbnRoKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5leHRNb250aFxuICAgIH1cblxuICAgIGdldE1vbnRoKG1vbnRoOm51bWJlcik6SU1vbnRoIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9udGhzW21vbnRoXVxuICAgIH1cblxufVxuIl19