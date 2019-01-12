import { Component, Input, ContentChild, OnChanges, SimpleChanges, Output, EventEmitter, HostBinding, ViewEncapsulation } from "@angular/core";
import { Calendar } from '../../lib/calendar/calendar';
import { IDay } from '../../lib/calendar/day/day.interface';
import { CalendarViewFactory } from '../../calendar-view.factory';
import { CalendarSelection } from '../../lib/calendar-view/selection/calendar-selection.class';
import { SingleSelectionStrategy } from '../../lib/calendar-view/selection/strategy/simple-selection.strategy';
import { RangeSelectionStrategy } from '../../lib/calendar-view/selection/strategy/range-selection.strategy';
import { PickSelectionStrategy } from '../../lib/calendar-view/selection/strategy/pick-selection.strategy';
import { CalendarViewConfig } from '../../lib/calendar-view/config/calendar-view-config.class';
import { CellData } from 'src/app/cell-data';
import { CalendarMonthDirective } from 'src/app/directives/calendar-month.directive';
import { MonthContext } from 'src/app/context/month-context';

@Component({
    selector: 'calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['../styles.sass','./calendar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnChanges {
    selection: CalendarSelection = new CalendarSelection()
    @Input() dates: CellData<any>[] = []
    @Input() config: CalendarViewConfig

    @Output() selectionChange: EventEmitter<CalendarSelection> = this.selection.selectionChange

    @ContentChild(CalendarMonthDirective)
    calendarMonth: CalendarMonthDirective

    calendar: Calendar

    @HostBinding('class')
    get classes() {
        return `${this.config.stylePrefix}-calendar`
    }

    ngOnInit() {
        this.calendar = new Calendar(new CalendarViewFactory(), this.config)

        this.updateSelection()
    }

    ngOnChanges(changes: SimpleChanges) {
        let configChange = changes['config']


        if (this.calendar) {
            // let change = changes['dates']

            // if (change) {

            // setTimeout(() => {
            // this.calendar.setDaysPayload(this.dates)
            // })
            this.calendar.recalculate()
            this.dates.forEach(day => {
                this.calendar.setDay(day.date, new CellData(day.date, day.payload, false))
            })
            // }

            if (configChange) {
                console.log('configChange', configChange, configChange.previousValue.selection, configChange.currentValue.selection)
                this.calendar.config = this.config

                this.updateSelection()
            }
        }


    }

    updateSelection() {
        switch ((this.config as CalendarViewConfig).selection) {
            case 'simple':
                this.singleSelection()
                break
            case 'range':
                this.rangeSelection()
                break
            case 'picked':
                this.pickSelection()
                break
        }

        this.calendar.recalculate()
        this.dates.forEach(day => {
            this.calendar.setDay(day.date, new CellData(day.date, day.payload, false))
        })
    }

    cellClicked(data: CellData<any>) {
        data.selected = !data.selected
    }

    getPayload(date: IDay): any {
        let cellData = this.dates.find(d => d.date === date.date)
        return cellData ? cellData.payload : undefined
    }

    dateIncluded(date: string): boolean {
        return this.dates.some(d => d.date === date)
    }

    singleSelection() {
        this.selection.setStrategy(new SingleSelectionStrategy())
    }

    rangeSelection() {
        this.selection.setStrategy(new RangeSelectionStrategy())
    }

    pickSelection() {
        this.selection.setStrategy(new PickSelectionStrategy())
    }


    getMonthContext(monthIndex: number): MonthContext {
        return {
            index: monthIndex,
            calendar: this.calendar,
            selection: this.selection,
            config: this.config,
            monthSelection: monthIndex === 0 ? this.selection.calendarMonthView.from : this.selection.calendarMonthView.to
        } as MonthContext
    }

}


