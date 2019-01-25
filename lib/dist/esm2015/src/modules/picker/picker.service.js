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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvbW9kdWxlcy9waWNrZXIvcGlja2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWdCLFFBQVEsRUFBYyxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBaUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBR3RFLGlDQUtDOzs7SUFKQyx3Q0FBb0I7O0lBQ3BCLHlDQUFzQjs7SUFDdEIsMkNBQXVCOztJQUN2QixrQ0FBVzs7O01BR1AsY0FBYyxHQUF1QjtJQUN6QyxXQUFXLEVBQUUsSUFBSTtJQUNqQixhQUFhLEVBQUUsZUFBZTtJQUM5QixVQUFVLEVBQUUsOEJBQThCO0lBQzFDLElBQUksRUFBRSxJQUFJO0NBQ1g7QUFHRCxNQUFNLE9BQU8sYUFBYTs7Ozs7OztJQUd4QixZQUNVLFFBQWtCLEVBQ2xCLE9BQWdCLEVBQ2hCLGtCQUFzQztRQUZ0QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUM1QyxDQUFDOzs7Ozs7Ozs7SUFFTCxJQUFJLENBQUksU0FBNkIsRUFBRSxFQUFFLFVBQXNCLEVBQzdELFNBQTJCLEVBQUUsV0FBOEI7OztjQUVyRCxZQUFZLHFCQUFRLGNBQWMsRUFB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QUFJOzs7Y0FFOUcsZUFBZSxHQUFHLElBQUksT0FBTyxFQUFFO1FBRXJDLDhCQUE4QjtRQUM5QixlQUFlLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELGVBQWUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxlQUFlLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUUzQyxpQ0FBaUM7UUFDakMsT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzVELENBQUM7OztZQXRHRixVQUFVOzs7O1lBdEJ3QixRQUFRO1lBQ2xDLE9BQU87WUFJUCxrQkFBa0I7Ozs7Ozs7SUFzQnZCLGlDQUEwQjs7Ozs7SUFDMUIsZ0NBQXdCOzs7OztJQUN4QiwyQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnRSZWYsIEluamVjdG9yLCBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgUG9ydGFsSW5qZWN0b3IsIENvbXBvbmVudFR5cGUsIFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBQaWNrZXJPdmVybGF5UmVmIH0gZnJvbSAnLi9waWNrZXItb3ZlcmxheS1yZWYnO1xuaW1wb3J0IHsgUElDS0VSX0RBVEEgfSBmcm9tICcuL2luamVjdGlvbi10b2tlbnMnO1xuaW1wb3J0IHsgQnJlYWtwb2ludE9ic2VydmVyLCBCcmVha3BvaW50cyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuXG4vLyBFYWNoIHByb3BlcnR5IGNhbiBiZSBvdmVycmlkZGVuIGJ5IHRoZSBjb25zdW1lclxuaW50ZXJmYWNlIFBpY2tlckRpYWxvZ0NvbmZpZyB7XG4gIHBhbmVsQ2xhc3M/OiBzdHJpbmc7XG4gIGhhc0JhY2tkcm9wPzogYm9vbGVhbjtcbiAgYmFja2Ryb3BDbGFzcz86IHN0cmluZztcbiAgZGF0YT86IGFueTtcbn1cblxuY29uc3QgREVGQVVMVF9DT05GSUc6IFBpY2tlckRpYWxvZ0NvbmZpZyA9IHtcbiAgaGFzQmFja2Ryb3A6IHRydWUsXG4gIGJhY2tkcm9wQ2xhc3M6ICdkYXJrLWJhY2tkcm9wJyxcbiAgcGFuZWxDbGFzczogJ3RtLWZpbGUtcHJldmlldy1kaWFsb2ctcGFuZWwnLFxuICBkYXRhOiBudWxsXG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGlja2VyU2VydmljZSB7XG5cbiAgLy8gSW5qZWN0IG92ZXJsYXkgc2VydmljZVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcixcbiAgKSB7IH1cblxuICBvcGVuPFQ+KGNvbmZpZzogUGlja2VyRGlhbG9nQ29uZmlnID0ge30sIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+LCB0ZW1wbGF0ZVJlZj86IFRlbXBsYXRlUmVmPGFueT4pOiBQaWNrZXJPdmVybGF5UmVmPFQ+IHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAgICBjb25zdCBkaWFsb2dDb25maWcgPSB7IC4uLkRFRkFVTFRfQ09ORklHLCAuLi5jb25maWcgfTtcblxuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLmNyZWF0ZU92ZXJsYXkoZGlhbG9nQ29uZmlnLCBlbGVtZW50UmVmKTtcblxuICAgIGNvbnN0IHBpY2tlclJlZiA9IG5ldyBQaWNrZXJPdmVybGF5UmVmPFQ+KG92ZXJsYXlSZWYpO1xuXG4gICAgY29uc3Qgb3ZlcmxheUNvbXBvbmVudCA9IHRoaXMuYXR0YWNoRGlhbG9nQ29udGFpbmVyKG92ZXJsYXlSZWYsIGRpYWxvZ0NvbmZpZywgcGlja2VyUmVmLCBjb21wb25lbnQsIHRlbXBsYXRlUmVmKTtcblxuICAgIHBpY2tlclJlZi5pbnN0YW5jZSA9IG92ZXJsYXlDb21wb25lbnQ7XG5cbiAgICBvdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoXyA9PiBwaWNrZXJSZWYuY2xvc2UoKSk7XG5cbiAgICByZXR1cm4gcGlja2VyUmVmO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5KGNvbmZpZzogUGlja2VyRGlhbG9nQ29uZmlnLCBlbGVtZW50UmVmPzogRWxlbWVudFJlZikge1xuICAgIC8vIFJldHVybnMgYW4gT3ZlcmxheUNvbmZpZ1xuICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSB0aGlzLmdldE92ZXJsYXlDb25maWcoY29uZmlnLCBlbGVtZW50UmVmKTtcblxuICAgIC8vIFJldHVybnMgYW4gT3ZlcmxheVJlZlxuICAgIHJldHVybiB0aGlzLm92ZXJsYXkuY3JlYXRlKG92ZXJsYXlDb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPdmVybGF5Q29uZmlnKGNvbmZpZzogUGlja2VyRGlhbG9nQ29uZmlnLCBlbGVtZW50UmVmPzogRWxlbWVudFJlZik6IE92ZXJsYXlDb25maWcge1xuICAgIGNvbnN0IHNtYWxsRGV2aWNlID0gdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIuaXNNYXRjaGVkKFtcbiAgICAgIC8vIEJyZWFrcG9pbnRzLlNtYWxsLFxuICAgICAgLy8gQnJlYWtwb2ludHMuSGFuZHNldCxcbiAgICAgIEJyZWFrcG9pbnRzLkhhbmRzZXRQb3J0cmFpdFxuICAgIF0pO1xuXG4gICAgbGV0IHBvc2l0aW9uU3RyYXRlZ3k7XG5cbiAgICBpZiAoc21hbGxEZXZpY2UpIHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkucG9zaXRpb24oKVxuICAgICAgICAuZ2xvYmFsKClcbiAgICAgICAgLmNlbnRlckhvcml6b250YWxseSgpXG4gICAgICAgIC50b3AoJzAnKVxuICAgICAgICAud2lkdGgoJzEwMHZ3JylcbiAgICAgICAgLmhlaWdodCgnMTAwdmgnKTtcblxuICAgICAgICAvLyAuY2VudGVyVmVydGljYWxseSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKCkuZmxleGlibGVDb25uZWN0ZWRUbyhlbGVtZW50UmVmKVxuICAgICAgICAud2l0aFBvc2l0aW9ucyhbXG4gICAgICAgICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvdmVybGF5WDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScsIG92ZXJsYXlZOiAndG9wJyB9LFxuICAgICAgICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3ZlcmxheVg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnLCBvdmVybGF5WTogJ2JvdHRvbScgfVxuICAgICAgICBdKTtcbiAgICB9XG4gICAgLy8gLmhlaWdodCgnMTAwJScpXG4gICAgLy8gLndpZHRoKCcxMDAlJyk7XG5cblxuICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZyh7XG4gICAgICBoYXNCYWNrZHJvcDogY29uZmlnLmhhc0JhY2tkcm9wLFxuICAgICAgYmFja2Ryb3BDbGFzczogY29uZmlnLmJhY2tkcm9wQ2xhc3MsXG4gICAgICBwYW5lbENsYXNzOiBjb25maWcucGFuZWxDbGFzcyxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpLFxuICAgICAgcG9zaXRpb25TdHJhdGVneVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG92ZXJsYXlDb25maWc7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaERpYWxvZ0NvbnRhaW5lcjxUPihcbiAgICBvdmVybGF5UmVmOiBPdmVybGF5UmVmLFxuICAgIGNvbmZpZzogUGlja2VyRGlhbG9nQ29uZmlnLFxuICAgIGRpYWxvZ1JlZjogUGlja2VyT3ZlcmxheVJlZjxUPixcbiAgICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VD4sXG4gICAgdGVtcGxhdGVSZWY/OiBUZW1wbGF0ZVJlZjxhbnk+KTogVCB7XG4gICAgY29uc3QgaW5qZWN0b3IgPSB0aGlzLmNyZWF0ZUluamVjdG9yKGNvbmZpZywgZGlhbG9nUmVmLCB0ZW1wbGF0ZVJlZik7XG5cbiAgICBjb25zdCBjb250YWluZXJQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKGNvbXBvbmVudCwgbnVsbCwgaW5qZWN0b3IpO1xuICAgIGNvbnN0IGNvbnRhaW5lclJlZjogQ29tcG9uZW50UmVmPGFueT4gPSBvdmVybGF5UmVmLmF0dGFjaChjb250YWluZXJQb3J0YWwpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lclJlZi5pbnN0YW5jZTtcblxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVJbmplY3Rvcihjb25maWc6IFBpY2tlckRpYWxvZ0NvbmZpZywgZGlhbG9nUmVmOiBQaWNrZXJPdmVybGF5UmVmPGFueT4sIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbCk6IFBvcnRhbEluamVjdG9yIHtcbiAgICAvLyBJbnN0YW50aWF0ZSBuZXcgV2Vha01hcCBmb3Igb3VyIGN1c3RvbSBpbmplY3Rpb24gdG9rZW5zXG4gICAgY29uc3QgaW5qZWN0aW9uVG9rZW5zID0gbmV3IFdlYWtNYXAoKTtcblxuICAgIC8vIFNldCBjdXN0b20gaW5qZWN0aW9uIHRva2Vuc1xuICAgIGluamVjdGlvblRva2Vucy5zZXQoUGlja2VyT3ZlcmxheVJlZiwgZGlhbG9nUmVmKTtcbiAgICBpbmplY3Rpb25Ub2tlbnMuc2V0KFBJQ0tFUl9EQVRBLCBjb25maWcuZGF0YSk7XG4gICAgaW5qZWN0aW9uVG9rZW5zLnNldChUZW1wbGF0ZVJlZiwgdGVtcGxhdGUpO1xuXG4gICAgLy8gSW5zdGFudGlhdGUgbmV3IFBvcnRhbEluamVjdG9yXG4gICAgcmV0dXJuIG5ldyBQb3J0YWxJbmplY3Rvcih0aGlzLmluamVjdG9yLCBpbmplY3Rpb25Ub2tlbnMpO1xuICB9XG59XG4iXX0=