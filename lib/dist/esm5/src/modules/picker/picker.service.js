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
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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
    function PickerService(injector, overlay, breakpointObserver) {
        this.injector = injector;
        this.overlay = overlay;
        this.breakpointObserver = breakpointObserver;
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
        var smallDevice = this.breakpointObserver.isMatched([
            // Breakpoints.Small,
            // Breakpoints.Handset,
            Breakpoints.HandsetPortrait
        ]);
        /** @type {?} */
        var positionStrategy;
        if (smallDevice) {
            positionStrategy = this.overlay.position()
                .global()
                .centerHorizontally()
                .top('0')
                .width('100vw')
                .height('100vh');
            // .centerVertically();
        }
        else {
            positionStrategy = this.overlay.position().flexibleConnectedTo(elementRef)
                .withPositions([
                { originX: 'start', overlayX: 'start', originY: 'bottom', overlayY: 'top' },
                { originX: 'start', overlayX: 'start', originY: 'top', overlayY: 'bottom' }
            ]);
        }
        // .height('100%')
        // .width('100%');
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
        { type: Overlay },
        { type: BreakpointObserver }
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
    /**
     * @type {?}
     * @private
     */
    PickerService.prototype.breakpointObserver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvbW9kdWxlcy9waWNrZXIvcGlja2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixRQUFRLEVBQWMsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQWlDLE1BQU0scUJBQXFCLENBQUM7QUFDckcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUd0RSxpQ0FLQzs7O0lBSkMsd0NBQW9COztJQUNwQix5Q0FBc0I7O0lBQ3RCLDJDQUF1Qjs7SUFDdkIsa0NBQVc7OztJQUdQLGNBQWMsR0FBdUI7SUFDekMsV0FBVyxFQUFFLElBQUk7SUFDakIsYUFBYSxFQUFFLGVBQWU7SUFDOUIsVUFBVSxFQUFFLDhCQUE4QjtJQUMxQyxJQUFJLEVBQUUsSUFBSTtDQUNYO0FBRUQ7SUFHRSx5QkFBeUI7SUFDekIsdUJBQ1UsUUFBa0IsRUFDbEIsT0FBZ0IsRUFDaEIsa0JBQXNDO1FBRnRDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQzVDLENBQUM7Ozs7Ozs7OztJQUVMLDRCQUFJOzs7Ozs7OztJQUFKLFVBQVEsTUFBK0IsRUFBRSxVQUFzQixFQUM3RCxTQUEyQixFQUFFLFdBQThCO1FBRHJELHVCQUFBLEVBQUEsV0FBK0I7OztZ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QUFZLENBQUMsUUFBUSxDQUFDO0lBRS9CLENBQUM7Ozs7Ozs7O0lBRU8sc0NBQWM7Ozs7Ozs7SUFBdEIsVUFBdUIsTUFBMEIsRUFBRSxTQUFnQyxFQUFFLFFBQWlDO1FBQWpDLHlCQUFBLEVBQUEsZUFBaUM7OztZQUU5RyxlQUFlLEdBQUcsSUFBSSxPQUFPLEVBQUU7UUFFckMsOEJBQThCO1FBQzlCLGVBQWUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDakQsZUFBZSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLGVBQWUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTNDLGlDQUFpQztRQUNqQyxPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Z0JBdEdGLFVBQVU7Ozs7Z0JBdEJ3QixRQUFRO2dCQUNsQyxPQUFPO2dCQUlQLGtCQUFrQjs7SUF3SDNCLG9CQUFDO0NBQUEsQUF2R0QsSUF1R0M7U0F0R1ksYUFBYTs7Ozs7O0lBSXRCLGlDQUEwQjs7Ozs7SUFDMUIsZ0NBQXdCOzs7OztJQUN4QiwyQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnRSZWYsIEluamVjdG9yLCBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgUG9ydGFsSW5qZWN0b3IsIENvbXBvbmVudFR5cGUsIFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBQaWNrZXJPdmVybGF5UmVmIH0gZnJvbSAnLi9waWNrZXItb3ZlcmxheS1yZWYnO1xuaW1wb3J0IHsgUElDS0VSX0RBVEEgfSBmcm9tICcuL2luamVjdGlvbi10b2tlbnMnO1xuaW1wb3J0IHsgQnJlYWtwb2ludE9ic2VydmVyLCBCcmVha3BvaW50cyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuXG4vLyBFYWNoIHByb3BlcnR5IGNhbiBiZSBvdmVycmlkZGVuIGJ5IHRoZSBjb25zdW1lclxuaW50ZXJmYWNlIFBpY2tlckRpYWxvZ0NvbmZpZyB7XG4gIHBhbmVsQ2xhc3M/OiBzdHJpbmc7XG4gIGhhc0JhY2tkcm9wPzogYm9vbGVhbjtcbiAgYmFja2Ryb3BDbGFzcz86IHN0cmluZztcbiAgZGF0YT86IGFueTtcbn1cblxuY29uc3QgREVGQVVMVF9DT05GSUc6IFBpY2tlckRpYWxvZ0NvbmZpZyA9IHtcbiAgaGFzQmFja2Ryb3A6IHRydWUsXG4gIGJhY2tkcm9wQ2xhc3M6ICdkYXJrLWJhY2tkcm9wJyxcbiAgcGFuZWxDbGFzczogJ3RtLWZpbGUtcHJldmlldy1kaWFsb2ctcGFuZWwnLFxuICBkYXRhOiBudWxsXG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGlja2VyU2VydmljZSB7XG5cbiAgLy8gSW5qZWN0IG92ZXJsYXkgc2VydmljZVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcixcbiAgKSB7IH1cblxuICBvcGVuPFQ+KGNvbmZpZzogUGlja2VyRGlhbG9nQ29uZmlnID0ge30sIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+LCB0ZW1wbGF0ZVJlZj86IFRlbXBsYXRlUmVmPGFueT4pOiBQaWNrZXJPdmVybGF5UmVmPFQ+IHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAgICBjb25zdCBkaWFsb2dDb25maWcgPSB7IC4uLkRFRkFVTFRfQ09ORklHLCAuLi5jb25maWcgfTtcblxuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLmNyZWF0ZU92ZXJsYXkoZGlhbG9nQ29uZmlnLCBlbGVtZW50UmVmKTtcblxuICAgIGNvbnN0IHBpY2tlclJlZiA9IG5ldyBQaWNrZXJPdmVybGF5UmVmPFQ+KG92ZXJsYXlSZWYpO1xuXG4gICAgY29uc3Qgb3ZlcmxheUNvbXBvbmVudCA9IHRoaXMuYXR0YWNoRGlhbG9nQ29udGFpbmVyKG92ZXJsYXlSZWYsIGRpYWxvZ0NvbmZpZywgcGlja2VyUmVmLCBjb21wb25lbnQsIHRlbXBsYXRlUmVmKTtcblxuICAgIHBpY2tlclJlZi5pbnN0YW5jZSA9IG92ZXJsYXlDb21wb25lbnQ7XG5cbiAgICBvdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoXyA9PiBwaWNrZXJSZWYuY2xvc2UoKSk7XG5cbiAgICByZXR1cm4gcGlja2VyUmVmO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5KGNvbmZpZzogUGlja2VyRGlhbG9nQ29uZmlnLCBlbGVtZW50UmVmPzogRWxlbWVudFJlZikge1xuICAgIC8vIFJldHVybnMgYW4gT3ZlcmxheUNvbmZpZ1xuICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSB0aGlzLmdldE92ZXJsYXlDb25maWcoY29uZmlnLCBlbGVtZW50UmVmKTtcblxuICAgIC8vIFJldHVybnMgYW4gT3ZlcmxheVJlZlxuICAgIHJldHVybiB0aGlzLm92ZXJsYXkuY3JlYXRlKG92ZXJsYXlDb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPdmVybGF5Q29uZmlnKGNvbmZpZzogUGlja2VyRGlhbG9nQ29uZmlnLCBlbGVtZW50UmVmPzogRWxlbWVudFJlZik6IE92ZXJsYXlDb25maWcge1xuICAgIGNvbnN0IHNtYWxsRGV2aWNlID0gdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIuaXNNYXRjaGVkKFtcbiAgICAgIC8vIEJyZWFrcG9pbnRzLlNtYWxsLFxuICAgICAgLy8gQnJlYWtwb2ludHMuSGFuZHNldCxcbiAgICAgIEJyZWFrcG9pbnRzLkhhbmRzZXRQb3J0cmFpdFxuICAgIF0pO1xuXG4gICAgbGV0IHBvc2l0aW9uU3RyYXRlZ3k7XG5cbiAgICBpZiAoc21hbGxEZXZpY2UpIHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkucG9zaXRpb24oKVxuICAgICAgICAuZ2xvYmFsKClcbiAgICAgICAgLmNlbnRlckhvcml6b250YWxseSgpXG4gICAgICAgIC50b3AoJzAnKVxuICAgICAgICAud2lkdGgoJzEwMHZ3JylcbiAgICAgICAgLmhlaWdodCgnMTAwdmgnKTtcblxuICAgICAgICAvLyAuY2VudGVyVmVydGljYWxseSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKCkuZmxleGlibGVDb25uZWN0ZWRUbyhlbGVtZW50UmVmKVxuICAgICAgICAud2l0aFBvc2l0aW9ucyhbXG4gICAgICAgICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvdmVybGF5WDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScsIG92ZXJsYXlZOiAndG9wJyB9LFxuICAgICAgICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3ZlcmxheVg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnLCBvdmVybGF5WTogJ2JvdHRvbScgfVxuICAgICAgICBdKTtcbiAgICB9XG4gICAgLy8gLmhlaWdodCgnMTAwJScpXG4gICAgLy8gLndpZHRoKCcxMDAlJyk7XG5cblxuICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZyh7XG4gICAgICBoYXNCYWNrZHJvcDogY29uZmlnLmhhc0JhY2tkcm9wLFxuICAgICAgYmFja2Ryb3BDbGFzczogY29uZmlnLmJhY2tkcm9wQ2xhc3MsXG4gICAgICBwYW5lbENsYXNzOiBjb25maWcucGFuZWxDbGFzcyxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpLFxuICAgICAgcG9zaXRpb25TdHJhdGVneVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG92ZXJsYXlDb25maWc7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaERpYWxvZ0NvbnRhaW5lcjxUPihcbiAgICBvdmVybGF5UmVmOiBPdmVybGF5UmVmLFxuICAgIGNvbmZpZzogUGlja2VyRGlhbG9nQ29uZmlnLFxuICAgIGRpYWxvZ1JlZjogUGlja2VyT3ZlcmxheVJlZjxUPixcbiAgICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VD4sXG4gICAgdGVtcGxhdGVSZWY/OiBUZW1wbGF0ZVJlZjxhbnk+KTogVCB7XG4gICAgY29uc3QgaW5qZWN0b3IgPSB0aGlzLmNyZWF0ZUluamVjdG9yKGNvbmZpZywgZGlhbG9nUmVmLCB0ZW1wbGF0ZVJlZik7XG5cbiAgICBjb25zdCBjb250YWluZXJQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKGNvbXBvbmVudCwgbnVsbCwgaW5qZWN0b3IpO1xuICAgIGNvbnN0IGNvbnRhaW5lclJlZjogQ29tcG9uZW50UmVmPGFueT4gPSBvdmVybGF5UmVmLmF0dGFjaChjb250YWluZXJQb3J0YWwpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lclJlZi5pbnN0YW5jZTtcblxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVJbmplY3Rvcihjb25maWc6IFBpY2tlckRpYWxvZ0NvbmZpZywgZGlhbG9nUmVmOiBQaWNrZXJPdmVybGF5UmVmPGFueT4sIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbCk6IFBvcnRhbEluamVjdG9yIHtcbiAgICAvLyBJbnN0YW50aWF0ZSBuZXcgV2Vha01hcCBmb3Igb3VyIGN1c3RvbSBpbmplY3Rpb24gdG9rZW5zXG4gICAgY29uc3QgaW5qZWN0aW9uVG9rZW5zID0gbmV3IFdlYWtNYXAoKTtcblxuICAgIC8vIFNldCBjdXN0b20gaW5qZWN0aW9uIHRva2Vuc1xuICAgIGluamVjdGlvblRva2Vucy5zZXQoUGlja2VyT3ZlcmxheVJlZiwgZGlhbG9nUmVmKTtcbiAgICBpbmplY3Rpb25Ub2tlbnMuc2V0KFBJQ0tFUl9EQVRBLCBjb25maWcuZGF0YSk7XG4gICAgaW5qZWN0aW9uVG9rZW5zLnNldChUZW1wbGF0ZVJlZiwgdGVtcGxhdGUpO1xuXG4gICAgLy8gSW5zdGFudGlhdGUgbmV3IFBvcnRhbEluamVjdG9yXG4gICAgcmV0dXJuIG5ldyBQb3J0YWxJbmplY3Rvcih0aGlzLmluamVjdG9yLCBpbmplY3Rpb25Ub2tlbnMpO1xuICB9XG59XG4iXX0=