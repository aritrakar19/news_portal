import { 
  ResponsiveContainer, AreaChart, Area, 
  XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell, Legend
} from "recharts"
import { mockUserGrowth, mockRoleDistribution } from "../data/mockUsers"

const COLORS = ['#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444', '#10b981']

export function UserAnalytics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* User Growth Trend */}
      <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6 lg:col-span-2">
        <h3 className="text-lg font-heading font-bold mb-6">User Growth & Engagement</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <AreaChart data={mockUserGrowth} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} />
              <Tooltip contentStyle={{ borderRadius: "8px" }} />
              <Area type="monotone" dataKey="users" stroke="#3b82f6" fillOpacity={1} fill="url(#colorUsers)" name="Total Users" />
              <Area type="monotone" dataKey="active" stroke="#10b981" fillOpacity={1} fill="url(#colorActive)" name="Active Users" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Role Distribution */}
      <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6 lg:col-span-1">
        <h3 className="text-lg font-heading font-bold mb-6">Role Distribution</h3>
        <div className="h-[300px] w-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
            <PieChart>
              <Pie
                data={mockRoleDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
                nameKey="name"
              >
                {mockRoleDistribution.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: "8px" }} />
              <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px' }}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
