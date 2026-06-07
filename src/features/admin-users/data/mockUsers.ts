export type UserRole = "Super Admin" | "Admin" | "Editor" | "Reporter" | "Viewer"
export type UserStatus = "Active" | "Pending" | "Suspended" | "Blocked"

export interface SystemUser {
  id: string
  fullName: string
  email: string
  mobile: string
  avatar: string
  role: UserRole
  address: string
  state: string
  district: string
  registrationDate: string
  lastLogin: string
  status: UserStatus
  activity: {
    totalNewsSubmitted: number
    totalEarnings: number
    referralCount: number
  }
  permissions: {
    newsManagement: boolean
    reporterManagement: boolean
    earningsManagement: boolean
    adsManagement: boolean
    settingsAccess: boolean
  }
}

export interface UserGrowthTrend {
  month: string
  users: number
  active: number
}

export interface RoleDistribution {
  name: string
  value: number
}

export interface UserActivityLog {
  id: string
  type: "registration" | "login" | "role_change" | "suspension" | "update"
  description: string
  timestamp: string
}

export const mockSystemUsers: SystemUser[] = [
  {
    id: "USR-001-SA",
    fullName: "Aritra Chief",
    email: "aritra@publicnews.com",
    mobile: "+91 9876543210",
    avatar: "https://i.pravatar.cc/150?u=aritra",
    role: "Super Admin",
    address: "HQ Building, Cyber City",
    state: "Haryana",
    district: "Gurugram",
    registrationDate: "2023-01-01T10:00:00Z",
    lastLogin: new Date().toISOString(),
    status: "Active",
    activity: {
      totalNewsSubmitted: 0,
      totalEarnings: 0,
      referralCount: 50
    },
    permissions: {
      newsManagement: true,
      reporterManagement: true,
      earningsManagement: true,
      adsManagement: true,
      settingsAccess: true
    }
  },
  {
    id: "USR-102-ED",
    fullName: "Priya Sharma",
    email: "priya.editor@publicnews.com",
    mobile: "+91 8765432109",
    avatar: "https://i.pravatar.cc/150?u=priya",
    role: "Editor",
    address: "Andheri West",
    state: "Maharashtra",
    district: "Mumbai",
    registrationDate: "2023-05-15T09:30:00Z",
    lastLogin: new Date(Date.now() - 3600000).toISOString(),
    status: "Active",
    activity: {
      totalNewsSubmitted: 450,
      totalEarnings: 0,
      referralCount: 12
    },
    permissions: {
      newsManagement: true,
      reporterManagement: false,
      earningsManagement: false,
      adsManagement: false,
      settingsAccess: false
    }
  },
  {
    id: "USR-204-AD",
    fullName: "Vikram Tech",
    email: "vikram.admin@publicnews.com",
    mobile: "+91 7654321098",
    avatar: "https://i.pravatar.cc/150?u=vikram",
    role: "Admin",
    address: "Koramangala",
    state: "Karnataka",
    district: "Bengaluru",
    registrationDate: "2023-08-20T14:15:00Z",
    lastLogin: new Date(Date.now() - 86400000).toISOString(),
    status: "Active",
    activity: {
      totalNewsSubmitted: 0,
      totalEarnings: 0,
      referralCount: 5
    },
    permissions: {
      newsManagement: true,
      reporterManagement: true,
      earningsManagement: true,
      adsManagement: true,
      settingsAccess: false
    }
  },
  {
    id: "USR-505-RP",
    fullName: "Rahul Desai",
    email: "rahul.reporter@gmail.com",
    mobile: "+91 6543210987",
    avatar: "https://i.pravatar.cc/150?u=rahul",
    role: "Reporter",
    address: "Shivaji Nagar",
    state: "Maharashtra",
    district: "Pune",
    registrationDate: "2024-01-10T11:20:00Z",
    lastLogin: new Date(Date.now() - 172800000).toISOString(),
    status: "Suspended",
    activity: {
      totalNewsSubmitted: 45,
      totalEarnings: 12500,
      referralCount: 2
    },
    permissions: {
      newsManagement: false,
      reporterManagement: false,
      earningsManagement: false,
      adsManagement: false,
      settingsAccess: false
    }
  },
  {
    id: "USR-808-VW",
    fullName: "Amit Kumar",
    email: "amit.k@example.com",
    mobile: "+91 9988776655",
    avatar: "https://i.pravatar.cc/150?u=amit",
    role: "Viewer",
    address: "Civil Lines",
    state: "Delhi",
    district: "Central Delhi",
    registrationDate: "2024-05-01T08:00:00Z",
    lastLogin: new Date(Date.now() - 432000000).toISOString(),
    status: "Pending",
    activity: {
      totalNewsSubmitted: 0,
      totalEarnings: 0,
      referralCount: 0
    },
    permissions: {
      newsManagement: false,
      reporterManagement: false,
      earningsManagement: false,
      adsManagement: false,
      settingsAccess: false
    }
  }
]

export const mockUserGrowth: UserGrowthTrend[] = [
  { month: "Jan", users: 1500, active: 1200 },
  { month: "Feb", users: 1800, active: 1400 },
  { month: "Mar", users: 2200, active: 1750 },
  { month: "Apr", users: 2800, active: 2100 },
  { month: "May", users: 3500, active: 2800 },
  { month: "Jun", users: 4200, active: 3400 },
]

export const mockRoleDistribution: RoleDistribution[] = [
  { name: "Reporter", value: 3800 },
  { name: "Viewer", value: 350 },
  { name: "Editor", value: 45 },
  { name: "Admin", value: 4 },
  { name: "Super Admin", value: 1 },
]

export const mockUserActivity: UserActivityLog[] = [
  {
    id: "LOG-1",
    type: "suspension",
    description: "Account USR-505-RP was suspended by Aritra Chief",
    timestamp: "10 mins ago"
  },
  {
    id: "LOG-2",
    type: "role_change",
    description: "Priya Sharma was promoted to Editor",
    timestamp: "2 hours ago"
  },
  {
    id: "LOG-3",
    type: "registration",
    description: "New user Amit Kumar registered as Viewer",
    timestamp: "5 hours ago"
  },
  {
    id: "LOG-4",
    type: "login",
    description: "Vikram Tech logged in from new device (MacBook Pro)",
    timestamp: "1 day ago"
  }
]
