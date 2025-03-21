import { z } from "zod";

const userValidationSchema = z.object({
    body: z.object({
        name: z.string({ required_error: "Name is Required" }).min(2).max(50),
        email: z.string({ required_error: "Email is Required" }).email(),
        password: z.string().min(6),
        role: z.string().optional(),
        isBlocked: z.boolean().optional()
    })

})
const updateValidationSchema = z.object({
    body: z.object({
        name: z.string({ required_error: "Name is Required" }).min(2).max(50).optional(),
        email: z.string({ required_error: "Email is Required" }).email().optional(),
        password: z.string().min(6).optional(),
        role: z.string().optional(),
        isBlocked: z.boolean().optional()
    })

})

export const UserValidation = {
    userValidationSchema,
    updateValidationSchema
}
