import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PickerService } from './picker.service';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
    imports: [
        CommonModule,
        OverlayModule,
        LayoutModule,
    ],
    providers: [
        PickerService
    ]
})
export class PickerModule {

}
