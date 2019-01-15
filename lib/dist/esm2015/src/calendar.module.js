/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
export class TrbCalendarModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: TrbCalendarModule,
            providers: [
                { provide: 'config', useValue: config }
            ]
        };
    }
}
TrbCalendarModule.decorators = [
    { type: NgModule, args: [{
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
                    PickerModule
                ],
                entryComponents: [
                    CalendarComponent,
                    DatepickerComponent
                ],
                providers: [],
                bootstrap: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDNUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBZ0Q3RSxNQUFNLE9BQU8saUJBQWlCOzs7OztJQUNyQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU07UUFDMUIsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQ3hDO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXJERixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGlCQUFpQjtvQkFFakIscUJBQXFCO29CQUNyQix1QkFBdUI7b0JBQ3ZCLHNCQUFzQjtvQkFFdEIscUJBQXFCO29CQUNyQixzQkFBc0I7b0JBQ3RCLHNCQUFzQjtvQkFDdEIsdUJBQXVCO29CQUN2Qiw4QkFBOEI7b0JBQzlCLG1CQUFtQjtvQkFFbkIscUJBQXFCO2lCQUN0QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsaUJBQWlCO29CQUVqQixxQkFBcUI7b0JBQ3JCLHVCQUF1QjtvQkFDdkIsc0JBQXNCO29CQUV0QixxQkFBcUI7b0JBQ3JCLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUN0Qix1QkFBdUI7b0JBQ3ZCLDhCQUE4QjtvQkFDOUIsbUJBQW1CO29CQUVuQixxQkFBcUI7b0JBQ3JCLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtpQkFDYjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2YsaUJBQWlCO29CQUNqQixtQkFBbUI7aUJBQ3BCO2dCQUNELFNBQVMsRUFBRSxFQUFFO2dCQUNiLFNBQVMsRUFBRSxFQUFFO2FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21waWxlci9zcmMvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhckNlbGxEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2FsZW5kYXItY2VsbCc7XG5pbXBvcnQgeyBDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tb250aC9tb250aC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJIZWFkZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2FsZW5kYXItaGVhZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDYWxlbmRhck1vbnRoRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NhbGVuZGFyLW1vbnRoLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDYWxlbmRhckNlbGxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2VsbC9jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXlIZWFkZXJDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NlbGwtZGF5L2RheS1jZWxsJztcbmltcG9ydCB7IENhbGVuZGFySGVhZGVyQnV0dG9uc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXItYnV0dG9ucy9oZWFkZXItYnV0dG9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGlja2VyTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL3BpY2tlci9waWNrZXIubW9kdWxlJztcbmltcG9ydCB7IERhdGVwaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaWNrZXJUb2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcGlja2VyLXRvZ2dsZS5kaXJlY3RpdmUnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENhbGVuZGFyQ29tcG9uZW50LFxuXG4gICAgQ2FsZW5kYXJDZWxsRGlyZWN0aXZlLFxuICAgIENhbGVuZGFySGVhZGVyRGlyZWN0aXZlLFxuICAgIENhbGVuZGFyTW9udGhEaXJlY3RpdmUsXG5cbiAgICBDYWxlbmRhckNlbGxDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJNb250aENvbXBvbmVudCxcbiAgICBEYXlIZWFkZXJDZWxsQ29tcG9uZW50LFxuICAgIENhbGVuZGFySGVhZGVyQ29tcG9uZW50LFxuICAgIENhbGVuZGFySGVhZGVyQnV0dG9uc0NvbXBvbmVudCxcbiAgICBEYXRlcGlja2VyQ29tcG9uZW50LFxuXG4gICAgUGlja2VyVG9nZ2xlRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDYWxlbmRhckNvbXBvbmVudCxcblxuICAgIENhbGVuZGFyQ2VsbERpcmVjdGl2ZSxcbiAgICBDYWxlbmRhckhlYWRlckRpcmVjdGl2ZSxcbiAgICBDYWxlbmRhck1vbnRoRGlyZWN0aXZlLFxuXG4gICAgQ2FsZW5kYXJDZWxsQ29tcG9uZW50LFxuICAgIENhbGVuZGFyTW9udGhDb21wb25lbnQsXG4gICAgRGF5SGVhZGVyQ2VsbENvbXBvbmVudCxcbiAgICBDYWxlbmRhckhlYWRlckNvbXBvbmVudCxcbiAgICBDYWxlbmRhckhlYWRlckJ1dHRvbnNDb21wb25lbnQsXG4gICAgRGF0ZXBpY2tlckNvbXBvbmVudCxcblxuICAgIFBpY2tlclRvZ2dsZURpcmVjdGl2ZSxcbiAgICBQaWNrZXJNb2R1bGVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBQaWNrZXJNb2R1bGVcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgQ2FsZW5kYXJDb21wb25lbnQsXG4gICAgRGF0ZXBpY2tlckNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBib290c3RyYXA6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRyYkNhbGVuZGFyTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVHJiQ2FsZW5kYXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZyB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19