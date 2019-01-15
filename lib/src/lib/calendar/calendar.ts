import * as fns from 'date-fns';
import { IYear } from './year/year.interface';
import { ICalendarFactory } from './factory/factory.interface';
import { CalendarDefaultFactory } from './factory/default-factory';
import { IMonth } from './month/month.interface';
import { IDay } from './day/day.interface';
import { CalendarConfig } from './config/calendar-config.class';

export class Calendar {

    private years: IYear[] = [];

    constructor(
        public readonly factory: ICalendarFactory = new CalendarDefaultFactory(),
        public config: CalendarConfig = new CalendarConfig()
    ) {}

    recalculate() {
        const _years = this.years.slice();

        this.years = [];
        // debugger
        _years.map(year => this.getYear(year.value));
    }

    setDaysPayload(payloads: { date: string, payload: IDay }[]) {
        // this.recalculate()
        payloads.forEach(payload => this.setDay(payload.date, payload.payload));
    }

    setDay(dateString: string, day: IDay) {
        const date = new Date(dateString);
        const year = fns.getYear(date);
        const month = fns.getMonth(date);

        const selectedYear = this.getYear(year);
        const selectedMonth = selectedYear.getMonth(month);
        selectedMonth.setDay(day);
    }

    getYear(year: number): IYear {
        let currentYear = this.years.find(y => y.value === year);

        if (!currentYear) {
            currentYear = this.factory.createYear(year, this);
            this.years.push(currentYear);
        }

        return currentYear;
    }

    getCurrentYear(): IYear {
        const year = fns.getYear(new Date());

        return this.getYear(year);
    }

    getPreviousMonth(currentMonth: IMonth): IMonth {
        const previousYear = this.getYear(currentMonth.year.value - 1);

        const previousMonth = previousYear.months[11];

        return previousMonth;
    }

    getNextMonth(currentMonth: IMonth): IMonth {
        const nextYear = this.getYear(currentMonth.year.value + 1);

        const nextMonth = nextYear.months[0];

        return nextMonth;
    }


}
