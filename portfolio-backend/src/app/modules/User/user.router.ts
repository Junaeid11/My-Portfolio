import { Router } from "express";
import { UserController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./user.validation";

const userRouter = Router();

userRouter.post('/register', validateRequest(UserValidation.userValidationSchema), UserController.createUser)

export default userRouter;