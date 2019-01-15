/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { PickerOverlayRef } from './picker-overlay-ref';
import { PICKER_DATA } from './injection-tokens';
/**
 * @record
 */
function PickerDialogConfig() { }
if (false) {
    /** @type {?|undefined} */
    PickerDialogConfig.prototype.panelClass;
    /** @type {?|undefined} */
    PickerDialogConfig.prototype.hasBackdrop;
    /** @type {?|undefined} */
    PickerDialogConfig.prototype.backdropClass;
    /** @type {?|undefined} */
    PickerDialogConfig.prototype.data;
}
/** @type {?} */
var DEFAULT_CONFIG = {
    hasBackdrop: true,
    backdropClass: 'dark-backdrop',
    panelClass: 'tm-file-preview-dialog-panel',
    data: null
};
var PickerService = /** @class */ (function () {
    // Inject overlay service
    function PickerService(injector, overlay) {
        this.injector = injector;
        this.overlay = overlay;
    }
    /**
     * @template T
     * @param {?=} config
     * @param {?=} elementRef
     * @param {?=} component
     * @param {?=} templateRef
     * @return {?}
     */
    PickerService.prototype.open = /**
     * @template T
     * @param {?=} config
     * @param {?=} elementRef
     * @param {?=} component
     * @param {?=} templateRef
     * @return {?}
     */
    function (config, elementRef, component, templateRef) {
        if (config === void 0) { config = {}; }
        // Override default configuration
        /** @type {?} */
        var dialogConfig = tslib_1.__assign({}, DEFAULT_CONFIG, config);
        /** @type {?} */
        var overlayRef = this.createOverlay(dialogConfig, elementRef);
        /** @type {?} */
        var pickerRef = new PickerOverlayRef(overlayRef);
        /** @type {?} */
        var overlayComponent = this.attachDialogContainer(overlayRef, dialogConfig, pickerRef, component, templateRef);
        pickerRef.instance = overlayComponent;
        overlayRef.backdropClick().subscribe(function (_) { return pickerRef.close(); });
        return pickerRef;
    };
    /**
     * @private
     * @param {?} config
     * @param {?=} elementRef
     * @return {?}
     */
    PickerService.prototype.createOverlay = /**
     * @private
     * @param {?} config
     * @param {?=} elementRef
     * @return {?}
     */
    function (config, elementRef) {
        // Returns an OverlayConfig
        /** @type {?} */
        var overlayConfig = this.getOverlayConfig(config, elementRef);
        // Returns an OverlayRef
        return this.overlay.create(overlayConfig);
    };
    /**
     * @private
     * @param {?} config
     * @param {?=} elementRef
     * @return {?}
     */
    PickerService.prototype.getOverlayConfig = /**
     * @private
     * @param {?} config
     * @param {?=} elementRef
     * @return {?}
     */
    function (config, elementRef) {
        /** @type {?} */
        var positionStrategy = this.overlay.position()
            .flexibleConnectedTo(elementRef)
            .withPositions([
            { originX: 'center', overlayX: 'start', originY: 'bottom', overlayY: 'top' }
        ])
        // .global()
        // .centerHorizontally()
        // .centerVertically();
        ;
        // .global()
        // .centerHorizontally()
        // .centerVertically();
        /** @type {?} */
        var overlayConfig = new OverlayConfig({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: positionStrategy
        });
        return overlayConfig;
    };
    /**
     * @private
     * @template T
     * @param {?} overlayRef
     * @param {?} config
     * @param {?} dialogRef
     * @param {?} component
     * @param {?=} templateRef
     * @return {?}
     */
    PickerService.prototype.attachDialogContainer = /**
     * @private
     * @template T
     * @param {?} overlayRef
     * @param {?} config
     * @param {?} dialogRef
     * @param {?} component
     * @param {?=} templateRef
     * @return {?}
     */
    function (overlayRef, config, dialogRef, component, templateRef) {
        /** @type {?} */
        var injector = this.createInjector(config, dialogRef, templateRef);
        /** @type {?} */
        var containerPortal = new ComponentPortal(component, null, injector);
        /** @type {?} */
        var containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    };
    /**
     * @private
     * @param {?} config
     * @param {?} dialogRef
     * @param {?=} template
     * @return {?}
     */
    PickerService.prototype.createInjector = /**
     * @private
     * @param {?} config
     * @param {?} dialogRef
     * @param {?=} template
     * @return {?}
     */
    function (config, dialogRef, template) {
        if (template === void 0) { template = null; }
        // Instantiate new WeakMap for our custom injection tokens
        /** @type {?} */
        var injectionTokens = new WeakMap();
        // Set custom injection tokens
        injectionTokens.set(PickerOverlayRef, dialogRef);
        injectionTokens.set(PICKER_DATA, config.data);
        injectionTokens.set(TemplateRef, template);
        // Instantiate new PortalInjector
        return new PortalInjector(this.injector, injectionTokens);
    };
    PickerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PickerService.ctorParameters = function () { return [
        { type: Injector },
        { type: Overlay }
    ]; };
    return PickerService;
}());
export { PickerService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PickerService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    PickerService.prototype.overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvbW9kdWxlcy9waWNrZXIvcGlja2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixRQUFRLEVBQWMsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQWlDLE1BQU0scUJBQXFCLENBQUM7QUFDckcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBR2pELGlDQUtDOzs7SUFKRyx3Q0FBb0I7O0lBQ3BCLHlDQUFzQjs7SUFDdEIsMkNBQXVCOztJQUN2QixrQ0FBVzs7O0lBR1QsY0FBYyxHQUF1QjtJQUN2QyxXQUFXLEVBQUUsSUFBSTtJQUNqQixhQUFhLEVBQUUsZUFBZTtJQUM5QixVQUFVLEVBQUUsOEJBQThCO0lBQzFDLElBQUksRUFBRSxJQUFJO0NBQ2I7QUFFRDtJQUdJLHlCQUF5QjtJQUN6Qix1QkFBb0IsUUFBa0IsRUFBVSxPQUFnQjtRQUE1QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUFJLENBQUM7Ozs7Ozs7OztJQUVyRSw0QkFBSTs7Ozs7Ozs7SUFBSixVQUFRLE1BQStCLEVBQUUsVUFBcUIsRUFDMUQsU0FBMEIsRUFBRSxXQUE2QjtRQURyRCx1QkFBQSxFQUFBLFdBQStCOzs7WUFHN0IsWUFBWSx3QkFBUSxjQUFjLEVBQUssTUFBTSxDQUFFOztZQUUvQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDOztZQUV6RCxT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Ozs7Ozs7SUFHVixpQ0FBMEI7Ozs7O0lBQUUsZ0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50UmVmLCBJbmplY3RvciwgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlDb25maWcsIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwsIFBvcnRhbEluamVjdG9yLCBDb21wb25lbnRUeXBlLCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgUGlja2VyT3ZlcmxheVJlZiB9IGZyb20gJy4vcGlja2VyLW92ZXJsYXktcmVmJztcbmltcG9ydCB7IFBJQ0tFUl9EQVRBIH0gZnJvbSAnLi9pbmplY3Rpb24tdG9rZW5zJztcblxuLy8gRWFjaCBwcm9wZXJ0eSBjYW4gYmUgb3ZlcnJpZGRlbiBieSB0aGUgY29uc3VtZXJcbmludGVyZmFjZSBQaWNrZXJEaWFsb2dDb25maWcge1xuICAgIHBhbmVsQ2xhc3M/OiBzdHJpbmc7XG4gICAgaGFzQmFja2Ryb3A/OiBib29sZWFuO1xuICAgIGJhY2tkcm9wQ2xhc3M/OiBzdHJpbmc7XG4gICAgZGF0YT86IGFueTtcbn1cblxuY29uc3QgREVGQVVMVF9DT05GSUc6IFBpY2tlckRpYWxvZ0NvbmZpZyA9IHtcbiAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcbiAgICBiYWNrZHJvcENsYXNzOiAnZGFyay1iYWNrZHJvcCcsXG4gICAgcGFuZWxDbGFzczogJ3RtLWZpbGUtcHJldmlldy1kaWFsb2ctcGFuZWwnLFxuICAgIGRhdGE6IG51bGxcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBpY2tlclNlcnZpY2Uge1xuXG4gICAgLy8gSW5qZWN0IG92ZXJsYXkgc2VydmljZVxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkpIHsgfVxuXG4gICAgb3BlbjxUPihjb25maWc6IFBpY2tlckRpYWxvZ0NvbmZpZyA9IHt9LCBlbGVtZW50UmVmOkVsZW1lbnRSZWYsIFxuICAgICAgICBjb21wb25lbnQ6Q29tcG9uZW50VHlwZTxUPiwgdGVtcGxhdGVSZWY/OlRlbXBsYXRlUmVmPGFueT4pOiBQaWNrZXJPdmVybGF5UmVmPFQ+IHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBjb25maWd1cmF0aW9uXG4gICAgICAgIGNvbnN0IGRpYWxvZ0NvbmZpZyA9IHsgLi4uREVGQVVMVF9DT05GSUcsIC4uLmNvbmZpZyB9O1xuXG4gICAgICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLmNyZWF0ZU92ZXJsYXkoZGlhbG9nQ29uZmlnLCBlbGVtZW50UmVmKTtcblxuICAgICAgICBjb25zdCBwaWNrZXJSZWYgPSBuZXcgUGlja2VyT3ZlcmxheVJlZjxUPihvdmVybGF5UmVmKVxuXG4gICAgICAgIGNvbnN0IG92ZXJsYXlDb21wb25lbnQgPSB0aGlzLmF0dGFjaERpYWxvZ0NvbnRhaW5lcihvdmVybGF5UmVmLCBkaWFsb2dDb25maWcsIHBpY2tlclJlZiwgY29tcG9uZW50LCB0ZW1wbGF0ZVJlZik7XG5cbiAgICAgICAgcGlja2VyUmVmLmluc3RhbmNlID0gb3ZlcmxheUNvbXBvbmVudFxuXG4gICAgICAgIG92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZShfID0+IHBpY2tlclJlZi5jbG9zZSgpKTtcblxuICAgICAgICByZXR1cm4gcGlja2VyUmVmXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5KGNvbmZpZzogUGlja2VyRGlhbG9nQ29uZmlnLCBlbGVtZW50UmVmPzpFbGVtZW50UmVmKSB7XG4gICAgICAgIC8vIFJldHVybnMgYW4gT3ZlcmxheUNvbmZpZ1xuICAgICAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gdGhpcy5nZXRPdmVybGF5Q29uZmlnKGNvbmZpZywgZWxlbWVudFJlZik7XG5cbiAgICAgICAgLy8gUmV0dXJucyBhbiBPdmVybGF5UmVmXG4gICAgICAgIHJldHVybiB0aGlzLm92ZXJsYXkuY3JlYXRlKG92ZXJsYXlDb25maWcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0T3ZlcmxheUNvbmZpZyhjb25maWc6IFBpY2tlckRpYWxvZ0NvbmZpZywgZWxlbWVudFJlZj86RWxlbWVudFJlZik6IE92ZXJsYXlDb25maWcge1xuICAgICAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKClcbiAgICAgICAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKGVsZW1lbnRSZWYpXG4gICAgICAgICAgICAud2l0aFBvc2l0aW9ucyhbXG4gICAgICAgICAgICAgICAgeyBvcmlnaW5YOiAnY2VudGVyJywgb3ZlcmxheVg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nLCBvdmVybGF5WTogJ3RvcCd9XG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vIC5nbG9iYWwoKVxuICAgICAgICAgICAgLy8gLmNlbnRlckhvcml6b250YWxseSgpXG4gICAgICAgICAgICAvLyAuY2VudGVyVmVydGljYWxseSgpO1xuXG4gICAgICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZyh7XG4gICAgICAgICAgICBoYXNCYWNrZHJvcDogY29uZmlnLmhhc0JhY2tkcm9wLFxuICAgICAgICAgICAgYmFja2Ryb3BDbGFzczogY29uZmlnLmJhY2tkcm9wQ2xhc3MsXG4gICAgICAgICAgICBwYW5lbENsYXNzOiBjb25maWcucGFuZWxDbGFzcyxcbiAgICAgICAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpLFxuICAgICAgICAgICAgcG9zaXRpb25TdHJhdGVneVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb3ZlcmxheUNvbmZpZztcbiAgICB9XG5cbiAgICBwcml2YXRlIGF0dGFjaERpYWxvZ0NvbnRhaW5lcjxUPihcbiAgICAgICAgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiwgXG4gICAgICAgIGNvbmZpZzogUGlja2VyRGlhbG9nQ29uZmlnLCBcbiAgICAgICAgZGlhbG9nUmVmOiBQaWNrZXJPdmVybGF5UmVmPFQ+LFxuICAgICAgICBjb21wb25lbnQ6Q29tcG9uZW50VHlwZTxUPixcbiAgICAgICAgdGVtcGxhdGVSZWY/OiBUZW1wbGF0ZVJlZjxhbnk+KTpUIHtcbiAgICAgICAgY29uc3QgaW5qZWN0b3IgPSB0aGlzLmNyZWF0ZUluamVjdG9yKGNvbmZpZywgZGlhbG9nUmVmLCB0ZW1wbGF0ZVJlZik7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChjb21wb25lbnQsIG51bGwsIGluamVjdG9yKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyUmVmOiBDb21wb25lbnRSZWY8YW55PiA9IG92ZXJsYXlSZWYuYXR0YWNoKGNvbnRhaW5lclBvcnRhbCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lclJlZi5pbnN0YW5jZTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlSW5qZWN0b3IoY29uZmlnOiBQaWNrZXJEaWFsb2dDb25maWcsIGRpYWxvZ1JlZjogUGlja2VyT3ZlcmxheVJlZjxhbnk+LCB0ZW1wbGF0ZTpUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbCk6IFBvcnRhbEluamVjdG9yIHtcbiAgICAgICAgLy8gSW5zdGFudGlhdGUgbmV3IFdlYWtNYXAgZm9yIG91ciBjdXN0b20gaW5qZWN0aW9uIHRva2Vuc1xuICAgICAgICBjb25zdCBpbmplY3Rpb25Ub2tlbnMgPSBuZXcgV2Vha01hcCgpO1xuXG4gICAgICAgIC8vIFNldCBjdXN0b20gaW5qZWN0aW9uIHRva2Vuc1xuICAgICAgICBpbmplY3Rpb25Ub2tlbnMuc2V0KFBpY2tlck92ZXJsYXlSZWYsIGRpYWxvZ1JlZik7XG4gICAgICAgIGluamVjdGlvblRva2Vucy5zZXQoUElDS0VSX0RBVEEsIGNvbmZpZy5kYXRhKTtcbiAgICAgICAgaW5qZWN0aW9uVG9rZW5zLnNldChUZW1wbGF0ZVJlZiwgdGVtcGxhdGUpXG5cbiAgICAgICAgLy8gSW5zdGFudGlhdGUgbmV3IFBvcnRhbEluamVjdG9yXG4gICAgICAgIHJldHVybiBuZXcgUG9ydGFsSW5qZWN0b3IodGhpcy5pbmplY3RvciwgaW5qZWN0aW9uVG9rZW5zKTtcbiAgICB9XG59Il19