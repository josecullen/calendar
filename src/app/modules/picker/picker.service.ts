import { Injectable, ComponentRef, Injector, ElementRef, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector, ComponentType, TemplatePortal } from '@angular/cdk/portal';
import { PickerOverlayRef } from './picker-overlay-ref';
import { PICKER_DATA } from './injection-tokens';

// Each property can be overridden by the consumer
interface PickerDialogConfig {
    panelClass?: string;
    hasBackdrop?: boolean;
    backdropClass?: string;
    data?: any;
}

const DEFAULT_CONFIG: PickerDialogConfig = {
    hasBackdrop: true,
    backdropClass: 'dark-backdrop',
    panelClass: 'tm-file-preview-dialog-panel',
    data: null
}

@Injectable()
export class PickerService {

    // Inject overlay service
    constructor(private injector: Injector, private overlay: Overlay) { }

    open(config: PickerDialogConfig = {}, elementRef:ElementRef, 
        component:ComponentType<any> | TemplateRef<any>, templateRef?:TemplateRef<any>): PickerOverlayRef {
        // Override default configuration
        const dialogConfig = { ...DEFAULT_CONFIG, ...config };

        const overlayRef = this.createOverlay(dialogConfig, elementRef);

        const pickerRef = new PickerOverlayRef(overlayRef)

        const overlayComponent = this.attachDialogContainer(overlayRef, dialogConfig, pickerRef, component, templateRef);

        overlayRef.backdropClick().subscribe(_ => pickerRef.close());

        return pickerRef
    }

    private createOverlay(config: PickerDialogConfig, elementRef?:ElementRef) {
        // Returns an OverlayConfig
        const overlayConfig = this.getOverlayConfig(config, elementRef);

        // Returns an OverlayRef
        return this.overlay.create(overlayConfig);
    }

    private getOverlayConfig(config: PickerDialogConfig, elementRef?:ElementRef): OverlayConfig {
        const positionStrategy = this.overlay.position()
            .flexibleConnectedTo(elementRef)
            .withPositions([
                { originX: 'center', overlayX: 'start', originY: 'bottom', overlayY: 'top'}
            ])
            

            // .global()
            // .centerHorizontally()
            // .centerVertically();

        const overlayConfig = new OverlayConfig({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy
        });

        return overlayConfig;
    }

    private attachDialogContainer(
        overlayRef: OverlayRef, 
        config: PickerDialogConfig, 
        dialogRef: PickerOverlayRef,
        component:ComponentType<any> | TemplateRef<any>,
        templateRef?: TemplateRef<any>) {
        const injector = this.createInjector(config, dialogRef, templateRef);
        
        if(component instanceof TemplateRef){
            const a:TemplateRef<any> = null
            const templatePortal = new TemplatePortal(a, null, config.data)
            const embeddedViewRef = overlayRef.attach(templatePortal)
            console.log('component instanceof TemplateRef',component instanceof TemplateRef)
            return embeddedViewRef
        } else {
            const containerPortal = new ComponentPortal(component, null, injector);
            const containerRef: ComponentRef<any> = overlayRef.attach(containerPortal);
    
            return containerRef.instance;
        }
    }

    private createInjector(config: PickerDialogConfig, dialogRef: PickerOverlayRef, template:TemplateRef<any> = null): PortalInjector {
        // Instantiate new WeakMap for our custom injection tokens
        const injectionTokens = new WeakMap();

        // Set custom injection tokens
        injectionTokens.set(PickerOverlayRef, dialogRef);
        injectionTokens.set(PICKER_DATA, config.data);
        injectionTokens.set(TemplateRef, template)

        // Instantiate new PortalInjector
        return new PortalInjector(this.injector, injectionTokens);
    }
}