import { Card, CardContent } from "@/components/ui/card"
import { FileText, CheckCircle2, Clock, Eye, DollarSign, Wallet } from "lucide-react"
import { useTranslation } from "react-i18next"

export function DashboardStatCards() {
  const { t } = useTranslation()

  const STATS = [
    {
      title: t("dashboard.stats.totalNews", "Total News"),
      value: "124",
      trend: t("dashboard.stats.trend1", "+12% from last month"),
      icon: FileText,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: t("dashboard.stats.publishedNews", "Published News"),
      value: "108",
      trend: t("dashboard.stats.trend2", "+8% from last month"),
      icon: CheckCircle2,
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      title: t("dashboard.stats.pendingApproval", "Pending Approval"),
      value: "16",
      trend: t("dashboard.stats.trend3", "2 currently under review"),
      icon: Clock,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      title: t("dashboard.stats.totalViews", "Total Views"),
      value: "1.2M",
      trend: t("dashboard.stats.trend4", "+24% from last month"),
      icon: Eye,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
    },
    {
      title: t("dashboard.stats.totalEarnings", "Total Earnings"),
      value: "₹84,500",
      trend: t("dashboard.stats.trend5", "+18% from last month"),
      icon: DollarSign,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      title: t("dashboard.stats.walletBalance", "Wallet Balance"),
      value: "₹12,400",
      trend: t("dashboard.stats.trend6", "Available for withdrawal"),
      icon: Wallet,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {STATS.map((stat, i) => (
        <Card key={i} className="border-border shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
                <h3 className="text-3xl font-heading font-bold text-foreground">{stat.value}</h3>
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4 font-medium">{stat.trend}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
