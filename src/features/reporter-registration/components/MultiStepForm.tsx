import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "sonner"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

import { useTranslation } from "react-i18next"

import { registrationSchema, type RegistrationFormValues } from "../schema"
import { StepPersonal } from "./form-steps/StepPersonal"
import { StepLocation } from "./form-steps/StepLocation"
import { StepDocuments } from "./form-steps/StepDocuments"
import { StepReview } from "./form-steps/StepReview"

export function MultiStepForm() {
  const { t } = useTranslation()

  const STEPS = [
    { id: 1, title: t("registration.steps.personal", "Personal") },
    { id: 2, title: t("registration.steps.location", "Location") },
    { id: 3, title: t("registration.steps.documents", "Documents") },
    { id: 4, title: t("registration.steps.payment", "Payment") },
  ]

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      fatherName: "",
      dob: "",
      mobile: "",
      email: "",
      state: "",
      district: "",
      address: "",
      qualification: "",
      aadhaarNumber: "",
    },
  })

  const processNextStep = async () => {
    let fieldsToValidate: (keyof RegistrationFormValues)[] = []

    if (currentStep === 1) {
      fieldsToValidate = ["fullName", "fatherName", "dob", "mobile", "email"]
    } else if (currentStep === 2) {
      fieldsToValidate = ["state", "district", "address", "qualification"]
    } else if (currentStep === 3) {
      fieldsToValidate = ["aadhaarNumber"]
    }

    const isStepValid = await form.trigger(fieldsToValidate)
    
    if (isStepValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 4))
      window.scrollTo({ top: 100, behavior: "smooth" })
    } else {
      toast.error(t("registration.form.validationError", "Please fill all required fields correctly."))
    }
  }

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
    window.scrollTo({ top: 100, behavior: "smooth" })
  }

  const handleFinalSubmit = () => {
    setIsSubmitting(true)
    // Simulate API call / Payment gateway initiation
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success(t("registration.form.successMsg", "Payment successful! Welcome to the network."))
      // In reality, redirect to success page or dashboard
    }, 2000)
  }

  return (
    <section className="py-12 md:py-20 bg-slate-50 dark:bg-slate-900/50" id="apply">
      <div className="container max-w-4xl">
        
        {/* Stepper Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 dark:bg-slate-800 -z-10" />
            
            {/* Progress Bar Fill */}
            <motion.div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary -z-10"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
              transition={{ duration: 0.3 }}
            />

            {STEPS.map((step) => {
              const isCompleted = step.id < currentStep
              const isActive = step.id === currentStep

              return (
                <div key={step.id} className="flex flex-col items-center gap-2 bg-slate-50 dark:bg-slate-900 px-2">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
                      isActive ? "bg-primary text-white shadow-glow" : 
                      isCompleted ? "bg-green-500 text-white" : 
                      "bg-slate-200 dark:bg-slate-800 text-slate-500"
                    }`}
                  >
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : step.id}
                  </div>
                  <span className={`text-xs md:text-sm font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                    {step.title}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white dark:bg-card p-6 md:p-10 rounded-2xl shadow-soft border border-border relative overflow-hidden">
          <Form {...form}>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {currentStep === 1 && <StepPersonal />}
                  {currentStep === 2 && <StepLocation />}
                  {currentStep === 3 && <StepDocuments />}
                  {currentStep === 4 && <StepReview onSubmit={handleFinalSubmit} isSubmitting={isSubmitting} />}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-border mt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1 || isSubmitting}
                  className={currentStep === 1 ? "invisible" : ""}
                >
                  {t("registration.form.back", "Back")}
                </Button>

                {currentStep < 4 && (
                  <Button type="button" onClick={processNextStep} className="bg-primary hover:bg-primary/90 px-8">
                    {t("registration.form.saveContinue", "Save & Continue")}
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>

      </div>
    </section>
  )
}
