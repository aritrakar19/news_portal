import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCheck, Clock, UserX, AlertCircle, TrendingUp } from "lucide-react"
import { useTranslation } from "react-i18next"

export function ReportersStatsCards() {
  const { t } = useTranslation()

  const stats = [
    {
      title: t("admin.reporters.stats.total", "Total Reporters"),
      value: "2,543",
      icon: Users,
      description: t("admin.reporters.stats.totalDesc", "+12% from last month"),
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: t("admin.reporters.stats.active", "Active Reporters"),
      value: "1,892",
      icon: UserCheck,
      description: t("admin.reporters.stats.activeDesc", "74% of total"),
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      title: t("admin.reporters.stats.pending", "Pending Approvals"),
      value: "43",
      icon: Clock,
      description: t("admin.reporters.stats.pendingDesc", "Requires attention"),
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      title: t("admin.reporters.stats.suspended", "Suspended"),
      value: "12",
      icon: UserX,
      description: t("admin.reporters.stats.suspendedDesc", "Action taken"),
      color: "text-rose-500",
      bg: "bg-rose-500/10",
    },
    {
      title: t("admin.reporters.stats.expired", "Expired Press IDs"),
      value: "156",
      icon: AlertCircle,
      description: t("admin.reporters.stats.expiredDesc", "Renewal needed"),
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      title: t("admin.reporters.stats.newApps", "New Applications"),
      value: "124",
      icon: TrendingUp,
      description: t("admin.reporters.stats.newAppsDesc", "This month"),
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-full ${stat.bg}`}>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
