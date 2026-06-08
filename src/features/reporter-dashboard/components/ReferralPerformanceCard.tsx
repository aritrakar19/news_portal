import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Copy, Gift, CheckCircle2 } from "lucide-react"
import { useTranslation } from "react-i18next"

export function ReferralPerformanceCard() {
  const { t } = useTranslation()

  return (
    <Card className="border-border shadow-sm h-full bg-gradient-to-br from-primary/5 via-transparent to-transparent">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-heading flex items-center gap-2">
          <Gift className="h-5 w-5 text-primary" />
          {t("dashboard.referral.title", "Refer & Earn")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-6">
          {t("dashboard.referral.desc", "Invite other journalists to the network. Earn ₹500 for every reporter who gets verified and publishes their first story.")}
        </p>

        <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 mb-6 flex items-center justify-between border border-border">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">{t("dashboard.referral.inviteCode", "Your Invite Code")}</p>
            <p className="text-xl font-mono font-bold text-foreground tracking-widest">PN1-ARITRA</p>
          </div>
          <Button variant="outline" size="icon" className="shrink-0" title={t("dashboard.referral.copyCode", "Copy Code")}>
            <Copy className="h-4 w-4 text-muted-foreground" />
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white dark:bg-card border border-border rounded-lg p-3 text-center">
            <Users className="h-5 w-5 text-blue-500 mx-auto mb-1" />
            <p className="text-xl font-bold">15</p>
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">{t("dashboard.referral.referralCount", "Referral Count")}</p>
          </div>
          <div className="bg-white dark:bg-card border border-border rounded-lg p-3 text-center">
            <CheckCircle2 className="h-5 w-5 text-amber-500 mx-auto mb-1" />
            <p className="text-xl font-bold text-amber-600 dark:text-amber-500">8</p>
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">{t("dashboard.referral.activeReferrals", "Active Referrals")}</p>
          </div>
          <div className="bg-white dark:bg-card border border-border rounded-lg p-3 text-center">
            <Gift className="h-5 w-5 text-emerald-500 mx-auto mb-1" />
            <p className="text-xl font-bold text-emerald-600 dark:text-emerald-500">₹4,000</p>
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">{t("dashboard.referral.commissionEarned", "Commission Earned")}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
