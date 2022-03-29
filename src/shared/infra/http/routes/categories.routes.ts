import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "@modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "@modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "@modules/cars/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

//controllers
const createCategoryController =  new CreateCategoryController();
const listCategoriesController = new ListCategoriesController()
const importCategoryController = new ImportCategoryController()

const upload = multer({
    dest:"./tmp",
})


//routes
categoriesRoutes.post("/",createCategoryController.handle)
 
categoriesRoutes.get("/",listCategoriesController.handle)
//importando arquivo
categoriesRoutes.post("/import",upload.single("file"),importCategoryController.handle)

export { categoriesRoutes }