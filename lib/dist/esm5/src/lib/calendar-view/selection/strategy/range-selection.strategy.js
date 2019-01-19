/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SelectionStatus } from '../calendar-selection.interface';
import { parse, compareDesc, addDays, format } from 'date-fns';
import { CalendarMonthSelection } from '../../calendar-month-selection.class';
var RangeSelectionStrategy = /** @class */ (function () {
    function RangeSelectionStrategy() {
        this.calendarMonthView = new CalendarMonthSelection(true);
        this.name = 'range';
    }
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    RangeSelectionStrategy.prototype.isInRange = /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    function (date, selection) {
        /** @type {?} */
        var index = selection.selectedDates.findIndex(function (d) { return d === date; });
        return index > 0 && index < selection.selectedDates.length - 1;
    };
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    RangeSelectionStrategy.prototype.isSelected = /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    function (date, selection) {
        /** @type {?} */
        var index = selection.selectedDates.findIndex(function (d) { return d === date; });
        return selection.selectedDates.length && (index === 0 || index === selection.selectedDates.length - 1);
    };
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    RangeSelectionStrategy.prototype.change = /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    function (date, selection) {
        if (selection.status === SelectionStatus.unset) {
            selection.selectedDates.push(date);
            selection.status = SelectionStatus.startRangeSelected;
        }
        else if (selection.status === SelectionStatus.startRangeSelected) {
            /** @type {?} */
            var start = parse(selection.selectedDates[0]);
            /** @type {?} */
            var end = parse(date);
            /** @type {?} */
            var diff = compareDesc(start, end);
            if (diff === 0) {
                selection.selectedDates = [];
                selection.status = SelectionStatus.unset;
            }
            else if (diff < 0) {
                selection.selectedDates = [];
                selection.selectedDates.push(date);
            }
            else if (diff > 0) {
                do {
                    start = addDays(start, 1);
                    selection.selectedDates.push(format(start, 'YYYY-MM-DD'));
                } while (compareDesc(start, end) > 0);
                selection.status = SelectionStatus.rangeSelected;
            }
        }
        else {
            // selection.selectedDates = [];
            // selection.status = SelectionStatus.unset;
            selection.selectedDates = [];
            selection.selectedDates.push(date);
            selection.status = SelectionStatus.startRangeSelected;
        }
    };
    return RangeSelectionStrategy;
}());
export { RangeSelectionStrategy };
if (false) {
    /** @type {?} */
    RangeSelectionStrategy.prototype.calendarMonthView;
    /** @type {?} */
    RangeSelectionStrategy.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2Utc2VsZWN0aW9uLnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9zdHJhdGVneS9yYW5nZS1zZWxlY3Rpb24uc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBc0IsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFdEYsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5RTtJQUFBO1FBQ0ksc0JBQWlCLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxTQUFJLEdBQUcsT0FBTyxDQUFDO0lBZ0Q1QixDQUFDOzs7Ozs7SUE5Q0csMENBQVM7Ozs7O0lBQVQsVUFBVSxJQUFZLEVBQUUsU0FBNkI7O1lBQzNDLEtBQUssR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxJQUFJLEVBQVYsQ0FBVSxDQUFDO1FBRWhFLE9BQU8sS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7OztJQUVELDJDQUFVOzs7OztJQUFWLFVBQVcsSUFBWSxFQUFFLFNBQTZCOztZQUM1QyxLQUFLLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssSUFBSSxFQUFWLENBQVUsQ0FBQztRQUVoRSxPQUFPLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFM0csQ0FBQzs7Ozs7O0lBRUQsdUNBQU07Ozs7O0lBQU4sVUFBTyxJQUFZLEVBQUUsU0FBNEI7UUFDN0MsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLGVBQWUsQ0FBQyxLQUFLLEVBQUU7WUFDNUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsU0FBUyxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsa0JBQWtCLENBQUM7U0FDekQ7YUFBTSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssZUFBZSxDQUFDLGtCQUFrQixFQUFFOztnQkFDNUQsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDOztnQkFDdkMsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7O2dCQUVqQixJQUFJLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7WUFFcEMsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO2dCQUNaLFNBQVMsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO2dCQUM3QixTQUFTLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUM7YUFDNUM7aUJBQU0sSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQixTQUFTLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztnQkFDN0IsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEM7aUJBQU0sSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQixHQUFHO29CQUNDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUMxQixTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7aUJBQzdELFFBQVEsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBRXRDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLGFBQWEsQ0FBQzthQUNwRDtTQUVKO2FBQU07WUFDSCxnQ0FBZ0M7WUFDaEMsNENBQTRDO1lBQzVDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1lBQzdCLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLFNBQVMsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLGtCQUFrQixDQUFDO1NBQ3pEO0lBQ0wsQ0FBQztJQUNMLDZCQUFDO0FBQUQsQ0FBQyxBQWxERCxJQWtEQzs7OztJQWpERyxtREFBcUQ7O0lBQ3JELHNDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTZWxlY3Rpb25TdHJhdGVneSB9IGZyb20gJy4vc2VsZWN0aW9uLXN0cmF0ZWd5LmludGVyZmFjZSc7XG5pbXBvcnQgeyBJQ2FsZW5kYXJTZWxlY3Rpb24sIFNlbGVjdGlvblN0YXR1cyB9IGZyb20gJy4uL2NhbGVuZGFyLXNlbGVjdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZWxlY3Rpb24gfSBmcm9tICcuLi9jYWxlbmRhci1zZWxlY3Rpb24uY2xhc3MnO1xuaW1wb3J0IHsgcGFyc2UsIGNvbXBhcmVEZXNjLCBhZGREYXlzLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBDYWxlbmRhck1vbnRoU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vY2FsZW5kYXItbW9udGgtc2VsZWN0aW9uLmNsYXNzJztcblxuZXhwb3J0IGNsYXNzIFJhbmdlU2VsZWN0aW9uU3RyYXRlZ3kgaW1wbGVtZW50cyBJU2VsZWN0aW9uU3RyYXRlZ3kge1xuICAgIGNhbGVuZGFyTW9udGhWaWV3ID0gbmV3IENhbGVuZGFyTW9udGhTZWxlY3Rpb24odHJ1ZSk7XG4gICAgcmVhZG9ubHkgbmFtZSA9ICdyYW5nZSc7XG5cbiAgICBpc0luUmFuZ2UoZGF0ZTogc3RyaW5nLCBzZWxlY3Rpb246IElDYWxlbmRhclNlbGVjdGlvbikge1xuICAgICAgICBjb25zdCBpbmRleCA9IHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzLmZpbmRJbmRleChkID0+IGQgPT09IGRhdGUpO1xuXG4gICAgICAgIHJldHVybiBpbmRleCA+IDAgJiYgaW5kZXggPCBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIGlzU2VsZWN0ZWQoZGF0ZTogc3RyaW5nLCBzZWxlY3Rpb246IElDYWxlbmRhclNlbGVjdGlvbikge1xuICAgICAgICBjb25zdCBpbmRleCA9IHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzLmZpbmRJbmRleChkID0+IGQgPT09IGRhdGUpO1xuXG4gICAgICAgIHJldHVybiBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5sZW5ndGggJiYgKGluZGV4ID09PSAwIHx8IGluZGV4ID09PSBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5sZW5ndGggLSAxKTtcblxuICAgIH1cblxuICAgIGNoYW5nZShkYXRlOiBzdHJpbmcsIHNlbGVjdGlvbjogQ2FsZW5kYXJTZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKHNlbGVjdGlvbi5zdGF0dXMgPT09IFNlbGVjdGlvblN0YXR1cy51bnNldCkge1xuICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMucHVzaChkYXRlKTtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zdGF0dXMgPSBTZWxlY3Rpb25TdGF0dXMuc3RhcnRSYW5nZVNlbGVjdGVkO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGlvbi5zdGF0dXMgPT09IFNlbGVjdGlvblN0YXR1cy5zdGFydFJhbmdlU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGxldCBzdGFydCA9IHBhcnNlKHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzWzBdKTtcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IHBhcnNlKGRhdGUpO1xuXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gY29tcGFyZURlc2Moc3RhcnQsIGVuZCk7XG5cbiAgICAgICAgICAgIGlmIChkaWZmID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uc3RhdHVzID0gU2VsZWN0aW9uU3RhdHVzLnVuc2V0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaWZmIDwgMCkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzID0gW107XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMucHVzaChkYXRlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gYWRkRGF5cyhzdGFydCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzLnB1c2goZm9ybWF0KHN0YXJ0LCAnWVlZWS1NTS1ERCcpKTtcbiAgICAgICAgICAgICAgICB9IHdoaWxlIChjb21wYXJlRGVzYyhzdGFydCwgZW5kKSA+IDApO1xuXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLnN0YXR1cyA9IFNlbGVjdGlvblN0YXR1cy5yYW5nZVNlbGVjdGVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcyA9IFtdO1xuICAgICAgICAgICAgLy8gc2VsZWN0aW9uLnN0YXR1cyA9IFNlbGVjdGlvblN0YXR1cy51bnNldDtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzID0gW107XG4gICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5wdXNoKGRhdGUpO1xuICAgICAgICAgICAgc2VsZWN0aW9uLnN0YXR1cyA9IFNlbGVjdGlvblN0YXR1cy5zdGFydFJhbmdlU2VsZWN0ZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ==