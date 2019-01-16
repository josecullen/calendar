/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function ICalendarSelection() { }
if (false) {
    /** @type {?} */
    ICalendarSelection.prototype.name;
    /** @type {?} */
    ICalendarSelection.prototype.selectedDates;
    /** @type {?} */
    ICalendarSelection.prototype.status;
    /** @type {?} */
    ICalendarSelection.prototype.calendarMonthView;
    /**
     * @param {?} date
     * @return {?}
     */
    ICalendarSelection.prototype.isInRange = function (date) { };
    /**
     * @param {?} date
     * @return {?}
     */
    ICalendarSelection.prototype.isSelected = function (date) { };
    /**
     * @return {?}
     */
    ICalendarSelection.prototype.from = function () { };
    /**
     * @return {?}
     */
    ICalendarSelection.prototype.to = function () { };
    /**
     * @param {?} date
     * @return {?}
     */
    ICalendarSelection.prototype.change = function (date) { };
}
/** @enum {string} */
var SelectionType = {
    single: 'single',
    range: 'range',
    multirange: 'multirange',
    pick: 'pick',
};
export { SelectionType };
/** @enum {string} */
var SelectionStatus = {
    unset: 'unset',
    startRangeSelected: 'startRangeSelected',
    rangeSelected: 'rangeSelected',
    picked: 'picked',
};
export { SelectionStatus };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItc2VsZWN0aW9uLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RyYi1jYWxlbmRhci8iLCJzb3VyY2VzIjpbInNyYy9saWIvY2FsZW5kYXItdmlldy9zZWxlY3Rpb24vY2FsZW5kYXItc2VsZWN0aW9uLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsd0NBV0M7OztJQVRHLGtDQUFhOztJQUNiLDJDQUF3Qjs7SUFDeEIsb0NBQXdCOztJQUN4QiwrQ0FBMEM7Ozs7O0lBQzFDLDZEQUFpQzs7Ozs7SUFDakMsOERBQWtDOzs7O0lBQ2xDLG9EQUFlOzs7O0lBQ2Ysa0RBQWE7Ozs7O0lBQ2IsMERBQTJCOzs7O0lBSzNCLFFBQVMsUUFBUTtJQUNqQixPQUFRLE9BQU87SUFDZixZQUFhLFlBQVk7SUFDekIsTUFBTyxNQUFNOzs7OztJQUliLE9BQVEsT0FBTztJQUNmLG9CQUFxQixvQkFBb0I7SUFDekMsZUFBZ0IsZUFBZTtJQUMvQixRQUFTLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYWxlbmRhck1vbnRoU2VsZWN0aW9uIH0gZnJvbSAnLi4vY2FsZW5kYXItbW9udGgtc2VsZWN0aW9uLmNsYXNzJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ2FsZW5kYXJTZWxlY3Rpb24ge1xuICAgIC8vIHN0cmF0ZWd5OklTZWxlY3Rpb25TdHJhdGVneVxuICAgIG5hbWU6IHN0cmluZztcbiAgICBzZWxlY3RlZERhdGVzOiBzdHJpbmdbXTtcbiAgICBzdGF0dXM6IFNlbGVjdGlvblN0YXR1cztcbiAgICBjYWxlbmRhck1vbnRoVmlldzogQ2FsZW5kYXJNb250aFNlbGVjdGlvbjtcbiAgICBpc0luUmFuZ2UoZGF0ZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICBpc1NlbGVjdGVkKGRhdGU6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgZnJvbSgpOiBzdHJpbmc7XG4gICAgdG8oKTogc3RyaW5nO1xuICAgIGNoYW5nZShkYXRlOiBzdHJpbmcpOiB2b2lkO1xufVxuXG5cbmV4cG9ydCBlbnVtIFNlbGVjdGlvblR5cGUge1xuICAgIHNpbmdsZSA9ICdzaW5nbGUnLFxuICAgIHJhbmdlID0gJ3JhbmdlJyxcbiAgICBtdWx0aXJhbmdlID0gJ211bHRpcmFuZ2UnLFxuICAgIHBpY2sgPSAncGljaydcbn1cblxuZXhwb3J0IGVudW0gU2VsZWN0aW9uU3RhdHVzIHtcbiAgICB1bnNldCA9ICd1bnNldCcsXG4gICAgc3RhcnRSYW5nZVNlbGVjdGVkID0gJ3N0YXJ0UmFuZ2VTZWxlY3RlZCcsXG4gICAgcmFuZ2VTZWxlY3RlZCA9ICdyYW5nZVNlbGVjdGVkJyxcbiAgICBwaWNrZWQgPSAncGlja2VkJyxcbn1cbiJdfQ==