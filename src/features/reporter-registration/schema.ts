import * as z from "zod"

export const registrationSchema = z.object({
  // Step 1: Personal
  fullName: z.string().min(2, "Full Name must be at least 2 characters"),
  fatherName: z.string().min(2, "Father Name must be at least 2 characters"),
  dob: z.string().min(1, "Date of Birth is required"),
  mobile: z.string().regex(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits"),
  email: z.string().email("Invalid email address"),
  
  // Step 2: Location
  state: z.string().min(1, "State is required"),
  district: z.string().min(1, "District is required"),
  address: z.string().min(10, "Please provide a detailed address"),
  qualification: z.string().min(1, "Qualification is required"),
  
  // Step 3: Documents
  aadhaarNumber: z.string().regex(/^[0-9]{12}$/, "Aadhaar must be exactly 12 digits"),
  photoProof: z.any().optional(), // In a real app, this would validate a File object
  idProof: z.any().optional(),    // In a real app, this would validate a File object
})

export type RegistrationFormValues = z.infer<typeof registrationSchema>
