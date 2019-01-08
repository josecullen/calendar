import { Component, Input, OnInit } from '@angular/core';
import { CalendarSelection } from './lib/calendar-view/selection/calendar-selection.class';
import { mock } from './mock';
import { MonthViewConfig } from './lib/calendar/config/month-view-config.class';
// import { getMonth, getDaysInMonth, getDay, getYear, getDayOfYear, getDaysInYear, getDate } from 'date-fns'
// import { Calendar, Day, Year } from './lib/calendar';
// import { MonthPayloadable } from './lib/calendar-payloadable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  selection:CalendarSelection
  @Input() dates: CellDataPayload[] = mock
  config = new MonthViewConfig()

  onSelectionChange(selection:CalendarSelection){
    console.log('selection change', selection.from(), selection.to())
    this.selection = selection
    
  }

  onFirstDayChange(value:number) {
    this.config.firstDay = Number(value)
  }

  updatePrice(price:number){
    this.selection.selectedDates.forEach(date => {
      let currentDate = this.dates.find(d => d.date === date)

      if(currentDate){
        currentDate.payload.price = price
      } else {
        this.dates.push({
          date,
          payload: {
            price
          }
        })
      }

    })

    this.dates = this.dates.slice()
  }


}

export class CellDataPayload {
  public date:string
  public payload:any
}
