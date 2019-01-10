import { Component, Input, ContentChild, OnChanges, SimpleChanges, TemplateRef, Output, EventEmitter } from "@angular/core";
import { Calendar } from '../../lib/calendar/calendar';
import { CalendarCellDirective } from '../../directives/calendar-cell';
import { CellDataPayload } from '../../app.component';
import { IDay } from '../../lib/calendar/day/day.interface';
import { CalendarViewFactory } from '../../calendar-view.factory';
import { CalendarSelection } from '../../lib/calendar-view/selection/calendar-selection.class';
import { SingleSelectionStrategy } from '../../lib/calendar-view/selection/strategy/simple-selection.strategy';
import { RangeSelectionStrategy } from '../../lib/calendar-view/selection/strategy/range-selection.strategy';
import { PickSelectionStrategy } from '../../lib/calendar-view/selection/strategy/pick-selection.strategy';
import { CellStyleClasses } from '../../lib/calendar-view/cell-style-classes.class';
import { CalendarConfig } from '../../lib/calendar/config/calendar-config.class';
import { CalendarViewConfig } from '../../lib/calendar-view/config/calendar-view-config.class';
import { CellData } from 'src/app/cell-data';

@Component({
    selector: 'calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
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


