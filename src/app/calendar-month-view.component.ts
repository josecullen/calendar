import { Component, Input } from "@angular/core";
import { ICalendarSelection } from './lib/calendar-view/selection/calendar-selection.interface';
import { CalendarMonthView } from './lib/calendar-view/selection/strategy/selection-strategy.interface';
import { Calendar } from './lib/calendar/calendar';

@Component({
    selector: 'calendar-month-view',
    template: `
    
<div class="container">
    <div class="month-selection">
        <div class="month-selection-buttons">
            <span (click)="monthSelection.minusYear()">
                <i class="arrow left"></i>
                <i class="arrow left"></i>
            </span>

            <span (click)="monthSelection.minusMonth()">
                <i class="arrow left"></i>
            </span>
        </div>

        {{ monthSelection.label }}

        <div class="month-selection-buttons">
            <span (click)="monthSelection.addMonth()">
                <i class="arrow right"></i>
            </span>

            <span (click)="monthSelection.addYear()">
                <i class="arrow right"></i>
                <i class="arrow right"></i>
            </span>
        </div>
    </div>
    
    

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
                    *ngTemplateOutlet="getTemplate(); context: { $implicit: { date: day, selection: selection, monthSelection: monthSelection, hideDaysOutsideMonth: calendar.config.hideDaysOutsideMonth }}">
                </ng-container>

            </ng-container>
        </div>
    </ng-container>
</div>
    `,
    styles: [`
:host {
    display: flex;
    margin : 16px;
    border : 1px solid #ccc;
    flex: 1 1 auto;
}

.container {
    flex: 1 1 auto;
}



.month-selection {
    display: flex;
    justify-content: space-between;
    padding: 8px 30px;
}

.month-selection-buttons span {
    cursor: pointer;
    padding: 0 8px;
}
    `]
})
export class CalendarMonthViewComponent {
    @Input() calendar:Calendar
    @Input() selection:ICalendarSelection
    @Input() monthSelection:CalendarMonthView
    @Input() getTemplate:Function

    constructor(){
        
    }
}