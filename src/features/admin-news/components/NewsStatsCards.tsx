import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Clock, CheckCircle2, XCircle, Send, Zap } from "lucide-react"

const stats = [
  {
    title: "Total Submitted",
    value: "14,592",
    icon: FileText,
    description: "+324 this week",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Pending Review",
    value: "128",
    icon: Clock,
    description: "Requires attention",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Approved",
    value: "12,104",
    icon: CheckCircle2,
    description: "Ready to publish",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Rejected",
    value: "412",
    icon: XCircle,
    description: "Failed guidelines",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    title: "Published Today",
    value: "84",
    icon: Send,
    description: "Live on platform",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Breaking Requests",
    value: "3",
    icon: Zap,
    description: "High priority",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
]

export function NewsStatsCards() {
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
