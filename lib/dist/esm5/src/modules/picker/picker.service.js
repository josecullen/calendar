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
                .top('10px');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvbW9kdWxlcy9waWNrZXIvcGlja2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixRQUFRLEVBQWMsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQWlDLE1BQU0scUJBQXFCLENBQUM7QUFDckcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUd0RSxpQ0FLQzs7O0lBSkMsd0NBQW9COztJQUNwQix5Q0FBc0I7O0lBQ3RCLDJDQUF1Qjs7SUFDdkIsa0NBQVc7OztJQUdQLGNBQWMsR0FBdUI7SUFDekMsV0FBVyxFQUFFLElBQUk7SUFDakIsYUFBYSxFQUFFLGVBQWU7SUFDOUIsVUFBVSxFQUFFLDhCQUE4QjtJQUMxQyxJQUFJLEVBQUUsSUFBSTtDQUNYO0FBRUQ7SUFHRSx5QkFBeUI7SUFDekIsdUJBQ1UsUUFBa0IsRUFDbEIsT0FBZ0IsRUFDaEIsa0JBQXNDO1FBRnRDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQzVDLENBQUM7Ozs7Ozs7OztJQUVMLDRCQUFJOzs7Ozs7OztJQUFKLFVBQVEsTUFBK0IsRUFBRSxVQUFzQixFQUM3RCxTQUEyQixFQUFFLFdBQThCO1FBRHJELHVCQUFBLEVBQUEsV0FBK0I7OztZ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O0lBQXRCLFVBQXVCLE1BQTBCLEVBQUUsU0FBZ0MsRUFBRSxRQUFpQztRQUFqQyx5QkFBQSxFQUFBLGVBQWlDOzs7WUFFOUcsZUFBZSxHQUFHLElBQUksT0FBTyxFQUFFO1FBRXJDLDhCQUE4QjtRQUM5QixlQUFlLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELGVBQWUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxlQUFlLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUUzQyxpQ0FBaUM7UUFDakMsT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzVELENBQUM7O2dCQW5HRixVQUFVOzs7O2dCQXRCd0IsUUFBUTtnQkFDbEMsT0FBTztnQkFJUCxrQkFBa0I7O0lBcUgzQixvQkFBQztDQUFBLEFBcEdELElBb0dDO1NBbkdZLGFBQWE7Ozs7OztJQUl0QixpQ0FBMEI7Ozs7O0lBQzFCLGdDQUF3Qjs7Ozs7SUFDeEIsMkNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50UmVmLCBJbmplY3RvciwgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlDb25maWcsIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwsIFBvcnRhbEluamVjdG9yLCBDb21wb25lbnRUeXBlLCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgUGlja2VyT3ZlcmxheVJlZiB9IGZyb20gJy4vcGlja2VyLW92ZXJsYXktcmVmJztcbmltcG9ydCB7IFBJQ0tFUl9EQVRBIH0gZnJvbSAnLi9pbmplY3Rpb24tdG9rZW5zJztcbmltcG9ydCB7IEJyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludHMgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcblxuLy8gRWFjaCBwcm9wZXJ0eSBjYW4gYmUgb3ZlcnJpZGRlbiBieSB0aGUgY29uc3VtZXJcbmludGVyZmFjZSBQaWNrZXJEaWFsb2dDb25maWcge1xuICBwYW5lbENsYXNzPzogc3RyaW5nO1xuICBoYXNCYWNrZHJvcD86IGJvb2xlYW47XG4gIGJhY2tkcm9wQ2xhc3M/OiBzdHJpbmc7XG4gIGRhdGE/OiBhbnk7XG59XG5cbmNvbnN0IERFRkFVTFRfQ09ORklHOiBQaWNrZXJEaWFsb2dDb25maWcgPSB7XG4gIGhhc0JhY2tkcm9wOiB0cnVlLFxuICBiYWNrZHJvcENsYXNzOiAnZGFyay1iYWNrZHJvcCcsXG4gIHBhbmVsQ2xhc3M6ICd0bS1maWxlLXByZXZpZXctZGlhbG9nLXBhbmVsJyxcbiAgZGF0YTogbnVsbFxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBpY2tlclNlcnZpY2Uge1xuXG4gIC8vIEluamVjdCBvdmVybGF5IHNlcnZpY2VcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgYnJlYWtwb2ludE9ic2VydmVyOiBCcmVha3BvaW50T2JzZXJ2ZXIsXG4gICkgeyB9XG5cbiAgb3BlbjxUPihjb25maWc6IFBpY2tlckRpYWxvZ0NvbmZpZyA9IHt9LCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPiwgdGVtcGxhdGVSZWY/OiBUZW1wbGF0ZVJlZjxhbnk+KTogUGlja2VyT3ZlcmxheVJlZjxUPiB7XG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBjb25maWd1cmF0aW9uXG4gICAgY29uc3QgZGlhbG9nQ29uZmlnID0geyAuLi5ERUZBVUxUX0NPTkZJRywgLi4uY29uZmlnIH07XG5cbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5jcmVhdGVPdmVybGF5KGRpYWxvZ0NvbmZpZywgZWxlbWVudFJlZik7XG5cbiAgICBjb25zdCBwaWNrZXJSZWYgPSBuZXcgUGlja2VyT3ZlcmxheVJlZjxUPihvdmVybGF5UmVmKTtcblxuICAgIGNvbnN0IG92ZXJsYXlDb21wb25lbnQgPSB0aGlzLmF0dGFjaERpYWxvZ0NvbnRhaW5lcihvdmVybGF5UmVmLCBkaWFsb2dDb25maWcsIHBpY2tlclJlZiwgY29tcG9uZW50LCB0ZW1wbGF0ZVJlZik7XG5cbiAgICBwaWNrZXJSZWYuaW5zdGFuY2UgPSBvdmVybGF5Q29tcG9uZW50O1xuXG4gICAgb3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKF8gPT4gcGlja2VyUmVmLmNsb3NlKCkpO1xuXG4gICAgcmV0dXJuIHBpY2tlclJlZjtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlT3ZlcmxheShjb25maWc6IFBpY2tlckRpYWxvZ0NvbmZpZywgZWxlbWVudFJlZj86IEVsZW1lbnRSZWYpIHtcbiAgICAvLyBSZXR1cm5zIGFuIE92ZXJsYXlDb25maWdcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gdGhpcy5nZXRPdmVybGF5Q29uZmlnKGNvbmZpZywgZWxlbWVudFJlZik7XG5cbiAgICAvLyBSZXR1cm5zIGFuIE92ZXJsYXlSZWZcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5LmNyZWF0ZShvdmVybGF5Q29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3ZlcmxheUNvbmZpZyhjb25maWc6IFBpY2tlckRpYWxvZ0NvbmZpZywgZWxlbWVudFJlZj86IEVsZW1lbnRSZWYpOiBPdmVybGF5Q29uZmlnIHtcbiAgICBjb25zdCBzbWFsbERldmljZSA9IHRoaXMuYnJlYWtwb2ludE9ic2VydmVyLmlzTWF0Y2hlZChbXG4gICAgICAvLyBCcmVha3BvaW50cy5TbWFsbCxcbiAgICAgIC8vIEJyZWFrcG9pbnRzLkhhbmRzZXQsXG4gICAgICBCcmVha3BvaW50cy5IYW5kc2V0UG9ydHJhaXRcbiAgICBdKTtcblxuICAgIGxldCBwb3NpdGlvblN0cmF0ZWd5O1xuXG4gICAgaWYgKHNtYWxsRGV2aWNlKSB7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKClcbiAgICAgICAgLmdsb2JhbCgpXG4gICAgICAgIC5jZW50ZXJIb3Jpem9udGFsbHkoKVxuICAgICAgICAudG9wKCcxMHB4Jyk7XG4gICAgICAgIC8vIC5jZW50ZXJWZXJ0aWNhbGx5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkucG9zaXRpb24oKS5mbGV4aWJsZUNvbm5lY3RlZFRvKGVsZW1lbnRSZWYpXG4gICAgICAgIC53aXRoUG9zaXRpb25zKFtcbiAgICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG92ZXJsYXlYOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJywgb3ZlcmxheVk6ICd0b3AnIH0sXG4gICAgICAgICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvdmVybGF5WDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9XG4gICAgICAgIF0pO1xuICAgIH1cbiAgICAvLyAuaGVpZ2h0KCcxMDAlJylcbiAgICAvLyAud2lkdGgoJzEwMCUnKTtcblxuXG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIGhhc0JhY2tkcm9wOiBjb25maWcuaGFzQmFja2Ryb3AsXG4gICAgICBiYWNrZHJvcENsYXNzOiBjb25maWcuYmFja2Ryb3BDbGFzcyxcbiAgICAgIHBhbmVsQ2xhc3M6IGNvbmZpZy5wYW5lbENsYXNzLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCksXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb3ZlcmxheUNvbmZpZztcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoRGlhbG9nQ29udGFpbmVyPFQ+KFxuICAgIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsXG4gICAgY29uZmlnOiBQaWNrZXJEaWFsb2dDb25maWcsXG4gICAgZGlhbG9nUmVmOiBQaWNrZXJPdmVybGF5UmVmPFQ+LFxuICAgIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPixcbiAgICB0ZW1wbGF0ZVJlZj86IFRlbXBsYXRlUmVmPGFueT4pOiBUIHtcbiAgICBjb25zdCBpbmplY3RvciA9IHRoaXMuY3JlYXRlSW5qZWN0b3IoY29uZmlnLCBkaWFsb2dSZWYsIHRlbXBsYXRlUmVmKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lclBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoY29tcG9uZW50LCBudWxsLCBpbmplY3Rvcik7XG4gICAgY29uc3QgY29udGFpbmVyUmVmOiBDb21wb25lbnRSZWY8YW55PiA9IG92ZXJsYXlSZWYuYXR0YWNoKGNvbnRhaW5lclBvcnRhbCk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyUmVmLmluc3RhbmNlO1xuXG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUluamVjdG9yKGNvbmZpZzogUGlja2VyRGlhbG9nQ29uZmlnLCBkaWFsb2dSZWY6IFBpY2tlck92ZXJsYXlSZWY8YW55PiwgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsKTogUG9ydGFsSW5qZWN0b3Ige1xuICAgIC8vIEluc3RhbnRpYXRlIG5ldyBXZWFrTWFwIGZvciBvdXIgY3VzdG9tIGluamVjdGlvbiB0b2tlbnNcbiAgICBjb25zdCBpbmplY3Rpb25Ub2tlbnMgPSBuZXcgV2Vha01hcCgpO1xuXG4gICAgLy8gU2V0IGN1c3RvbSBpbmplY3Rpb24gdG9rZW5zXG4gICAgaW5qZWN0aW9uVG9rZW5zLnNldChQaWNrZXJPdmVybGF5UmVmLCBkaWFsb2dSZWYpO1xuICAgIGluamVjdGlvblRva2Vucy5zZXQoUElDS0VSX0RBVEEsIGNvbmZpZy5kYXRhKTtcbiAgICBpbmplY3Rpb25Ub2tlbnMuc2V0KFRlbXBsYXRlUmVmLCB0ZW1wbGF0ZSk7XG5cbiAgICAvLyBJbnN0YW50aWF0ZSBuZXcgUG9ydGFsSW5qZWN0b3JcbiAgICByZXR1cm4gbmV3IFBvcnRhbEluamVjdG9yKHRoaXMuaW5qZWN0b3IsIGluamVjdGlvblRva2Vucyk7XG4gIH1cbn1cbiJdfQ==