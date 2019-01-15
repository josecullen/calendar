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
const SelectionType = {
    single: 'single',
    range: 'range',
    multirange: 'multirange',
    pick: 'pick',
};
export { SelectionType };
/** @enum {string} */
const SelectionStatus = {
    unset: 'unset',
    startRangeSelected: 'startRangeSelected',
    rangeSelected: 'rangeSelected',
    picked: 'picked',
};
export { SelectionStatus };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItc2VsZWN0aW9uLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RyYi1jYWxlbmRhci8iLCJzb3VyY2VzIjpbInNyYy9saWIvY2FsZW5kYXItdmlldy9zZWxlY3Rpb24vY2FsZW5kYXItc2VsZWN0aW9uLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsd0NBV0M7OztJQVRHLGtDQUFXOztJQUNYLDJDQUF1Qjs7SUFDdkIsb0NBQXVCOztJQU12QiwrQ0FBd0M7Ozs7O0lBTHhDLDZEQUE4Qjs7Ozs7SUFDOUIsOERBQStCOzs7O0lBQy9CLG9EQUFhOzs7O0lBQ2Isa0RBQVc7Ozs7O0lBQ1gsMERBQXlCOzs7O0lBTXpCLFFBQVMsUUFBUTtJQUNqQixPQUFRLE9BQU87SUFDZixZQUFhLFlBQVk7SUFDekIsTUFBTyxNQUFNOzs7OztJQUliLE9BQVEsT0FBTztJQUNmLG9CQUFxQixvQkFBb0I7SUFDekMsZUFBZ0IsZUFBZTtJQUMvQixRQUFTLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYWxlbmRhck1vbnRoU2VsZWN0aW9uIH0gZnJvbSAnLi4vY2FsZW5kYXItbW9udGgtc2VsZWN0aW9uLmNsYXNzJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ2FsZW5kYXJTZWxlY3Rpb24ge1xuICAgIC8vIHN0cmF0ZWd5OklTZWxlY3Rpb25TdHJhdGVneVxuICAgIG5hbWU6c3RyaW5nXG4gICAgc2VsZWN0ZWREYXRlczogc3RyaW5nW11cbiAgICBzdGF0dXM6IFNlbGVjdGlvblN0YXR1c1xuICAgIGlzSW5SYW5nZShkYXRlOnN0cmluZyk6Ym9vbGVhblxuICAgIGlzU2VsZWN0ZWQoZGF0ZTpzdHJpbmcpOmJvb2xlYW5cbiAgICBmcm9tKCk6c3RyaW5nXG4gICAgdG8oKTpzdHJpbmdcbiAgICBjaGFuZ2UoZGF0ZTpzdHJpbmcpOiB2b2lkXG4gICAgY2FsZW5kYXJNb250aFZpZXc6Q2FsZW5kYXJNb250aFNlbGVjdGlvblxufVxuXG5cbmV4cG9ydCBlbnVtIFNlbGVjdGlvblR5cGUge1xuICAgIHNpbmdsZSA9ICdzaW5nbGUnLFxuICAgIHJhbmdlID0gJ3JhbmdlJyxcbiAgICBtdWx0aXJhbmdlID0gJ211bHRpcmFuZ2UnLFxuICAgIHBpY2sgPSAncGljaydcbn1cblxuZXhwb3J0IGVudW0gU2VsZWN0aW9uU3RhdHVzIHtcbiAgICB1bnNldCA9ICd1bnNldCcsXG4gICAgc3RhcnRSYW5nZVNlbGVjdGVkID0gJ3N0YXJ0UmFuZ2VTZWxlY3RlZCcsXG4gICAgcmFuZ2VTZWxlY3RlZCA9ICdyYW5nZVNlbGVjdGVkJyxcbiAgICBwaWNrZWQgPSAncGlja2VkJyxcbn0iXX0=