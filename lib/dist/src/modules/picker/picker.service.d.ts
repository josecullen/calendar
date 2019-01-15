import { Injector, ElementRef, TemplateRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentType } from '@angular/cdk/portal';
import { PickerOverlayRef } from './picker-overlay-ref';
interface PickerDialogConfig {
    panelClass?: string;
    hasBackdrop?: boolean;
    backdropClass?: string;
    data?: any;
}
export declare class PickerService {
    private injector;
    private overlay;
    constructor(injector: Injector, overlay: Overlay);
    open<T>(config: PickerDialogConfig, elementRef: ElementRef, component: ComponentType<T>, templateRef?: TemplateRef<any>): PickerOverlayRef<T>;
    private createOverlay;
    private getOverlayConfig;
    private attachDialogContainer;
    private createInjector;
}
export {};
