import { useFormContext } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CreditCard, CheckCircle2, ShieldCheck } from "lucide-react"
import type { RegistrationFormValues } from "../../schema"

interface StepReviewProps {
  onSubmit: () => void
  isSubmitting?: boolean
}

export function StepReview({ onSubmit, isSubmitting = false }: StepReviewProps) {
  const { getValues } = useFormContext<RegistrationFormValues>()
  const values = getValues()

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="mb-6">
        <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">Review & Payment</h3>
        <p className="text-sm text-muted-foreground">Please review your information and complete the registration payment.</p>
      </div>

      <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 border border-border">
        <h4 className="font-bold mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-primary" /> 
          Applicant Summary
        </h4>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 text-sm">
          <div>
            <dt className="text-muted-foreground">Full Name</dt>
            <dd className="font-medium">{values.fullName || "Not provided"}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Mobile</dt>
            <dd className="font-medium">{values.mobile || "Not provided"}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">State</dt>
            <dd className="font-medium">{values.state || "Not provided"}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Aadhaar</dt>
            <dd className="font-medium">
              {values.aadhaarNumber ? `********${values.aadhaarNumber.slice(-4)}` : "Not provided"}
            </dd>
          </div>
        </dl>
      </div>

      <div className="bg-white dark:bg-slate-950 rounded-lg p-6 border border-border shadow-sm">
        <h4 className="font-bold mb-4">Fee Breakdown</h4>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Digital Press ID Fee</span>
            <span>₹499.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Platform Access (1 Year)</span>
            <span>₹1,000.00</span>
          </div>
          <Separator />
          <div className="flex justify-between font-bold text-lg">
            <span>Total Payable</span>
            <span className="text-primary">₹1,499.00</span>
          </div>
        </div>
      </div>

      <div className="pt-4 flex flex-col items-center">
        <Button 
          type="button" 
          onClick={onSubmit} 
          disabled={isSubmitting}
          className="w-full md:w-auto h-12 px-8 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-full"
        >
          {isSubmitting ? (
            "Processing..."
          ) : (
            <>
              <CreditCard className="mr-2 h-5 w-5" />
              Pay Securely
            </>
          )}
        </Button>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="w-4 h-4 text-green-600" />
          <span>256-bit SSL Secure Payment Gateway</span>
        </div>
      </div>
    </div>
  )
}
