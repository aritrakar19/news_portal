import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCheck, UserMinus, ShieldAlert, Shield, ShieldHalf } from "lucide-react"
import { useTranslation } from "react-i18next"

export function UserStatsCards() {
  const { t } = useTranslation()

  const stats = [
    {
      title: t("admin.users.stats.totalUsers", "Total Users"),
      value: "4,200",
      icon: Users,
      description: t("admin.users.stats.totalUsersDesc", "+15% vs last month"),
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: t("admin.users.stats.activeUsers", "Active Users"),
      value: "3,400",
      icon: UserCheck,
      description: t("admin.users.stats.activeUsersDesc", "Logged in last 30 days"),
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      title: t("admin.users.stats.suspendedUsers", "Suspended Users"),
      value: "42",
      icon: UserMinus,
      description: t("admin.users.stats.suspendedUsersDesc", "Requires review"),
      color: "text-rose-500",
      bg: "bg-rose-500/10",
    },
    {
      title: t("admin.users.stats.adminAccounts", "Admin Accounts"),
      value: "5",
      icon: ShieldAlert,
      description: t("admin.users.stats.adminAccountsDesc", "Full system access"),
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      title: t("admin.users.stats.editorAccounts", "Editor Accounts"),
      value: "45",
      icon: Shield,
      description: t("admin.users.stats.editorAccountsDesc", "Content moderation access"),
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      title: t("admin.users.stats.reporterAccounts", "Reporter Accounts"),
      value: "3,800",
      icon: ShieldHalf,
      description: t("admin.users.stats.reporterAccountsDesc", "Content submission access"),
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
