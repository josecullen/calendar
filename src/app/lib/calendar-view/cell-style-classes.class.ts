

export class CellStyleClasses {
    constructor(
        public prefix:string = 'cell',
        public host:string = 'host',
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
    // 'host':string = 'default'
    'selected':string =  'selected'
    'in-range':string = 'in-range'
    'past':string = 'past'
    'outside-month':string = 'outside-month'
    'today':string = 'today'
    'from':string = 'from'
    'to':string = 'to'
}

export interface ICellStatusStyleClasses {
    'host'?:string
    'selected'?:string
    'in-range'?:string
    'past'?:string
    'outside-month'?:string
    'today'?:string
    'from'?:string
    'to'?:string
}

