import { BlogModel } from "../Blog/blog.model"
import { User } from "../User/User.model"

const deleteBlogFromDb = async (id: string) => {
    const result = await BlogModel.findByIdAndDelete(id)
    return result
}
const blockUserFromDb = async (id: string) => {
    const data = await User.findByIdAndUpdate(id, { isBlocked: true }, { new: true })
    if (data?.isBlocked) {

        return true
    }
    return false
}
export const adminService = {
    deleteBlogFromDb,
    blockUserFromDb
}