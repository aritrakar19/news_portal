import { 
  ResponsiveContainer, Area, 
  ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, CartesianGrid
} from "recharts"
import { mockAdTrends } from "../data/mockAds"
import { useTranslation } from "react-i18next"

export function CampaignAnalytics() {
  const { t } = useTranslation()
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Revenue & Impressions Trend */}
      <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6">
        <h3 className="text-lg font-heading font-bold mb-6">{t("admin.ads.analytics.revenueImpressions", "Revenue & Impressions")}</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <ComposedChart data={mockAdTrends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} dy={10} />
              <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} />
              <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} />
              <Tooltip contentStyle={{ borderRadius: "8px" }} cursor={{ fill: "#f1f5f9" }} />
              <Area yAxisId="right" type="monotone" dataKey="impressions" fill="#f3e8ff" stroke="#a855f7" name={t("admin.ads.analytics.impressions", "Impressions")} />
              <Bar yAxisId="left" dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} name={t("admin.ads.analytics.revenue", "Revenue (₹)")} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Clicks & CTR Trend */}
      <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6">
        <h3 className="text-lg font-heading font-bold mb-6">{t("admin.ads.analytics.clickPerformance", "Click Performance & CTR")}</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <ComposedChart data={mockAdTrends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} dy={10} />
              <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} />
              <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} />
              <Tooltip contentStyle={{ borderRadius: "8px" }} cursor={{ fill: "#f1f5f9" }} />
              <Bar yAxisId="left" dataKey="clicks" fill="#3b82f6" radius={[4, 4, 0, 0]} name={t("admin.ads.analytics.totalClicks", "Total Clicks")} />
              <Line yAxisId="right" type="monotone" dataKey="ctr" stroke="#f59e0b" strokeWidth={3} name={t("admin.ads.analytics.ctr", "CTR (%)")} dot={{ r: 4, strokeWidth: 2 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
