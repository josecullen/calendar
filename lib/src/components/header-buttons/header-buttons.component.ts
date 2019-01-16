import { Component, Output, Input, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';



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
export class CalendarHeaderButtonsComponent implements OnChanges {
    @Input() type: 'back' | 'forward';
    @Input() showChangeYearButton = true;
    @Input() showChangeMonthButton = true;
    @Input() stylePrefix: string;
    @Output() yearClick = new EventEmitter();
    @Output() monthClick = new EventEmitter();

    leftArrowClasses = '';
    rightArrowClasses = '';

    ngOnChanges(changes: SimpleChanges): void {
      const styleChange = changes['stylePrefix'];

      if (styleChange) {
        this.leftArrowClasses = `${this.stylePrefix}-calendar-arrow ${this.stylePrefix}-calendar-arrow-left`;
        this.rightArrowClasses = `${this.stylePrefix}-calendar-arrow ${this.stylePrefix}-calendar-arrow-right`;
      }
    }


}
