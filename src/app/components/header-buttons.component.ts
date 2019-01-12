import { Component, Output, Input, EventEmitter } from "@angular/core";



@Component({
    selector: 'header-buttons',
    template: `
    <ng-container *ngIf="type === 'back'">
        <span (click)="yearClick.emit()" *ngIf="showChangeYearButton">
            <i class="arrow left"></i>
            <i class="arrow left"></i>
        </span>

        <span (click)="monthClick.emit()" *ngIf="showChangeMonthButton">
            <i class="arrow left"></i>
        </span>
    </ng-container>

    <ng-container *ngIf="type === 'forward'">
        <span (click)="monthClick.emit()" *ngIf="showChangeMonthButton">
            <i class="arrow right"></i>
        </span>

        <span (click)="yearClick.emit()" *ngIf="showChangeYearButton">
            <i class="arrow right"></i>
            <i class="arrow right"></i>
        </span>
    </ng-container>
    `,
    styles: [`
    :host span {
        cursor: pointer;
        padding: 0 6px;
    }
    `]

})
export class CalendarHeaderButtonsComponent {
    @Input() type:'back' | 'forward'
    @Input() showChangeYearButton:boolean = true
    @Input() showChangeMonthButton:boolean = true
    @Output() yearClick = new EventEmitter()
    @Output() monthClick = new EventEmitter()
}