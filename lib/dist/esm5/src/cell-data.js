/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Day } from './lib/calendar/day/day.class';
import { parse } from 'date-fns';
/**
 * @template T
 */
var /**
 * @template T
 */
CellData = /** @class */ (function (_super) {
    tslib_1.__extends(CellData, _super);
    function CellData(date, payload, selected, disabled) {
        if (selected === void 0) { selected = false; }
        if (disabled === void 0) { disabled = false; }
        var _this = _super.call(this, parse(date)) || this;
        _this.payload = payload;
        _this.selected = selected;
        _this.disabled = disabled;
        return _this;
    }
    return CellData;
}(Day));
/**
 * @template T
 */
export { CellData };
if (false) {
    /** @type {?} */
    CellData.prototype.payload;
    /** @type {?} */
    CellData.prototype.selected;
    /** @type {?} */
    CellData.prototype.disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1kYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NlbGwtZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7O0FBRWpDOzs7O0lBQWlDLG9DQUFHO0lBRWhDLGtCQUNJLElBQVksRUFDTCxPQUFVLEVBQ1YsUUFBeUIsRUFDekIsUUFBeUI7UUFEekIseUJBQUEsRUFBQSxnQkFBeUI7UUFDekIseUJBQUEsRUFBQSxnQkFBeUI7UUFKcEMsWUFNSSxrQkFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsU0FDckI7UUFMVSxhQUFPLEdBQVAsT0FBTyxDQUFHO1FBQ1YsY0FBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsY0FBUSxHQUFSLFFBQVEsQ0FBaUI7O0lBR3BDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQVZELENBQWlDLEdBQUcsR0FVbkM7Ozs7Ozs7SUFOTywyQkFBaUI7O0lBQ2pCLDRCQUFnQzs7SUFDaEMsNEJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSURheSB9IGZyb20gJy4vbGliL2NhbGVuZGFyL2RheS9kYXkuaW50ZXJmYWNlJztcbmltcG9ydCB7IERheSB9IGZyb20gJy4vbGliL2NhbGVuZGFyL2RheS9kYXkuY2xhc3MnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdkYXRlLWZucyc7XG5cbmV4cG9ydCBjbGFzcyBDZWxsRGF0YTxUPiBleHRlbmRzIERheSBpbXBsZW1lbnRzIElEYXkge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGRhdGU6IHN0cmluZyxcbiAgICAgICAgcHVibGljIHBheWxvYWQ6IFQsXG4gICAgICAgIHB1YmxpYyBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlLFxuICAgICAgICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICAgICkge1xuICAgICAgICBzdXBlcihwYXJzZShkYXRlKSk7XG4gICAgfVxufVxuIl19