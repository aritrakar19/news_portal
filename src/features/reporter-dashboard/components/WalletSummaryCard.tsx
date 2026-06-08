import { Card, CardContent } from "@/components/ui/card"
import { Wallet, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

export function WalletSummaryCard() {
  const { t } = useTranslation()

  return (
    <Card className="border-border shadow-sm overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-8 w-full md:w-auto">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Wallet className="w-7 h-7 text-emerald-400" />
            </div>
            <div>
              <p className="text-slate-300 text-sm font-medium mb-1">{t("dashboard.wallet.availableBalance", "Available Balance")}</p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight">₹12,400</h2>
            </div>
          </div>
          
          <div className="h-12 w-px bg-white/20 hidden md:block"></div>
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Clock className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <p className="text-slate-300 text-sm font-medium mb-1">{t("dashboard.wallet.pendingBalance", "Pending Balance")}</p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-200">₹4,250</h2>
            </div>
          </div>
        </div>
        
        <Button className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 h-12 shadow-lg shadow-emerald-500/20">
          {t("dashboard.wallet.withdrawFunds", "Withdraw Funds")}
        </Button>
      </CardContent>
    </Card>
  )
}
