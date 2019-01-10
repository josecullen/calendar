import { Component, Input } from "@angular/core";
import { CalendarMonthView } from 'src/app/lib/calendar-view/selection/strategy/selection-strategy.interface';


@Component({
    selector: 'calendar-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
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