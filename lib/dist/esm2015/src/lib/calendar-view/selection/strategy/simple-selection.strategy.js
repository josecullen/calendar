/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CalendarMonthSelection } from '../../calendar-month-selection.class';
export class SingleSelectionStrategy {
    constructor() {
        this.calendarMonthView = new CalendarMonthSelection(false);
        this.name = 'simple';
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
        if (selection.selectedDates.length === 0 || selection.selectedDates[0] !== date) {
            selection.selectedDates = [];
            selection.selectedDates = [date];
        }
        else {
            selection.selectedDates = [];
        }
    }
}
if (false) {
    /** @type {?} */
    SingleSelectionStrategy.prototype.calendarMonthView;
    /** @type {?} */
    SingleSelectionStrategy.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXNlbGVjdGlvbi5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RyYi1jYWxlbmRhci8iLCJzb3VyY2VzIjpbInNyYy9saWIvY2FsZW5kYXItdmlldy9zZWxlY3Rpb24vc3RyYXRlZ3kvc2ltcGxlLXNlbGVjdGlvbi5zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHOUUsTUFBTSxPQUFPLHVCQUF1QjtJQUloQztRQUhBLHNCQUFpQixHQUFHLElBQUksc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsU0FBSSxHQUFHLFFBQVEsQ0FBQztJQUVWLENBQUM7Ozs7OztJQUVoQixTQUFTLENBQUMsSUFBWSxFQUFFLFNBQTZCO1FBQ2pELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxJQUFZLEVBQUUsU0FBNkI7UUFDbEQsT0FBTyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBWSxFQUFFLFNBQTZCO1FBQzlDLElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQzdFLFNBQVMsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1lBQzdCLFNBQVMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0gsU0FBUyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7U0FDaEM7SUFDTCxDQUFDO0NBQ0o7OztJQXJCRyxvREFBc0Q7O0lBQ3RELHVDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTZWxlY3Rpb25TdHJhdGVneSB9IGZyb20gJy4vc2VsZWN0aW9uLXN0cmF0ZWd5LmludGVyZmFjZSc7XG5pbXBvcnQgeyBJQ2FsZW5kYXJTZWxlY3Rpb24gfSBmcm9tICcuLi9jYWxlbmRhci1zZWxlY3Rpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IENhbGVuZGFyTW9udGhTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9jYWxlbmRhci1tb250aC1zZWxlY3Rpb24uY2xhc3MnO1xuXG5cbmV4cG9ydCBjbGFzcyBTaW5nbGVTZWxlY3Rpb25TdHJhdGVneSBpbXBsZW1lbnRzIElTZWxlY3Rpb25TdHJhdGVneSB7XG4gICAgY2FsZW5kYXJNb250aFZpZXcgPSBuZXcgQ2FsZW5kYXJNb250aFNlbGVjdGlvbihmYWxzZSk7XG4gICAgcmVhZG9ubHkgbmFtZSA9ICdzaW1wbGUnO1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgaXNJblJhbmdlKGRhdGU6IHN0cmluZywgc2VsZWN0aW9uOiBJQ2FsZW5kYXJTZWxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlzU2VsZWN0ZWQoZGF0ZTogc3RyaW5nLCBzZWxlY3Rpb246IElDYWxlbmRhclNlbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXMuc29tZShkID0+IGQgPT09IGRhdGUpO1xuICAgIH1cblxuICAgIGNoYW5nZShkYXRlOiBzdHJpbmcsIHNlbGVjdGlvbjogSUNhbGVuZGFyU2VsZWN0aW9uKSB7XG4gICAgICAgIGlmIChzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDAgfHwgc2VsZWN0aW9uLnNlbGVjdGVkRGF0ZXNbMF0gIT09IGRhdGUpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzID0gW107XG4gICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0ZWREYXRlcyA9IFtkYXRlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3RlZERhdGVzID0gW107XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=