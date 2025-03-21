/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */


import queryBuilder from "../../builder/queryBuilder"
import { APPerror } from "../../errors/AppError"
import { TProject } from "./project.interface"

import httpStatus from "http-status"
import { Project } from "./Project.model"
import { IImageFiles } from "../../../interface/IImageFile"

const createProjectIntoDb = async (   payload: Partial<TProject>, 
    productImages: IImageFiles,) => {
    const { images } = productImages;

    if (!images || images.length === 0) {
       throw new APPerror(
          httpStatus.BAD_REQUEST,
          'Product images are required.'
       );
    }
    payload.image = images.map((image) => image.path);
    const newProduct = new Project({
        ...payload,
     });
     console.log(payload)
     const result = await newProduct.save();
    
     return result

}
const updateProjectIntoDb = async (
    id: string,
    payload: Partial<TProject>,
    productImages: IImageFiles
  ) => {
    const { images } = productImages;
  
    const project = await Project.findById(id);
    if (!project) {
      throw new APPerror(httpStatus.NOT_FOUND, 'Project Not Found');
    }
  
    if (images && images.length > 0) {
      payload.image = images.map((image) => image.path);
    }
    return await Project.findByIdAndUpdate(id, payload, { new: true });
  };
 
const deleteProjectIntoDb = async (id: string,) => {
    const result = await Project.findByIdAndDelete(id)
    return result
}
const getAllProjectFromDb = async (query: Record<string, unknown>) => {
    const blogsQuery = new queryBuilder(Project.find(), query);
    const result = await blogsQuery.modelQuery

    return result
}
const getSingleProject = async (id:string)=>{
    const blog = await Project.findById(id)
    return blog

}


export const projectService = {
    createProjectIntoDb,
    updateProjectIntoDb,
 deleteProjectIntoDb,
    getAllProjectFromDb,
    getSingleProject
}