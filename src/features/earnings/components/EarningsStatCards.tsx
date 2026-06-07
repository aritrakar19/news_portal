import { Wallet, Landmark, Clock, ArrowDownToLine } from "lucide-react"

const STATS = [
  {
    title: "Total Earnings",
    value: "₹45,200",
    subtitle: "Lifetime revenue",
    icon: Landmark,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    title: "Pending Earnings",
    value: "₹4,250",
    subtitle: "In review process",
    icon: Clock,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-100 dark:bg-amber-900/30",
  },
  {
    title: "Withdrawn Amount",
    value: "₹28,550",
    subtitle: "Successfully transferred",
    icon: ArrowDownToLine,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    title: "Wallet Balance",
    value: "₹12,400",
    subtitle: "Available to withdraw",
    icon: Wallet,
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-100 dark:bg-purple-900/30",
  },
]

export function EarningsStatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {STATS.map((stat, idx) => {
        const Icon = stat.icon
        return (
          <div key={idx} className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6 flex items-center gap-4 transition-all hover:shadow-md">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${stat.bg}`}>
              <Icon className={`w-7 h-7 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.title}</p>
              <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white mt-1">{stat.value}</h3>
              <p className="text-xs text-muted-foreground mt-1">{stat.subtitle}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
