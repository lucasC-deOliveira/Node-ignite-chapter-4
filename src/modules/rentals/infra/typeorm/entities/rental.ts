import { v4 as uuid } from "uuid"


class Rental {
    id: string

    car_id: string;

    user_id: string

    start_date: Date;

    end_date: Date;

    expected_return_date: Date;

    total: number;

    createdAt: Date;

    updatedAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
            this.createdAt = new Date()
        }
    }

}


export {
    Rental
}