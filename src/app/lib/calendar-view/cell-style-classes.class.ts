

export class CellStyleClasses {
    constructor(
        public prefix:string = 'cell',
        public host:string = 'default',
        public cell:CellStatusStyleClasses = new CellStatusStyleClasses(),
        public number:CellStatusStyleClasses = new CellStatusStyleClasses(),
    ){}
}

export interface ICellStyleClasses {
    prefix?:string
    host?:string
    cell?:CellStatusStyleClasses
    number?:CellStatusStyleClasses
}

export class CellStatusStyleClasses {
    'host':string = 'default'
    'selected':string =  'default-selected'
    'in-range':string = 'default-in-range'
    'past':string = 'default-past'
    'outside-month':string = 'default-outside-month'
    'today':string = 'default-today'
}

export interface ICellStatusStyleClasses {
    'host'?:string
    'selected'?:string
    'in-range'?:string
    'past'?:string
    'outside-month'?:string
    'today'?:string
}

