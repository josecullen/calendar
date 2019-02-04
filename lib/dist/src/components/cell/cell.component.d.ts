import { OnInit, OnChanges } from '@angular/core';
import { CellContext } from '../../context/cell-context';
import { ICalendarSelection } from '../../lib/calendar-view/selection/calendar-selection.interface';
export declare class CalendarCellComponent implements OnInit, OnChanges {
    context: CellContext<any>;
    dateStatus: any;
    styles: any;
    readonly classes: string;
    readonly selection: ICalendarSelection;
    ngOnInit(): void;
    ngOnChanges(): void;
    isSelected(): boolean;
    isInRange(): boolean;
    onClick(): void;
}
