import { Component, Input, AfterContentInit, ContentChild, OnChanges, SimpleChanges, TemplateRef, Output, EventEmitter } from "@angular/core";
import { Calendar } from './lib/calendar/calendar';
import { CalendarCellDirective } from './directives/calendar-cell';
import { CellDataPayload } from './app.component';
import { IDay } from './lib/calendar/day/day.interface';
import { Day } from './lib/calendar/day/day.class';
import { parse, isWeekend } from 'date-fns';
import { CalendarViewFactory } from './calendar-view.factory';
import { CalendarSelection } from './lib/calendar-view/selection/calendar-selection.class';
import { SingleSelectionStrategy } from './lib/calendar-view/selection/strategy/simple-selection.strategy';
import { RangeSelectionStrategy } from './lib/calendar-view/selection/strategy/range-selection.strategy';
import { PickSelectionStrategy } from './lib/calendar-view/selection/strategy/pick-selection.strategy';
import { CellStyleClasses } from './lib/calendar-view/cell-style-classes.class';
import { CalendarConfig } from './lib/calendar/config/calendar-config.class';
import { CalendarViewConfig } from './lib/calendar-view/config/calendar-view-config.class';


@Component({
    selector: 'calendar',
    template: `
    <calendar-header 
        [linkedMonths]="config.header.linkedMonths" 
        [monthSelections]="[ selection.calendarMonthView.from, selection.calendarMonthView.to ]"
        [showTwoMonths]="selection.calendarMonthView.needTwoMonthView && calendar.config.month.showTwoCalendarIfNeed">
    </calendar-header>

    <div class="calendar">

        <calendar-month-view 
            [calendar]="calendar"
            [selection]="selection"
            [config]="config"
            [monthSelection]="selection.calendarMonthView.from"
            [cellStyleClasses]="cellStyleClasses"
            [getTemplate]="getTemplate.bind(this)">
        </calendar-month-view>

        <calendar-month-view 
            *ngIf="selection.calendarMonthView.needTwoMonthView && calendar.config.month.showTwoCalendarIfNeed"
            [calendar]="calendar"
            [config]="config"
            [selection]="selection"
            [cellStyleClasses]="cellStyleClasses"
            [monthSelection]="selection.calendarMonthView.to"
            [getTemplate]="getTemplate.bind(this)">
        </calendar-month-view>
    </div>

`,
    styles: [`
:host {
    display: flex;
    flex-direction: column;
}

.calendar {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
`]
})
export class CalendarComponent implements OnChanges {
    selection: CalendarSelection = new CalendarSelection()

    @Input() dates: CellDataPayload[]
    @Output() selectionChange: EventEmitter<CalendarSelection> = this.selection.selectionChange

    @ContentChild(CalendarCellDirective)
    calendarCell: CalendarCellDirective

    @Input() config: CalendarConfig// = new CalendarConfig()
    @Input() cellStyleClasses: CellStyleClasses = new CellStyleClasses()

    calendar: Calendar

    ngOnInit() {
        this.calendar = new Calendar(new CalendarViewFactory(), this.config)

        this.updateSelection()

    }

    getTemplate(): TemplateRef<any> {
        return this.calendarCell.template
    }

    ngOnChanges(changes: SimpleChanges) {
        let configChange = changes['config']


        if (this.calendar) {
            let change = changes['dates']

            if (change) {
                this.dates.forEach(day => {
                    this.calendar.setDay(day.date, new CellData(day.date, day.payload, false))
                })
            }
        }

        if (configChange && this.calendar) {
            console.log('configChange', configChange, configChange.previousValue.selection, configChange.currentValue.selection)
            this.calendar.config = this.config

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
            setTimeout(() => { })


        }
    }

    updateSelection(){
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
    }

    cellClicked(data: CellData) {
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


}


export class DayAdapter implements IDay {
    private _day: Day

    constructor(private _date: string) {
        this._day = new Day(parse(_date))
    }

    get date(): string {
        return this._day.date
    }

    get dayOfMonth(): number {
        return this._day.dayOfMonth
    }

    get dayOfWeek(): number {
        return this._day.dayOfWeek
    }

    get name(): string {
        return this._day.name
    }

    get isWeekend(): boolean {
        return isWeekend(this._date)
    }

}


export class CellData extends DayAdapter implements IDay {

    constructor(
        date: string,
        public payload: any,
        public selected: boolean,
    ) {
        super(date)
    }
}