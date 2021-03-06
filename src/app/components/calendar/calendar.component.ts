import { Component, Input, ContentChild, OnChanges, SimpleChanges, Output, EventEmitter, HostBinding, ViewEncapsulation, DoCheck, OnInit, TemplateRef } from "@angular/core";
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
    selector: 'trb-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['../styles.sass','./calendar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnChanges, DoCheck, OnInit {
    selection: CalendarSelection = new CalendarSelection()
    @Input() dates: CellData<any>[] = []
    @Input() config: CalendarViewConfig = new CalendarViewConfig()

    @Output() selectionChange: EventEmitter<CalendarSelection> = this.selection.selectionChange
    @Output() monthSelectionChange: EventEmitter<{ previous: Date, current: Date }> = this.selection.monthSelectionChange

    @Input() monthTemplate:any

    @ContentChild(CalendarMonthDirective, { read: TemplateRef})
    calendarMonth: CalendarMonthDirective

    calendar: Calendar

    @HostBinding('class')
    get classes() {
        return `${this.config.stylePrefix}-calendar`
    }

    ngDoCheck(){
        // console.log('calendar do check')
    }

    ngOnInit() {
        // console.log('calendar init')
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
                this.calendar.setDay(day.date, new CellData(day.date, day.payload, day.selected, day.disabled))
            })

            // }

            if (configChange) {
                
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
            this.calendar.setDay(day.date, new CellData(day.date, day.payload, day.selected, day.disabled))
        })

        // console.log(this.calendar.getYear(2019).getMonth(0).days.map(day => day.disabled))
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


