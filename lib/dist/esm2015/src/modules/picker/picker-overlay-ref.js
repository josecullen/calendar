/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/**
 * @template T
 */
export class PickerOverlayRef extends Subject {
    // private subject:Subject<any> = new Subject()
    /**
     * @param {?} overlayRef
     */
    constructor(overlayRef) {
        super();
        this.overlayRef = overlayRef;
    }
    /**
     * @param {?=} closeData
     * @return {?}
     */
    close(closeData) {
        if (closeData) {
            this.next(closeData);
        }
        this.overlayRef.dispose();
        return this.asObservable();
    }
}
if (false) {
    /** @type {?} */
    PickerOverlayRef.prototype.instance;
    /**
     * @type {?}
     * @private
     */
    PickerOverlayRef.prototype.overlayRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLW92ZXJsYXktcmVmLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL21vZHVsZXMvcGlja2VyL3BpY2tlci1vdmVybGF5LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE9BQU8sRUFBNkMsTUFBTSxNQUFNLENBQUM7Ozs7QUFFMUUsTUFBTSxPQUFPLGdCQUFvQixTQUFRLE9BQVk7Ozs7O0lBSWpELFlBQW9CLFVBQXNCO1FBQ3hDLEtBQUssRUFBRSxDQUFBO1FBRFcsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUUxQyxDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxTQUFjO1FBQ2xCLElBQUcsU0FBUyxFQUFDO1lBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtTQUNyQjtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFMUIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDNUIsQ0FBQztDQUVKOzs7SUFqQkcsb0NBQVU7Ozs7O0lBR0Usc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgUGFydGlhbE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBQaWNrZXJPdmVybGF5UmVmPFQ+IGV4dGVuZHMgU3ViamVjdDxhbnk+IHtcbiAgICBpbnN0YW5jZTpUXG4gICAgLy8gcHJpdmF0ZSBzdWJqZWN0OlN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KClcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZikge1xuICAgICAgc3VwZXIoKVxuICAgIH1cblxuICAgIGNsb3NlKGNsb3NlRGF0YT86YW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgIGlmKGNsb3NlRGF0YSl7XG4gICAgICAgIHRoaXMubmV4dChjbG9zZURhdGEpXG4gICAgICB9XG5cbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICBcbiAgICAgIHJldHVybiB0aGlzLmFzT2JzZXJ2YWJsZSgpXG4gICAgfVxuICAgIFxufSJdfQ==