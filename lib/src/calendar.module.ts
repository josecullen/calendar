import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
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
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
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
  exports: [
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

    PickerToggleDirective,
    PickerModule
  ],
  imports: [
    CommonModule,
    PickerModule,
    LayoutModule,
  ],
  entryComponents: [
    CalendarComponent,
    DatepickerComponent
  ],
  providers: [],
  bootstrap: []
})
export class TrbCalendarModule {
  public static forRoot(config): ModuleWithProviders {
    return {
      ngModule: TrbCalendarModule,
      providers: [
        { provide: 'config', useValue: config }
      ]
    };
  }
}
