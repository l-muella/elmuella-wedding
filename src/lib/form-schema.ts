import * as z from "zod";

export interface ActionResponse<T = unknown> {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof T]?: string[];
  };
  inputs?: T;
}
export const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  first: z.string().min(1, "Please select a first course"),
  main: z.string().min(1, "Please select a main course"),
  intolerances: z.string().optional(),
  privacy: z.boolean().optional(),
});
