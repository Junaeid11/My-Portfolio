/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */


import queryBuilder from "../../builder/queryBuilder"
import { APPerror } from "../../errors/AppError"
import { TBlog } from "./blog.interface"
import { BlogModel } from "./blog.model"

import httpStatus from "http-status"

const createBlogIntoDb = async (payload: TBlog) => {
    const result = await BlogModel.create(payload);
    return result

}
const updateBlogFromDb = async (id: string, payload: TBlog) => {
    const blog = await BlogModel.findById(id).populate("author");
    console.log(blog)
    if (!blog) {
        throw new APPerror(httpStatus.NOT_FOUND, "Blog not found");
    }
    const result = await BlogModel.findByIdAndUpdate(id, payload, { new: true }).populate('author')
    return result
}
const deleteBlogFromDb = async (id: string,) => {
    const result = await BlogModel.findByIdAndDelete(id)
    return result
}
const getAllBlogsFromDb = async (query: Record<string, unknown>) => {
    const blogsSearchableFields = ['title', 'content']
    const blogsQuery = new queryBuilder(BlogModel.find(), query).search(blogsSearchableFields).filter().sort();
    const result = await blogsQuery.modelQuery.populate('author')

    return result
}
const getSingleBlogs = async (id:string)=>{
    const blog = await BlogModel.findById(id)
    return blog

}


export const blogService = {
    createBlogIntoDb,
    updateBlogFromDb,
    deleteBlogFromDb,
    getAllBlogsFromDb,
    getSingleBlogs
}