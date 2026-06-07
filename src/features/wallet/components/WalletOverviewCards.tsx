import { Wallet, ArrowDownToLine, Clock, PiggyBank } from "lucide-react"

export function WalletOverviewCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Highlighted Available Balance Card */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border border-slate-700 shadow-lg rounded-xl p-6 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl"></div>
        <div className="flex justify-between items-start mb-4 relative z-10">
          <div>
            <p className="text-sm font-medium text-slate-300 uppercase tracking-wider">Available Balance</p>
            <h3 className="text-3xl font-heading font-black mt-1 text-emerald-400">₹12,400</h3>
          </div>
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
            <Wallet className="w-6 h-6 text-emerald-400" />
          </div>
        </div>
        <p className="text-xs text-slate-400 relative z-10">Ready for withdrawal</p>
      </div>

      {/* Pending Balance */}
      <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Pending Clearance</p>
            <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white mt-1">₹4,250</h3>
          </div>
          <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
            <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">Will clear in 2-3 business days</p>
      </div>

      {/* Total Withdrawn */}
      <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Total Withdrawn</p>
            <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white mt-1">₹28,550</h3>
          </div>
          <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <ArrowDownToLine className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">Lifetime successful withdrawals</p>
      </div>

      {/* Lifetime Earnings */}
      <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Lifetime Earnings</p>
            <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white mt-1">₹45,200</h3>
          </div>
          <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
            <PiggyBank className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">Total revenue generated</p>
      </div>
    </div>
  )
}
