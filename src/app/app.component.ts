import { Component, Input, OnInit, ElementRef, TemplateRef } from '@angular/core';
import { addMonths, addDays, subDays, format, isEqual } from 'date-fns';
import { CalendarSelection, CalendarViewConfig } from 'lib/public_api';
import { CellData } from 'lib/src/cell-data';
import { DatepickerData } from 'lib/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  selectionOptions = ['simple', 'picked', 'range'];
  selection: CalendarSelection;

  @Input() dates: CellData<number>[] = getRandomDates();

  config = CalendarViewConfig.from({
    header: {
      pastMonths: false
    },
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
    // filterDates : (date: Date) => {
    //   return !['2019-01-20', '2019-01-21', '2019-01-22', '2019-01-23']
    //     .some(d => isEqual(format(date, 'YYYY-MM-DD'), d));
    // },
    selection: 'range',
    // stylePrefix: 'alm'
  });

  datepickerConfig: DatepickerData = {
    calendarConfig: this.config,
    datesSelected: ['2019-01-01', '2019-01-10'],
    dates: getRandomDates()
  };

  constructor() {
    console.log('this.datepickerConfig', this.datepickerConfig);
  }

  openPicker(elementRef: ElementRef, calendar: TemplateRef<any>) {
    console.log(calendar);
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
      this.dates = getRandomDates();
      // console.log(this.dates)
    }
    this.selection = selection;
  }

  onClose(data) {
    console.log('on close', data);
  }

  applyChanges() {
    this.config = CalendarViewConfig.from(this.config);
  }

  ngOnInit() {
  }


}

export class CellDataPayload {
  public date: string;
  public payload: any;
}


function getRandomDates(): CellData<number>[] {
  const values: CellData<number>[] = [];
  const randomValues = 30;
  const randomMonths = 3;
  const randomPrice = { min: 50, max: 900 };

  for (let v = 0; v < randomValues; v++) {
    let date = new Date();
    date = addMonths(date, randomInt(randomMonths));
    date = addDays(date, randomInt(30));
    date = subDays(date, randomInt(30));
    values.push(
      new CellData(format(date, 'YYYY-MM-DD'), randomInt(randomPrice.max - randomPrice.min) + randomPrice.min, false, false)
    );
  }

  return values;
}

function randomInt(max) {
  return Math.floor(Math.random() * max);
}
