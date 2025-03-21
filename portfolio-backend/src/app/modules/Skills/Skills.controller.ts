import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SkillService } from './Skills.service';
import { IImageFiles } from '../../../interface/IImageFile';

const createCategory = catchAsync(async (req: Request, res: Response) => {

  const result = await SkillService.createSkill(
    req.body,
    req.file as unknown as IImageFiles,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill created succesfully',
    data: result,
  });
});

const getAllSkills = catchAsync(async (req, res) => {
  const result = await SkillService.getAllSkills(req.query);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skills are retrieved succesfully',
    data: result,
  });
});

const deleteSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  await SkillService.deleteSkillsIntoDB(
    id,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill is deleted successfully',
  });
});

export const SkillsController = {
  createCategory,
  getAllSkills,
  deleteSkill
}
