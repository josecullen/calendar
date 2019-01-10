import { Component, Input, OnInit, HostBinding } from "@angular/core";
import { CellData } from '../calendar.component';
import { CalendarSelection } from '../lib/calendar-view/selection/calendar-selection.class';
import { CalendarMonthView } from '../lib/calendar-view/selection/strategy/selection-strategy.interface';
import { getMonth,  parse, compareDesc, format } from 'date-fns';
import { CellStyleClasses } from '../lib/calendar-view/cell-style-classes.class';

// [class.selected]="cellData.payload.selected"
// {'selected': isSelected(), 'in-range': isInRange() }
// *ngIf="!dateStatus['outside-month']"
@Component({
    selector : 'default-cell',
    template: `
    
    <div *ngIf="cellData else cellWithoutData"
        [ngClass]="styleClassesStatus.cell"
        class="day" (click)="onClick()">
        <ng-container *ngIf="!cellData.hideDaysOutsideMonth || !dateStatus['outside-month']">
            <div class="overlay"></div>
            <p class="date-label" >
                <span [ngClass]="styleClassesStatus.number">{{ cellData.date.dayOfMonth }}</span>
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
        background: none
        margin: 0;
    }

    .date-label span {
        background: none
    }

    .date-label .cell-default-today {
        border-radius: 50%;
        border: 1px solid #39f;
        padding: 2px;
        width: 24px;
        height: 24px;
        line-height: 24px;
        display: inline-block;
    }

    .day {
        box-sizing: border-box;
        text-align: center;
        font-size: sans-serif;
        position: relative;
    }
    
    .day.cell-default  {
        min-width:50px; 
        min-height:75px; 
        padding: 4px;
        color: #333;
    }

    .cell-default-selected {
        background: #999;
    }

    .cell-default-in-range {
        background: #ccc;
    }

    .cell-default-past {
        background: #eee;
    }

    .cell-default-outside-month {
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
    styleClassesStatus:any = {
        host: 'default',
        cell : {},
        number : {}
    }

    @HostBinding('class') 
    get classes() {
        return this.styleClassesStatus.host
    }

    get selection():CalendarSelection {
        return this.cellData.selection
    }

    ngOnInit(){
        if(this.cellData){
            const today = new Date()
            const isToday = this.cellData.date.date === format(new Date(), 'YYYY-MM-DD')

            this.dateStatus = {
                'selected': this.isSelected(),
                'in-range': this.isInRange(),
                'past' : compareDesc(parse(this.cellData.date.date), today) > 0 && !isToday,
                'outside-month' : getMonth(this.cellData.date.date) !== this.cellData.monthSelection.month,
                'today' : isToday,
                'host' : true
            }

            const prefix = this.cellData.cellStyleClasses.prefix
            this.styleClassesStatus.host = `${prefix}-${this.cellData.cellStyleClasses.host}`
            Object.keys(this.cellData.cellStyleClasses.cell).forEach(key => {
                this.styleClassesStatus.cell[`${prefix}-${this.cellData.cellStyleClasses.cell[key]}`] = this.dateStatus[key]
            })

            Object.keys(this.cellData.cellStyleClasses.number).forEach(key => {
                this.styleClassesStatus.number[`${prefix}-${this.cellData.cellStyleClasses.number[key]}`] = this.dateStatus[key]
            })

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
    cellStyleClasses:CellStyleClasses
    click:Function
    selection:CalendarSelection
    monthSelection:CalendarMonthView
    hideDaysOutsideMonth:boolean
}