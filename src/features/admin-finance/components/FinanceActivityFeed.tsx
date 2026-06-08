import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { mockFinanceActivity } from "../data/mockFinance"
import { Banknote, ShieldAlert, ArrowUpRight, ArrowDownLeft } from "lucide-react"
import { useTranslation } from "react-i18next"

export function FinanceActivityFeed() {
  const { t } = useTranslation()
  const getIconAndColor = (type: string) => {
    switch (type) {
      case "withdrawal":
        return { icon: ArrowUpRight, color: "text-amber-500", bg: "bg-amber-500/10" }
      case "revenue":
        return { icon: ArrowDownLeft, color: "text-emerald-500", bg: "bg-emerald-500/10" }
      case "commission":
        return { icon: Banknote, color: "text-blue-500", bg: "bg-blue-500/10" }
      case "admin":
        return { icon: ShieldAlert, color: "text-rose-500", bg: "bg-rose-500/10" }
      default:
        return { icon: Banknote, color: "text-slate-500", bg: "bg-slate-500/10" }
    }
  }

  return (
    <Card className="border shadow-sm h-full flex flex-col">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">{t("admin.finance.activity.title", "Finance Activity")}</CardTitle>
        <CardDescription>{t("admin.finance.activity.subtitle", "Live stream of financial events")}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-6">
          {mockFinanceActivity.map((activity) => {
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
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-muted-foreground">
                      {activity.timestamp}
                    </p>
                    {activity.amount && (
                      <p className={`text-xs font-bold ${color}`}>
                        {activity.type === 'revenue' ? '+' : '-'}₹{activity.amount.toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
