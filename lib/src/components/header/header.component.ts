import { Component, Input, OnChanges, SimpleChanges, HostBinding } from '@angular/core';
import { HeaderContext } from '../../context/header-context';
import { getMonth, getYear } from 'date-fns';
import { MonthSelection } from '../../lib/calendar-view/calendar-month-selection.class';


@Component({
  selector: 'trb-calendar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class CalendarHeaderComponent implements OnChanges {
  @Input() context: HeaderContext;
  @Input() monthSelections: MonthSelection[] = [];
  @Input() showTwoMonths = false;
  @Input() monthIndex = 0;
  @Input() linkedMonths = true;
  @Input() monthLabels: string[];

  @HostBinding('class')
  get classes() {
    return `${this.context.stylePrefix}-calendar-header`;
  }

  get buttonClasses() {
    return `${this.classes}-buttons`;
  }

  showPastMonth(): boolean {
    return this.context.pastMonths || !this.isCurrentMonth();
  }

  isCurrentMonth(): boolean {
    const today = new Date();
    return getMonth(today) === this.context.monthSelections[this.context.monthIndex].month
      && getYear(today) === this.context.monthSelections[this.context.monthIndex].year;
  }

  minusYear(index: number) {
    if (this.linkedMonths) {
      this.monthSelections.forEach(monthSelection => monthSelection.minusYear());
    } else {
      this.monthSelections[index].minusYear();
    }
  }

  minusMonth(index: number) {
    if (this.linkedMonths) {

      this.monthSelections.forEach(monthSelection => monthSelection.minusMonth());
    } else {
      this.monthSelections[index].minusMonth();
    }
  }

  addYear(index: number) {
    if (this.linkedMonths) {
      this.monthSelections.forEach(monthSelection => monthSelection.addYear());
    } else {
      this.monthSelections[index].addYear();
    }
  }

  addMonth(index: number) {
    if (this.linkedMonths) {
      this.monthSelections.forEach(monthSelection => monthSelection.addMonth());
    } else {
      this.monthSelections[index].addMonth();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const contextChange = changes['context'];

    if (contextChange) {
      const context = this.context;
      this.linkedMonths = context.linkedMonths;
      this.monthIndex = context.monthIndex;
      this.monthSelections = context.monthSelections;
      this.showTwoMonths = context.showTwoMonths;
      this.monthLabels = context.monthLabels;
    }
  }
}
