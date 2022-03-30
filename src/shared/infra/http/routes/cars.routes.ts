


import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import {Router} from "express"
import { ensureAdmin } from "../middlewares/EnsureAdmin";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";


const carRoutes = Router();

const createCarController = new CreateCarController()

carRoutes.post("/", ensureAuthenticated,ensureAdmin,createCarController.handle)


export {carRoutes}