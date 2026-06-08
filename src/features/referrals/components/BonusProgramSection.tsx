import { Trophy, Target, Award, Star } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { useTranslation } from "react-i18next"

export function BonusProgramSection() {
  const { t } = useTranslation()

  return (
    <div className="bg-slate-900 text-white border border-slate-800 shadow-lg rounded-xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="p-6 border-b border-slate-800 bg-slate-950/50 relative z-10 flex items-center gap-3">
        <Trophy className="w-6 h-6 text-amber-400" />
        <h3 className="font-heading font-bold text-xl">{t("referrals.bonus.title", "Bonus Rewards Program")}</h3>
      </div>
      
      <div className="p-6 space-y-8 relative z-10">
        
        {/* Active Milestone */}
        <div>
          <div className="flex justify-between items-end mb-2">
            <div>
              <p className="text-sm font-semibold text-slate-300">{t("referrals.bonus.nextMilestone", "Next Milestone:")} <span className="text-white">{t("referrals.bonus.milestoneName", "Network Builder")}</span></p>
              <p className="text-xs text-slate-400 mt-1">{t("referrals.bonus.milestoneDesc", "Reach 20 active reporters to unlock a ₹5,000 cash bonus.")}</p>
            </div>
            <span className="text-sm font-bold text-emerald-400">14 / 20</span>
          </div>
          <Progress value={70} className="h-2 bg-slate-800 [&>div]:bg-emerald-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-3">
              <Target className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="font-bold text-sm text-slate-200">{t("referrals.bonus.joinTitle", "Join Bonus")}</h4>
            <p className="text-xs text-slate-400 mt-1 mb-2">{t("referrals.bonus.joinDesc", "Earned when a referee registers with your code.")}</p>
            <span className="mt-auto font-black text-xl text-blue-400">₹100</span>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-3">
              <Award className="w-6 h-6 text-emerald-400" />
            </div>
            <h4 className="font-bold text-sm text-slate-200">{t("referrals.bonus.activeTitle", "Active Bonus")}</h4>
            <p className="text-xs text-slate-400 mt-1 mb-2">{t("referrals.bonus.activeDesc", "Earned when your referee publishes their first news.")}</p>
            <span className="mt-auto font-black text-xl text-emerald-400">₹200</span>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute -right-2 -top-2">
              <Star className="w-10 h-10 text-amber-500/20 fill-amber-500/20" />
            </div>
            <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-3">
              <Trophy className="w-6 h-6 text-amber-400" />
            </div>
            <h4 className="font-bold text-sm text-amber-200">{t("referrals.bonus.revTitle", "Revenue Share")}</h4>
            <p className="text-xs text-amber-200/60 mt-1 mb-2">{t("referrals.bonus.revDesc", "Earn a percentage of your active reporters' revenue.")}</p>
            <span className="mt-auto font-black text-xl text-amber-400">{t("referrals.bonus.revAmount", "5% Lifetime")}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
