import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCheck, Clock, UserX, AlertCircle, TrendingUp } from "lucide-react"

const stats = [
  {
    title: "Total Reporters",
    value: "2,543",
    icon: Users,
    description: "+12% from last month",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Active Reporters",
    value: "1,892",
    icon: UserCheck,
    description: "74% of total",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Pending Approvals",
    value: "43",
    icon: Clock,
    description: "Requires attention",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Suspended",
    value: "12",
    icon: UserX,
    description: "Action taken",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    title: "Expired Press IDs",
    value: "156",
    icon: AlertCircle,
    description: "Renewal needed",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    title: "New Applications",
    value: "124",
    icon: TrendingUp,
    description: "This month",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
]

export function ReportersStatsCards() {
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
