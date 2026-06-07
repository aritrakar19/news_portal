import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle, Send, Edit, Clock } from "lucide-react"

const activities = [
  {
    id: 1,
    action: "Approved",
    story: "Infrastructure Project in Mumbai",
    editor: "Sarah Jenkins",
    time: "10 mins ago",
    icon: CheckCircle2,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    id: 2,
    action: "Published",
    story: "Infrastructure Project in Mumbai",
    editor: "System",
    time: "9 mins ago",
    icon: Send,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    id: 3,
    action: "Requested Changes",
    story: "Water Shortage Protest",
    editor: "Rahul M.",
    time: "1 hour ago",
    icon: Edit,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    id: 4,
    action: "Rejected",
    story: "Fake University Busted",
    editor: "Priya S.",
    time: "3 hours ago",
    icon: XCircle,
    color: "text-rose-500",
    bg: "bg-rose-500/10"
  },
  {
    id: 5,
    action: "Under Review",
    story: "Tech Startups Boom",
    editor: "Sarah Jenkins",
    time: "4 hours ago",
    icon: Clock,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  }
]

export function RecentEditorialActivity() {
  return (
    <Card className="col-span-1 border shadow-sm h-full">
      <CardHeader>
        <CardTitle className="text-xl">Editorial Activity</CardTitle>
        <CardDescription>
          Live feed of moderation actions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity) => {
            const Icon = activity.icon
            return (
              <div key={activity.id} className="flex gap-4">
                <div className={`mt-0.5 h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${activity.bg}`}>
                  <Icon className={`h-4 w-4 ${activity.color}`} />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm">
                    <span className="font-medium text-foreground">{activity.editor}</span>
                    {" "}{activity.action.toLowerCase()}{" "}
                    <span className="font-medium text-foreground">"{activity.story}"</span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
