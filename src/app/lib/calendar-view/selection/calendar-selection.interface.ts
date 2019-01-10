export interface ICalendarSelection {
    // strategy:ISelectionStrategy
    selectedDates: string[]
    status: SelectionStatus
    isInRange(date:string):boolean
    isSelected(date:string):boolean
    from():string
    to():string
}

export enum SelectionType {
    single = 'single',
    range = 'range',
    multirange = 'multirange',
    pick = 'pick'
}

export enum SelectionStatus {
    unset = 'unset',
    startRangeSelected = 'startRangeSelected',
    rangeSelected = 'rangeSelected',
    picked = 'picked',
}