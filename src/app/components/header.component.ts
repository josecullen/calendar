import { Component, Input } from "@angular/core";
import { CalendarMonthView } from '../lib/calendar-view/selection/strategy/selection-strategy.interface';


@Component({
    selector: 'calendar-header',
    template: `

<div class="month-selection" *ngIf="!showTwoMonths">
    <div class="month">
        <header-buttons type="back" (monthClick)="minusMonth(0)" (yearClick)="minusYear(0)"></header-buttons>

        <div class="label">
            {{ monthSelections[0].label }}
        </div>

        <header-buttons type="forward" (monthClick)="addMonth(0)" (yearClick)="addYear(0)"></header-buttons>

    </div>
</div>


<div class="month-selection" *ngIf="showTwoMonths">
    <div class="month">
        <header-buttons type="back" (monthClick)="minusMonth(0)" (yearClick)="minusYear(1)"></header-buttons>

        <div class="label">
            {{ monthSelections[0].label }}
        </div>

        <span *ngIf="linkedMonths else forwardButtons">&nbsp;</span>

        <ng-template #forwardButtons>
            <header-buttons 
                type="forward" 
                (monthClick)="addMonth(0)" 
                (yearClick)="addYear(0)">
            </header-buttons>
        </ng-template>

    </div>

    <div class="month">
        <span *ngIf="linkedMonths else backwardButtons">&nbsp;</span>

        <ng-template #backwardButtons>
            <header-buttons 
                type="back" 
                (monthClick)="minusMonth(1)" 
                (yearClick)="minusYear(1)">
            </header-buttons>
        </ng-template>

        <div *ngIf="showTwoMonths" class="label">
            {{ monthSelections[1].label }}
        </div>

        <header-buttons type="forward" (monthClick)="addMonth(1)" (yearClick)="addYear(1)"></header-buttons>

    </div>
</div>    
    `,
    styles: [`
    
.month-selection {
    display: flex;
    justify-content: space-between;
    padding: 8px 0px;
}

.month {
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 0 20px;
}

.label {
    position: absolute;
    left: 50%;
    flex: 0 1 auto;
    transform: translateX(-50%);
}
    `]
})
export class CalendarHeaderComponent {
    @Input() monthSelections:CalendarMonthView[]
    @Input() showTwoMonths:boolean = false
    @Input() linkedMonths:boolean = true

    minusYear(index:number){
        if(this.linkedMonths){
            this.monthSelections.forEach(monthSelection => monthSelection.minusYear())
        } else {
            this.monthSelections[index].minusYear()
        }
    }

    minusMonth(index:number){
        if(this.linkedMonths){
            this.monthSelections.forEach(monthSelection => monthSelection.minusMonth())
        } else {
            this.monthSelections[index].minusMonth()
        }
    }

    addYear(index:number){
        if(this.linkedMonths){
            this.monthSelections.forEach(monthSelection => monthSelection.addYear())
        } else {
            this.monthSelections[index].addYear()
        }
    }

    addMonth(index:number){
        if(this.linkedMonths){
            this.monthSelections.forEach(monthSelection => monthSelection.addMonth())
        } else {
            this.monthSelections[index].addMonth()
        }
    }
}