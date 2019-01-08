import { isWeekend } from 'date-fns';

export interface IDay {
    date: string
    name: string
    dayOfMonth: number
    dayOfWeek: number
    isWeekend:boolean
}