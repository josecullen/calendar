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
var TrbCalendarModule = /** @class */ (function () {
    function TrbCalendarModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    TrbCalendarModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: TrbCalendarModule,
            providers: [
                { provide: 'config', useValue: config }
            ]
        };
    };
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
    return TrbCalendarModule;
}());
export { TrbCalendarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDNUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRzdFO0lBQUE7SUFzREEsQ0FBQzs7Ozs7SUFSZSx5QkFBTzs7OztJQUFyQixVQUFzQixNQUFNO1FBQzFCLE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTthQUN4QztTQUNGLENBQUM7SUFDSixDQUFDOztnQkFyREYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixpQkFBaUI7d0JBRWpCLHFCQUFxQjt3QkFDckIsdUJBQXVCO3dCQUN2QixzQkFBc0I7d0JBRXRCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0QixzQkFBc0I7d0JBQ3RCLHVCQUF1Qjt3QkFDdkIsOEJBQThCO3dCQUM5QixtQkFBbUI7d0JBRW5CLHFCQUFxQjtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGlCQUFpQjt3QkFFakIscUJBQXFCO3dCQUNyQix1QkFBdUI7d0JBQ3ZCLHNCQUFzQjt3QkFFdEIscUJBQXFCO3dCQUNyQixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsdUJBQXVCO3dCQUN2Qiw4QkFBOEI7d0JBQzlCLG1CQUFtQjt3QkFFbkIscUJBQXFCO3dCQUNyQixZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVk7cUJBQ2I7b0JBQ0QsZUFBZSxFQUFFO3dCQUNmLGlCQUFpQjt3QkFDakIsbUJBQW1CO3FCQUNwQjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDYixTQUFTLEVBQUUsRUFBRTtpQkFDZDs7SUFVRCx3QkFBQztDQUFBLEFBdERELElBc0RDO1NBVFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJDZWxsRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWNlbGwnO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFySGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyTW9udGhDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9udGgvbW9udGguY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFySGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jYWxlbmRhci1tb250aC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NlbGwvY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF5SGVhZGVyQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jZWxsLWRheS9kYXktY2VsbCc7XG5pbXBvcnQgeyBDYWxlbmRhckhlYWRlckJ1dHRvbnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyLWJ1dHRvbnMvaGVhZGVyLWJ1dHRvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFBpY2tlck1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9waWNrZXIvcGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBEYXRlcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGlja2VyVG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3BpY2tlci10b2dnbGUuZGlyZWN0aXZlJztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDYWxlbmRhckNvbXBvbmVudCxcblxuICAgIENhbGVuZGFyQ2VsbERpcmVjdGl2ZSxcbiAgICBDYWxlbmRhckhlYWRlckRpcmVjdGl2ZSxcbiAgICBDYWxlbmRhck1vbnRoRGlyZWN0aXZlLFxuXG4gICAgQ2FsZW5kYXJDZWxsQ29tcG9uZW50LFxuICAgIENhbGVuZGFyTW9udGhDb21wb25lbnQsXG4gICAgRGF5SGVhZGVyQ2VsbENvbXBvbmVudCxcbiAgICBDYWxlbmRhckhlYWRlckNvbXBvbmVudCxcbiAgICBDYWxlbmRhckhlYWRlckJ1dHRvbnNDb21wb25lbnQsXG4gICAgRGF0ZXBpY2tlckNvbXBvbmVudCxcblxuICAgIFBpY2tlclRvZ2dsZURpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2FsZW5kYXJDb21wb25lbnQsXG5cbiAgICBDYWxlbmRhckNlbGxEaXJlY3RpdmUsXG4gICAgQ2FsZW5kYXJIZWFkZXJEaXJlY3RpdmUsXG4gICAgQ2FsZW5kYXJNb250aERpcmVjdGl2ZSxcblxuICAgIENhbGVuZGFyQ2VsbENvbXBvbmVudCxcbiAgICBDYWxlbmRhck1vbnRoQ29tcG9uZW50LFxuICAgIERheUhlYWRlckNlbGxDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJIZWFkZXJDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJIZWFkZXJCdXR0b25zQ29tcG9uZW50LFxuICAgIERhdGVwaWNrZXJDb21wb25lbnQsXG5cbiAgICBQaWNrZXJUb2dnbGVEaXJlY3RpdmUsXG4gICAgUGlja2VyTW9kdWxlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUGlja2VyTW9kdWxlXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIENhbGVuZGFyQ29tcG9uZW50LFxuICAgIERhdGVwaWNrZXJDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgYm9vdHN0cmFwOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBUcmJDYWxlbmRhck1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRyYkNhbGVuZGFyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWcgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==