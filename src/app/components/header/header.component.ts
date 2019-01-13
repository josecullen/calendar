import { Component, Input, OnChanges, SimpleChanges, HostBinding } from "@angular/core";
import { HeaderContext } from '../../context/header-context';
import { MonthSelection } from 'src/app/lib/calendar-view/calendar-month-selection.class';


@Component({
    selector: 'calendar-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class CalendarHeaderComponent implements OnChanges {
    @Input() context:HeaderContext
    @Input() monthSelections:MonthSelection[] = []
    @Input() showTwoMonths:boolean = false
    @Input() monthIndex:number = 0
    @Input() linkedMonths:boolean = true
    @Input() monthLabels:string[]

    @HostBinding('class')
    get classes(){
        return `${this.context.stylePrefix}-calendar-header`
    }

    get buttonClasses(){
        return `${this.classes}-buttons`
    }


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
            let context = this.context
            this.linkedMonths = context.linkedMonths
            this.monthIndex = context.monthIndex
            this.monthSelections = context.monthSelections
            this.showTwoMonths = context.showTwoMonths
            this.monthLabels = context.monthLabels
            // console.log('context change', context, this.monthSelections)
        }
    }
}