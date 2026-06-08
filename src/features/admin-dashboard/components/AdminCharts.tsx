import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"
import { useTranslation } from "react-i18next"

const GROWTH_DATA = [
  { name: "Jan", reporters: 400 },
  { name: "Feb", reporters: 650 },
  { name: "Mar", reporters: 850 },
  { name: "Apr", reporters: 950 },
  { name: "May", reporters: 1100 },
  { name: "Jun", reporters: 1248 },
]

const ACTIVITY_DATA = [
  { name: "Mon", articles: 120, videos: 45 },
  { name: "Tue", articles: 150, videos: 60 },
  { name: "Wed", articles: 180, videos: 85 },
  { name: "Thu", articles: 140, videos: 50 },
  { name: "Fri", articles: 210, videos: 90 },
  { name: "Sat", articles: 95, videos: 120 },
  { name: "Sun", articles: 80, videos: 140 },
]

const REVENUE_DATA = [
  { name: "Week 1", revenue: 2.5 },
  { name: "Week 2", revenue: 3.8 },
  { name: "Week 3", revenue: 5.1 },
  { name: "Week 4", revenue: 12.4 },
]

export function AdminCharts() {
  const { t } = useTranslation()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Reporter Growth */}
      <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6 flex flex-col">
        <h3 className="text-sm font-heading font-bold mb-6 text-slate-500 uppercase tracking-wider">{t("admin.dashboard.charts.reporterGrowth", "Reporter Growth")}</h3>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <AreaChart data={GROWTH_DATA} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorReporters" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#94a3b8" }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#94a3b8" }} />
              <Tooltip contentStyle={{ borderRadius: "8px", fontSize: "12px" }} />
              <Area type="monotone" dataKey="reporters" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorReporters)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Content Activity */}
      <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6 flex flex-col">
        <h3 className="text-sm font-heading font-bold mb-6 text-slate-500 uppercase tracking-wider">{t("admin.dashboard.charts.pubActivity", "Publishing Activity")}</h3>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <BarChart data={ACTIVITY_DATA} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#94a3b8" }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#94a3b8" }} />
              <Tooltip contentStyle={{ borderRadius: "8px", fontSize: "12px" }} cursor={{ fill: "#f1f5f9" }} />
              <Bar dataKey="articles" stackId="a" fill="#10b981" radius={[0, 0, 4, 4]} />
              <Bar dataKey="videos" stackId="a" fill="#f59e0b" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Revenue Analytics */}
      <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6 flex flex-col">
        <h3 className="text-sm font-heading font-bold mb-6 text-slate-500 uppercase tracking-wider">{t("admin.dashboard.charts.revenue", "Revenue Analytics (₹ Lakhs)")}</h3>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <LineChart data={REVENUE_DATA} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#94a3b8" }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#94a3b8" }} />
              <Tooltip contentStyle={{ borderRadius: "8px", fontSize: "12px" }} />
              <Line type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 4, fill: "#8b5cf6", strokeWidth: 2, stroke: "#fff" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
