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
            let end = parse(date);
            /** @type {?} */
            let diff = compareDesc(start, end);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2Utc2VsZWN0aW9uLnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9zdHJhdGVneS9yYW5nZS1zZWxlY3Rpb24uc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBc0IsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFdEYsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5RSxNQUFNLE9BQU8sc0JBQXNCO0lBQW5DO1FBQ0ksc0JBQWlCLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMzQyxTQUFJLEdBQUcsT0FBTyxDQUFBO0lBZ0QzQixDQUFDOzs7Ozs7SUE5Q0csU0FBUyxDQUFDLElBQVksRUFBRSxTQUE0Qjs7Y0FDMUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQztRQUVoRSxPQUFPLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFFLENBQUMsQ0FBQTtJQUNqRSxDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBWSxFQUFFLFNBQTRCOztjQUMzQyxLQUFLLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDO1FBRWhFLE9BQU8sU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRSxDQUFDLENBQUMsQ0FBQTtJQUV6RyxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBWSxFQUFFLFNBQTJCO1FBQzVDLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxlQUFlLENBQUMsS0FBSyxFQUFFO1lBQzVDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2xDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLGtCQUFrQixDQUFBO1NBQ3hEO2FBQ0ksSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRTs7Z0JBQzFELEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Z0JBQ3pDLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztnQkFFakIsSUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1lBRWxDLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDWixTQUFTLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQTtnQkFDNUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFBO2FBQzNDO2lCQUNJLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtnQkFDZixTQUFTLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQTtnQkFDNUIsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDckM7aUJBQU0sSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQixHQUFHO29CQUNDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO29CQUN6QixTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUE7aUJBQzVELFFBQVEsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUM7Z0JBRXJDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLGFBQWEsQ0FBQTthQUNuRDtTQUVKO2FBQ0k7WUFDRCxTQUFTLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQTtZQUM1QixTQUFTLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUE7U0FDM0M7SUFDTCxDQUFDO0NBQ0o7OztJQWpERyxtREFBb0Q7O0lBQ3BELHNDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTZWxlY3Rpb25TdHJhdGVneSB9IGZyb20gJy4vc2VsZWN0aW9uLXN0cmF0ZWd5LmludGVyZmFjZSc7XG5pbXBvcnQgeyBJQ2FsZW5kYXJTZWxlY3Rpb24sIFNlbGVjdGlvblN0YXR1cyB9IGZyb20gJy4uL2NhbGVuZGFyLXNlbGVjdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZWxlY3Rpb24gfSBmcm9tICcuLi9jYWxlbmRhci1zZWxlY3Rpb24uY2xhc3MnO1xuaW1wb3J0IHsgcGFyc2UsIGNvbXBhcmVEZXNjLCBhZGREYXlzLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBDYWxlbmRhck1vbnRoU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vY2FsZW5kYXItbW9udGgtc2VsZWN0aW9uLmNsYXNzJztcblxuZXhwb3J0IGNsYXNzIFJhbmdlU2VsZWN0aW9uU3RyYXRlZ3kgaW1wbGVtZW50cyBJU2VsZWN0aW9uU3RyYXRlZ3kge1xuICAgIGNhbGVuZGFyTW9udGhWaWV3ID0gbmV3IENhbGVuZGFyTW9udGhTZWxlY3Rpb24odHJ1ZSlcbiAgICByZWFkb25seSBuYW1lID0gJ3JhbmdlJ1xuXG4gICAgaXNJblJhbmdlKGRhdGU6IHN0cmluZywgc2VsZWN0aW9uOklDYWxlbmRhclNlbGVjdGlvbikge1xuICAgICAgICBjb25zdCBpbmRleCA9IHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzLmZpbmRJbmRleChkID0+IGQgPT09IGRhdGUpXG5cbiAgICAgICAgcmV0dXJuIGluZGV4ID4gMCAmJiBpbmRleCA8IHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzLmxlbmd0aCAtMVxuICAgIH1cblxuICAgIGlzU2VsZWN0ZWQoZGF0ZTogc3RyaW5nLCBzZWxlY3Rpb246SUNhbGVuZGFyU2VsZWN0aW9uKXtcbiAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5maW5kSW5kZXgoZCA9PiBkID09PSBkYXRlKVxuXG4gICAgICAgIHJldHVybiBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5sZW5ndGggJiYgKGluZGV4ID09PSAwIHx8IGluZGV4ID09PSBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5sZW5ndGggLTEpXG4gICAgICAgIFxuICAgIH1cblxuICAgIGNoYW5nZShkYXRlOiBzdHJpbmcsIHNlbGVjdGlvbjpDYWxlbmRhclNlbGVjdGlvbikge1xuICAgICAgICBpZiAoc2VsZWN0aW9uLnN0YXR1cyA9PT0gU2VsZWN0aW9uU3RhdHVzLnVuc2V0KSB7XG4gICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5wdXNoKGRhdGUpXG4gICAgICAgICAgICBzZWxlY3Rpb24uc3RhdHVzID0gU2VsZWN0aW9uU3RhdHVzLnN0YXJ0UmFuZ2VTZWxlY3RlZFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGVjdGlvbi5zdGF0dXMgPT09IFNlbGVjdGlvblN0YXR1cy5zdGFydFJhbmdlU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGxldCBzdGFydCA9IHBhcnNlKHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzWzBdKVxuICAgICAgICAgICAgbGV0IGVuZCA9IHBhcnNlKGRhdGUpXG5cbiAgICAgICAgICAgIGxldCBkaWZmID0gY29tcGFyZURlc2Moc3RhcnQsIGVuZClcblxuICAgICAgICAgICAgaWYgKGRpZmYgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcyA9IFtdXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLnN0YXR1cyA9IFNlbGVjdGlvblN0YXR1cy51bnNldFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGlmZiA8IDApIHtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcyA9IFtdXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMucHVzaChkYXRlKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBhZGREYXlzKHN0YXJ0LCAxKVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5wdXNoKGZvcm1hdChzdGFydCwgJ1lZWVktTU0tREQnKSlcbiAgICAgICAgICAgICAgICB9IHdoaWxlIChjb21wYXJlRGVzYyhzdGFydCwgZW5kKSA+IDApXG5cbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uc3RhdHVzID0gU2VsZWN0aW9uU3RhdHVzLnJhbmdlU2VsZWN0ZWRcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMgPSBbXVxuICAgICAgICAgICAgc2VsZWN0aW9uLnN0YXR1cyA9IFNlbGVjdGlvblN0YXR1cy51bnNldFxuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0=