import "reflect-metadata";
import "@shared/container"
import express, { NextFunction } from 'express';
import 'express-async-errors'
import swaggerUI from 'swagger-ui-express';



import swaggerFile from "../../../swagger.json";

import "@shared/infra/typeorm";

import { router } from './routes';
import { AppError } from "@shared/errors/AppError";

const app = express();

app.use(express.json())

//documentação
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile))

//rotas da aplicação
app.use(router)

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction ) => {
   
        if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message:err.message
        })
    }

    return response.status(500).json({
        status: 'error',
        message:"Internal Server Error" + err.message
    });
})

app.listen(3333, () => console.log("Server Rodando"))

