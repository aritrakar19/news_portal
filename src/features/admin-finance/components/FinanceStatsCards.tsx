import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IndianRupee, Wallet, Landmark, TrendingUp, BarChart3, Users } from "lucide-react"

const stats = [
  {
    title: "Total Platform Revenue",
    value: "₹8,45,200",
    icon: Landmark,
    description: "+18% from last month",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Total Reporter Payouts",
    value: "₹3,12,000",
    icon: Wallet,
    description: "Paid across 450 reporters",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Pending Withdrawals",
    value: "₹45,500",
    icon: IndianRupee,
    description: "12 requests processing",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Referral Commissions",
    value: "₹28,400",
    icon: Users,
    description: "Network expansion cost",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Monthly Revenue (MTD)",
    value: "₹1,24,000",
    icon: BarChart3,
    description: "On track to hit target",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Net Profit Margin",
    value: "58.4%",
    icon: TrendingUp,
    description: "+2.4% vs last quarter",
    color: "text-emerald-600",
    bg: "bg-emerald-600/10",
  },
]

export function FinanceStatsCards() {
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
