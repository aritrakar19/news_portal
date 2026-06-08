import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Area, ComposedChart, Line } from "recharts"
import { useTranslation } from "react-i18next"

const MONTHLY_DATA = [
  { name: "Jan", earnings: 4200 },
  { name: "Feb", earnings: 5800 },
  { name: "Mar", earnings: 7500 },
  { name: "Apr", earnings: 6200 },
  { name: "May", earnings: 9100 },
  { name: "Jun", earnings: 12400 },
]

const VIEWS_EARNINGS_DATA = [
  { name: "Week 1", views: 45000, earnings: 4500 },
  { name: "Week 2", views: 52000, earnings: 5200 },
  { name: "Week 3", views: 38000, earnings: 3800 },
  { name: "Week 4", views: 65000, earnings: 6500 },
]

export function EarningsCharts() {
  const { t } = useTranslation()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Monthly Earnings Chart */}
      <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6">
        <h3 className="text-lg font-heading font-bold mb-6">{t("earnings.charts.monthly", "Monthly Earnings Overview")}</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <BarChart data={MONTHLY_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} tickFormatter={(value) => `₹${value}`} />
              <Tooltip 
                cursor={{ fill: "#f1f5f9" }}
                contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                formatter={(value: any) => [`₹${value}`, t("earnings.charts.tooltipEarnings", "Earnings")]}
              />
              <Bar dataKey="earnings" fill="#10b981" radius={[4, 4, 0, 0]} maxBarSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Views vs Earnings Chart */}
      <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6">
        <h3 className="text-lg font-heading font-bold mb-6">{t("earnings.charts.correlation", "Views vs Earnings Correlation")}</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <ComposedChart data={VIEWS_EARNINGS_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} dy={10} />
              <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} tickFormatter={(val) => `${val/1000}k`} />
              <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} tickFormatter={(val) => `₹${val}`} />
              <Tooltip 
                contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
              />
              <Area yAxisId="left" type="monotone" dataKey="views" fill="url(#colorViews)" stroke="#3b82f6" strokeWidth={2} name={t("earnings.charts.tooltipViews", "Total Views")} />
              <Line yAxisId="right" type="monotone" dataKey="earnings" stroke="#10b981" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} name={t("earnings.charts.tooltipEarnings", "Earnings")} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
