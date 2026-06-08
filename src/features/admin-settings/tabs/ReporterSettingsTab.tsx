import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { mockSystemConfig } from "../data/mockSettings"
import { useTranslation } from "react-i18next"

export function ReporterSettingsTab() {
  const { t } = useTranslation()
  const { reporter } = mockSystemConfig

  return (
    <div className="space-y-6 max-w-4xl">
      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle>{t("admin.settings.reporter.onboardingTitle", "Onboarding & Approvals")}</CardTitle>
          <CardDescription>{t("admin.settings.reporter.onboardingDesc", "Configure how new reporters join the platform.")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">{t("admin.settings.reporter.enableRegistration", "Enable Reporter Registration")}</Label>
              <p className="text-sm text-muted-foreground">{t("admin.settings.reporter.enableRegistrationDesc", "Allow new users to apply for reporter accounts.")}</p>
            </div>
            <Switch defaultChecked={reporter.enableRegistration} />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">{t("admin.settings.reporter.autoApproval", "Auto-Approval Pipeline")}</Label>
              <p className="text-sm text-muted-foreground">{t("admin.settings.reporter.autoApprovalDesc", "Automatically approve applications that meet minimum criteria.")}</p>
            </div>
            <Switch defaultChecked={reporter.autoApproval} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">{t("admin.settings.reporter.manualApproval", "Manual Review Required")}</Label>
              <p className="text-sm text-muted-foreground">{t("admin.settings.reporter.manualApprovalDesc", "Force manual review for all applications before approval.")}</p>
            </div>
            <Switch defaultChecked={reporter.manualApproval} />
          </div>
        </CardContent>
      </Card>

      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle>{t("admin.settings.reporter.requirementsTitle", "Requirements & Economics")}</CardTitle>
          <CardDescription>{t("admin.settings.reporter.requirementsDesc", "Set the financial and profile requirements for reporters.")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="registrationFee">{t("admin.settings.reporter.registrationFee", "Registration Fee (₹)")}</Label>
              <Input id="registrationFee" type="number" defaultValue={reporter.registrationFee} />
              <p className="text-xs text-muted-foreground">{t("admin.settings.reporter.registrationFeeDesc", "Set to 0 for free onboarding.")}</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="minProfileCompletion">{t("admin.settings.reporter.minProfileCompletion", "Min. Profile Completion (%)")}</Label>
              <Input id="minProfileCompletion" type="number" defaultValue={reporter.minProfileCompletion} min="0" max="100" />
              <p className="text-xs text-muted-foreground">{t("admin.settings.reporter.minProfileCompletionDesc", "Required percentage before news submission is allowed.")}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-border flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">{t("admin.settings.reporter.enableReferral", "Enable Referral Program")}</Label>
              <p className="text-sm text-muted-foreground">{t("admin.settings.reporter.enableReferralDesc", "Allow reporters to invite others and earn commission.")}</p>
            </div>
            <Switch defaultChecked={reporter.referralProgram} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
