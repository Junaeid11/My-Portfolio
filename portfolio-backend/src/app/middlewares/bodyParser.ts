
import { APPerror } from "../errors/AppError";
import catchAsync from "../utils/catchAsync";
import { NextFunction, Request, Response } from "express";

export const parseBody = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.data) {
        throw new APPerror(httpStatus.BAD_REQUEST, 'Please provide data in the body under data key');
    }
    req.body = JSON.parse(req.body.data);

    next();
});