import { Users, UserCheck, IndianRupee, Clock } from "lucide-react"
import { useTranslation } from "react-i18next"

export function ReferralPerformanceCards() {
  const { t } = useTranslation()

  const METRICS = [
    {
      title: t("referrals.metrics.total", "Total Referrals"),
      value: "24",
      subtitle: t("referrals.metrics.totalSub", "+3 this month"),
      icon: Users,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      title: t("referrals.metrics.active", "Active Reporters"),
      value: "14",
      subtitle: t("referrals.metrics.activeSub", "58% conversion rate"),
      icon: UserCheck,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-100 dark:bg-emerald-900/30",
    },
    {
      title: t("referrals.metrics.earned", "Commission Earned"),
      value: "₹8,400",
      subtitle: t("referrals.metrics.earnedSub", "Total referral payout"),
      icon: IndianRupee,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      title: t("referrals.metrics.pending", "Pending Commission"),
      value: "₹600",
      subtitle: t("referrals.metrics.pendingSub", "Awaiting activation"),
      icon: Clock,
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-100 dark:bg-amber-900/30",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {METRICS.map((stat, idx) => {
        const Icon = stat.icon
        return (
          <div key={idx} className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6 flex items-center gap-4 transition-all hover:shadow-md">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${stat.bg}`}>
              <Icon className={`w-7 h-7 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.title}</p>
              <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white mt-1">{stat.value}</h3>
              <p className="text-xs text-muted-foreground mt-1">{stat.subtitle}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
