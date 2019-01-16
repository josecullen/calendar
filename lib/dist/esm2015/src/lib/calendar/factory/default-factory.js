/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Year } from '../year/year.class';
import { Month } from '../month/month.class';
import { Day } from '../day/day.class';
export class CalendarDefaultFactory {
    /**
     * @param {?} value
     * @param {?} calendar
     * @return {?}
     */
    createYear(value, calendar) {
        return new Year(value, calendar);
    }
    /**
     * @param {?} date
     * @param {?} year
     * @param {?} calendar
     * @return {?}
     */
    createMonth(date, year, calendar) {
        return new Month(date, year, calendar);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    createDay(date) {
        return new Day(date);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jYWxlbmRhci9mYWN0b3J5L2RlZmF1bHQtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSTFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFdkMsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7O0lBRS9CLFVBQVUsQ0FBQyxLQUFhLEVBQUUsUUFBa0I7UUFDeEMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7OztJQUVELFdBQVcsQ0FBQyxJQUFVLEVBQUUsSUFBVyxFQUFFLFFBQWtCO1FBQ25ELE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFVO1FBQ2hCLE9BQU8sSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUNhbGVuZGFyRmFjdG9yeSB9IGZyb20gJy4vZmFjdG9yeS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgWWVhciB9IGZyb20gJy4uL3llYXIveWVhci5jbGFzcyc7XG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gJy4uL2NhbGVuZGFyJztcbmltcG9ydCB7IElZZWFyIH0gZnJvbSAnLi4veWVhci95ZWFyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJTW9udGggfSBmcm9tICcuLi9tb250aC9tb250aC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTW9udGggfSBmcm9tICcuLi9tb250aC9tb250aC5jbGFzcyc7XG5pbXBvcnQgeyBJRGF5IH0gZnJvbSAnLi4vZGF5L2RheS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGF5IH0gZnJvbSAnLi4vZGF5L2RheS5jbGFzcyc7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhckRlZmF1bHRGYWN0b3J5IGltcGxlbWVudHMgSUNhbGVuZGFyRmFjdG9yeSB7XG5cbiAgICBjcmVhdGVZZWFyKHZhbHVlOiBudW1iZXIsIGNhbGVuZGFyOiBDYWxlbmRhcik6IElZZWFyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBZZWFyKHZhbHVlLCBjYWxlbmRhcik7XG4gICAgfVxuXG4gICAgY3JlYXRlTW9udGgoZGF0ZTogRGF0ZSwgeWVhcjogSVllYXIsIGNhbGVuZGFyOiBDYWxlbmRhcik6IElNb250aCB7XG4gICAgICAgIHJldHVybiBuZXcgTW9udGgoZGF0ZSwgeWVhciwgY2FsZW5kYXIpO1xuICAgIH1cblxuICAgIGNyZWF0ZURheShkYXRlOiBEYXRlKTogSURheSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF5KGRhdGUpO1xuICAgIH1cblxufVxuIl19