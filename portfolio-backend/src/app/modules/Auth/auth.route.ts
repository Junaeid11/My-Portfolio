import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';
import { authController } from './auth.controller';

const router = express.Router();

router.post('/login', validateRequest(AuthValidation.loginValidationSchema), authController.loginUser);

export const AuthRouter = router;