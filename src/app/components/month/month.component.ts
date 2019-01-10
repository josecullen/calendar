import { Component, Input } from "@angular/core";
import { ICalendarSelection } from '../../lib/calendar-view/selection/calendar-selection.interface';
import { CalendarMonthView } from '../../lib/calendar-view/selection/strategy/selection-strategy.interface';
import { Calendar } from '../../lib/calendar/calendar';
import { CellStyleClasses } from '../../lib/calendar-view/cell-style-classes.class';
import { CalendarViewConfig } from '../../lib/calendar-view/config/calendar-view-config.class';
import { CellData } from '../../cell-data';


@Component({
    selector: 'calendar-month-view',
    templateUrl: './month.component.html',
    styleUrls: ['./month.component.scss']
})
export class CalendarMonthViewComponent {
    @Input() calendar: Calendar
    @Input() selection: ICalendarSelection
    @Input() monthSelection: CalendarMonthView
    @Input() getTemplate: Function
    @Input() config: CalendarViewConfig
    @Input() cellStyleClasses: CellStyleClasses = new CellStyleClasses()


    getCellData(day: CellData) {
        return {
            date: day,
            selection: this.selection,
            monthSelection: this.monthSelection,
            hideDaysOutsideMonth: this.calendar.config.month.hideDaysOutsideMonth,
            cellStyleClasses: this.cellStyleClasses
        }
    }
}