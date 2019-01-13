import { Component, Input, OnInit, ElementRef, TemplateRef } from '@angular/core';
import { CalendarSelection } from './lib/calendar-view/selection/calendar-selection.class';

import { CalendarViewConfig } from './lib/calendar-view/config/calendar-view-config.class';
import { addMonths, addDays, subDays, format } from 'date-fns';
import { PickerService } from './modules/picker/picker.service';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DatepickerComponent, DatepickerData } from './components/datepicker/datepicker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  selectionOptions = ['simple', 'picked', 'range']
  selection: CalendarSelection

  @Input() dates: CellDataPayload[] = getRandomDates()//mock

  config = CalendarViewConfig.from({
    month: {
    //   hideDaysOutsideMonth: true,
      showTwoCalendarIfNeed: true,
      monthLabels : [
        'Enero', 'Febrero', 'Marzo', 'Abril', 
        'Mayo', 'Junio', 'Julio', 'Agosto', 
        'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
      dayLabels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
      dayLength: 1,
      showChangeYearButton: false
    },
    selection: 'range',
    // stylePrefix: 'alm'
  })

  datepickerConfig:DatepickerData = {
    calendarConfig: this.config,
    datesSelected: ['2019-02-01', '2019-02-10'],
    dates: getRandomDates()
  }

  constructor(private pickerService: PickerService) {
    console.log('this.datepickerConfig', this.datepickerConfig)
  }

  openPicker(elementRef: ElementRef, calendar:TemplateRef<any>) {
    console.log(calendar)
    // this.pickerService.open({
    //   data: {
    //     datesSelected: ['2019-02-01', '2019-02-10'],
    //     dates: getRandomDates()
    //   } as DatepickerData
    // }, elementRef, DatepickerComponent, calendar)
    //   .subscribe(result => {
    //     console.log(result)
    //   })
  }


  onMonthSelectionChange(a: any) {
    // console.log(a)
  }

  onSelectionChange(selection: CalendarSelection) {
    // console.log('selection change', selection.from(), selection.to(), selection.calendarMonthView.from.label)
    if (!selection.to()) {
      this.dates = getRandomDates()
      // console.log(this.dates)
    }
    this.selection = selection
  }

  onClose(data){
    console.log('on close', data)
  }

  applyChanges() {
    this.config = CalendarViewConfig.from(this.config)
  }

  ngOnInit() {
  }

  updatePrice(price: number) {
    this.selection.selectedDates.forEach(date => {
      let currentDate = this.dates.find(d => d.date === date)

      if (currentDate) {
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
  public date: string
  public payload: any
}


function getRandomDates() {
  let values = []
  let randomValues = 30
  let randomMonths = 3
  let randomPrice = { min: 50, max: 900 }

  for (let v = 0; v < randomValues; v++) {
    let date = new Date()
    date = addMonths(date, randomInt(randomMonths))
    date = addDays(date, randomInt(30))
    date = subDays(date, randomInt(30))
    values.push({
      date: format(date, 'YYYY-MM-DD'),
      payload: randomInt(randomPrice.max - randomPrice.min) + randomPrice.min
    })
  }

  return values
}

function randomInt(max) {
  return Math.floor(Math.random() * max)
}
