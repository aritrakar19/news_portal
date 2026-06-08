import { useFormContext } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { UploadCloud } from "lucide-react"
import { useTranslation } from "react-i18next"
import type { RegistrationFormValues } from "../../schema"

export function StepDocuments() {
  const form = useFormContext<RegistrationFormValues>()
  const { t } = useTranslation()

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="mb-6">
        <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">{t("registration.documents.title", "Identity Verification")}</h3>
        <p className="text-sm text-muted-foreground">{t("registration.documents.subtitle", "Upload your documents for background verification and ID card generation.")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="aadhaarNumber"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>{t("registration.documents.aadhaar", "Aadhaar Number")}</FormLabel>
              <FormControl>
                <Input placeholder={t("registration.documents.aadhaarPlaceholder", "1234 5678 9012")} type="text" maxLength={12} {...field} />
              </FormControl>
              <FormDescription>{t("registration.documents.aadhaarDesc", "Your 12-digit Aadhaar number for KYC.")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormItem>
          <FormLabel>{t("registration.documents.photo", "Passport Size Photo")}</FormLabel>
          <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <UploadCloud className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-medium">{t("registration.documents.clickToUpload", "Click to upload photo")}</p>
            <p className="text-xs text-muted-foreground mt-1">{t("registration.documents.photoLimit", "JPEG, PNG up to 2MB")}</p>
          </div>
        </FormItem>

        <FormItem>
          <FormLabel>{t("registration.documents.aadhaarCard", "Aadhaar Card (Front & Back)")}</FormLabel>
          <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <UploadCloud className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-medium">{t("registration.documents.clickToUploadDoc", "Click to upload document")}</p>
            <p className="text-xs text-muted-foreground mt-1">{t("registration.documents.docLimit", "PDF, JPEG up to 5MB")}</p>
          </div>
        </FormItem>
      </div>
    </div>
  )
}
