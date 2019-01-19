import { CommonModule } from '@angular/common';
import { Overlay, OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { __extends, __assign } from 'tslib';
import { Subject } from 'rxjs';
import { format, getMonth, getYear, addMonths, addYears, subMonths, subYears, setMonth, setYear, addHours, startOfMonth, getDaysInMonth, addDays, compareDesc, parse, getDate, getDay, isWeekend } from 'date-fns';
import { Directive, TemplateRef, ViewContainerRef, Input, Output, HostListener, EventEmitter, Component, ContentChild, HostBinding, ViewEncapsulation, InjectionToken, Injectable, Injector, NgModule, Inject, ViewChild, ElementRef } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Day = /** @class */ (function () {
    function Day(_date, disabled) {
        if (disabled === void 0) { disabled = false; }
        this._date = _date;
        this.disabled = disabled;
        this.date = format(_date, 'YYYY-MM-DD'),
            this.name = format(_date, 'dddd'),
            this.dayOfMonth = getDate(_date);
        this.dayOfWeek = getDay(_date);
    }
    Object.defineProperty(Day.prototype, "isWeekend", {
        get: /**
         * @return {?}
         */
        function () {
            return isWeekend(this._date);
        },
        enumerable: true,
        configurable: true
    });
    return Day;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var /**
 * @template T
 */
CellData = /** @class */ (function (_super) {
    __extends(CellData, _super);
    function CellData(date, payload, selected, disabled) {
        if (selected === void 0) { selected = false; }
        if (disabled === void 0) { disabled = false; }
        var _this = _super.call(this, parse(date)) || this;
        _this.payload = payload;
        _this.selected = selected;
        _this.disabled = disabled;
        return _this;
    }
    return CellData;
}(Day));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarCellDirective = /** @class */ (function () {
    function CalendarCellDirective(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
        this.click = new EventEmitter();
    }
    Object.defineProperty(CalendarCellDirective.prototype, "trbCalendarCell", {
        set: /**
         * @param {?} content
         * @return {?}
         */
        function (content) {
            if (content) {
                /** @type {?} */
                var ref = this.viewContainer
                    .createEmbeddedView(this.template, { $implicit: content });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarCellDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.click.emit(event);
    };
    CalendarCellDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[trbCalendarCell]'
                },] }
    ];
    /** @nocollapse */
    CalendarCellDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    CalendarCellDirective.propDecorators = {
        trbCalendarCell: [{ type: Input }],
        click: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return CalendarCellDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Year = /** @class */ (function () {
    function Year(value, calendar) {
        this.value = value;
        this.calendar = calendar;
        this.months = [];
        /** @type {?} */
        var date = addHours(new Date(value + "-01-01"), 12);
        this.months.push(this.calendar.factory.createMonth(date, this, calendar));
        for (var m = 0; m < 12; m++) {
            date = startOfMonth(addMonths(date, 1));
            this.months.push(this.calendar.factory.createMonth(date, this, calendar));
        }
    }
    /**
     * @param {?} currentMonth
     * @return {?}
     */
    Year.prototype.previousMonth = /**
     * @param {?} currentMonth
     * @return {?}
     */
    function (currentMonth) {
        /** @type {?} */
        var previousMonth;
        if (currentMonth.ofYear > 0) {
            previousMonth = currentMonth.year.months[currentMonth.ofYear - 1];
        }
        else {
            previousMonth = this.calendar.getPreviousMonth(currentMonth);
        }
        return previousMonth;
    };
    /**
     * @param {?} currentMonth
     * @return {?}
     */
    Year.prototype.nextMonth = /**
     * @param {?} currentMonth
     * @return {?}
     */
    function (currentMonth) {
        /** @type {?} */
        var nextMonth;
        if (currentMonth.ofYear < 11) {
            nextMonth = currentMonth.year.months[currentMonth.ofYear + 1];
        }
        else {
            nextMonth = this.calendar.getNextMonth(currentMonth);
        }
        return nextMonth;
    };
    /**
     * @param {?} month
     * @return {?}
     */
    Year.prototype.getMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        return this.months[month];
    };
    return Year;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Month = /** @class */ (function () {
    function Month(date, year, calendar) {
        this.date = date;
        this.year = year;
        this.calendar = calendar;
        this.days = [];
        this.ofYear = getMonth(date);
        this.name = format(date, 'MMMM');
        this.days.push(calendar.factory.createDay(date));
        for (var d = 0; d < getDaysInMonth(date) - 1; d++) {
            date = addDays(date, 1);
            this.days.push(calendar.factory.createDay(date));
        }
    }
    /**
     * @param {?} day
     * @return {?}
     */
    Month.prototype.setDay = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        /** @type {?} */
        var dayIndex = this.days.findIndex(function (d) { return d.date === day.date; });
        if (dayIndex >= 0) {
            this.days.splice(dayIndex, 1, day);
        }
    };
    /**
     * @return {?}
     */
    Month.prototype.getCalendarView = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var days = this.days.slice();
        /** @type {?} */
        var firstDayOfMonth = this.days[0].dayOfWeek;
        /** @type {?} */
        var monthConfig = this.calendar.config.month;
        if (firstDayOfMonth !== monthConfig.firstDay) {
            /** @type {?} */
            var previousMonth = this.year.previousMonth(this);
            /** @type {?} */
            var previousDays = previousMonth.days.slice(previousMonth.days.length - (((firstDayOfMonth - monthConfig.firstDay) + 7) % 7), previousMonth.days.length);
            days = previousDays.concat(days);
        }
        if (days.length < Month.DAYS_IN_CALENDAR_VIEW) {
            /** @type {?} */
            var nextMonth = this.year.nextMonth(this);
            /** @type {?} */
            var forwardDays = nextMonth.days.slice(0, Month.DAYS_IN_CALENDAR_VIEW - days.length);
            days = days.concat(forwardDays);
        }
        else if (days.length > Month.DAYS_IN_CALENDAR_VIEW) {
            /** @type {?} */
            var nextMonth = this.year.nextMonth(this);
            /** @type {?} */
            var forwardDays = nextMonth.days.slice(0, (Month.DAYS_IN_CALENDAR_VIEW + 7) - days.length);
            days = days.concat(forwardDays);
        }
        return days.reduce(function (acc, curr, i) {
            if (curr.dayOfWeek === monthConfig.firstDay || i === 0) {
                acc.push([]);
            }
            if ((!monthConfig.hideWeekends || !curr.isWeekend) && acc[acc.length - 1]) {
                acc[acc.length - 1].push(curr);
            }
            return acc;
        }, new Array());
    };
    Month.DAYS_IN_CALENDAR_VIEW = 35;
    return Month;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarDefaultFactory = /** @class */ (function () {
    function CalendarDefaultFactory() {
    }
    /**
     * @param {?} value
     * @param {?} calendar
     * @return {?}
     */
    CalendarDefaultFactory.prototype.createYear = /**
     * @param {?} value
     * @param {?} calendar
     * @return {?}
     */
    function (value, calendar) {
        return new Year(value, calendar);
    };
    /**
     * @param {?} date
     * @param {?} year
     * @param {?} calendar
     * @return {?}
     */
    CalendarDefaultFactory.prototype.createMonth = /**
     * @param {?} date
     * @param {?} year
     * @param {?} calendar
     * @return {?}
     */
    function (date, year, calendar) {
        return new Month(date, year, calendar);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarDefaultFactory.prototype.createDay = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return new Day(date);
    };
    return CalendarDefaultFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarHeaderConfig = /** @class */ (function () {
    function CalendarHeaderConfig(linkedMonths) {
        if (linkedMonths === void 0) { linkedMonths = true; }
        this.linkedMonths = linkedMonths;
    }
    return CalendarHeaderConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MonthConfig = /** @class */ (function () {
    function MonthConfig(hideWeekends, hideDaysOutsideMonth, firstDay, showTwoCalendarIfNeed) {
        if (hideWeekends === void 0) { hideWeekends = false; }
        if (hideDaysOutsideMonth === void 0) { hideDaysOutsideMonth = true; }
        if (firstDay === void 0) { firstDay = 0; }
        if (showTwoCalendarIfNeed === void 0) { showTwoCalendarIfNeed = false; }
        this.hideWeekends = hideWeekends;
        this.hideDaysOutsideMonth = hideDaysOutsideMonth;
        this.firstDay = firstDay;
        this.showTwoCalendarIfNeed = showTwoCalendarIfNeed;
    }
    return MonthConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarConfig = /** @class */ (function () {
    function CalendarConfig(header, month) {
        if (header === void 0) { header = new CalendarHeaderConfig(); }
        if (month === void 0) { month = new MonthConfig(); }
        this.header = header;
        this.month = month;
    }
    return CalendarConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Calendar = /** @class */ (function () {
    function Calendar(factory, config) {
        if (factory === void 0) { factory = new CalendarDefaultFactory(); }
        if (config === void 0) { config = new CalendarConfig(); }
        this.factory = factory;
        this.config = config;
        this.years = [];
    }
    /**
     * @return {?}
     */
    Calendar.prototype.recalculate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var _years = this.years.slice();
        this.years = [];
        // debugger
        _years.map(function (year) { return _this.getYear(year.value); });
    };
    /**
     * @param {?} payloads
     * @return {?}
     */
    Calendar.prototype.setDaysPayload = /**
     * @param {?} payloads
     * @return {?}
     */
    function (payloads) {
        var _this = this;
        // this.recalculate()
        payloads.forEach(function (payload) { return _this.setDay(payload.date, payload.payload); });
    };
    /**
     * @param {?} dateString
     * @param {?} day
     * @return {?}
     */
    Calendar.prototype.setDay = /**
     * @param {?} dateString
     * @param {?} day
     * @return {?}
     */
    function (dateString, day) {
        /** @type {?} */
        var date = new Date(dateString);
        /** @type {?} */
        var year = getYear(date);
        /** @type {?} */
        var month = getMonth(date);
        /** @type {?} */
        var selectedYear = this.getYear(year);
        /** @type {?} */
        var selectedMonth = selectedYear.getMonth(month);
        selectedMonth.setDay(day);
    };
    /**
     * @param {?} year
     * @return {?}
     */
    Calendar.prototype.getYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var currentYear = this.years.find(function (y) { return y.value === year; });
        if (!currentYear) {
            currentYear = this.factory.createYear(year, this);
            this.years.push(currentYear);
        }
        return currentYear;
    };
    /**
     * @return {?}
     */
    Calendar.prototype.getCurrentYear = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var year = getYear(new Date());
        return this.getYear(year);
    };
    /**
     * @param {?} currentMonth
     * @return {?}
     */
    Calendar.prototype.getPreviousMonth = /**
     * @param {?} currentMonth
     * @return {?}
     */
    function (currentMonth) {
        /** @type {?} */
        var previousYear = this.getYear(currentMonth.year.value - 1);
        /** @type {?} */
        var previousMonth = previousYear.months[11];
        return previousMonth;
    };
    /**
     * @param {?} currentMonth
     * @return {?}
     */
    Calendar.prototype.getNextMonth = /**
     * @param {?} currentMonth
     * @return {?}
     */
    function (currentMonth) {
        /** @type {?} */
        var nextYear = this.getYear(currentMonth.year.value + 1);
        /** @type {?} */
        var nextMonth = nextYear.months[0];
        return nextMonth;
    };
    return Calendar;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var SelectionType = {
    single: 'single',
    range: 'range',
    multirange: 'multirange',
    pick: 'pick',
};
/** @enum {string} */
var SelectionStatus = {
    unset: 'unset',
    startRangeSelected: 'startRangeSelected',
    rangeSelected: 'rangeSelected',
    picked: 'picked',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MonthSelection = /** @class */ (function () {
    function MonthSelection(date, year, month, selectionChange) {
        this.date = date;
        this.year = year;
        this.month = month;
        this.selectionChange = selectionChange;
    }
    Object.defineProperty(MonthSelection.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return format(this.date, 'MMMM YYYY');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} months
     * @return {?}
     */
    MonthSelection.prototype.labelWithConfig = /**
     * @param {?} months
     * @return {?}
     */
    function (months) {
        return months ? months[getMonth(this.date)] + " " + getYear(this.date) : this.label;
    };
    /**
     * @return {?}
     */
    MonthSelection.prototype.addMonth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previousDate = this.date;
        this.date = addMonths(this.date, 1);
        this.update(previousDate);
    };
    /**
     * @return {?}
     */
    MonthSelection.prototype.addYear = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previousDate = this.date;
        this.date = addYears(this.date, 1);
        this.update(previousDate);
    };
    /**
     * @return {?}
     */
    MonthSelection.prototype.minusMonth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previousDate = this.date;
        this.date = subMonths(this.date, 1);
        this.update(previousDate);
    };
    /**
     * @return {?}
     */
    MonthSelection.prototype.minusYear = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previousDate = this.date;
        this.date = subYears(this.date, 1);
        this.update(previousDate);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MonthSelection.prototype.setMonthAndYear = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var month = getMonth(date);
        /** @type {?} */
        var year = getYear(date);
        /** @type {?} */
        var previousDate = this.date;
        this.date = setMonth(this.date, month);
        this.date = setYear(this.date, year);
        this.update(previousDate);
    };
    /**
     * @private
     * @param {?} previous
     * @return {?}
     */
    MonthSelection.prototype.update = /**
     * @private
     * @param {?} previous
     * @return {?}
     */
    function (previous) {
        this.year = getYear(this.date);
        this.month = getMonth(this.date);
        this.selectionChange.emit({
            previous: previous, current: this.date
        });
    };
    return MonthSelection;
}());
var CalendarMonthSelection = /** @class */ (function () {
    function CalendarMonthSelection(needTwoMonthView, from, to, _monthSelectionChange) {
        this.needTwoMonthView = needTwoMonthView;
        this.from = from;
        this.to = to;
        this._monthSelectionChange = _monthSelectionChange;
        /** @type {?} */
        var date = new Date();
        if (!from) {
            this.from = new MonthSelection(date, getYear(date), getMonth(date), this.monthSelectionChange);
        }
        if (!to) {
            /** @type {?} */
            var nextMonth = addMonths(date, 1);
            this.to = new MonthSelection(nextMonth, getYear(nextMonth), getMonth(nextMonth), this.monthSelectionChange);
        }
    }
    Object.defineProperty(CalendarMonthSelection.prototype, "monthSelectionChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._monthSelectionChange;
        },
        set: /**
         * @param {?} monthSelectionChange
         * @return {?}
         */
        function (monthSelectionChange) {
            this._monthSelectionChange = monthSelectionChange;
            this.from.selectionChange = monthSelectionChange;
            this.to.selectionChange = monthSelectionChange;
        },
        enumerable: true,
        configurable: true
    });
    return CalendarMonthSelection;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SingleSelectionStrategy = /** @class */ (function () {
    function SingleSelectionStrategy() {
        this.calendarMonthView = new CalendarMonthSelection(false);
        this.name = 'simple';
    }
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    SingleSelectionStrategy.prototype.isInRange = /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    function (date, selection) {
        return false;
    };
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    SingleSelectionStrategy.prototype.isSelected = /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    function (date, selection) {
        return selection.selectedDates.some(function (d) { return d === date; });
    };
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    SingleSelectionStrategy.prototype.change = /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    function (date, selection) {
        if (selection.selectedDates.length === 0 || selection.selectedDates[0] !== date) {
            selection.selectedDates = [];
            selection.selectedDates = [date];
        }
        else {
            selection.selectedDates = [];
        }
    };
    return SingleSelectionStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarSelection = /** @class */ (function () {
    function CalendarSelection(strategy, selectedDates, status, selectionChange, monthSelectionChange) {
        if (strategy === void 0) { strategy = new SingleSelectionStrategy(); }
        if (selectedDates === void 0) { selectedDates = []; }
        if (status === void 0) { status = SelectionStatus.unset; }
        if (selectionChange === void 0) { selectionChange = new EventEmitter(); }
        if (monthSelectionChange === void 0) { monthSelectionChange = new EventEmitter(); }
        this.strategy = strategy;
        this.selectedDates = selectedDates;
        this.status = status;
        this.selectionChange = selectionChange;
        this.monthSelectionChange = monthSelectionChange;
        this.strategy.calendarMonthView.monthSelectionChange = this.monthSelectionChange;
    }
    Object.defineProperty(CalendarSelection.prototype, "calendarMonthView", {
        get: /**
         * @return {?}
         */
        function () {
            return this.strategy.calendarMonthView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarSelection.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return this.strategy.name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} strategy
     * @return {?}
     */
    CalendarSelection.prototype.setStrategy = /**
     * @param {?} strategy
     * @return {?}
     */
    function (strategy) {
        this.strategy = strategy;
        this.selectedDates = [];
        this.strategy.calendarMonthView.monthSelectionChange = this.monthSelectionChange;
    };
    /**
     * @return {?}
     */
    CalendarSelection.prototype.getStrategy = /**
     * @return {?}
     */
    function () {
        return this.strategy;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarSelection.prototype.isInRange = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.strategy.isInRange(date, this);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarSelection.prototype.isSelected = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.strategy.isSelected(date, this);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarSelection.prototype.change = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.strategy.change(date, this);
        this.selectionChange.emit(this);
    };
    // selectedMonthChange(){
    //     this.monthSelectionChange.emit(this)
    // }
    // selectedMonthChange(){
    //     this.monthSelectionChange.emit(this)
    // }
    /**
     * @return {?}
     */
    CalendarSelection.prototype.from = 
    // selectedMonthChange(){
    //     this.monthSelectionChange.emit(this)
    // }
    /**
     * @return {?}
     */
    function () {
        return this.selectedDates.length
            ? this.selectedDates[0]
            : '';
    };
    /**
     * @return {?}
     */
    CalendarSelection.prototype.to = /**
     * @return {?}
     */
    function () {
        return this.selectedDates.length > 1
            ? this.selectedDates[this.selectedDates.length - 1]
            : '';
    };
    return CalendarSelection;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RangeSelectionStrategy = /** @class */ (function () {
    function RangeSelectionStrategy() {
        this.calendarMonthView = new CalendarMonthSelection(true);
        this.name = 'range';
    }
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    RangeSelectionStrategy.prototype.isInRange = /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    function (date, selection) {
        /** @type {?} */
        var index = selection.selectedDates.findIndex(function (d) { return d === date; });
        return index > 0 && index < selection.selectedDates.length - 1;
    };
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    RangeSelectionStrategy.prototype.isSelected = /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    function (date, selection) {
        /** @type {?} */
        var index = selection.selectedDates.findIndex(function (d) { return d === date; });
        return selection.selectedDates.length && (index === 0 || index === selection.selectedDates.length - 1);
    };
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    RangeSelectionStrategy.prototype.change = /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    function (date, selection) {
        if (selection.status === SelectionStatus.unset) {
            selection.selectedDates.push(date);
            selection.status = SelectionStatus.startRangeSelected;
        }
        else if (selection.status === SelectionStatus.startRangeSelected) {
            /** @type {?} */
            var start = parse(selection.selectedDates[0]);
            /** @type {?} */
            var end = parse(date);
            /** @type {?} */
            var diff = compareDesc(start, end);
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
    };
    return RangeSelectionStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PickSelectionStrategy = /** @class */ (function () {
    function PickSelectionStrategy() {
        this.calendarMonthView = new CalendarMonthSelection(true);
        this.name = 'pick';
    }
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    PickSelectionStrategy.prototype.isInRange = /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    function (date, selection) {
        return false;
    };
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    PickSelectionStrategy.prototype.isSelected = /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    function (date, selection) {
        return selection.selectedDates.some(function (d) { return d === date; });
    };
    /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    PickSelectionStrategy.prototype.change = /**
     * @param {?} date
     * @param {?} selection
     * @return {?}
     */
    function (date, selection) {
        /** @type {?} */
        var index = selection.selectedDates.findIndex(function (d) { return d === date; });
        if (index >= 0) {
            selection.selectedDates.splice(index, 1);
        }
        else {
            selection.selectedDates.push(date);
        }
    };
    return PickSelectionStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarHeaderConfig$1 = /** @class */ (function () {
    function CalendarHeaderConfig(linkedMonths, pastMonths) {
        if (linkedMonths === void 0) { linkedMonths = true; }
        if (pastMonths === void 0) { pastMonths = true; }
        this.linkedMonths = linkedMonths;
        this.pastMonths = pastMonths;
    }
    return CalendarHeaderConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MonthViewConfig = /** @class */ (function () {
    function MonthViewConfig(hideWeekends, hideDaysOutsideMonth, showTwoCalendarIfNeed, firstDay, monthLabels, dayLabels, dayLength, showChangeYearButton, showChangeMonthButton) {
        if (hideWeekends === void 0) { hideWeekends = false; }
        if (hideDaysOutsideMonth === void 0) { hideDaysOutsideMonth = true; }
        if (showTwoCalendarIfNeed === void 0) { showTwoCalendarIfNeed = false; }
        if (firstDay === void 0) { firstDay = 0; }
        if (dayLabels === void 0) { dayLabels = []; }
        if (dayLength === void 0) { dayLength = 3; }
        if (showChangeYearButton === void 0) { showChangeYearButton = true; }
        if (showChangeMonthButton === void 0) { showChangeMonthButton = true; }
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
    return MonthViewConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarViewConfig = /** @class */ (function (_super) {
    __extends(CalendarViewConfig, _super);
    function CalendarViewConfig(header, month, selection, stylePrefix, filterDates) {
        if (header === void 0) { header = new CalendarHeaderConfig$1(); }
        if (month === void 0) { month = new MonthViewConfig(); }
        if (selection === void 0) { selection = 'simple'; }
        if (stylePrefix === void 0) { stylePrefix = 'trb'; }
        var _this = _super.call(this, header, month) || this;
        _this.header = header;
        _this.month = month;
        _this.selection = selection;
        _this.stylePrefix = stylePrefix;
        _this.filterDates = filterDates;
        return _this;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    CalendarViewConfig.from = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var conf = this.copyObject(config, new CalendarViewConfig());
        return conf;
    };
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    CalendarViewConfig.copyObject = /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    function (from, to) {
        var _this = this;
        to = Object.assign({}, to);
        Object.keys(from).forEach(function (key) {
            _this.assign(from[key], to, key);
        });
        return to;
    };
    /**
     * @private
     * @param {?} value
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    CalendarViewConfig.assign = /**
     * @private
     * @param {?} value
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    function (value, target, key) {
        if (value instanceof Array || value instanceof Function) {
            target[key] = value;
        }
        else if (value instanceof Object) {
            target[key] = this.copyObject(value, target[key]);
        }
        else {
            target[key] = value;
        }
    };
    return CalendarViewConfig;
}(CalendarConfig));
var ICalendarViewConfig = /** @class */ (function () {
    function ICalendarViewConfig() {
    }
    return ICalendarViewConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarViewFactory = /** @class */ (function (_super) {
    __extends(CalendarViewFactory, _super);
    function CalendarViewFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} date
     * @param {?=} selected
     * @param {?=} disabled
     * @return {?}
     */
    CalendarViewFactory.prototype.createDay = /**
     * @param {?} date
     * @param {?=} selected
     * @param {?=} disabled
     * @return {?}
     */
    function (date, selected, disabled) {
        return new CellData(format(date), selected, disabled);
    };
    return CalendarViewFactory;
}(CalendarDefaultFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarMonthDirective = /** @class */ (function () {
    function CalendarMonthDirective(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    CalendarMonthDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[trbCalendarMonth]'
                },] }
    ];
    /** @nocollapse */
    CalendarMonthDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    return CalendarMonthDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
        this.selection = new CalendarSelection();
        this.dates = [];
        this.config = new CalendarViewConfig();
        this.selectionChange = this.selection.selectionChange;
        this.monthSelectionChange = this.selection.monthSelectionChange;
    }
    Object.defineProperty(CalendarComponent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.stylePrefix + "-calendar";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.calendar = new Calendar(new CalendarViewFactory(), this.config);
        this.updateSelection();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        /** @type {?} */
        var configChange = changes['config'];
        if (this.calendar) {
            this.calendar.recalculate();
            this.dates.forEach(function (day) {
                _this.calendar.setDay(day.date, new CellData(day.date, day.payload, day.selected, day.disabled));
            });
            if (configChange) {
                this.calendar.config = this.config;
                this.updateSelection();
            }
        }
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.updateSelection = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        this.dates.forEach(function (day) {
            _this.calendar.setDay(day.date, new CellData(day.date, day.payload, day.selected, day.disabled));
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    CalendarComponent.prototype.cellClicked = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        data.selected = !data.selected;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarComponent.prototype.getPayload = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var cellData = this.dates.find(function (d) { return d.date === date.date; });
        return cellData ? cellData.payload : undefined;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CalendarComponent.prototype.dateIncluded = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.dates.some(function (d) { return d.date === date; });
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.singleSelection = /**
     * @return {?}
     */
    function () {
        this.selection.setStrategy(new SingleSelectionStrategy());
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.rangeSelection = /**
     * @return {?}
     */
    function () {
        this.selection.setStrategy(new RangeSelectionStrategy());
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.pickSelection = /**
     * @return {?}
     */
    function () {
        this.selection.setStrategy(new PickSelectionStrategy());
    };
    /**
     * @param {?} monthIndex
     * @return {?}
     */
    CalendarComponent.prototype.getMonthContext = /**
     * @param {?} monthIndex
     * @return {?}
     */
    function (monthIndex) {
        return (/** @type {?} */ ({
            index: monthIndex,
            calendar: this.calendar,
            selection: this.selection,
            config: this.config,
            monthSelection: monthIndex === 0 ? this.selection.calendarMonthView.from : this.selection.calendarMonthView.to
        }));
    };
    CalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'trb-calendar',
                    template: "<ng-container *ngIf=\"monthTemplate || calendarMonth else defaultMonths\">\n    <ng-container *ngTemplateOutlet=\"monthTemplate || calendarMonth; context: { $implicit : getMonthContext(0) }\">\n    </ng-container>\n\n    <ng-container *ngTemplateOutlet=\"monthTemplate || calendarMonth; context: { $implicit : getMonthContext(1) }\">\n    </ng-container>\n</ng-container>\n\n<ng-template #defaultMonths>\n    <trb-calendar-month [context]=\"getMonthContext(0)\">\n    </trb-calendar-month>\n\n    <trb-calendar-month *ngIf=\"selection.calendarMonthView.needTwoMonthView && calendar.config.month.showTwoCalendarIfNeed\"\n        [context]=\"getMonthContext(1)\">\n    </trb-calendar-month>\n</ng-template>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["*{font-family:sans-serif;color:#333;font-size:14px}.price{color:green;font-size:10px}.trb-calendar-arrow{border:solid #666;border-width:0 2px 2px 0;display:inline-block;padding:4px}.trb-calendar-arrow.trb-calendar-arrow-right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.trb-calendar-arrow.trb-calendar-arrow-left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.clickeable{cursor:pointer}.trb-calendar{display:flex;flex-wrap:wrap}.trb-calendar-month{margin:0 10px}.trb-calendar-header{height:16px}.trb-calendar-header .trb-calendar-header-buttons{padding:0 12px}.trb-calendar-row{display:flex}.trb-calendar-day-labels{padding:4px 0;font-size:12px}.trb-calendar-day-labels .day-label{flex:1;position:relative;text-align:center;padding:8px 0}.trb-calendar-cell{font-family:ProximaNova,sans-serif;position:relative;min-width:38px;min-height:38px;text-align:center;display:block;line-height:30px;align-items:center}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay{background:#e4e7e7;width:100%;height:100%;top:0;left:0;position:absolute;opacity:.1}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay:hover{background:#666;cursor:pointer}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month){background-color:#17a45f}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .label,.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .my-price{color:#fff}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-from{border-top-left-radius:4px;border-bottom-left-radius:4px}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-to{border-top-right-radius:4px;border-bottom-right-radius:4px}.trb-calendar-cell.trb-calendar-cell-past .label{color:rgba(0,0,0,.1)}.trb-calendar-cell.trb-calendar-cell-in-range:not(.trb-calendar-cell-outside-month){background-color:#d3ecd3}.trb-calendar-cell.trb-calendar-cell-disabled{background-color:#ccc;cursor:not-allowed}.trb-calendar-cell.trb-calendar-cell-disabled .label{color:rgba(0,0,0,.1)}", ""]
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
    return CalendarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarHeaderComponent = /** @class */ (function () {
    function CalendarHeaderComponent() {
        this.monthSelections = [];
        this.showTwoMonths = false;
        this.monthIndex = 0;
        this.linkedMonths = true;
    }
    Object.defineProperty(CalendarHeaderComponent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            return this.context.stylePrefix + "-calendar-header";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarHeaderComponent.prototype, "buttonClasses", {
        get: /**
         * @return {?}
         */
        function () {
            return this.classes + "-buttons";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.showPastMonth = /**
     * @return {?}
     */
    function () {
        return this.context.pastMonths || !this.isCurrentMonth();
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.isCurrentMonth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var today = new Date();
        return getMonth(today) === this.context.monthSelections[this.context.monthIndex].month
            && getYear(today) === this.context.monthSelections[this.context.monthIndex].year;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CalendarHeaderComponent.prototype.minusYear = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.linkedMonths) {
            this.monthSelections.forEach(function (monthSelection) { return monthSelection.minusYear(); });
        }
        else {
            this.monthSelections[index].minusYear();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CalendarHeaderComponent.prototype.minusMonth = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.linkedMonths) {
            this.monthSelections.forEach(function (monthSelection) { return monthSelection.minusMonth(); });
        }
        else {
            this.monthSelections[index].minusMonth();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CalendarHeaderComponent.prototype.addYear = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.linkedMonths) {
            this.monthSelections.forEach(function (monthSelection) { return monthSelection.addYear(); });
        }
        else {
            this.monthSelections[index].addYear();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CalendarHeaderComponent.prototype.addMonth = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.linkedMonths) {
            this.monthSelections.forEach(function (monthSelection) { return monthSelection.addMonth(); });
        }
        else {
            this.monthSelections[index].addMonth();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarHeaderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var contextChange = changes['context'];
        if (contextChange) {
            /** @type {?} */
            var context = this.context;
            this.linkedMonths = context.linkedMonths;
            this.monthIndex = context.monthIndex;
            this.monthSelections = context.monthSelections;
            this.showTwoMonths = context.showTwoMonths;
            this.monthLabels = context.monthLabels;
        }
    };
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
    return CalendarHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var /**
 * @template T
 */
CellContext = /** @class */ (function (_super) {
    __extends(CellContext, _super);
    function CellContext(date, payload, selected, disabled) {
        return _super.call(this, date, payload, selected, disabled) || this;
    }
    /**
     * @template T
     * @param {?} cellData
     * @param {?} fields
     * @return {?}
     */
    CellContext.from = /**
     * @template T
     * @param {?} cellData
     * @param {?} fields
     * @return {?}
     */
    function (cellData, fields) {
        /** @type {?} */
        var context = new CellContext(cellData.date, cellData.payload, cellData.selected, cellData.disabled);
        Object.keys(fields).forEach(function (key) {
            context[key] = fields[key];
        });
        return context;
    };
    return CellContext;
}(CellData));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarHeaderDirective = /** @class */ (function () {
    function CalendarHeaderDirective(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    CalendarHeaderDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[trbCalendarHeader]'
                },] }
    ];
    /** @nocollapse */
    CalendarHeaderDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    return CalendarHeaderDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarMonthComponent = /** @class */ (function () {
    function CalendarMonthComponent() {
    }
    Object.defineProperty(CalendarMonthComponent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.stylePrefix + "-calendar-month";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} day
     * @return {?}
     */
    CalendarMonthComponent.prototype.getCellData = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        return CellContext.from(day, {
            selection: this.selection,
            monthSelection: this.monthSelection,
            hideDaysOutsideMonth: this.calendar.config.month.hideDaysOutsideMonth,
            stylePrefix: this.config.stylePrefix,
            filterDates: this.config.filterDates
        });
    };
    /**
     * @return {?}
     */
    CalendarMonthComponent.prototype.getHeaderData = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ ({
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
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarMonthComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var contextChange = changes['context'];
        if (contextChange) {
            this.calendar = this.context.calendar;
            this.index = this.context.index;
            this.selection = this.context.selection;
            this.monthSelection = this.context.monthSelection;
            this.config = this.context.config;
        }
        this.dayLabelsRowClass = {};
        this.rowClass = {};
        this.dayLabelsRowClass[this.config.stylePrefix + "-calendar-row"] = true;
        this.dayLabelsRowClass[this.config.stylePrefix + "-calendar-day-labels"] = true;
        this.rowClass[this.config.stylePrefix + "-calendar-row"] = true;
    };
    CalendarMonthComponent.decorators = [
        { type: Component, args: [{
                    selector: 'trb-calendar-month',
                    template: "\n<ng-container *ngIf=\"calendarHeader else defaultHeader\">\n    <ng-container *ngTemplateOutlet=\"calendarHeader.template; context: { $implicit: getHeaderData()}\">\n    </ng-container>\n</ng-container>\n\n<ng-template #defaultHeader>\n    <trb-calendar-header [context]=\"getHeaderData()\">\n    </trb-calendar-header>\n</ng-template>\n\n<ng-container *ngIf=\"calendar.getYear(monthSelection.year).months[monthSelection.month].getCalendarView() as calendarView\">\n    <div [ngClass]=\"dayLabelsRowClass\">\n        <trb-calendar-day-header-cell class=\"day-label\" *ngFor=\"let day of [0,1,2,3,4,5,6]\" [day]=\"day\" [dayLabels]=\"config.month.dayLabels\"\n            [dayLength]=\"config.month.dayLength\">\n        </trb-calendar-day-header-cell>\n    </div>\n\n    <div [ngClass]=\"rowClass\" *ngFor=\"let week of calendarView; index as i\">\n\n        <ng-container *ngFor=\"let day of week\">\n\n            <ng-container *ngIf=\"calendarCell else defaultCell\">\n                <ng-container *ngTemplateOutlet=\"calendarCell.template; context: { $implicit: getCellData(day) }\">\n                </ng-container>\n            </ng-container>\n\n            <ng-template #defaultCell>\n                <trb-calendar-cell [context]=\"getCellData(day)\"></trb-calendar-cell>\n            </ng-template>\n\n        </ng-container>\n    </div>\n</ng-container>",
                    styles: ["*{font-family:sans-serif;color:#333;font-size:14px}.price{color:green;font-size:10px}.trb-calendar-arrow{border:solid #666;border-width:0 2px 2px 0;display:inline-block;padding:4px}.trb-calendar-arrow.trb-calendar-arrow-right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.trb-calendar-arrow.trb-calendar-arrow-left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.clickeable{cursor:pointer}.trb-calendar{display:flex;flex-wrap:wrap}.trb-calendar-month{margin:0 10px}.trb-calendar-header{height:16px}.trb-calendar-header .trb-calendar-header-buttons{padding:0 12px}.trb-calendar-row{display:flex}.trb-calendar-day-labels{padding:4px 0;font-size:12px}.trb-calendar-day-labels .day-label{flex:1;position:relative;text-align:center;padding:8px 0}.trb-calendar-cell{font-family:ProximaNova,sans-serif;position:relative;min-width:38px;min-height:38px;text-align:center;display:block;line-height:30px;align-items:center}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay{background:#e4e7e7;width:100%;height:100%;top:0;left:0;position:absolute;opacity:.1}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled) .overlay:hover{background:#666;cursor:pointer}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month){background-color:#17a45f}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .label,.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month) .my-price{color:#fff}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-from{border-top-left-radius:4px;border-bottom-left-radius:4px}.trb-calendar-cell:not(.trb-calendar-cell-past):not(.trb-calendar-cell-disabled).trb-calendar-cell-selected:not(.trb-calendar-cell-outside-month).trb-calendar-cell-selection-range.trb-calendar-cell-to{border-top-right-radius:4px;border-bottom-right-radius:4px}.trb-calendar-cell.trb-calendar-cell-past .label{color:rgba(0,0,0,.1)}.trb-calendar-cell.trb-calendar-cell-in-range:not(.trb-calendar-cell-outside-month){background-color:#d3ecd3}.trb-calendar-cell.trb-calendar-cell-disabled{background-color:#ccc;cursor:not-allowed}.trb-calendar-cell.trb-calendar-cell-disabled .label{color:rgba(0,0,0,.1)}", ""]
                }] }
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
    return CalendarMonthComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarCellComponent = /** @class */ (function () {
    function CalendarCellComponent() {
        this.styles = {};
    }
    Object.defineProperty(CalendarCellComponent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return Object.keys(this.styles).filter(function (key) { return _this.styles[key]; }).join(' ');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarCellComponent.prototype, "selection", {
        get: /**
         * @return {?}
         */
        function () {
            return this.context.selection;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalendarCellComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.context) {
            /** @type {?} */
            var today = new Date();
            /** @type {?} */
            var isToday = this.context.date === format(new Date(), 'YYYY-MM-DD');
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
            var prefix_1 = this.context.stylePrefix;
            this.styles[prefix_1 + "-calendar-cell"] = true;
            Object.keys(this.dateStatus).forEach(function (key) {
                _this.styles[prefix_1 + "-calendar-cell-" + key] = _this.dateStatus[key];
            });
        }
    };
    /**
     * @return {?}
     */
    CalendarCellComponent.prototype.isSelected = /**
     * @return {?}
     */
    function () {
        return this.selection.isSelected(this.context.date);
    };
    /**
     * @return {?}
     */
    CalendarCellComponent.prototype.isInRange = /**
     * @return {?}
     */
    function () {
        return this.selection.isInRange(this.context.date);
    };
    /**
     * @return {?}
     */
    CalendarCellComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (!this.context.disabled) {
            this.selection.change(this.context.date);
        }
    };
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
    return CalendarCellComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CalendarHeaderButtonsComponent = /** @class */ (function () {
    function CalendarHeaderButtonsComponent() {
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
    CalendarHeaderButtonsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var styleChange = changes['stylePrefix'];
        if (styleChange) {
            this.leftArrowClasses = this.stylePrefix + "-calendar-arrow " + this.stylePrefix + "-calendar-arrow-left";
            this.rightArrowClasses = this.stylePrefix + "-calendar-arrow " + this.stylePrefix + "-calendar-arrow-right";
        }
    };
    CalendarHeaderButtonsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'trb-calendar-header-buttons',
                    template: "<ng-container *ngIf=\"type === 'back'\">\n\n    <span (click)=\"yearClick.emit()\" *ngIf=\"showChangeYearButton\">\n        <i [class]=\"leftArrowClasses\"></i>\n        <i [class]=\"leftArrowClasses\"></i>\n    </span>\n\n    <span (click)=\"monthClick.emit()\" *ngIf=\"showChangeMonthButton\">\n        <i [class]=\"leftArrowClasses\"></i>\n    </span>\n</ng-container>\n\n<ng-container *ngIf=\"type === 'forward'\">\n    <span (click)=\"monthClick.emit()\" *ngIf=\"showChangeMonthButton\">\n        <i [class]=\"rightArrowClasses\"></i>\n    </span>\n\n    <span (click)=\"yearClick.emit()\" *ngIf=\"showChangeYearButton\">\n        <i [class]=\"rightArrowClasses\"></i>\n        <i [class]=\"rightArrowClasses\"></i>\n    </span>\n</ng-container>\n",
                    styles: ["\n    :host span {\n        cursor: pointer;\n        padding: 0 6px;\n    }\n    "]
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
    return CalendarHeaderButtonsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
PickerOverlayRef = /** @class */ (function (_super) {
    __extends(PickerOverlayRef, _super);
    // private subject:Subject<any> = new Subject()
    function PickerOverlayRef(overlayRef) {
        var _this = _super.call(this) || this;
        _this.overlayRef = overlayRef;
        return _this;
    }
    /**
     * @param {?=} closeData
     * @return {?}
     */
    PickerOverlayRef.prototype.close = /**
     * @param {?=} closeData
     * @return {?}
     */
    function (closeData) {
        if (closeData) {
            this.next(closeData);
        }
        this.overlayRef.dispose();
        return this.asObservable();
    };
    return PickerOverlayRef;
}(Subject));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PICKER_DATA = new InjectionToken('PICKER_DATA');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_CONFIG = {
    hasBackdrop: true,
    backdropClass: 'dark-backdrop',
    panelClass: 'tm-file-preview-dialog-panel',
    data: null
};
var PickerService = /** @class */ (function () {
    // Inject overlay service
    function PickerService(injector, overlay) {
        this.injector = injector;
        this.overlay = overlay;
    }
    /**
     * @template T
     * @param {?=} config
     * @param {?=} elementRef
     * @param {?=} component
     * @param {?=} templateRef
     * @return {?}
     */
    PickerService.prototype.open = /**
     * @template T
     * @param {?=} config
     * @param {?=} elementRef
     * @param {?=} component
     * @param {?=} templateRef
     * @return {?}
     */
    function (config, elementRef, component, templateRef) {
        if (config === void 0) { config = {}; }
        // Override default configuration
        /** @type {?} */
        var dialogConfig = __assign({}, DEFAULT_CONFIG, config);
        /** @type {?} */
        var overlayRef = this.createOverlay(dialogConfig, elementRef);
        /** @type {?} */
        var pickerRef = new PickerOverlayRef(overlayRef);
        /** @type {?} */
        var overlayComponent = this.attachDialogContainer(overlayRef, dialogConfig, pickerRef, component, templateRef);
        pickerRef.instance = overlayComponent;
        overlayRef.backdropClick().subscribe(function (_) { return pickerRef.close(); });
        return pickerRef;
    };
    /**
     * @private
     * @param {?} config
     * @param {?=} elementRef
     * @return {?}
     */
    PickerService.prototype.createOverlay = /**
     * @private
     * @param {?} config
     * @param {?=} elementRef
     * @return {?}
     */
    function (config, elementRef) {
        // Returns an OverlayConfig
        /** @type {?} */
        var overlayConfig = this.getOverlayConfig(config, elementRef);
        // Returns an OverlayRef
        return this.overlay.create(overlayConfig);
    };
    /**
     * @private
     * @param {?} config
     * @param {?=} elementRef
     * @return {?}
     */
    PickerService.prototype.getOverlayConfig = /**
     * @private
     * @param {?} config
     * @param {?=} elementRef
     * @return {?}
     */
    function (config, elementRef) {
        /** @type {?} */
        var positionStrategy = this.overlay.position()
            .flexibleConnectedTo(elementRef)
            .withPositions([
            { originX: 'start', overlayX: 'start', originY: 'bottom', overlayY: 'top' }
        ]);
        // .global()
        // .centerHorizontally()
        // .centerVertically();
        /** @type {?} */
        var overlayConfig = new OverlayConfig({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: positionStrategy
        });
        return overlayConfig;
    };
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
    PickerService.prototype.attachDialogContainer = /**
     * @private
     * @template T
     * @param {?} overlayRef
     * @param {?} config
     * @param {?} dialogRef
     * @param {?} component
     * @param {?=} templateRef
     * @return {?}
     */
    function (overlayRef, config, dialogRef, component, templateRef) {
        /** @type {?} */
        var injector = this.createInjector(config, dialogRef, templateRef);
        /** @type {?} */
        var containerPortal = new ComponentPortal(component, null, injector);
        /** @type {?} */
        var containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    };
    /**
     * @private
     * @param {?} config
     * @param {?} dialogRef
     * @param {?=} template
     * @return {?}
     */
    PickerService.prototype.createInjector = /**
     * @private
     * @param {?} config
     * @param {?} dialogRef
     * @param {?=} template
     * @return {?}
     */
    function (config, dialogRef, template) {
        if (template === void 0) { template = null; }
        // Instantiate new WeakMap for our custom injection tokens
        /** @type {?} */
        var injectionTokens = new WeakMap();
        // Set custom injection tokens
        injectionTokens.set(PickerOverlayRef, dialogRef);
        injectionTokens.set(PICKER_DATA, config.data);
        injectionTokens.set(TemplateRef, template);
        // Instantiate new PortalInjector
        return new PortalInjector(this.injector, injectionTokens);
    };
    PickerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PickerService.ctorParameters = function () { return [
        { type: Injector },
        { type: Overlay }
    ]; };
    return PickerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PickerModule = /** @class */ (function () {
    function PickerModule() {
    }
    PickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        OverlayModule,
                    ],
                    providers: [
                        PickerService
                    ]
                },] }
    ];
    return PickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent(pickerRef, data, calendarRef) {
        this.pickerRef = pickerRef;
        this.data = data;
        this.calendarRef = calendarRef;
        this.preventClose = false;
        this.data.calendarConfig = Object.assign(DEFAULT_DATEPICKER_DATA.calendarConfig, data.calendarConfig);
        this.data.stylePrefix = data.stylePrefix || DEFAULT_DATEPICKER_DATA.stylePrefix;
        this.data.dates = data.dates || DEFAULT_DATEPICKER_DATA.dates;
        this.data.datesSelected = data.datesSelected || DEFAULT_DATEPICKER_DATA.datesSelected;
    }
    Object.defineProperty(DatepickerComponent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            return this.data.stylePrefix + "-datepicker";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} selection
     * @return {?}
     */
    DatepickerComponent.prototype.onSelectionChange = /**
     * @param {?} selection
     * @return {?}
     */
    function (selection) {
        var _this = this;
        if (!this.preventClose) {
            switch (this.calendar.config.selection) {
                case 'simple':
                    setTimeout(function () {
                        _this.pickerRef.close({
                            form: selection.from(),
                            to: undefined,
                            selectedDates: selection.selectedDates,
                        });
                    }, 600);
                    break;
                case 'range':
                    if (selection.to()) {
                        setTimeout(function () {
                            _this.pickerRef.close({
                                from: selection.from(),
                                to: selection.to(),
                                selectedDates: selection.selectedDates
                            });
                        }, 600);
                    }
                    break;
            }
        }
    };
    /**
     * @return {?}
     */
    DatepickerComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    DatepickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.preventClose = true;
        this.data.datesSelected.forEach(function (date) { return _this.calendar.selection.change(date); });
        if (this.data.datesSelected.length) {
            setTimeout(function () {
                /** @type {?} */
                var from = parse(_this.data.datesSelected[0]);
                _this.calendar.selection.calendarMonthView.from.setMonthAndYear(from);
                _this.calendar.selection.calendarMonthView.to.setMonthAndYear(addMonths(from, 1));
            });
        }
        setTimeout(function () {
            _this.preventClose = false;
        });
    };
    DatepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'trb-datepicker',
                    template: "    <trb-calendar\n        #calendar\n        [dates]=\"data.dates\"\n        [config]=\"data.calendarConfig\" \n        (selectionChange)=\"onSelectionChange($event)\" \n        [monthTemplate]=\"calendarRef\">\n    </trb-calendar>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".trb-datepicker{margin-top:8px;padding:16px;border-radius:2px;background:#fff;box-shadow:0 2px 8px 0 #ccc}"]
                }] }
    ];
    /** @nocollapse */
    DatepickerComponent.ctorParameters = function () { return [
        { type: PickerOverlayRef },
        { type: undefined, decorators: [{ type: Inject, args: [PICKER_DATA,] }] },
        { type: TemplateRef }
    ]; };
    DatepickerComponent.propDecorators = {
        calendar: [{ type: ViewChild, args: [CalendarComponent,] }],
        classes: [{ type: HostBinding, args: ['class',] }]
    };
    return DatepickerComponent;
}());
/** @type {?} */
var DEFAULT_DATEPICKER_DATA = {
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
var PickerToggleDirective = /** @class */ (function () {
    function PickerToggleDirective(elementRef, pickerService) {
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
    PickerToggleDirective.prototype.toggle = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var ref = this.pickerService.open({
            data: this.config
        }, this.elementRef, DatepickerComponent, this.monthRef);
        this.datepicker = ref.instance;
        ref.instance.calendar.selectionChange.subscribe(function (data) { return _this.selectionChange.emit(data); });
        ref.instance.calendar.monthSelectionChange.subscribe(function (data) { return _this.monthSelectionChange.emit(data); });
        // this.monthSelectionChange = ref.instance.calendar.monthSelectionChange
        ref.subscribe(function (result) {
            _this.close.emit(result);
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PickerToggleDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var datesChange = changes['dates'];
        if (datesChange && this.dates && this.datepicker) {
            this.datepicker.data.dates = this.dates;
        }
    };
    PickerToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[trb-datepicker-toggle]'
                },] }
    ];
    /** @nocollapse */
    PickerToggleDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: PickerService }
    ]; };
    PickerToggleDirective.propDecorators = {
        monthRef: [{ type: Input, args: ['trb-datepicker-toggle',] }],
        config: [{ type: Input }],
        dates: [{ type: Input }],
        selectionChange: [{ type: Output }],
        monthSelectionChange: [{ type: Output }],
        close: [{ type: Output }],
        toggle: [{ type: HostListener, args: ['click',] }]
    };
    return PickerToggleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TrbCalendarModule, CalendarComponent, CalendarCellComponent, DayHeaderCellComponent, DatepickerComponent, DEFAULT_DATEPICKER_DATA, CalendarHeaderComponent, CalendarHeaderButtonsComponent, CalendarMonthComponent, CalendarCellDirective, CalendarHeaderDirective, CalendarMonthDirective, PickerToggleDirective, MonthSelection, CalendarMonthSelection, CalendarViewConfig, ICalendarViewConfig, CalendarHeaderConfig$1 as CalendarHeaderConfig, MonthViewConfig, CalendarSelection, SelectionType, SelectionStatus, PickSelectionStrategy, RangeSelectionStrategy, SingleSelectionStrategy, CalendarViewConfig as ɵe, CalendarHeaderConfig$1 as ɵi, MonthViewConfig as ɵj, CalendarConfig as ɵf, CalendarHeaderConfig as ɵg, MonthConfig as ɵh, PICKER_DATA as ɵa, PickerOverlayRef as ɵb, PickerModule as ɵd, PickerService as ɵc };

//# sourceMappingURL=trb-calendar.js.map