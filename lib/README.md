# Calendar

## Quick Start

```
<trb-calendar></trb-calendar>
```

## Api

|Binding|Name|Type|Description|
|--|--|--|--|
|Input|config|ICalendarViewConfig|The complete configuration for the calendar|
|Input|dates|CellData<T>|A Payloadable data for customizing porposes|
|Output|selectionChange|CalendarSelection|Event fired when a cell selection is changed|
|Output|monthSelectionChange|IMonthChange|Event fired when a month selection is changed|

### ICalendarViewConfig
|Name|Type|Description|
|--|--|--|--|
|header|`ICalendarHeaderConfig`|Configuration for the header|
|month|`IMonthViewConfig`|Configuration for the month|
|selection|`range` `simple` `picked`|Define the selection strategy to use|
|stylePrefix|`string`|overwrite all the style prefix, assigning the new one. Default is `trb`|

### ICalendarHeaderConfig
|Name|Type|Description|Default|
|--|--|--|--|--|
|linkedMonths|`boolean`|When two months are showing, the months must move together|`true`|
|pastMonths|`boolean`|Header allow go to months of past|`true`|

### IMonthViewConfig
|Name|Type|Description|Default|
|--|--|--|--|--|
|hideWeekends|`boolean`|hide the weekend columns|`false`|
|hideDaysOutsideMonth|`boolean`|hide the overflow days, used to complete the 7 x 5 cells|`true`|
|showTwoCalendarIfNeed|`boolean`|show two calendar if the selection is **range** or **picked**|`true`|
|firstDay|`number`|configure the first day used in the calendar, starting in **0 as Sunday**|`0`|
|monthLabels|`string[]`|month label to show in the header|english month labels|
|dayLabels|`string[]`|labels to show in the days row|english day labels|
|dayLength|`number`|number of letters to show in the days row|`3`|
|showChangeYearButton|`boolean`|show the arrow button to change the year in the header|`true`|
|showChangeMonthButton|`boolean`|show the arrow button to change the month in the header|`true`|

### CellData (Input)
As an optional input for the calendar, you can provide a list of `CellData<T>`, each for a specific date (using the `date` field) and with a `disabled` and `payload` optional fields.

> The `payload` is really important if you want to customize the calendar with your business specific data. 

|Name|Type|Description|
|--|--|--|--|
|date|`string`|the current date in `YYYY-MM-DD` format|
|**payload**|`any`|**your specific payload**|
|disabled|`boolean`|the passed in disabled option|

## Customize components

You can customize the inner components of the calendar. To do this you must to provide the template of each component you want to customize.

For each template you must to provide the current context.

```
<trb-calendar
    [dates]="dates"
    [config]="config"
    (selectionChange)="onSelectionChange($event)"
    (monthSelectionChange)="onMonthSelectionChange($event)">
      
      <trb-calendar-month *trbCalendarMonth="let context;" [context]="context">
        <trb-calendar-header 
          *trbCalendarHeader="let context;" 
          [context]="context">
        </trb-calendar-header>

        <trb-calendar-cell 
          *trbCalendarCell="let context;" 
          [context]="context">
          <!-- custom cell html here -->
          <span class="my-price" *ngIf="context.payload">${{ context.payload }}</span>
        </trb-calendar-cell>
      </trb-calendar-month>

  </trb-calendar>
```

### Customize Cell

Continuing the above example, asume you pass in the `dates` input the following array.

```
dates:CellData<any> = [{
  date: '2019-05-05',
  payload: {
    currency : 'USD',
    value: 460
  }
} ... ]
```

The data will be propagated inside the calendar to reach the proper cell (2019-05-05). 

Then you draw the data in the cell as in this line 

```
<span class="my-price" *ngIf="context.payload">${{ context.payload }}</span>
```


#### CellContext
|Name|Type|Description|
|--|--|--|--|
|date|`string`|the current date in `YYYY-MM-DD` format|
|**payload**|`any`|**your specific payload**|
|disabled|`boolean`|the passed in disabled option|
|selection|`ICalendarSelection`|the current selection state in the calendar|
|monthSelection|`MonthSelection`|the current month selection state in the calendar|
|hideDaysOutsideMonth|`boolean`|the configuration to hide the outside months days|






### Date Payload

## Styling

This is the hierachy for the calendar classes:

```
trb-calendar
  trb-calendar-month
    trb-calendar-header
      trb-calendar-header-buttons
        label
    trb-calendar-row trb-calendar-day-labels
      day-label
    trb-calendar-row
      trb-calendar-cell
        overlay
        label
```

Note that you can provide a prefix to overwrite all the `trb` with your own prefix, using `stylePrefix`.

### Style event classes

Each cell receives bunch of event classes depending of their state. 

|Css Class|Event Description|
|-|-|
|selected|the cell is selected|
|from|the cell is selected, and is the first selection in the range|
|to|the cell is selected, and is the last selection in the range|
|in-range|the cell is inside a range selection|
|past|the cell is from past of the current day|
|outside-month|the cell is outside the current calendar month|
|today|the cell is from today|
|has-payload|the cell has any payload|
|selection-simple|the cell selection type is `simple`|
|selection-range|the cell selection type is `range`|
|selection-pick|the cell selection type is `picked`|
|disabled|the cell is mark as disabled|


# Datepicker
