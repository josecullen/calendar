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
            // selection.selectedDates = [];
            // selection.status = SelectionStatus.unset;
            selection.selectedDates = [];
            selection.selectedDates.push(date);
            selection.status = SelectionStatus.startRangeSelected;
        }
    }
}
if (false) {
    /** @type {?} */
    RangeSelectionStrategy.prototype.calendarMonthView;
    /** @type {?} */
    RangeSelectionStrategy.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2Utc2VsZWN0aW9uLnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9zdHJhdGVneS9yYW5nZS1zZWxlY3Rpb24uc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBc0IsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFdEYsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5RSxNQUFNLE9BQU8sc0JBQXNCO0lBQW5DO1FBQ0ksc0JBQWlCLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxTQUFJLEdBQUcsT0FBTyxDQUFDO0lBZ0Q1QixDQUFDOzs7Ozs7SUE5Q0csU0FBUyxDQUFDLElBQVksRUFBRSxTQUE2Qjs7Y0FDM0MsS0FBSyxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQztRQUVoRSxPQUFPLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBWSxFQUFFLFNBQTZCOztjQUM1QyxLQUFLLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDO1FBRWhFLE9BQU8sU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUUzRyxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBWSxFQUFFLFNBQTRCO1FBQzdDLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxlQUFlLENBQUMsS0FBSyxFQUFFO1lBQzVDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLFNBQVMsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLGtCQUFrQixDQUFDO1NBQ3pEO2FBQU0sSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRTs7Z0JBQzVELEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7a0JBQ3ZDLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztrQkFFakIsSUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1lBRXBDLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDWixTQUFTLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztnQkFDN0IsU0FBUyxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDO2FBQzVDO2lCQUFNLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtnQkFDakIsU0FBUyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7Z0JBQzdCLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3RDO2lCQUFNLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtnQkFDakIsR0FBRztvQkFDQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDMUIsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO2lCQUM3RCxRQUFRLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUV0QyxTQUFTLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUM7YUFDcEQ7U0FFSjthQUFNO1lBQ0gsZ0NBQWdDO1lBQ2hDLDRDQUE0QztZQUM1QyxTQUFTLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztZQUM3QixTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxTQUFTLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQztTQUN6RDtJQUNMLENBQUM7Q0FDSjs7O0lBakRHLG1EQUFxRDs7SUFDckQsc0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNlbGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9zZWxlY3Rpb24tc3RyYXRlZ3kuaW50ZXJmYWNlJztcbmltcG9ydCB7IElDYWxlbmRhclNlbGVjdGlvbiwgU2VsZWN0aW9uU3RhdHVzIH0gZnJvbSAnLi4vY2FsZW5kYXItc2VsZWN0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDYWxlbmRhclNlbGVjdGlvbiB9IGZyb20gJy4uL2NhbGVuZGFyLXNlbGVjdGlvbi5jbGFzcyc7XG5pbXBvcnQgeyBwYXJzZSwgY29tcGFyZURlc2MsIGFkZERheXMsIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IENhbGVuZGFyTW9udGhTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9jYWxlbmRhci1tb250aC1zZWxlY3Rpb24uY2xhc3MnO1xuXG5leHBvcnQgY2xhc3MgUmFuZ2VTZWxlY3Rpb25TdHJhdGVneSBpbXBsZW1lbnRzIElTZWxlY3Rpb25TdHJhdGVneSB7XG4gICAgY2FsZW5kYXJNb250aFZpZXcgPSBuZXcgQ2FsZW5kYXJNb250aFNlbGVjdGlvbih0cnVlKTtcbiAgICByZWFkb25seSBuYW1lID0gJ3JhbmdlJztcblxuICAgIGlzSW5SYW5nZShkYXRlOiBzdHJpbmcsIHNlbGVjdGlvbjogSUNhbGVuZGFyU2VsZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMuZmluZEluZGV4KGQgPT4gZCA9PT0gZGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIGluZGV4ID4gMCAmJiBpbmRleCA8IHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgaXNTZWxlY3RlZChkYXRlOiBzdHJpbmcsIHNlbGVjdGlvbjogSUNhbGVuZGFyU2VsZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMuZmluZEluZGV4KGQgPT4gZCA9PT0gZGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzLmxlbmd0aCAmJiAoaW5kZXggPT09IDAgfHwgaW5kZXggPT09IHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzLmxlbmd0aCAtIDEpO1xuXG4gICAgfVxuXG4gICAgY2hhbmdlKGRhdGU6IHN0cmluZywgc2VsZWN0aW9uOiBDYWxlbmRhclNlbGVjdGlvbikge1xuICAgICAgICBpZiAoc2VsZWN0aW9uLnN0YXR1cyA9PT0gU2VsZWN0aW9uU3RhdHVzLnVuc2V0KSB7XG4gICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5wdXNoKGRhdGUpO1xuICAgICAgICAgICAgc2VsZWN0aW9uLnN0YXR1cyA9IFNlbGVjdGlvblN0YXR1cy5zdGFydFJhbmdlU2VsZWN0ZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uLnN0YXR1cyA9PT0gU2VsZWN0aW9uU3RhdHVzLnN0YXJ0UmFuZ2VTZWxlY3RlZCkge1xuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gcGFyc2Uoc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXNbMF0pO1xuICAgICAgICAgICAgY29uc3QgZW5kID0gcGFyc2UoZGF0ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBjb21wYXJlRGVzYyhzdGFydCwgZW5kKTtcblxuICAgICAgICAgICAgaWYgKGRpZmYgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5zdGF0dXMgPSBTZWxlY3Rpb25TdGF0dXMudW5zZXQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpZmYgPCAwKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5wdXNoKGRhdGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBhZGREYXlzKHN0YXJ0LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMucHVzaChmb3JtYXQoc3RhcnQsICdZWVlZLU1NLUREJykpO1xuICAgICAgICAgICAgICAgIH0gd2hpbGUgKGNvbXBhcmVEZXNjKHN0YXJ0LCBlbmQpID4gMCk7XG5cbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uc3RhdHVzID0gU2VsZWN0aW9uU3RhdHVzLnJhbmdlU2VsZWN0ZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzID0gW107XG4gICAgICAgICAgICAvLyBzZWxlY3Rpb24uc3RhdHVzID0gU2VsZWN0aW9uU3RhdHVzLnVuc2V0O1xuICAgICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMgPSBbXTtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzLnB1c2goZGF0ZSk7XG4gICAgICAgICAgICBzZWxlY3Rpb24uc3RhdHVzID0gU2VsZWN0aW9uU3RhdHVzLnN0YXJ0UmFuZ2VTZWxlY3RlZDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19