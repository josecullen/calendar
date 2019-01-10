import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!

import { AppComponent } from './app.component';
import { CalendarDateItem } from './calendar-date-item.component';
import { CalendarCellDirective } from './directives/calendar-cell';
import { DayHeaderCellComponent } from './components/day-cell';
import { CalendarHeaderButtonsComponent } from './components/header-buttons.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DefaultCellComponent } from './components/cell/cell.component';
import { CalendarHeaderComponent } from './components/header/header.component';
import { CalendarMonthViewComponent } from './components/month/month.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarDateItem,
    CalendarComponent,
    CalendarCellDirective,
    DefaultCellComponent,
    CalendarMonthViewComponent,
    DayHeaderCellComponent,
    CalendarHeaderComponent,
    CalendarHeaderButtonsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  entryComponents: [
    CalendarDateItem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
