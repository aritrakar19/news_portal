import { useFormContext } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslation } from "react-i18next"
import type { RegistrationFormValues } from "../../schema"

const STATES = [
  "Maharashtra", "Delhi", "Uttar Pradesh", "Karnataka", "West Bengal", "Gujarat"
]

const QUALIFICATIONS = [
  "High School (10th)", "Intermediate (12th)", "Bachelor's Degree", "Master's Degree", "Journalism Diploma", "Other"
]

export function StepLocation() {
  const form = useFormContext<RegistrationFormValues>()
  const { t } = useTranslation()

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="mb-6">
        <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">{t("registration.location.title", "Location & Qualifications")}</h3>
        <p className="text-sm text-muted-foreground">{t("registration.location.subtitle", "Select the region you will be reporting from.")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("registration.location.state", "State")}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={t("registration.location.statePlaceholder", "Select a state")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {STATES.map(state => (
                    <SelectItem key={state} value={state}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="district"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("registration.location.district", "District/City")}</FormLabel>
              <FormControl>
                <Input placeholder={t("registration.location.districtPlaceholder", "E.g., Mumbai")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>{t("registration.location.address", "Full Residential Address")}</FormLabel>
              <FormControl>
                <Input placeholder={t("registration.location.addressPlaceholder", "House No, Street, Landmark, Pincode")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="qualification"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>{t("registration.location.qualification", "Highest Qualification")}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={t("registration.location.qualificationPlaceholder", "Select your highest qualification")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {QUALIFICATIONS.map(qual => (
                    <SelectItem key={qual} value={qual}>{qual}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}
