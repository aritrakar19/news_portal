import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts"
import { useTranslation } from "react-i18next"

export function EarningsBreakdownCard() {
  const { t } = useTranslation()

  const DATA = [
    { name: t("wallet.breakdown.news", "News Views"), value: 24200, color: "#3b82f6" }, // blue-500
    { name: t("wallet.breakdown.video", "Video Views"), value: 12800, color: "#ef4444" }, // red-500
    { name: t("wallet.breakdown.referrals", "Referrals"), value: 4000, color: "#10b981" }, // emerald-500
    { name: t("wallet.breakdown.bonuses", "Bonuses"), value: 4200, color: "#f59e0b" }, // amber-500
  ]

  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6 h-full flex flex-col">
      <h3 className="text-lg font-heading font-bold mb-6">{t("wallet.breakdown.title", "Earnings Breakdown")}</h3>
      
      <div className="h-[200px] w-full flex-shrink-0">
        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
          <PieChart>
            <Pie
              data={DATA}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: any) => [`₹${value}`, t("dashboard.earnings.amount", "Amount")]}
              contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-auto pt-6 space-y-3">
        {DATA.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-muted-foreground">{item.name}</span>
            </div>
            <span className="font-semibold text-slate-900 dark:text-white">₹{item.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
