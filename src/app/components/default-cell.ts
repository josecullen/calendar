import { Component, Input, OnInit } from "@angular/core";
import { CellData } from '../calendar.component';
import { CalendarSelection } from '../lib/calendar-view/selection/calendar-selection.class';
import { CalendarMonthView } from '../lib/calendar-view/selection/strategy/selection-strategy.interface';
import { getMonth, compareAsc, parse, compareDesc, format } from 'date-fns';

// [class.selected]="cellData.payload.selected"
// {'selected': isSelected(), 'in-range': isInRange() }
// *ngIf="!dateStatus['outside-month']"
@Component({
    selector : 'default-cell',
    template: `
    
    <div *ngIf="cellData else cellWithoutData"
        [ngClass]="dateStatus"
        class="day" (click)="onClick()">
        <ng-container *ngIf="!cellData.hideDaysOutsideMonth || !dateStatus['outside-month']">
            <div class="overlay"></div>
            <p class="date-label">
                <span [ngClass]="dateStatus">{{ cellData.date.dayOfMonth }}</span>
            </p>
            <ng-content></ng-content>    
        </ng-container>
    </div>

    <ng-template #cellWithoutData>
        <div [ngClass]="dateStatus" class="day">
            <div class="overlay"></div>
            <ng-content></ng-content>    
        </div>
    </ng-template>
        
    
    `,
    styles: [`
    :host {
        flex: 1 1 auto
        position: relative;
    }

    .overlay {
        background: #666;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        opacity: .1;
    }

    .date-label {
        margin: 0;
    }

    .date-label .today {
        border-radius: 50%;
        border: 1px solid #39f;
        padding: 2px;
        width: 24px;
        height: 24px;
        line-height: 24px;
        display: inline-block;
    }

    .day {
        min-width:50px; 
        min-height:100px; 
        padding: 4px;
        position: relative;
        color: #333;
        box-sizing: border-box;
        text-align: center;
        font-size: sans-serif;
    }

    .selected {
        background: #999;
    }

    .in-range {
        background: #ccc;
    }

    .past {
        background: #eee;
    }

    .outside-month {
        background: transparent;
        border: none;
    }

    .overlay:hover {
        opacity: .2;
    }
    `]
})
export class DefaultCellComponent implements OnInit {
    @Input() cellData:CellViewData;
    dateStatus:any


    get selection():CalendarSelection {
        return this.cellData.selection
    }

    ngOnInit(){
        if(this.cellData){
            const today = new Date()
            const isToday = this.cellData.date.date === format(new Date(), 'YYYY-MM-DD')
    
            if(isToday){
                console.log(this.cellData.date.date, format(new Date(), 'YYYY-MM-DD'))
            }
            this.dateStatus = {
                'selected': this.isSelected(),
                'in-range': this.isInRange(),
                'past' : compareDesc(parse(this.cellData.date.date), today) > 0 && !isToday,
                'outside-month' : getMonth(this.cellData.date.date) !== this.cellData.monthSelection.month,
                'today' : isToday
            }
        }
        

        // console.log(this.cellData.date.date, format(this.cellData.monthSelection.date, 'YYYY-MM-DD'), this.dateStatus)
    }

    isSelected():boolean {
        return this.selection.isSelected(this.cellData.date.date)
    }

    isInRange():boolean {
        return this.selection.isInRange(this.cellData.date.date)
    }

    onClick(){
        this.selection.change(this.cellData.date.date)
    }
}

export class CellViewData {
    date:CellData
    click:Function
    selection:CalendarSelection
    monthSelection:CalendarMonthView
    hideDaysOutsideMonth:boolean
}