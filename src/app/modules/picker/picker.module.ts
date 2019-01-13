import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay'
import { PickerService } from './picker.service';

@NgModule({
    imports: [
        CommonModule,
        OverlayModule,
    ],
    providers: [
        PickerService
    ]
})
export class PickerModule {

}