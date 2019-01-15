/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CalendarDefaultFactory } from './lib/calendar/factory/default-factory';
import { format } from 'date-fns';
import { CellData } from './cell-data';
var CalendarViewFactory = /** @class */ (function (_super) {
    tslib_1.__extends(CalendarViewFactory, _super);
    function CalendarViewFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} date
     * @param {?=} selected
     * @param {?=} disabled
     * @return {?}
     */
    CalendarViewFactory.prototype.createDay = /**
     * @param {?} date
     * @param {?=} selected
     * @param {?=} disabled
     * @return {?}
     */
    function (date, selected, disabled) {
        return new CellData(format(date), selected, disabled);
    };
    return CalendarViewFactory;
}(CalendarDefaultFactory));
export { CalendarViewFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdmlldy5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NhbGVuZGFyLXZpZXcuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBR2hGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QztJQUF5QywrQ0FBc0I7SUFBL0Q7O0lBS0EsQ0FBQzs7Ozs7OztJQUhHLHVDQUFTOzs7Ozs7SUFBVCxVQUFVLElBQVMsRUFBRSxRQUFpQixFQUFFLFFBQWlCO1FBQ3JELE9BQU8sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBeUMsc0JBQXNCLEdBSzlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUNhbGVuZGFyRmFjdG9yeSB9IGZyb20gJy4vbGliL2NhbGVuZGFyL2ZhY3RvcnkvZmFjdG9yeS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FsZW5kYXJEZWZhdWx0RmFjdG9yeSB9IGZyb20gJy4vbGliL2NhbGVuZGFyL2ZhY3RvcnkvZGVmYXVsdC1mYWN0b3J5JztcbmltcG9ydCB7IElEYXkgfSBmcm9tICcuL2xpYi9jYWxlbmRhci9kYXkvZGF5LmludGVyZmFjZSc7XG5cbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IENlbGxEYXRhIH0gZnJvbSAnLi9jZWxsLWRhdGEnO1xuZXhwb3J0IGNsYXNzIENhbGVuZGFyVmlld0ZhY3RvcnkgZXh0ZW5kcyBDYWxlbmRhckRlZmF1bHRGYWN0b3J5IGltcGxlbWVudHMgSUNhbGVuZGFyRmFjdG9yeSB7XG5cbiAgICBjcmVhdGVEYXkoZGF0ZTpEYXRlLCBzZWxlY3RlZD86Ym9vbGVhbiwgZGlzYWJsZWQ/OmJvb2xlYW4pOklEYXkge1xuICAgICAgICByZXR1cm4gbmV3IENlbGxEYXRhKGZvcm1hdChkYXRlKSwgc2VsZWN0ZWQsIGRpc2FibGVkKVxuICAgIH1cbn0iXX0=