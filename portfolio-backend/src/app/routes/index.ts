import { Router } from "express";
import userRouter from "../modules/User/user.router";
import { AuthRouter } from "../modules/Auth/auth.route";
import { BlogRoute } from "../modules/Blog/blog.route";
import { AdminRoute } from "../modules/admin/admin.route";
import { messageRoute } from "../modules/messages/m.route";
import { ProjectRouter } from "../modules/Projects/project.route";
import { SkillsRoute } from "../modules/Skills/Skills.routes";
const router = Router()
const moduleRoutes =[
    {
        path: '/auth',
        route: userRouter
    },
    {
        path: '/auth',
        route: AuthRouter,
    },
    {
        path: '/blogs',
        route: BlogRoute,
    },   
    {
        path: '/admin',
        route: AdminRoute,
    },   
    {
        path: '/contact',
        route: messageRoute,
    },   
    {
        path: '/projects',
        route: ProjectRouter,
    },   
    {
        path: '/skills',
        route: SkillsRoute,
    },   
]


moduleRoutes.forEach(route =>{
    router.use(route.path, route.route)
})

export default router