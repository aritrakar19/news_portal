import { RegistrationHero } from "./components/RegistrationHero"
import { MultiStepForm } from "./components/MultiStepForm"
import { BenefitsSection } from "./components/BenefitsSection"
import { FaqSection } from "./components/FaqSection"
import { CtaSection } from "./components/CtaSection"

export function ReporterRegistrationPage() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <RegistrationHero />
      <BenefitsSection />
      <MultiStepForm />
      <FaqSection />
      <CtaSection />
    </div>
  )
}
