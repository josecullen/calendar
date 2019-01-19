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
            { originX: 'start', overlayX: 'start', originY: 'bottom', overlayY: 'top' }
        ]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvbW9kdWxlcy9waWNrZXIvcGlja2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixRQUFRLEVBQWMsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQWlDLE1BQU0scUJBQXFCLENBQUM7QUFDckcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBR2pELGlDQUtDOzs7SUFKRyx3Q0FBb0I7O0lBQ3BCLHlDQUFzQjs7SUFDdEIsMkNBQXVCOztJQUN2QixrQ0FBVzs7O0lBR1QsY0FBYyxHQUF1QjtJQUN2QyxXQUFXLEVBQUUsSUFBSTtJQUNqQixhQUFhLEVBQUUsZUFBZTtJQUM5QixVQUFVLEVBQUUsOEJBQThCO0lBQzFDLElBQUksRUFBRSxJQUFJO0NBQ2I7QUFFRDtJQUdJLHlCQUF5QjtJQUN6Qix1QkFBb0IsUUFBa0IsRUFBVSxPQUFnQjtRQUE1QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUFJLENBQUM7Ozs7Ozs7OztJQUVyRSw0QkFBSTs7Ozs7Ozs7SUFBSixVQUFRLE1BQStCLEVBQUUsVUFBc0IsRUFDM0QsU0FBMkIsRUFBRSxXQUE4QjtRQUR2RCx1QkFBQSxFQUFBLFdBQStCOzs7WUFHN0IsWUFBWSx3QkFBUSxjQUFjLEVBQUssTUFBTSxDQUFFOztZQUUvQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDOztZQUV6RCxT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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnRSZWYsIEluamVjdG9yLCBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgUG9ydGFsSW5qZWN0b3IsIENvbXBvbmVudFR5cGUsIFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBQaWNrZXJPdmVybGF5UmVmIH0gZnJvbSAnLi9waWNrZXItb3ZlcmxheS1yZWYnO1xuaW1wb3J0IHsgUElDS0VSX0RBVEEgfSBmcm9tICcuL2luamVjdGlvbi10b2tlbnMnO1xuXG4vLyBFYWNoIHByb3BlcnR5IGNhbiBiZSBvdmVycmlkZGVuIGJ5IHRoZSBjb25zdW1lclxuaW50ZXJmYWNlIFBpY2tlckRpYWxvZ0NvbmZpZyB7XG4gICAgcGFuZWxDbGFzcz86IHN0cmluZztcbiAgICBoYXNCYWNrZHJvcD86IGJvb2xlYW47XG4gICAgYmFja2Ryb3BDbGFzcz86IHN0cmluZztcbiAgICBkYXRhPzogYW55O1xufVxuXG5jb25zdCBERUZBVUxUX0NPTkZJRzogUGlja2VyRGlhbG9nQ29uZmlnID0ge1xuICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxuICAgIGJhY2tkcm9wQ2xhc3M6ICdkYXJrLWJhY2tkcm9wJyxcbiAgICBwYW5lbENsYXNzOiAndG0tZmlsZS1wcmV2aWV3LWRpYWxvZy1wYW5lbCcsXG4gICAgZGF0YTogbnVsbFxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBpY2tlclNlcnZpY2Uge1xuXG4gICAgLy8gSW5qZWN0IG92ZXJsYXkgc2VydmljZVxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkpIHsgfVxuXG4gICAgb3BlbjxUPihjb25maWc6IFBpY2tlckRpYWxvZ0NvbmZpZyA9IHt9LCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VD4sIHRlbXBsYXRlUmVmPzogVGVtcGxhdGVSZWY8YW55Pik6IFBpY2tlck92ZXJsYXlSZWY8VD4ge1xuICAgICAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAgICAgICAgY29uc3QgZGlhbG9nQ29uZmlnID0geyAuLi5ERUZBVUxUX0NPTkZJRywgLi4uY29uZmlnIH07XG5cbiAgICAgICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMuY3JlYXRlT3ZlcmxheShkaWFsb2dDb25maWcsIGVsZW1lbnRSZWYpO1xuXG4gICAgICAgIGNvbnN0IHBpY2tlclJlZiA9IG5ldyBQaWNrZXJPdmVybGF5UmVmPFQ+KG92ZXJsYXlSZWYpO1xuXG4gICAgICAgIGNvbnN0IG92ZXJsYXlDb21wb25lbnQgPSB0aGlzLmF0dGFjaERpYWxvZ0NvbnRhaW5lcihvdmVybGF5UmVmLCBkaWFsb2dDb25maWcsIHBpY2tlclJlZiwgY29tcG9uZW50LCB0ZW1wbGF0ZVJlZik7XG5cbiAgICAgICAgcGlja2VyUmVmLmluc3RhbmNlID0gb3ZlcmxheUNvbXBvbmVudDtcblxuICAgICAgICBvdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoXyA9PiBwaWNrZXJSZWYuY2xvc2UoKSk7XG5cbiAgICAgICAgcmV0dXJuIHBpY2tlclJlZjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZU92ZXJsYXkoY29uZmlnOiBQaWNrZXJEaWFsb2dDb25maWcsIGVsZW1lbnRSZWY/OiBFbGVtZW50UmVmKSB7XG4gICAgICAgIC8vIFJldHVybnMgYW4gT3ZlcmxheUNvbmZpZ1xuICAgICAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gdGhpcy5nZXRPdmVybGF5Q29uZmlnKGNvbmZpZywgZWxlbWVudFJlZik7XG5cbiAgICAgICAgLy8gUmV0dXJucyBhbiBPdmVybGF5UmVmXG4gICAgICAgIHJldHVybiB0aGlzLm92ZXJsYXkuY3JlYXRlKG92ZXJsYXlDb25maWcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0T3ZlcmxheUNvbmZpZyhjb25maWc6IFBpY2tlckRpYWxvZ0NvbmZpZywgZWxlbWVudFJlZj86IEVsZW1lbnRSZWYpOiBPdmVybGF5Q29uZmlnIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpXG4gICAgICAgICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyhlbGVtZW50UmVmKVxuICAgICAgICAgICAgLndpdGhQb3NpdGlvbnMoW1xuICAgICAgICAgICAgICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3ZlcmxheVg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nLCBvdmVybGF5WTogJ3RvcCd9XG4gICAgICAgICAgICBdKTtcblxuXG4gICAgICAgICAgICAvLyAuZ2xvYmFsKClcbiAgICAgICAgICAgIC8vIC5jZW50ZXJIb3Jpem9udGFsbHkoKVxuICAgICAgICAgICAgLy8gLmNlbnRlclZlcnRpY2FsbHkoKTtcblxuICAgICAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoe1xuICAgICAgICAgICAgaGFzQmFja2Ryb3A6IGNvbmZpZy5oYXNCYWNrZHJvcCxcbiAgICAgICAgICAgIGJhY2tkcm9wQ2xhc3M6IGNvbmZpZy5iYWNrZHJvcENsYXNzLFxuICAgICAgICAgICAgcGFuZWxDbGFzczogY29uZmlnLnBhbmVsQ2xhc3MsXG4gICAgICAgICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKSxcbiAgICAgICAgICAgIHBvc2l0aW9uU3RyYXRlZ3lcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG92ZXJsYXlDb25maWc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhdHRhY2hEaWFsb2dDb250YWluZXI8VD4oXG4gICAgICAgIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsXG4gICAgICAgIGNvbmZpZzogUGlja2VyRGlhbG9nQ29uZmlnLFxuICAgICAgICBkaWFsb2dSZWY6IFBpY2tlck92ZXJsYXlSZWY8VD4sXG4gICAgICAgIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPixcbiAgICAgICAgdGVtcGxhdGVSZWY/OiBUZW1wbGF0ZVJlZjxhbnk+KTogVCB7XG4gICAgICAgIGNvbnN0IGluamVjdG9yID0gdGhpcy5jcmVhdGVJbmplY3Rvcihjb25maWcsIGRpYWxvZ1JlZiwgdGVtcGxhdGVSZWYpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoY29tcG9uZW50LCBudWxsLCBpbmplY3Rvcik7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclJlZjogQ29tcG9uZW50UmVmPGFueT4gPSBvdmVybGF5UmVmLmF0dGFjaChjb250YWluZXJQb3J0YWwpO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXJSZWYuaW5zdGFuY2U7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUluamVjdG9yKGNvbmZpZzogUGlja2VyRGlhbG9nQ29uZmlnLCBkaWFsb2dSZWY6IFBpY2tlck92ZXJsYXlSZWY8YW55PiwgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsKTogUG9ydGFsSW5qZWN0b3Ige1xuICAgICAgICAvLyBJbnN0YW50aWF0ZSBuZXcgV2Vha01hcCBmb3Igb3VyIGN1c3RvbSBpbmplY3Rpb24gdG9rZW5zXG4gICAgICAgIGNvbnN0IGluamVjdGlvblRva2VucyA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgICAgICAgLy8gU2V0IGN1c3RvbSBpbmplY3Rpb24gdG9rZW5zXG4gICAgICAgIGluamVjdGlvblRva2Vucy5zZXQoUGlja2VyT3ZlcmxheVJlZiwgZGlhbG9nUmVmKTtcbiAgICAgICAgaW5qZWN0aW9uVG9rZW5zLnNldChQSUNLRVJfREFUQSwgY29uZmlnLmRhdGEpO1xuICAgICAgICBpbmplY3Rpb25Ub2tlbnMuc2V0KFRlbXBsYXRlUmVmLCB0ZW1wbGF0ZSk7XG5cbiAgICAgICAgLy8gSW5zdGFudGlhdGUgbmV3IFBvcnRhbEluamVjdG9yXG4gICAgICAgIHJldHVybiBuZXcgUG9ydGFsSW5qZWN0b3IodGhpcy5pbmplY3RvciwgaW5qZWN0aW9uVG9rZW5zKTtcbiAgICB9XG59XG4iXX0=