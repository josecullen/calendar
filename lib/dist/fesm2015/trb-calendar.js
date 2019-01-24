import { CommonModule } from '@angular/common';
import { Overlay, OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Subject } from 'rxjs';
import { Directive, TemplateRef, ViewContainerRef, Input, Output, HostListener, EventEmitter, Component, ContentChild, HostBinding, ViewEncapsulation, InjectionToken, Injectable, Injector, NgModule, Inject, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { parse, format, getMonth, getYear, addMonths, addYears, subMonths, subYears, setMonth, setYear, addHours, startOfMonth, getDaysInMonth, addDays, getDate, getDay, isWeekend, compareDesc } from 'date-fns';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Day {
    /**
     * @param {?} _date
     * @param {?=} disabled
     */
    constructor(_date, disabled = false) {
        this._date = _date;
        this.disabled = disabled;
        this.date = format(_date, 'YYYY-MM-DD'),
            this.name = format(_date, 'dddd'),
            this.dayOfMonth = getDate(_date);
        this.dayOfWeek = getDay(_date);
    }
    /**
     * @return {?}
     */
    get isWeekend() {
        return isWeekend(this._date);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class CellData extends Day {
    /**
     * @param {?} date
     * @param {?} payload
     * @param {?=} selected
     * @param {?=} disabled
     */
    constructor(date, payload, selected = false, disabled = false) {
        super(parse(date));
        this.payload = payload;
        this.selected = selected;
        this.disabled = disabled;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarCellDirective {
    /**
     * @param {?} template
     * @param {?} viewContainer
     */
    constructor(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
        this.click = new EventEmitter();
    }
    /**
     * @param {?} content
     * @return {?}
     */
    set trbCalendarCell(content) {
        if (content) {
            /** @type {?} */
            const ref = this.viewContainer
                .createEmbeddedView(this.template, { $implicit: content });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.click.emit(event);
    }
}
CalendarCellDirective.decorators = [
    { type: Directive, args: [{
                selector: '[trbCalendarCell]'
            },] }
];
/** @nocollapse */
CalendarCellDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
CalendarCellDirective.propDecorators = {
    trbCalendarCell: [{ type: Input }],
    click: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Year {
    /**
     * @param {?} value
     * @param {?} calendar
     */
    constructor(value, calendar) {
        this.value = value;
        this.calendar = calendar;
        this.months = [];
        /** @type {?} */
        let date = addHours(new Date(`${value}-01-01`), 12);
        this.months.push(this.calendar.factory.createMonth(date, this, calendar));
        for (let m = 0; m < 12; m++) {
            date = startOfMonth(addMonths(date, 1));
            this.months.push(this.calendar.factory.createMonth(date, this, calendar));
        }
    }
    /**
     * @param {?} currentMonth
     * @return {?}
     */
    previousMonth(currentMonth) {
        /** @type {?} */
        let previousMonth;
        if (currentMonth.ofYear > 0) {
            previousMonth = currentMonth.year.months[currentMonth.ofYear - 1];
        }
        else {
            previousMonth = this.calendar.getPreviousMonth(currentMonth);
        }
        return previousMonth;
    }
    /**
     * @param {?} currentMonth
     * @return {?}
     */
    nextMonth(currentMonth) {
        /** @type {?} */
        let nextMonth;
        if (currentMonth.ofYear < 11) {
            nextMonth = currentMonth.year.months[currentMonth.ofYear + 1];
        }
        else {
            nextMonth = this.calendar.getNextMonth(currentMonth);
        }
        return nextMonth;
    }
    /**
     * @param {?} month
     * @return {?}
     */
    getMonth(month) {
        return this.months[month];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Month {
    /**
     * @param {?} date
     * @param {?} year
     * @param {?} calendar
     */
    constructor(date, year, calendar) {
        this.date = date;
        this.year = year;
        this.calendar = calendar;
        this.days = [];
        this.ofYear = getMonth(date);
        this.name = format(date, 'MMMM');
        this.days.push(calendar.factory.createDay(date));
        for (let d = 0; d < getDaysInMonth(date) - 1; d++) {
            date = addDays(date, 1);
            this.days.push(calendar.factory.createDay(date));
        }
    }
    /**
     * @param {?} day
     * @return {?}
     */
    setDay(day) {
        /** @type {?} */
        const dayIndex = this.days.findIndex(d => d.date === day.date);
        if (dayIndex >= 0) {
            this.days.splice(dayIndex, 1, day);
        }
    }
    /**
     * @return {?}
     */
    getCalendarView() {
        /** @type {?} */
        let days = this.days.slice();
        /** @type {?} */
        const firstDayOfMonth = this.days[0].dayOfWeek;
        /** @type {?} */
        const monthConfig = this.calendar.config.month;
        if (firstDayOfMonth !== monthConfig.firstDay) {
            /** @type {?} */
            const previousMonth = this.year.previousMonth(this);
            /** @type {?} */
            const previousDays = previousMonth.days.slice(previousMonth.days.length - (((firstDayOfMonth - monthConfig.firstDay) + 7) % 7), previousMonth.days.length);
            days = previousDays.concat(days);
        }
        if (days.length < Month.DAYS_IN_CALENDAR_VIEW) {
            /** @type {?} */
            const nextMonth = this.year.nextMonth(this);
            /** @type {?} */
            const forwardDays = nextMonth.days.slice(0, Month.DAYS_IN_CALENDAR_VIEW - days.length);
            days = days.concat(forwardDays);
        }
        else if (days.length > Month.DAYS_IN_CALENDAR_VIEW) {
            /** @type {?} */
            const nextMonth = this.year.nextMonth(this);
            /** @type {?} */
            const forwardDays = nextMonth.days.slice(0, (Month.DAYS_IN_CALENDAR_VIEW + 7) - days.length);
            days = days.concat(forwardDays);
        }
        return days.reduce((acc, curr, i) => {
            if (curr.dayOfWeek === monthConfig.firstDay || i === 0) {
                acc.push([]);
            }
            if ((!monthConfig.hideWeekends || !curr.isWeekend) && acc[acc.length - 1]) {
                acc[acc.length - 1].push(curr);
            }
            return acc;
        }, new Array());
    }
}
Month.DAYS_IN_CALENDAR_VIEW = 35;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarDefaultFactory {
    /**
     * @param {?} value
     * @param {?} calendar
     * @return {?}
     */
    createYear(value, calendar) {
        return new Year(value, calendar);
    }
    /**
     * @param {?} date
     * @param {?} year
     * @param {?} calendar
     * @return {?}
     */
    createMonth(date, year, calendar) {
        return new Month(date, year, calendar);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    createDay(date) {
        return new Day(date);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarHeaderConfig {
    /**
     * @param {?=} linkedMonths
     */
    constructor(linkedMonths = true) {
        this.linkedMonths = linkedMonths;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MonthConfig {
    /**
     * @param {?=} hideWeekends
     * @param {?=} hideDaysOutsideMonth
     * @param {?=} firstDay
     * @param {?=} showTwoCalendarIfNeed
     */
    constructor(hideWeekends = false, hideDaysOutsideMonth = true, firstDay = 0, showTwoCalendarIfNeed = false) {
        this.hideWeekends = hideWeekends;
        this.hideDaysOutsideMonth = hideDaysOutsideMonth;
        this.firstDay = firstDay;
        this.showTwoCalendarIfNeed = showTwoCalendarIfNeed;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarConfig {
    /**
     * @param {?=} header
     * @param {?=} month
     */
    constructor(header = new CalendarHeaderConfig(), month = new MonthConfig()) {
        this.header = header;
        this.month = month;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Calendar {
    /**
     * @param {?=} factory
     * @param {?=} config
     */
    constructor(factory = new CalendarDefaultFactory(), config = new CalendarConfig()) {
        this.factory = factory;
        this.config = config;
        this.years = [];
    }
    /**
     * @return {?}
     */
    recalculate() {
        /** @type {?} */
        const _years = this.years.slice();
        this.years = [];
        // debugger
        _years.map(year => this.getYear(year.value));
    }
    /**
     * @param {?} payloads
     * @return {?}
     */
    setDaysPayload(payloads) {
        // this.recalculate()
        payloads.forEach(payload => this.setDay(payload.date, payload.payload));
    }
    /**
     * @param {?} dateString
     * @param {?} day
     * @return {?}
     */
    setDay(dateString, day) {
        /** @type {?} */
        const date = new Date(dateString);
        /** @type {?} */
        const year = getYear(date);
        /** @type {?} */
        const month = getMonth(date);
        /** @type {?} */
        const selectedYear = this.getYear(year);
        /** @type {?} */
        const selectedMonth = selectedYear.getMonth(month);
        selectedMonth.setDay(day);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    getYear(year) {
        /** @type {?} */
        let currentYear = this.years.find(y => y.value === year);
        if (!currentYear) {
            currentYear = this.factory.createYear(year, this);
            this.years.push(currentYear);
        }
        return currentYear;
    }
    /**
     * @return {?}
     */
    getCurrentYear() {
        /** @type {?} */
        const year = getYear(new Date());
        return this.getYear(year);
    }
    /**
     * @param {?} currentMonth
     * @return {?}
     */
    getPreviousMonth(currentMonth) {
        /** @type {?} */
        const previousYear = this.getYear(currentMonth.year.value - 1);
        /** @type {?} */
        const previousMonth = previousYear.months[11];
        return previousMonth;
    }
    /**
     * @param {?} currentMonth
     * @return {?}
     */
    getNextMonth(currentMonth) {
        /** @type {?} */
        const nextYear = this.getYear(currentMonth.year.value + 1);
        /** @type {?} */
        const nextMonth = nextYear.months[0];
        return nextMonth;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const SelectionType = {
    single: 'single',
    range: 'range',
    multirange: 'multirange',
    pick: 'pick',
};
/** @enum {string} */
const SelectionStatus = {
    unset: 'unset',
    startRangeSelected: 'startRangeSelected',
    rangeSelected: 'rangeSelected',
    picked: 'picked',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MonthSelection {
    /**
     * @param {?} date
     * @param {?} year
     * @param {?} month
     * @param {?=} selectionChange
     */
    constructor(date, year, month, selectionChange) {
        this.date = date;
        this.year = year;
        this.month = month;
        this.selectionChange = selectionChange;
    }
    /**
     * @return {?}
     */
    get label() {
        return format(this.date, 'MMMM YYYY');
    }
    /**
     * @param {?} months
     * @return {?}
     */
    labelWithConfig(months) {
        return months ? `${months[getMonth(this.date)]} ${getYear(this.date)}` : this.label;
    }
    /**
     * @return {?}
     */
    addMonth() {
        /** @type {?} */
        const previousDate = this.date;
        this.date = addMonths(this.date, 1);
        this.update(previousDate);
    }
    /**
     * @return {?}
     */
    addYear() {
        /** @type {?} */
        const previousDate = this.date;
        this.date = addYears(this.date, 1);
        this.update(previousDate);
    }
    /**
     * @return {?}
     */
    minusMonth() {
        /** @type {?} */
        const previousDate = this.date;
        this.date = subMonths(this.date, 1);
        this.update(previousDate);
    }
    /**
     * @return {?}
     */
    minusYear() {
        /** @type {?} */
        const previousDate = this.date;
        this.date = subYears(this.date, 1);
        this.update(previousDate);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    setMonthAndYear(date) {
        /** @type {?} */
        const month = getMonth(date);
        /** @type {?} */
        const year = getYear(date);
        /** @type {?} */
        const previousDate = this.date;
        this.date = setMonth(this.date, month);
        this.date = setYear(this.date, year);
        this.update(previousDate);
    }
    /**
     * @private
     * @param {?} previous
     * @return {?}
     */
    update(previous) {
        this.year = getYear(this.date);
        this.month = getMonth(this.date);
        this.selectionChange.emit({
            previous, current: this.date
        });
    }
}
class CalendarMonthSelection {
    /**
     * @param {?} needTwoMonthView
     * @param {?=} from
     * @param {?=} to
     * @param {?=} _monthSelectionChange
     */
    constructor(needTwoMonthView, from, to, _monthSelectionChange) {
        this.needTwoMonthView = needTwoMonthView;
        this.from = from;
        this.to = to;
        this._monthSelectionChange = _monthSelectionChange;
        /** @type {?} */
        const date = new Date();
        if (!from) {
            this.from = new MonthSelection(date, getYear(date), getMonth(date), this.monthSelectionChange);
        }
        if (!to) {
            /** @type {?} */
            const nextMonth = addMonths(date, 1);
            this.to = new MonthSelection(nextMonth, getYear(nextMonth), getMonth(nextMonth), this.monthSelectionChange);
        }
    }
    /**
     * @param {?} monthSelectionChange
     * @return {?}
     */
    set monthSelectionChange(monthSelectionChange) {
        this._monthSelectionChange = monthSelectionChange;
        this.from.selectionChange = monthSelectionChange;
        this.to.selectionChange = monthSelectionChange;
    }
    /**
     * @return {?}
     */
    get monthSelectionChange() {
        return this._monthSelectionChange;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SingleSelectionStrategy {
    constructor() {
        this.calendarMonthView = new CalendarMonthSelection(false);
        this.name = 'simple';
    }
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    isInRange(date, selection) {
        return false;
    }
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    isSelected(date, selection) {
        return selection.selectedDates.some(d => d === date);
    }
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    change(date, selection) {
        if (selection.selectedDates.length === 0 || selection.selectedDates[0] !== date) {
            selection.selectedDates = [];
            selection.selectedDates = [date];
        }
        else {
            selection.selectedDates = [];
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarSelection {
    /**
     * @param {?=} strategy
     * @param {?=} selectedDates
     * @param {?=} status
     * @param {?=} selectionChange
     * @param {?=} monthSelectionChange
     */
    constructor(strategy = new SingleSelectionStrategy(), selectedDates = [], status = SelectionStatus.unset, selectionChange = new EventEmitter(), monthSelectionChange = new EventEmitter()) {
        this.strategy = strategy;
        this.selectedDates = selectedDates;
        this.status = status;
        this.selectionChange = selectionChange;
        this.monthSelectionChange = monthSelectionChange;
        this.strategy.calendarMonthView.monthSelectionChange = this.monthSelectionChange;
    }
    /**
     * @return {?}
     */
    get calendarMonthView() {
        return this.strategy.calendarMonthView;
    }
    /**
     * @return {?}
     */
    get name() {
        return this.strategy.name;
    }
    /**
     * @param {?} strategy
     * @return {?}
     */
    setStrategy(strategy) {
        this.strategy = strategy;
        this.selectedDates = [];
        this.strategy.calendarMonthView.monthSelectionChange = this.monthSelectionChange;
    }
    /**
     * @return {?}
     */
    getStrategy() {
        return this.strategy;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isInRange(date) {
        return this.strategy.isInRange(date, this);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSelected(date) {
        return this.strategy.isSelected(date, this);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    change(date) {
        this.strategy.change(date, this);
        this.selectionChange.emit(this);
    }
    // selectedMonthChange(){
    //     this.monthSelectionChange.emit(this)
    // }
    /**
     * @return {?}
     */
    from() {
        return this.selectedDates.length
            ? this.selectedDates[0]
            : '';
    }
    /**
     * @return {?}
     */
    to() {
        return this.selectedDates.length > 1
            ? this.selectedDates[this.selectedDates.length - 1]
            : '';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RangeSelectionStrategy {
    constructor() {
        this.calendarMonthView = new CalendarMonthSelection(true);
        this.name = 'range';
    }
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    isInRange(date, selection) {
        /** @type {?} */
        const index = selection.selectedDates.findIndex(d => d === date);
        return index > 0 && index < selection.selectedDates.length - 1;
    }
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    isSelected(date, selection) {
        /** @type {?} */
        const index = selection.selectedDates.findIndex(d => d === date);
        return selection.selectedDates.length && (index === 0 || index === selection.selectedDates.length - 1);
    }
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    change(date, selection) {
        if (selection.status === SelectionStatus.unset) {
            selection.selectedDates.push(date);
            selection.status = SelectionStatus.startRangeSelected;
        }
        else if (selection.status === SelectionStatus.startRangeSelected) {
            /** @type {?} */
            let start = parse(selection.selectedDates[0]);
            /** @type {?} */
            const end = parse(date);
            /** @type {?} */
            const diff = compareDesc(start, end);
            if (diff === 0) {
                selection.selectedDates = [];
                selection.status = SelectionStatus.unset;
            }
            else if (diff < 0) {
                selection.selectedDates = [];
                selection.selectedDates.push(date);
            }
            else if (diff > 0) {
                do {
                    start = addDays(start, 1);
                    selection.selectedDates.push(format(start, 'YYYY-MM-DD'));
                } while (compareDesc(start, end) > 0);
                selection.status = SelectionStatus.rangeSelected;
            }
        }
        else {
            // selection.selectedDates = [];
            // selection.status = SelectionStatus.unset;
            selection.selectedDates = [];
            selection.selectedDates.push(date);
            selection.status = SelectionStatus.startRangeSelected;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PickSelectionStrategy {
    constructor() {
        this.calendarMonthView = new CalendarMonthSelection(true);
        this.name = 'pick';
    }
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    isInRange(date, selection) {
        return false;
    }
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    isSelected(date, selection) {
        return selection.selectedDates.some(d => d === date);
    }
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    change(date, selection) {
        /** @type {?} */
        const index = selection.selectedDates.findIndex(d => d === date);
        if (index >= 0) {
            selection.selectedDates.splice(index, 1);
        }
        else {
            selection.selectedDates.push(date);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarHeaderConfig$1 {
    /**
     * @param {?=} linkedMonths
     * @param {?=} pastMonths
     */
    constructor(linkedMonths = true, pastMonths = true) {
        this.linkedMonths = linkedMonths;
        this.pastMonths = pastMonths;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MonthViewConfig {
    /**
     * @param {?=} hideWeekends
     * @param {?=} hideDaysOutsideMonth
     * @param {?=} showTwoCalendarIfNeed
     * @param {?=} firstDay
     * @param {?=} monthLabels
     * @param {?=} dayLabels
     * @param {?=} dayLength
     * @param {?=} showChangeYearButton
     * @param {?=} showChangeMonthButton
     */
    constructor(hideWeekends = false, hideDaysOutsideMonth = true, showTwoCalendarIfNeed = false, firstDay = 0, monthLabels, dayLabels = [], dayLength = 3, showChangeYearButton = true, showChangeMonthButton = true) {
        this.hideWeekends = hideWeekends;
        this.hideDaysOutsideMonth = hideDaysOutsideMonth;
        this.showTwoCalendarIfNeed = showTwoCalendarIfNeed;
        this.firstDay = firstDay;
        this.monthLabels = monthLabels;
        this.dayLabels = dayLabels;
        this.dayLength = dayLength;
        this.showChangeYearButton = showChangeYearButton;
        this.showChangeMonthButton = showChangeMonthButton;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarViewConfig extends CalendarConfig {
    /**
     * @param {?=} header
     * @param {?=} month
     * @param {?=} selection
     * @param {?=} stylePrefix
     * @param {?=} filterDates
     */
    constructor(header = new CalendarHeaderConfig$1(), month = new MonthViewConfig(), selection = 'simple', stylePrefix = 'trb', filterDates) {
        super(header, month);
        this.header = header;
        this.month = month;
        this.selection = selection;
        this.stylePrefix = stylePrefix;
        this.filterDates = filterDates;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    static from(config) {
        /** @type {?} */
        const conf = this.copyObject(config, new CalendarViewConfig());
        return conf;
    }
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    static copyObject(from, to) {
        to = Object.assign({}, to);
        Object.keys(from).forEach(key => {
            this.assign(from[key], to, key);
        });
        return to;
    }
    /**
     * @private
     * @param {?} value
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    static assign(value, target, key) {
        if (value instanceof Array || value instanceof Function) {
            target[key] = value;
        }
        else if (value instanceof Object) {
            target[key] = this.copyObject(value, target[key]);
        }
        else {
            target[key] = value;
        }
    }
}
class ICalendarViewConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarViewFactory extends CalendarDefaultFactory {
    /**
     * @param {?} date
     * @param {?=} selected
     * @param {?=} disabled
     * @return {?}
     */
    createDay(date, selected, disabled) {
        return new CellData(format(date), selected, disabled);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarMonthDirective {
    /**
     * @param {?} template
     * @param {?} viewContainer
     */
    constructor(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
}
CalendarMonthDirective.decorators = [
    { type: Directive, args: [{
                selector: '[trbCalendarMonth]'
            },] }
];
/** @nocollapse */
CalendarMonthDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarComponent {
    constructor() {
        this.selection = new CalendarSelection();
        this.dates = [];
        this.config = new CalendarViewConfig();
        this.selectionChange = this.selection.selectionChange;
        this.monthSelectionChange = this.selection.monthSelectionChange;
    }
    /**
     * @return {?}
     */
    get classes() {
        return `${this.config.stylePrefix}-calendar`;
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.calendar = new Calendar(new CalendarViewFactory(), this.config);
        this.updateSelection();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const configChange = changes['config'];
        if (this.calendar) {
            this.calendar.recalculate();
            this.dates.forEach(day => {
                this.calendar.setDay(day.date, new CellData(day.date, day.payload, day.selected, day.disabled));
            });
            if (configChange) {
                this.calendar.config = this.config;
                this.updateSelection();
            }
        }
    }
    /**
     * @return {?}
     */
    updateSelection() {
        switch (((/** @type {?} */ (this.config))).selection) {
            case 'simple':
                this.singleSelection();
                break;
            case 'range':
                this.rangeSelection();
                break;
            case 'picked':
                this.pickSelection();
                break;
        }
        this.calendar.recalculate();
        this.dates.forEach(day => {
            this.calendar.setDay(day.date, new CellData(day.date, day.payload, day.selected, day.disabled));
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    cellClicked(data) {
        data.selected = !data.selected;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getPayload(date) {
        /** @type {?} */
        const cellData = this.dates.find(d => d.date === date.date);
        return cellData ? cellData.payload : undefined;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    dateIncluded(date) {
        return this.dates.some(d => d.date === date);
    }
    /**
     * @return {?}
     */
    singleSelection() {
        this.selection.setStrategy(new SingleSelectionStrategy());
    }
    /**
     * @return {?}
     */
    rangeSelection() {
        this.selection.setStrategy(new RangeSelectionStrategy());
    }
    /**
     * @return {?}
     */
    pickSelection() {
        this.selection.setStrategy(new PickSelectionStrategy());
    }
    /**
     * @param {?} monthIndex
     * @return {?}
     */
    getMonthContext(monthIndex) {
        return (/** @type {?} */ ({
            index: monthIndex,
            calendar: this.calendar,
            selection: this.selection,
            config: this.config,
            monthSelection: monthIndex === 0 ? this.selection.calendarMonthView.from : this.selection.calendarMonthView.to
        }));
    }
}
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'trb-calendar',
                template: "<ng-container *ngIf=\"monthTemplate || calendarMonth else defaultMonths\">\n    <ng-container *ngTemplateOutlet=\"monthTemplate || calendarMonth; context: { $implicit : getMonthContext(0) }\">\n    </ng-container>\n\n    <ng-container *ngIf=\"selection.calendarMonthView.needTwoMonthView && calendar.config.month.showTwoCalendarIfNeed\">\n      <ng-container *ngTemplateOutlet=\"monthTemplate || calendarMonth; context: { $implicit : getMonthContext(1) }\">\n      </ng-container>\n    </ng-container>\n</ng-container>\n\n<ng-template #defaultMonths>\n    <trb-calendar-month [context]=\"getMonthContext(0)\">\n    </trb-calendar-month>\n\n    <trb-calendar-month *ngIf=\"selection.calendarMonthView.needTwoMonthView && calendar.config.month.showTwoCalendarIfNeed\"\n        [context]=\"getMonthContext(1)\">\n    </trb-calendar-month>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["*{font-family:sans-serif;color:#333;font-size:14px}.price{color:green;font-size:10px}.trb-calendar-arrow{border:solid #666;border-width:0 2px 2px 0;display:inline-block;padding:4px}.trb-calendar-arrow.trb-calendar-arrow-right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.trb-calendar-arrow.trb-calendar-arrow-left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.clickeable{cursor:pointer}.trb-calendar{display:flex;flex-wrap:wrap}.trb-calendar-month{margin:0 10px}@media screen and (max-width:600px){.trb-calendar-month{margin:auto;padding-top:24px}}.trb-calendar-header{height:16px}.trb-calendar-header .trb-calendar-header-buttons{padding:0 12px}.trb-calendar-row{display:flex}.trb-calendar-day-labels{padding:4px 0;font-size:12px}.trb-calendar-day-labels .day-label{flex:1;position:relative;text-align:center;padding:8px 0}.trb-calendar-cell{font-family:ProximaNova,sans-serif;position:relative;min-width:38px;min-height:38px;text-align:center;display:block;line-height:30px;align-items:center}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay{background:#e4e7e7;width:100%;height:100%;top:0;left:0;position:absolute;opacity:.1}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay:hover{background:#666;cursor:pointer}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month){background-color:#17a45f}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .label,.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .my-price{color:#fff}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-from{border-top-left-radius:4px;border-bottom-left-radius:4px}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-to{border-top-right-radius:4px;border-bottom-right-radius:4px}.trb-calendar-cell.trb-calendar-cell-past .label{color:rgba(0,0,0,.1)}.trb-calendar-cell.trb-calendar-cell-in-range:not(.trb-calendar-cell-outside-month){background-color:#d3ecd3}.trb-calendar-cell.trb-calendar-cell-disabled{background-color:#ccc;cursor:not-allowed}.trb-calendar-cell.trb-calendar-cell-disabled .label{color:rgba(0,0,0,.1)}", ""]
            }] }
];
CalendarComponent.propDecorators = {
    dates: [{ type: Input }],
    config: [{ type: Input }],
    selectionChange: [{ type: Output }],
    monthSelectionChange: [{ type: Output }],
    monthTemplate: [{ type: Input }],
    calendarMonth: [{ type: ContentChild, args: [CalendarMonthDirective, { read: TemplateRef },] }],
    classes: [{ type: HostBinding, args: ['class',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarHeaderComponent {
    constructor() {
        this.monthSelections = [];
        this.showTwoMonths = false;
        this.monthIndex = 0;
        this.linkedMonths = true;
    }
    /**
     * @return {?}
     */
    get classes() {
        return `${this.context.stylePrefix}-calendar-header`;
    }
    /**
     * @return {?}
     */
    get buttonClasses() {
        return `${this.classes}-buttons`;
    }
    /**
     * @return {?}
     */
    showPastMonth() {
        return this.context.pastMonths || !this.isCurrentMonth();
    }
    /**
     * @return {?}
     */
    isCurrentMonth() {
        /** @type {?} */
        const today = new Date();
        return getMonth(today) === this.context.monthSelections[this.context.monthIndex].month
            && getYear(today) === this.context.monthSelections[this.context.monthIndex].year;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    minusYear(index) {
        if (this.linkedMonths) {
            this.monthSelections.forEach(monthSelection => monthSelection.minusYear());
        }
        else {
            this.monthSelections[index].minusYear();
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    minusMonth(index) {
        if (this.linkedMonths) {
            this.monthSelections.forEach(monthSelection => monthSelection.minusMonth());
        }
        else {
            this.monthSelections[index].minusMonth();
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    addYear(index) {
        if (this.linkedMonths) {
            this.monthSelections.forEach(monthSelection => monthSelection.addYear());
        }
        else {
            this.monthSelections[index].addYear();
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    addMonth(index) {
        if (this.linkedMonths) {
            this.monthSelections.forEach(monthSelection => monthSelection.addMonth());
        }
        else {
            this.monthSelections[index].addMonth();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const contextChange = changes['context'];
        if (contextChange) {
            /** @type {?} */
            const context = this.context;
            this.linkedMonths = context.linkedMonths;
            this.monthIndex = context.monthIndex;
            this.monthSelections = context.monthSelections;
            this.showTwoMonths = context.showTwoMonths;
            this.monthLabels = context.monthLabels;
        }
    }
}
CalendarHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'trb-calendar-header',
                template: "<trb-calendar-header-buttons\n    [class]=\"buttonClasses\"\n    type=\"back\"\n    *ngIf=\"!showTwoMonths || monthIndex === 0 || !linkedMonths\"\n    (monthClick)=\"minusMonth(0)\"\n    (yearClick)=\"minusYear(0)\"\n    [stylePrefix]=\"context.stylePrefix\"\n    [showChangeMonthButton]=\"context.showChangeMonthButton && showPastMonth()\"\n    [showChangeYearButton]=\"context.showChangeYearButton\">\n</trb-calendar-header-buttons>\n\n<span class=\"filler\"></span>\n\n<span class=\"label\" *ngIf=\"monthSelections && monthSelections.length\">\n    {{ monthSelections[monthIndex].labelWithConfig(monthLabels) }}\n</span>\n\n<span class=\"filler\"></span>\n\n<trb-calendar-header-buttons\n    [class]=\"buttonClasses\"\n    *ngIf=\"!showTwoMonths || monthIndex === 1  || !linkedMonths\"\n    type=\"forward\"\n    (monthClick)=\"addMonth(0)\"\n    (yearClick)=\"addYear(0)\"\n    [stylePrefix]=\"context.stylePrefix\"\n    [showChangeMonthButton]=\"context.showChangeMonthButton\"\n    [showChangeYearButton]=\"context.showChangeYearButton\">\n</trb-calendar-header-buttons>\n",
                styles: [":host{position:relative;width:100%;display:flex}.filler{flex:1 1 auto}.label{position:absolute;left:50%;flex:0 1 auto;-webkit-transform:translateX(-50%);transform:translateX(-50%)}"]
            }] }
];
CalendarHeaderComponent.propDecorators = {
    context: [{ type: Input }],
    monthSelections: [{ type: Input }],
    showTwoMonths: [{ type: Input }],
    monthIndex: [{ type: Input }],
    linkedMonths: [{ type: Input }],
    monthLabels: [{ type: Input }],
    classes: [{ type: HostBinding, args: ['class',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class CellContext extends CellData {
    /**
     * @param {?} date
     * @param {?} payload
     * @param {?=} selected
     * @param {?=} disabled
     */
    constructor(date, payload, selected, disabled) {
        super(date, payload, selected, disabled);
    }
    /**
     * @template T
     * @param {?} cellData
     * @param {?} fields
     * @return {?}
     */
    static from(cellData, fields) {
        /** @type {?} */
        const context = new CellContext(cellData.date, cellData.payload, cellData.selected, cellData.disabled);
        Object.keys(fields).forEach(key => {
            context[key] = fields[key];
        });
        return context;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarHeaderDirective {
    /**
     * @param {?} template
     * @param {?} viewContainer
     */
    constructor(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
}
CalendarHeaderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[trbCalendarHeader]'
            },] }
];
/** @nocollapse */
CalendarHeaderDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarMonthComponent {
    /**
     * @param {?} breakpointObserver
     */
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
    }
    /**
     * @return {?}
     */
    get classes() {
        return `${this.config.stylePrefix}-calendar-month`;
    }
    /**
     * @param {?} day
     * @return {?}
     */
    getCellData(day) {
        return CellContext.from(day, {
            selection: this.selection,
            monthSelection: this.monthSelection,
            hideDaysOutsideMonth: this.calendar.config.month.hideDaysOutsideMonth,
            stylePrefix: this.config.stylePrefix,
            filterDates: this.config.filterDates
        });
    }
    /**
     * @return {?}
     */
    isMobile() {
        return this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait);
    }
    /**
     * @return {?}
     */
    getHeaderData() {
        /** @type {?} */
        const config = (/** @type {?} */ ({
            monthLabels: this.config.month.monthLabels,
            monthIndex: this.index,
            pastMonths: this.config.header.pastMonths,
            showTwoMonths: this.selection['calendarMonthView'].needTwoMonthView && this.calendar.config.month['showTwoCalendarIfNeed'],
            linkedMonths: this.config.header.linkedMonths,
            monthSelections: [this.selection.calendarMonthView.from, this.selection.calendarMonthView.to],
            stylePrefix: this.config.stylePrefix,
            showChangeMonthButton: this.config.month.showChangeMonthButton,
            showChangeYearButton: this.config.month.showChangeYearButton
        }));
        if (this.isMobile()) {
            config.showTwoMonths = this.index === 0 ? false : true;
            if (this.index === 1) {
                config.showChangeYearButton = false;
                config.showChangeMonthButton = false;
            }
        }
        return config;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const contextChange = changes['context'];
        if (contextChange) {
            this.calendar = this.context.calendar;
            this.index = this.context.index;
            this.selection = this.context.selection;
            this.monthSelection = this.context.monthSelection;
            this.config = this.context.config;
        }
        this.dayLabelsRowClass = {};
        this.rowClass = {};
        this.dayLabelsRowClass[`${this.config.stylePrefix}-calendar-row`] = true;
        this.dayLabelsRowClass[`${this.config.stylePrefix}-calendar-day-labels`] = true;
        this.rowClass[`${this.config.stylePrefix}-calendar-row`] = true;
    }
}
CalendarMonthComponent.decorators = [
    { type: Component, args: [{
                selector: 'trb-calendar-month',
                template: "<ng-container *ngIf=\"calendarHeader else defaultHeader\">\n  <ng-container *ngTemplateOutlet=\"calendarHeader.template; context: { $implicit: getHeaderData()}\">\n  </ng-container>\n</ng-container>\n\n<ng-template #defaultHeader>\n  <trb-calendar-header [context]=\"getHeaderData()\">\n  </trb-calendar-header>\n</ng-template>\n\n\n<ng-container *ngIf=\"calendar.getYear(monthSelection.year).months[monthSelection.month].getCalendarView() as calendarView\">\n  <div [ngClass]=\"dayLabelsRowClass\">\n    <trb-calendar-day-header-cell class=\"day-label\" *ngFor=\"let day of [0,1,2,3,4,5,6]\" [day]=\"day\" [dayLabels]=\"config.month.dayLabels\"\n      [dayLength]=\"config.month.dayLength\">\n    </trb-calendar-day-header-cell>\n  </div>\n\n  <div [ngClass]=\"rowClass\" *ngFor=\"let week of calendarView; index as i\">\n\n    <ng-container *ngFor=\"let day of week\">\n\n      <ng-container *ngIf=\"calendarCell else defaultCell\">\n        <ng-container *ngTemplateOutlet=\"calendarCell.template; context: { $implicit: getCellData(day) }\">\n        </ng-container>\n      </ng-container>\n\n      <ng-template #defaultCell>\n        <trb-calendar-cell [context]=\"getCellData(day)\"></trb-calendar-cell>\n      </ng-template>\n\n    </ng-container>\n  </div>\n</ng-container>\n",
                styles: ["*{font-family:sans-serif;color:#333;font-size:14px}.price{color:green;font-size:10px}.trb-calendar-arrow{border:solid #666;border-width:0 2px 2px 0;display:inline-block;padding:4px}.trb-calendar-arrow.trb-calendar-arrow-right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.trb-calendar-arrow.trb-calendar-arrow-left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.clickeable{cursor:pointer}.trb-calendar{display:flex;flex-wrap:wrap}.trb-calendar-month{margin:0 10px}@media screen and (max-width:600px){.trb-calendar-month{margin:auto;padding-top:24px}}.trb-calendar-header{height:16px}.trb-calendar-header .trb-calendar-header-buttons{padding:0 12px}.trb-calendar-row{display:flex}.trb-calendar-day-labels{padding:4px 0;font-size:12px}.trb-calendar-day-labels .day-label{flex:1;position:relative;text-align:center;padding:8px 0}.trb-calendar-cell{font-family:ProximaNova,sans-serif;position:relative;min-width:38px;min-height:38px;text-align:center;display:block;line-height:30px;align-items:center}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay{background:#e4e7e7;width:100%;height:100%;top:0;left:0;position:absolute;opacity:.1}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay:hover{background:#666;cursor:pointer}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month){background-color:#17a45f}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .label,.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .my-price{color:#fff}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-from{border-top-left-radius:4px;border-bottom-left-radius:4px}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-to{border-top-right-radius:4px;border-bottom-right-radius:4px}.trb-calendar-cell.trb-calendar-cell-past .label{color:rgba(0,0,0,.1)}.trb-calendar-cell.trb-calendar-cell-in-range:not(.trb-calendar-cell-outside-month){background-color:#d3ecd3}.trb-calendar-cell.trb-calendar-cell-disabled{background-color:#ccc;cursor:not-allowed}.trb-calendar-cell.trb-calendar-cell-disabled .label{color:rgba(0,0,0,.1)}", ""]
            }] }
];
/** @nocollapse */
CalendarMonthComponent.ctorParameters = () => [
    { type: BreakpointObserver }
];
CalendarMonthComponent.propDecorators = {
    classes: [{ type: HostBinding, args: ['class',] }],
    context: [{ type: Input }],
    calendar: [{ type: Input }],
    index: [{ type: Input }],
    selection: [{ type: Input }],
    monthSelection: [{ type: Input }],
    config: [{ type: Input }],
    calendarCell: [{ type: ContentChild, args: [CalendarCellDirective,] }],
    calendarHeader: [{ type: ContentChild, args: [CalendarHeaderDirective,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarCellComponent {
    constructor() {
        this.styles = {};
    }
    /**
     * @return {?}
     */
    get classes() {
        return Object.keys(this.styles).filter(key => this.styles[key]).join(' ');
    }
    /**
     * @return {?}
     */
    get selection() {
        return this.context.selection;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.context) {
            /** @type {?} */
            const today = new Date();
            /** @type {?} */
            const isToday = this.context.date === format(new Date(), 'YYYY-MM-DD');
            this.dateStatus = {
                'selected': this.isSelected(),
                'from': this.selection.from() === this.context.date,
                'to': this.selection.to() === this.context.date,
                'in-range': this.isInRange() || this.isSelected(),
                'past': compareDesc(parse(this.context.date), today) > 0 && !isToday,
                'outside-month': getMonth(this.context.date) !== this.context.monthSelection.month,
                'today': isToday,
                'has-payload': this.context.payload !== undefined,
                'host': true,
                'selection-simple': this.context.selection.name === 'simple',
                'selection-range': this.context.selection.name === 'range',
                'selection-pick': this.context.selection.name === 'pick',
                'disabled': this.context.disabled || (this.context.filterDates && this.context.filterDates(parse(this.context.date))),
            };
            /** @type {?} */
            const prefix = this.context.stylePrefix;
            this.styles[`${prefix}-calendar-cell`] = true;
            Object.keys(this.dateStatus).forEach(key => {
                this.styles[`${prefix}-calendar-cell-${key}`] = this.dateStatus[key];
            });
        }
    }
    /**
     * @return {?}
     */
    isSelected() {
        return this.selection.isSelected(this.context.date);
    }
    /**
     * @return {?}
     */
    isInRange() {
        return this.selection.isInRange(this.context.date);
    }
    /**
     * @return {?}
     */
    onClick() {
        if (!this.context.disabled) {
            this.selection.change(this.context.date);
        }
    }
}
CalendarCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'trb-calendar-cell',
                template: "<ng-container *ngIf=\"!context.hideDaysOutsideMonth || !dateStatus['outside-month']\">\n    <div class=\"overlay\" (click)=\"onClick()\"></div>\n    <span class=\"label\">{{ context.dayOfMonth }}</span>\n    <ng-content></ng-content>\n</ng-container>"
            }] }
];
CalendarCellComponent.propDecorators = {
    context: [{ type: Input }],
    classes: [{ type: HostBinding, args: ['class',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DayHeaderCellComponent {
    constructor() {
        this.dayLength = 3;
        this.daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    }
}
DayHeaderCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'trb-calendar-day-header-cell',
                template: `
    <ng-container *ngIf="dayLabels.length > 0 else defaultDays">
        {{ dayLabels[day] | slice:0:dayLength }}
    </ng-container>

    <ng-template #defaultDays>
        {{ daysInWeek[day] | slice:0:dayLength }}
    </ng-template>
    `
            }] }
];
DayHeaderCellComponent.propDecorators = {
    day: [{ type: Input }],
    dayLabels: [{ type: Input }],
    dayLength: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarHeaderButtonsComponent {
    constructor() {
        this.showChangeYearButton = true;
        this.showChangeMonthButton = true;
        this.yearClick = new EventEmitter();
        this.monthClick = new EventEmitter();
        this.leftArrowClasses = '';
        this.rightArrowClasses = '';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const styleChange = changes['stylePrefix'];
        if (styleChange) {
            this.leftArrowClasses = `${this.stylePrefix}-calendar-arrow ${this.stylePrefix}-calendar-arrow-left`;
            this.rightArrowClasses = `${this.stylePrefix}-calendar-arrow ${this.stylePrefix}-calendar-arrow-right`;
        }
    }
}
CalendarHeaderButtonsComponent.decorators = [
    { type: Component, args: [{
                selector: 'trb-calendar-header-buttons',
                template: "<ng-container *ngIf=\"type === 'back'\">\n\n    <span (click)=\"yearClick.emit()\" *ngIf=\"showChangeYearButton\">\n        <i [class]=\"leftArrowClasses\"></i>\n        <i [class]=\"leftArrowClasses\"></i>\n    </span>\n\n    <span (click)=\"monthClick.emit()\" *ngIf=\"showChangeMonthButton\">\n        <i [class]=\"leftArrowClasses\"></i>\n    </span>\n</ng-container>\n\n<ng-container *ngIf=\"type === 'forward'\">\n    <span (click)=\"monthClick.emit()\" *ngIf=\"showChangeMonthButton\">\n        <i [class]=\"rightArrowClasses\"></i>\n    </span>\n\n    <span (click)=\"yearClick.emit()\" *ngIf=\"showChangeYearButton\">\n        <i [class]=\"rightArrowClasses\"></i>\n        <i [class]=\"rightArrowClasses\"></i>\n    </span>\n</ng-container>\n",
                styles: [`
    :host span {
        cursor: pointer;
        padding: 0 6px;
    }
    `]
            }] }
];
CalendarHeaderButtonsComponent.propDecorators = {
    type: [{ type: Input }],
    showChangeYearButton: [{ type: Input }],
    showChangeMonthButton: [{ type: Input }],
    stylePrefix: [{ type: Input }],
    yearClick: [{ type: Output }],
    monthClick: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class PickerOverlayRef extends Subject {
    // private subject:Subject<any> = new Subject()
    /**
     * @param {?} overlayRef
     */
    constructor(overlayRef) {
        super();
        this.overlayRef = overlayRef;
    }
    /**
     * @param {?=} closeData
     * @return {?}
     */
    close(closeData) {
        if (closeData) {
            this.next(closeData);
        }
        this.overlayRef.dispose();
        return this.asObservable();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PICKER_DATA = new InjectionToken('PICKER_DATA');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_CONFIG = {
    hasBackdrop: true,
    backdropClass: 'dark-backdrop',
    panelClass: 'tm-file-preview-dialog-panel',
    data: null
};
class PickerService {
    // Inject overlay service
    /**
     * @param {?} injector
     * @param {?} overlay
     * @param {?} breakpointObserver
     */
    constructor(injector, overlay, breakpointObserver) {
        this.injector = injector;
        this.overlay = overlay;
        this.breakpointObserver = breakpointObserver;
    }
    /**
     * @template T
     * @param {?=} config
     * @param {?=} elementRef
     * @param {?=} component
     * @param {?=} templateRef
     * @return {?}
     */
    open(config = {}, elementRef, component, templateRef) {
        // Override default configuration
        /** @type {?} */
        const dialogConfig = Object.assign({}, DEFAULT_CONFIG, config);
        /** @type {?} */
        const overlayRef = this.createOverlay(dialogConfig, elementRef);
        /** @type {?} */
        const pickerRef = new PickerOverlayRef(overlayRef);
        /** @type {?} */
        const overlayComponent = this.attachDialogContainer(overlayRef, dialogConfig, pickerRef, component, templateRef);
        pickerRef.instance = overlayComponent;
        overlayRef.backdropClick().subscribe(_ => pickerRef.close());
        return pickerRef;
    }
    /**
     * @private
     * @param {?} config
     * @param {?=} elementRef
     * @return {?}
     */
    createOverlay(config, elementRef) {
        // Returns an OverlayConfig
        /** @type {?} */
        const overlayConfig = this.getOverlayConfig(config, elementRef);
        // Returns an OverlayRef
        return this.overlay.create(overlayConfig);
    }
    /**
     * @private
     * @param {?} config
     * @param {?=} elementRef
     * @return {?}
     */
    getOverlayConfig(config, elementRef) {
        /** @type {?} */
        const smallDevice = this.breakpointObserver.isMatched([
            // Breakpoints.Small,
            // Breakpoints.Handset,
            Breakpoints.HandsetPortrait
        ]);
        /** @type {?} */
        let positionStrategy;
        if (smallDevice) {
            positionStrategy = this.overlay.position()
                .global()
                .centerHorizontally()
                .top('10px');
            // .centerVertically();
        }
        else {
            positionStrategy = this.overlay.position().flexibleConnectedTo(elementRef)
                .withPositions([
                { originX: 'start', overlayX: 'start', originY: 'bottom', overlayY: 'top' },
                { originX: 'start', overlayX: 'start', originY: 'top', overlayY: 'bottom' }
            ]);
        }
        // .height('100%')
        // .width('100%');
        /** @type {?} */
        const overlayConfig = new OverlayConfig({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy
        });
        return overlayConfig;
    }
    /**
     * @private
     * @template T
     * @param {?} overlayRef
     * @param {?} config
     * @param {?} dialogRef
     * @param {?} component
     * @param {?=} templateRef
     * @return {?}
     */
    attachDialogContainer(overlayRef, config, dialogRef, component, templateRef) {
        /** @type {?} */
        const injector = this.createInjector(config, dialogRef, templateRef);
        /** @type {?} */
        const containerPortal = new ComponentPortal(component, null, injector);
        /** @type {?} */
        const containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    }
    /**
     * @private
     * @param {?} config
     * @param {?} dialogRef
     * @param {?=} template
     * @return {?}
     */
    createInjector(config, dialogRef, template = null) {
        // Instantiate new WeakMap for our custom injection tokens
        /** @type {?} */
        const injectionTokens = new WeakMap();
        // Set custom injection tokens
        injectionTokens.set(PickerOverlayRef, dialogRef);
        injectionTokens.set(PICKER_DATA, config.data);
        injectionTokens.set(TemplateRef, template);
        // Instantiate new PortalInjector
        return new PortalInjector(this.injector, injectionTokens);
    }
}
PickerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PickerService.ctorParameters = () => [
    { type: Injector },
    { type: Overlay },
    { type: BreakpointObserver }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PickerModule {
}
PickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    OverlayModule,
                    LayoutModule,
                ],
                providers: [
                    PickerService
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatepickerComponent {
    /**
     * @param {?} pickerRef
     * @param {?} data
     * @param {?} calendarRef
     */
    constructor(pickerRef, data, calendarRef) {
        this.pickerRef = pickerRef;
        this.data = data;
        this.calendarRef = calendarRef;
        this.preventClose = false;
        this.data.calendarConfig = Object.assign(DEFAULT_DATEPICKER_DATA.calendarConfig, data.calendarConfig);
        this.data.stylePrefix = data.stylePrefix || DEFAULT_DATEPICKER_DATA.stylePrefix;
        this.data.dates = data.dates || DEFAULT_DATEPICKER_DATA.dates;
        this.data.datesSelected = data.datesSelected || DEFAULT_DATEPICKER_DATA.datesSelected;
    }
    /**
     * @return {?}
     */
    get classes() {
        return `${this.data.stylePrefix}-datepicker`;
    }
    /**
     * @param {?} selection
     * @return {?}
     */
    onSelectionChange(selection) {
        if (!this.preventClose) {
            switch (this.calendar.config.selection) {
                case 'simple':
                    setTimeout(() => {
                        this.pickerRef.close({
                            form: selection.from(),
                            to: undefined,
                            selectedDates: selection.selectedDates,
                        });
                    }, 600);
                    break;
                case 'range':
                    if (selection.to()) {
                        setTimeout(() => {
                            this.pickerRef.close({
                                from: selection.from(),
                                to: selection.to(),
                                selectedDates: selection.selectedDates
                            });
                        }, 600);
                    }
                    break;
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.preventClose = true;
        this.data.datesSelected.forEach(date => this.calendar.selection.change(date));
        if (this.data.datesSelected.length) {
            setTimeout(() => {
                /** @type {?} */
                const from = parse(this.data.datesSelected[0]);
                this.calendar.selection.calendarMonthView.from.setMonthAndYear(from);
                this.calendar.selection.calendarMonthView.to.setMonthAndYear(addMonths(from, 1));
            });
        }
        setTimeout(() => {
            this.preventClose = false;
        });
    }
}
DatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'trb-datepicker',
                template: "    <trb-calendar\n        #calendar\n        [dates]=\"data.dates\"\n        [config]=\"data.calendarConfig\" \n        (selectionChange)=\"onSelectionChange($event)\" \n        [monthTemplate]=\"calendarRef\">\n    </trb-calendar>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".trb-datepicker{margin-top:8px;padding:16px;border-radius:2px;background:#fff;box-shadow:0 2px 8px 0 #ccc}"]
            }] }
];
/** @nocollapse */
DatepickerComponent.ctorParameters = () => [
    { type: PickerOverlayRef },
    { type: undefined, decorators: [{ type: Inject, args: [PICKER_DATA,] }] },
    { type: TemplateRef }
];
DatepickerComponent.propDecorators = {
    calendar: [{ type: ViewChild, args: [CalendarComponent,] }],
    classes: [{ type: HostBinding, args: ['class',] }]
};
/** @type {?} */
const DEFAULT_DATEPICKER_DATA = {
    calendarConfig: CalendarViewConfig.from({
        selection: 'range'
    }),
    datesSelected: [],
    dates: [],
    stylePrefix: 'trb'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PickerToggleDirective {
    /**
     * @param {?} elementRef
     * @param {?} pickerService
     */
    constructor(elementRef, pickerService) {
        this.elementRef = elementRef;
        this.pickerService = pickerService;
        this.config = DEFAULT_DATEPICKER_DATA;
        this.selectionChange = new EventEmitter();
        this.monthSelectionChange = new EventEmitter();
        this.close = new EventEmitter();
    }
    /**
     * @return {?}
     */
    toggle() {
        /** @type {?} */
        const ref = this.pickerService.open({
            data: this.config
        }, this.elementRef, DatepickerComponent, this.monthRef);
        this.datepicker = ref.instance;
        ref.instance.calendar.selectionChange.subscribe(data => this.selectionChange.emit(data));
        ref.instance.calendar.monthSelectionChange.subscribe(data => this.monthSelectionChange.emit(data));
        // this.monthSelectionChange = ref.instance.calendar.monthSelectionChange
        ref.subscribe(result => {
            this.close.emit(result);
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const datesChange = changes['dates'];
        if (datesChange && this.dates && this.datepicker) {
            this.datepicker.data.dates = this.dates;
        }
    }
}
PickerToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[trb-datepicker-toggle]'
            },] }
];
/** @nocollapse */
PickerToggleDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: PickerService }
];
PickerToggleDirective.propDecorators = {
    monthRef: [{ type: Input, args: ['trb-datepicker-toggle',] }],
    config: [{ type: Input }],
    dates: [{ type: Input }],
    selectionChange: [{ type: Output }],
    monthSelectionChange: [{ type: Output }],
    close: [{ type: Output }],
    toggle: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TrbCalendarModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DayAdapter extends Day {
    // private _day: Day
    /**
     * @param {?} _date
     */
    constructor(_date) {
        super(parse(_date));
        // this._day = new Day(parse(_date))
    }
    /**
     * @return {?}
     */
    get date() {
        return this.date;
    }
    /**
     * @return {?}
     */
    get dayOfMonth() {
        return this.dayOfMonth;
    }
    /**
     * @return {?}
     */
    get dayOfWeek() {
        return this.dayOfWeek;
    }
    /**
     * @return {?}
     */
    get name() {
        return this.name;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TrbCalendarModule, CalendarComponent, CalendarCellComponent, DayHeaderCellComponent, DatepickerComponent, DEFAULT_DATEPICKER_DATA, CalendarHeaderComponent, CalendarHeaderButtonsComponent, CalendarMonthComponent, CalendarCellDirective, CalendarHeaderDirective, CalendarMonthDirective, PickerToggleDirective, MonthSelection, CalendarMonthSelection, CalendarViewConfig, ICalendarViewConfig, CalendarHeaderConfig$1 as CalendarHeaderConfig, MonthViewConfig, CalendarSelection, SelectionType, SelectionStatus, PickSelectionStrategy, RangeSelectionStrategy, SingleSelectionStrategy, CellData, DayAdapter, PickerService, CalendarViewConfig as ɵd, CalendarHeaderConfig$1 as ɵh, MonthViewConfig as ɵi, CalendarConfig as ɵe, CalendarHeaderConfig as ɵf, MonthConfig as ɵg, Day as ɵj, PICKER_DATA as ɵa, PickerOverlayRef as ɵb, PickerModule as ɵc };

//# sourceMappingURL=trb-calendar.js.map