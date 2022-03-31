


import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsController";
import {Router} from "express"
import { ensureAdmin } from "../middlewares/EnsureAdmin";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";


const carRoutes = Router();

const createCarController = new CreateCarController()

carRoutes.post("/", ensureAuthenticated,ensureAdmin,createCarController.handle)


const listAvailableCarsController = new ListAvailableCarsController();

carRoutes.get("/available",listAvailableCarsController.handle)


export {carRoutes}