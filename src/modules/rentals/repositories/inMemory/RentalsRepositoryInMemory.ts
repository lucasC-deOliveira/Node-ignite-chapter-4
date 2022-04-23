import { ICreateRentalDTO } from "@modules/rentals/dtos/ICreateRentalDTO";
import { Rental } from "@modules/rentals/infra/typeorm/entities/rental";
import { IRentalsRepository } from "../IRentalsRepository";





class RentalsRepositoryInMemory implements IRentalsRepository {
  
    rentals: Rental[] = []

    async findOpenRentalByCar(car_id: string): Promise<Rental> {
        return this.rentals.find(rental => rental.car_id == car_id && !rental.end_date)
    }
    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        return this.rentals.find(rental => rental.user_id == user_id && !rental.end_date)
    }

    create({car_id, user_id, expected_return_date}: ICreateRentalDTO) {
       const rental = new Rental();

       Object.assign(rental,{
           user_id,
           car_id,
           expected_return_date,
           start_date: new Date()
       })


       this.rentals.push(rental)

       return rental
    }

}

export { RentalsRepositoryInMemory }