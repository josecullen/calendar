/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CalendarMonthSelection } from '../../calendar-month-selection.class';
export class PickSelectionStrategy {
    constructor() {
        this.calendarMonthView = new CalendarMonthSelection(true);
        this.name = 'pick';
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
        /** @type {?} */
        const index = selection.selectedDates.findIndex(d => d === date);
        if (index >= 0) {
            selection.selectedDates.splice(index, 1);
        }
        else {
            selection.selectedDates.push(date);
        }
    }
}
if (false) {
    /** @type {?} */
    PickSelectionStrategy.prototype.calendarMonthView;
    /** @type {?} */
    PickSelectionStrategy.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljay1zZWxlY3Rpb24uc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvbGliL2NhbGVuZGFyLXZpZXcvc2VsZWN0aW9uL3N0cmF0ZWd5L3BpY2stc2VsZWN0aW9uLnN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5RSxNQUFNLE9BQU8scUJBQXFCO0lBQWxDO1FBQ0ksc0JBQWlCLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxTQUFJLEdBQUcsTUFBTSxDQUFDO0lBbUIzQixDQUFDOzs7Ozs7SUFqQkcsU0FBUyxDQUFDLElBQVksRUFBRSxTQUE2QjtRQUNqRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBWSxFQUFFLFNBQTZCO1FBQ2xELE9BQU8sU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQVksRUFBRSxTQUE0Qjs7Y0FDdkMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQztRQUVoRSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDWixTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNILFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztDQUNKOzs7SUFwQkcsa0RBQXFEOztJQUNyRCxxQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU2VsZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICcuL3NlbGVjdGlvbi1zdHJhdGVneS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUNhbGVuZGFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vY2FsZW5kYXItc2VsZWN0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDYWxlbmRhclNlbGVjdGlvbiB9IGZyb20gJy4uL2NhbGVuZGFyLXNlbGVjdGlvbi5jbGFzcyc7XG5pbXBvcnQgeyBDYWxlbmRhck1vbnRoU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vY2FsZW5kYXItbW9udGgtc2VsZWN0aW9uLmNsYXNzJztcblxuZXhwb3J0IGNsYXNzIFBpY2tTZWxlY3Rpb25TdHJhdGVneSBpbXBsZW1lbnRzIElTZWxlY3Rpb25TdHJhdGVneSB7XG4gICAgY2FsZW5kYXJNb250aFZpZXcgPSBuZXcgQ2FsZW5kYXJNb250aFNlbGVjdGlvbih0cnVlKTtcbiAgICByZWFkb25seSBuYW1lID0gJ3BpY2snO1xuXG4gICAgaXNJblJhbmdlKGRhdGU6IHN0cmluZywgc2VsZWN0aW9uOiBJQ2FsZW5kYXJTZWxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlzU2VsZWN0ZWQoZGF0ZTogc3RyaW5nLCBzZWxlY3Rpb246IElDYWxlbmRhclNlbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMuc29tZShkID0+IGQgPT09IGRhdGUpO1xuICAgIH1cblxuICAgIGNoYW5nZShkYXRlOiBzdHJpbmcsIHNlbGVjdGlvbjogQ2FsZW5kYXJTZWxlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5maW5kSW5kZXgoZCA9PiBkID09PSBkYXRlKTtcblxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzLnB1c2goZGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ==