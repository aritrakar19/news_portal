import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { mockUserActivity } from "../data/mockUsers"
import { UserPlus, LogIn, ShieldQuestion, ShieldAlert, Edit3 } from "lucide-react"
import { useTranslation } from "react-i18next"

export function UserActivityFeed() {
  const { t } = useTranslation()
  const getIconAndColor = (type: string) => {
    switch (type) {
      case "registration":
        return { icon: UserPlus, color: "text-blue-500", bg: "bg-blue-500/10" }
      case "login":
        return { icon: LogIn, color: "text-emerald-500", bg: "bg-emerald-500/10" }
      case "role_change":
        return { icon: ShieldQuestion, color: "text-purple-500", bg: "bg-purple-500/10" }
      case "suspension":
        return { icon: ShieldAlert, color: "text-rose-500", bg: "bg-rose-500/10" }
      case "update":
        return { icon: Edit3, color: "text-amber-500", bg: "bg-amber-500/10" }
      default:
        return { icon: UserPlus, color: "text-slate-500", bg: "bg-slate-500/10" }
    }
  }

  return (
    <Card className="border shadow-sm h-full flex flex-col">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">{t("admin.users.activity.title", "System Activity Logs")}</CardTitle>
        <CardDescription>{t("admin.users.activity.subtitle", "Recent actions across the platform")}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-6">
          {mockUserActivity.map((activity) => {
            const { icon: Icon, color, bg } = getIconAndColor(activity.type)
            return (
              <div key={activity.id} className="flex gap-4">
                <div className={`mt-0.5 h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${bg}`}>
                  <Icon className={`h-4 w-4 ${color}`} />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {activity.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {activity.timestamp}
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
