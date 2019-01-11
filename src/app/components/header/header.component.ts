import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from "@angular/core";
import { CalendarMonthView } from 'src/app/lib/calendar-view/selection/strategy/selection-strategy.interface';


@Component({
    selector: 'calendar-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class CalendarHeaderComponent implements OnChanges {
    @Input() context:any
    @Input() monthSelections:CalendarMonthView[] = []
    @Input() showTwoMonths:boolean = false
    @Input() monthIndex:number = 0
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

    ngOnChanges(changes:SimpleChanges){
        let contextChange = changes['context']
        
        if(contextChange){
            let context = this.context.$implicit
            this.linkedMonths = context.linkedMonths
            this.monthIndex = context.monthIndex
            this.monthSelections = context.monthSelections
            this.showTwoMonths = context.showTwoMonths
            console.log('context change', context, this.monthSelections)
        }
    }
}