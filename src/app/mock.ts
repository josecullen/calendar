import { CellDataPayload } from './app.component';

export const mock: CellDataPayload[] = [
    {
        date: '2019-01-01',
        payload: {
            checkIn: true,
            mealplans: [
                {
                    type: 'Breakfast',
                    icon: 'bkf',
                    price: 100
                },
                {
                    type: 'Half Board',
                    icon: 'hbr',
                    price: 120
                },
                {
                    type: 'Full Board',
                    icon: 'fbr',
                    price: 130
                }
            ]
        }
    }
]


class MealPlan {
    constructor(){

    }
}