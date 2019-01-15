/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CalendarMonthSelection } from '../../calendar-month-selection.class';
var PickSelectionStrategy = /** @class */ (function () {
    function PickSelectionStrategy() {
        this.calendarMonthView = new CalendarMonthSelection(true);
        this.name = 'pick';
    }
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    PickSelectionStrategy.prototype.isInRange = /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    function (date, selection) {
        return false;
    };
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    PickSelectionStrategy.prototype.isSelected = /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    function (date, selection) {
        return selection.selectedDates.some(function (d) { return d === date; });
    };
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    PickSelectionStrategy.prototype.change = /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    function (date, selection) {
        /** @type {?} */
        var index = selection.selectedDates.findIndex(function (d) { return d === date; });
        if (index >= 0) {
            selection.selectedDates.splice(index, 1);
        }
        else {
            selection.selectedDates.push(date);
        }
    };
    return PickSelectionStrategy;
}());
export { PickSelectionStrategy };
if (false) {
    /** @type {?} */
    PickSelectionStrategy.prototype.calendarMonthView;
    /** @type {?} */
    PickSelectionStrategy.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljay1zZWxlY3Rpb24uc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvbGliL2NhbGVuZGFyLXZpZXcvc2VsZWN0aW9uL3N0cmF0ZWd5L3BpY2stc2VsZWN0aW9uLnN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5RTtJQUFBO1FBQ0ksc0JBQWlCLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMzQyxTQUFJLEdBQUcsTUFBTSxDQUFBO0lBbUIxQixDQUFDOzs7Ozs7SUFqQkcseUNBQVM7Ozs7O0lBQVQsVUFBVSxJQUFZLEVBQUUsU0FBNEI7UUFDaEQsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQzs7Ozs7O0lBRUQsMENBQVU7Ozs7O0lBQVYsVUFBVyxJQUFZLEVBQUUsU0FBNEI7UUFDakQsT0FBTyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxJQUFJLEVBQVYsQ0FBVSxDQUFDLENBQUE7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQsc0NBQU07Ozs7O0lBQU4sVUFBTyxJQUFZLEVBQUUsU0FBMkI7O1lBQ3hDLEtBQUssR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxJQUFJLEVBQVYsQ0FBVSxDQUFDO1FBRTlELElBQUcsS0FBSyxJQUFJLENBQUMsRUFBQztZQUNWLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtTQUMzQzthQUFNO1lBQ0gsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDckM7SUFDTCxDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDOzs7O0lBcEJHLGtEQUFvRDs7SUFDcEQscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNlbGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9zZWxlY3Rpb24tc3RyYXRlZ3kuaW50ZXJmYWNlJztcbmltcG9ydCB7IElDYWxlbmRhclNlbGVjdGlvbiB9IGZyb20gJy4uL2NhbGVuZGFyLXNlbGVjdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZWxlY3Rpb24gfSBmcm9tICcuLi9jYWxlbmRhci1zZWxlY3Rpb24uY2xhc3MnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aFNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2NhbGVuZGFyLW1vbnRoLXNlbGVjdGlvbi5jbGFzcyc7XG5cbmV4cG9ydCBjbGFzcyBQaWNrU2VsZWN0aW9uU3RyYXRlZ3kgaW1wbGVtZW50cyBJU2VsZWN0aW9uU3RyYXRlZ3kge1xuICAgIGNhbGVuZGFyTW9udGhWaWV3ID0gbmV3IENhbGVuZGFyTW9udGhTZWxlY3Rpb24odHJ1ZSlcbiAgICByZWFkb25seSBuYW1lID0gJ3BpY2snXG4gICAgXG4gICAgaXNJblJhbmdlKGRhdGU6IHN0cmluZywgc2VsZWN0aW9uOklDYWxlbmRhclNlbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpc1NlbGVjdGVkKGRhdGU6IHN0cmluZywgc2VsZWN0aW9uOklDYWxlbmRhclNlbGVjdGlvbil7XG4gICAgICAgIHJldHVybiBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5zb21lKGQgPT4gZCA9PT0gZGF0ZSlcbiAgICB9XG5cbiAgICBjaGFuZ2UoZGF0ZTogc3RyaW5nLCBzZWxlY3Rpb246Q2FsZW5kYXJTZWxlY3Rpb24pIHtcbiAgICAgICAgbGV0IGluZGV4ID0gc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMuZmluZEluZGV4KGQgPT4gZCA9PT0gZGF0ZSlcblxuICAgICAgICBpZihpbmRleCA+PSAwKXtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzLnB1c2goZGF0ZSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19