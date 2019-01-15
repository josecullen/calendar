import { TemplateRef, ViewContainerRef, EventEmitter } from '@angular/core';
import { CellData } from '../cell-data';
export declare class CalendarCellDirective {
    template: TemplateRef<any>;
    private viewContainer;
    constructor(template: TemplateRef<any>, viewContainer: ViewContainerRef);
    trbCalendarCell: CellData<any>;
    click: EventEmitter<{}>;
    onClick(event: MouseEvent): void;
}
