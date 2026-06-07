import { Newspaper, Video, Users } from "lucide-react"

const SOURCES = [
  {
    title: "News Revenue",
    amount: "₹28,400",
    percentage: "62%",
    icon: Newspaper,
    trend: "+12.5%",
    trendUp: true,
  },
  {
    title: "Video Revenue",
    amount: "₹12,800",
    percentage: "28%",
    icon: Video,
    trend: "+24.0%",
    trendUp: true,
  },
  {
    title: "Referral Revenue",
    amount: "₹4,000",
    percentage: "10%",
    icon: Users,
    trend: "-2.5%",
    trendUp: false,
  },
]

export function RevenueSourceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {SOURCES.map((source, idx) => {
        const Icon = source.icon
        return (
          <div key={idx} className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <Icon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${source.trendUp ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                {source.trend}
              </span>
            </div>
            
            <h4 className="text-muted-foreground text-sm font-medium">{source.title}</h4>
            <div className="flex items-end gap-2 mt-1">
              <span className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">{source.amount}</span>
              <span className="text-sm font-medium text-slate-500 mb-1">({source.percentage})</span>
            </div>
            
            {/* Progress bar mock */}
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-4 overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: source.percentage }}></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
