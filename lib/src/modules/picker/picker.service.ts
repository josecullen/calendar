import { Injectable, ComponentRef, Injector, ElementRef, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector, ComponentType, TemplatePortal } from '@angular/cdk/portal';
import { PickerOverlayRef } from './picker-overlay-ref';
import { PICKER_DATA } from './injection-tokens';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
};

@Injectable()
export class PickerService {

  // Inject overlay service
  constructor(
    private injector: Injector,
    private overlay: Overlay,
    private breakpointObserver: BreakpointObserver,
  ) { }

  open<T>(config: PickerDialogConfig = {}, elementRef: ElementRef,
    component: ComponentType<T>, templateRef?: TemplateRef<any>): PickerOverlayRef<T> {
    // Override default configuration
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    const overlayRef = this.createOverlay(dialogConfig, elementRef);

    const pickerRef = new PickerOverlayRef<T>(overlayRef);

    const overlayComponent = this.attachDialogContainer(overlayRef, dialogConfig, pickerRef, component, templateRef);

    pickerRef.instance = overlayComponent;

    overlayRef.backdropClick().subscribe(_ => pickerRef.close());

    return pickerRef;
  }

  private createOverlay(config: PickerDialogConfig, elementRef?: ElementRef) {
    // Returns an OverlayConfig
    const overlayConfig = this.getOverlayConfig(config, elementRef);

    // Returns an OverlayRef
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(config: PickerDialogConfig, elementRef?: ElementRef): OverlayConfig {
    const smallDevice = this.breakpointObserver.isMatched([
      // Breakpoints.Small,
      // Breakpoints.Handset,
      Breakpoints.HandsetPortrait
    ]);

    let positionStrategy;

    if (smallDevice) {
      positionStrategy = this.overlay.position()
        .global()
        .centerHorizontally()
        .top('0')
        .width('100vw')
        .height('100vh');

        // .centerVertically();
    } else {
      positionStrategy = this.overlay.position().flexibleConnectedTo(elementRef)
        .withPositions([
          { originX: 'start', overlayX: 'start', originY: 'bottom', overlayY: 'top' },
          { originX: 'start', overlayX: 'start', originY: 'top', overlayY: 'bottom' }
        ]);
    }
    // .height('100%')
    // .width('100%');


    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }

  private attachDialogContainer<T>(
    overlayRef: OverlayRef,
    config: PickerDialogConfig,
    dialogRef: PickerOverlayRef<T>,
    component: ComponentType<T>,
    templateRef?: TemplateRef<any>): T {
    const injector = this.createInjector(config, dialogRef, templateRef);

    const containerPortal = new ComponentPortal(component, null, injector);
    const containerRef: ComponentRef<any> = overlayRef.attach(containerPortal);

    return containerRef.instance;

  }

  private createInjector(config: PickerDialogConfig, dialogRef: PickerOverlayRef<any>, template: TemplateRef<any> = null): PortalInjector {
    // Instantiate new WeakMap for our custom injection tokens
    const injectionTokens = new WeakMap();

    // Set custom injection tokens
    injectionTokens.set(PickerOverlayRef, dialogRef);
    injectionTokens.set(PICKER_DATA, config.data);
    injectionTokens.set(TemplateRef, template);

    // Instantiate new PortalInjector
    return new PortalInjector(this.injector, injectionTokens);
  }
}
