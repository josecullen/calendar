import { Component, Input, OnInit } from '@angular/core';
import { CalendarSelection } from './lib/calendar-view/selection/calendar-selection.class';

import { CalendarViewConfig } from './lib/calendar-view/config/calendar-view-config.class';
import { addMonths, addDays, subDays, format } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  selectionOptions= ['simple', 'picked', 'range']
  selection:CalendarSelection

  @Input() dates: CellDataPayload[] = getRandomDates()//mock

  config = CalendarViewConfig.from({
    month: {
      hideDaysOutsideMonth: true,
      showTwoCalendarIfNeed: true,
      monthLabels : [
        'Enero', 'Febrero', 'Marzo', 'Abril', 
        'Mayo', 'Junio', 'Julio', 'Agosto', 
        'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
      dayLabels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
      dayLength: 1
    },
    selection: 'range',
    stylePrefix: 'alm'
  })



  onSelectionChange(selection:CalendarSelection){
    console.log('selection change', selection.from(), selection.to())
    if(!selection.to()){
      this.dates = getRandomDates()
    }
    this.selection = selection
  }

  applyChanges(){
    this.config = CalendarViewConfig.from(this.config)
  }

  ngOnInit(){
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


function getRandomDates(){
  let values = []
  let randomValues = 30
  let randomMonths = 3
  let randomPrice = { min: 50, max: 900 }

  for(let v = 0; v < randomValues; v++){
    let date = new Date()
    date = addMonths(date, randomInt(randomMonths))
    date = addDays(date, randomInt(30))
    date = subDays(date, randomInt(30))
    values.push({
      date: format(date, 'YYYY-MM-DD'),
      payload : randomInt(randomPrice.max - randomPrice.min) + randomPrice.min
    })
  }

  return values
}

function randomInt(max){
  return Math.floor(Math.random() * max)
}
