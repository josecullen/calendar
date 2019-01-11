import { Directive, TemplateRef, ViewContainerRef, Input, Output, HostListener, EventEmitter } from "@angular/core";
import { CellData } from '../cell-data';


@Directive({
    selector: '[calendarMonth]'
})
export class CalendarMonthDirective {
    constructor(public template: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) {
    }


}