export type CampaignStatus = "Active" | "Scheduled" | "Paused" | "Expired" | "Draft"

export interface AdCampaign {
  id: string
  name: string
  advertiser: string
  type: string
  placement: string
  startDate: string
  endDate: string
  budget: number
  impressions: number
  clicks: number
  status: CampaignStatus
}

export interface AdTrendData {
  month: string
  revenue: number
  impressions: number
  clicks: number
  ctr: number
}

export interface TopAdvertiser {
  id: string
  name: string
  revenue: number
  campaigns: number
  avgCtr: number
  logo: string
}

export interface AdActivity {
  id: string
  type: "new" | "update" | "expired" | "revenue"
  description: string
  timestamp: string
}

export const mockCampaigns: AdCampaign[] = [
  {
    id: "CMP-2024-01",
    name: "Summer Sale 2024",
    advertiser: "MegaMart India",
    type: "Banner Ad",
    placement: "Homepage Hero",
    startDate: "2024-05-01",
    endDate: "2024-06-15",
    budget: 150000,
    impressions: 450000,
    clicks: 12500,
    status: "Active"
  },
  {
    id: "CMP-2024-02",
    name: "New SUV Launch",
    advertiser: "AutoDrive Motors",
    type: "Video Ad",
    placement: "Live TV Page",
    startDate: "2024-05-10",
    endDate: "2024-07-10",
    budget: 500000,
    impressions: 850000,
    clicks: 45000,
    status: "Active"
  },
  {
    id: "CMP-2024-03",
    name: "Monsoon Gadget Fest",
    advertiser: "TechWorld",
    type: "Sponsored Post",
    placement: "Tech Category",
    startDate: "2024-06-01",
    endDate: "2024-06-30",
    budget: 75000,
    impressions: 0,
    clicks: 0,
    status: "Scheduled"
  },
  {
    id: "CMP-2024-04",
    name: "Local Election Prep",
    advertiser: "Gov Dept",
    type: "Sidebar Ad",
    placement: "Politics Category",
    startDate: "2024-04-01",
    endDate: "2024-05-30",
    budget: 120000,
    impressions: 320000,
    clicks: 8500,
    status: "Paused"
  },
  {
    id: "CMP-2024-05",
    name: "Spring Fashion Week",
    advertiser: "StyleIcons",
    type: "Banner Ad",
    placement: "Category Pages",
    startDate: "2024-03-01",
    endDate: "2024-04-15",
    budget: 90000,
    impressions: 210000,
    clicks: 11000,
    status: "Expired"
  }
]

export const mockAdTrends: AdTrendData[] = [
  { month: "Jan", revenue: 120000, impressions: 1500000, clicks: 45000, ctr: 3.0 },
  { month: "Feb", revenue: 135000, impressions: 1800000, clicks: 52000, ctr: 2.8 },
  { month: "Mar", revenue: 150000, impressions: 2100000, clicks: 65000, ctr: 3.1 },
  { month: "Apr", revenue: 180000, impressions: 2400000, clicks: 78000, ctr: 3.25 },
  { month: "May", revenue: 210000, impressions: 2900000, clicks: 95000, ctr: 3.27 },
  { month: "Jun", revenue: 250000, impressions: 3500000, clicks: 120000, ctr: 3.42 },
]

export const mockTopAdvertisers: TopAdvertiser[] = [
  {
    id: "ADV-001",
    name: "AutoDrive Motors",
    revenue: 1250000,
    campaigns: 8,
    avgCtr: 4.2,
    logo: "https://ui-avatars.com/api/?name=Auto+Drive&background=0D8ABC&color=fff"
  },
  {
    id: "ADV-002",
    name: "MegaMart India",
    revenue: 850000,
    campaigns: 12,
    avgCtr: 3.1,
    logo: "https://ui-avatars.com/api/?name=Mega+Mart&background=e11d48&color=fff"
  },
  {
    id: "ADV-003",
    name: "TechWorld",
    revenue: 620000,
    campaigns: 5,
    avgCtr: 3.8,
    logo: "https://ui-avatars.com/api/?name=Tech+World&background=10b981&color=fff"
  }
]

export const mockAdActivity: AdActivity[] = [
  {
    id: "ACT-1",
    type: "new",
    description: "New campaign 'Monsoon Gadget Fest' scheduled",
    timestamp: "10 mins ago"
  },
  {
    id: "ACT-2",
    type: "revenue",
    description: "Daily ad revenue target reached (₹45,000)",
    timestamp: "2 hours ago"
  },
  {
    id: "ACT-3",
    type: "update",
    description: "MegaMart increased budget for 'Summer Sale 2024'",
    timestamp: "4 hours ago"
  },
  {
    id: "ACT-4",
    type: "expired",
    description: "Campaign 'Spring Fashion Week' has expired",
    timestamp: "1 day ago"
  }
]
