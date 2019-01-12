import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!

import { AppComponent } from './app.component';
import { CalendarCellDirective } from './directives/calendar-cell';
import { DayHeaderCellComponent } from './components/day-cell';
import { CalendarHeaderButtonsComponent } from './components/header-buttons.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DefaultCellComponent } from './components/cell/cell.component';
import { CalendarHeaderComponent } from './components/header/header.component';
import { CalendarMonthViewComponent } from './components/month/month.component';
import { CalendarHeaderDirective } from './directives/calendar-header.directive';
import { CalendarMonthDirective } from './directives/calendar-month.directive';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    
    CalendarCellDirective,
    CalendarHeaderDirective,
    CalendarMonthDirective,

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
