import { Users, FileCheck, FileText, IndianRupee, TrendingUp } from "lucide-react"

const METRICS = [
  {
    title: "Total Reporters",
    value: "1,248",
    trend: "+12%",
    subtitle: "Active on platform",
    icon: Users,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    title: "Pending Approvals",
    value: "42",
    trend: "-5%",
    subtitle: "Awaiting verification",
    icon: FileCheck,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-100 dark:bg-amber-900/30",
  },
  {
    title: "Published News",
    value: "8,405",
    trend: "+24%",
    subtitle: "Articles & Videos",
    icon: FileText,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    title: "Total Revenue",
    value: "₹12.4L",
    trend: "+18%",
    subtitle: "Monthly gross",
    icon: IndianRupee,
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    title: "Monthly Growth",
    value: "24.5%",
    trend: "+2.1%",
    subtitle: "Platform expansion",
    icon: TrendingUp,
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-100 dark:bg-rose-900/30",
  },
]

export function AdminStatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {METRICS.map((stat, idx) => {
        const Icon = stat.icon
        return (
          <div key={idx} className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${stat.bg}`}>
                <Icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300`}>
                {stat.trend}
              </span>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{stat.title}</p>
              <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white mt-1">{stat.value}</h3>
              <p className="text-xs text-muted-foreground mt-1">{stat.subtitle}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
