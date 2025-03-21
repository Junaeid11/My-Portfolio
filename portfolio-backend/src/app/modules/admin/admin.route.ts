import Express from 'express';
import { adminController } from './admin.controller';
import auth from '../../middlewares/auth';
import { ROLE } from '../User/user.constant';


const router = Express.Router();
router.delete('/blogs/:id', auth(ROLE.admin), adminController.deleteBlog);
router.patch('/users/:id/block', auth(ROLE.admin), adminController.blockUser)

export const AdminRoute = router;