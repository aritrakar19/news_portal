import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Megaphone, IndianRupee, Eye, MousePointerClick, Percent, LayoutTemplate } from "lucide-react"

const stats = [
  {
    title: "Active Campaigns",
    value: "142",
    icon: Megaphone,
    description: "Running across network",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Total Ad Revenue",
    value: "₹12,45,000",
    icon: IndianRupee,
    description: "+22% vs last month",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Total Impressions",
    value: "45.2M",
    icon: Eye,
    description: "Across all placements",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Total Clicks",
    value: "1.4M",
    icon: MousePointerClick,
    description: "Driven to advertisers",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Average CTR",
    value: "3.1%",
    icon: Percent,
    description: "Industry average: 1.5%",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Sponsored Posts",
    value: "28",
    icon: LayoutTemplate,
    description: "High engagement format",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
]

export function AdStatsCards() {
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
