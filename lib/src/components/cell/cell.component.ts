import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { getMonth,  parse, compareDesc, format } from 'date-fns';
import { CellContext } from '../../context/cell-context';
import { ICalendarSelection } from '../../lib/calendar-view/selection/calendar-selection.interface';

@Component({
    selector : 'trb-calendar-cell',
    templateUrl: './cell.component.html'
})
export class CalendarCellComponent implements OnInit {
    @Input() context: CellContext<any>;
    dateStatus: any;
    styles: any = {};

    @HostBinding('class')
    get classes() {
        return Object.keys(this.styles).filter(key => this.styles[key]).join(' ');
    }

    get selection(): ICalendarSelection {
        return this.context.selection;
    }

    ngOnInit() {
        if (this.context) {
            const today = new Date();
            const isToday = this.context.date === format(new Date(), 'YYYY-MM-DD');

            this.dateStatus = {
                'selected': this.isSelected(),
                'from': this.selection.from() === this.context.date,
                'to' : this.selection.to() === this.context.date,
                'in-range': this.isInRange() || this.isSelected(),
                'past' : compareDesc(parse(this.context.date), today) > 0 && !isToday,
                'outside-month' : getMonth(this.context.date) !== this.context.monthSelection.month,
                'today' : isToday,
                'has-payload' : this.context.payload !== undefined,
                'host' : true,
                'selection-simple' : this.context.selection.name === 'simple',
                'selection-range' : this.context.selection.name === 'range',
                'selection-pick' : this.context.selection.name === 'pick',
                'disabled' : this.context.disabled || this.context.filterDates(parse(this.context.date)),
            };

            const prefix = this.context.stylePrefix;

            this.styles[`${prefix}-calendar-cell`] = true;

            Object.keys(this.dateStatus).forEach(key => {
                this.styles[`${prefix}-calendar-cell-${key}`] = this.dateStatus[key];
            });
        }

    }

    isSelected(): boolean {
        return this.selection.isSelected(this.context.date);
    }

    isInRange(): boolean {
        return this.selection.isInRange(this.context.date);
    }

    onClick() {
        if (!this.context.disabled) {
            this.selection.change(this.context.date);
        }
    }
}

