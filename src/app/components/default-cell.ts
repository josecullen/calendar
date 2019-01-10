import { Component, Input, OnInit, HostBinding } from "@angular/core";
import { CellData } from '../calendar.component';
import { CalendarSelection } from '../lib/calendar-view/selection/calendar-selection.class';
import { CalendarMonthView } from '../lib/calendar-view/selection/strategy/selection-strategy.interface';
import { getMonth,  parse, compareDesc, format } from 'date-fns';
import { CellStyleClasses } from '../lib/calendar-view/cell-style-classes.class';
import { iif } from 'rxjs';

// <p class="date-label">
//                 <span [ngClass]="styleClassesStatus.number">{{ cellData.date.dayOfMonth }}</span>
//             </p>
@Component({
    selector : 'default-cell',
    template: `
    <!--
    <div *ngIf="cellData else cellWithoutData"
        [ngClass]="styleClassesStatus.cell"
        class="day" (click)="onClick()">

        -->
        <ng-container *ngIf="!cellData.hideDaysOutsideMonth || !dateStatus['outside-month']">
            <div class="overlay" [ngClass]="styleClassesStatus.overlay" (click)="onClick()"></div>
            <span class="label" [ngClass]="styleClassesStatus.number">{{ cellData.date.dayOfMonth }}</span>
            <ng-content></ng-content>    
        </ng-container>
        <!--
    </div>
-->
    <ng-template #cellWithoutData>
        <div [ngClass]="dateStatus" class="day">
            <div class="overlay"></div>
            <ng-content></ng-content>    
        </div>
    </ng-template>
        
    
    `,
    styleUrls: ['./default-cell.scss']
})
export class DefaultCellComponent implements OnInit {
    @Input() cellData:CellViewData;
    dateStatus:any
    styleClassesStatus:any = {
        host: 'default',
        cell : {},
        number : {},
        overlay: {}
    }

    @HostBinding('class') 
    get classes() {
        let classes = this.styleClassesStatus.host + '  ' + Object.keys(this.styleClassesStatus.cell)
            .filter(k => this.styleClassesStatus.cell[k] === true)
            .join(' ')
        // console.log(classes)
        return classes
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
                'from': this.selection.from() === this.cellData.date.date,
                'to' : this.selection.to() === this.cellData.date.date,
                'in-range': this.isInRange() || this.isSelected(),
                'past' : compareDesc(parse(this.cellData.date.date), today) > 0 && !isToday,
                'outside-month' : getMonth(this.cellData.date.date) !== this.cellData.monthSelection.month,
                'today' : isToday,
                'host' : true
            }

            const prefix = this.cellData.cellStyleClasses.prefix
            this.styleClassesStatus.host = `${prefix}-${this.cellData.cellStyleClasses.host}`
            Object.keys(this.cellData.cellStyleClasses.cell).forEach(key => {
                this.styleClassesStatus.cell[`${prefix}-cell-${this.cellData.cellStyleClasses.cell[key]}`] = this.dateStatus[key]
                this.styleClassesStatus.number[`${prefix}-number-${this.cellData.cellStyleClasses.cell[key]}`] = this.dateStatus[key]
                this.styleClassesStatus.overlay[`${prefix}-overlay-${this.cellData.cellStyleClasses.cell[key]}`] = this.dateStatus[key]
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