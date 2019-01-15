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
            selection.selectedDates = [];
            selection.status = SelectionStatus.unset;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2Utc2VsZWN0aW9uLnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9zdHJhdGVneS9yYW5nZS1zZWxlY3Rpb24uc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBc0IsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFdEYsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5RTtJQUFBO1FBQ0ksc0JBQWlCLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMzQyxTQUFJLEdBQUcsT0FBTyxDQUFBO0lBZ0QzQixDQUFDOzs7Ozs7SUE5Q0csMENBQVM7Ozs7O0lBQVQsVUFBVSxJQUFZLEVBQUUsU0FBNEI7O1lBQzFDLEtBQUssR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxJQUFJLEVBQVYsQ0FBVSxDQUFDO1FBRWhFLE9BQU8sS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUUsQ0FBQyxDQUFBO0lBQ2pFLENBQUM7Ozs7OztJQUVELDJDQUFVOzs7OztJQUFWLFVBQVcsSUFBWSxFQUFFLFNBQTRCOztZQUMzQyxLQUFLLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssSUFBSSxFQUFWLENBQVUsQ0FBQztRQUVoRSxPQUFPLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUUsQ0FBQyxDQUFDLENBQUE7SUFFekcsQ0FBQzs7Ozs7O0lBRUQsdUNBQU07Ozs7O0lBQU4sVUFBTyxJQUFZLEVBQUUsU0FBMkI7UUFDNUMsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLGVBQWUsQ0FBQyxLQUFLLEVBQUU7WUFDNUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbEMsU0FBUyxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsa0JBQWtCLENBQUE7U0FDeEQ7YUFDSSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssZUFBZSxDQUFDLGtCQUFrQixFQUFFOztnQkFDMUQsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDOztnQkFDekMsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7O2dCQUVqQixJQUFJLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7WUFFbEMsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO2dCQUNaLFNBQVMsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFBO2dCQUM1QixTQUFTLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUE7YUFDM0M7aUJBQ0ksSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO2dCQUNmLFNBQVMsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFBO2dCQUM1QixTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUNyQztpQkFBTSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7Z0JBQ2pCLEdBQUc7b0JBQ0MsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7b0JBQ3pCLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQTtpQkFDNUQsUUFBUSxXQUFXLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQztnQkFFckMsU0FBUyxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFBO2FBQ25EO1NBRUo7YUFDSTtZQUNELFNBQVMsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFBO1lBQzVCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQTtTQUMzQztJQUNMLENBQUM7SUFDTCw2QkFBQztBQUFELENBQUMsQUFsREQsSUFrREM7Ozs7SUFqREcsbURBQW9EOztJQUNwRCxzQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU2VsZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICcuL3NlbGVjdGlvbi1zdHJhdGVneS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUNhbGVuZGFyU2VsZWN0aW9uLCBTZWxlY3Rpb25TdGF0dXMgfSBmcm9tICcuLi9jYWxlbmRhci1zZWxlY3Rpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IENhbGVuZGFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vY2FsZW5kYXItc2VsZWN0aW9uLmNsYXNzJztcbmltcG9ydCB7IHBhcnNlLCBjb21wYXJlRGVzYywgYWRkRGF5cywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aFNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2NhbGVuZGFyLW1vbnRoLXNlbGVjdGlvbi5jbGFzcyc7XG5cbmV4cG9ydCBjbGFzcyBSYW5nZVNlbGVjdGlvblN0cmF0ZWd5IGltcGxlbWVudHMgSVNlbGVjdGlvblN0cmF0ZWd5IHtcbiAgICBjYWxlbmRhck1vbnRoVmlldyA9IG5ldyBDYWxlbmRhck1vbnRoU2VsZWN0aW9uKHRydWUpXG4gICAgcmVhZG9ubHkgbmFtZSA9ICdyYW5nZSdcblxuICAgIGlzSW5SYW5nZShkYXRlOiBzdHJpbmcsIHNlbGVjdGlvbjpJQ2FsZW5kYXJTZWxlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5maW5kSW5kZXgoZCA9PiBkID09PSBkYXRlKVxuXG4gICAgICAgIHJldHVybiBpbmRleCA+IDAgJiYgaW5kZXggPCBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5sZW5ndGggLTFcbiAgICB9XG5cbiAgICBpc1NlbGVjdGVkKGRhdGU6IHN0cmluZywgc2VsZWN0aW9uOklDYWxlbmRhclNlbGVjdGlvbil7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMuZmluZEluZGV4KGQgPT4gZCA9PT0gZGF0ZSlcblxuICAgICAgICByZXR1cm4gc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMubGVuZ3RoICYmIChpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMubGVuZ3RoIC0xKVxuICAgICAgICBcbiAgICB9XG5cbiAgICBjaGFuZ2UoZGF0ZTogc3RyaW5nLCBzZWxlY3Rpb246Q2FsZW5kYXJTZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKHNlbGVjdGlvbi5zdGF0dXMgPT09IFNlbGVjdGlvblN0YXR1cy51bnNldCkge1xuICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMucHVzaChkYXRlKVxuICAgICAgICAgICAgc2VsZWN0aW9uLnN0YXR1cyA9IFNlbGVjdGlvblN0YXR1cy5zdGFydFJhbmdlU2VsZWN0ZWRcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWxlY3Rpb24uc3RhdHVzID09PSBTZWxlY3Rpb25TdGF0dXMuc3RhcnRSYW5nZVNlbGVjdGVkKSB7XG4gICAgICAgICAgICBsZXQgc3RhcnQgPSBwYXJzZShzZWxlY3Rpb24uc2VsZWN0ZWREYXRlc1swXSlcbiAgICAgICAgICAgIGxldCBlbmQgPSBwYXJzZShkYXRlKVxuXG4gICAgICAgICAgICBsZXQgZGlmZiA9IGNvbXBhcmVEZXNjKHN0YXJ0LCBlbmQpXG5cbiAgICAgICAgICAgIGlmIChkaWZmID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMgPSBbXVxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5zdGF0dXMgPSBTZWxlY3Rpb25TdGF0dXMudW5zZXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRpZmYgPCAwKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMgPSBbXVxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzLnB1c2goZGF0ZSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gYWRkRGF5cyhzdGFydCwgMSlcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMucHVzaChmb3JtYXQoc3RhcnQsICdZWVlZLU1NLUREJykpXG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoY29tcGFyZURlc2Moc3RhcnQsIGVuZCkgPiAwKVxuXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLnN0YXR1cyA9IFNlbGVjdGlvblN0YXR1cy5yYW5nZVNlbGVjdGVkXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzID0gW11cbiAgICAgICAgICAgIHNlbGVjdGlvbi5zdGF0dXMgPSBTZWxlY3Rpb25TdGF0dXMudW5zZXRcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19