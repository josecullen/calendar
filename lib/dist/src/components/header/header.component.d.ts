import { OnChanges, SimpleChanges } from '@angular/core';
import { HeaderContext } from '../../context/header-context';
import { MonthSelection } from '../../lib/calendar-view/calendar-month-selection.class';
export declare class CalendarHeaderComponent implements OnChanges {
    context: HeaderContext;
    monthSelections: MonthSelection[];
    showTwoMonths: boolean;
    monthIndex: number;
    linkedMonths: boolean;
    monthLabels: string[];
    readonly classes: string;
    readonly buttonClasses: string;
    showPastMonth(): boolean;
    isCurrentMonth(): boolean;
    minusYear(index: number): void;
    minusMonth(index: number): void;
    addYear(index: number): void;
    addMonth(index: number): void;
    ngOnChanges(changes: SimpleChanges): void;
}
