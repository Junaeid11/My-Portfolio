import { Router } from 'express';
import { SkillsController } from './Skills.controller';
import { multerUpload } from '../../config/multer.config';

import { categoryValidation } from './Skills.validation';
import { parseBody } from '../../middlewares/bodyParser';
import validateRequest from '../../middlewares/validateRequest';

const router = Router();

router.get("/", SkillsController.getAllSkills)

router.post(
    '/',
    multerUpload.single('icon'),
    parseBody,
    validateRequest(categoryValidation.createSkillsValidationSchema),
    SkillsController.createCategory
);


router.delete(
    '/:id',
    SkillsController.deleteSkill
)

export const SkillsRoute = router;
