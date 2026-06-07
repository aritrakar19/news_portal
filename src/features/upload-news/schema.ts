import { z } from "zod"

export const newsSchema = z.object({
  headline: z.string().min(10, "Headline must be at least 10 characters").max(120, "Headline must be under 120 characters"),
  summary: z.string().min(50, "Summary must be at least 50 characters").max(300, "Summary must be under 300 characters"),
  content: z.string().min(200, "News content must be at least 200 characters"),
  category: z.string().min(1, "Please select a category"),
  state: z.string().min(1, "Please select a state"),
  district: z.string().min(1, "Please select a district"),
  location: z.string().min(2, "Please provide the specific location"),
  isBreaking: z.boolean().default(false),
  tags: z.string().optional(),
})

export type NewsFormValues = z.infer<typeof newsSchema>
