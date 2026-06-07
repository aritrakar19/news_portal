import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

const GROWTH_DATA = [
  { name: "Week 1", signups: 2, active: 1 },
  { name: "Week 2", signups: 5, active: 3 },
  { name: "Week 3", signups: 9, active: 5 },
  { name: "Week 4", signups: 15, active: 9 },
  { name: "Week 5", signups: 19, active: 11 },
  { name: "Week 6", signups: 24, active: 14 },
]

export function ReferralGrowthChart() {
  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6 h-full flex flex-col">
      <h3 className="text-lg font-heading font-bold mb-6">Network Growth</h3>
      
      <div className="flex-1 min-h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
          <AreaChart data={GROWTH_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSignups" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} />
            <Tooltip 
              contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
            />
            <Area type="monotone" dataKey="signups" name="Total Signups" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorSignups)" />
            <Area type="monotone" dataKey="active" name="Active Reporters" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorActive)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
