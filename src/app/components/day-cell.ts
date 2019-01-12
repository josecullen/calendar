import { Component, Input, OnInit, OnChanges, SimpleChanges, HostListener, NgZone, HostBinding } from "@angular/core";
@Component({
    selector: 'day-header-cell',
    template: `
    <ng-container>
        {{ daysInWeek[day] | slice:0:dayLength }}
    </ng-container>

    `,
    styles: [`
    :host {
        flex: 1;
        position: relative;
        text-align : center;
        padding: 8px 0;
    }

    `]
})
export class DayHeaderCellComponent {
    @Input() day: number;
    @Input() daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    @Input() dayLength:number = 3

    dateStatus: any
    
    @HostBinding('style.height.px')
    width:number
    // height

    @HostBinding('style.height.px')
    height:number;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        
        // this.width = event.target.innerWidth;
        // this.height = event.target.innerHeight;
    }

    constructor(ngZone: NgZone) {
        // window.onresize = (e) => {
        //     ngZone.run(() => {
        //         this.width = window.innerWidth;
        //         this.height = window.innerHeight;
        //     });
        // };
    }

}
