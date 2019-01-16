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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2Utc2VsZWN0aW9uLnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9zdHJhdGVneS9yYW5nZS1zZWxlY3Rpb24uc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBc0IsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFdEYsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5RTtJQUFBO1FBQ0ksc0JBQWlCLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxTQUFJLEdBQUcsT0FBTyxDQUFDO0lBNkM1QixDQUFDOzs7Ozs7SUEzQ0csMENBQVM7Ozs7O0lBQVQsVUFBVSxJQUFZLEVBQUUsU0FBNkI7O1lBQzNDLEtBQUssR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxJQUFJLEVBQVYsQ0FBVSxDQUFDO1FBRWhFLE9BQU8sS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7OztJQUVELDJDQUFVOzs7OztJQUFWLFVBQVcsSUFBWSxFQUFFLFNBQTZCOztZQUM1QyxLQUFLLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssSUFBSSxFQUFWLENBQVUsQ0FBQztRQUVoRSxPQUFPLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFM0csQ0FBQzs7Ozs7O0lBRUQsdUNBQU07Ozs7O0lBQU4sVUFBTyxJQUFZLEVBQUUsU0FBNEI7UUFDN0MsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLGVBQWUsQ0FBQyxLQUFLLEVBQUU7WUFDNUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsU0FBUyxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsa0JBQWtCLENBQUM7U0FDekQ7YUFBTSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssZUFBZSxDQUFDLGtCQUFrQixFQUFFOztnQkFDNUQsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDOztnQkFDdkMsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7O2dCQUVqQixJQUFJLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7WUFFcEMsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO2dCQUNaLFNBQVMsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO2dCQUM3QixTQUFTLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUM7YUFDNUM7aUJBQU0sSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQixTQUFTLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztnQkFDN0IsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEM7aUJBQU0sSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQixHQUFHO29CQUNDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUMxQixTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7aUJBQzdELFFBQVEsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBRXRDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLGFBQWEsQ0FBQzthQUNwRDtTQUVKO2FBQU07WUFDSCxTQUFTLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztZQUM3QixTQUFTLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUM7U0FDNUM7SUFDTCxDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDOzs7O0lBOUNHLG1EQUFxRDs7SUFDckQsc0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNlbGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9zZWxlY3Rpb24tc3RyYXRlZ3kuaW50ZXJmYWNlJztcbmltcG9ydCB7IElDYWxlbmRhclNlbGVjdGlvbiwgU2VsZWN0aW9uU3RhdHVzIH0gZnJvbSAnLi4vY2FsZW5kYXItc2VsZWN0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDYWxlbmRhclNlbGVjdGlvbiB9IGZyb20gJy4uL2NhbGVuZGFyLXNlbGVjdGlvbi5jbGFzcyc7XG5pbXBvcnQgeyBwYXJzZSwgY29tcGFyZURlc2MsIGFkZERheXMsIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IENhbGVuZGFyTW9udGhTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9jYWxlbmRhci1tb250aC1zZWxlY3Rpb24uY2xhc3MnO1xuXG5leHBvcnQgY2xhc3MgUmFuZ2VTZWxlY3Rpb25TdHJhdGVneSBpbXBsZW1lbnRzIElTZWxlY3Rpb25TdHJhdGVneSB7XG4gICAgY2FsZW5kYXJNb250aFZpZXcgPSBuZXcgQ2FsZW5kYXJNb250aFNlbGVjdGlvbih0cnVlKTtcbiAgICByZWFkb25seSBuYW1lID0gJ3JhbmdlJztcblxuICAgIGlzSW5SYW5nZShkYXRlOiBzdHJpbmcsIHNlbGVjdGlvbjogSUNhbGVuZGFyU2VsZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMuZmluZEluZGV4KGQgPT4gZCA9PT0gZGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIGluZGV4ID4gMCAmJiBpbmRleCA8IHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgaXNTZWxlY3RlZChkYXRlOiBzdHJpbmcsIHNlbGVjdGlvbjogSUNhbGVuZGFyU2VsZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMuZmluZEluZGV4KGQgPT4gZCA9PT0gZGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzLmxlbmd0aCAmJiAoaW5kZXggPT09IDAgfHwgaW5kZXggPT09IHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzLmxlbmd0aCAtIDEpO1xuXG4gICAgfVxuXG4gICAgY2hhbmdlKGRhdGU6IHN0cmluZywgc2VsZWN0aW9uOiBDYWxlbmRhclNlbGVjdGlvbikge1xuICAgICAgICBpZiAoc2VsZWN0aW9uLnN0YXR1cyA9PT0gU2VsZWN0aW9uU3RhdHVzLnVuc2V0KSB7XG4gICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5wdXNoKGRhdGUpO1xuICAgICAgICAgICAgc2VsZWN0aW9uLnN0YXR1cyA9IFNlbGVjdGlvblN0YXR1cy5zdGFydFJhbmdlU2VsZWN0ZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uLnN0YXR1cyA9PT0gU2VsZWN0aW9uU3RhdHVzLnN0YXJ0UmFuZ2VTZWxlY3RlZCkge1xuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gcGFyc2Uoc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXNbMF0pO1xuICAgICAgICAgICAgY29uc3QgZW5kID0gcGFyc2UoZGF0ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBjb21wYXJlRGVzYyhzdGFydCwgZW5kKTtcblxuICAgICAgICAgICAgaWYgKGRpZmYgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5zdGF0dXMgPSBTZWxlY3Rpb25TdGF0dXMudW5zZXQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpZmYgPCAwKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5wdXNoKGRhdGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBhZGREYXlzKHN0YXJ0LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMucHVzaChmb3JtYXQoc3RhcnQsICdZWVlZLU1NLUREJykpO1xuICAgICAgICAgICAgICAgIH0gd2hpbGUgKGNvbXBhcmVEZXNjKHN0YXJ0LCBlbmQpID4gMCk7XG5cbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uc3RhdHVzID0gU2VsZWN0aW9uU3RhdHVzLnJhbmdlU2VsZWN0ZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzID0gW107XG4gICAgICAgICAgICBzZWxlY3Rpb24uc3RhdHVzID0gU2VsZWN0aW9uU3RhdHVzLnVuc2V0O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0=