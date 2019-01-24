/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const DEFAULT_CONFIG = {
    hasBackdrop: true,
    backdropClass: 'dark-backdrop',
    panelClass: 'tm-file-preview-dialog-panel',
    data: null
};
export class PickerService {
    // Inject overlay service
    /**
     * @param {?} injector
     * @param {?} overlay
     * @param {?} breakpointObserver
     */
    constructor(injector, overlay, breakpointObserver) {
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
    open(config = {}, elementRef, component, templateRef) {
        // Override default configuration
        /** @type {?} */
        const dialogConfig = Object.assign({}, DEFAULT_CONFIG, config);
        /** @type {?} */
        const overlayRef = this.createOverlay(dialogConfig, elementRef);
        /** @type {?} */
        const pickerRef = new PickerOverlayRef(overlayRef);
        /** @type {?} */
        const overlayComponent = this.attachDialogContainer(overlayRef, dialogConfig, pickerRef, component, templateRef);
        pickerRef.instance = overlayComponent;
        overlayRef.backdropClick().subscribe(_ => pickerRef.close());
        return pickerRef;
    }
    /**
     * @private
     * @param {?} config
     * @param {?=} elementRef
     * @return {?}
     */
    createOverlay(config, elementRef) {
        // Returns an OverlayConfig
        /** @type {?} */
        const overlayConfig = this.getOverlayConfig(config, elementRef);
        // Returns an OverlayRef
        return this.overlay.create(overlayConfig);
    }
    /**
     * @private
     * @param {?} config
     * @param {?=} elementRef
     * @return {?}
     */
    getOverlayConfig(config, elementRef) {
        /** @type {?} */
        const smallDevice = this.breakpointObserver.isMatched([
            // Breakpoints.Small,
            // Breakpoints.Handset,
            Breakpoints.HandsetPortrait
        ]);
        /** @type {?} */
        let positionStrategy;
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
        const overlayConfig = new OverlayConfig({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy
        });
        return overlayConfig;
    }
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
    attachDialogContainer(overlayRef, config, dialogRef, component, templateRef) {
        /** @type {?} */
        const injector = this.createInjector(config, dialogRef, templateRef);
        /** @type {?} */
        const containerPortal = new ComponentPortal(component, null, injector);
        /** @type {?} */
        const containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    }
    /**
     * @private
     * @param {?} config
     * @param {?} dialogRef
     * @param {?=} template
     * @return {?}
     */
    createInjector(config, dialogRef, template = null) {
        // Instantiate new WeakMap for our custom injection tokens
        /** @type {?} */
        const injectionTokens = new WeakMap();
        // Set custom injection tokens
        injectionTokens.set(PickerOverlayRef, dialogRef);
        injectionTokens.set(PICKER_DATA, config.data);
        injectionTokens.set(TemplateRef, template);
        // Instantiate new PortalInjector
        return new PortalInjector(this.injector, injectionTokens);
    }
}
PickerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PickerService.ctorParameters = () => [
    { type: Injector },
    { type: Overlay },
    { type: BreakpointObserver }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvbW9kdWxlcy9waWNrZXIvcGlja2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWdCLFFBQVEsRUFBYyxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBaUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBR3RFLGlDQUtDOzs7SUFKQyx3Q0FBb0I7O0lBQ3BCLHlDQUFzQjs7SUFDdEIsMkNBQXVCOztJQUN2QixrQ0FBVzs7O01BR1AsY0FBYyxHQUF1QjtJQUN6QyxXQUFXLEVBQUUsSUFBSTtJQUNqQixhQUFhLEVBQUUsZUFBZTtJQUM5QixVQUFVLEVBQUUsOEJBQThCO0lBQzFDLElBQUksRUFBRSxJQUFJO0NBQ1g7QUFHRCxNQUFNLE9BQU8sYUFBYTs7Ozs7OztJQUd4QixZQUNVLFFBQWtCLEVBQ2xCLE9BQWdCLEVBQ2hCLGtCQUFzQztRQUZ0QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUM1QyxDQUFDOzs7Ozs7Ozs7SUFFTCxJQUFJLENBQUksU0FBNkIsRUFBRSxFQUFFLFVBQXNCLEVBQzdELFNBQTJCLEVBQUUsV0FBOEI7OztjQUVyRCxZQUFZLHFCQUFRLGNBQWMsRUFB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OUIsZUFBZSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNqRCxlQUFlLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFM0MsaUNBQWlDO1FBQ2pDLE9BQU8sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7WUFuR0YsVUFBVTs7OztZQXRCd0IsUUFBUTtZQUNsQyxPQUFPO1lBSVAsa0JBQWtCOzs7Ozs7O0lBc0J2QixpQ0FBMEI7Ozs7O0lBQzFCLGdDQUF3Qjs7Ozs7SUFDeEIsMkNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50UmVmLCBJbmplY3RvciwgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlDb25maWcsIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwsIFBvcnRhbEluamVjdG9yLCBDb21wb25lbnRUeXBlLCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgUGlja2VyT3ZlcmxheVJlZiB9IGZyb20gJy4vcGlja2VyLW92ZXJsYXktcmVmJztcbmltcG9ydCB7IFBJQ0tFUl9EQVRBIH0gZnJvbSAnLi9pbmplY3Rpb24tdG9rZW5zJztcbmltcG9ydCB7IEJyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludHMgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcblxuLy8gRWFjaCBwcm9wZXJ0eSBjYW4gYmUgb3ZlcnJpZGRlbiBieSB0aGUgY29uc3VtZXJcbmludGVyZmFjZSBQaWNrZXJEaWFsb2dDb25maWcge1xuICBwYW5lbENsYXNzPzogc3RyaW5nO1xuICBoYXNCYWNrZHJvcD86IGJvb2xlYW47XG4gIGJhY2tkcm9wQ2xhc3M/OiBzdHJpbmc7XG4gIGRhdGE/OiBhbnk7XG59XG5cbmNvbnN0IERFRkFVTFRfQ09ORklHOiBQaWNrZXJEaWFsb2dDb25maWcgPSB7XG4gIGhhc0JhY2tkcm9wOiB0cnVlLFxuICBiYWNrZHJvcENsYXNzOiAnZGFyay1iYWNrZHJvcCcsXG4gIHBhbmVsQ2xhc3M6ICd0bS1maWxlLXByZXZpZXctZGlhbG9nLXBhbmVsJyxcbiAgZGF0YTogbnVsbFxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBpY2tlclNlcnZpY2Uge1xuXG4gIC8vIEluamVjdCBvdmVybGF5IHNlcnZpY2VcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgYnJlYWtwb2ludE9ic2VydmVyOiBCcmVha3BvaW50T2JzZXJ2ZXIsXG4gICkgeyB9XG5cbiAgb3BlbjxUPihjb25maWc6IFBpY2tlckRpYWxvZ0NvbmZpZyA9IHt9LCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPiwgdGVtcGxhdGVSZWY/OiBUZW1wbGF0ZVJlZjxhbnk+KTogUGlja2VyT3ZlcmxheVJlZjxUPiB7XG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBjb25maWd1cmF0aW9uXG4gICAgY29uc3QgZGlhbG9nQ29uZmlnID0geyAuLi5ERUZBVUxUX0NPTkZJRywgLi4uY29uZmlnIH07XG5cbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5jcmVhdGVPdmVybGF5KGRpYWxvZ0NvbmZpZywgZWxlbWVudFJlZik7XG5cbiAgICBjb25zdCBwaWNrZXJSZWYgPSBuZXcgUGlja2VyT3ZlcmxheVJlZjxUPihvdmVybGF5UmVmKTtcblxuICAgIGNvbnN0IG92ZXJsYXlDb21wb25lbnQgPSB0aGlzLmF0dGFjaERpYWxvZ0NvbnRhaW5lcihvdmVybGF5UmVmLCBkaWFsb2dDb25maWcsIHBpY2tlclJlZiwgY29tcG9uZW50LCB0ZW1wbGF0ZVJlZik7XG5cbiAgICBwaWNrZXJSZWYuaW5zdGFuY2UgPSBvdmVybGF5Q29tcG9uZW50O1xuXG4gICAgb3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKF8gPT4gcGlja2VyUmVmLmNsb3NlKCkpO1xuXG4gICAgcmV0dXJuIHBpY2tlclJlZjtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlT3ZlcmxheShjb25maWc6IFBpY2tlckRpYWxvZ0NvbmZpZywgZWxlbWVudFJlZj86IEVsZW1lbnRSZWYpIHtcbiAgICAvLyBSZXR1cm5zIGFuIE92ZXJsYXlDb25maWdcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gdGhpcy5nZXRPdmVybGF5Q29uZmlnKGNvbmZpZywgZWxlbWVudFJlZik7XG5cbiAgICAvLyBSZXR1cm5zIGFuIE92ZXJsYXlSZWZcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5LmNyZWF0ZShvdmVybGF5Q29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3ZlcmxheUNvbmZpZyhjb25maWc6IFBpY2tlckRpYWxvZ0NvbmZpZywgZWxlbWVudFJlZj86IEVsZW1lbnRSZWYpOiBPdmVybGF5Q29uZmlnIHtcbiAgICBjb25zdCBzbWFsbERldmljZSA9IHRoaXMuYnJlYWtwb2ludE9ic2VydmVyLmlzTWF0Y2hlZChbXG4gICAgICAvLyBCcmVha3BvaW50cy5TbWFsbCxcbiAgICAgIC8vIEJyZWFrcG9pbnRzLkhhbmRzZXQsXG4gICAgICBCcmVha3BvaW50cy5IYW5kc2V0UG9ydHJhaXRcbiAgICBdKTtcblxuICAgIGxldCBwb3NpdGlvblN0cmF0ZWd5O1xuXG4gICAgaWYgKHNtYWxsRGV2aWNlKSB7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKClcbiAgICAgICAgLmdsb2JhbCgpXG4gICAgICAgIC5jZW50ZXJIb3Jpem9udGFsbHkoKVxuICAgICAgICAudG9wKCcxMHB4Jyk7XG4gICAgICAgIC8vIC5jZW50ZXJWZXJ0aWNhbGx5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkucG9zaXRpb24oKS5mbGV4aWJsZUNvbm5lY3RlZFRvKGVsZW1lbnRSZWYpXG4gICAgICAgIC53aXRoUG9zaXRpb25zKFtcbiAgICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG92ZXJsYXlYOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJywgb3ZlcmxheVk6ICd0b3AnIH0sXG4gICAgICAgICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvdmVybGF5WDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9XG4gICAgICAgIF0pO1xuICAgIH1cbiAgICAvLyAuaGVpZ2h0KCcxMDAlJylcbiAgICAvLyAud2lkdGgoJzEwMCUnKTtcblxuXG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIGhhc0JhY2tkcm9wOiBjb25maWcuaGFzQmFja2Ryb3AsXG4gICAgICBiYWNrZHJvcENsYXNzOiBjb25maWcuYmFja2Ryb3BDbGFzcyxcbiAgICAgIHBhbmVsQ2xhc3M6IGNvbmZpZy5wYW5lbENsYXNzLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCksXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb3ZlcmxheUNvbmZpZztcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoRGlhbG9nQ29udGFpbmVyPFQ+KFxuICAgIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsXG4gICAgY29uZmlnOiBQaWNrZXJEaWFsb2dDb25maWcsXG4gICAgZGlhbG9nUmVmOiBQaWNrZXJPdmVybGF5UmVmPFQ+LFxuICAgIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPixcbiAgICB0ZW1wbGF0ZVJlZj86IFRlbXBsYXRlUmVmPGFueT4pOiBUIHtcbiAgICBjb25zdCBpbmplY3RvciA9IHRoaXMuY3JlYXRlSW5qZWN0b3IoY29uZmlnLCBkaWFsb2dSZWYsIHRlbXBsYXRlUmVmKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lclBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoY29tcG9uZW50LCBudWxsLCBpbmplY3Rvcik7XG4gICAgY29uc3QgY29udGFpbmVyUmVmOiBDb21wb25lbnRSZWY8YW55PiA9IG92ZXJsYXlSZWYuYXR0YWNoKGNvbnRhaW5lclBvcnRhbCk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyUmVmLmluc3RhbmNlO1xuXG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUluamVjdG9yKGNvbmZpZzogUGlja2VyRGlhbG9nQ29uZmlnLCBkaWFsb2dSZWY6IFBpY2tlck92ZXJsYXlSZWY8YW55PiwgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsKTogUG9ydGFsSW5qZWN0b3Ige1xuICAgIC8vIEluc3RhbnRpYXRlIG5ldyBXZWFrTWFwIGZvciBvdXIgY3VzdG9tIGluamVjdGlvbiB0b2tlbnNcbiAgICBjb25zdCBpbmplY3Rpb25Ub2tlbnMgPSBuZXcgV2Vha01hcCgpO1xuXG4gICAgLy8gU2V0IGN1c3RvbSBpbmplY3Rpb24gdG9rZW5zXG4gICAgaW5qZWN0aW9uVG9rZW5zLnNldChQaWNrZXJPdmVybGF5UmVmLCBkaWFsb2dSZWYpO1xuICAgIGluamVjdGlvblRva2Vucy5zZXQoUElDS0VSX0RBVEEsIGNvbmZpZy5kYXRhKTtcbiAgICBpbmplY3Rpb25Ub2tlbnMuc2V0KFRlbXBsYXRlUmVmLCB0ZW1wbGF0ZSk7XG5cbiAgICAvLyBJbnN0YW50aWF0ZSBuZXcgUG9ydGFsSW5qZWN0b3JcbiAgICByZXR1cm4gbmV3IFBvcnRhbEluamVjdG9yKHRoaXMuaW5qZWN0b3IsIGluamVjdGlvblRva2Vucyk7XG4gIH1cbn1cbiJdfQ==