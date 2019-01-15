import { TemplateRef, ViewContainerRef } from "@angular/core";
export declare class CalendarHeaderDirective {
    template: TemplateRef<any>;
    private viewContainer;
    constructor(template: TemplateRef<any>, viewContainer: ViewContainerRef);
}
