import { useFormContext } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useTranslation } from "react-i18next"
import type { RegistrationFormValues } from "../../schema"

export function StepPersonal() {
  const form = useFormContext<RegistrationFormValues>()
  const { t } = useTranslation()

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="mb-6">
        <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">{t("registration.personal.title", "Personal Information")}</h3>
        <p className="text-sm text-muted-foreground">{t("registration.personal.subtitle", "Please provide your exact details as per your official IDs.")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("registration.personal.fullName", "Full Name")}</FormLabel>
              <FormControl>
                <Input placeholder={t("registration.personal.fullNamePlaceholder", "John Doe")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="fatherName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("registration.personal.fatherName", "Father's Name")}</FormLabel>
              <FormControl>
                <Input placeholder={t("registration.personal.fatherNamePlaceholder", "Robert Doe")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("registration.personal.dob", "Date of Birth")}</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("registration.personal.mobile", "Mobile Number")}</FormLabel>
              <FormControl>
                <Input placeholder="9876543210" type="tel" maxLength={10} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>{t("registration.personal.email", "Email Address")}</FormLabel>
              <FormControl>
                <Input placeholder={t("registration.personal.emailPlaceholder", "john@example.com")} type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}
