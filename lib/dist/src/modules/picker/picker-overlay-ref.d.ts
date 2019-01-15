import { OverlayRef } from '@angular/cdk/overlay';
import { Subject, Observable } from 'rxjs';
export declare class PickerOverlayRef<T> extends Subject<any> {
    private overlayRef;
    instance: T;
    constructor(overlayRef: OverlayRef);
    close(closeData?: any): Observable<any>;
}
