import { IImageFiles } from "../../../interface/IImageFile";
import queryBuilder from "../../builder/queryBuilder";
import { APPerror } from "../../errors/AppError";
import { ISkills } from "./Skills.interface";
import { Skills } from "./Skills.model";

import httpStatus from "http-status"

const createSkill = async (
  skillData: Partial<ISkills>,
  icon: IImageFiles,
) => {
  const data = new Skills({
    ...skillData,
    icon: icon?.path
  });

  const result = await data.save();

  return result;

};

const getAllSkills = async (query: Record<string, unknown>) => {
  const result = new queryBuilder(
    Skills.find(),
    query,
  )
  const data = await result.modelQuery
   

  return data
};


const deleteSkillsIntoDB = async (
  id: string,
) => {
  const skill = await Skills.findById(id);
  if (!skill) {
    throw new APPerror(httpStatus.NOT_FOUND, 'Skill not found!');
  }
  const deletedCategory = await Skills.findByIdAndDelete(id);
  return deletedCategory;
};


export const SkillService = {
   createSkill,
   getAllSkills,
   deleteSkillsIntoDB
}
