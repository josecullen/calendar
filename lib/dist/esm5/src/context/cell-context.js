/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CellData } from '../cell-data';
/**
 * @template T
 */
var /**
 * @template T
 */
CellContext = /** @class */ (function (_super) {
    tslib_1.__extends(CellContext, _super);
    function CellContext(date, payload, selected, disabled) {
        return _super.call(this, date, payload, selected, disabled) || this;
    }
    /**
     * @template T
     * @param {?} cellData
     * @param {?} fields
     * @return {?}
     */
    CellContext.from = /**
     * @template T
     * @param {?} cellData
     * @param {?} fields
     * @return {?}
     */
    function (cellData, fields) {
        /** @type {?} */
        var context = new CellContext(cellData.date, cellData.payload, cellData.selected, cellData.disabled);
        Object.keys(fields).forEach(function (key) {
            context[key] = fields[key];
        });
        return context;
    };
    return CellContext;
}(CellData));
/**
 * @template T
 */
export { CellContext };
if (false) {
    /** @type {?} */
    CellContext.prototype.stylePrefix;
    /** @type {?} */
    CellContext.prototype.selection;
    /** @type {?} */
    CellContext.prototype.monthSelection;
    /** @type {?} */
    CellContext.prototype.hideDaysOutsideMonth;
    /** @type {?} */
    CellContext.prototype.filterDates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1jb250ZXh0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NvbnRleHQvY2VsbC1jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUV4Qzs7OztJQUFvQyx1Q0FBVztJQU8zQyxxQkFBWSxJQUFZLEVBQUUsT0FBVSxFQUFFLFFBQWtCLEVBQUUsUUFBa0I7ZUFDeEUsa0JBQU0sSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO0lBQzVDLENBQUM7Ozs7Ozs7SUFFTSxnQkFBSTs7Ozs7O0lBQVgsVUFBZSxRQUFxQixFQUFFLE1BQVc7O1lBQ3ZDLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDO1FBRXRHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQXBCRCxDQUFvQyxRQUFRLEdBb0IzQzs7Ozs7OztJQW5CRyxrQ0FBb0I7O0lBQ3BCLGdDQUE4Qjs7SUFDOUIscUNBQStCOztJQUMvQiwyQ0FBOEI7O0lBQzlCLGtDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDYWxlbmRhclNlbGVjdGlvbiB9IGZyb20gJy4uL2xpYi9jYWxlbmRhci12aWV3L3NlbGVjdGlvbi9jYWxlbmRhci1zZWxlY3Rpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IE1vbnRoU2VsZWN0aW9uIH0gZnJvbSAnLi4vbGliL2NhbGVuZGFyLXZpZXcvY2FsZW5kYXItbW9udGgtc2VsZWN0aW9uLmNsYXNzJztcbmltcG9ydCB7IENlbGxEYXRhIH0gZnJvbSAnLi4vY2VsbC1kYXRhJztcblxuZXhwb3J0IGNsYXNzIENlbGxDb250ZXh0PFQ+IGV4dGVuZHMgQ2VsbERhdGE8VD4ge1xuICAgIHN0eWxlUHJlZml4OiBzdHJpbmc7XG4gICAgc2VsZWN0aW9uOiBJQ2FsZW5kYXJTZWxlY3Rpb247XG4gICAgbW9udGhTZWxlY3Rpb246IE1vbnRoU2VsZWN0aW9uO1xuICAgIGhpZGVEYXlzT3V0c2lkZU1vbnRoOiBib29sZWFuO1xuICAgIGZpbHRlckRhdGVzOiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGU6IHN0cmluZywgcGF5bG9hZDogVCwgc2VsZWN0ZWQ/OiBib29sZWFuLCBkaXNhYmxlZD86IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoZGF0ZSwgcGF5bG9hZCwgc2VsZWN0ZWQsIGRpc2FibGVkKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbTxUPihjZWxsRGF0YTogQ2VsbERhdGE8VD4sIGZpZWxkczogYW55KTogQ2VsbENvbnRleHQ8VD4ge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gbmV3IENlbGxDb250ZXh0KGNlbGxEYXRhLmRhdGUsIGNlbGxEYXRhLnBheWxvYWQsIGNlbGxEYXRhLnNlbGVjdGVkLCBjZWxsRGF0YS5kaXNhYmxlZCk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZmllbGRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb250ZXh0W2tleV0gPSBmaWVsZHNba2V5XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxufVxuIl19