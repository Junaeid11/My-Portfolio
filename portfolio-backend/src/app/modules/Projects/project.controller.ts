
import { IImageFiles } from "../../../interface/IImageFile";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { projectService } from "./project.service";

const createProject = catchAsync(async (req, res) => {


    const result = await projectService.createProjectIntoDb(req.body, req.files as IImageFiles,)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Project created Successfully",
        data: result
    })
})
const updateProject = catchAsync(async (req, res) => {
    const {
        body: payload,
        params: { id },
      } = req;
    
      const result = await projectService.updateProjectIntoDb(
        id,
        payload,
        req.files as IImageFiles,
      );
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Project updated Successfully",
        data: result
    })
})
const deleteProject = catchAsync(async (req, res) => {
    const { id } = req.params
    await projectService.deleteProjectIntoDb(id);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Project deleted Successfully",

    })
})
const getSingleProject = catchAsync(async (req, res) => {
    const { id } = req.params
    const result = await projectService.getSingleProject(id);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Project fetch Successfully",
        data: result

    })
})
const getAllProjects = catchAsync(async (req, res) => {

    const result = await projectService.getAllProjectFromDb(req.query);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Projects fetched successfully",
        data: result

    })
})




export const ProjectController = {
    createProject,
    updateProject,
    deleteProject,
    getAllProjects,
    getSingleProject
}