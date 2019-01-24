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
import { LayoutModule } from '@angular/cdk/layout';
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
                        PickerModule,
                        LayoutModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHJiLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsic3JjL2NhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDNUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUduRDtJQUFBO0lBdURBLENBQUM7Ozs7O0lBUmUseUJBQU87Ozs7SUFBckIsVUFBc0IsTUFBTTtRQUMxQixPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7YUFDeEM7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBdERGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osaUJBQWlCO3dCQUVqQixxQkFBcUI7d0JBQ3JCLHVCQUF1Qjt3QkFDdkIsc0JBQXNCO3dCQUV0QixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIsc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLDhCQUE4Qjt3QkFDOUIsbUJBQW1CO3dCQUVuQixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBRWpCLHFCQUFxQjt3QkFDckIsdUJBQXVCO3dCQUN2QixzQkFBc0I7d0JBRXRCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0QixzQkFBc0I7d0JBQ3RCLHVCQUF1Qjt3QkFDdkIsOEJBQThCO3dCQUM5QixtQkFBbUI7d0JBRW5CLHFCQUFxQjt3QkFDckIsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFlBQVk7cUJBQ2I7b0JBQ0QsZUFBZSxFQUFFO3dCQUNmLGlCQUFpQjt3QkFDakIsbUJBQW1CO3FCQUNwQjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDYixTQUFTLEVBQUUsRUFBRTtpQkFDZDs7SUFVRCx3QkFBQztDQUFBLEFBdkRELElBdURDO1NBVFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJDZWxsRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWNlbGwnO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFySGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyTW9udGhDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9udGgvbW9udGguY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFySGVhZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jYWxlbmRhci1tb250aC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NlbGwvY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF5SGVhZGVyQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jZWxsLWRheS9kYXktY2VsbCc7XG5pbXBvcnQgeyBDYWxlbmRhckhlYWRlckJ1dHRvbnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyLWJ1dHRvbnMvaGVhZGVyLWJ1dHRvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFBpY2tlck1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9waWNrZXIvcGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBEYXRlcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGlja2VyVG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3BpY2tlci10b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENhbGVuZGFyQ29tcG9uZW50LFxuXG4gICAgQ2FsZW5kYXJDZWxsRGlyZWN0aXZlLFxuICAgIENhbGVuZGFySGVhZGVyRGlyZWN0aXZlLFxuICAgIENhbGVuZGFyTW9udGhEaXJlY3RpdmUsXG5cbiAgICBDYWxlbmRhckNlbGxDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJNb250aENvbXBvbmVudCxcbiAgICBEYXlIZWFkZXJDZWxsQ29tcG9uZW50LFxuICAgIENhbGVuZGFySGVhZGVyQ29tcG9uZW50LFxuICAgIENhbGVuZGFySGVhZGVyQnV0dG9uc0NvbXBvbmVudCxcbiAgICBEYXRlcGlja2VyQ29tcG9uZW50LFxuXG4gICAgUGlja2VyVG9nZ2xlRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDYWxlbmRhckNvbXBvbmVudCxcblxuICAgIENhbGVuZGFyQ2VsbERpcmVjdGl2ZSxcbiAgICBDYWxlbmRhckhlYWRlckRpcmVjdGl2ZSxcbiAgICBDYWxlbmRhck1vbnRoRGlyZWN0aXZlLFxuXG4gICAgQ2FsZW5kYXJDZWxsQ29tcG9uZW50LFxuICAgIENhbGVuZGFyTW9udGhDb21wb25lbnQsXG4gICAgRGF5SGVhZGVyQ2VsbENvbXBvbmVudCxcbiAgICBDYWxlbmRhckhlYWRlckNvbXBvbmVudCxcbiAgICBDYWxlbmRhckhlYWRlckJ1dHRvbnNDb21wb25lbnQsXG4gICAgRGF0ZXBpY2tlckNvbXBvbmVudCxcblxuICAgIFBpY2tlclRvZ2dsZURpcmVjdGl2ZSxcbiAgICBQaWNrZXJNb2R1bGVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBQaWNrZXJNb2R1bGUsXG4gICAgTGF5b3V0TW9kdWxlLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBDYWxlbmRhckNvbXBvbmVudCxcbiAgICBEYXRlcGlja2VyQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGJvb3RzdHJhcDogW11cbn0pXG5leHBvcnQgY2xhc3MgVHJiQ2FsZW5kYXJNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUcmJDYWxlbmRhck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=