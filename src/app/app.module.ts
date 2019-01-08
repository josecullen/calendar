import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarDateItem } from './calendar-date-item.component';
import { CalendarComponent } from './calendar.component';
import { CalendarCellDirective } from './directives/calendar-cell';
import { DefaultCellComponent } from './components/default-cell';
import { CalendarMonthViewComponent } from './calendar-month-view.component';
import { DayHeaderCellComponent } from './components/day-cell';


@NgModule({
  declarations: [
    AppComponent,
    CalendarDateItem,
    CalendarComponent,
    CalendarCellDirective,
    DefaultCellComponent,
    CalendarMonthViewComponent,
    DayHeaderCellComponent,
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    CalendarDateItem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
