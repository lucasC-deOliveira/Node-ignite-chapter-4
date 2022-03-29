

import { CreateCarController } from "@modules/cars/useCases/createCar/createCarController";
import {Router} from "express"


const carRoutes = Router();

const createCarController = new CreateCarController()

carRoutes.post("/", createCarController.handle)


export {carRoutes}