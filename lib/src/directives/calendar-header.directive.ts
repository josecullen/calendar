import { Directive, TemplateRef, ViewContainerRef, Input, Output, HostListener, EventEmitter } from "@angular/core";

@Directive({
    selector: '[trbCalendarHeader]'
})
export class CalendarHeaderDirective {
    constructor(public template: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) {
    }


}