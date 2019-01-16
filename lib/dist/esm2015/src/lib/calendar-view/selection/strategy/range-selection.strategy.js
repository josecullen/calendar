/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SelectionStatus } from '../calendar-selection.interface';
import { parse, compareDesc, addDays, format } from 'date-fns';
import { CalendarMonthSelection } from '../../calendar-month-selection.class';
export class RangeSelectionStrategy {
    constructor() {
        this.calendarMonthView = new CalendarMonthSelection(true);
        this.name = 'range';
    }
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    isInRange(date, selection) {
        /** @type {?} */
        const index = selection.selectedDates.findIndex(d => d === date);
        return index > 0 && index < selection.selectedDates.length - 1;
    }
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    isSelected(date, selection) {
        /** @type {?} */
        const index = selection.selectedDates.findIndex(d => d === date);
        return selection.selectedDates.length && (index === 0 || index === selection.selectedDates.length - 1);
    }
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    change(date, selection) {
        if (selection.status === SelectionStatus.unset) {
            selection.selectedDates.push(date);
            selection.status = SelectionStatus.startRangeSelected;
        }
        else if (selection.status === SelectionStatus.startRangeSelected) {
            /** @type {?} */
            let start = parse(selection.selectedDates[0]);
            /** @type {?} */
            const end = parse(date);
            /** @type {?} */
            const diff = compareDesc(start, end);
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
    }
}
if (false) {
    /** @type {?} */
    RangeSelectionStrategy.prototype.calendarMonthView;
    /** @type {?} */
    RangeSelectionStrategy.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2Utc2VsZWN0aW9uLnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9zdHJhdGVneS9yYW5nZS1zZWxlY3Rpb24uc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBc0IsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFdEYsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5RSxNQUFNLE9BQU8sc0JBQXNCO0lBQW5DO1FBQ0ksc0JBQWlCLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxTQUFJLEdBQUcsT0FBTyxDQUFDO0lBNkM1QixDQUFDOzs7Ozs7SUEzQ0csU0FBUyxDQUFDLElBQVksRUFBRSxTQUE2Qjs7Y0FDM0MsS0FBSyxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQztRQUVoRSxPQUFPLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBWSxFQUFFLFNBQTZCOztjQUM1QyxLQUFLLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDO1FBRWhFLE9BQU8sU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUUzRyxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBWSxFQUFFLFNBQTRCO1FBQzdDLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxlQUFlLENBQUMsS0FBSyxFQUFFO1lBQzVDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLFNBQVMsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLGtCQUFrQixDQUFDO1NBQ3pEO2FBQU0sSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRTs7Z0JBQzVELEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7a0JBQ3ZDLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztrQkFFakIsSUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1lBRXBDLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDWixTQUFTLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztnQkFDN0IsU0FBUyxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDO2FBQzVDO2lCQUFNLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtnQkFDakIsU0FBUyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7Z0JBQzdCLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3RDO2lCQUFNLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtnQkFDakIsR0FBRztvQkFDQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDMUIsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO2lCQUM3RCxRQUFRLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUV0QyxTQUFTLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUM7YUFDcEQ7U0FFSjthQUFNO1lBQ0gsU0FBUyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7WUFDN0IsU0FBUyxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDO1NBQzVDO0lBQ0wsQ0FBQztDQUNKOzs7SUE5Q0csbURBQXFEOztJQUNyRCxzQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU2VsZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICcuL3NlbGVjdGlvbi1zdHJhdGVneS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUNhbGVuZGFyU2VsZWN0aW9uLCBTZWxlY3Rpb25TdGF0dXMgfSBmcm9tICcuLi9jYWxlbmRhci1zZWxlY3Rpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IENhbGVuZGFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vY2FsZW5kYXItc2VsZWN0aW9uLmNsYXNzJztcbmltcG9ydCB7IHBhcnNlLCBjb21wYXJlRGVzYywgYWRkRGF5cywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aFNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2NhbGVuZGFyLW1vbnRoLXNlbGVjdGlvbi5jbGFzcyc7XG5cbmV4cG9ydCBjbGFzcyBSYW5nZVNlbGVjdGlvblN0cmF0ZWd5IGltcGxlbWVudHMgSVNlbGVjdGlvblN0cmF0ZWd5IHtcbiAgICBjYWxlbmRhck1vbnRoVmlldyA9IG5ldyBDYWxlbmRhck1vbnRoU2VsZWN0aW9uKHRydWUpO1xuICAgIHJlYWRvbmx5IG5hbWUgPSAncmFuZ2UnO1xuXG4gICAgaXNJblJhbmdlKGRhdGU6IHN0cmluZywgc2VsZWN0aW9uOiBJQ2FsZW5kYXJTZWxlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5maW5kSW5kZXgoZCA9PiBkID09PSBkYXRlKTtcblxuICAgICAgICByZXR1cm4gaW5kZXggPiAwICYmIGluZGV4IDwgc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICBpc1NlbGVjdGVkKGRhdGU6IHN0cmluZywgc2VsZWN0aW9uOiBJQ2FsZW5kYXJTZWxlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5maW5kSW5kZXgoZCA9PiBkID09PSBkYXRlKTtcblxuICAgICAgICByZXR1cm4gc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMubGVuZ3RoICYmIChpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMubGVuZ3RoIC0gMSk7XG5cbiAgICB9XG5cbiAgICBjaGFuZ2UoZGF0ZTogc3RyaW5nLCBzZWxlY3Rpb246IENhbGVuZGFyU2VsZWN0aW9uKSB7XG4gICAgICAgIGlmIChzZWxlY3Rpb24uc3RhdHVzID09PSBTZWxlY3Rpb25TdGF0dXMudW5zZXQpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzLnB1c2goZGF0ZSk7XG4gICAgICAgICAgICBzZWxlY3Rpb24uc3RhdHVzID0gU2VsZWN0aW9uU3RhdHVzLnN0YXJ0UmFuZ2VTZWxlY3RlZDtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3Rpb24uc3RhdHVzID09PSBTZWxlY3Rpb25TdGF0dXMuc3RhcnRSYW5nZVNlbGVjdGVkKSB7XG4gICAgICAgICAgICBsZXQgc3RhcnQgPSBwYXJzZShzZWxlY3Rpb24uc2VsZWN0ZWREYXRlc1swXSk7XG4gICAgICAgICAgICBjb25zdCBlbmQgPSBwYXJzZShkYXRlKTtcblxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IGNvbXBhcmVEZXNjKHN0YXJ0LCBlbmQpO1xuXG4gICAgICAgICAgICBpZiAoZGlmZiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzID0gW107XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLnN0YXR1cyA9IFNlbGVjdGlvblN0YXR1cy51bnNldDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlmZiA8IDApIHtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzLnB1c2goZGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydCA9IGFkZERheXMoc3RhcnQsIDEpO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5wdXNoKGZvcm1hdChzdGFydCwgJ1lZWVktTU0tREQnKSk7XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoY29tcGFyZURlc2Moc3RhcnQsIGVuZCkgPiAwKTtcblxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5zdGF0dXMgPSBTZWxlY3Rpb25TdGF0dXMucmFuZ2VTZWxlY3RlZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMgPSBbXTtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zdGF0dXMgPSBTZWxlY3Rpb25TdGF0dXMudW5zZXQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ==