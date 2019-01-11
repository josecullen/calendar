import { Component, Output, Input, EventEmitter } from "@angular/core";



@Component({
    selector: 'header-buttons',
    template: `
    <ng-container *ngIf="type === 'back'">
        <span (click)="yearClick.emit()">
            <i class="arrow left"></i>
            <i class="arrow left"></i>
        </span>

        <span (click)="monthClick.emit()">
            <i class="arrow left"></i>
        </span>
    </ng-container>

    <ng-container *ngIf="type === 'forward'">
        <span (click)="monthClick.emit()">
            <i class="arrow right"></i>
        </span>

        <span (click)="yearClick.emit()">
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
    @Output() yearClick = new EventEmitter()
    @Output() monthClick = new EventEmitter()
}