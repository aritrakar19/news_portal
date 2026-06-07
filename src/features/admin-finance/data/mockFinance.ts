export type WithdrawalStatus = "Pending" | "Processing" | "Completed" | "Rejected"
export type EarningsStatus = "Active" | "Hold" | "Suspended"

export interface RevenueTrend {
  month: string
  revenue: number
  payouts: number
}

export interface CategoryRevenue {
  name: string
  value: number
}

export interface StateRevenue {
  name: string
  revenue: number
}

export interface ReporterEarnings {
  id: string
  name: string
  avatar: string
  totalEarnings: number
  pendingEarnings: number
  withdrawnAmount: number
  availableBalance: number
  status: EarningsStatus
}

export interface WithdrawalRequest {
  id: string
  reporterId: string
  reporterName: string
  avatar: string
  requestDate: string
  amount: number
  method: string
  status: WithdrawalStatus
}

export interface TopEarner {
  id: string
  name: string
  avatar: string
  state: string
  views: number
  earnings: number
}

export interface FinanceActivity {
  id: string
  type: "withdrawal" | "revenue" | "commission" | "admin"
  description: string
  amount?: number
  timestamp: string
}

export const mockRevenueTrends: RevenueTrend[] = [
  { month: "Jan", revenue: 45000, payouts: 32000 },
  { month: "Feb", revenue: 52000, payouts: 38000 },
  { month: "Mar", revenue: 48000, payouts: 35000 },
  { month: "Apr", revenue: 61000, payouts: 45000 },
  { month: "May", revenue: 59000, payouts: 42000 },
  { month: "Jun", revenue: 75000, payouts: 55000 },
]

export const mockCategoryRevenue: CategoryRevenue[] = [
  { name: "Advertisement", value: 45 },
  { name: "Sponsored", value: 25 },
  { name: "Premium", value: 15 },
  { name: "Video Ads", value: 10 },
  { name: "Referral", value: 5 },
]

export const mockStateRevenue: StateRevenue[] = [
  { name: "Maharashtra", revenue: 125000 },
  { name: "Uttar Pradesh", revenue: 98000 },
  { name: "Gujarat", revenue: 85000 },
  { name: "Karnataka", revenue: 72000 },
  { name: "Delhi", revenue: 65000 },
]

export const mockReporterEarnings: ReporterEarnings[] = [
  {
    id: "REP-9821-432",
    name: "Aarav Sharma",
    avatar: "https://i.pravatar.cc/150?u=aarav",
    totalEarnings: 145000,
    pendingEarnings: 12000,
    withdrawnAmount: 120000,
    availableBalance: 13000,
    status: "Active"
  },
  {
    id: "REP-1290-567",
    name: "Rahul Verma",
    avatar: "https://i.pravatar.cc/150?u=rahul",
    totalEarnings: 85000,
    pendingEarnings: 5000,
    withdrawnAmount: 80000,
    availableBalance: 0,
    status: "Hold"
  },
  {
    id: "REP-7890-345",
    name: "Anjali Desai",
    avatar: "https://i.pravatar.cc/150?u=anjali",
    totalEarnings: 210000,
    pendingEarnings: 15000,
    withdrawnAmount: 180000,
    availableBalance: 15000,
    status: "Active"
  },
  {
    id: "REP-5678-123",
    name: "Sneha Reddy",
    avatar: "https://i.pravatar.cc/150?u=sneha",
    totalEarnings: 45000,
    pendingEarnings: 45000,
    withdrawnAmount: 0,
    availableBalance: 45000,
    status: "Suspended"
  }
]

export const mockWithdrawalRequests: WithdrawalRequest[] = [
  {
    id: "WD-2024-892",
    reporterId: "REP-9821-432",
    reporterName: "Aarav Sharma",
    avatar: "https://i.pravatar.cc/150?u=aarav",
    requestDate: new Date().toISOString(),
    amount: 10000,
    method: "Bank Transfer (NEFT)",
    status: "Pending"
  },
  {
    id: "WD-2024-893",
    reporterId: "REP-2345-678",
    reporterName: "Karthik Nair",
    avatar: "https://i.pravatar.cc/150?u=karthik",
    requestDate: new Date(Date.now() - 86400000).toISOString(),
    amount: 25000,
    method: "UPI",
    status: "Processing"
  },
  {
    id: "WD-2024-891",
    reporterId: "REP-7890-345",
    reporterName: "Anjali Desai",
    avatar: "https://i.pravatar.cc/150?u=anjali",
    requestDate: new Date(Date.now() - 172800000).toISOString(),
    amount: 15000,
    method: "Bank Transfer (IMPS)",
    status: "Completed"
  }
]

export const mockTopEarners: TopEarner[] = [
  {
    id: "REP-7890-345",
    name: "Anjali Desai",
    avatar: "https://i.pravatar.cc/150?u=anjali",
    state: "Maharashtra",
    views: 1250000,
    earnings: 210000
  },
  {
    id: "REP-9821-432",
    name: "Aarav Sharma",
    avatar: "https://i.pravatar.cc/150?u=aarav",
    state: "Maharashtra",
    views: 890000,
    earnings: 145000
  },
  {
    id: "REP-3456-789",
    name: "Vikram Singh",
    avatar: "https://i.pravatar.cc/150?u=vikram",
    state: "Rajasthan",
    views: 750000,
    earnings: 120000
  }
]

export const mockFinanceActivity: FinanceActivity[] = [
  {
    id: "ACT-1",
    type: "withdrawal",
    description: "Withdrawal processed for Karthik Nair",
    amount: 25000,
    timestamp: "10 mins ago"
  },
  {
    id: "ACT-2",
    type: "commission",
    description: "Referral commission paid to Rahul Verma",
    amount: 1500,
    timestamp: "1 hour ago"
  },
  {
    id: "ACT-3",
    type: "admin",
    description: "Admin suspended payments for Sneha Reddy",
    timestamp: "3 hours ago"
  },
  {
    id: "ACT-4",
    type: "revenue",
    description: "Ad network payout received (Google AdSense)",
    amount: 450000,
    timestamp: "1 day ago"
  }
]
