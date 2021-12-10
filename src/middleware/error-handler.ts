import {StatusCodes} from "http-status-codes";
import {Request, Response, NextFunction} from "express";
import CustomError from "../utils/custom-error";

const errorHandlerMiddleware = (err: any, req:Request, res:Response, next:NextFunction) => {
    if(err instanceof CustomError) {
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send("Internal error please check your connection...")
}
export default errorHandlerMiddleware;