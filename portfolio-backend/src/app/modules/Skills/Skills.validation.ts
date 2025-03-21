import { z } from 'zod';

const createSkillsValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .nonempty("Skills name is required")
      .max(100, "Category name should not exceed 100 characters"),

  })
});



export const categoryValidation = {
 createSkillsValidationSchema,
}