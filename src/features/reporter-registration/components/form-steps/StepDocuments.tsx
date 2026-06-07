import { useFormContext } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { UploadCloud } from "lucide-react"
import type { RegistrationFormValues } from "../../schema"

export function StepDocuments() {
  const form = useFormContext<RegistrationFormValues>()

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="mb-6">
        <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">Identity Verification</h3>
        <p className="text-sm text-muted-foreground">Upload your documents for background verification and ID card generation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="aadhaarNumber"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Aadhaar Number</FormLabel>
              <FormControl>
                <Input placeholder="1234 5678 9012" type="text" maxLength={12} {...field} />
              </FormControl>
              <FormDescription>Your 12-digit Aadhaar number for KYC.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormItem>
          <FormLabel>Passport Size Photo</FormLabel>
          <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <UploadCloud className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-medium">Click to upload photo</p>
            <p className="text-xs text-muted-foreground mt-1">JPEG, PNG up to 2MB</p>
          </div>
        </FormItem>

        <FormItem>
          <FormLabel>Aadhaar Card (Front & Back)</FormLabel>
          <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <UploadCloud className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-medium">Click to upload document</p>
            <p className="text-xs text-muted-foreground mt-1">PDF, JPEG up to 5MB</p>
          </div>
        </FormItem>
      </div>
    </div>
  )
}
