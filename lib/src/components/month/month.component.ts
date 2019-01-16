import { Component, Input, ContentChild, OnChanges, SimpleChanges, HostBinding, OnInit } from '@angular/core';
import { ICalendarSelection } from '../../lib/calendar-view/selection/calendar-selection.interface';
import { Calendar } from '../../lib/calendar/calendar';
import { CalendarViewConfig } from '../../lib/calendar-view/config/calendar-view-config.class';
import { CellContext } from '../../context/cell-context';
import { HeaderContext } from '../../context/header-context';
import { MonthContext } from '../../context/month-context';
import { MonthSelection } from '../../lib/calendar-view/calendar-month-selection.class';
import { CalendarCellDirective } from '../../directives/calendar-cell';
import { CalendarHeaderDirective } from '../../directives/calendar-header.directive';
import { CellData } from '../../cell-data';


@Component({
    selector: 'trb-calendar-month',
    templateUrl: './month.component.html',
    styleUrls: ['../styles.sass', './month.component.scss']
})
export class CalendarMonthComponent implements OnChanges {

    @HostBinding('class')
    get classes() {
        return `${this.config.stylePrefix}-calendar-month`;
    }
    @Input() context: MonthContext;
    @Input() calendar: Calendar;
    @Input() index: number;
    @Input() selection: ICalendarSelection;
    @Input() monthSelection: MonthSelection;
    @Input() config: CalendarViewConfig;

    dayLabelsRowClass: any;
    rowClass: any;

    @ContentChild(CalendarCellDirective)
    calendarCell: CalendarCellDirective;

    @ContentChild(CalendarHeaderDirective)
    calendarHeader: CalendarHeaderDirective;

    getCellData(day: CellData<any>): CellContext<any> {
        return CellContext.from(day, {
            selection: this.selection,
            monthSelection: this.monthSelection,
            hideDaysOutsideMonth: this.calendar.config.month.hideDaysOutsideMonth,
            stylePrefix: this.config.stylePrefix
        });
    }

    getHeaderData(): HeaderContext {
        return {
            monthLabels: this.config.month.monthLabels,
            monthIndex: this.index,
            pastMonths: this.config.header.pastMonths,
            showTwoMonths: this.selection['calendarMonthView'].needTwoMonthView && this.calendar.config.month['showTwoCalendarIfNeed'],
            linkedMonths: this.config.header.linkedMonths,
            monthSelections: [this.selection.calendarMonthView.from, this.selection.calendarMonthView.to],
            stylePrefix: this.config.stylePrefix,
            showChangeMonthButton: this.config.month.showChangeMonthButton,
            showChangeYearButton: this.config.month.showChangeYearButton
        } as HeaderContext;
    }

    ngOnChanges(changes: SimpleChanges) {
        const contextChange = changes['context'];

        if (contextChange) {
            this.calendar = this.context.calendar;
            this.index = this.context.index;
            this.selection = this.context.selection;
            this.monthSelection = this.context.monthSelection;
            this.config = this.context.config;
        }

        this.dayLabelsRowClass = {};
        this.rowClass = {};

        this.dayLabelsRowClass[`${this.config.stylePrefix}-calendar-row`] = true;
        this.dayLabelsRowClass[`${this.config.stylePrefix}-calendar-day-labels`] = true;
        this.rowClass[`${this.config.stylePrefix}-calendar-row`] = true;
    }

}

// [monthIndex]="index"
// [showTwoMonths]="selection.calendarMonthView.needTwoMonthView && calendar.config.month.showTwoCalendarIfNeed"
// [linkedMonths]="config?.header.linkedMonths"
// [monthSelections]="[monthSelection]"
