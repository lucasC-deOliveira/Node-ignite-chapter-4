import { Rental } from "@modules/rentals/infra/typeorm/entities/rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { IDateProvider } from "@shared/container/providers/dateProvider/IDateProvidets";
import { AppError } from "@shared/errors/AppError";





interface IRequest {
    user_id: string;
    car_id: string;
    expected_return_date: Date
}


class CreateRentalUseCase {


    constructor(private rentalRepository: IRentalsRepository,
        private dateProvider:IDateProvider
        ){}

    async execute({ user_id, car_id, expected_return_date }: IRequest): Promise<Rental> {

        const minimunHours = 24;

        const carUnavailable = await this.rentalRepository.findOpenRentalByCar(car_id)

        if(carUnavailable){
            throw new AppError("car is Unavailable")
        }

        const rentalOpenToUser = await this.rentalRepository.findOpenRentalByUser(user_id)

        if(rentalOpenToUser){
            throw new AppError("There is a rental is progress for user!")
        }

        const dateNow = this.dateProvider.dateNow()

        const compare = this.dateProvider.compareInHours(dateNow,expected_return_date)


        if(compare < minimunHours){
            throw new AppError("invalid return time")
        }


        const rental =await this.rentalRepository.create({
            user_id,
            car_id,
            expected_return_date
        })


        return rental
        
    }
}


export { CreateRentalUseCase }