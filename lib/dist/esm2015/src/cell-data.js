/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Day } from './lib/calendar/day/day.class';
import { parse } from 'date-fns';
/**
 * @template T
 */
export class CellData extends Day {
    /**
     * @param {?} date
     * @param {?} payload
     * @param {?=} selected
     * @param {?=} disabled
     */
    constructor(date, payload, selected = false, disabled = false) {
        super(parse(date));
        this.payload = payload;
        this.selected = selected;
        this.disabled = disabled;
    }
}
if (false) {
    /** @type {?} */
    CellData.prototype.payload;
    /** @type {?} */
    CellData.prototype.selected;
    /** @type {?} */
    CellData.prototype.disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NlbGwtZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7QUFFakMsTUFBTSxPQUFPLFFBQVksU0FBUSxHQUFHOzs7Ozs7O0lBRWhDLFlBQ0ksSUFBWSxFQUNMLE9BQVUsRUFDVixXQUFvQixLQUFLLEVBQ3pCLFdBQW9CLEtBQUs7UUFFaEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBSlosWUFBTyxHQUFQLE9BQU8sQ0FBRztRQUNWLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLGFBQVEsR0FBUixRQUFRLENBQWlCO0lBR3BDLENBQUM7Q0FDSjs7O0lBTk8sMkJBQWlCOztJQUNqQiw0QkFBZ0M7O0lBQ2hDLDRCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElEYXkgfSBmcm9tICcuL2xpYi9jYWxlbmRhci9kYXkvZGF5LmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYXkgfSBmcm9tICcuL2xpYi9jYWxlbmRhci9kYXkvZGF5LmNsYXNzJztcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5leHBvcnQgY2xhc3MgQ2VsbERhdGE8VD4gZXh0ZW5kcyBEYXkgaW1wbGVtZW50cyBJRGF5IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBkYXRlOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBwYXlsb2FkOiBULFxuICAgICAgICBwdWJsaWMgc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICAgICAgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2VcbiAgICApIHtcbiAgICAgICAgc3VwZXIocGFyc2UoZGF0ZSkpO1xuICAgIH1cbn1cbiJdfQ==