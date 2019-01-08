import { Component, Input, OnInit, OnChanges, SimpleChanges, HostListener, NgZone, HostBinding } from "@angular/core";
@Component({
    selector: 'day-header-cell',
    template: `
    <ng-container>
        {{ daysInWeek[day] }} {{ height }} {{ width}}
    </ng-container>

    `,
    styles: [`
    :host {
        flex: 1 1 auto;
        position: relative;
        text-align : center;
    }    

    `]
})
export class DayHeaderCellComponent {
    @Input() day: number;
    dateStatus: any
    daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
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
