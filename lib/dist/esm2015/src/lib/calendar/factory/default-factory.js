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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jYWxlbmRhci9mYWN0b3J5L2RlZmF1bHQtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSTFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFdkMsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7O0lBRS9CLFVBQVUsQ0FBQyxLQUFZLEVBQUUsUUFBaUI7UUFDdEMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUE7SUFDcEMsQ0FBQzs7Ozs7OztJQUVELFdBQVcsQ0FBQyxJQUFTLEVBQUUsSUFBVSxFQUFFLFFBQWlCO1FBQ2hELE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUMxQyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFTO1FBQ2YsT0FBTyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ2FsZW5kYXJGYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5LmludGVyZmFjZSc7XG5pbXBvcnQgeyBZZWFyIH0gZnJvbSAnLi4veWVhci95ZWFyLmNsYXNzJztcbmltcG9ydCB7IENhbGVuZGFyIH0gZnJvbSAnLi4vY2FsZW5kYXInO1xuaW1wb3J0IHsgSVllYXIgfSBmcm9tICcuLi95ZWFyL3llYXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IElNb250aCB9IGZyb20gJy4uL21vbnRoL21vbnRoLmludGVyZmFjZSc7XG5pbXBvcnQgeyBNb250aCB9IGZyb20gJy4uL21vbnRoL21vbnRoLmNsYXNzJztcbmltcG9ydCB7IElEYXkgfSBmcm9tICcuLi9kYXkvZGF5LmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYXkgfSBmcm9tICcuLi9kYXkvZGF5LmNsYXNzJztcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRGVmYXVsdEZhY3RvcnkgaW1wbGVtZW50cyBJQ2FsZW5kYXJGYWN0b3J5IHtcblxuICAgIGNyZWF0ZVllYXIodmFsdWU6bnVtYmVyLCBjYWxlbmRhcjpDYWxlbmRhcik6SVllYXIge1xuICAgICAgICByZXR1cm4gbmV3IFllYXIodmFsdWUsIGNhbGVuZGFyKVxuICAgIH1cblxuICAgIGNyZWF0ZU1vbnRoKGRhdGU6RGF0ZSwgeWVhcjpJWWVhciwgY2FsZW5kYXI6Q2FsZW5kYXIpOklNb250aCB7XG4gICAgICAgIHJldHVybiBuZXcgTW9udGgoZGF0ZSwgeWVhciwgY2FsZW5kYXIpXG4gICAgfVxuXG4gICAgY3JlYXRlRGF5KGRhdGU6RGF0ZSk6SURheSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF5KGRhdGUpXG4gICAgfVxuXG59XG4iXX0=