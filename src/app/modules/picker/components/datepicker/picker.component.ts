import { Component, Inject } from "@angular/core";
import { PICKER_DATA } from '../../injection-tokens';
import { PickerOverlayRef } from '../../picker-overlay-ref';


@Component({
    selector: 'picker',
    template: `<h1>Holaaaaaa</h1>`,
    styles: [`
    :host {
        background: blue;
        color: #fff;
        display: block;
        width: 100%;
    }
    `]
})
export class PickerComponent {

    constructor(
        public pickerOverlayRef: PickerOverlayRef,
        @Inject(PICKER_DATA) public data:any){
        console.log('data', data)
    }
}