import { CheckCircle2, Clock } from "lucide-react"

export function VerificationPanel() {
  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border bg-slate-50 dark:bg-slate-900/50">
        <h3 className="font-heading font-bold text-lg">Verification Status</h3>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-7 h-7 text-emerald-600 dark:text-emerald-500" />
          </div>
          <div>
            <p className="text-xl font-bold text-slate-900 dark:text-white">Active & Verified</p>
            <p className="text-sm text-muted-foreground">Your Press ID is currently valid.</p>
          </div>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex justify-between py-2 border-b border-border/50">
            <span className="text-muted-foreground">Verification Authority</span>
            <span className="font-medium">PUBLIC NEWS 1 Central</span>
          </div>
          <div className="flex justify-between py-2 border-b border-border/50">
            <span className="text-muted-foreground">Clearance Level</span>
            <span className="font-medium">Level 3 (National)</span>
          </div>
          <div className="flex justify-between py-2 border-b border-border/50">
            <span className="text-muted-foreground">Background Check</span>
            <span className="font-medium text-emerald-600 dark:text-emerald-500">Passed</span>
          </div>
          
          <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg">
            <Clock className="w-4 h-4 shrink-0" />
            <p>Last verified automatically on June 7, 2026 at 09:00 AM IST.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
