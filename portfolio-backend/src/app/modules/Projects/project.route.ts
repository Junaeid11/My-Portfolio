
import Express from "express"
import {  ProjectController } from "./project.controller"
import { multerUpload } from "../../config/multer.config"
import { parseBody } from "../../middlewares/bodyParser"
const router = Express.Router()
router.post('/', multerUpload.fields([{ name: 'images' }]),   parseBody, ProjectController.createProject)
router.get('/', ProjectController.getAllProjects)
router.patch('/:id', multerUpload.fields([{ name: 'images' }]),parseBody,  ProjectController.updateProject)
router.delete('/:id', ProjectController.deleteProject)
router.get('/:id', ProjectController.getSingleProject)
export const ProjectRouter = router 