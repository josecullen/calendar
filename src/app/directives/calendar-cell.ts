import { Directive, TemplateRef, ViewContainerRef, Input, Output, HostListener, EventEmitter } from "@angular/core";
import { CellData } from '../calendar.component';

@Directive({
    selector: '[calendarCell]'
})
export class CalendarCellDirective {
    constructor(public template: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) {
        

    }

    @Input()
    set calendarCell(content:CellData) {
        if(content){
            let ref = this.viewContainer
            .createEmbeddedView(this.template, { $implicit: content })
        }       
    }

    @Output() click = new EventEmitter()

    @HostListener('click', ['$event'])
    onClick(event:MouseEvent) {
        console.log('calendarCell click')
        this.click.emit(event)
    }
}