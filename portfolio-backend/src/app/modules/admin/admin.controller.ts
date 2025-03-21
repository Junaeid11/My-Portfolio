import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { adminService } from "./admin.service";

const deleteBlog = catchAsync(async (req, res) => {
    const { id } = req.params
    await adminService.deleteBlogFromDb(id);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blog deleted Successfully",

    })
})
const blockUser = catchAsync(async (req, res) => {
    const { id } = req.params
    await adminService.blockUserFromDb(id);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "User blocked successfully",

    })
})
export const adminController = {
    deleteBlog,
    blockUser
}