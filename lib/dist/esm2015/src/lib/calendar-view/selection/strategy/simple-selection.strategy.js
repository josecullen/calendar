/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CalendarMonthSelection } from '../../calendar-month-selection.class';
export class SingleSelectionStrategy {
    constructor() {
        this.calendarMonthView = new CalendarMonthSelection(false);
        this.name = 'simple';
    }
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    isInRange(date, selection) {
        return false;
    }
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    isSelected(date, selection) {
        return selection.selectedDates.some(d => d === date);
    }
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    change(date, selection) {
        if (selection.selectedDates.length === 0 || selection.selectedDates[0] !== date) {
            selection.selectedDates = [];
            selection.selectedDates = [date];
        }
        else {
            selection.selectedDates = [];
        }
    }
}
if (false) {
    /** @type {?} */
    SingleSelectionStrategy.prototype.calendarMonthView;
    /** @type {?} */
    SingleSelectionStrategy.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXNlbGVjdGlvbi5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RyYi1jYWxlbmRhci8iLCJzb3VyY2VzIjpbInNyYy9saWIvY2FsZW5kYXItdmlldy9zZWxlY3Rpb24vc3RyYXRlZ3kvc2ltcGxlLXNlbGVjdGlvbi5zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHOUUsTUFBTSxPQUFPLHVCQUF1QjtJQUloQztRQUhBLHNCQUFpQixHQUFHLElBQUksc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDNUMsU0FBSSxHQUFHLFFBQVEsQ0FBQTtJQUVWLENBQUM7Ozs7OztJQUVmLFNBQVMsQ0FBQyxJQUFZLEVBQUUsU0FBNEI7UUFDaEQsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQVksRUFBRSxTQUE0QjtRQUNqRCxPQUFPLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFBO0lBQ3hELENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxJQUFZLEVBQUUsU0FBNEI7UUFDN0MsSUFBRyxTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUM7WUFDM0UsU0FBUyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUE7WUFDNUIsU0FBUyxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ25DO2FBQU07WUFDSCxTQUFTLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQTtTQUMvQjtJQUNMLENBQUM7Q0FDSjs7O0lBckJHLG9EQUFxRDs7SUFDckQsdUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNlbGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9zZWxlY3Rpb24tc3RyYXRlZ3kuaW50ZXJmYWNlJztcbmltcG9ydCB7IElDYWxlbmRhclNlbGVjdGlvbiB9IGZyb20gJy4uL2NhbGVuZGFyLXNlbGVjdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aFNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2NhbGVuZGFyLW1vbnRoLXNlbGVjdGlvbi5jbGFzcyc7XG5cblxuZXhwb3J0IGNsYXNzIFNpbmdsZVNlbGVjdGlvblN0cmF0ZWd5IGltcGxlbWVudHMgSVNlbGVjdGlvblN0cmF0ZWd5IHtcbiAgICBjYWxlbmRhck1vbnRoVmlldyA9IG5ldyBDYWxlbmRhck1vbnRoU2VsZWN0aW9uKGZhbHNlKVxuICAgIHJlYWRvbmx5IG5hbWUgPSAnc2ltcGxlJ1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCl7fVxuXG4gICAgaXNJblJhbmdlKGRhdGU6IHN0cmluZywgc2VsZWN0aW9uOklDYWxlbmRhclNlbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpc1NlbGVjdGVkKGRhdGU6IHN0cmluZywgc2VsZWN0aW9uOklDYWxlbmRhclNlbGVjdGlvbil7XG4gICAgICAgIHJldHVybiBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5zb21lKGQgPT4gZCA9PT0gZGF0ZSlcbiAgICB9XG5cbiAgICBjaGFuZ2UoZGF0ZTogc3RyaW5nLCBzZWxlY3Rpb246SUNhbGVuZGFyU2VsZWN0aW9uKSB7XG4gICAgICAgIGlmKHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMCB8fCBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlc1swXSAhPT0gZGF0ZSl7XG4gICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcyA9IFtdXG4gICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcyA9IFtkYXRlXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMgPSBbXVxuICAgICAgICB9XG4gICAgfVxufVxuIl19