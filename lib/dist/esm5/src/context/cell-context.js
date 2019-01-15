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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1jb250ZXh0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NvbnRleHQvY2VsbC1jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUV4Qzs7OztJQUFvQyx1Q0FBVztJQU0zQyxxQkFBWSxJQUFZLEVBQUUsT0FBVSxFQUFFLFFBQWtCLEVBQUUsUUFBa0I7ZUFDeEUsa0JBQU0sSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO0lBQzVDLENBQUM7Ozs7Ozs7SUFFTSxnQkFBSTs7Ozs7O0lBQVgsVUFBZSxRQUFxQixFQUFFLE1BQVc7O1lBQ3ZDLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDO1FBRXRHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQW5CRCxDQUFvQyxRQUFRLEdBbUIzQzs7Ozs7OztJQWxCRyxrQ0FBb0I7O0lBQ3BCLGdDQUE4Qjs7SUFDOUIscUNBQStCOztJQUMvQiwyQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ2FsZW5kYXJTZWxlY3Rpb24gfSBmcm9tICcuLi9saWIvY2FsZW5kYXItdmlldy9zZWxlY3Rpb24vY2FsZW5kYXItc2VsZWN0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBNb250aFNlbGVjdGlvbiB9IGZyb20gJy4uL2xpYi9jYWxlbmRhci12aWV3L2NhbGVuZGFyLW1vbnRoLXNlbGVjdGlvbi5jbGFzcyc7XG5pbXBvcnQgeyBDZWxsRGF0YSB9IGZyb20gJy4uL2NlbGwtZGF0YSc7XG5cbmV4cG9ydCBjbGFzcyBDZWxsQ29udGV4dDxUPiBleHRlbmRzIENlbGxEYXRhPFQ+IHtcbiAgICBzdHlsZVByZWZpeDogc3RyaW5nO1xuICAgIHNlbGVjdGlvbjogSUNhbGVuZGFyU2VsZWN0aW9uO1xuICAgIG1vbnRoU2VsZWN0aW9uOiBNb250aFNlbGVjdGlvbjtcbiAgICBoaWRlRGF5c091dHNpZGVNb250aDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGU6IHN0cmluZywgcGF5bG9hZDogVCwgc2VsZWN0ZWQ/OiBib29sZWFuLCBkaXNhYmxlZD86IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoZGF0ZSwgcGF5bG9hZCwgc2VsZWN0ZWQsIGRpc2FibGVkKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbTxUPihjZWxsRGF0YTogQ2VsbERhdGE8VD4sIGZpZWxkczogYW55KTogQ2VsbENvbnRleHQ8VD4ge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gbmV3IENlbGxDb250ZXh0KGNlbGxEYXRhLmRhdGUsIGNlbGxEYXRhLnBheWxvYWQsIGNlbGxEYXRhLnNlbGVjdGVkLCBjZWxsRGF0YS5kaXNhYmxlZCk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZmllbGRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb250ZXh0W2tleV0gPSBmaWVsZHNba2V5XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxufVxuIl19