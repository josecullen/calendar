/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CalendarDefaultFactory } from './lib/calendar/factory/default-factory';
import { format } from 'date-fns';
import { CellData } from './cell-data';
export class CalendarViewFactory extends CalendarDefaultFactory {
    /**
     * @param {?} date
     * @param {?=} selected
     * @param {?=} disabled
     * @return {?}
     */
    createDay(date, selected, disabled) {
        return new CellData(format(date), selected, disabled);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdmlldy5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NhbGVuZGFyLXZpZXcuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHaEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxzQkFBc0I7Ozs7Ozs7SUFFM0QsU0FBUyxDQUFDLElBQVMsRUFBRSxRQUFpQixFQUFFLFFBQWlCO1FBQ3JELE9BQU8sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ2FsZW5kYXJGYWN0b3J5IH0gZnJvbSAnLi9saWIvY2FsZW5kYXIvZmFjdG9yeS9mYWN0b3J5LmludGVyZmFjZSc7XG5pbXBvcnQgeyBDYWxlbmRhckRlZmF1bHRGYWN0b3J5IH0gZnJvbSAnLi9saWIvY2FsZW5kYXIvZmFjdG9yeS9kZWZhdWx0LWZhY3RvcnknO1xuaW1wb3J0IHsgSURheSB9IGZyb20gJy4vbGliL2NhbGVuZGFyL2RheS9kYXkuaW50ZXJmYWNlJztcblxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgQ2VsbERhdGEgfSBmcm9tICcuL2NlbGwtZGF0YSc7XG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJWaWV3RmFjdG9yeSBleHRlbmRzIENhbGVuZGFyRGVmYXVsdEZhY3RvcnkgaW1wbGVtZW50cyBJQ2FsZW5kYXJGYWN0b3J5IHtcblxuICAgIGNyZWF0ZURheShkYXRlOkRhdGUsIHNlbGVjdGVkPzpib29sZWFuLCBkaXNhYmxlZD86Ym9vbGVhbik6SURheSB7XG4gICAgICAgIHJldHVybiBuZXcgQ2VsbERhdGEoZm9ybWF0KGRhdGUpLCBzZWxlY3RlZCwgZGlzYWJsZWQpXG4gICAgfVxufSJdfQ==