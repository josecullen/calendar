import { Directive, TemplateRef, ViewContainerRef, Input, Output, HostListener, EventEmitter } from "@angular/core";
import { CellData } from '../cell-data';


@Directive({
    selector: '[calendarHeader]'
})
export class CalendarHeaderDirective {
    constructor(public template: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) {
    }


}