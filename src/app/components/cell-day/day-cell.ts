import { Component, Input, OnInit, OnChanges, SimpleChanges, HostListener, NgZone, HostBinding } from "@angular/core";
@Component({
    selector: 'day-header-cell',
    template: `
    <ng-container>
        {{ daysInWeek[day] | slice:0:dayLength }}
    </ng-container>
    `
})
export class DayHeaderCellComponent {
    @Input() day: number;
    @Input() daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    @Input() dayLength:number = 3
}
