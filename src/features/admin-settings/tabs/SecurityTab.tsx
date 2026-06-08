import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { mockSystemConfig } from "../data/mockSettings"
import { ShieldCheck, LockKeyhole, ActivitySquare } from "lucide-react"
import { useTranslation } from "react-i18next"

export function SecurityTab() {
  const { t } = useTranslation()
  const { security } = mockSystemConfig

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900 shadow-sm">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/40 rounded-full">
              <ShieldCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-emerald-900 dark:text-emerald-300">{t("admin.settings.security.ssl", "SSL Certificate")}</p>
              <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{t("admin.settings.security.valid", "Valid")}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900 shadow-sm">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-full">
              <ActivitySquare className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-blue-900 dark:text-blue-300">{t("admin.settings.security.apiStatus", "API Status")}</p>
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">{t("admin.settings.security.secure", "Secure")}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full">
              <LockKeyhole className="h-6 w-6 text-slate-700 dark:text-slate-300" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{t("admin.settings.security.score", "Security Score")}</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">94/100</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle>{t("admin.settings.security.authSettings", "Authentication Settings")}</CardTitle>
          <CardDescription>{t("admin.settings.security.authSettingsDesc", "Configure how users authenticate and access the platform.")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">{t("admin.settings.security.otp", "OTP Verification")}</Label>
              <p className="text-sm text-muted-foreground">{t("admin.settings.security.otpDesc", "Require One-Time Password verification for new reporter registrations.")}</p>
            </div>
            <Switch defaultChecked={security.otpVerification} />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">{t("admin.settings.security.2fa", "Two-Factor Authentication (2FA)")}</Label>
              <p className="text-sm text-muted-foreground">{t("admin.settings.security.2faDesc", "Mandatory 2FA for all Admin and Editor accounts.")}</p>
            </div>
            <Switch defaultChecked={security.twoFactorAuth} />
          </div>
        </CardContent>
      </Card>

      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle>{t("admin.settings.security.sessionProtection", "Session & Brute Force Protection")}</CardTitle>
          <CardDescription>{t("admin.settings.security.sessionProtectionDesc", "Protect against unauthorized access attempts and abandoned sessions.")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="loginLimit">{t("admin.settings.security.loginLimit", "Max Login Attempts")}</Label>
              <Input id="loginLimit" type="number" defaultValue={security.loginAttemptLimit} />
              <p className="text-xs text-muted-foreground">{t("admin.settings.security.loginLimitDesc", "Number of failed attempts before temporary IP block.")}</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="sessionTimeout">{t("admin.settings.security.sessionTimeout", "Admin Session Timeout (Minutes)")}</Label>
              <Input id="sessionTimeout" type="number" defaultValue={security.sessionTimeoutMinutes} />
              <p className="text-xs text-muted-foreground">{t("admin.settings.security.sessionTimeoutDesc", "Idle time before requiring re-authentication.")}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
