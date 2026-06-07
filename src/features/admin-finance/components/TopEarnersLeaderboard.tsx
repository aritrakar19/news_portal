import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { mockTopEarners } from "../data/mockFinance"
import { Trophy, TrendingUp, Eye } from "lucide-react"

export function TopEarnersLeaderboard() {
  return (
    <Card className="border shadow-sm h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-amber-500" />
          <CardTitle className="text-xl">Top Earners</CardTitle>
        </div>
        <CardDescription>Highest earning reporters this month</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-6">
          {mockTopEarners.map((earner, index) => (
            <div key={earner.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar className="h-10 w-10 border-2 border-background shadow-sm">
                    <AvatarImage src={earner.avatar} alt={earner.name} />
                    <AvatarFallback>{earner.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className={`absolute -top-2 -left-2 h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold shadow-sm border-2 border-white dark:border-slate-900 ${
                    index === 0 ? 'bg-amber-400 text-amber-950' :
                    index === 1 ? 'bg-slate-300 text-slate-800' :
                    'bg-amber-700 text-amber-50'
                  }`}>
                    {index + 1}
                  </div>
                </div>
                <div>
                  <div className="font-medium">{earner.name}</div>
                  <div className="text-xs text-muted-foreground">{earner.state}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center justify-end gap-1">
                  <TrendingUp className="h-3 w-3" />
                  ₹{earner.earnings.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground flex items-center justify-end gap-1 mt-0.5">
                  <Eye className="h-3 w-3" />
                  {earner.views.toLocaleString()} views
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
