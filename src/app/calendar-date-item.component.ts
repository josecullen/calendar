import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { CellDataPayload } from './app.component';
import { CellViewData } from './components/default-cell';



@Component({
    selector: 'calendar-date-item',
    template: `
   <default-cell [cellData]="cellData">

    <div *ngIf="currentMealplan" class="prices">
        <span class="clickeable" (click)="prevMealplan()">
            <i class="arrow left"></i>
        </span>

        <div class="current-price">
            <span class="price"> $ {{ currentMealplan.price }} </span>
            <span class="mealplan-label"> {{ currentMealplan.type }} </span>
        </div>

        <span class="clickeable" (click)="nextMealplan()">
            <i class="arrow right"></i>
        </span>
    </div>

    <div class="buttons">
        <span *ngIf="cellData.date.payload" [ngClass]="{ 'ok': checkIn, 'nook': !checkIn }">ckIn</span>
        <span *ngFor="let mealplan of mealplans">{{ mealplan.icon }}</span>
    </div>

   </default-cell>
    `,
    styles: [`
    :host {
        flex: 1;
    }
    `,],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarDateItem {
    @Input() cellData: CellViewData
    // currentMealplan:number = 0

    get payload():any {
        return this.cellData.date.payload || {}
    }

    get mealplans():any[] {
        return this.payload.mealplans || []
    }

    get mealplanIndex():number {
        return this.payload 
            ? this.payload.mealplanIndex || 0
            : 0
    }

    get checkIn():boolean {
        return this.payload  ? this.payload.checkIn : false
    }

    get currentMealplan():any {
        let m = this.mealplans

        return m.length > 0 ? m[this.mealplanIndex] : undefined
    }

    nextMealplan(){
        if(this.mealplanIndex === this.mealplans.length -1){
            this.cellData.date.payload.mealplanIndex = 0
        } else {
            this.cellData.date.payload.mealplanIndex = this.mealplanIndex + 1
        }
    }

    prevMealplan(){
        if(this.mealplanIndex === 0){
            this.cellData.date.payload.mealplanIndex = this.mealplans.length -1
        } else {
            this.cellData.date.payload.mealplanIndex = this.mealplanIndex -1
        }
    }

}
