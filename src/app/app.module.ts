import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!

import { AppComponent } from './app.component';
import { CalendarCellDirective } from './directives/calendar-cell';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarHeaderComponent } from './components/header/header.component';
import { CalendarMonthComponent } from './components/month/month.component';
import { CalendarHeaderDirective } from './directives/calendar-header.directive';
import { CalendarMonthDirective } from './directives/calendar-month.directive';
import { CalendarCellComponent } from './components/cell/cell.component';
import { DayHeaderCellComponent } from './components/cell-day/day-cell';
import { CalendarHeaderButtonsComponent } from './components/header-buttons/header-buttons.component';
import { PickerModule } from './modules/picker/picker.module';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { PickerToggleDirective } from './directives/picker-toggle.directive';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    
    CalendarCellDirective,
    CalendarHeaderDirective,
    CalendarMonthDirective,

    CalendarCellComponent,
    CalendarMonthComponent,
    DayHeaderCellComponent,
    CalendarHeaderComponent,
    CalendarHeaderButtonsComponent,
    DatepickerComponent,

    PickerToggleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    PickerModule
  ],
  entryComponents: [
    CalendarComponent,
    DatepickerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
