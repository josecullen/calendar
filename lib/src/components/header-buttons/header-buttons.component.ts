import { Component, Output, Input, EventEmitter } from "@angular/core";



@Component({
    selector: 'trb-calendar-header-buttons',
    templateUrl: './header-buttons.component.html',
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