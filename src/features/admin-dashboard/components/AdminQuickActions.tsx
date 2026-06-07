import { UserCheck, FileSearch, Megaphone } from "lucide-react"

export function AdminQuickActions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <button className="bg-slate-900 dark:bg-slate-800 text-white border border-slate-800 hover:border-slate-700 shadow-lg rounded-xl p-6 flex items-center justify-between group transition-all">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <UserCheck className="w-6 h-6 text-blue-400" />
          </div>
          <div className="text-left">
            <h4 className="font-bold text-lg">Approve Reporters</h4>
            <p className="text-xs text-blue-200">12 Pending Applications</p>
          </div>
        </div>
      </button>

      <button className="bg-slate-900 dark:bg-slate-800 text-white border border-slate-800 hover:border-slate-700 shadow-lg rounded-xl p-6 flex items-center justify-between group transition-all">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <FileSearch className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="text-left">
            <h4 className="font-bold text-lg">Review News</h4>
            <p className="text-xs text-emerald-200">45 Awaiting Review</p>
          </div>
        </div>
      </button>

      <button className="bg-slate-900 dark:bg-slate-800 text-white border border-slate-800 hover:border-slate-700 shadow-lg rounded-xl p-6 flex items-center justify-between group transition-all">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Megaphone className="w-6 h-6 text-purple-400" />
          </div>
          <div className="text-left">
            <h4 className="font-bold text-lg">Manage Ads</h4>
            <p className="text-xs text-purple-200">Active Campaigns: 8</p>
          </div>
        </div>
      </button>
    </div>
  )
}
