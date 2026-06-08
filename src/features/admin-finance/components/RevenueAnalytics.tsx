import { 
  ResponsiveContainer, AreaChart, Area, 
  ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell
} from "recharts"
import { mockRevenueTrends, mockCategoryRevenue, mockStateRevenue } from "../data/mockFinance"
import { useTranslation } from "react-i18next"

const COLORS = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ec4899']

export function RevenueAnalytics() {
  const { t } = useTranslation()
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Monthly Revenue Trend vs Payouts */}
      <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6 lg:col-span-2">
        <h3 className="text-lg font-heading font-bold mb-6">{t("admin.finance.analytics.revenueVsPayouts", "Revenue vs Reporter Payouts (₹)")}</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <ComposedChart data={mockRevenueTrends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} />
              <Tooltip contentStyle={{ borderRadius: "8px" }} cursor={{ fill: "#f1f5f9" }} />
              <Bar dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} name={t("admin.finance.analytics.totalRevenue", "Total Revenue")} />
              <Line type="monotone" dataKey="payouts" stroke="#3b82f6" strokeWidth={3} name={t("admin.finance.analytics.reporterPayouts", "Reporter Payouts")} dot={{ r: 4, strokeWidth: 2 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Category Revenue Breakdown */}
      <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6">
        <h3 className="text-lg font-heading font-bold mb-6">{t("admin.finance.analytics.revenueBySource", "Revenue by Source (%)")}</h3>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <PieChart>
              <Pie
                data={mockCategoryRevenue}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                nameKey="name"
              >
                {mockCategoryRevenue.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: "8px" }} formatter={(value: any) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {mockCategoryRevenue.map((item, index) => (
             <div key={item.name} className="flex items-center gap-2 text-xs text-muted-foreground">
               <div className="h-3 w-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
               {item.name}
             </div>
          ))}
        </div>
      </div>

      {/* State-wise Revenue */}
      <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6">
        <h3 className="text-lg font-heading font-bold mb-6">{t("admin.finance.analytics.topRegions", "Top Regions (Revenue)")}</h3>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <AreaChart data={mockStateRevenue} layout="vertical" margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
              <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} />
              <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} width={80} />
              <Tooltip contentStyle={{ borderRadius: "8px" }} formatter={(value: any) => `₹${Number(value).toLocaleString()}`} />
              <Area type="monotone" dataKey="revenue" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  )
}
