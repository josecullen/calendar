/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
var DayHeaderCellComponent = /** @class */ (function () {
    function DayHeaderCellComponent() {
        this.dayLength = 3;
        this.daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    }
    DayHeaderCellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'trb-calendar-day-header-cell',
                    template: "\n    <ng-container *ngIf=\"dayLabels.length > 0 else defaultDays\">\n        {{ dayLabels[day] | slice:0:dayLength }}\n    </ng-container>\n\n    <ng-template #defaultDays>\n        {{ daysInWeek[day] | slice:0:dayLength }}\n    </ng-template>\n    "
                }] }
    ];
    DayHeaderCellComponent.propDecorators = {
        day: [{ type: Input }],
        dayLabels: [{ type: Input }],
        dayLength: [{ type: Input }]
    };
    return DayHeaderCellComponent;
}());
export { DayHeaderCellComponent };
if (false) {
    /** @type {?} */
    DayHeaderCellComponent.prototype.day;
    /** @type {?} */
    DayHeaderCellComponent.prototype.dayLabels;
    /** @type {?} */
    DayHeaderCellComponent.prototype.dayLength;
    /** @type {?} */
    DayHeaderCellComponent.prototype.daysInWeek;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LWNlbGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90cmItY2FsZW5kYXIvIiwic291cmNlcyI6WyJzcmMvY29tcG9uZW50cy9jZWxsLWRheS9kYXktY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXVFLE1BQU0sZUFBZSxDQUFDO0FBQ3RIO0lBQUE7UUFlYSxjQUFTLEdBQVUsQ0FBQyxDQUFBO1FBQzdCLGVBQVUsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7O2dCQWpCQSxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsUUFBUSxFQUFFLDRQQVFUO2lCQUNKOzs7c0JBRUksS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7O0lBRVYsNkJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQUxZLHNCQUFzQjs7O0lBQy9CLHFDQUFxQjs7SUFDckIsMkNBQTRCOztJQUM1QiwyQ0FBNkI7O0lBQzdCLDRDQUE0RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBIb3N0TGlzdGVuZXIsIE5nWm9uZSwgSG9zdEJpbmRpbmcgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0cmItY2FsZW5kYXItZGF5LWhlYWRlci1jZWxsJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXlMYWJlbHMubGVuZ3RoID4gMCBlbHNlIGRlZmF1bHREYXlzXCI+XG4gICAgICAgIHt7IGRheUxhYmVsc1tkYXldIHwgc2xpY2U6MDpkYXlMZW5ndGggfX1cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdERheXM+XG4gICAgICAgIHt7IGRheXNJbldlZWtbZGF5XSB8IHNsaWNlOjA6ZGF5TGVuZ3RoIH19XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIERheUhlYWRlckNlbGxDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGRheTogbnVtYmVyO1xuICAgIEBJbnB1dCgpIGRheUxhYmVsczogc3RyaW5nW11cbiAgICBASW5wdXQoKSBkYXlMZW5ndGg6bnVtYmVyID0gM1xuICAgIGRheXNJbldlZWsgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG59XG4iXX0=