import express, {Request, Response, Express} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from "compression";

export const getApplication = (): Express => {
    const app = express()
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(morgan("dev"))
        .use(compression())
        .get("/" , (req:Request, res:Response) => {
            res.send("Hello My name is Cartographer...!")
        })
    return app;
};