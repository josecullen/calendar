import { Component, Input, OnInit } from '@angular/core';
import { CalendarSelection } from './lib/calendar-view/selection/calendar-selection.class';
import { mock } from './mock';

import { CellStyleClasses } from './lib/calendar-view/cell-style-classes.class';
import { CalendarViewConfig } from './lib/calendar-view/config/calendar-view-config.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  selectionOptions= ['simple', 'picked', 'range']
  selection:CalendarSelection
  @Input() dates: CellDataPayload[] = mock
  config = CalendarViewConfig.from({
    month: {
      hideDaysOutsideMonth: true,
      showTwoCalendarIfNeed: true
    },
    selection: 'range'
  })
  cellStyleClasses:CellStyleClasses = new CellStyleClasses()

  onSelectionChange(selection:CalendarSelection){
    console.log('selection change', selection.from(), selection.to())
    this.selection = selection
  }

  applyChanges(){
    this.config = CalendarViewConfig.from(this.config)
  }

  ngOnInit(){
    this.cellStyleClasses.prefix = 'alm'
    // this.cellStyleClasses.cell.selected = 'alm-selected'
    // this.cellStyleClasses.cell['in-range'] = 'alm-in-range'
    // this.cellStyleClasses.number['in-range'] = 'alm-in-range-number'
    // this.cellStyleClasses.number.today = 'alm-today'
    // this.cellStyleClasses.cell.today = 'alm-today'
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
