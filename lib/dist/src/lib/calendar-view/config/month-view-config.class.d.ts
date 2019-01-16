import { IMonthViewConfig } from './month-view-config.interface';
export declare class MonthViewConfig implements IMonthViewConfig {
    hideWeekends: boolean;
    hideDaysOutsideMonth: boolean;
    showTwoCalendarIfNeed: boolean;
    firstDay: number;
    monthLabels?: string[];
    dayLabels: string[];
    dayLength: number;
    showChangeYearButton: boolean;
    showChangeMonthButton: boolean;
    constructor(hideWeekends?: boolean, hideDaysOutsideMonth?: boolean, showTwoCalendarIfNeed?: boolean, firstDay?: number, monthLabels?: string[], dayLabels?: string[], dayLength?: number, showChangeYearButton?: boolean, showChangeMonthButton?: boolean);
}
