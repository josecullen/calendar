import { Component, Input } from '@angular/core';
@Component({
    selector: 'trb-calendar-day-header-cell',
    template: `
    <ng-container *ngIf="dayLabels.length > 0 else defaultDays">
        {{ dayLabels[day] | slice:0:dayLength }}
    </ng-container>

    <ng-template #defaultDays>
        {{ daysInWeek[day] | slice:0:dayLength }}
    </ng-template>
    `
})
export class DayHeaderCellComponent {
    @Input() day: number;
    @Input() dayLabels: string[];
    @Input() dayLength = 3;
    daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
}
