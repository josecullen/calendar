import { Component, Input, OnInit } from '@angular/core';
import { CalendarSelection } from './lib/calendar-view/selection/calendar-selection.class';
import { mock } from './mock';

import { CellStyleClasses } from './lib/calendar-view/cell-style-classes.class';
import { CalendarViewConfig } from './lib/calendar-view/config/calendar-view-config.class';
// import { getMonth, getDaysInMonth, getDay, getYear, getDayOfYear, getDaysInYear, getDate } from 'date-fns'
// import { Calendar, Day, Year } from './lib/calendar';
// import { MonthPayloadable } from './lib/calendar-payloadable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  selection:CalendarSelection
  @Input() dates: CellDataPayload[] = mock
  config = new CalendarViewConfig()
  cellStyleClasses:CellStyleClasses = new CellStyleClasses()

  onSelectionChange(selection:CalendarSelection){
    console.log('selection change', selection.from(), selection.to())
    this.selection = selection
  }

  ngOnInit(){
    // this.cellStyleClasses.cell.selected = 'alm-selected'
    // this.cellStyleClasses.cell['in-range'] = 'alm-in-range'
    // this.cellStyleClasses.number['in-range'] = 'alm-in-range-number'
    // this.cellStyleClasses.number.today = 'alm-today'
    // this.cellStyleClasses.cell.today = 'alm-today'
  }

  onFirstDayChange(value:number) {
    this.config.month.firstDay = Number(value)
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
