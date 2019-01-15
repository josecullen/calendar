import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";


@Directive({
    selector: '[trbCalendarMonth]'
})
export class CalendarMonthDirective {
    constructor(public template: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) {
    }


}