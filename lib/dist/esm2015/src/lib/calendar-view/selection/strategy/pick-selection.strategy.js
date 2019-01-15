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
        let index = selection.selectedDates.findIndex(d => d === date);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljay1zZWxlY3Rpb24uc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvbGliL2NhbGVuZGFyLXZpZXcvc2VsZWN0aW9uL3N0cmF0ZWd5L3BpY2stc2VsZWN0aW9uLnN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5RSxNQUFNLE9BQU8scUJBQXFCO0lBQWxDO1FBQ0ksc0JBQWlCLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMzQyxTQUFJLEdBQUcsTUFBTSxDQUFBO0lBbUIxQixDQUFDOzs7Ozs7SUFqQkcsU0FBUyxDQUFDLElBQVksRUFBRSxTQUE0QjtRQUNoRCxPQUFPLEtBQUssQ0FBQTtJQUNoQixDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBWSxFQUFFLFNBQTRCO1FBQ2pELE9BQU8sU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUE7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQVksRUFBRSxTQUEyQjs7WUFDeEMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQztRQUU5RCxJQUFHLEtBQUssSUFBSSxDQUFDLEVBQUM7WUFDVixTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7U0FDM0M7YUFBTTtZQUNILFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3JDO0lBQ0wsQ0FBQztDQUNKOzs7SUFwQkcsa0RBQW9EOztJQUNwRCxxQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU2VsZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICcuL3NlbGVjdGlvbi1zdHJhdGVneS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUNhbGVuZGFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vY2FsZW5kYXItc2VsZWN0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDYWxlbmRhclNlbGVjdGlvbiB9IGZyb20gJy4uL2NhbGVuZGFyLXNlbGVjdGlvbi5jbGFzcyc7XG5pbXBvcnQgeyBDYWxlbmRhck1vbnRoU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vY2FsZW5kYXItbW9udGgtc2VsZWN0aW9uLmNsYXNzJztcblxuZXhwb3J0IGNsYXNzIFBpY2tTZWxlY3Rpb25TdHJhdGVneSBpbXBsZW1lbnRzIElTZWxlY3Rpb25TdHJhdGVneSB7XG4gICAgY2FsZW5kYXJNb250aFZpZXcgPSBuZXcgQ2FsZW5kYXJNb250aFNlbGVjdGlvbih0cnVlKVxuICAgIHJlYWRvbmx5IG5hbWUgPSAncGljaydcbiAgICBcbiAgICBpc0luUmFuZ2UoZGF0ZTogc3RyaW5nLCBzZWxlY3Rpb246SUNhbGVuZGFyU2VsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlzU2VsZWN0ZWQoZGF0ZTogc3RyaW5nLCBzZWxlY3Rpb246SUNhbGVuZGFyU2VsZWN0aW9uKXtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzLnNvbWUoZCA9PiBkID09PSBkYXRlKVxuICAgIH1cblxuICAgIGNoYW5nZShkYXRlOiBzdHJpbmcsIHNlbGVjdGlvbjpDYWxlbmRhclNlbGVjdGlvbikge1xuICAgICAgICBsZXQgaW5kZXggPSBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5maW5kSW5kZXgoZCA9PiBkID09PSBkYXRlKVxuXG4gICAgICAgIGlmKGluZGV4ID49IDApe1xuICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMucHVzaChkYXRlKVxuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0=