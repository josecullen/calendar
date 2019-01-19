/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CellData } from '../cell-data';
/**
 * @template T
 */
export class CellContext extends CellData {
    /**
     * @param {?} date
     * @param {?} payload
     * @param {?=} selected
     * @param {?=} disabled
     */
    constructor(date, payload, selected, disabled) {
        super(date, payload, selected, disabled);
    }
    /**
     * @template T
     * @param {?} cellData
     * @param {?} fields
     * @return {?}
     */
    static from(cellData, fields) {
        /** @type {?} */
        const context = new CellContext(cellData.date, cellData.payload, cellData.selected, cellData.disabled);
        Object.keys(fields).forEach(key => {
            context[key] = fields[key];
        });
        return context;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1jb250ZXh0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NvbnRleHQvY2VsbC1jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBRXhDLE1BQU0sT0FBTyxXQUFlLFNBQVEsUUFBVzs7Ozs7OztJQU8zQyxZQUFZLElBQVksRUFBRSxPQUFVLEVBQUUsUUFBa0IsRUFBRSxRQUFrQjtRQUN4RSxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7OztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUksUUFBcUIsRUFBRSxNQUFXOztjQUN2QyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUV0RyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztDQUNKOzs7SUFuQkcsa0NBQW9COztJQUNwQixnQ0FBOEI7O0lBQzlCLHFDQUErQjs7SUFDL0IsMkNBQThCOztJQUM5QixrQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ2FsZW5kYXJTZWxlY3Rpb24gfSBmcm9tICcuLi9saWIvY2FsZW5kYXItdmlldy9zZWxlY3Rpb24vY2FsZW5kYXItc2VsZWN0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBNb250aFNlbGVjdGlvbiB9IGZyb20gJy4uL2xpYi9jYWxlbmRhci12aWV3L2NhbGVuZGFyLW1vbnRoLXNlbGVjdGlvbi5jbGFzcyc7XG5pbXBvcnQgeyBDZWxsRGF0YSB9IGZyb20gJy4uL2NlbGwtZGF0YSc7XG5cbmV4cG9ydCBjbGFzcyBDZWxsQ29udGV4dDxUPiBleHRlbmRzIENlbGxEYXRhPFQ+IHtcbiAgICBzdHlsZVByZWZpeDogc3RyaW5nO1xuICAgIHNlbGVjdGlvbjogSUNhbGVuZGFyU2VsZWN0aW9uO1xuICAgIG1vbnRoU2VsZWN0aW9uOiBNb250aFNlbGVjdGlvbjtcbiAgICBoaWRlRGF5c091dHNpZGVNb250aDogYm9vbGVhbjtcbiAgICBmaWx0ZXJEYXRlczogKGRhdGU6IERhdGUpID0+IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRlOiBzdHJpbmcsIHBheWxvYWQ6IFQsIHNlbGVjdGVkPzogYm9vbGVhbiwgZGlzYWJsZWQ/OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKGRhdGUsIHBheWxvYWQsIHNlbGVjdGVkLCBkaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb208VD4oY2VsbERhdGE6IENlbGxEYXRhPFQ+LCBmaWVsZHM6IGFueSk6IENlbGxDb250ZXh0PFQ+IHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBDZWxsQ29udGV4dChjZWxsRGF0YS5kYXRlLCBjZWxsRGF0YS5wYXlsb2FkLCBjZWxsRGF0YS5zZWxlY3RlZCwgY2VsbERhdGEuZGlzYWJsZWQpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGZpZWxkcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29udGV4dFtrZXldID0gZmllbGRzW2tleV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbn1cbiJdfQ==