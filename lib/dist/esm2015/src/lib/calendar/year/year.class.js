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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RyYi1jYWxlbmRhci8iLCJzb3VyY2VzIjpbInNyYy9saWIvY2FsZW5kYXIveWVhci95ZWFyLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFFBQVEsRUFDUixZQUFZLEVBQ2QsTUFBTSxVQUFVLENBQUM7QUFJbkIsTUFBTSxPQUFPLElBQUk7Ozs7O0lBR2IsWUFBNEIsS0FBYSxFQUFrQixRQUFrQjtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQWtCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFGcEUsV0FBTSxHQUFhLEVBQUUsQ0FBQzs7WUFHdkIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRW5ELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFMUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixJQUFJLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQzdFO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsWUFBb0I7O1lBQzFCLGFBQXFCO1FBRXpCLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekIsYUFBYSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDckU7YUFBTTtZQUNILGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2hFO1FBRUQsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsWUFBb0I7O1lBQ3RCLFNBQWlCO1FBRXJCLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7WUFDMUIsU0FBUyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDakU7YUFBTTtZQUNILFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RDtRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDbEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FFSjs7O0lBekNHLHNCQUErQjs7SUFFbkIscUJBQTZCOztJQUFFLHdCQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElNb250aCB9IGZyb20gJy4uL21vbnRoL21vbnRoLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gJy4uL2NhbGVuZGFyJztcbmltcG9ydCB7XG4gICAgYWRkTW9udGhzLFxuICAgIGFkZEhvdXJzLFxuICAgIHN0YXJ0T2ZNb250aFxuIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgSVllYXIgfSBmcm9tICcuL3llYXIuaW50ZXJmYWNlJztcblxuXG5leHBvcnQgY2xhc3MgWWVhciBpbXBsZW1lbnRzIElZZWFyIHtcbiAgICByZWFkb25seSBtb250aHM6IElNb250aFtdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgdmFsdWU6IG51bWJlciwgcHVibGljIHJlYWRvbmx5IGNhbGVuZGFyOiBDYWxlbmRhcikge1xuICAgICAgICBsZXQgZGF0ZSA9IGFkZEhvdXJzKG5ldyBEYXRlKGAke3ZhbHVlfS0wMS0wMWApLCAxMik7XG5cbiAgICAgICAgdGhpcy5tb250aHMucHVzaCh0aGlzLmNhbGVuZGFyLmZhY3RvcnkuY3JlYXRlTW9udGgoZGF0ZSwgdGhpcywgY2FsZW5kYXIpKTtcblxuICAgICAgICBmb3IgKGxldCBtID0gMDsgbSA8IDEyOyBtKyspIHtcbiAgICAgICAgICAgIGRhdGUgPSBzdGFydE9mTW9udGgoYWRkTW9udGhzKGRhdGUsIDEpKTtcbiAgICAgICAgICAgIHRoaXMubW9udGhzLnB1c2godGhpcy5jYWxlbmRhci5mYWN0b3J5LmNyZWF0ZU1vbnRoKGRhdGUsIHRoaXMsIGNhbGVuZGFyKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmV2aW91c01vbnRoKGN1cnJlbnRNb250aDogSU1vbnRoKTogSU1vbnRoIHtcbiAgICAgICAgbGV0IHByZXZpb3VzTW9udGg6IElNb250aDtcblxuICAgICAgICBpZiAoY3VycmVudE1vbnRoLm9mWWVhciA+IDApIHtcbiAgICAgICAgICAgIHByZXZpb3VzTW9udGggPSBjdXJyZW50TW9udGgueWVhci5tb250aHNbY3VycmVudE1vbnRoLm9mWWVhciAtIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJldmlvdXNNb250aCA9IHRoaXMuY2FsZW5kYXIuZ2V0UHJldmlvdXNNb250aChjdXJyZW50TW9udGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByZXZpb3VzTW9udGg7XG4gICAgfVxuXG4gICAgbmV4dE1vbnRoKGN1cnJlbnRNb250aDogSU1vbnRoKTogSU1vbnRoIHtcbiAgICAgICAgbGV0IG5leHRNb250aDogSU1vbnRoO1xuXG4gICAgICAgIGlmIChjdXJyZW50TW9udGgub2ZZZWFyIDwgMTEpIHtcbiAgICAgICAgICAgIG5leHRNb250aCA9IGN1cnJlbnRNb250aC55ZWFyLm1vbnRoc1tjdXJyZW50TW9udGgub2ZZZWFyICsgMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0TW9udGggPSB0aGlzLmNhbGVuZGFyLmdldE5leHRNb250aChjdXJyZW50TW9udGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5leHRNb250aDtcbiAgICB9XG5cbiAgICBnZXRNb250aChtb250aDogbnVtYmVyKTogSU1vbnRoIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9udGhzW21vbnRoXTtcbiAgICB9XG5cbn1cbiJdfQ==