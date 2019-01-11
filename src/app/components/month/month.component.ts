import { Component, Input, ContentChild, OnChanges, SimpleChanges } from "@angular/core";
import { ICalendarSelection } from '../../lib/calendar-view/selection/calendar-selection.interface';
import { CalendarMonthView } from '../../lib/calendar-view/selection/strategy/selection-strategy.interface';
import { Calendar } from '../../lib/calendar/calendar';
import { CellStyleClasses } from '../../lib/calendar-view/cell-style-classes.class';
import { CalendarViewConfig } from '../../lib/calendar-view/config/calendar-view-config.class';
import { CellData } from '../../cell-data';
import { CalendarCellDirective } from 'src/app/directives/calendar-cell';
import { CalendarHeaderDirective } from 'src/app/directives/calendar-header.directive';


@Component({
    selector: 'calendar-month-view',
    templateUrl: './month.component.html',
    styleUrls: ['./month.component.scss']
})
export class CalendarMonthViewComponent implements OnChanges {
    @Input() context: any
    @Input() calendar: Calendar
    @Input() index: number
    @Input() selection: ICalendarSelection
    @Input() monthSelection: CalendarMonthView
    @Input() config: CalendarViewConfig
    @Input() cellStyleClasses: CellStyleClasses = new CellStyleClasses()

    @ContentChild(CalendarCellDirective)
    calendarCell: CalendarCellDirective

    @ContentChild(CalendarHeaderDirective)
    calendarHeader: CalendarHeaderDirective

    getCellData(day: CellData) {
        return {
            date: day,
            selection: this.selection,
            monthSelection: this.monthSelection,
            hideDaysOutsideMonth: this.calendar.config.month.hideDaysOutsideMonth,
            cellStyleClasses: this.cellStyleClasses
        }
    }

    getHeaderData(){
        return {
            $implicit: {
                monthIndex: this.index,
                showTwoMonths: this.selection['calendarMonthView'].needTwoMonthView && this.calendar.config.month['showTwoCalendarIfNeed'],
                linkedMonths: this.config.header.linkedMonths,
                monthSelections: [this.selection.calendarMonthView.from, this.selection.calendarMonthView.to]
            }
        }
    }

    ngOnChanges(changes:SimpleChanges){
        let contextChange = changes['context']

        if(contextChange){
            this.calendar = this.context.calendar
            this.index = this.context.index
            this.selection = this.context.selection
            this.monthSelection = this.context.monthSelection
            this.config = this.context.config
            this.cellStyleClasses = this.context.cellStyleClasses
        }

    }

}

// [monthIndex]="index"
// [showTwoMonths]="selection.calendarMonthView.needTwoMonthView && calendar.config.month.showTwoCalendarIfNeed"
// [linkedMonths]="config?.header.linkedMonths"
// [monthSelections]="[monthSelection]"