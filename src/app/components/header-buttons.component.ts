import { Component, Output, Input, EventEmitter } from "@angular/core";



@Component({
    selector: 'header-buttons',
    template: `
    <div class="month-selection-buttons" *ngIf="type === 'back'">
        <span (click)="yearClick.emit()">
            <i class="arrow left"></i>
            <i class="arrow left"></i>
        </span>

        <span (click)="monthClick.emit()">
            <i class="arrow left"></i>
        </span>
    </div>

    <div class="month-selection-buttons" *ngIf="type === 'forward'">
        <span (click)="monthClick.emit()">
            <i class="arrow right"></i>
        </span>

        <span (click)="yearClick.emit()">
            <i class="arrow right"></i>
            <i class="arrow right"></i>
        </span>
    </div>
    `,
    styles: [`
    .month-selection-buttons span {
        cursor: pointer;
        padding: 0 8px;
    }
    `]

})
export class CalendarHeaderButtonsComponent {
    @Input() type:'back' | 'forward'
    @Output() yearClick = new EventEmitter()
    @Output() monthClick = new EventEmitter()
}