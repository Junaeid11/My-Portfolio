import { Date } from "mongoose";

export interface TBlog {
    title: string;
    content: string;
    author: string;
    publishedDate?:Date
    image:string

    isPublished?: boolean;
    
}