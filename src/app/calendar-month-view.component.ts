import { Component, Input } from "@angular/core";
import { ICalendarSelection } from './lib/calendar-view/selection/calendar-selection.interface';
import { CalendarMonthView } from './lib/calendar-view/selection/strategy/selection-strategy.interface';
import { Calendar } from './lib/calendar/calendar';
import { CellStyleClasses } from './lib/calendar-view/cell-style-classes.class';
import { CalendarViewConfig } from './lib/calendar-view/config/calendar-view-config.class';
import { CellData } from './calendar.component';
import { format, compareDesc, parse, getMonth } from 'date-fns';

@Component({
    selector: 'calendar-month-view',
    template: `
    
<div class="container">
<!--
    <calendar-header 
        *ngIf="!config?.header.linkedMonths" 
        [monthSelections]="[monthSelection]">
    </calendar-header>
-->
    <ng-container *ngIf="calendar.getYear(monthSelection.year).months[monthSelection.month].getCalendarView() as calendarView">
        <div class="row">
            <day-header-cell
                *ngFor="let day of [0,1,2,3,4,5,6]"
                [day]="day">
            </day-header-cell>
        </div>
    
        <div class="row" style="display:flex;" *ngFor="let week of calendarView; index as i">

            <ng-container *ngFor="let day of week">
                
                <ng-container 
                    *ngTemplateOutlet="getTemplate(); context: { $implicit: getCellData(day) }">
                </ng-container>

            </ng-container>
        </div>
    </ng-container>
</div>

    `,
    styles: [`
/**
:host {
    display: flex;
    margin: 8px;
    flex: 1 1 auto;
}

.container {
    flex: 1 1 auto;
}
 */


    `]
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

    getStyles(cellData:CellData) {
        const today = new Date()
        const isToday = cellData.date === format(new Date(), 'YYYY-MM-DD')

        let dateStatus = {
            'selected': this.selection.isSelected(cellData.date),
            'from': this.selection.from() === cellData.date,
            'to': this.selection.to() === cellData.date,
            'in-range': this.selection.isInRange(cellData.date) || this.selection.isSelected(cellData.date),
            'past': compareDesc(parse(cellData.date), today) > 0 && !isToday,
            'outside-month': getMonth(cellData.date) !== this.monthSelection.month,
            'today': isToday,
            'host': true
        }

        // const prefix = this.cellStyleClasses.prefix
        // this.styleClassesStatus.host = `${prefix}-${this.cellData.cellStyleClasses.host}`
        // Object.keys(this.cellData.cellStyleClasses.cell).forEach(key => {
        //     this.styleClassesStatus.cell[`${prefix}-cell-${this.cellData.cellStyleClasses.cell[key]}`] = this.dateStatus[key]
        //     this.styleClassesStatus.number[`${prefix}-number-${this.cellData.cellStyleClasses.cell[key]}`] = this.dateStatus[key]
        //     this.styleClassesStatus.overlay[`${prefix}-overlay-${this.cellData.cellStyleClasses.cell[key]}`] = this.dateStatus[key]
        // })
    }

    constructor() {

    }
}