import { Directive, TemplateRef, ViewContainerRef, Input, Output, HostListener, EventEmitter } from "@angular/core";
import { CellData } from '../cell-data';


@Directive({
    selector: '[trbCalendarCell]'
})
export class CalendarCellDirective {
    constructor(public template: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) {
        

    }

    @Input()
    set trbCalendarCell(content:CellData<any>) {
        if(content){
            let ref = this.viewContainer
            .createEmbeddedView(this.template, { $implicit: content })
        }       
    }

    @Output() click = new EventEmitter()

    @HostListener('click', ['$event'])
    onClick(event:MouseEvent) {
        this.click.emit(event)
    }
}