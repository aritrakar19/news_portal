import { UploadCloud, Video, CreditCard, ShieldCheck, Users } from "lucide-react"

const ACTIONS = [
  { name: "Upload Article", icon: UploadCloud, color: "bg-blue-500", href: "/reporter/upload" },
  { name: "Upload Video", icon: Video, color: "bg-red-500", href: "/reporter/upload" },
  { name: "Withdraw Earnings", icon: CreditCard, color: "bg-emerald-500", href: "/reporter/wallet" },
  { name: "Digital Press ID", icon: ShieldCheck, color: "bg-indigo-500", href: "/reporter/press-id" },
  { name: "Referrals", icon: Users, color: "bg-purple-500", href: "/reporter/referrals" },
]

export function QuickActions() {
  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6">
      <h3 className="font-heading font-bold text-lg mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {ACTIONS.map((action, i) => (
          <a
            key={i}
            href={action.href}
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-border/50 group"
          >
            <div className={`w-12 h-12 ${action.color} text-white rounded-full flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform`}>
              <action.icon className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-center text-foreground">{action.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
