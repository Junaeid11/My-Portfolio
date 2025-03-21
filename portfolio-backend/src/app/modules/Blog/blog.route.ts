
import Express from "express"
import validateRequest from "../../middlewares/validateRequest"
import { ValidationSchema } from "./blog.validation"
import { blogController } from "./blog.controller"
const router = Express.Router()
router.post('/', validateRequest(ValidationSchema.blogValidationSchema), blogController.createBlog)
router.get('/', blogController.getAllBlogs)
router.patch('/:id', validateRequest(ValidationSchema.blogUpdateValidationSchema), blogController.updateBlog)
router.delete('/:id', blogController.deleteBlog)
router.get('/:id', blogController.getSingleBlog)
export const BlogRoute = router 