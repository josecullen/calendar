/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Subject } from 'rxjs';
/**
 * @template T
 */
var /**
 * @template T
 */
PickerOverlayRef = /** @class */ (function (_super) {
    tslib_1.__extends(PickerOverlayRef, _super);
    // private subject:Subject<any> = new Subject()
    function PickerOverlayRef(overlayRef) {
        var _this = _super.call(this) || this;
        _this.overlayRef = overlayRef;
        return _this;
    }
    /**
     * @param {?=} closeData
     * @return {?}
     */
    PickerOverlayRef.prototype.close = /**
     * @param {?=} closeData
     * @return {?}
     */
    function (closeData) {
        if (closeData) {
            this.next(closeData);
        }
        this.overlayRef.dispose();
        return this.asObservable();
    };
    return PickerOverlayRef;
}(Subject));
/**
 * @template T
 */
export { PickerOverlayRef };
if (false) {
    /** @type {?} */
    PickerOverlayRef.prototype.instance;
    /**
     * @type {?}
     * @private
     */
    PickerOverlayRef.prototype.overlayRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLW92ZXJsYXktcmVmLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL21vZHVsZXMvcGlja2VyL3BpY2tlci1vdmVybGF5LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQTZDLE1BQU0sTUFBTSxDQUFDOzs7O0FBRTFFOzs7O0lBQXlDLDRDQUFZO0lBRWpELCtDQUErQztJQUUvQywwQkFBb0IsVUFBc0I7UUFBMUMsWUFDRSxpQkFBTyxTQUNSO1FBRm1CLGdCQUFVLEdBQVYsVUFBVSxDQUFZOztJQUUxQyxDQUFDOzs7OztJQUVELGdDQUFLOzs7O0lBQUwsVUFBTSxTQUFjO1FBQ2xCLElBQUcsU0FBUyxFQUFDO1lBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtTQUNyQjtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFMUIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVMLHVCQUFDO0FBQUQsQ0FBQyxBQWxCRCxDQUF5QyxPQUFPLEdBa0IvQzs7Ozs7OztJQWpCRyxvQ0FBVTs7Ozs7SUFHRSxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBQYXJ0aWFsT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIFBpY2tlck92ZXJsYXlSZWY8VD4gZXh0ZW5kcyBTdWJqZWN0PGFueT4ge1xuICAgIGluc3RhbmNlOlRcbiAgICAvLyBwcml2YXRlIHN1YmplY3Q6U3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmKSB7XG4gICAgICBzdXBlcigpXG4gICAgfVxuXG4gICAgY2xvc2UoY2xvc2VEYXRhPzphbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgaWYoY2xvc2VEYXRhKXtcbiAgICAgICAgdGhpcy5uZXh0KGNsb3NlRGF0YSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHRoaXMuYXNPYnNlcnZhYmxlKClcbiAgICB9XG4gICAgXG59Il19