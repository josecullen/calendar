import { OverlayRef } from '@angular/cdk/overlay';
import { Subject, Observable, Subscription, PartialObserver } from 'rxjs';

export class PickerOverlayRef<T> extends Subject<any> {
    instance:T
    // private subject:Subject<any> = new Subject()

    constructor(private overlayRef: OverlayRef) {
      super()
    }

    close(closeData?:any): Observable<any> {
      if(closeData){
        this.next(closeData)
      }

      this.overlayRef.dispose();
      
      return this.asObservable()
    }
    
}