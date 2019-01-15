/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
     */
    constructor(injector, overlay) {
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
        const positionStrategy = this.overlay.position()
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
    { type: Overlay }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvbW9kdWxlcy9waWNrZXIvcGlja2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWdCLFFBQVEsRUFBYyxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBaUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFHakQsaUNBS0M7OztJQUpHLHdDQUFvQjs7SUFDcEIseUNBQXNCOztJQUN0QiwyQ0FBdUI7O0lBQ3ZCLGtDQUFXOzs7TUFHVCxjQUFjLEdBQXVCO0lBQ3ZDLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLGFBQWEsRUFBRSxlQUFlO0lBQzlCLFVBQVUsRUFBRSw4QkFBOEI7SUFDMUMsSUFBSSxFQUFFLElBQUk7Q0FDYjtBQUdELE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUFHdEIsWUFBb0IsUUFBa0IsRUFBVSxPQUFnQjtRQUE1QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUFJLENBQUM7Ozs7Ozs7OztJQUVyRSxJQUFJLENBQUksU0FBNkIsRUFBRSxFQUFFLFVBQXFCLEVBQzFELFNBQTBCLEVBQUUsV0FBNkI7OztjQUVuRCxZQUFZLHFCQUFRLGNBQWMsRUFBSyxNQUFNLENBQUU7O2NBRS9DLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUM7O2NBRXpELFNBQVMsR0FBRyxJQUFJLGdCQUFnQixDQUFJLFVBQVUsQ0FBQzs7Y0FFL0MsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUM7UUFFaEgsU0FBUyxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQTtRQUVyQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFN0QsT0FBTyxTQUFTLENBQUE7SUFDcEIsQ0FBQzs7Ozs7OztJQUVPLGFBQWEsQ0FBQyxNQUEwQixFQUFFLFVBQXNCOzs7Y0FFOUQsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDO1FBRS9ELHdCQUF3QjtRQUN4QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7Ozs7SUFFTyxnQkFBZ0IsQ0FBQyxNQUEwQixFQUFFLFVBQXNCOztjQUNqRSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTthQUMzQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUM7YUFDL0IsYUFBYSxDQUFDO1lBQ1gsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1NBQzlFLENBQUM7UUFHRixZQUFZO1FBQ1osd0JBQXdCO1FBQ3hCLHVCQUF1Qjs7Ozs7O2NBRXJCLGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQztZQUNwQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7WUFDL0IsYUFBYSxFQUFFLE1BQU0sQ0FBQyxhQUFhO1lBQ25DLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVTtZQUM3QixjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUU7WUFDckQsZ0JBQWdCO1NBQ25CLENBQUM7UUFFRixPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDOzs7Ozs7Ozs7OztJQUVPLHFCQUFxQixDQUN6QixVQUFzQixFQUN0QixNQUEwQixFQUMxQixTQUE4QixFQUM5QixTQUEwQixFQUMxQixXQUE4Qjs7Y0FDeEIsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUM7O2NBRTlELGVBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQzs7Y0FDaEUsWUFBWSxHQUFzQixVQUFVLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUUxRSxPQUFPLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFFakMsQ0FBQzs7Ozs7Ozs7SUFFTyxjQUFjLENBQUMsTUFBMEIsRUFBRSxTQUFnQyxFQUFFLFdBQTRCLElBQUk7OztjQUUzRyxlQUFlLEdBQUcsSUFBSSxPQUFPLEVBQUU7UUFFckMsOEJBQThCO1FBQzlCLGVBQWUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDakQsZUFBZSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLGVBQWUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBRTFDLGlDQUFpQztRQUNqQyxPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7O1lBakZKLFVBQVU7Ozs7WUFyQndCLFFBQVE7WUFDbEMsT0FBTzs7Ozs7OztJQXdCQSxpQ0FBMEI7Ozs7O0lBQUUsZ0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50UmVmLCBJbmplY3RvciwgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlDb25maWcsIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwsIFBvcnRhbEluamVjdG9yLCBDb21wb25lbnRUeXBlLCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgUGlja2VyT3ZlcmxheVJlZiB9IGZyb20gJy4vcGlja2VyLW92ZXJsYXktcmVmJztcbmltcG9ydCB7IFBJQ0tFUl9EQVRBIH0gZnJvbSAnLi9pbmplY3Rpb24tdG9rZW5zJztcblxuLy8gRWFjaCBwcm9wZXJ0eSBjYW4gYmUgb3ZlcnJpZGRlbiBieSB0aGUgY29uc3VtZXJcbmludGVyZmFjZSBQaWNrZXJEaWFsb2dDb25maWcge1xuICAgIHBhbmVsQ2xhc3M/OiBzdHJpbmc7XG4gICAgaGFzQmFja2Ryb3A/OiBib29sZWFuO1xuICAgIGJhY2tkcm9wQ2xhc3M/OiBzdHJpbmc7XG4gICAgZGF0YT86IGFueTtcbn1cblxuY29uc3QgREVGQVVMVF9DT05GSUc6IFBpY2tlckRpYWxvZ0NvbmZpZyA9IHtcbiAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcbiAgICBiYWNrZHJvcENsYXNzOiAnZGFyay1iYWNrZHJvcCcsXG4gICAgcGFuZWxDbGFzczogJ3RtLWZpbGUtcHJldmlldy1kaWFsb2ctcGFuZWwnLFxuICAgIGRhdGE6IG51bGxcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBpY2tlclNlcnZpY2Uge1xuXG4gICAgLy8gSW5qZWN0IG92ZXJsYXkgc2VydmljZVxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkpIHsgfVxuXG4gICAgb3BlbjxUPihjb25maWc6IFBpY2tlckRpYWxvZ0NvbmZpZyA9IHt9LCBlbGVtZW50UmVmOkVsZW1lbnRSZWYsIFxuICAgICAgICBjb21wb25lbnQ6Q29tcG9uZW50VHlwZTxUPiwgdGVtcGxhdGVSZWY/OlRlbXBsYXRlUmVmPGFueT4pOiBQaWNrZXJPdmVybGF5UmVmPFQ+IHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBjb25maWd1cmF0aW9uXG4gICAgICAgIGNvbnN0IGRpYWxvZ0NvbmZpZyA9IHsgLi4uREVGQVVMVF9DT05GSUcsIC4uLmNvbmZpZyB9O1xuXG4gICAgICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLmNyZWF0ZU92ZXJsYXkoZGlhbG9nQ29uZmlnLCBlbGVtZW50UmVmKTtcblxuICAgICAgICBjb25zdCBwaWNrZXJSZWYgPSBuZXcgUGlja2VyT3ZlcmxheVJlZjxUPihvdmVybGF5UmVmKVxuXG4gICAgICAgIGNvbnN0IG92ZXJsYXlDb21wb25lbnQgPSB0aGlzLmF0dGFjaERpYWxvZ0NvbnRhaW5lcihvdmVybGF5UmVmLCBkaWFsb2dDb25maWcsIHBpY2tlclJlZiwgY29tcG9uZW50LCB0ZW1wbGF0ZVJlZik7XG5cbiAgICAgICAgcGlja2VyUmVmLmluc3RhbmNlID0gb3ZlcmxheUNvbXBvbmVudFxuXG4gICAgICAgIG92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZShfID0+IHBpY2tlclJlZi5jbG9zZSgpKTtcblxuICAgICAgICByZXR1cm4gcGlja2VyUmVmXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5KGNvbmZpZzogUGlja2VyRGlhbG9nQ29uZmlnLCBlbGVtZW50UmVmPzpFbGVtZW50UmVmKSB7XG4gICAgICAgIC8vIFJldHVybnMgYW4gT3ZlcmxheUNvbmZpZ1xuICAgICAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gdGhpcy5nZXRPdmVybGF5Q29uZmlnKGNvbmZpZywgZWxlbWVudFJlZik7XG5cbiAgICAgICAgLy8gUmV0dXJucyBhbiBPdmVybGF5UmVmXG4gICAgICAgIHJldHVybiB0aGlzLm92ZXJsYXkuY3JlYXRlKG92ZXJsYXlDb25maWcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0T3ZlcmxheUNvbmZpZyhjb25maWc6IFBpY2tlckRpYWxvZ0NvbmZpZywgZWxlbWVudFJlZj86RWxlbWVudFJlZik6IE92ZXJsYXlDb25maWcge1xuICAgICAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKClcbiAgICAgICAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKGVsZW1lbnRSZWYpXG4gICAgICAgICAgICAud2l0aFBvc2l0aW9ucyhbXG4gICAgICAgICAgICAgICAgeyBvcmlnaW5YOiAnY2VudGVyJywgb3ZlcmxheVg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nLCBvdmVybGF5WTogJ3RvcCd9XG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vIC5nbG9iYWwoKVxuICAgICAgICAgICAgLy8gLmNlbnRlckhvcml6b250YWxseSgpXG4gICAgICAgICAgICAvLyAuY2VudGVyVmVydGljYWxseSgpO1xuXG4gICAgICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZyh7XG4gICAgICAgICAgICBoYXNCYWNrZHJvcDogY29uZmlnLmhhc0JhY2tkcm9wLFxuICAgICAgICAgICAgYmFja2Ryb3BDbGFzczogY29uZmlnLmJhY2tkcm9wQ2xhc3MsXG4gICAgICAgICAgICBwYW5lbENsYXNzOiBjb25maWcucGFuZWxDbGFzcyxcbiAgICAgICAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpLFxuICAgICAgICAgICAgcG9zaXRpb25TdHJhdGVneVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb3ZlcmxheUNvbmZpZztcbiAgICB9XG5cbiAgICBwcml2YXRlIGF0dGFjaERpYWxvZ0NvbnRhaW5lcjxUPihcbiAgICAgICAgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiwgXG4gICAgICAgIGNvbmZpZzogUGlja2VyRGlhbG9nQ29uZmlnLCBcbiAgICAgICAgZGlhbG9nUmVmOiBQaWNrZXJPdmVybGF5UmVmPFQ+LFxuICAgICAgICBjb21wb25lbnQ6Q29tcG9uZW50VHlwZTxUPixcbiAgICAgICAgdGVtcGxhdGVSZWY/OiBUZW1wbGF0ZVJlZjxhbnk+KTpUIHtcbiAgICAgICAgY29uc3QgaW5qZWN0b3IgPSB0aGlzLmNyZWF0ZUluamVjdG9yKGNvbmZpZywgZGlhbG9nUmVmLCB0ZW1wbGF0ZVJlZik7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChjb21wb25lbnQsIG51bGwsIGluamVjdG9yKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyUmVmOiBDb21wb25lbnRSZWY8YW55PiA9IG92ZXJsYXlSZWYuYXR0YWNoKGNvbnRhaW5lclBvcnRhbCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lclJlZi5pbnN0YW5jZTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlSW5qZWN0b3IoY29uZmlnOiBQaWNrZXJEaWFsb2dDb25maWcsIGRpYWxvZ1JlZjogUGlja2VyT3ZlcmxheVJlZjxhbnk+LCB0ZW1wbGF0ZTpUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbCk6IFBvcnRhbEluamVjdG9yIHtcbiAgICAgICAgLy8gSW5zdGFudGlhdGUgbmV3IFdlYWtNYXAgZm9yIG91ciBjdXN0b20gaW5qZWN0aW9uIHRva2Vuc1xuICAgICAgICBjb25zdCBpbmplY3Rpb25Ub2tlbnMgPSBuZXcgV2Vha01hcCgpO1xuXG4gICAgICAgIC8vIFNldCBjdXN0b20gaW5qZWN0aW9uIHRva2Vuc1xuICAgICAgICBpbmplY3Rpb25Ub2tlbnMuc2V0KFBpY2tlck92ZXJsYXlSZWYsIGRpYWxvZ1JlZik7XG4gICAgICAgIGluamVjdGlvblRva2Vucy5zZXQoUElDS0VSX0RBVEEsIGNvbmZpZy5kYXRhKTtcbiAgICAgICAgaW5qZWN0aW9uVG9rZW5zLnNldChUZW1wbGF0ZVJlZiwgdGVtcGxhdGUpXG5cbiAgICAgICAgLy8gSW5zdGFudGlhdGUgbmV3IFBvcnRhbEluamVjdG9yXG4gICAgICAgIHJldHVybiBuZXcgUG9ydGFsSW5qZWN0b3IodGhpcy5pbmplY3RvciwgaW5qZWN0aW9uVG9rZW5zKTtcbiAgICB9XG59Il19