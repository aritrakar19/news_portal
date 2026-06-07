import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { mockSystemConfig } from "../data/mockSettings"

export function ReporterSettingsTab() {
  const { reporter } = mockSystemConfig

  return (
    <div className="space-y-6 max-w-4xl">
      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle>Onboarding & Approvals</CardTitle>
          <CardDescription>Configure how new reporters join the platform.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Enable Reporter Registration</Label>
              <p className="text-sm text-muted-foreground">Allow new users to apply for reporter accounts.</p>
            </div>
            <Switch defaultChecked={reporter.enableRegistration} />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Auto-Approval Pipeline</Label>
              <p className="text-sm text-muted-foreground">Automatically approve applications that meet minimum criteria.</p>
            </div>
            <Switch defaultChecked={reporter.autoApproval} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Manual Review Required</Label>
              <p className="text-sm text-muted-foreground">Force manual review for all applications before approval.</p>
            </div>
            <Switch defaultChecked={reporter.manualApproval} />
          </div>
        </CardContent>
      </Card>

      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle>Requirements & Economics</CardTitle>
          <CardDescription>Set the financial and profile requirements for reporters.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="registrationFee">Registration Fee (₹)</Label>
              <Input id="registrationFee" type="number" defaultValue={reporter.registrationFee} />
              <p className="text-xs text-muted-foreground">Set to 0 for free onboarding.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="minProfileCompletion">Min. Profile Completion (%)</Label>
              <Input id="minProfileCompletion" type="number" defaultValue={reporter.minProfileCompletion} min="0" max="100" />
              <p className="text-xs text-muted-foreground">Required percentage before news submission is allowed.</p>
            </div>
          </div>

          <div className="pt-4 border-t border-border flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Enable Referral Program</Label>
              <p className="text-sm text-muted-foreground">Allow reporters to invite others and earn commission.</p>
            </div>
            <Switch defaultChecked={reporter.referralProgram} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
